import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const About = () => {
  return (
    <section className="py-20 bg-detelina-cream">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Image with dark gradient overlay */}
          <div className="relative">
            {/* Dark gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-b from-black/40 to-transparent z-10 rounded-2xl" />

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
            <h2 className="text-3xl md:text-4xl font-bold mb-6 font-playfair">
              Authenticity & Tradition Since 2007
            </h2>
            <div className="space-y-4 text-gray-700">
              <p>
                Founded in 1995, Detelina Dairy brings authentic Eastern European dairy traditions to Cyprus. Our small-batch production preserves the natural flavors and health benefits that have been cherished for generations.
              </p>
              <p>
                We're passionate about crafting fermented dairy products using traditional methods and recipes that have stood the test of time. Every product we make is a testament to our commitment to quality, taste, and nutritional value.
              </p>
              <p>
                Our team of dairy specialists ensure that each batch meets our strict standards, delivering the authentic flavors of Eastern Europe with the freshness you expect from local production.
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
