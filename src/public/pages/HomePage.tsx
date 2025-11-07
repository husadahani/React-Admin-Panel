import React from 'react';
import PublicLayout from '../PublicLayout';

const HomePage: React.FC = () => {
  return (
    <PublicLayout>
      <div className="container mx-auto px-4 py-8">
        <section className="text-center py-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 dark:text-white mb-6">
            Welcome to Flazz
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto mb-8">
            Your trusted partner for innovative solutions and exceptional services.
          </p>
          <div className="flex justify-center gap-4">
            <a 
              href="/contact" 
              className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-6 rounded-lg transition-colors"
            >
              Get Started
            </a>
            <a 
              href="/about" 
              className="bg-gray-200 hover:bg-gray-300 text-gray-800 font-medium py-3 px-6 rounded-lg transition-colors dark:bg-gray-700 dark:hover:bg-gray-600 dark:text-white"
            >
              Learn More
            </a>
          </div>
        </section>

        <section className="py-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md dark:bg-gray-800">
              <h3 className="text-xl font-semibold mb-4 text-gray-800 dark:text-white">Quality Service</h3>
              <p className="text-gray-600 dark:text-gray-300">
                We provide top-notch services tailored to meet your specific needs with attention to detail.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md dark:bg-gray-800">
              <h3 className="text-xl font-semibold mb-4 text-gray-800 dark:text-white">Innovation</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Our team uses the latest technology and innovative approaches to solve complex problems.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md dark:bg-gray-800">
              <h3 className="text-xl font-semibold mb-4 text-gray-800 dark:text-white">Reliability</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Dependable solutions delivered on time with our commitment to excellence and quality.
              </p>
            </div>
          </div>
        </section>

        <section className="py-12 text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-6 dark:text-white">Our Mission</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto dark:text-gray-300">
            To provide exceptional value to our clients through innovative solutions, 
            outstanding service, and a commitment to excellence in everything we do.
          </p>
        </section>
      </div>
    </PublicLayout>
  );
};

export default HomePage;