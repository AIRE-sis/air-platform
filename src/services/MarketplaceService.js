import Stripe from 'stripe';
import { User } from '../models/User';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);
const COMMISSION_RATE = 0.10; // 10% commission

export class MarketplaceService {
  // ... rest of the code from marketplace-commission artifact
}
