export default function handler(req, res) {
  const time = new Date().toLocaleTimeString();
  res.status(200).json({ time });
}