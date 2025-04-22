# Dilulu - Growing Gardens, Growing Futures

A modern, responsive website for Dilulu, an organization dedicated to environmental education through gardening, composting, and sustainable living programs.

![Dilulu Logo](public/logo.png)

## Project Overview

Dilulu is a non-profit organization that empowers children and families in Africa through gardening, composting, and natural living programs. This website serves as the organization's digital presence, providing information about their programs, events, blog, e-learning resources, and ways to get involved through volunteering or donations.

## Features

- **Responsive Design**: Fully responsive website that works on desktop, tablet, and mobile devices
- **Multi-language Support**: Internationalization with English and French language options
- **User Authentication**: Secure login and registration system for users and administrators
- **Content Management System**: Admin interface for managing website content
- **Blog Platform**: Regularly updated articles on gardening, composting, and sustainability
- **E-Learning Portal**: Educational resources and courses on environmental topics
- **Events Calendar**: Upcoming events and workshops
- **Online Shop**: Purchase gardening supplies and educational materials
- **Donation System**: Support the organization through online donations
- **Volunteer Registration**: Sign up to volunteer for various programs
- **School Partnerships**: Information for schools interested in partnering with Dilulu
- **Contact Form**: Easy way for visitors to get in touch

## Technology Stack

- **Frontend**:
  - Next.js 14 (React framework)
  - TypeScript
  - Tailwind CSS for styling
  - React components for interactive features

- **Backend**:
  - Next.js API routes
  - MongoDB with Mongoose for database operations
  - Authentication with bcryptjs and JSON Web Tokens

- **Testing**:
  - Jest for unit and integration testing
  - React Testing Library for component testing

- **Deployment**:
  - Static site generation for improved performance
  - Optimized for SEO and accessibility

## Getting Started

### Prerequisites

- Node.js 18.x or higher
- npm or yarn package manager
- MongoDB (local instance or MongoDB Atlas)

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/hbsaul/dilulu-website-v2.git
   cd dilulu-website
   ```

2. Install dependencies:
   ```bash
   npm install
   # or
   yarn install
   ```

3. Set up environment variables:
   Create a `.env.local` file in the root directory with the following variables:
   ```
   MONGODB_URI=your_mongodb_connection_string
   JWT_SECRET=your_jwt_secret_key
   NEXT_PUBLIC_SITE_URL=http://localhost:3000
   NEXT_PUBLIC_SITE_NAME=Dilulu Website
   NEXT_PUBLIC_SITE_DESCRIPTION=Dilulu is a non-profit organization that empowers children and families in Africa through gardening, composting, and natural living programs.
   ```

4. Run the development server:
   ```bash
   npm run dev
   # or
   yarn dev
   ```

5. Open [http://localhost:3000](http://localhost:3000) in your browser to see the website.

## Project Structure

```
dilulu-website/
├── public/             # Static files (images, favicon, etc.)
├── src/
│   ├── app/            # Next.js App Router pages and API routes
│   │   ├── api/        # API endpoints
│   │   ├── about/      # About page
│   │   ├── blog/       # Blog page
│   │   ├── events/     # Events page
│   │   └── ...         # Other pages
│   ├── components/     # Reusable React components
│   ├── contexts/       # React context providers
│   ├── lib/            # Utility functions and database connection
│   ├── models/         # MongoDB models
│   └── translations/   # Language files
├── .env.local          # Environment variables (not in repo)
├── next.config.js      # Next.js configuration
├── tailwind.config.js  # Tailwind CSS configuration
└── tsconfig.json       # TypeScript configuration
```

## Available Scripts

- `npm run dev` - Run the development server
- `npm run build` - Build the application for production
- `npm start` - Start the production server
- `npm run lint` - Run ESLint to check code quality
- `npm test` - Run Jest tests
- `npm run test:watch` - Run tests in watch mode
- `npm run test:coverage` - Generate test coverage report

## Deployment

The website is configured for static export, which allows it to be deployed to various hosting platforms:

1. Build the project:
   ```bash
   npm run build
   ```

2. The static files will be generated in the `out` directory, which can be deployed to any static hosting service like Vercel, Netlify, or GitHub Pages.

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Acknowledgments

- Dilulu organization for their mission to promote environmental education
- All contributors who have helped build and improve this website
  
