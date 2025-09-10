import DonatePage from "./DonatePage";
import DemoPaymentPage from "./DemoPaymentPage";
import FeeCalculatorPage from "./FeeCalculatorPage";
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { Button } from './ui/button';
import { Card, CardContent } from './ui/card';
import { GraduationCap, Users, Award, Heart } from 'lucide-react';
import AboutPage from './AboutPage';
import CoursesPage from './CoursesPage';
import CourseDetailPage from './CourseDetailPage';
import EventsPage from './EventsPage';
import TestimonialsPage from './TestimonialsPage';
import ContactPage from './ContactPage';
import Footer from './Footer';
import Navigation from './Navigation';
import logo from './logo.jpg'; // Updated to use your new logo image

// Removed old NavBar, using Navigation instead

function HomePage() {
  return (
    <div style={{ minHeight: '100vh', background: 'white' }}>
      {/* Hero Section */}
      <section style={{ position: 'relative', background: 'linear-gradient(90deg, #ea580c 0%, #fbbf24 50%, #fde047 100%)', color: 'white' }}>
        <div style={{ position: 'absolute', inset: 0, background: 'rgba(0,0,0,0.20)' }}></div>
        <div style={{ position: 'relative', maxWidth: 1200, margin: '0 auto', padding: '96px 16px', zIndex: 1 }}>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 48, alignItems: 'center' }}>
            <div style={{ flex: 1, minWidth: 280, zIndex: 2 }}>
              <h1 style={{ fontSize: '2.5rem', fontWeight: 700, marginBottom: 24, color: 'white' }}>
                Building Brighter Futures – One Course at a Time
              </h1>
              <p style={{ fontSize: 20, color: '#fed7aa', maxWidth: 600, marginBottom: 32 }}>
                Empowering domestic workers and gardeners with skills training to create better opportunities and transform communities across Johannesburg.
              </p>
              <div style={{ display: 'flex', flexDirection: 'row', gap: 16, maxWidth: 400 }}>
                <Link to="/courses">
                  <Button size="lg" style={{ background: 'white', color: '#ea580c', fontSize: 18, padding: '12px 32px', fontWeight: 600, borderRadius: 8 }}>Explore Our Courses</Button>
                </Link>
                <Link to="/donate">
                  <Button size="lg" style={{ background: 'transparent', border: '2px solid white', color: 'white', fontSize: 18, padding: '12px 32px', fontWeight: 600, borderRadius: 8 }}>Support Our Mission</Button>
                </Link>
              </div>
            </div>
            <div style={{ flex: 1, minWidth: 280, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
              <img
                src={require('./Urban Gardening Techniques are a fantastic and….jpeg')}
                alt="Urban Gardening Techniques"
                style={{
                  borderRadius: 16,
                  boxShadow: '0 8px 32px 0 rgba(0,0,0,0.20)',
                  maxWidth: 400,
                  width: '100%',
                  height: 'auto',
                  aspectRatio: '1/1', // modern browsers
                  objectFit: 'cover',
                  background: '#fff',
                  minWidth: 220,
                }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section style={{ padding: '64px 0', background: 'var(--color-green-50, #f0fdf4)' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 16px' }}>
          <div style={{ textAlign: 'center', marginBottom: 48 }}>
            <div style={{ display: 'flex', justifyContent: 'center', marginBottom: 24 }}>
              <img 
                src={logo} 
                alt="Empowering Nation Logo" 
                style={{ width: 80, height: 80, objectFit: 'contain' }}
              />
            </div>
            <h2 style={{ color: 'var(--color-orange-700, #c2410c)', marginBottom: 16, fontSize: '2rem', fontWeight: 700 }}>About Empowering Nation</h2>
            <p style={{ fontSize: 18, color: 'var(--color-gray-700, #374151)', maxWidth: 700, margin: '0 auto' }}>
              Established in 2025, Empowering Nation offers skills training courses in Johannesburg to uplift domestic workers and gardeners. Our mission is to provide professional development opportunities that create pathways to better employment and entrepreneurship.
            </p>
          </div>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 32 }}>
            <>
              <Card style={{ border: '2px solid var(--color-orange-200, #fed7aa)', flex: 1, minWidth: 220, boxShadow: '0 2px 8px 0 rgba(0,0,0,0.04)' }}>
                <CardContent style={{ padding: 24, textAlign: 'center' }}>
                  <Users style={{ height: 48, width: 48, color: 'var(--color-orange-600, #ea580c)', margin: '0 auto 16px' }} />
                  <h3 style={{ color: 'var(--color-green-700, #15803d)', marginBottom: 8, fontSize: '1.2rem', fontWeight: 600 }}>Hundreds Trained</h3>
                  <p style={{ color: 'var(--color-gray-600, #6b7280)' }}>
                    We've successfully trained hundreds of domestic workers and gardeners in our comprehensive programs.
                  </p>
                </CardContent>
              </Card>
              <Card style={{ border: '2px solid var(--color-orange-200, #fed7aa)', flex: 1, minWidth: 220, boxShadow: '0 2px 8px 0 rgba(0,0,0,0.04)' }}>
                <CardContent style={{ padding: 24, textAlign: 'center' }}>
                  <GraduationCap style={{ height: 48, width: 48, color: 'var(--color-green-600, #16a34a)', margin: '0 auto 16px' }} />
                  <h3 style={{ color: 'var(--color-green-700, #15803d)', marginBottom: 8, fontSize: '1.2rem', fontWeight: 600 }}>Two Program Types</h3>
                  <p style={{ color: 'var(--color-gray-600, #6b7280)' }}>
                    Six-month Learnerships and six-week Short Skills Training Programmes to suit different needs.
                  </p>
                </CardContent>
              </Card>
              <Card style={{ border: '2px solid var(--color-orange-200, #fed7aa)', flex: 1, minWidth: 220, boxShadow: '0 2px 8px 0 rgba(0,0,0,0.04)' }}>
                <CardContent style={{ padding: 24, textAlign: 'center' }}>
                  <Award style={{ height: 48, width: 48, color: 'var(--color-orange-600, #ea580c)', margin: '0 auto 16px' }} />
                  <h3 style={{ color: 'var(--color-green-700, #15803d)', marginBottom: 8, fontSize: '1.2rem', fontWeight: 600 }}>Marketable Skills</h3>
                  <p style={{ color: 'var(--color-gray-600, #6b7280)' }}>
                    Our graduates gain valuable skills that make them more employable and enable higher earning potential.
                  </p>
                </CardContent>
              </Card>
            </>
          </div>
        </div>
      </section>

      {/* Quick Links Section */}
      <section style={{ padding: '64px 0', background: 'white' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 16px' }}>
          <h2 style={{ textAlign: 'center', color: 'var(--color-orange-700, #c2410c)', marginBottom: 48, fontSize: '2rem', fontWeight: 700 }}>Explore Our Programs</h2>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 32 }}>
            <Card style={{ border: '2px solid var(--color-green-200, #bbf7d0)', flex: 1, minWidth: 280, boxShadow: '0 2px 8px 0 rgba(0,0,0,0.04)' }}>
              <CardContent style={{ padding: 32, textAlign: 'center' }}>
                <GraduationCap style={{ height: 64, width: 64, color: 'var(--color-green-600, #16a34a)', margin: '0 auto 16px' }} />
                <h3 style={{ color: 'var(--color-green-700, #15803d)', fontSize: '1.25rem', fontWeight: 600, marginBottom: 8 }}>Six-Month Courses</h3>
                <p style={{ color: 'var(--color-gray-600, #6b7280)' }}>
                  Comprehensive 12-week programs including First Aid, Sewing, Landscaping, and Life Skills.
                </p>
                <p style={{ color: 'var(--color-orange-600, #ea580c)', fontWeight: 600, margin: '16px 0' }}>R1,500 per course</p>
                <Link to="/courses?type=six-month">
                  <Button style={{ background: 'var(--color-green-600, #16a34a)', color: 'white', fontWeight: 600, borderRadius: 8, padding: '12px 32px', fontSize: 16, marginTop: 8 }}>View Six-Month Courses</Button>
                </Link>
              </CardContent>
            </Card>
            <Card style={{ border: '2px solid var(--color-orange-200, #fed7aa)', flex: 1, minWidth: 280, boxShadow: '0 2px 8px 0 rgba(0,0,0,0.04)' }}>
              <CardContent style={{ padding: 32, textAlign: 'center' }}>
                <Heart style={{ height: 64, width: 64, color: 'var(--color-orange-600, #ea580c)', margin: '0 auto 16px' }} />
                <h3 style={{ color: 'var(--color-orange-700, #c2410c)', fontSize: '1.25rem', fontWeight: 600, marginBottom: 8 }}>Six-Week Courses</h3>
                <p style={{ color: 'var(--color-gray-600, #6b7280)' }}>
                  Focused short courses in Child Minding, Cooking, and Garden Maintenance.
                </p>
                <p style={{ color: 'var(--color-orange-600, #ea580c)', fontWeight: 600, margin: '16px 0' }}>R750 per course</p>
                <Link to="/courses?type=six-week">
                  <Button style={{ background: 'var(--color-orange-600, #ea580c)', color: 'white', fontWeight: 600, borderRadius: 8, padding: '12px 32px', fontSize: 16, marginTop: 8 }}>View Six-Week Courses</Button>
                </Link>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section style={{ padding: '64px 0', background: 'linear-gradient(90deg, #16a34a 0%, #166534 100%)', color: 'white', textAlign: 'center' }}>
        <div style={{ maxWidth: 800, margin: '0 auto', padding: '0 16px', textAlign: 'center' }}>
          <h2 style={{ color: 'white', marginBottom: 24, fontSize: '2rem', fontWeight: 700 }}>Ready to Transform Your Future?</h2>
          <p style={{ fontSize: 20, color: 'var(--color-green-100, #dcfce7)', marginBottom: 32 }}>
            Join hundreds of graduates who have improved their lives through our training programs.
          </p>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 16, justifyContent: 'center' }}>
            <Link to="/courses">
              <Button size="lg" style={{ background: 'white', color: 'var(--color-green-700, #15803d)', fontWeight: 600, borderRadius: 8, padding: '12px 32px', fontSize: 16 }}>Browse All Courses</Button>
            </Link>
            <Link to="/contact">
              <Button size="lg" style={{ background: 'transparent', border: '2px solid white', color: 'white', fontWeight: 600, borderRadius: 8, padding: '12px 32px', fontSize: 16 }}>Contact Us</Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

function App() {
  return (
    <Router>
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          minHeight: '100vh',
          fontFamily: "'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', Arial, sans-serif",
          fontSize: 'var(--font-size)',
          background: 'var(--background, #fff)',
          color: 'var(--foreground, #222)',
        }}
      >
        <Navigation />
        <div style={{ flex: 1 }}>
          <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/courses" element={<CoursesPage />} />
              <Route path="/courses/:courseId" element={<CourseDetailPage />} />
            <Route path="/events" element={<EventsPage />} />
            <Route path="/testimonials" element={<TestimonialsPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/calculator" element={<FeeCalculatorPage />} />
            <Route path="/fake-payment" element={<DemoPaymentPage />} />
            <Route path="/donate" element={<DonatePage />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
