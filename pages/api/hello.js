export default function handler(req, res) {
  res.status(200).json({ text: "hello" });
  const email = req.body.email;
}
