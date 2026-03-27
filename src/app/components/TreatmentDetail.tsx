import { useParams, Link } from "react-router";
import { ArrowLeft, AlertCircle, Microscope, HeartPulse, Users } from "lucide-react";
import { treatments } from "../data/treatments";
import { doctors } from "../data/doctors";

export function TreatmentDetail() {
  const { id } = useParams();
  const treatment = treatments.find((t) => t.id === id);

  if (!treatment) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Treatment not found</h2>
          <Link to="/treatments" className="text-blue-600 hover:underline">
            Back to Treatments
          </Link>
        </div>
      </div>
    );
  }

  const specialistDoctors = doctors.filter((doc) =>
    treatment.specialists.includes(doc.name)
  );

  return (
    <div className="w-full">
      {/* Header */}
      <section className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-12">
        <div className="mx-auto px-4 sm:px-6 lg:px-8">
          <Link
            to="/treatments"
            className="inline-flex items-center text-white hover:text-blue-100 mb-6 transition-colors"
          >
            <ArrowLeft className="w-5 h-5 mr-2" />
            Back to All Treatments
          </Link>
          <div className="flex items-center gap-4 mb-4">
            <div className="text-7xl">{treatment.icon}</div>
            <h1 className="text-4xl md:text-5xl font-bold">{treatment.name}</h1>
          </div>
          <p className="text-xl text-blue-100 max-w-3xl">
            {treatment.shortDescription}
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-12 md:py-16">
        <div className="mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-8">
              {/* Overview */}
              <div className="bg-white rounded-2xl shadow-lg p-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Overview</h2>
                <p className="text-gray-700 leading-relaxed">{treatment.fullDescription}</p>
              </div>

              {/* Symptoms */}
              <div className="bg-white rounded-2xl shadow-lg p-8">
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-3 bg-red-100 rounded-xl">
                    <AlertCircle className="w-6 h-6 text-red-600" />
                  </div>
                  <h2 className="text-2xl font-bold text-gray-900">Common Symptoms</h2>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {treatment.symptoms.map((symptom, idx) => (
                    <div
                      key={idx}
                      className="flex items-start gap-3 p-4 bg-red-50 rounded-xl border border-red-100"
                    >
                      <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0" />
                      <span className="text-gray-800">{symptom}</span>
                    </div>
                  ))}
                </div>
                <div className="mt-6 p-4 bg-yellow-50 border border-yellow-200 rounded-xl">
                  <p className="text-sm text-yellow-800">
                    <strong>Important:</strong> If you experience any of these symptoms persistently, please consult a healthcare professional immediately for proper evaluation.
                  </p>
                </div>
              </div>

              {/* Diagnosis */}
              <div className="bg-white rounded-2xl shadow-lg p-8">
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-3 bg-blue-100 rounded-xl">
                    <Microscope className="w-6 h-6 text-blue-600" />
                  </div>
                  <h2 className="text-2xl font-bold text-gray-900">Diagnostic Procedures</h2>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {treatment.diagnosis.map((diagnostic, idx) => (
                    <div
                      key={idx}
                      className="flex items-start gap-3 p-4 bg-blue-50 rounded-xl border border-blue-100"
                    >
                      <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0" />
                      <span className="text-gray-800 font-medium">{diagnostic}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Treatment Options */}
              <div className="bg-white rounded-2xl shadow-lg p-8">
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-3 bg-green-100 rounded-xl">
                    <HeartPulse className="w-6 h-6 text-green-600" />
                  </div>
                  <h2 className="text-2xl font-bold text-gray-900">Treatment Options</h2>
                </div>
                <div className="space-y-3">
                  {treatment.treatmentOptions.map((option, idx) => (
                    <div
                      key={idx}
                      className="flex items-start gap-3 p-4 bg-gradient-to-br from-green-50 to-blue-50 rounded-xl border border-green-100"
                    >
                      <div className="flex items-center justify-center w-8 h-8 bg-green-500 text-white rounded-full font-bold text-sm flex-shrink-0">
                        {idx + 1}
                      </div>
                      <div>
                        <span className="text-gray-800 font-semibold">{option}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-white rounded-2xl shadow-lg p-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Subcategories</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {treatment.subcategories.map((subcategory) => (
                    <Link
                      key={subcategory.id}
                      to={`/treatments/${treatment.id}/${subcategory.id}`}
                      className="block rounded-2xl border border-cyan-100 bg-cyan-50/50 p-5 transition hover:border-cyan-300 hover:bg-cyan-50"
                    >
                      <h3 className="text-lg font-bold text-gray-900">{subcategory.name}</h3>
                      <p className="mt-2 text-sm leading-6 text-gray-700">{subcategory.summary}</p>
                      <div className="mt-4 text-sm font-semibold text-cyan-700">Open details</div>
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="sticky top-24 space-y-6">
                {/* Our Specialists */}
                <div className="bg-white rounded-2xl shadow-lg p-6">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="p-3 bg-purple-100 rounded-xl">
                      <Users className="w-6 h-6 text-purple-600" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900">Our Specialists</h3>
                  </div>
                  <div className="space-y-4">
                    {specialistDoctors.map((doctor) => (
                      <Link
                        key={doctor.id}
                        to={`/doctors/${doctor.id}`}
                        className="block group"
                      >
                        <div className="flex items-center gap-3 p-3 rounded-xl hover:bg-purple-50 transition-colors">
                          <img
                            src={doctor.image}
                            alt={doctor.name}
                            className="w-16 h-16 rounded-full object-cover"
                          />
                          <div>
                            <h4 className="font-semibold text-gray-900 group-hover:text-purple-600 transition-colors">
                              {doctor.name}
                            </h4>
                            <p className="text-sm text-gray-600">{doctor.specialty}</p>
                          </div>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>

                {/* Contact CTA */}
                <div className="bg-gradient-to-br from-blue-600 to-purple-600 rounded-2xl p-6 text-white">
                  <h3 className="text-xl font-bold mb-3">Need Consultation?</h3>
                  <p className="text-blue-100 text-sm mb-6">
                    Our medical team is here to discuss your treatment options and answer all your questions.
                  </p>
                  <Link
                    to="/contact"
                    className="block w-full px-6 py-3 bg-white text-blue-600 rounded-full text-center font-semibold hover:shadow-xl transition-all"
                  >
                    Book Appointment
                  </Link>
                </div>

                {/* Quick Info */}
                <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl p-6 border border-blue-100">
                  <h3 className="font-bold text-gray-900 mb-3">Quick Information</h3>
                  <ul className="space-y-2 text-sm text-gray-700">
                    <li className="flex items-start gap-2">
                      <span className="text-blue-600">•</span>
                      <span>24/7 Emergency Services Available</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-blue-600">•</span>
                      <span>Insurance Accepted</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-blue-600">•</span>
                      <span>Multidisciplinary Care Team</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-blue-600">•</span>
                      <span>Advanced Treatment Technologies</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
