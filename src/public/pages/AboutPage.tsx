import React from 'react';
import PublicLayout from '../PublicLayout';

const AboutPage: React.FC = () => {
  return (
    <PublicLayout>
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold text-gray-800 mb-6 dark:text-white">About Us</h1>
        
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-white">Our Story</h2>
          <p className="text-gray-600 mb-4 dark:text-gray-300">
            Founded in 2020, Flazz has been dedicated to providing innovative solutions and 
            exceptional services to businesses of all sizes. Our journey began with a simple 
            mission: to bridge the gap between complex technology and practical business needs.
          </p>
          <p className="text-gray-600 dark:text-gray-300">
            Over the years, we have grown from a small team of passionate developers to a 
            comprehensive solution provider, serving clients across various industries worldwide.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-white">Our Vision</h2>
          <p className="text-gray-600 dark:text-gray-300">
            To be the leading technology partner that empowers businesses to achieve their 
            goals through innovative solutions, exceptional service, and continuous support.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-white">Our Values</h2>
          <ul className="list-disc list-inside text-gray-600 space-y-2 dark:text-gray-300">
            <li><span className="font-medium">Integrity:</span> We maintain the highest standards of integrity in all our interactions</li>
            <li><span className="font-medium">Innovation:</span> We constantly seek innovative solutions to complex problems</li>
            <li><span className="font-medium">Excellence:</span> We strive for excellence in every project we undertake</li>
            <li><span className="font-medium">Customer Focus:</span> We put our customers at the center of everything we do</li>
            <li><span className="font-medium">Collaboration:</span> We believe in the power of teamwork and collaboration</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-white">Our Team</h2>
          <p className="text-gray-600 dark:text-gray-300">
            Our diverse team of experts brings together years of experience across various domains. 
            From software development to project management, we have the right talent to deliver 
            exceptional results for your business.
          </p>
        </section>
      </div>
    </PublicLayout>
  );
};

export default AboutPage;