import mongoose from 'mongoose';

const DonationSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
  },
  amount: {
    type: Number,
    required: [true, 'Please provide a donation amount'],
    min: [1, 'Donation amount must be at least 1'],
  },
  currency: {
    type: String,
    required: [true, 'Please provide a currency'],
    default: 'USD',
  },
  paymentMethod: {
    type: String,
    required: [true, 'Please provide a payment method'],
    enum: ['credit_card', 'paypal', 'bank_transfer', 'mobile_money'],
  },
  status: {
    type: String,
    enum: ['pending', 'completed', 'failed', 'refunded'],
    default: 'pending',
  },
  isRecurring: {
    type: Boolean,
    default: false,
  },
  recurringFrequency: {
    type: String,
    enum: ['monthly', 'quarterly', 'annually'],
  },
  projectDesignation: {
    type: String,
  },
  message: {
    type: String,
  },
  isAnonymous: {
    type: Boolean,
    default: false,
  },
  transactionId: {
    type: String,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

export default mongoose.models.Donation || mongoose.model('Donation', DonationSchema);
