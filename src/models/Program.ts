import mongoose from 'mongoose';

const ProgramSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, 'Please provide a program title'],
    maxlength: [100, 'Title cannot be more than 100 characters'],
  },
  slug: {
    type: String,
    required: [true, 'Please provide a slug'],
    unique: true,
  },
  description: {
    type: String,
    required: [true, 'Please provide a description'],
  },
  content: {
    type: String,
    required: [true, 'Please provide content'],
  },
  imageUrl: {
    type: String,
    required: [true, 'Please provide an image URL'],
  },
  featured: {
    type: Boolean,
    default: false,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

export default mongoose.models.Program || mongoose.model('Program', ProgramSchema);
