import { Link, useLocation } from 'react-router-dom';
import { Button } from './ui/button';
import logo from './logo.jpg'; // Updated to use your new logo image

export default function Navigation() {
  const location = useLocation();
  const navLinks = [
    { to: '/', label: 'Home' },
    { to: '/about', label: 'About Us' },
    { to: '/courses', label: 'Courses' },
    { to: '/events', label: 'Events' },
    { to: '/testimonials', label: 'Testimonials' },
    { to: '/contact', label: 'Contact' },
    { to: '/calculator', label: 'Fee Calculator' },
  ];
  const isActive = (path) => location.pathname === path;
  return (
    <nav style={{
      background: '#fff',
      borderBottom: '2px solid var(--color-orange-200, #fdba74)',
      position: 'sticky',
      top: 0,
      zIndex: 50,
      boxShadow: '0 2px 8px 0 rgba(0,0,0,0.04)',
      fontFamily: "'Segoe UI', 'Roboto', Arial, sans-serif",
      fontSize: 'var(--font-size)',
    }}>
      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 16px' }}>
        <div style={{ display: 'flex', alignItems: 'center', height: 64 }}>
          {/* Logo & Branding */}
          <Link to="/" style={{ display: 'flex', alignItems: 'center', gap: 12, textDecoration: 'none', marginRight: 32 }}>
            <img src={logo} alt="Empowering Nation Logo" style={{ width: 48, height: 48, objectFit: 'contain', borderRadius: 24, background: 'var(--color-green-50, #f0fdf4)', border: '2px solid var(--color-green-200, #bbf7d0)' }} />
            <div style={{ display: 'flex', flexDirection: 'column', lineHeight: 1 }}>
              <span style={{ fontSize: 22, color: 'var(--color-orange-600, #ea580c)', fontWeight: 700, letterSpacing: 0.5 }}>Empowering</span>
              <span style={{ fontSize: 16, color: 'var(--color-green-700, #15803d)', fontWeight: 500, letterSpacing: 0.5 }}>Nation</span>
            </div>
          </Link>
          {/* Centered Navigation Links */}
          <div style={{ flex: 1, display: 'flex', justifyContent: 'center', gap: 24 }}>
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                style={{
                  padding: '8px 20px',
                  borderRadius: 16,
                  background: isActive(link.to) ? (link.to === '/courses' ? 'var(--color-orange-500, #f59e42)' : 'var(--color-orange-100, #ffedd5)') : 'transparent',
                  color: isActive(link.to) ? (link.to === '/courses' ? '#fff' : 'var(--color-orange-700, #c2410c)') : 'var(--color-gray-700, #374151)',
                  fontWeight: isActive(link.to) ? 700 : 600,
                  fontSize: 16,
                  textDecoration: 'none',
                  boxShadow: isActive(link.to) && link.to === '/courses' ? '0 2px 8px 0 rgba(234,88,12,0.10)' : 'none',
                  transition: 'all 0.2s',
                }}
              >
                {link.label}
              </Link>
            ))}
          </div>
          {/* Donate Now Button */}
          <div style={{ marginLeft: 32 }}>
            <Link to="/donate">
              <Button style={{ background: 'var(--color-orange-600, #ea580c)', color: 'white', fontWeight: 700, borderRadius: 24, padding: '12px 28px', fontSize: 16, boxShadow: '0 2px 8px 0 rgba(234,88,12,0.10)' }}>
                Donate Now
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
