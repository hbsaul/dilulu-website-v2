import mongoose from 'mongoose';

const ContentSchema = new mongoose.Schema({
  pageId: {
    type: String,
    required: [true, 'Please provide a page ID'],
    unique: true
  },
  title: {
    type: String,
    required: [true, 'Please provide a title']
  },
  sections: [{
    sectionId: {
      type: String,
      required: true
    },
    title: String,
    content: String,
    imageUrl: String,
    order: Number
  }],
  language: {
    type: String,
    enum: ['en', 'fr'],
    default: 'en'
  },
  lastEditedBy: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  },
  lastEditedAt: {
    type: Date,
    default: Date.now
  },
  publishStatus: {
    type: String,
    enum: ['draft', 'published', 'archived'],
    default: 'published'
  },
  version: {
    type: Number,
    default: 1
  },
  previousVersions: [{
    content: Object,
    editedBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User'
    },
    editedAt: Date,
    version: Number
  }]
});

export default mongoose.models.Content || mongoose.model('Content', ContentSchema);
