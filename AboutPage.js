
import { Card, CardContent } from './ui/card';
import { Heart, Target, Users, BookOpen } from 'lucide-react';
// Removed ImageWithFallback import; using standard <img> instead

export default function AboutPage() {
  const teamMembers = [ 
    {
      name: 'Precious Radebe',
      role: 'Founder & Director',
      image: require('./assets/1.jpeg'),
      bio: 'Passionate about empowering communities through education and skills development.'
    },
    {
      name: 'Thabo Mthembu',
      role: 'Head of Training',
      image: require('./assets/2.jpeg'),
      bio: 'Experienced educator with 15+ years in vocational training programs.'
    },
    {
      name: 'Nomsa Khumalo',
      role: 'Student Coordinator',
      image: require('./assets/3.jpeg'),
      bio: 'Dedicated to ensuring every student receives personalized support and guidance.'
    },
    {
      name: 'David Mokoena',
      role: 'Partnerships Manager',
      image: require('./assets/4.jpeg'),
      bio: 'Builds relationships with employers and community organizations for job placement.'
    }
  ];
  return ( 
    <div style={{ padding: '64px 0', background: 'var(--color-bg, #fff)' }}>
      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 24px' }}>
        {/* Hero Section */}
        <div style={{ textAlign: 'center', marginBottom: 64 }}>
          <h1 style={{ color: 'var(--color-orange-700)', marginBottom: 24, fontSize: '2.5rem', fontWeight: 700 }}>About Empowering Nation</h1>
          <div style={{ maxWidth: 900, margin: '0 auto' }}>
            <p style={{ fontSize: 20, color: 'var(--color-gray-700)', marginBottom: 32 }}>
              Founded with a vision to break the cycle of limited opportunities, Empowering Nation is more than just a training center – we're a catalyst for community transformation.
            </p>
            <img
              src={require('./download (20).jpeg')}
              alt="About Empowering Nation"
              style={{ width: '100%', maxWidth: 600, height: 220, objectFit: 'cover', borderRadius: 16, boxShadow: '0 4px 32px 0 rgba(0,0,0,0.10)', margin: '0 auto' }}
            />
          </div>
        </div>

        {/* Our Story */}
        <section style={{ marginBottom: 64 }}>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 48, alignItems: 'center' }}>
            <div style={{ flex: 1, minWidth: 280 }}>
              <h2 style={{ color: 'var(--color-green-700)', marginBottom: 24, fontSize: '2rem', fontWeight: 700 }}>Our Story</h2>
              <div style={{ color: 'var(--color-gray-700)', fontSize: 17, display: 'flex', flexDirection: 'column', gap: 12 }}>
                <p>
                  Empowering Nation was born from a deeply personal mission. Founder Precious Radebe witnessed firsthand how her parents and elderly relatives were denied opportunities to upskill themselves or pursue formal educational qualifications.
                </p>
                <p>
                  This training school is her way of supporting similarly affected members from her community, ensuring that today's domestic workers and gardeners have access to the opportunities that previous generations were denied.
                </p>
                <p>
                  Since our establishment in 2022, we've been dedicated to breaking down barriers and creating pathways to economic empowerment through practical, marketable skills training.
                </p>
              </div>
            </div>
            <div style={{ flex: 1, minWidth: 280 }}>
              <img
                src={require('./download (19).jpeg')}
                alt="Learning hands-on skills"
                style={{ width: '100%', maxWidth: 400, height: 180, objectFit: 'cover', borderRadius: 16, boxShadow: '0 4px 32px 0 rgba(0,0,0,0.10)', margin: '0 auto' }}
              />
            </div>
          </div>
        </section>

        {/* Mission & Goals - Redesigned for Figma fidelity */}
        <section style={{
          marginBottom: 64,
          background: 'var(--color-orange-50, #fff7ed)',
          borderRadius: 24,
          padding: '48px 0',
          boxShadow: '0 2px 16px 0 rgba(234,88,12,0.04)',
        }}>
          <div style={{ maxWidth: 1100, margin: '0 auto', padding: '0 16px' }}>
            <h2 style={{ textAlign: 'center', color: 'var(--color-orange-700, #ea580c)', marginBottom: 40, fontSize: '2.2rem', fontWeight: 700, letterSpacing: 0.5 }}>Our Mission & Goals</h2>
            {/* Top row: Mission & Vision */}
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 32, justifyContent: 'center', marginBottom: 32 }}>
              <Card style={{ border: '2px solid var(--color-orange-200, #fed7aa)', borderRadius: 18, flex: 1, minWidth: 240, maxWidth: 340, background: '#fff' }}>
                <CardContent style={{ padding: 28, textAlign: 'center' }}>
                  <Target style={{ height: 48, width: 48, color: 'var(--color-orange-600, #ea580c)', margin: '0 auto 16px' }} />
                  <h3 style={{ color: 'var(--color-orange-700, #ea580c)', marginBottom: 12, fontSize: '1.25rem', fontWeight: 700 }}>Our Mission</h3>
                  <p style={{ color: 'var(--color-gray-700, #374151)', fontSize: 16 }}>
                    To empower marginalized communities by providing accessible, high-quality skills training that creates pathways to better employment, higher income, and entrepreneurial opportunities.
                  </p>
                </CardContent>
              </Card>
              <Card style={{ border: '2px solid var(--color-green-200, #bbf7d0)', borderRadius: 18, flex: 1, minWidth: 240, maxWidth: 340, background: '#fff' }}>
                <CardContent style={{ padding: 28, textAlign: 'center' }}>
                  <Heart style={{ height: 48, width: 48, color: 'var(--color-green-600, #16a34a)', margin: '0 auto 16px' }} />
                  <h3 style={{ color: 'var(--color-green-700, #15803d)', marginBottom: 12, fontSize: '1.25rem', fontWeight: 700 }}>Our Vision</h3>
                  <p style={{ color: 'var(--color-gray-700, #374151)', fontSize: 16 }}>
                    A South Africa where every person, regardless of their background, has access to opportunities for personal and professional growth, leading to stronger, more prosperous communities.
                  </p>
                </CardContent>
              </Card>
            </div>
            {/* Bottom row: Community Impact, Skills Development, Economic Empowerment */}
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 32, justifyContent: 'center' }}>
              <Card style={{ border: '2px solid var(--color-orange-200, #fed7aa)', borderRadius: 18, flex: 1, minWidth: 220, maxWidth: 300, background: '#fff' }}>
                <CardContent style={{ padding: 24, textAlign: 'center' }}>
                  <Users style={{ height: 44, width: 44, color: 'var(--color-orange-500, #f59e42)', margin: '0 auto 14px' }} />
                  <h3 style={{ color: 'var(--color-orange-600, #ea580c)', marginBottom: 10, fontSize: '1.1rem', fontWeight: 700 }}>Community Impact</h3>
                  <p style={{ color: 'var(--color-gray-600, #6b7280)', fontSize: 15 }}>
                    Strengthen communities by upskilling residents and creating local employment opportunities.
                  </p>
                </CardContent>
              </Card>
              <Card style={{ border: '2px solid var(--color-green-200, #bbf7d0)', borderRadius: 18, flex: 1, minWidth: 220, maxWidth: 300, background: '#fff' }}>
                <CardContent style={{ padding: 24, textAlign: 'center' }}>
                  <BookOpen style={{ height: 44, width: 44, color: 'var(--color-green-600, #16a34a)', margin: '0 auto 14px' }} />
                  <h3 style={{ color: 'var(--color-green-700, #15803d)', marginBottom: 10, fontSize: '1.1rem', fontWeight: 700 }}>Skills Development</h3>
                  <p style={{ color: 'var(--color-gray-600, #6b7280)', fontSize: 15 }}>
                    Provide practical, marketable skills that directly translate to better job prospects.
                  </p>
                </CardContent>
              </Card>
              <Card style={{ border: '2px solid var(--color-orange-200, #fed7aa)', borderRadius: 18, flex: 1, minWidth: 220, maxWidth: 300, background: '#fff' }}>
                <CardContent style={{ padding: 24, textAlign: 'center' }}>
                  <Target style={{ height: 44, width: 44, color: 'var(--color-orange-600, #ea580c)', margin: '0 auto 14px' }} />
                  <h3 style={{ color: 'var(--color-orange-700, #ea580c)', marginBottom: 10, fontSize: '1.1rem', fontWeight: 700 }}>Economic Empowerment</h3>
                  <p style={{ color: 'var(--color-gray-600, #6b7280)', fontSize: 15 }}>
                    Enable graduates to command higher wages and start their own businesses.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Who We Help */}
        <section style={{ marginBottom: 64 }}>
          <h2 style={{ textAlign: 'center', color: 'var(--color-green-700)', marginBottom: 48, fontSize: '2rem', fontWeight: 700 }}>Who We Help</h2>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 32 }}>
            <div style={{ flex: 1, minWidth: 220, textAlign: 'center' }}>
              <img
                src={require('./assets/5.jpeg')}
                alt="Domestic worker"
                style={{ width: 80, height: 80, borderRadius: '50%', margin: '0 auto 16px', objectFit: 'cover' }}
              />
              <h3 style={{ color: 'var(--color-orange-700)', marginBottom: 12, fontSize: '1.2rem', fontWeight: 600 }}>Domestic Workers</h3>
              <p style={{ color: 'var(--color-gray-600)' }}>
                Empowering domestic workers with additional skills to increase their marketability and earning potential in households and commercial settings.
              </p>
            </div>
            <div style={{ flex: 1, minWidth: 220, textAlign: 'center' }}>
              <img
                src={require('./assets/6.jpeg')}
                alt="Gardener"
                style={{ width: 80, height: 80, borderRadius: '50%', margin: '0 auto 16px', objectFit: 'cover' }}
              />
              <h3 style={{ color: 'var(--color-green-700)', marginBottom: 12, fontSize: '1.2rem', fontWeight: 600 }}>Gardeners</h3>
              <p style={{ color: 'var(--color-gray-600)' }}>
                Training gardeners in advanced landscaping, maintenance techniques, and plant care to expand their service offerings and client base.
              </p>
            </div>
            <div style={{ flex: 1, minWidth: 220, textAlign: 'center' }}>
              <img
                src={require('./assets/7.jpeg')}
                alt="Young person learning"
                style={{ width: 80, height: 80, borderRadius: '50%', margin: '0 auto 16px', objectFit: 'cover' }}
              />
              <h3 style={{ color: 'var(--color-amber-700)', marginBottom: 12, fontSize: '1.2rem', fontWeight: 600 }}>Youth & Job Seekers</h3>
              <p style={{ color: 'var(--color-gray-600)' }}>
                Supporting unemployed youth and community members with practical skills training that opens doors to employment and entrepreneurship.
              </p>
            </div>
          </div>
        </section>

        {/* Our Team */}
        {/* Our Team */}
        <section style={{ background: 'var(--color-green-50, #f0fdf4)', borderRadius: 16, padding: '48px 0' }}>
          <h2 style={{ textAlign: 'center', color: 'var(--color-green-700)', marginBottom: 48, fontSize: '2rem', fontWeight: 700 }}>Meet Our Team</h2>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 32 }}>
            {teamMembers.map((member, index) => (
              <Card key={index} style={{ border: '2px solid var(--color-green-200)', flex: 1, minWidth: 200, maxWidth: 260, transition: 'box-shadow 0.2s', boxShadow: '0 2px 8px 0 rgba(0,0,0,0.04)' }}>
                <CardContent style={{ padding: 24, textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                  <img
                    src={member.image}
                    alt={member.name}
                    style={{ width: 64, height: 64, borderRadius: '50%', margin: '0 auto 16px', objectFit: 'cover', boxShadow: '0 2px 8px 0 rgba(0,0,0,0.08)' }}
                  />
                  <h3 style={{ color: 'var(--color-green-700)', marginBottom: 4, fontSize: '1.1rem', fontWeight: 600, letterSpacing: 0.2 }}>{member.name}</h3>
                  <p style={{ color: 'var(--color-orange-600)', marginBottom: 8, fontWeight: 500 }}>{member.role}</p>
                  <p style={{ fontSize: 15, color: 'var(--color-gray-600)', margin: 0 }}>{member.bio}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
