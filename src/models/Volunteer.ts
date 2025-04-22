import mongoose from 'mongoose';

const VolunteerSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  skills: [{
    type: String
  }],
  availability: {
    type: String,
    enum: ['weekdays', 'weekends', 'evenings', 'flexible'],
    required: true
  },
  interests: [{
    type: String
  }],
  experience: {
    type: String
  },
  location: {
    type: String,
    required: true
  },
  status: {
    type: String,
    enum: ['pending', 'approved', 'active', 'inactive'],
    default: 'pending'
  },
  hours: {
    type: Number,
    default: 0
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

export default mongoose.models.Volunteer || mongoose.model('Volunteer', VolunteerSchema);
