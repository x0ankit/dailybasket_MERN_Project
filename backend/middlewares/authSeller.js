import jwt from 'jsonwebtoken';

const authSeller = async (req, res, next) => {
  const { sellerToken } = req.cookies;

  if (!sellerToken) {
    return res.json({ success: false, message: 'Not Authorized' });
  }

  try {
    const tokenDecode = jwt.verify(sellerToken, process.env.JWT_SECRET);

    if (tokenDecode.email === process.env.SELLER_EMAIL) {
      req.user = { email: tokenDecode.email }; 
      
      next();
    } else {
      return res.json({ success: false, message: 'Not Authorized' });
    }
  } catch (error) {
    console.error('Seller Auth Error:', error.message);
    return res.json({ success: false, message: error.message });
  }
};

export default authSeller;