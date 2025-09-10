import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from './ui/button';
import { Card, CardContent } from './ui/card';
import { courses, calculateTotal } from './data/courses';
import { Calculator, ShoppingCart, Percent, Receipt } from 'lucide-react';

export default function FeeCalculatorPage() {
  const [selectedCourses, setSelectedCourses] = useState([]);
  const [customerInfo, setCustomerInfo] = useState({
    name: '',
    phone: '',
    email: ''
  });
  const [showQuote, setShowQuote] = useState(false);

  const handleCourseToggle = (course, checked) => {
    if (checked) {
      setSelectedCourses([...selectedCourses, course]);
    } else {
      setSelectedCourses(selectedCourses.filter(c => c.id !== course.id));
    }
  };

  const handleInputChange = (field, value) => {
    setCustomerInfo(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleCalculate = () => {
    if (selectedCourses.length === 0) {
      alert('Please select at least one course.');
      return;
    }
    setShowQuote(true);
  };

  const handleRequestConsultation = () => {
    if (!customerInfo.name || !customerInfo.phone || !customerInfo.email) {
      alert('Please fill in all contact details.');
      return;
    }
    if (selectedCourses.length === 0) {
      alert('Please select at least one course.');
      return;
    }
    alert('Thank you! A consultant will contact you within 24 hours to discuss your course selection and arrange booking.');
  };

  const totals = calculateTotal(selectedCourses);
  const formatPrice = (price) => {
    return new Intl.NumberFormat('en-ZA', {
      style: 'currency',
      currency: 'ZAR',
      minimumFractionDigits: 2,
    }).format(price);
  };

  return (
    <div style={{ padding: '64px 0', background: 'var(--color-gray-50, #f9fafb)', minHeight: '100vh' }}>
      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 24px' }}>
        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: 48 }}>
          <div style={{ display: 'flex', justifyContent: 'center', marginBottom: 16 }}>
            <Calculator style={{ height: 64, width: 64, color: 'var(--color-orange-600)' }} />
          </div>
          <h1 style={{ color: 'var(--color-orange-700)', marginBottom: 16, fontSize: '2.5rem', fontWeight: 700 }}>Course Fee Calculator</h1>
          <p style={{ fontSize: 18, color: 'var(--color-gray-700)', maxWidth: 700, margin: '0 auto' }}>
            Select your desired courses and get an instant quote. The more courses you choose, the more you save with our discount packages!
          </p>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: 32 }}>
          {/* Course Selection */}
          <div>
            <Card>
              <div style={{ padding: '16px 24px 0 24px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 8, color: 'var(--color-green-700)', fontWeight: 600, fontSize: 20 }}>
                  <ShoppingCart style={{ height: 20, width: 20 }} />
                  Select Your Courses
                </div>
              </div>
              <CardContent>
                {/* Six-Month Courses */}
                <div style={{ marginBottom: 32 }}>
                  <h3 style={{ fontSize: 18, fontWeight: 600, color: 'var(--color-green-700)', marginBottom: 16 }}>Six-Month Courses (R1,500 each)</h3>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
                    {courses.filter(course => course.type === 'six-month').map((course) => (
                      <div key={course.id} style={{ display: 'flex', alignItems: 'flex-start', gap: 12, padding: 16, border: '1px solid var(--color-green-200)', borderRadius: 8, background: 'var(--color-green-50, #f0fdf4)' }}>
                        <input
                          type="checkbox"
                          id={course.id}
                          checked={selectedCourses.some(c => c.id === course.id)}
                          onChange={e => handleCourseToggle(course, e.target.checked)}
                          style={{ width: 20, height: 20, accentColor: 'var(--color-green-600)' }}
                        />
                        <div style={{ flex: 1 }}>
                          <label htmlFor={course.id} style={{ fontSize: 16, fontWeight: 500, color: 'var(--color-gray-800)', cursor: 'pointer' }}>{course.title}</label>
                          <p style={{ fontSize: 14, color: 'var(--color-gray-600)', margin: '4px 0 0 0' }}>{course.purpose}</p>
                          <p style={{ fontSize: 14, color: 'var(--color-green-600)', fontWeight: 500, margin: '4px 0 0 0' }}>{formatPrice(course.fees)}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                {/* Six-Week Courses */}
                <div style={{ marginBottom: 32 }}>
                  <h3 style={{ fontSize: 18, fontWeight: 600, color: 'var(--color-amber-700, #b45309)', marginBottom: 16 }}>Six-Week Courses (R750 each)</h3>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
                    {courses.filter(course => course.type === 'six-week').map((course) => (
                      <div key={course.id} style={{ display: 'flex', alignItems: 'flex-start', gap: 12, padding: 16, border: '1px solid var(--color-amber-200, #fde68a)', borderRadius: 8, background: 'var(--color-amber-50, #fffbeb)' }}>
                        <input
                          type="checkbox"
                          id={course.id}
                          checked={selectedCourses.some(c => c.id === course.id)}
                          onChange={e => handleCourseToggle(course, e.target.checked)}
                          style={{ width: 20, height: 20, accentColor: 'var(--color-amber-600, #d97706)' }}
                        />
                        <div style={{ flex: 1 }}>
                          <label htmlFor={course.id} style={{ fontSize: 16, fontWeight: 500, color: 'var(--color-gray-800)', cursor: 'pointer' }}>{course.title}</label>
                          <p style={{ fontSize: 14, color: 'var(--color-gray-600)', margin: '4px 0 0 0' }}>{course.purpose}</p>
                          <p style={{ fontSize: 14, color: 'var(--color-amber-600, #d97706)', fontWeight: 500, margin: '4px 0 0 0' }}>{formatPrice(course.fees)}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                {/* Contact Information */}
                <div style={{ paddingTop: 24, borderTop: '1px solid var(--color-gray-200)', marginTop: 24 }}>
                  <h3 style={{ fontSize: 18, fontWeight: 600, color: '#2563eb', marginBottom: 16 }}>Contact Information</h3>
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}>
                    <div>
                      <label htmlFor="name" style={{ fontWeight: 500, color: '#1e293b', display: 'block', marginBottom: 4 }}>Full Name *</label>
                      <input
                        id="name"
                        type="text"
                        placeholder="Enter your full name"
                        value={customerInfo.name}
                        onChange={e => handleInputChange('name', e.target.value)}
                        style={{ width: '100%', padding: 10, borderRadius: 6, border: '1px solid #d1d5db', fontSize: 16, marginBottom: 0 }}
                      />
                    </div>
                    <div>
                      <label htmlFor="phone" style={{ fontWeight: 500, color: '#1e293b', display: 'block', marginBottom: 4 }}>Phone Number *</label>
                      <input
                        id="phone"
                        type="tel"
                        placeholder="+27 XX XXX XXXX"
                        value={customerInfo.phone}
                        onChange={e => handleInputChange('phone', e.target.value)}
                        style={{ width: '100%', padding: 10, borderRadius: 6, border: '1px solid #d1d5db', fontSize: 16, marginBottom: 0 }}
                      />
                    </div>
                    <div style={{ gridColumn: 'span 2' }}>
                      <label htmlFor="email" style={{ fontWeight: 500, color: '#1e293b', display: 'block', marginBottom: 4 }}>Email Address *</label>
                      <input
                        id="email"
                        type="email"
                        placeholder="your.email@example.com"
                        value={customerInfo.email}
                        onChange={e => handleInputChange('email', e.target.value)}
                        style={{ width: '100%', padding: 10, borderRadius: 6, border: '1px solid #d1d5db', fontSize: 16, marginBottom: 0 }}
                      />
                    </div>
                  </div>
                </div>
                {/* Action Buttons */}
                <div style={{ display: 'flex', flexDirection: 'row', gap: 16, paddingTop: 24, borderTop: '1px solid var(--color-gray-200)', marginTop: 24 }}>
                  <Button
                    onClick={handleCalculate}
                    style={{ background: '#EA580C', color: '#fff', fontWeight: 600, display: 'flex', alignItems: 'center', gap: 8, borderRadius: 8, fontSize: 16, border: 'none' }}
                  >
                    <Calculator style={{ height: 18, width: 18 }} />
                    Calculate Total
                  </Button>
                  <Button
                    onClick={handleRequestConsultation}
                    style={{ background: '#28A745', color: '#fff', fontWeight: 600, borderRadius: 8, fontSize: 16, border: 'none' }}
                  >
                    Request Consultant
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
          {/* Quote Summary */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
            {/* Discount Information */}
            <Card style={{ border: '2px solid #c4b5fd', background: '#f5f3ff', padding: '20px 0' }}>
              <div style={{ padding: '20px 32px 0 32px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 12, color: '#7c3aed', fontWeight: 600, fontSize: 20 }}>
                  <Percent style={{ height: 22, width: 22 }} />
                  Discount Tiers
                </div>
              </div>
              <CardContent style={{ fontSize: 16, padding: '18px 32px 10px 32px', display: 'flex', flexDirection: 'column', gap: 12 }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 6 }}>
                  <span>1 course:</span>
                  <span>No discount</span>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 6 }}>
                  <span>2 courses:</span>
                  <span style={{ color: '#16a34a', fontWeight: 500 }}>5% off</span>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 6 }}>
                  <span>3 courses:</span>
                  <span style={{ color: '#16a34a', fontWeight: 500 }}>10% off</span>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                  <span>4+ courses:</span>
                  <span style={{ color: '#16a34a', fontWeight: 500 }}>15% off</span>
                </div>
              </CardContent>
            </Card>
            {/* Selected Courses */}
            <Card style={{ border: '2px solid #e5e7eb', background: '#f9fafb', padding: '20px 0' }}>
              <div style={{ padding: '20px 32px 0 32px' }}>
                <div style={{ color: '#374151', fontWeight: 600, fontSize: 20 }}>Selected Courses</div>
              </div>
              <CardContent style={{ padding: '18px 32px 10px 32px', fontSize: 16 }}>
                {selectedCourses.length === 0 ? (
                  <p style={{ color: '#6b7280', textAlign: 'center', padding: '16px 0' }}>No courses selected yet</p>
                ) : (
                  <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
                    {selectedCourses.map((course) => (
                      <div key={course.id} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '10px 0', borderBottom: '1px solid #f3f4f6' }}>
                        <span style={{ fontSize: 16, fontWeight: 500 }}>{course.title}</span>
                        <span style={{ fontSize: 16, color: '#6b7280' }}>{formatPrice(course.fees)}</span>
                      </div>
                    ))}
                  </div>
                )}
              </CardContent>
            </Card>
            {/* Quote */}
            {showQuote && selectedCourses.length > 0 && (
              <Card style={{ border: '2px solid var(--color-orange-200)', background: 'var(--color-orange-50)' }}>
                <div style={{ padding: '16px 24px 0 24px' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 8, color: 'var(--color-orange-700)', fontWeight: 600, fontSize: 18 }}>
                    <Receipt style={{ height: 20, width: 20 }} />
                    Your Quote
                  </div>
                </div>
                <CardContent style={{ fontSize: 15, display: 'flex', flexDirection: 'column', gap: 8 }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                    <span>Subtotal:</span>
                    <span>{formatPrice(totals.subtotal)}</span>
                  </div>
                  {totals.discount > 0 && (
                    <div style={{ display: 'flex', justifyContent: 'space-between', color: 'var(--color-green-600)' }}>
                      <span>Discount ({selectedCourses.length >= 4 ? 15 : selectedCourses.length === 3 ? 10 : 5}%):</span>
                      <span>-{formatPrice(totals.discount)}</span>
                    </div>
                  )}
                  <div style={{ display: 'flex', justifyContent: 'space-between', borderTop: '1px solid var(--color-orange-200)', paddingTop: 8 }}>
                    <span>Subtotal after discount:</span>
                    <span>{formatPrice(totals.total)}</span>
                  </div>
                  <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                    <span>VAT (15%):</span>
                    <span>{formatPrice(totals.totalWithVAT - totals.total)}</span>
                  </div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', fontWeight: 600, fontSize: 18, color: 'var(--color-orange-700)', borderTop: '1px solid var(--color-orange-200)', paddingTop: 8 }}>
                    <span>Total:</span>
                    <span>{formatPrice(totals.totalWithVAT)}</span>
                  </div>
                  <p style={{ fontSize: 13, color: 'var(--color-gray-600)', marginTop: 8 }}>
                    * This is a quote only. Final invoice will be provided upon booking confirmation.
                  </p>
                </CardContent>
              </Card>
            )}
            {/* Help */}
            <Card style={{ border: '2px solid #d1fae5', background: '#f0fdf4' }}>
              <CardContent style={{ padding: 16, textAlign: 'center' }}>
                <h4 style={{ fontWeight: 500, color: '#15803d', marginBottom: 8 }}>Need Help?</h4>
                <p style={{ fontSize: 14, color: '#4b5563', marginBottom: 16 }}>
                  Have questions about our courses or need guidance on which ones to choose?
                </p>
                <Link to="/contact">
                  <Button variant="outline" size="sm" style={{ width: '100%', border: '1.5px solid #15803d', color: '#15803d', background: '#fff' }}>
                    Contact Our Team
                  </Button>
                </Link>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
