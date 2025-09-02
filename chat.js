let messages = [];

export default function handler(req, res) {
  if (req.method === "POST") {
    const { user, text } = req.body;
    if (!user || !text) return res.status(400).json({ error: "Dados incompletos" });
    messages.push({ user, text, time: Date.now() });
    return res.status(200).json({ success: true, messages });
  }

  if (req.method === "GET") {
    return res.status(200).json(messages);
  }

  return res.status(405).json({ error: "Método não permitido" });
}