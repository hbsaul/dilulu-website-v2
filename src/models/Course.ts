import mongoose from 'mongoose';

const CourseSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, 'Please provide a course title'],
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
  imageUrl: {
    type: String,
    required: [true, 'Please provide an image URL'],
  },
  level: {
    type: String,
    enum: ['beginner', 'intermediate', 'advanced'],
    default: 'beginner',
  },
  duration: {
    type: Number, // in minutes
    required: [true, 'Please provide course duration'],
  },
  modules: [{
    title: String,
    lessons: [{
      title: String,
      videoUrl: String,
      content: String,
      resources: [String],
      quizQuestions: [{
        question: String,
        options: [String],
        correctAnswer: Number,
      }],
    }],
  }],
  instructor: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
  },
  enrolledStudents: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
  }],
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

export default mongoose.models.Course || mongoose.model('Course', CourseSchema);
