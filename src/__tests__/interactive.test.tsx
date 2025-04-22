import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';

// Import interactive components to test
import GardenMap from '../components/interactive/GardenMap';
import InteractiveEducation from '../components/interactive/InteractiveEducation';
import EventCalendar from '../components/interactive/EventCalendar';
import AccessibilityFeatures from '../components/accessibility/AccessibilityFeatures';

// Mock the Google Maps API
jest.mock('@react-google-maps/api', () => ({
  LoadScript: ({ children }) => <div data-testid="load-script">{children}</div>,
  GoogleMap: ({ children }) => <div data-testid="google-map">{children}</div>,
  Marker: () => <div data-testid="map-marker"></div>,
  InfoWindow: ({ children }) => <div data-testid="info-window">{children}</div>
}));

describe('Interactive Features Tests', () => {
  // GardenMap tests
  describe('GardenMap Component', () => {
    test('renders map with markers', () => {
      render(<GardenMap apiKey="test-api-key" />);
      
      expect(screen.getByTestId('google-map')).toBeInTheDocument();
      expect(screen.getAllByTestId('map-marker').length).toBeGreaterThan(0);
    });
  });

  // InteractiveEducation tests
  describe('InteractiveEducation Component', () => {
    const mockQuizData = {
      title: 'Gardening Basics',
      content: '<p>Learn about gardening basics</p>',
      quizQuestions: [
        {
          question: 'What do plants need to grow?',
          options: ['Sunlight', 'Darkness', 'Salt water', 'Noise'],
          correctAnswer: 0
        },
        {
          question: 'Which is not a gardening tool?',
          options: ['Shovel', 'Hoe', 'Blender', 'Trowel'],
          correctAnswer: 2
        }
      ]
    };

    test('renders educational content and quiz', () => {
      render(
        <InteractiveEducation 
          title={mockQuizData.title}
          content={mockQuizData.content}
          quizQuestions={mockQuizData.quizQuestions}
        />
      );
      
      expect(screen.getByText('Gardening Basics')).toBeInTheDocument();
      expect(screen.getByText('Start Quiz')).toBeInTheDocument();
    });

    test('quiz functionality works correctly', async () => {
      render(
        <InteractiveEducation 
          title={mockQuizData.title}
          content={mockQuizData.content}
          quizQuestions={mockQuizData.quizQuestions}
        />
      );
      
      // Start the quiz
      await userEvent.click(screen.getByText('Start Quiz'));
      
      // First question should be visible
      expect(screen.getByText('What do plants need to grow?')).toBeInTheDocument();
      
      // Select an answer
      await userEvent.click(screen.getByText('Sunlight'));
      
      // Submit answer
      await userEvent.click(screen.getByText('Submit Answer'));
      
      // Next question button should appear
      expect(screen.getByText('Next Question')).toBeInTheDocument();
    });
  });

  // EventCalendar tests
  describe('EventCalendar Component', () => {
    const mockEvents = [
      {
        id: '1',
        title: 'Gardening Workshop',
        date: new Date(),
        time: '10:00 AM',
        location: 'Community Garden',
        description: 'Learn gardening basics',
        category: 'workshop'
      },
      {
        id: '2',
        title: 'School Garden Day',
        date: new Date(),
        time: '9:00 AM',
        location: 'Local School',
        description: 'School garden activities',
        category: 'school'
      }
    ];

    test('renders calendar with events', () => {
      render(<EventCalendar events={mockEvents} />);
      
      // Calendar should show current month and year
      const currentMonth = new Date().toLocaleString('default', { month: 'long' });
      const currentYear = new Date().getFullYear().toString();
      
      expect(screen.getByText(new RegExp(`${currentMonth}\\s+${currentYear}`))).toBeInTheDocument();
      
      // Category filters should be present
      expect(screen.getByText('All')).toBeInTheDocument();
      expect(screen.getByText('Workshops')).toBeInTheDocument();
      expect(screen.getByText('School')).toBeInTheDocument();
    });

    test('category filtering works', async () => {
      render(<EventCalendar events={mockEvents} />);
      
      // Click on Workshops filter
      await userEvent.click(screen.getByText('Workshops'));
      
      // Should show workshop events but not school events
      expect(screen.getByText('Gardening Workshop')).toBeInTheDocument();
      expect(screen.queryByText('School Garden Day')).not.toBeInTheDocument();
    });
  });

  // AccessibilityFeatures tests
  describe('AccessibilityFeatures Component', () => {
    test('renders accessibility controls', () => {
      render(
        <AccessibilityFeatures>
          <div>Test content</div>
        </AccessibilityFeatures>
      );
      
      // Accessibility button should be present
      const accessibilityButton = screen.getByLabelText('Accessibility Options');
      expect(accessibilityButton).toBeInTheDocument();
      
      // Click to open panel
      fireEvent.click(accessibilityButton);
      
      // Panel should show options
      expect(screen.getByText('Text Size')).toBeInTheDocument();
      expect(screen.getByText('High Contrast Mode')).toBeInTheDocument();
      expect(screen.getByText('Reduced Motion')).toBeInTheDocument();
    });
  });
});
