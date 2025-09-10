import { Card, CardContent } from './ui/card';
import { Button } from './ui/button';
import { Badge } from './ui/badge';

import { useNavigate } from 'react-router-dom';
import { Heart, Users, BookOpen, Award, CreditCard, Building, Smartphone } from 'lucide-react';

export default function DonatePage() {
  const navigate = useNavigate();
  const impactAreas = [
    {
      icon: BookOpen,
      title: 'Course Materials',
      description: 'Textbooks, equipment, and supplies for hands-on learning',
      impact: 'R500 provides materials for one student for 6 months',
      color: 'var(--color-blue-600)'
    },
    {
      icon: Users,
      title: 'Student Support',
      description: 'Meals, transport assistance, and childcare during classes',
      impact: 'R200 covers meals for one student for a month',
      color: 'var(--color-green-600)'
    },
    {
      icon: Award,
      title: 'Skills Development',
      description: 'Equipment upgrades, workshop tools, and technology',
      impact: 'R1,000 helps upgrade training equipment',
      color: 'var(--color-orange-600)'
    },
    {
      icon: Heart,
      title: 'Scholarship Fund',
      description: 'Full course sponsorships for unemployed community members',
      impact: 'R1,500 sponsors a complete 6-month course',
      color: 'var(--color-red-600)'
    }
  ];

  const donationTiers = [
    {
      amount: 200,
      title: 'Community Supporter',
      benefits: ['Covers meals for 1 student for 1 month', 'Quarterly impact newsletter', 'Tax-deductible receipt'],
      popular: false
    },
    {
      amount: 500,
      title: 'Skills Enabler',
      benefits: ['Provides course materials for 1 student', 'Bi-annual progress reports', 'Invitation to graduation ceremonies', 'Tax-deductible receipt'],
      popular: true
    },
    {
      amount: 1500,
      title: 'Life Changer',
      benefits: ['Sponsors a complete course for 1 student', 'Personal updates from sponsored student', 'VIP invitation to all events', 'Recognition in annual report', 'Tax-deductible receipt'],
      popular: false
    },
    {
      amount: 5000,
      title: 'Community Champion',
      benefits: ['Sponsors courses for multiple students', 'Quarterly facility visits', 'Direct communication with management', 'Named recognition opportunities', 'Full financial reporting', 'Tax-deductible receipt'],
      popular: false
    }
  ];

  const formatPrice = (price) => {
    return new Intl.NumberFormat('en-ZA', {
      style: 'currency',
      currency: 'ZAR',
      minimumFractionDigits: 0,
    }).format(price);
  };

  return (
    <div style={{ padding: '64px 0', background: 'var(--color-gray-50, #f9fafb)' }}>
      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 24px' }}>
        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: 64 }}>
          <div style={{ display: 'flex', justifyContent: 'center', marginBottom: 24 }}>
            <Heart style={{ height: 64, width: 64, color: 'var(--color-red-500)' }} />
          </div>
          <h1 style={{ color: 'var(--color-orange-700)', marginBottom: 16, fontSize: '2.5rem', fontWeight: 700 }}>Support Our Mission</h1>
          <p style={{ fontSize: 18, color: 'var(--color-gray-700)', maxWidth: 700, margin: '0 auto 32px' }}>
            Your donation directly transforms lives by providing skills training to those who need it most. Every contribution helps break the cycle of poverty and builds stronger communities.
          </p>
          <div style={{ background: 'linear-gradient(90deg, #ef4444 0%, #ec4899 100%)', borderRadius: 16, padding: 32, color: 'white', maxWidth: 600, margin: '0 auto' }}>
            <h3 style={{ color: 'white', marginBottom: 8 }}>Our Impact Since 2022</h3>
            <div style={{ display: 'flex', justifyContent: 'center', gap: 48 }}>
              <div>
                <div style={{ fontSize: 28, fontWeight: 700 }}>500+</div>
                <div style={{ fontSize: 14, color: '#fecaca' }}>Lives Transformed</div>
              </div>
              <div>
                <div style={{ fontSize: 28, fontWeight: 700 }}>85%</div>
                <div style={{ fontSize: 14, color: '#fecaca' }}>Job Placement Rate</div>
              </div>
            </div>
          </div>
        </div>
        {/* How Your Donation Helps */}
        <section style={{ marginBottom: 64 }}>
          <h2 style={{ textAlign: 'center', color: 'var(--color-green-700)', marginBottom: 32, fontSize: 22, fontWeight: 600 }}>How Your Donation Helps</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: 24 }}>
            {impactAreas.map((area, index) => (
              <Card key={index} style={{ border: '2px solid var(--color-gray-200)', transition: 'box-shadow 0.2s' }}>
                <CardContent style={{ padding: 24, textAlign: 'center' }}>
                  <area.icon style={{ height: 48, width: 48, color: area.color, margin: '0 auto 16px' }} />
                  <h3 style={{ fontWeight: 600, color: 'var(--color-gray-800)', marginBottom: 8 }}>{area.title}</h3>
                  <p style={{ fontSize: 15, color: 'var(--color-gray-600)', marginBottom: 12 }}>{area.description}</p>
                  <div style={{ background: 'var(--color-gray-50)', padding: 12, borderRadius: 8 }}>
                    <p style={{ fontSize: 13, fontWeight: 500, color: 'var(--color-gray-700)' }}>{area.impact}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>
        {/* Donation Tiers */}
        <section style={{ marginBottom: 64 }}>
          <h2 style={{ textAlign: 'center', color: 'var(--color-orange-700)', marginBottom: 32, fontSize: 22, fontWeight: 600 }}>Choose Your Impact Level</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: 24 }}>
            {donationTiers.map((tier, index) => (
              <Card key={index} style={{ position: 'relative', border: '2px solid #EA580C', boxShadow: tier.popular ? '0 4px 24px 0 rgba(251,191,36,0.10)' : undefined, transition: 'box-shadow 0.2s' }}>
                {tier.popular && (
                  <div style={{ position: 'absolute', top: -18, left: '50%', transform: 'translateX(-50%)', zIndex: 2 }}>
                    <Badge style={{ background: '#EA580C', color: 'white', padding: '4px 16px', fontWeight: 600, fontSize: 13 }}>Most Popular</Badge>
                  </div>
                )}
                <CardContent style={{ padding: 24 }}>
                  <div style={{ textAlign: 'center', marginBottom: 16 }}>
                    <div style={{ fontSize: 24, fontWeight: 700, color: '#1f2937', marginBottom: 4 }}>
                      {formatPrice(tier.amount)}
                    </div>
                    <h3 style={{ fontWeight: 600, color: '#EA580C' }}>{tier.title}</h3>
                  </div>
                  <ul style={{ marginBottom: 24, paddingLeft: 0, listStyle: 'none' }}>
                    {tier.benefits.map((benefit, benefitIndex) => (
                      <li key={benefitIndex} style={{ fontSize: 14, color: '#4b5563', display: 'flex', alignItems: 'flex-start', gap: 8, marginBottom: 8 }}>
                        <div style={{ width: 8, height: 8, borderRadius: 4, background: '#16a34a', marginTop: 7, flexShrink: 0 }}></div>
                        <span>{benefit}</span>
                      </li>
                    ))}
                  </ul>
                  <Button
                    style={{ width: '100%', background: '#EA580C', color: 'white', fontWeight: 600, borderRadius: 8, fontSize: 16 }}
                    onClick={() => navigate(`/fake-payment?amount=${tier.amount}`)}
                  >
                    Donate {formatPrice(tier.amount)}
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>
        {/* Banking Details */}
        <section style={{ marginBottom: 64 }}>
          <div style={{ maxWidth: 800, margin: '0 auto' }}>
            <h2 style={{ textAlign: 'center', color: 'var(--color-blue-700)', marginBottom: 32, fontSize: 22, fontWeight: 600 }}>Donation Methods</h2>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 32 }}>
              {/* Bank Transfer */}
              <Card style={{ border: '2px solid #16a34a' }}>
                <div style={{ padding: '16px 24px 0 24px' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 8, color: 'var(--color-blue-700)', fontWeight: 600, fontSize: 18 }}>
                    <Building style={{ height: 20, width: 20 }} />
                    Direct Bank Transfer
                  </div>
                </div>
                <CardContent style={{ padding: 24 }}>
                  <div style={{ background: 'var(--color-blue-50)', padding: 16, borderRadius: 8, marginBottom: 12 }}>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: 8, fontSize: 15 }}>
                      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                        <span style={{ fontWeight: 500 }}>Bank:</span>
                        <span>ABC Bank</span>
                      </div>
                      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                        <span style={{ fontWeight: 500 }}>Account Name:</span>
                        <span>Empowering Nation</span>
                      </div>
                      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                        <span style={{ fontWeight: 500 }}>Account Number:</span>
                        <span style={{ fontFamily: 'monospace' }}>123456789</span>
                      </div>
                      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                        <span style={{ fontWeight: 500 }}>Branch Code:</span>
                        <span style={{ fontFamily: 'monospace' }}>010101</span>
                      </div>
                      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                        <span style={{ fontWeight: 500 }}>Reference:</span>
                        <span>Your Name + "Donation"</span>
                      </div>
                    </div>
                  </div>
                  <p style={{ fontSize: 13, color: 'var(--color-gray-600)' }}>
                    Please use your name and "Donation" as reference for tracking purposes.
                  </p>
                </CardContent>
              </Card>
              {/* Online Donation */}
              <Card style={{ border: '2px solid #16a34a' }}>
                <div style={{ padding: '16px 24px 0 24px' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 8, color: 'var(--color-green-700)', fontWeight: 600, fontSize: 18 }}>
                    <CreditCard style={{ height: 20, width: 20 }} />
                    Online Donation
                  </div>
                </div>
                <CardContent style={{ padding: 24 }}>
                  <p style={{ color: 'var(--color-gray-600)', fontSize: 15, marginBottom: 16 }}>
                    Make a secure online donation using your credit card, debit card, or digital wallet.
                  </p>
                  <Button
                    style={{ width: '100%', background: '#16a34a', color: 'white', fontWeight: 600, borderRadius: 8, fontSize: 16, marginBottom: 16, border: 'none' }}
                    onClick={() => navigate('/fake-payment?amount=')}
                  >
                    Donate Online Now
                  </Button>
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8, fontSize: 13, color: 'var(--color-gray-500)' }}>
                    <Smartphone style={{ height: 14, width: 14 }} />
                    <span>Mobile-friendly • Secure • Instant receipt</span>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
        {/* Success Stories */}
        <section style={{ marginBottom: 64 }}>
          <h2 style={{ textAlign: 'center', color: 'var(--color-purple-700)', marginBottom: 32, fontSize: 22, fontWeight: 600 }}>Your Donations in Action</h2>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 32 }}>
            <Card style={{ border: '2px solid #2563eb' }}>
              <CardContent style={{ padding: 24 }}>
                <div style={{ display: 'flex', alignItems: 'flex-start', gap: 16, marginBottom: 16 }}>
                  <img
                    src="https://images.unsplash.com/photo-1494790108755-2616b612b3fc?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80"
                    alt="Maria's story"
                    style={{ width: 64, height: 64, borderRadius: '50%', objectFit: 'cover', flexShrink: 0 }}
                  />
                  <div>
                    <h3 style={{ fontWeight: 600, color: 'var(--color-gray-800)' }}>Maria's Story</h3>
                    <Badge style={{ background: 'var(--color-purple-100)', color: 'var(--color-purple-700)', fontWeight: 600, fontSize: 13 }}>Scholarship Recipient</Badge>
                  </div>
                </div>
                <p style={{ color: 'var(--color-gray-700)', fontStyle: 'italic' }}>
                  "Thanks to a donor's generosity, I completed the First Aid course for free. I now work at a clinic and earn enough to support my three children. The scholarship changed our entire family's future."
                </p>
                <div style={{ marginTop: 16, background: 'var(--color-purple-50)', padding: 12, borderRadius: 8 }}>
                  <p style={{ fontSize: 14, fontWeight: 500, color: 'var(--color-purple-700)' }}>
                    Funded by: Community Supporter donations
                  </p>
                </div>
              </CardContent>
            </Card>
            <Card style={{ border: '2px solid #2563eb' }}>
              <CardContent style={{ padding: 24 }}>
                <div style={{ display: 'flex', alignItems: 'flex-start', gap: 16, marginBottom: 16 }}>
                  <img
                    src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80"
                    alt="Equipment upgrade"
                    style={{ width: 64, height: 64, borderRadius: 12, objectFit: 'cover', flexShrink: 0 }}
                  />
                  <div>
                    <h3 style={{ fontWeight: 600, color: 'var(--color-gray-800)' }}>New Sewing Machines</h3>
                    <Badge style={{ background: 'var(--color-orange-100)', color: 'var(--color-orange-700)', fontWeight: 600, fontSize: 13 }}>Equipment Upgrade</Badge>
                  </div>
                </div>
                <p style={{ color: 'var(--color-gray-700)', fontStyle: 'italic' }}>
                  "Donor contributions helped us purchase 10 new industrial sewing machines. Our students now train on professional equipment, making them job-ready from day one."
                </p>
                <div style={{ marginTop: 16, background: 'var(--color-orange-50)', padding: 12, borderRadius: 8 }}>
                  <p style={{ fontSize: 14, fontWeight: 500, color: 'var(--color-orange-700)' }}>
                    Funded by: Life Changer donations
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>
        {/* Tax Information */}
  <Card style={{ border: '2px solid #2563eb', background: 'var(--color-gray-50)', marginTop: 32 }}>
          <CardContent style={{ padding: 24, textAlign: 'center' }}>
            <h3 style={{ fontWeight: 600, color: 'var(--color-gray-800)', marginBottom: 16 }}>Tax-Deductible Donations</h3>
            <p style={{ color: 'var(--color-gray-600)', marginBottom: 16, maxWidth: 600, margin: '0 auto' }}>
              Empowering Nation is a registered non-profit organization. All donations are tax-deductible under South African law. You will receive an official receipt for tax purposes.
            </p>
            <div style={{ background: '#eff6ff', border: '2px solid #2563eb', padding: 16, borderRadius: 8, display: 'inline-block' }}>
              <p style={{ fontSize: 14, color: '#2563eb', fontWeight: 600 }}>
                <strong>Registration Number:</strong> NPO-123-456 | <strong>PBO Number:</strong> 930-123-456
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
