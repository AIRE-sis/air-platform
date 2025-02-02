import mongoose from 'mongoose';

const transactionSchema = new mongoose.Schema({
  // ... rest of the code from Transaction.js
});

export const Transaction = mongoose.models.Transaction || mongoose.model('Transaction', transactionSchema);
