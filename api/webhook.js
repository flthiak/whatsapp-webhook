export default function handler(req, res) {
  // Verification (GET)
  if (req.method === 'GET') {
    const VERIFY_TOKEN = 'everClear.webhook'; // <-- must match exactly what you enter in Meta

    const mode = req.query['hub.mode'];
    const token = req.query['hub.verify_token'];
    const challenge = req.query['hub.challenge'];

    if (mode && token && mode === 'subscribe' && token === VERIFY_TOKEN) {
      res.status(200).send(challenge);
    } else {
      res.status(403).send('Forbidden');
    }
  }

  // Handle incoming events (POST)
  else if (req.method === 'POST') {
    res.status(200).send('EVENT_RECEIVED');
  }

  // Other methods
  else {
    res.status(405).send('Method Not Allowed');
  }
}
