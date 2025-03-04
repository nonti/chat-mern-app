import jwt from 'jsonwebtoken';


const generateTokenAndSetCookie = (userId, res) => {
  const token = jwt.sign({userId}, process.env.JWT_SECRET, {
    expiresIn: '15d'
  })

  res.cookie('jwt', token,{
    maxAge: 15 * 24 * 60 * 60 * 1000,
    httpOnly: true, //prevent xss and cross-site scripting attacks
    sameSite: 'strict',
    secure: process.env.NODE_ENV === 'production', //only set cookie on production environment
  });
}

export default generateTokenAndSetCookie;