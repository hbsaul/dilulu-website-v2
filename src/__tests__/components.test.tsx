import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';

// Import components to test
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Hero from '../components/Hero';
import ProgramCard from '../components/ProgramCard';
import StatItem from '../components/StatItem';
import SectionHeader from '../components/SectionHeader';
import CTASection from '../components/CTASection';
import Testimonial from '../components/Testimonial';
import ProgramsGrid from '../components/ProgramsGrid';

describe('UI Components Tests', () => {
  // Navbar tests
  describe('Navbar Component', () => {
    test('renders logo and navigation links', () => {
      render(<Navbar />);
      expect(screen.getByAltText(/dilulu logo/i)).toBeInTheDocument();
      expect(screen.getByText(/home/i)).toBeInTheDocument();
      expect(screen.getByText(/programs/i)).toBeInTheDocument();
      expect(screen.getByText(/about/i)).toBeInTheDocument();
      expect(screen.getByText(/contact/i)).toBeInTheDocument();
    });

    test('mobile menu toggle works', async () => {
      render(<Navbar />);
      const menuButton = screen.getByLabelText(/toggle menu/i);
      await userEvent.click(menuButton);
      // Check if mobile menu is visible
      expect(screen.getByRole('navigation')).toHaveClass('mobile-menu-open');
    });
  });

  // Hero tests
  describe('Hero Component', () => {
    test('renders title, subtitle and buttons', () => {
      render(
        <Hero 
          title="Test Title" 
          subtitle="Test Subtitle"
          primaryButtonText="Primary Button"
          primaryButtonLink="/primary"
          secondaryButtonText="Secondary Button"
          secondaryButtonLink="/secondary"
        />
      );
      
      expect(screen.getByText('Test Title')).toBeInTheDocument();
      expect(screen.getByText('Test Subtitle')).toBeInTheDocument();
      expect(screen.getByText('Primary Button')).toBeInTheDocument();
      expect(screen.getByText('Secondary Button')).toBeInTheDocument();
    });
  });

  // ProgramCard tests
  describe('ProgramCard Component', () => {
    test('renders program information correctly', () => {
      render(
        <ProgramCard 
          title="Gardening Program" 
          description="Test description"
          imageUrl="/test-image.jpg"
          link="/programs/gardening"
        />
      );
      
      expect(screen.getByText('Gardening Program')).toBeInTheDocument();
      expect(screen.getByText('Test description')).toBeInTheDocument();
      expect(screen.getByText('Learn More')).toBeInTheDocument();
    });
  });

  // StatItem tests
  describe('StatItem Component', () => {
    test('renders number and label correctly', () => {
      render(<StatItem number="500+" label="Families Trained" />);
      
      expect(screen.getByText('500+')).toBeInTheDocument();
      expect(screen.getByText('Families Trained')).toBeInTheDocument();
    });
  });

  // SectionHeader tests
  describe('SectionHeader Component', () => {
    test('renders title and subtitle correctly', () => {
      render(
        <SectionHeader 
          title="Section Title" 
          subtitle="Section subtitle text"
        />
      );
      
      expect(screen.getByText('Section Title')).toBeInTheDocument();
      expect(screen.getByText('Section subtitle text')).toBeInTheDocument();
    });
  });

  // CTASection tests
  describe('CTASection Component', () => {
    test('renders CTA content correctly', () => {
      render(
        <CTASection 
          title="CTA Title" 
          description="CTA description"
          buttonText="Click Me"
          buttonLink="/action"
          backgroundColor="green"
        />
      );
      
      expect(screen.getByText('CTA Title')).toBeInTheDocument();
      expect(screen.getByText('CTA description')).toBeInTheDocument();
      expect(screen.getByText('Click Me')).toBeInTheDocument();
    });
  });

  // Testimonial tests
  describe('Testimonial Component', () => {
    test('renders testimonial content correctly', () => {
      render(
        <Testimonial 
          quote="This is a great quote" 
          author="John Doe"
          role="Gardening Program Participant"
        />
      );
      
      expect(screen.getByText('This is a great quote')).toBeInTheDocument();
      expect(screen.getByText('John Doe')).toBeInTheDocument();
      expect(screen.getByText('Gardening Program Participant')).toBeInTheDocument();
    });
  });

  // ProgramsGrid tests
  describe('ProgramsGrid Component', () => {
    test('renders multiple program cards correctly', () => {
      const programs = [
        {
          title: 'Program 1',
          description: 'Description 1',
          imageUrl: '/image1.jpg',
          link: '/program1'
        },
        {
          title: 'Program 2',
          description: 'Description 2',
          imageUrl: '/image2.jpg',
          link: '/program2'
        }
      ];
      
      render(<ProgramsGrid programs={programs} />);
      
      expect(screen.getByText('Program 1')).toBeInTheDocument();
      expect(screen.getByText('Description 1')).toBeInTheDocument();
      expect(screen.getByText('Program 2')).toBeInTheDocument();
      expect(screen.getByText('Description 2')).toBeInTheDocument();
    });
  });

  // Footer tests
  describe('Footer Component', () => {
    test('renders footer content correctly', () => {
      render(<Footer />);
      
      expect(screen.getByText(/dilulu/i)).toBeInTheDocument();
      expect(screen.getByText(/contact/i)).toBeInTheDocument();
      expect(screen.getByText(/follow us/i)).toBeInTheDocument();
    });
  });
});
