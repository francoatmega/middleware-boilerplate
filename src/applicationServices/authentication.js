exports.validatePermission = async (req, res, next) => {
  const authHeader = req.headers.authorization
  if (!authHeader) return res.status(401).json({ errors: [{ title: 'Invalid credentials', message: 'These credentials are invalid!' }] })

  const splitedAuthHeader = authHeader.split(' ')
  if (splitedAuthHeader.length !== 2) return res.status(401).json({ errors: [{ title: 'Invalid credentials', message: 'These credentials are invalid!' }] })

  if (splitedAuthHeader[1] !== process.env.API_SECRET) {
    return res.status(401).json({
      title: 'Invalid credentials',
      message: 'These credentials are invalid'
    })
  }
  return next()
}
