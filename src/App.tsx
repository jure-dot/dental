import { MapPin, Phone, Star, CheckCircle, Smile, Calendar, Users, Heart, Activity, Stethoscope, Shield } from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <div className="w-32">
                <div className="flex items-center space-x-2">
                  <Heart className="w-10 h-10 text-teal-500 fill-teal-500" />
                  <div>
                    <div className="text-2xl font-bold text-gray-800">DentalCare</div>
                    <div className="text-xs text-gray-600">Emergency Clinic</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="hidden md:flex items-center space-x-8">
              <div className="flex items-center space-x-2 text-gray-700">
                <MapPin className="w-5 h-5 text-teal-500" />
                <div className="text-sm">
                  <div className="font-medium">3809 Sunset Street # A,</div>
                  <div>Springfield, CA 91234</div>
                </div>
              </div>

              <div className="flex items-center space-x-3 bg-white px-4 py-2 rounded-lg">
                <img
                  src="https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_92x30dp.png"
                  alt="Google"
                  className="h-6"
                />
                <div className="text-sm">
                  <div className="font-semibold">Rated 4.9 based on</div>
                  <div className="font-bold">205 Google reviews</div>
                </div>
              </div>

              <div className="flex items-center space-x-3">
                <img
                  src="https://images.pexels.com/photos/5215024/pexels-photo-5215024.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop"
                  alt="Doctor"
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <div className="text-sm text-gray-600">Call Now, We're Available</div>
                  <div className="text-2xl font-bold text-red-600">(231) 123-4567</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      <section className="relative bg-gradient-to-r from-slate-700 via-slate-800 to-slate-900 text-white overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0 bg-gradient-to-br from-teal-500/30 to-transparent"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid md:grid-cols-2 gap-12 items-center relative z-10">
            <div>
              <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
                Same-Day, Emergency<br />
                Dental Care in Location
              </h1>
              <p className="text-xl mb-8 text-gray-200">
                We provide fast, affordable and compassionate<br />
                dental care to help you feel better - today.
              </p>

              <div className="space-y-4 mb-8">
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-6 h-6 text-teal-400 flex-shrink-0" />
                  <span className="text-lg">Same-Day Emergency Appointments</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-6 h-6 text-teal-400 flex-shrink-0" />
                  <span className="text-lg">Minimal Discomfort With Anaesthetic</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-6 h-6 text-teal-400 flex-shrink-0" />
                  <span className="text-lg">Emergency Appointments From $X</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-6 h-6 text-teal-400 flex-shrink-0" />
                  <span className="text-lg">Experienced Dental Professionals</span>
                </div>
              </div>

              <div className="bg-slate-700/50 backdrop-blur-sm rounded-lg p-6 max-w-md">
                <div className="flex items-start space-x-4">
                  <img
                    src="https://images.pexels.com/photos/5215024/pexels-photo-5215024.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop"
                    alt="Sarah Hosein"
                    className="w-16 h-16 rounded-full object-cover"
                  />
                  <div className="flex-1">
                    <p className="text-sm mb-3 leading-relaxed">
                      I am deeply grateful that Dr. Desai caught the issue and I now feel very safe and secure under his care. The practice design is lovely too.
                    </p>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-1">
                        {[1,2,3,4,5].map(i => (
                          <Star key={i} className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                        ))}
                        <span className="ml-2 font-semibold">Sarah Hosein</span>
                      </div>
                      <img
                        src="https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_92x30dp.png"
                        alt="Google"
                        className="h-5"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative">
              <img
                src="https://images.pexels.com/photos/5215024/pexels-photo-5215024.jpeg?auto=compress&cs=tinysrgb&w=600&h=800&fit=crop"
                alt="Patient"
                className="absolute inset-0 w-full h-full object-cover opacity-30 rounded-lg"
              />

              <div className="bg-white text-gray-900 rounded-lg shadow-2xl p-8 relative z-10">
                <h2 className="text-3xl font-bold mb-2">Request Appointment</h2>
                <p className="text-gray-600 mb-6">
                  Please complete the contact form to get<br />
                  appointment times & availability.
                </p>

                <form className="space-y-6">
                  <div>
                    <label className="block text-sm font-semibold mb-2">
                      Full Name <span className="text-red-600">*</span>
                    </label>
                    <input
                      type="text"
                      placeholder="Jeremy Fuller"
                      className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold mb-2">
                      Email <span className="text-red-600">*</span>
                    </label>
                    <input
                      type="email"
                      placeholder="j.fuller@gmail.com"
                      className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold mb-2">
                      Phone Number <span className="text-red-600">*</span>
                    </label>
                    <input
                      type="tel"
                      placeholder="231-123-4567"
                      className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold mb-2">
                      How Can We Help You?
                    </label>
                    <select className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500">
                      <option>Please Choose</option>
                      <option>Emergency Appointment</option>
                      <option>General Consultation</option>
                      <option>Follow-up Visit</option>
                    </select>
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-red-600 hover:bg-red-700 text-white font-bold py-4 rounded-full transition duration-300 text-lg shadow-lg"
                  >
                    Book Emergency Appointment
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-gray-50 py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="flex items-center space-x-3">
              <CheckCircle className="w-6 h-6 text-teal-500" />
              <span className="font-medium italic">Accepting New Patients</span>
            </div>
            <div className="flex items-center space-x-3">
              <CheckCircle className="w-6 h-6 text-teal-500" />
              <span className="font-medium italic">Average Patient Rating 4.9/5</span>
            </div>
            <div className="flex items-center space-x-3">
              <CheckCircle className="w-6 h-6 text-teal-500" />
              <span className="font-medium italic">Located in Springfield</span>
            </div>
            <div className="flex items-center space-x-3">
              <CheckCircle className="w-6 h-6 text-teal-500" />
              <span className="font-medium italic">Emergency Appointments</span>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-16 text-gray-900">
            Why Our Patients Choose Us
          </h2>

          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="flex justify-center mb-4">
                <Activity className="w-16 h-16 text-gray-900" strokeWidth={1.5} />
              </div>
              <h3 className="text-2xl font-bold mb-3">Emergency Dental Experts</h3>
              <p className="text-gray-600">
                We can help with any dental emergency you have.
              </p>
            </div>

            <div className="text-center">
              <div className="flex justify-center mb-4">
                <Calendar className="w-16 h-16 text-gray-900" strokeWidth={1.5} />
              </div>
              <h3 className="text-2xl font-bold mb-3">Flexible Availability</h3>
              <p className="text-gray-600">
                Emergency appointment times to fit your schedule.
              </p>
            </div>

            <div className="text-center">
              <div className="flex justify-center mb-4">
                <Smile className="w-16 h-16 text-gray-900" strokeWidth={1.5} />
              </div>
              <h3 className="text-2xl font-bold mb-3">Exceptional Client Care</h3>
              <p className="text-gray-600">
                Friendly team that will put you at your ease.
              </p>
            </div>

            <div className="text-center">
              <div className="flex justify-center mb-4">
                <Smile className="w-16 h-16 text-gray-900" strokeWidth={1.5} />
              </div>
              <h3 className="text-2xl font-bold mb-3">Exceptional Client Care</h3>
              <p className="text-gray-600">
                Friendly team that will put you at your ease.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
            <div>
              <div className="text-orange-500 font-semibold mb-2">What To Expect</div>
              <h2 className="text-4xl font-bold mb-6 text-gray-900">About Your Consultation</h2>
              <p className="text-gray-600 mb-6">
                An initial consultation where one of our dentists will carry out a full mouth examination which includes your teeth, gums, soft tissues, jaw joints and a mouth cancer screen.
              </p>

              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="text-gray-900 mr-2">•</span>
                  <span className="text-gray-700"><strong>Same day online booking or emergency phone hotline booking service</strong></span>
                </li>
                <li className="flex items-start">
                  <span className="text-gray-900 mr-2">•</span>
                  <span className="text-gray-700"><strong>Full emergency dental examination</strong></span>
                </li>
                <li className="flex items-start">
                  <span className="text-gray-900 mr-2">•</span>
                  <span className="text-gray-700"><strong>X Ray examination at no extra cost</strong></span>
                </li>
                <li className="flex items-start">
                  <span className="text-gray-900 mr-2">•</span>
                  <span className="text-gray-700"><strong>3D intra-oral scan if required at no extra cost</strong></span>
                </li>
                <li className="flex items-start">
                  <span className="text-gray-900 mr-2">•</span>
                  <span className="text-gray-700"><strong>Same day pain relieving emergency treatment if required</strong></span>
                </li>
                <li className="flex items-start">
                  <span className="text-gray-900 mr-2">•</span>
                  <span className="text-gray-700"><strong>Same day emergency prescriptions if required</strong></span>
                </li>
                <li className="flex items-start">
                  <span className="text-gray-900 mr-2">•</span>
                  <span className="text-gray-700"><strong>Optional follow up appointments</strong></span>
                </li>
              </ul>
            </div>

            <div>
              <img
                src="https://images.pexels.com/photos/3779705/pexels-photo-3779705.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt="Dental Office"
                className="rounded-lg shadow-lg w-full"
              />
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <img
              src="https://images.pexels.com/photos/3825586/pexels-photo-3825586.jpeg?auto=compress&cs=tinysrgb&w=400"
              alt="Reception"
              className="rounded-lg w-full h-48 object-cover"
            />
            <img
              src="https://images.pexels.com/photos/3779705/pexels-photo-3779705.jpeg?auto=compress&cs=tinysrgb&w=400"
              alt="Dental Chair"
              className="rounded-lg w-full h-48 object-cover"
            />
            <img
              src="https://images.pexels.com/photos/6129043/pexels-photo-6129043.jpeg?auto=compress&cs=tinysrgb&w=400"
              alt="Waiting Area"
              className="rounded-lg w-full h-48 object-cover"
            />
            <img
              src="https://images.pexels.com/photos/4226256/pexels-photo-4226256.jpeg?auto=compress&cs=tinysrgb&w=400"
              alt="Lounge"
              className="rounded-lg w-full h-48 object-cover"
            />
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-4 text-gray-900">
            Meet The Dental Care Team
          </h2>
          <p className="text-center text-gray-600 mb-16 max-w-3xl mx-auto">
            We're approachable and make your visit with us smooth and pleasant as possible. We, as a team create a friendly and safe atmosphere for our patients at Dental Care Team.
          </p>

          <div className="grid md:grid-cols-4 gap-8 mb-16">
            {[1,2,3,4].map((i) => (
              <div key={i} className="text-center">
                <img
                  src={`https://images.pexels.com/photos/${i === 1 ? '5215024' : i === 2 ? '5733371' : i === 3 ? '6627361' : '5452293'}/pexels-photo-${i === 1 ? '5215024' : i === 2 ? '5733371' : i === 3 ? '6627361' : '5452293'}.jpeg?auto=compress&cs=tinysrgb&w=300&h=400&fit=crop`}
                  alt="Dentist"
                  className="w-full h-80 object-cover mb-4"
                />
                <div className="bg-slate-700 text-white py-4">
                  <h3 className="font-bold text-lg">Dentist Name</h3>
                  <p className="text-sm">{i === 1 ? 'Principal Dentist' : i === 2 ? 'Associate Dentist' : i === 3 ? 'Implant Surgeon' : 'Oral Surgeon'}</p>
                  <p className="text-xs mt-1">GDC 123456</p>
                </div>
              </div>
            ))}
          </div>

          <div className="bg-gradient-to-r from-slate-700 to-slate-800 rounded-lg overflow-hidden">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <img
                src="https://images.pexels.com/photos/4173251/pexels-photo-4173251.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt="Book Appointment"
                className="w-full h-full object-cover"
              />
              <div className="p-12 text-white">
                <h2 className="text-3xl font-bold mb-4">Book Your Emergency Appointment</h2>
                <p className="mb-6 text-gray-200">
                  To get started, please complete the contact form or call us on our dedicated clinic number.
                </p>
                <button className="bg-red-600 hover:bg-red-700 text-white font-bold px-8 py-4 rounded-full transition duration-300 shadow-lg">
                  Book Emergency Appointment
                </button>
                <p className="mt-3 text-sm italic text-gray-300">Book Now To Get Appointment Times</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-center mb-6">
            {[1,2,3,4,5].map(i => (
              <Star key={i} className="w-8 h-8 text-yellow-400 fill-yellow-400" />
            ))}
          </div>
          <h2 className="text-4xl font-bold text-center mb-16 text-gray-900">
            Over 100+ Five Star Reviews From Our Customers
          </h2>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-4">"The Pain Relief Was Instant"</h3>
              <p className="text-gray-600 mb-6">
                I cracked my tooth late at night, and they got me in first thing the next morning. The pain relief was instant and the care was incredible. Couldn't have asked for better service!
              </p>
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-amber-900 rounded-full flex items-center justify-center text-white font-bold text-xl">
                  P
                </div>
                <div className="flex-1">
                  <div className="font-semibold">Parshwinda C</div>
                  <div className="flex items-center space-x-1">
                    {[1,2,3,4,5].map(i => (
                      <Star key={i} className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                    ))}
                  </div>
                </div>
                <img
                  src="https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_92x30dp.png"
                  alt="Google"
                  className="h-5"
                />
              </div>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-4">"They Fit Me In Same Day"</h3>
              <p className="text-gray-600 mb-6">
                Severe toothache struck on a Sunday, and they fit me in the same day. The dentist was reassuring, explained everything clearly, and had me out of pain in no time.
              </p>
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-green-700 rounded-full flex items-center justify-center text-white font-bold text-xl">
                  A
                </div>
                <div className="flex-1">
                  <div className="font-semibold">Andrew H</div>
                  <div className="flex items-center space-x-1">
                    {[1,2,3,4,5].map(i => (
                      <Star key={i} className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                    ))}
                  </div>
                </div>
                <img
                  src="https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_92x30dp.png"
                  alt="Google"
                  className="h-5"
                />
              </div>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-4">"Saved The Tooth Same Day"</h3>
              <p className="text-gray-600 mb-6">
                I was terrified when my son knocked out his front tooth, but they saw him right away and saved it! Super professional, fast, and so calming in a stressful moment.
              </p>
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-cyan-600 rounded-full flex items-center justify-center text-white font-bold text-xl">
                  S
                </div>
                <div className="flex-1">
                  <div className="font-semibold">Samual W</div>
                  <div className="flex items-center space-x-1">
                    {[1,2,3,4,5].map(i => (
                      <Star key={i} className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                    ))}
                  </div>
                </div>
                <img
                  src="https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_92x30dp.png"
                  alt="Google"
                  className="h-5"
                />
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-r from-slate-700 to-slate-800 rounded-lg overflow-hidden">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <img
                src="https://images.pexels.com/photos/4173251/pexels-photo-4173251.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt="Book Appointment"
                className="w-full h-full object-cover"
              />
              <div className="p-12 text-white">
                <h2 className="text-3xl font-bold mb-4">Book Your Emergency Appointment</h2>
                <p className="mb-6 text-gray-200">
                  To get started, please complete the contact form or call us on our dedicated clinic number.
                </p>
                <button className="bg-red-600 hover:bg-red-700 text-white font-bold px-8 py-4 rounded-full transition duration-300 shadow-lg">
                  Book Emergency Appointment
                </button>
                <p className="mt-3 text-sm italic text-gray-300">Book Now To Get Appointment Times</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-slate-700 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-4">
            Fast Emergency Pain Relief
          </h2>
          <p className="text-center text-gray-300 mb-16 max-w-3xl mx-auto">
            Our fast dental treatment can fix a variety of emergencies including (but not limited to):
          </p>

          <div className="grid md:grid-cols-4 gap-8 mb-12">
            <div className="text-center">
              <div className="flex justify-center mb-4">
                <Activity className="w-16 h-16" strokeWidth={1.5} />
              </div>
              <h3 className="text-xl font-bold mb-2">Broken Tooth</h3>
              <p className="text-gray-300 text-sm">
                Repairing cracked or chipped teeth
              </p>
            </div>

            <div className="text-center">
              <div className="flex justify-center mb-4">
                <Stethoscope className="w-16 h-16" strokeWidth={1.5} />
              </div>
              <h3 className="text-xl font-bold mb-2">Toothache</h3>
              <p className="text-gray-300 text-sm">
                Alleviate pain fast
              </p>
            </div>

            <div className="text-center">
              <div className="flex justify-center mb-4">
                <Activity className="w-16 h-16" strokeWidth={1.5} />
              </div>
              <h3 className="text-xl font-bold mb-2">Dental Abscess</h3>
              <p className="text-gray-300 text-sm">
                Treatment of infections and swellings
              </p>
            </div>

            <div className="text-center">
              <div className="flex justify-center mb-4">
                <Activity className="w-16 h-16" strokeWidth={1.5} />
              </div>
              <h3 className="text-xl font-bold mb-2">Lost Crown</h3>
              <p className="text-gray-300 text-sm">
                Repairing or replacing damaged crowns
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="flex justify-center mb-4">
                <Activity className="w-16 h-16" strokeWidth={1.5} />
              </div>
              <h3 className="text-xl font-bold mb-2">Wisdom Tooth Pain</h3>
              <p className="text-gray-300 text-sm">
                Treating impacted/infected wisdom teeth
              </p>
            </div>

            <div className="text-center">
              <div className="flex justify-center mb-4">
                <Activity className="w-16 h-16" strokeWidth={1.5} />
              </div>
              <h3 className="text-xl font-bold mb-2">Root Canal</h3>
              <p className="text-gray-300 text-sm">
                Cleaning infected teeth to alleviate toothache
              </p>
            </div>

            <div className="text-center">
              <div className="flex justify-center mb-4">
                <Activity className="w-16 h-16" strokeWidth={1.5} />
              </div>
              <h3 className="text-xl font-bold mb-2">Loose Implant Crown</h3>
              <p className="text-gray-300 text-sm">
                Refixing or replacing implant crowns
              </p>
            </div>

            <div className="text-center">
              <div className="flex justify-center mb-4">
                <Activity className="w-16 h-16" strokeWidth={1.5} />
              </div>
              <h3 className="text-xl font-bold mb-2">Loose Tooth</h3>
              <p className="text-gray-300 text-sm">
                Treating gum infections and wobbly teeth
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-slate-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-6">
                Book Your Emergency Appointment
              </h2>
              <p className="text-gray-300 mb-8">
                Get fast pain relief by booking your emergency dental appointment (only $X).
              </p>

              <div className="space-y-4 mb-8">
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-6 h-6 text-teal-400 flex-shrink-0" />
                  <span>Same-Day Emergency Appointments</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-6 h-6 text-teal-400 flex-shrink-0" />
                  <span>Minimal Discomfort With Anaesthetic</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-6 h-6 text-teal-400 flex-shrink-0" />
                  <span>£45 Initial Appointment</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-6 h-6 text-teal-400 flex-shrink-0" />
                  <span>Experienced Dental Experts</span>
                </div>
              </div>

              <div className="flex items-center space-x-6">
                <button className="bg-red-600 hover:bg-red-700 text-white font-bold px-8 py-4 rounded-full transition duration-300 shadow-lg">
                  Book Emergency Appointment
                </button>
                <div>
                  <div className="text-sm text-gray-300">Call Now, We're Available</div>
                  <div className="text-2xl font-bold">(231) 123-4567</div>
                </div>
              </div>
            </div>

            <div className="bg-gray-200 rounded-lg h-80">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.019284456709!2d-122.41941548468193!3d37.77492977975903!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8085809c6c8f4459%3A0xb10ed6d9b5050fa5!2sTwitter%20HQ!5e0!3m2!1sen!2sus!4v1234567890123!5m2!1sen!2sus"
                className="w-full h-full rounded-lg"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                title="Clinic Location"
              ></iframe>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-slate-900 text-white py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-2 mb-4 md:mb-0">
              <Heart className="w-8 h-8 text-teal-500 fill-teal-500" />
              <div>
                <div className="text-xl font-bold">DentalCare</div>
                <div className="text-xs text-gray-400">Emergency Clinic</div>
              </div>
            </div>

            <div className="text-center text-sm text-gray-400">
              Copyright© Dental Care Clinic. All rights reserved.
            </div>

            <div>
              <a href="#" className="text-sm text-gray-400 hover:text-white transition">
                Privacy & Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
