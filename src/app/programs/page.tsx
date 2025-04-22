'use client';

import SectionHeader from '@/components/SectionHeader';
import Hero from '@/components/Hero';
import ProgramsGrid from '@/components/ProgramsGrid';
import Testimonial from '@/components/Testimonial';
import CTASection from '@/components/CTASection';

const programs = [
  {
    title: 'Gardening Program',
    description: 'Teaching children and families to grow their own food, improving nutrition and self-sufficiency. Our gardening program helps establish school gardens and family backyard gardens, teaching the basics of planting, watering, and harvesting.',
    imageUrl: 'https://source.unsplash.com/random/600x400/?gardening,children',
    link: '/programs/gardening',
  },
  {
    title: 'Composting Program',
    description: 'Training in creating and using compost for sustainability and reducing waste. We introduce fun, hands-on activities like building compost bins from pallets and starting worm farms to break down waste.',
    imageUrl: 'https://source.unsplash.com/random/600x400/?compost',
    link: '/programs/composting',
  },
  {
    title: 'Education Program',
    description: 'Environmental education curriculum and natural living lessons for schools and families. Our education program covers both Natural Living and Zero Waste education, teaching families to use natural methods for healthier lives.',
    imageUrl: 'https://source.unsplash.com/random/600x400/?education,nature',
    link: '/programs/education',
  },
  {
    title: 'Natural Living Program',
    description: 'Promoting healthy, toxin-free lifestyles and herbal remedies. Our Natural Living lessons introduce families to herbal gardening, making natural remedies, and choosing chemical-free options for home and farm.',
    imageUrl: 'https://source.unsplash.com/random/600x400/?natural,herbs',
    link: '/programs/natural-living',
  },
  {
    title: 'Zero Waste Program',
    description: 'Practices for reducing waste, recycling, and reusing materials. From ecobricks to creative reuse crafts, our Zero Waste program gets children excited about trash-to-treasure projects.',
    imageUrl: 'https://source.unsplash.com/random/600x400/?recycling,waste',
    link: '/programs/zero-waste',
  },
];

export default function Programs() {
  return (
    <>
      <Hero 
        title="Our Programs"
        subtitle="Empowering communities through sustainable practices and education"
        imageUrl="https://source.unsplash.com/random/1600x900/?garden,africa"
      />

      <section className="py-16">
        <div className="container">
          <div className="flex flex-col md:flex-row items-center gap-8 mb-16">
            <div className="md:w-1/2">
              <SectionHeader 
                title="The Heart of Dilulu" 
                alignment="left"
              />
              <p>Our programs are the heart of Dilulu. Each program is a journey for children and families – from planting seeds and making compost, to embracing a zero-waste lifestyle. We blend traditional knowledge with modern techniques to make learning fun and practical.</p>
              <p className="mt-4">Through our five core programs, we address environmental challenges while improving health, nutrition, and community well-being. Our approach is hands-on, participatory, and designed to create lasting change.</p>
              <p className="mt-4">Explore our program areas below to see how we're sowing seeds of change in Libreville and beyond.</p>
            </div>
            <div 
              className="md:w-1/2 h-80 bg-cover bg-center rounded-xl program-hero-image"
            ></div>
          </div>

          <SectionHeader title="Core Programs" />
          <ProgramsGrid programs={programs} />
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="container">
          <SectionHeader title="What Our Participants Say" />
          <div className="max-w-3xl mx-auto">
            <Testimonial 
              quote="I love watering our garden. I didn't know I could grow my own food until Dilulu taught us. Now I can help my family have fresh vegetables every day!"
              author="Amina, 10 years old"
              role="Gardening Program Participant"
            />
          </div>
        </div>
      </section>

      <CTASection 
        title="Get Involved in Our Programs"
        description="Whether you're a school, family, or community organization, we invite you to join our programs and be part of the change."
        buttonText="Contact Us"
        buttonLink="/contact"
        backgroundColor="green"
      />
    </>
  );
}
