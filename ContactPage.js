import { useState } from 'react';
import { Card, CardContent } from './ui/card';
import { Button } from './ui/button';
// No Input, Label, or Textarea components exist, so use native elements below
import { MapPin, Phone, Mail, Clock, MessageSquare, Send } from 'lucide-react';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (field, value) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      alert('Please fill in all required fields.');
      return;
    }
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({ name: '', email: '', subject: '', message: '' });
    }, 3000);
  };

  const venues = [
    {
      name: 'Main Campus',
      address: '45 Hope Street, Johannesburg, 2001',
      description: 'Our main training facility with all course offerings',
      phone: '+27 11 123 4567',
      email: 'main@empoweringnation.org'
    },
    {
      name: 'Alexandra Branch',
      address: '12 Progress Avenue, Alexandra, 2090',
      description: 'Community-focused branch serving the Alexandra township',
      phone: '+27 11 765 4321',
      email: 'alexandra@empoweringnation.org'
    },
    {
      name: 'Soweto Campus',
      address: '88 Freedom Square, Soweto, 1818',
      description: 'Full-service campus with specialized workshops',
      phone: '+27 11 987 6543',
      email: 'soweto@empoweringnation.org'
    }
  ];

  return (
    <div style={{ padding: '64px 0', background: 'var(--color-gray-50, #f9fafb)' }}>
      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 24px' }}>
        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: 48 }}>
          <h1 style={{ color: 'var(--color-orange-700)', marginBottom: 16, fontSize: '2.5rem', fontWeight: 700 }}>Contact Us</h1>
          <p style={{ fontSize: 18, color: 'var(--color-gray-700)', maxWidth: 700, margin: '0 auto' }}>
            Have questions about our courses? Need guidance on which program is right for you? We're here to help you take the next step toward a brighter future.
          </p>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 32, marginBottom: 48 }}>
          {/* Contact Form */}
          <div style={{ gridColumn: 'span 2', minWidth: 0 }}>
            <Card style={{ border: '2px solid var(--color-orange-200)', background: 'var(--color-orange-50)' }}>
              <div style={{ padding: '16px 24px 0 24px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 8, color: 'var(--color-orange-700)', fontWeight: 700, fontSize: 22 }}>
                  <MessageSquare style={{ height: 20, width: 20 }} />
                  Send Us a Message
                </div>
              </div>
              <CardContent>
                {isSubmitted ? (
                  <div style={{ textAlign: 'center', padding: '32px 0' }}>
                    <div style={{ width: 64, height: 64, background: 'var(--color-green-100)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 16px' }}>
                      <Send style={{ height: 32, width: 32, color: 'var(--color-green-600)' }} />
                    </div>
                    <h3 style={{ fontSize: 22, fontWeight: 600, color: 'var(--color-green-700)', marginBottom: 8 }}>Message Sent Successfully!</h3>
                    <p style={{ color: 'var(--color-gray-600)' }}>
                      Thank you for contacting us. We'll get back to you within 24 hours.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
                    <div style={{ display: 'flex', gap: 16 }}>
                      <div style={{ flex: 1 }}>
                        <label htmlFor="name" style={{ fontWeight: 500, color: 'var(--color-gray-800)', display: 'block', marginBottom: 4 }}>Full Name *</label>
                        <input
                          id="name"
                          type="text"
                          placeholder="Enter your full name"
                          value={formData.name}
                          onChange={e => handleInputChange('name', e.target.value)}
                          required
                          style={{ width: '100%', padding: 10, borderRadius: 6, border: '1px solid #fbbf24', fontSize: 16, marginBottom: 0, background: '#fff8e1' }}
                        />
                      </div>
                      <div style={{ flex: 1 }}>
                        <label htmlFor="email" style={{ fontWeight: 500, color: 'var(--color-gray-800)', display: 'block', marginBottom: 4 }}>Email Address *</label>
                        <input
                          id="email"
                          type="email"
                          placeholder="your.email@example.com"
                          value={formData.email}
                          onChange={e => handleInputChange('email', e.target.value)}
                          required
                          style={{ width: '100%', padding: 10, borderRadius: 6, border: '1px solid #fbbf24', fontSize: 16, marginBottom: 0, background: '#fff8e1' }}
                        />
                      </div>
                    </div>
                    <div>
                      <label htmlFor="subject" style={{ fontWeight: 500, color: 'var(--color-gray-800)', display: 'block', marginBottom: 4 }}>Subject</label>
                      <input
                        id="subject"
                        type="text"
                        placeholder="What is your message about?"
                        value={formData.subject}
                        onChange={e => handleInputChange('subject', e.target.value)}
                        style={{ width: '100%', padding: 10, borderRadius: 6, border: '1px solid #fbbf24', fontSize: 16, marginBottom: 0, background: '#fff8e1' }}
                      />
                    </div>
                    <div>
                      <label htmlFor="message" style={{ fontWeight: 500, color: 'var(--color-gray-800)', display: 'block', marginBottom: 4 }}>Message *</label>
                      <textarea
                        id="message"
                        placeholder="Tell us how we can help you..."
                        value={formData.message}
                        onChange={e => handleInputChange('message', e.target.value)}
                        rows={6}
                        required
                        style={{ width: '100%', padding: 10, borderRadius: 6, border: '1px solid #fbbf24', fontSize: 16, marginBottom: 0, resize: 'vertical', background: '#fff8e1' }}
                      />
                    </div>
                    <Button 
                      type="submit" 
                      style={{ width: '100%', background: '#EA580C', color: 'white', fontWeight: 600, display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8, borderRadius: 8, fontSize: 16, border: 'none' }}
                    >
                      <Send style={{ height: 18, width: 18 }} />
                      Send Message
                    </Button>
                    {/* Organization image below button */}
                    <div style={{ marginTop: 24, textAlign: 'center' }}>
                      <img
                        src={require('./assets/8.jpeg')}
                        alt="Empowering the Nation organization"
                        style={{ maxWidth: '100%', maxHeight: 340, width: '100%', borderRadius: 12, boxShadow: '0 2px 12px 0 #e0e7ef', objectFit: 'contain', background: 'var(--color-orange-100, #ffedd5)' }}
                      />
                    </div>
                  </form>
                )}
              </CardContent>
            </Card>
          </div>
          {/* Contact Information */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
            {/* Quick Contact */}
            <Card style={{ border: '2.5px solid #16a34a', background: '#f0fdf4', boxShadow: '0 2px 8px 0 #d1fae5' }}>
              <div style={{ padding: '20px 28px 0 28px' }}>
                <div style={{ color: '#15803d', fontWeight: 700, fontSize: 20, marginBottom: 4 }}>Quick Contact</div>
              </div>
              <CardContent style={{ display: 'flex', flexDirection: 'column', gap: 20, padding: '18px 28px 24px 28px' }}>
                <div style={{ display: 'flex', alignItems: 'flex-start', gap: 14 }}>
                  <Phone style={{ height: 22, width: 22, color: '#16a34a', marginTop: 4, flexShrink: 0 }} />
                  <div>
                    <p style={{ fontWeight: 600, color: '#15803d', fontSize: 16, marginBottom: 2 }}>Main Office</p>
                    <p style={{ color: '#166534', fontWeight: 500, fontSize: 15 }}>+27 11 123 4567</p>
                  </div>
                </div>
                <div style={{ display: 'flex', alignItems: 'flex-start', gap: 14 }}>
                  <Mail style={{ height: 22, width: 22, color: '#16a34a', marginTop: 4, flexShrink: 0 }} />
                  <div>
                    <p style={{ fontWeight: 600, color: '#15803d', fontSize: 16, marginBottom: 2 }}>General Inquiries</p>
                    <p style={{ color: '#166534', fontWeight: 500, fontSize: 15 }}>info@empoweringnation.org</p>
                  </div>
                </div>
                <div style={{ display: 'flex', alignItems: 'flex-start', gap: 14 }}>
                  <Clock style={{ height: 22, width: 22, color: '#16a34a', marginTop: 4, flexShrink: 0 }} />
                  <div>
                    <p style={{ fontWeight: 600, color: '#15803d', fontSize: 16, marginBottom: 2 }}>Office Hours</p>
                    <p style={{ color: '#166534', fontWeight: 500, fontSize: 15 }}>Monday - Friday</p>
                    <p style={{ color: '#166534', fontWeight: 500, fontSize: 15 }}>8:00 AM - 5:00 PM</p>
                  </div>
                </div>
              </CardContent>
            </Card>
            {/* FAQ */}
            <Card style={{ border: '2px solid #c4b5fd', background: '#f5f3ff' }}>
              <div style={{ padding: '28px 36px 0 36px' }}>
                <div style={{ color: '#7c3aed', fontWeight: 700, fontSize: 22, marginBottom: 8 }}>Frequently Asked</div>
              </div>
              <CardContent style={{ display: 'flex', flexDirection: 'column', gap: 24, fontSize: 16, padding: '20px 36px 32px 36px' }}>
                <div>
                  <p style={{ fontWeight: 600, color: 'var(--color-gray-800)', marginBottom: 6, fontSize: 17 }}>How do I apply for courses?</p>
                  <p style={{ color: 'var(--color-gray-700)', fontSize: 15, lineHeight: 1.6 }}>Use our Fee Calculator to select courses and request a consultation.</p>
                </div>
                <div>
                  <p style={{ fontWeight: 600, color: 'var(--color-gray-800)', marginBottom: 6, fontSize: 17 }}>Are there payment plans?</p>
                  <p style={{ color: 'var(--color-gray-700)', fontSize: 15, lineHeight: 1.6 }}>Yes, we offer flexible payment options. Contact us to discuss.</p>
                </div>
                <div>
                  <p style={{ fontWeight: 600, color: 'var(--color-gray-800)', marginBottom: 6, fontSize: 17 }}>When do courses start?</p>
                  <p style={{ color: 'var(--color-gray-700)', fontSize: 15, lineHeight: 1.6 }}>We have multiple start dates throughout the year. Check individual course pages.</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
        {/* Our Locations */}
        <section style={{ marginTop: 64 }}>
          <h2 style={{ textAlign: 'center', color: '#7c3aed', marginBottom: 32, fontSize: 24, fontWeight: 700, border: '2px solid #c4b5fd', borderRadius: 10, padding: '12px 0', background: '#f5f3ff' }}>Our Locations</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: 24, marginBottom: 32 }}>
            {/* Main Campus - blue outline */}
            <Card style={{ border: '2.5px solid #93c5fd', background: '#f0f6ff', boxShadow: '0 2px 8px 0 #e0e7ef' }}>
              <CardContent style={{ padding: 24 }}>
                <div style={{ display: 'flex', alignItems: 'flex-start', gap: 12, marginBottom: 12 }}>
                  <MapPin style={{ height: 20, width: 20, color: '#60a5fa', marginTop: 4, flexShrink: 0 }} />
                  <div>
                    <h3 style={{ fontWeight: 700, color: '#60a5fa', fontSize: 18 }}>Main Campus</h3>
                    <p style={{ fontSize: 15, color: '#1e293b', fontWeight: 500 }}>45 Hope Street, Johannesburg, 2001</p>
                  </div>
                </div>
                <p style={{ fontSize: 14, color: '#60a5fa', marginBottom: 16, fontWeight: 500 }}>Our main training facility with all course offerings</p>
                <div style={{ display: 'flex', flexDirection: 'column', gap: 8, fontSize: 14 }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                    <Phone style={{ height: 16, width: 16, color: '#60a5fa' }} />
                    <span style={{ color: '#60a5fa', fontWeight: 500 }}>+27 11 123 4567</span>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                    <Mail style={{ height: 16, width: 16, color: '#60a5fa' }} />
                    <span style={{ color: '#60a5fa', fontWeight: 500 }}>main@empoweringnation.org</span>
                  </div>
                </div>
              </CardContent>
            </Card>
            {/* Alexandra Branch */}
            <Card style={{ border: '2.5px solid #93c5fd', background: '#f0f6ff', boxShadow: '0 2px 8px 0 #e0e7ef' }}>
              <CardContent style={{ padding: 24 }}>
                <div style={{ display: 'flex', alignItems: 'flex-start', gap: 12, marginBottom: 12 }}>
                  <MapPin style={{ height: 20, width: 20, color: '#60a5fa', marginTop: 4, flexShrink: 0 }} />
                  <div>
                    <h3 style={{ fontWeight: 700, color: '#60a5fa', fontSize: 18 }}>Alexandra Branch</h3>
                    <p style={{ fontSize: 15, color: '#1e293b', fontWeight: 500 }}>12 Progress Avenue, Alexandra, 2090</p>
                  </div>
                </div>
                <p style={{ fontSize: 14, color: '#60a5fa', marginBottom: 16, fontWeight: 500 }}>Community-focused branch serving the Alexandra township</p>
                <div style={{ display: 'flex', flexDirection: 'column', gap: 8, fontSize: 14 }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                    <Phone style={{ height: 16, width: 16, color: '#60a5fa' }} />
                    <span style={{ color: '#60a5fa', fontWeight: 500 }}>+27 11 765 4321</span>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                    <Mail style={{ height: 16, width: 16, color: '#60a5fa' }} />
                    <span style={{ color: '#60a5fa', fontWeight: 500 }}>alexandra@empoweringnation.org</span>
                  </div>
                </div>
              </CardContent>
            </Card>
            {/* Soweto Campus */}
            <Card style={{ border: '2.5px solid #93c5fd', background: '#f0f6ff', boxShadow: '0 2px 8px 0 #e0e7ef' }}>
              <CardContent style={{ padding: 24 }}>
                <div style={{ display: 'flex', alignItems: 'flex-start', gap: 12, marginBottom: 12 }}>
                  <MapPin style={{ height: 20, width: 20, color: '#60a5fa', marginTop: 4, flexShrink: 0 }} />
                  <div>
                    <h3 style={{ fontWeight: 700, color: '#60a5fa', fontSize: 18 }}>Soweto Campus</h3>
                    <p style={{ fontSize: 15, color: '#1e293b', fontWeight: 500 }}>88 Freedom Square, Soweto, 1818</p>
                  </div>
                </div>
                <p style={{ fontSize: 14, color: '#60a5fa', marginBottom: 16, fontWeight: 500 }}>Full-service campus with specialized workshops</p>
                <div style={{ display: 'flex', flexDirection: 'column', gap: 8, fontSize: 14 }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                    <Phone style={{ height: 16, width: 16, color: '#60a5fa' }} />
                    <span style={{ color: '#60a5fa', fontWeight: 500 }}>+27 11 987 6543</span>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                    <Mail style={{ height: 16, width: 16, color: '#60a5fa' }} />
                    <span style={{ color: '#60a5fa', fontWeight: 500 }}>soweto@empoweringnation.org</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
          {/* Map Placeholder */}
          <Card>
            <CardContent style={{ padding: 0 }}>
              <iframe
                title="Main Campus Map"
                src="https://www.google.com/maps?q=45+Hope+Street,+Johannesburg,+South+Africa&output=embed"
                width="100%"
                height="320"
                style={{ border: 0, borderRadius: 12, width: '100%', minHeight: 320 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </CardContent>
          </Card>
        </section>
      </div>
    </div>
  );
}
