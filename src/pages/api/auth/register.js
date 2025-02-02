import { AuthService } from '../../../services/authService';

export default async function handler(req, res) {
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' });

  try {
    const { name, email, password, role } = req.body;
    const { user, token } = await AuthService.register({ name, email, password, role });
    res.status(201).json({ user, token });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
}
