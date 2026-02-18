export default async function handler(req, res) {
  return res.status(200).json({
      version: process.env.APP_VERSION || 'unknown',
  });
}
