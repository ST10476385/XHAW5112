import { Link } from 'react-router-dom';
import { Facebook, Instagram, Twitter, Mail, Phone, MapPin } from 'lucide-react';
import { contactInfo, quickLinks, courseLinks, currentYear } from './data/footerData';
import logo from './logo.jpg'; // Updated to use your new logo image

export default function Footer() {
  return (
    <footer style={{ background: '#1f2937', color: 'white' }}>
      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '48px 16px' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: 32 }}>
          {/* Organization Info */}
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 16 }}>
              <img src={logo} alt="Empowering Nation Logo" style={{ width: 40, height: 40, objectFit: 'contain' }} />
              <div>
                <span style={{ fontSize: 18, color: '#fdba74', fontWeight: 600 }}>Empowering</span>
                <br />
                <span style={{ fontSize: 14, color: '#6ee7b7', fontWeight: 500 }}>Nation</span>
              </div>
            </div>
            <p style={{ color: '#d1d5db', fontSize: 14, marginBottom: 16 }}>
              Building brighter futures through skills development and training for domestic workers and gardeners across Johannesburg.
            </p>
            <div style={{ display: 'flex', gap: 16 }}>
              <a href="#" style={{ color: '#9ca3af' }}><Facebook size={20} /></a>
              <a href="#" style={{ color: '#9ca3af' }}><Instagram size={20} /></a>
              <a href="#" style={{ color: '#9ca3af' }}><Twitter size={20} /></a>
            </div>
          </div>
          {/* Quick Links */}
          <div>
            <h3 style={{ fontWeight: 600, color: '#fdba74', marginBottom: 16 }}>Quick Links</h3>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
              {quickLinks.map((link) => (
                <li key={link.to} style={{ marginBottom: 8 }}>
                  <Link to={link.to} style={{ color: '#d1d5db', textDecoration: 'none', fontSize: 14 }}>{link.label}</Link>
                </li>
              ))}
            </ul>
          </div>
          {/* Our Courses */}
          <div>
            <h3 style={{ fontWeight: 600, color: '#6ee7b7', marginBottom: 16 }}>Our Courses</h3>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
              {courseLinks.map((course) => (
                <li key={course.to} style={{ marginBottom: 8 }}>
                  <Link to={course.to} style={{ color: '#d1d5db', textDecoration: 'none', fontSize: 14 }}>{course.label}</Link>
                </li>
              ))}
            </ul>
          </div>
          {/* Contact Information */}
          <div>
            <h3 style={{ fontWeight: 700, color: 'var(--color-blue-400, #60a5fa)', marginBottom: 16, fontSize: 16 }}>Get in Touch</h3>
            <div style={{ marginBottom: 12, display: 'flex', alignItems: 'flex-start', gap: 8 }}>
              <Mail size={16} style={{ color: 'var(--color-blue-400, #60a5fa)', marginTop: 2 }} />
              <div style={{ fontSize: 14, color: 'var(--color-muted-foreground, #d1d5db)' }}>{contactInfo.email}</div>
            </div>
            <div style={{ marginBottom: 12, display: 'flex', alignItems: 'flex-start', gap: 8 }}>
              <Phone size={16} style={{ color: 'var(--color-green-300, #34d399)', marginTop: 2 }} />
              <div style={{ fontSize: 14, color: 'var(--color-muted-foreground, #d1d5db)' }}>{contactInfo.phone}<br /><span style={{ color: 'var(--color-muted-foreground, #9ca3af)' }}>Mon - Fri: 8AM - 5PM</span></div>
            </div>
            <div style={{ display: 'flex', alignItems: 'flex-start', gap: 8 }}>
              <MapPin size={16} style={{ color: 'var(--color-orange-300, #f87171)', marginTop: 2 }} />
              <div style={{ fontSize: 14, color: 'var(--color-muted-foreground, #d1d5db)' }}>{contactInfo.address}</div>
            </div>
          </div>
        </div>
        {/* Bottom Border */}
        <div style={{ borderTop: '1px solid #374151', marginTop: 32, paddingTop: 32, textAlign: 'center' }}>
          <p style={{ color: '#9ca3af', fontSize: 14 }}>© {currentYear} Empowering Nation. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
