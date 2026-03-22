import { useParams, Link } from "react-router";
import { Calendar, Award, MapPin, ArrowLeft, CheckCircle } from "lucide-react";
import { doctors } from "../data/doctors";

export function DoctorDetail() {
  const { id } = useParams();
  const doctor = doctors.find((d) => d.id === id);

  if (!doctor) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Doctor not found</h2>
          <Link to="/doctors" className="text-blue-600 hover:underline">
            Back to Doctors
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full">
      {/* Header */}
      <section className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-12">
        <div className="mx-auto px-4 sm:px-6 lg:px-8">
          <Link
            to="/doctors"
            className="inline-flex items-center text-white hover:text-blue-100 mb-6 transition-colors"
          >
            <ArrowLeft className="w-5 h-5 mr-2" />
            Back to All Doctors
          </Link>
        </div>
      </section>

      {/* Doctor Profile */}
      <section className="py-12 md:py-16">
        <div className="mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Left Column - Image and Quick Info */}
            <div className="lg:col-span-1">
              <div className="sticky top-24">
                <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
                  <div className="aspect-square overflow-hidden">
                    <img
                      src={doctor.image}
                      alt={doctor.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-6">
                    <h1 className="text-2xl font-bold text-gray-900 mb-2">{doctor.name}</h1>
                    <p className="text-blue-600 font-semibold mb-4">{doctor.specialty}</p>

                    <div className="space-y-3 mb-6">
                      <div className="flex items-start gap-3">
                        <Award className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
                        <div>
                          <p className="text-sm font-medium text-gray-700">Qualification</p>
                          <p className="text-sm text-gray-600">{doctor.qualification}</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <Calendar className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
                        <div>
                          <p className="text-sm font-medium text-gray-700">Experience</p>
                          <p className="text-sm text-gray-600">{doctor.experience}</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <MapPin className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
                        <div>
                          <p className="text-sm font-medium text-gray-700">Availability</p>
                          <p className="text-sm text-gray-600">{doctor.availability}</p>
                        </div>
                      </div>
                    </div>

                    <Link
                      to="/about"
                      className="block w-full px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full text-center font-semibold hover:shadow-lg transition-all"
                    >
                      Book Appointment
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column - Detailed Info */}
            <div className="lg:col-span-2 space-y-8">
              {/* About */}
              <div className="bg-white rounded-2xl shadow-lg p-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">About {doctor.name}</h2>
                <p className="text-gray-700 leading-relaxed">{doctor.bio}</p>
              </div>

              {/* Areas of Expertise */}
              <div className="bg-white rounded-2xl shadow-lg p-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Areas of Expertise</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {doctor.expertise.map((exp, idx) => (
                    <div
                      key={idx}
                      className="flex items-start gap-3 p-4 bg-gradient-to-br from-blue-50 to-purple-50 rounded-xl"
                    >
                      <CheckCircle className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-800 font-medium">{exp}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Professional Highlights */}
              <div className="bg-white rounded-2xl shadow-lg p-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Professional Highlights</h2>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0" />
                    <p className="text-gray-700">
                      Board-certified specialist with extensive training in oncological surgery
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0" />
                    <p className="text-gray-700">
                      Published numerous research papers in leading medical journals
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0" />
                    <p className="text-gray-700">
                      Member of international oncology associations and societies
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0" />
                    <p className="text-gray-700">
                      Regular speaker at national and international medical conferences
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0" />
                    <p className="text-gray-700">
                      Committed to patient-centered care and continuous medical education
                    </p>
                  </div>
                </div>
              </div>

              {/* Patient Testimonial */}
              <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl p-8">
                <div className="flex items-start gap-4">
                  <div className="text-5xl text-blue-600">"</div>
                  <div>
                    <p className="text-gray-700 italic mb-4">
                      {doctor.name} provided exceptional care during my treatment. Their expertise and compassionate approach made a difficult journey much easier. I'm grateful for their dedication and skill.
                    </p>
                    <p className="text-sm font-semibold text-gray-900">- Patient Review</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
