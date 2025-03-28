import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const About = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-black via-gray-900 to-gray-800 text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Image with dark gradient overlay */}
          <div className="relative">
            {/* Dark gradient overlay */}
            <div className="absolute inset-0 bg-black/50 z-10 rounded-2xl" />

            {/* Main image */}
            <div className="rounded-2xl overflow-hidden shadow-xl relative z-0">
              <img 
                src="/lovable-uploads/313fea23-3c0a-4bed-8169-f67c5deb519e.png" 
                alt="Detelina Dairy Products" 
                className="w-full h-full object-cover"
              />
            </div>

            {/* Floating logo */}
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-white p-4 rounded-xl shadow-lg hidden md:flex items-center justify-center z-20">
              <img 
                src="/lovable-uploads/8040c74b-81ed-41c3-a04d-71ec03b50bfa.png" 
                alt="Detelina Logo" 
                className="max-w-full max-h-full object-contain"
              />
            </div>
          </div>

          {/* Content */}
          <div>
            <span className="inline-block px-3 py-1 mb-4 bg-primary/10 text-primary text-sm font-medium rounded-full">
              Our Story
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 font-playfair text-white">
              Authenticity & Tradition Since 1995
            </h2>
            <div className="space-y-4 text-gray-300">
              <p>
                Founded in 1995, Detelina Dairy began with a vision to bring naturally fermented dairy to Cyprus.
              </p>
              <p>
                Our small-batch production blends family tradition with fresh, local milk to create unmatched quality.
              </p>
              <p>
                From kefir to cottage cheese, every product reflects our commitment to real ingredients and great taste.
              </p>
            </div>
            <div className="mt-8">
              <Link 
                to="/about" 
                className="inline-flex items-center text-primary font-medium hover:text-primary-dark transition-colors"
              >
                Learn more about our journey
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
