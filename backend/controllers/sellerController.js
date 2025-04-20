import jwt from 'jsonwebtoken';

// Login Seller : /api/seller/login
export const sellerLogin = async (req, res) => {
  try {
    const { email, password } = req.body;

    if (password === process.env.SELLER_PASSWORD && email === process.env.SELLER_EMAIL) {
      const token = jwt.sign({ email }, process.env.JWT_SECRET, { expiresIn: '7d' });

      res.cookie('sellerToken', token, {
        httpOnly: true,
        secure: process.env.NODE_ENV === 'production',
        sameSite: process.env.NODE_ENV === 'production' ? 'none' : 'strict',
        maxAge: 7 * 24 * 60 * 60 * 1000, // 7 days
      });

      return res.json({ success: true, message: "Logged In" });
    } else {
      return res.status(401).json({ success: false, message: "Invalid email or password" });
    }
  } catch (error) {
    console.error('Seller Login Error:', error.message);
    return res.status(500).json({ success: false, message: "Something went wrong" });
  }
}

// Seller isAuth : api/seller/is-auth

export const isSellerAuth = async (req, res) => {
  try {
    return res.json({ success: true, user: req.user });
  } catch (error) {
    console.error('Check Auth Error:', error.message);
    return res.json({ success: false, message: error.message });
  }
}


// Logout User : /api/user/logout

export const sellerLogout = async (req, res) => {
  try {
    res.clearCookie('sellerToken', {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: process.env.NODE_ENV === 'production' ? 'none' : 'strict',
    });

    return res.json({ success: true, message: "Logged Out" });
  } catch (error) {
    console.error("Logout Error:", error.message);
    return res.json({ success: false, message: error.message });
  }
}