import { Link } from "react-router";
import { Home, ArrowLeft } from "lucide-react";

export function NotFound() {
  return (
    <div className="min-h-[80vh] flex items-center justify-center bg-gradient-to-br from-blue-50 to-purple-50">
      <div className="text-center px-4">
        <div className="mb-8">
          <h1 className="text-9xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            404
          </h1>
        </div>
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
          Page Not Found
        </h2>
        <p className="text-lg text-gray-600 mb-8 max-w-md mx-auto">
          Oops! The page you're looking for doesn't exist. It might have been moved or deleted.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            to="/"
            className="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full font-semibold hover:shadow-xl transition-all hover:scale-105"
          >
            <Home className="w-5 h-5 mr-2" />
            Go to Homepage
          </Link>
          <button
            onClick={() => window.history.back()}
            className="inline-flex items-center justify-center px-8 py-4 bg-white text-gray-700 rounded-full font-semibold shadow-lg hover:shadow-xl transition-all border border-gray-200"
          >
            <ArrowLeft className="w-5 h-5 mr-2" />
            Go Back
          </button>
        </div>

        <div className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-2xl mx-auto">
          <Link
            to="/doctors"
            className="p-6 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all hover:-translate-y-1"
          >
            <h3 className="font-bold text-gray-900 mb-2">Our Doctors</h3>
            <p className="text-sm text-gray-600">Meet our expert medical team</p>
          </Link>
          <Link
            to="/treatments"
            className="p-6 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all hover:-translate-y-1"
          >
            <h3 className="font-bold text-gray-900 mb-2">Treatments</h3>
            <p className="text-sm text-gray-600">Explore our cancer care services</p>
          </Link>
          <Link
            to="/about"
            className="p-6 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all hover:-translate-y-1"
          >
            <h3 className="font-bold text-gray-900 mb-2">Contact Us</h3>
            <p className="text-sm text-gray-600">Get in touch with our team</p>
          </Link>
        </div>
      </div>
    </div>
  );
}
