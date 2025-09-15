import React, { useEffect, useState } from "react";
import "./App.css";

function App() {
  const techImages = [
    "https://images.unsplash.com/photo-1581091012184-5c1fbe763b0e?auto=format&fit=crop&w=1600&q=80",
    "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=1600&q=80",
    "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1600&q=80",
    "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=1600&q=80",
    "https://images.unsplash.com/photo-1581091215367-59ab6a31d2b4?auto=format&fit=crop&w=1600&q=80",
  ];

  const [bgIndex, setBgIndex] = useState(0);
  const [showRegister, setShowRegister] = useState(false);
  const [isLogin, setIsLogin] = useState(true);
  const [currentUser, setCurrentUser] = useState(null);

  // Background auto change
  useEffect(() => {
    const interval = setInterval(() => {
      setBgIndex((prev) => (prev + 1) % techImages.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [techImages.length]);

  const events = [
    {
      title: "AI Innovations",
      image: "https://picsum.photos/400/300?1",
      description: "Latest Artificial Intelligence research & breakthroughs.",
    },
    {
      title: "Startup Pitch",
      image: "https://picsum.photos/400/300?2",
      description: "Pitch your innovative ideas to investors & mentors.",
    },
    {
      title: "Hackathon",
      image: "https://picsum.photos/400/300?3",
      description: "24-hour coding challenge to solve real-world problems.",
    },
    {
      title: "Robotics Show",
      image: "https://picsum.photos/400/300?4",
      description: "Experience next-gen robotics in action.",
    },
    {
      title: "Tech Expo",
      image: "https://picsum.photos/400/300?5",
      description: "Explore cutting-edge projects and student innovations.",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto slide events
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % events.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [events.length]);

  const slidesToShow = 3;
  const totalSlides = events.length;
  const getVisibleSlides = () => {
    const slides = [];
    for (let i = 0; i < slidesToShow; i++) {
      slides.push(events[(currentIndex + i) % totalSlides]);
    }
    return slides;
  };

  // Handle Register/Login
  const handleAuth = (e) => {
    e.preventDefault();
    const username = e.target.username.value;
    const password = e.target.password.value;

    if (isLogin) {
      const savedUser = JSON.parse(localStorage.getItem("user"));
      if (
        savedUser &&
        savedUser.username === username &&
        savedUser.password === password
      ) {
        setCurrentUser(savedUser);
        setShowRegister(false);
      } else {
        alert("Invalid credentials!");
      }
    } else {
      const newUser = { username, password };
      localStorage.setItem("user", JSON.stringify(newUser));
      alert("New candidate registered! Please login.");
      setIsLogin(true);
    }
  };

  const handleLogout = () => {
    setCurrentUser(null);
  };

  // Profile Page
  if (currentUser) {
    return (
      <div
        className="profile-page"
        style={{
          height: "100vh",
          backgroundImage:
            "url('https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1600&q=80')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          color: "white",
          textAlign: "center",
          paddingTop: "100px",
        }}
      >
        <h1>Welcome, {currentUser.username}!</h1>
        <p>
          This site is not usefully, it's only owner learning purpose so sorry
          for that!!
        </p>
        <button className="cta-btn" onClick={handleLogout}>
          Logout
        </button>
      </div>
    );
  }

  return (
    <div className="App">
      {/* Content wrapper with blur */}
      <div className={`content-wrapper ${showRegister ? "blurred" : ""}`}>
        {/* Hero with rotating tech background */}
        <section
          className="hero"
          style={{
            backgroundImage: `linear-gradient(rgba(0,0,0,0.75), rgba(0,0,0,0.75)), url(${techImages[bgIndex]})`,
          }}
        >
          <div className="hero-content" data-animate>
            <h1>Welcome to TECHSPARK 2025</h1>
            <p>Ignite Innovation, Inspire the Future</p>
            <button
              className={`cta-btn ${showRegister ? "slide-left" : ""}`}
              onClick={() => setShowRegister(true)}
            >
              Register Now
            </button>
          </div>
        </section>

        {/* Events Section */}
        <section className="events-slider" data-animate>
          <h2>TECHSPARK Highlights</h2>
          <div className="slider-container">
            {getVisibleSlides().map((event, idx) => (
              <div className="slide-card" key={idx}>
                <img src={event.image} alt={event.title} />
                <h3>{event.title}</h3>
                <p>{event.description}</p>
              </div>
            ))}
          </div>
          <div className="dots">
            {events.map((_, idx) => (
              <span
                key={idx}
                className={`dot ${idx === currentIndex ? "active" : ""}`}
                onClick={() => setCurrentIndex(idx)}
              ></span>
            ))}
          </div>
        </section>

        <footer>
          <p>&copy; 2025 TECHSPARK | All Rights Reserved</p>
        </footer>
      </div>

      {/* Registration/Login Form */}
      {showRegister && (
        <div className="register-form">
          <h2>{isLogin ? "Sign In" : "New Candidate"}</h2>
          <form onSubmit={handleAuth}>
            <input
              type="text"
              name="username"
              placeholder="Username"
              required
            />
            <input
              type="password"
              name="password"
              placeholder="Password"
              required
            />
            <button type="submit" className="cta-btn">
              {isLogin ? "Login" : "Register"}
            </button>
          </form>
          <button className="toggle-btn" onClick={() => setIsLogin(!isLogin)}>
            {isLogin
              ? "New Candidate? Register here"
              : "Already have an account? Login"}
          </button>
          <button className="close-btn" onClick={() => setShowRegister(false)}>
            ✖ Close
          </button>
        </div>
      )}
    </div>
  );
}

export default App;
