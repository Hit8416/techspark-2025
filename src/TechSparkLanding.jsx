import React from "react";

export default function TechSparkLanding() {
  return (
    <div className="min-h-screen font-sans text-gray-800 bg-white">
      {/* NAVBAR */}
      <header className="fixed w-full bg-white/60 backdrop-blur-md z-40">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="w-10 h-10 flex items-center justify-center rounded-lg bg-blue-600 text-white font-bold">
              TS
            </div>
            <div>
              <h1 className="text-lg font-semibold">TECHSPARK 2025</h1>
              <p className="text-xs text-gray-600">
                LD College of Engineering — Tagore Hall
              </p>
            </div>
          </div>
          <nav className="hidden md:flex gap-6 items-center text-sm">
            <a href="#about" className="hover:underline">
              About
            </a>
            <a href="#highlights" className="hover:underline">
              Highlights
            </a>
            <a href="#schedule" className="hover:underline">
              Schedule
            </a>
            <a href="#speakers" className="hover:underline">
              Speakers
            </a>
            <a
              href="#register"
              className="px-4 py-2 bg-blue-600 text-white rounded-lg shadow"
            >
              Register
            </a>
          </nav>
          <button className="md:hidden p-2 rounded-md">☰</button>
        </div>
      </header>

      {/* HERO */}
      <section className="pt-28">
        <div
          className="h-[60vh] md:h-[72vh] flex items-center"
          style={{
            backgroundImage:
              "linear-gradient(to right, rgba(10, 25, 47, 0.55), rgba(3, 105, 161, 0.28)), url('https://images.unsplash.com/photo-1545235617-9465b5f0f9f4?auto=format&fit=crop&w=1400&q=80')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="max-w-6xl mx-auto px-6">
            <div className="max-w-3xl text-white">
              <h2 className="text-4xl md:text-5xl font-extrabold leading-tight">
                Ignite Ideas at{" "}
                <span className="text-yellow-300">TECHSPARK 2025</span>
              </h2>
              <p className="mt-4 text-lg md:text-xl text-white/90">
                Where Innovation Lights the Future — join students, creators and
                industry leaders for a day of tech, talks and competitions.
              </p>
              <div className="mt-6 flex gap-4">
                <a
                  href="#register"
                  className="inline-block px-6 py-3 bg-yellow-300 text-black font-semibold rounded-lg shadow"
                >
                  Register Now
                </a>
                <a
                  href="#highlights"
                  className="inline-block px-6 py-3 border border-white/30 rounded-lg"
                >
                  See Highlights
                </a>
              </div>
              <div className="mt-6 text-sm text-white/90">
                <strong>📅 Date:</strong> 12 September 2025 &nbsp; • &nbsp;{" "}
                <strong>📍 Venue:</strong> Tagore Hall, LDCE
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="max-w-6xl mx-auto px-6 py-16">
        <h3 className="text-2xl font-bold">About TECHSPARK 2025</h3>
        <p className="mt-4 text-gray-700">
          TECHSPARK is LD College of Engineering's flagship tech festival where
          creativity meets engineering. Expect hands-on workshops, competitions,
          a startup showcase, live cultural performances and keynote sessions
          from experts in industry and academia.
        </p>
      </section>

      {/* REGISTER */}
      <section id="register" className="max-w-6xl mx-auto px-6 py-16">
        <h4 className="text-2xl font-bold">Register for TECHSPARK 2025</h4>
        <p className="mt-3 text-gray-700">
          Limited seats available. Reserve your spot now.
        </p>
        <form className="mt-6 bg-white p-6 rounded-xl shadow-md max-w-md">
          <label className="block text-sm">Full Name</label>
          <input
            className="mt-2 w-full p-3 border rounded-md"
            placeholder="Your name"
          />
          <label className="block text-sm mt-4">Email</label>
          <input
            className="mt-2 w-full p-3 border rounded-md"
            placeholder="you@email.com"
          />
          <button
            type="button"
            className="mt-6 w-full px-4 py-3 bg-blue-600 text-white rounded-lg font-semibold"
          >
            Submit Registration
          </button>
        </form>
      </section>

      {/* FOOTER */}
      <footer className="bg-gray-900 text-white py-6 text-center">
        © {new Date().getFullYear()} TECHSPARK • LD College of Engineering
      </footer>
    </div>
  );
}
