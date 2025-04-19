import jwt from 'jsonwebtoken';

const authUser = async (req, res, next) => {
  const { token } = req.cookies;

  if (!token) {
    return res.json({ success: false, message: 'Not Authorized' });
  }

  try {
    const tokenDecode = jwt.verify(token, process.env.JWT_SECRET);

    if (tokenDecode.id) {
      if (!req.body) req.body = {}; // Fix for undefined body
      req.body.userId = tokenDecode.id;
    } else {
      return res.json({ success: false, message: 'Not Authorized' });
    }

    next();
  } catch (error) {
    console.error('JWT Verification Error:', error.message);
    return res.json({ success: false, message: 'Invalid Token' });
  }
};

export default authUser;