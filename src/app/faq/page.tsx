import Hero from '@/components/Hero';
import SectionHeader from '@/components/SectionHeader';
import CTASection from '@/components/CTASection';
import Link from 'next/link';

export default function FAQ() {
  return (
    <div>
      {/* Hero Section */}
      <Hero 
        title="Frequently Asked Questions"
        subtitle="Find answers to common questions about Dilulu's programs, services, and initiatives"
        backgroundImage="/images/faq-hero.jpg"
        size="medium"
      />

      {/* FAQ Search */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-green-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-green-800 mb-4">How Can We Help You?</h2>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Search our FAQ for quick answers to your questions. If you can&apos;t find what you&apos;re looking for, feel free to contact us directly.
            </p>
            <div className="max-w-2xl mx-auto">
              <div className="relative">
                <input 
                  type="text" 
                  placeholder="Search for answers..." 
                  className="w-full px-5 py-4 pr-12 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500"
                />
                <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                  <svg className="h-6 w-6 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Categories */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <SectionHeader 
            title="FAQ Categories"
            subtitle="Browse questions by category to find the information you need."
          />
          
          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Category 1 */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="bg-green-100 rounded-full w-16 h-16 flex items-center justify-center mb-4">
                <svg className="h-8 w-8 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-green-800 mb-2">Our Programs</h3>
              <p className="text-gray-600 mb-4">
                Questions about our school gardens, community gardens, family gardens, and other educational programs.
              </p>
              <a href="#programs" className="inline-block text-green-700 font-medium hover:text-green-900 hover:underline">
                View questions →
              </a>
            </div>
            
            {/* Category 2 */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="bg-green-100 rounded-full w-16 h-16 flex items-center justify-center mb-4">
                <svg className="h-8 w-8 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-green-800 mb-2">Volunteering</h3>
              <p className="text-gray-600 mb-4">
                Information about volunteer opportunities, requirements, scheduling, and benefits.
              </p>
              <a href="#volunteering" className="inline-block text-green-700 font-medium hover:text-green-900 hover:underline">
                View questions →
              </a>
            </div>
            
            {/* Category 3 */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="bg-green-100 rounded-full w-16 h-16 flex items-center justify-center mb-4">
                <svg className="h-8 w-8 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-green-800 mb-2">Donations & Support</h3>
              <p className="text-gray-600 mb-4">
                Questions about making donations, sponsorships, partnerships, and how funds are used.
              </p>
              <a href="#donations" className="inline-block text-green-700 font-medium hover:text-green-900 hover:underline">
                View questions →
              </a>
            </div>
            
            {/* Category 4 */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="bg-green-100 rounded-full w-16 h-16 flex items-center justify-center mb-4">
                <svg className="h-8 w-8 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-green-800 mb-2">E-Learning</h3>
              <p className="text-gray-600 mb-4">
                Information about our online courses, digital resources, and technical requirements.
              </p>
              <a href="#elearning" className="inline-block text-green-700 font-medium hover:text-green-900 hover:underline">
                View questions →
              </a>
            </div>
            
            {/* Category 5 */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="bg-green-100 rounded-full w-16 h-16 flex items-center justify-center mb-4">
                <svg className="h-8 w-8 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-green-800 mb-2">Online Boutique</h3>
              <p className="text-gray-600 mb-4">
                Questions about our products, ordering, shipping, returns, and payment options.
              </p>
              <a href="#boutique" className="inline-block text-green-700 font-medium hover:text-green-900 hover:underline">
                View questions →
              </a>
            </div>
            
            {/* Category 6 */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="bg-green-100 rounded-full w-16 h-16 flex items-center justify-center mb-4">
                <svg className="h-8 w-8 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-green-800 mb-2">General Questions</h3>
              <p className="text-gray-600 mb-4">
                General information about our organization, mission, history, and contact details.
              </p>
              <a href="#general" className="inline-block text-green-700 font-medium hover:text-green-900 hover:underline">
                View questions →
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Programs FAQ */}
      <section id="programs" className="py-16 px-4 sm:px-6 lg:px-8 bg-green-50">
        <div className="max-w-7xl mx-auto">
          <SectionHeader 
            title="Programs FAQ"
            subtitle="Common questions about our educational programs and initiatives."
          />
          
          <div className="mt-12 space-y-8">
            {/* FAQ Item 1 */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <button className="w-full px-6 py-4 text-left focus:outline-none">
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-bold text-green-800">What types of programs does Dilulu offer?</h3>
                  <svg className="h-6 w-6 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </div>
              </button>
              <div className="px-6 pb-4">
                <p className="text-gray-600">
                  Dilulu offers several core programs focused on environmental education and sustainable gardening:
                </p>
                <ul className="mt-2 space-y-1 list-disc list-inside text-gray-600">
                  <li>School Gardens Program: Establishing educational gardens in schools across Libreville</li>
                  <li>Community Gardens Program: Supporting neighborhood-based garden initiatives</li>
                  <li>Family Gardens Program: Helping families establish home gardens for food security</li>
                  <li>E-Learning Program: Online courses and resources about environmental topics</li>
                  <li>Youth Environmental Leaders: Leadership development for teenagers</li>
                  <li>Teacher Training: Professional development for educators</li>
                </ul>
                <p className="mt-2 text-gray-600">
                  Each program is designed to promote environmental awareness, sustainable practices, and food security through hands-on learning experiences.
                </p>
              </div>
            </div>
            
            {/* FAQ Item 2 */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <button className="w-full px-6 py-4 text-left focus:outline-none">
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-bold text-green-800">How can my school participate in the School Gardens Program?</h3>
                  <svg className="h-6 w-6 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </div>
              </button>
              <div className="px-6 pb-4">
                <p className="text-gray-600">
                  Schools in Libreville and surrounding areas can apply to participate in our School Gardens Program through the following process:
                </p>
                <ol className="mt-2 space-y-1 list-decimal list-inside text-gray-600">
                  <li>Complete the online application form on our website</li>
                  <li>Participate in an initial assessment meeting with our education team</li>
                  <li>Identify a garden coordinator and form a garden committee at your school</li>
                  <li>Develop a garden implementation plan with our support</li>
                  <li>Sign a partnership agreement outlining responsibilities</li>
                </ol>
                <p className="mt-2 text-gray-600">
                  We select partner schools based on commitment, available space, administrative support, and alignment with our program goals. We open applications twice yearly (January and July). For more information, visit our <Link href="/programs/school-partnerships" className="text-green-700 hover:underline">School Partnerships page</Link> or contact our education team at <a href="mailto:education@dilulu.org" className="text-green-700 hover:underline">education@dilulu.org</a>.
                </p>
              </div>
            </div>
            
            {/* FAQ Item 3 */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <button className="w-full px-6 py-4 text-left focus:outline-none">
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-bold text-green-800">What support does Dilulu provide for community gardens?</h3>
                  <svg className="h-6 w-6 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </div>
              </button>
              <div className="px-6 pb-4">
                <p className="text-gray-600">
                  For community garden initiatives, Dilulu provides the following support:
                </p>
                <ul className="mt-2 space-y-1 list-disc list-inside text-gray-600">
                  <li>Technical assistance with garden design and planning</li>
                  <li>Training workshops for garden coordinators and participants</li>
                  <li>Starter materials including seeds, seedlings, and basic tools</li>
                  <li>Educational resources and curriculum materials</li>
                  <li>Ongoing mentorship and troubleshooting support</li>
                  <li>Networking opportunities with other community gardens</li>
                </ul>
                <p className="mt-2 text-gray-600">
                  Community groups must demonstrate local leadership, community buy-in, and a viable location to qualify for support. We prioritize initiatives in underserved neighborhoods with limited access to fresh produce. To learn more, visit our <Link href="/programs/community-gardens" className="text-green-700 hover:underline">Community Gardens page</Link>.
                </p>
              </div>
            </div>
            
            {/* FAQ Item 4 */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <button className="w-full px-6 py-4 text-left focus:outline-none">
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-bold text-green-800">Are your programs only available in Libreville?</h3>
                  <svg className="h-6 w-6 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </div>
              </button>
              <div className="px-6 pb-4">
                <p className="text-gray-600">
                  Currently, our in-person programs (School Gardens, Community Gardens, and Family Gardens) are primarily focused on Libreville and its immediate surroundings. However, we are gradually expanding to other regions of Gabon.
                </p>
                <p className="mt-2 text-gray-600">
                  Our E-Learning Program and digital resources are available nationwide and can be accessed by anyone with internet connectivity. We also offer remote consulting and training for schools and community groups outside Libreville who wish to establish garden programs.
                </p>
                <p className="mt-2 text-gray-600">
                  If you&apos;re interested in bringing our programs to your area, please contact us at <a href="mailto:programs@dilulu.org" className="text-green-700 hover:underline">programs@dilulu.org</a> to discuss potential partnerships and support options.
                </p>
              </div>
            </div>
            
            {/* FAQ Item 5 */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <button className="w-full px-6 py-4 text-left focus:outline-none">
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-bold text-green-800">How do you measure the impact of your programs?</h3>
                  <svg className="h-6 w-6 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </div>
              </button>
              <div className="px-6 pb-4">
                <p className="text-gray-600">
                  We use a comprehensive monitoring and evaluation framework to measure the impact of our programs across several dimensions:
                </p>
                <ul className="mt-2 space-y-1 list-disc list-inside text-gray-600">
                  <li>Educational outcomes: Knowledge gains, attitude changes, and behavior adoption</li>
                  <li>Environmental impact: Green space creation, biodiversity enhancement, waste reduction</li>
                  <li>Food production: Quantity and variety of produce grown</li>
                  <li>Community development: Participation levels, leadership development, social cohesion</li>
                  <li>Health and nutrition: Dietary diversity, consumption of fresh produce</li>
                </ul>
                <p className="mt-2 text-gray-600">
                  We collect data through surveys, interviews, garden logs, and direct observation. We publish annual impact reports and share success stories on our website. For more information, visit our <Link href="/impact" className="text-green-700 hover:underline">Impact page</Link>.
                </p>
              </div>
            </div>
          </div>
          
          <div className="mt-8 text-center">
            <Link href="/programs" className="inline-block text-green-700 font-medium hover:text-green-900 hover:underline">
              Learn more about our programs →
            </Link>
          </div>
        </div>
      </section>

      {/* Volunteering FAQ */}
      <section id="volunteering" className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <SectionHeader 
            title="Volunteering FAQ"
            subtitle="Information about volunteer opportunities and how to get involved."
          />
          
          <div className="mt-12 space-y-8">
            {/* FAQ Item 1 */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <button className="w-full px-6 py-4 text-left focus:outline-none">
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-bold text-green-800">What volunteer opportunities are available at Dilulu?</h3>
                  <svg className="h-6 w-6 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </div>
              </button>
              <div className="px-6 pb-4">
                <p className="text-gray-600">
                  We offer a variety of volunteer roles to match different interests, skills, and availability:
                </p>
                <ul className="mt-2 space-y-1 list-disc list-inside text-gray-600">
                  <li><strong>Garden Assistants:</strong> Help maintain our demonstration gardens and support school/community garden activities</li>
                  <li><strong>Education Volunteers:</strong> Assist with workshops, classes, and educational events</li>
                  <li><strong>Event Support:</strong> Help organize and run special events, festivals, and fundraisers</li>
                  <li><strong>Administrative Support:</strong> Assist with office tasks, data entry, and communications</li>
                  <li><strong>Skilled Volunteers:</strong> Contribute professional skills (graphic design, photography, translation, etc.)</li>
                  <li><strong>E-Learning Support:</strong> Help develop or review online educational content</li>
                </ul>
                <p className="mt-2 text-gray-600">
                  Volunteers can serve on a regular schedule or for specific events and projects. For current opportunities, visit our <Link href="/volunteer" className="text-green-700 hover:underline">Volunteer page</Link>.
                </p>
              </div>
            </div>
            
            {/* FAQ Item 2 */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <button className="w-full px-6 py-4 text-left focus:outline-none">
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-bold text-green-800">What is the time commitment for volunteers?</h3>
                  <svg className="h-6 w-6 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </div>
              </button>
              <div className="px-6 pb-4">
                <p className="text-gray-600">
                  We offer flexible volunteering options to accommodate different schedules:
                </p>
                <ul className="mt-2 space-y-1 list-disc list-inside text-gray-600">
                  <li><strong>Regular volunteers:</strong> Typically commit to 4-8 hours per month for at least three months</li>
                  <li><strong>Event volunteers:</strong> Support specific events, with time commitments ranging from a few hours to a full day</li>
                  <li><strong>Project-based volunteers:</strong> Contribute to specific projects with defined timelines</li>
                  <li><strong>Seasonal volunteers:</strong> Help during high-need periods (planting season, harvest time, etc.)</li>
                </ul>
                <p className="mt-2 text-gray-600">
                  We work with volunteers to find opportunities that match their availability. Most volunteer activities take place during weekdays, but we also offer weekend opportunities. During the application process, you&apos;ll be asked about your availability and preferences.
                </p>
              </div>
            </div>
            
            {/* FAQ Item 3 */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <button className="w-full px-6 py-4 text-left focus:outline-none">
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-bold text-green-800">Do I need gardening experience to volunteer?</h3>
                  <svg className="h-6 w-6 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </div>
              </button>
              <div className="px-6 pb-4">
                <p className="text-gray-600">
                  No prior gardening experience is required for most volunteer roles. We welcome volunteers with all levels of experience, from complete beginners to master gardeners. Here&apos;s what you need to know:
                </p>
                <ul className="mt-2 space-y-1 list-disc list-inside text-gray-600">
                  <li>We provide training and guidance for all garden-related tasks</li>
                  <li>Experienced staff or volunteer leaders supervise garden activities</li>
                  <li>We match volunteers with tasks appropriate to their skill level</li>
                  <li>Volunteering is a learning opportunity – many of our volunteers develop gardening skills through their service</li>
                </ul>
                <p className="mt-2 text-gray-600">
                  For specialized roles (like garden design or advanced horticultural tasks), relevant experience may be preferred but is not always required if you&apos;re willing to learn. We also have many non-gardening volunteer opportunities available.
                </p>
              </div>
            </div>
            
            {/* FAQ Item 4 */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <button className="w-full px-6 py-4 text-left focus:outline-none">
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-bold text-green-800">How do I apply to become a volunteer?</h3>
                  <svg className="h-6 w-6 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </div>
              </button>
              <div className="px-6 pb-4">
                <p className="text-gray-600">
                  The volunteer application process involves these steps:
                </p>
                <ol className="mt-2 space-y-1 list-decimal list-inside text-gray-600">
                  <li>Complete the online volunteer application form on our website</li>
                  <li>Attend a volunteer orientation session (offered monthly)</li>
                  <li>Complete a brief interview with our volunteer coordinator</li>
                  <li>Submit any required background checks (for roles working with children)</li>
                  <li>Receive role-specific training</li>
                  <li>Begin volunteering!</li>
                </ol>
                <p className="mt-2 text-gray-600">
                  The entire process typically takes 2-3 weeks. To get started, visit our <Link href="/volunteer" className="text-green-700 hover:underline">Volunteer page</Link> and click on &quot;Apply Now&quot; to access the application form. If you have questions, contact our volunteer coordinator at <a href="mailto:volunteer@dilulu.org" className="text-green-700 hover:underline">volunteer@dilulu.org</a>.
                </p>
              </div>
            </div>
            
            {/* FAQ Item 5 */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <button className="w-full px-6 py-4 text-left focus:outline-none">
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-bold text-green-800">Are there benefits to volunteering with Dilulu?</h3>
                  <svg className="h-6 w-6 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </div>
              </button>
              <div className="px-6 pb-4">
                <p className="text-gray-600">
                  Volunteering with Dilulu offers numerous benefits:
                </p>
                <ul className="mt-2 space-y-1 list-disc list-inside text-gray-600">
                  <li>Develop new skills in gardening, environmental education, and community organizing</li>
                  <li>Receive training and hands-on experience in sustainable practices</li>
                  <li>Connect with a community of like-minded individuals</li>
                  <li>Make a tangible difference in environmental education and food security</li>
                  <li>Gain professional experience in the environmental and education sectors</li>
                  <li>Access to volunteer-only workshops and events</li>
                  <li>Share in garden harvests when available</li>
                  <li>Receive volunteer recognition and appreciation</li>
                </ul>
                <p className="mt-2 text-gray-600">
                  Regular volunteers who contribute at least 20 hours receive a 10% discount on our online boutique products and priority registration for workshops and events.
                </p>
              </div>
            </div>
          </div>
          
          <div className="mt-8 text-center">
            <Link href="/volunteer" className="inline-block text-green-700 font-medium hover:text-green-900 hover:underline">
              Learn more about volunteering →
            </Link>
          </div>
        </div>
      </section>

      {/* More FAQ Sections would follow the same pattern */}
      {/* For brevity, I'm including just two full sections */}

      {/* Donations FAQ - Section Header Only */}
      <section id="donations" className="py-16 px-4 sm:px-6 lg:px-8 bg-green-50">
        <div className="max-w-7xl mx-auto">
          <SectionHeader 
            title="Donations & Support FAQ"
            subtitle="Information about making donations and supporting our work."
          />
          
          {/* FAQ items would go here */}
          <div className="mt-8 text-center">
            <Link href="/donate" className="inline-block text-green-700 font-medium hover:text-green-900 hover:underline">
              Learn more about supporting our work →
            </Link>
          </div>
        </div>
      </section>

      {/* E-Learning FAQ - Section Header Only */}
      <section id="elearning" className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <SectionHeader 
            title="E-Learning FAQ"
            subtitle="Information about our online courses and digital resources."
          />
          
          {/* FAQ items would go here */}
          <div className="mt-8 text-center">
            <Link href="/e-learning" className="inline-block text-green-700 font-medium hover:text-green-900 hover:underline">
              Learn more about our e-learning platform →
            </Link>
          </div>
        </div>
      </section>

      {/* Online Boutique FAQ - Section Header Only */}
      <section id="boutique" className="py-16 px-4 sm:px-6 lg:px-8 bg-green-50">
        <div className="max-w-7xl mx-auto">
          <SectionHeader 
            title="Online Boutique FAQ"
            subtitle="Information about our products, ordering, shipping, and payment."
          />
          
          {/* FAQ items would go here */}
          <div className="mt-8 text-center">
            <Link href="/boutique" className="inline-block text-green-700 font-medium hover:text-green-900 hover:underline">
              Visit our online boutique →
            </Link>
          </div>
        </div>
      </section>

      {/* General FAQ - Section Header Only */}
      <section id="general" className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <SectionHeader 
            title="General FAQ"
            subtitle="General information about our organization and operations."
          />
          
          {/* FAQ items would go here */}
          <div className="mt-8 text-center">
            <Link href="/about-us" className="inline-block text-green-700 font-medium hover:text-green-900 hover:underline">
              Learn more about Dilulu →
            </Link>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-green-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-green-800 mb-4">Still Have Questions?</h2>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              If you couldn&apos;t find the answer you were looking for, please don&apos;t hesitate to contact us directly.
            </p>
            <Link 
              href="/contact" 
              className="inline-block bg-green-700 hover:bg-green-800 text-white font-bold py-3 px-8 rounded-md transition duration-300"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <CTASection 
        title="Ready to Get Involved?"
        description="Join us in our mission to promote environmental education and sustainable gardening in Libreville."
        buttonText="Explore Opportunities"
        buttonLink="/get-involved"
      />
    </div>
  );
}
