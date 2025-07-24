import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Home } from 'lucide-react';

const NotFoundPage = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-secondary-50 py-32">
      <div className="container-custom text-center">
        <h1 className="text-primary-600 mb-6">404</h1>
        <h2 className="mb-6">Page Not Found</h2>
        <p className="text-secondary-600 text-lg mb-12 max-w-2xl mx-auto">
          The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link to="/" className="btn btn-primary inline-flex items-center justify-center">
            <Home className="mr-2 w-5 h-5" />
            Back to Home
          </Link>
          <button 
            onClick={() => window.history.back()} 
            className="btn btn-secondary inline-flex items-center justify-center"
          >
            <ArrowLeft className="mr-2 w-5 h-5" />
            Go Back
          </button>
        </div>
      </div>
    </div>
  );
};

export default NotFoundPage;