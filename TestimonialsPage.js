import { Link } from 'react-router-dom';
import { Card, CardContent } from './ui/card';
import { Badge } from './ui/badge';
import { Button } from './ui/button';
import { Quote, Star, Award, Heart } from 'lucide-react';

export default function TestimonialsPage() {
  const testimonials = [
    {
      id: 1,
      name: 'Maria Sibanda',
      image: 'https://randomuser.me/api/portraits/women/12.jpg',
      course: 'First Aid & Life Skills',
      rating: 5,
      year: 2024,
      quote: 'Before joining Empowering Nation, I struggled to find stable work. The First Aid course opened so many doors - now I work at a private clinic and earn three times what I used to make. The confidence I gained from the Life Skills program helped me negotiate my salary!',
      achievement: 'Now employed at MediCare Clinic',
    },
    {
      id: 2,
      name: 'Thabo Mokoena',
      image: 'https://randomuser.me/api/portraits/men/32.jpg',
      course: 'Landscaping',
      rating: 5,
      year: 2023,
      quote: 'I was just doing basic garden maintenance, but after the landscaping course, I can design beautiful gardens! I now have my own small business with 15 regular clients. The course taught me about plant combinations I never knew existed.',
      achievement: 'Started his own landscaping business',
    },
    {
      id: 3,
      name: 'Grace Nkomo',
      image: 'https://randomuser.me/api/portraits/women/65.jpg',
      course: 'Sewing',
      rating: 5,
      year: 2024,
      quote: 'The sewing course changed my entire life. I learned to make beautiful clothes and do alterations. Now I run a tailoring shop from my home and even train other women in my community. My children are so proud of what I\'ve achieved!',
      achievement: 'Opened her own tailoring business',
    },
    {
      id: 4,
      name: 'David Motsumi',
      image: 'https://randomuser.me/api/portraits/men/45.jpg',
      course: 'Child Minding & Cooking',
      rating: 5,
      year: 2024,
      quote: 'Taking both courses was the best decision I made. The child minding skills helped me get a job with a wonderful family, and my cooking skills mean I can prepare healthy meals for the children. The family increased my salary after seeing my capabilities!',
      achievement: 'Full-time nanny with competitive salary',
    },
    {
      id: 5,
      name: 'Nomthandazo Dlamini',
      image: 'https://randomuser.me/api/portraits/women/22.jpg',
      course: 'Garden Maintenance',
      rating: 5,
      year: 2024,
      quote: 'I thought I knew about gardens, but this course taught me so much about water conservation and plant care. Now I help homeowners save money on their water bills while keeping their gardens beautiful. My clients recommend me to their friends!',
      achievement: 'Manages gardens for 20+ households',
    },
    {
      id: 6,
      name: 'Joseph Mthembu',
      image: 'https://randomuser.me/api/portraits/men/77.jpg',
      course: 'Life Skills',
      rating: 5,
      year: 2023,
      quote: 'The Life Skills course taught me about my rights as a worker and how to manage my money. I opened my first bank account at age 45! The instructors were patient and made everything easy to understand. Now I\'m helping my friends with their finances too.',
      achievement: 'Financial literacy mentor in his community',
    },
    {
      id: 7,
      name: 'Sarah Hlongwane',
      image: 'https://randomuser.me/api/portraits/women/33.jpg',
      course: 'Multiple Courses',
      rating: 5,
      year: 2023,
      quote: 'I completed First Aid, Sewing, and Child Minding courses. The discount for multiple courses made it affordable for me. Now I offer comprehensive services to families - I can take care of children, do alterations, and handle medical emergencies. I\'m booked months in advance!',
      achievement: 'Premium domestic services provider',
    },
    {
      id: 8,
      name: 'Patrick Sibeko',
      image: 'https://randomuser.me/api/portraits/men/23.jpg',
      course: 'Cooking',
      rating: 5,
      year: 2024,
      quote: 'I never thought I could cook professionally, but the course taught me about nutrition and meal planning. I now work for a catering company and even cook for special events on weekends. My dream is to open my own restaurant one day!',
      achievement: 'Professional chef at local catering company',
    },
  ];

  const impactStats = [
    { icon: Award, number: '500+', label: 'Graduates', color: 'var(--color-orange-600)' },
    { icon: Heart, number: '85%', label: 'Job Placement Rate', color: 'var(--color-green-600)' },
    { icon: Star, number: '4.9/5', label: 'Average Rating', color: 'var(--color-blue-600)' },
    { icon: Quote, number: '95%', label: 'Would Recommend', color: 'var(--color-purple-600)' }
  ];

  return (
    <div style={{ padding: '64px 0', background: 'var(--color-gray-50, #f9fafb)' }}>
      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 24px' }}>
        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: 64 }}>
          <h1 style={{ color: '#7c3aed', marginBottom: 16, fontSize: '2.5rem', fontWeight: 700, border: '2px solid #c4b5fd', borderRadius: 10, padding: '12px 0', background: '#f5f3ff', display: 'inline-block', minWidth: 320 }}>Success Stories</h1>
          <p style={{ fontSize: 18, color: 'var(--color-gray-700)', maxWidth: 700, margin: '0 auto 32px' }}>
            Read inspiring stories from our graduates who have transformed their lives through our training programs. Their success is our greatest achievement.
          </p>
          {/* Impact Stats */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: 24, maxWidth: 900, margin: '0 auto' }}>
            {impactStats.map((stat, index) => (
              <Card key={index} style={{ border: '2px solid #c4b5fd', background: '#f5f3ff' }}>
                <CardContent style={{ padding: 24, textAlign: 'center' }}>
                  <stat.icon style={{ height: 32, width: 32, color: stat.color, margin: '0 auto 8px' }} />
                  <div style={{ fontSize: 28, fontWeight: 700, color: stat.color, marginBottom: 4 }}>{stat.number}</div>
                  <div style={{ fontSize: 15, color: 'var(--color-gray-600)' }}>{stat.label}</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
        {/* Testimonials Grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))', gap: 32, marginBottom: 64 }}>
          {testimonials.map((testimonial, idx) => {
            // Color palette for backgrounds, outlines, and accents
            const colorPalettes = [
              { bg: '#f0f6ff', border: '#93c5fd', accent: '#60a5fa', badgeBg: '#c7d2fe', badgeColor: '#7c3aed', quote: '#c4b5fd', award: '#7c3aed', ach: '#7c3aed' },
              { bg: '#f0fdf4', border: '#6ee7b7', accent: '#16a34a', badgeBg: '#bbf7d0', badgeColor: '#15803d', quote: '#6ee7b7', award: '#16a34a', ach: '#15803d' },
              { bg: '#fef9c3', border: '#fde68a', accent: '#eab308', badgeBg: '#fef08a', badgeColor: '#b45309', quote: '#fde68a', award: '#eab308', ach: '#b45309' },
              { bg: '#fef2f2', border: '#fecaca', accent: '#ef4444', badgeBg: '#fecaca', badgeColor: '#b91c1c', quote: '#fecaca', award: '#ef4444', ach: '#b91c1c' },
              { bg: '#f3e8ff', border: '#d8b4fe', accent: '#a21caf', badgeBg: '#e9d5ff', badgeColor: '#7c3aed', quote: '#d8b4fe', award: '#a21caf', ach: '#7c3aed' },
              { bg: '#f1f5f9', border: '#cbd5e1', accent: '#0ea5e9', badgeBg: '#bae6fd', badgeColor: '#0369a1', quote: '#bae6fd', award: '#0ea5e9', ach: '#0369a1' },
              { bg: '#fff7ed', border: '#fdba74', accent: '#ea580c', badgeBg: '#fed7aa', badgeColor: '#c2410c', quote: '#fdba74', award: '#ea580c', ach: '#c2410c' },
              { bg: '#fefce8', border: '#fde68a', accent: '#ca8a04', badgeBg: '#fef08a', badgeColor: '#a16207', quote: '#fde68a', award: '#ca8a04', ach: '#a16207' }
            ];
            const palette = colorPalettes[idx % colorPalettes.length];
            return (
              <Card key={testimonial.id} style={{ border: `2.5px solid ${palette.border}`, background: palette.bg, transition: 'box-shadow 0.2s', boxShadow: '0 2px 8px 0 #e0e7ef' }}>
                <CardContent style={{ padding: 24 }}>
                  {/* Header */}
                  <div style={{ display: 'flex', alignItems: 'flex-start', gap: 16, marginBottom: 16 }}>
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      style={{ width: 64, height: 64, borderRadius: '50%', objectFit: 'cover', flexShrink: 0 }}
                    />
                    <div style={{ flex: 1 }}>
                      <h3 style={{ fontWeight: 600, color: palette.accent }}>{testimonial.name}</h3>
                      <Badge style={{ marginTop: 4, background: palette.badgeBg, color: palette.badgeColor, fontWeight: 600 }}>{testimonial.course}</Badge>
                      <div style={{ display: 'flex', alignItems: 'center', gap: 4, marginTop: 8 }}>
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <Star key={i} style={{ height: 16, width: 16, color: '#facc15', fill: '#facc15' }} />
                        ))}
                        <span style={{ fontSize: 13, color: 'var(--color-gray-500)', marginLeft: 6 }}>({testimonial.year})</span>
                      </div>
                    </div>
                  </div>
                  {/* Quote */}
                  <div style={{ position: 'relative', marginBottom: 16 }}>
                    <Quote style={{ height: 32, width: 32, color: palette.quote, position: 'absolute', top: -8, left: -8 }} />
                    <p style={{ color: 'var(--color-gray-700)', fontStyle: 'italic', paddingLeft: 32, lineHeight: 1.6 }}>
                      {testimonial.quote}
                    </p>
                  </div>
                  {/* Achievement */}
                  <div style={{ background: palette.badgeBg, padding: 12, borderRadius: 8 }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                      <Award style={{ height: 16, width: 16, color: palette.award }} />
                      <span style={{ fontSize: 14, fontWeight: 500, color: palette.ach }}>{testimonial.achievement}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
        {/* Volunteer/Employer Testimonial */}
        <section style={{ marginBottom: 64 }}>
          <h2 style={{ textAlign: 'center', color: '#334155', marginBottom: 32, fontSize: 22, fontWeight: 700, border: '2px solid #e5e7eb', borderRadius: 10, padding: '10px 0', background: '#f1f5f9', display: 'inline-block', minWidth: 320 }}>What Our Partners Say</h2>
          <Card style={{ border: '2px solid #e5e7eb', background: '#f1f5f9', maxWidth: 700, margin: '0 auto' }}>
            <CardContent style={{ padding: 32, textAlign: 'center' }}>
              <img
                src="https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
                alt="Mrs. Jennifer Walsh"
                style={{ width: 80, height: 80, borderRadius: '50%', objectFit: 'cover', margin: '0 auto 16px' }}
              />
              <h3 style={{ fontWeight: 600, color: '#334155', marginBottom: 8 }}>Mrs. Jennifer Walsh</h3>
              <Badge style={{ marginBottom: 16, background: '#e0e7ef', color: '#334155', fontWeight: 600 }}>Employer & Volunteer</Badge>
              <Quote style={{ height: 48, width: 48, color: '#e5e7eb', margin: '0 auto 16px' }} />
              <p style={{ fontSize: 18, color: 'var(--color-gray-700)', fontStyle: 'italic', marginBottom: 24, maxWidth: 600, margin: '0 auto' }}>
                "I've hired three graduates from Empowering Nation over the past two years. The difference in their skills, confidence, and professionalism compared to untrained staff is remarkable. They arrive ready to work, understand safety protocols, and bring innovation to their roles. I now exclusively hire from their program."
              </p>
              <div style={{ background: 'white', padding: 16, borderRadius: 8, display: 'inline-block' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 8, justifyContent: 'center' }}>
                  <Award style={{ height: 20, width: 20, color: '#334155' }} />
                  <span style={{ fontWeight: 500, color: '#334155' }}>Hired 3 graduates • 100% satisfaction</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>
        {/* Call to Action */}
        <div style={{ background: 'linear-gradient(90deg, #f97316 0%, #ef4444 100%)', borderRadius: 16, padding: 48, textAlign: 'center', color: 'white' }}>
          <h2 style={{ color: 'white', marginBottom: 16, fontSize: '2rem', fontWeight: 700 }}>Ready to Write Your Success Story?</h2>
          <p style={{ color: '#fed7aa', marginBottom: 32, maxWidth: 600, margin: '0 auto' }}>
            Join hundreds of graduates who have transformed their lives through our training programs. Your journey to a better future starts with a single step.
          </p>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 16, alignItems: 'center', justifyContent: 'center' }}>
            <Link to="/courses">
              <Button size="lg" style={{ background: 'white', color: 'var(--color-orange-600)', fontWeight: 600, borderRadius: 8, padding: '12px 32px', fontSize: 16 }}>
                Explore Our Courses
              </Button>
            </Link>
            <Link to="/calculator">
              <Button size="lg" style={{ background: 'transparent', border: '2px solid white', color: 'white', fontWeight: 600, borderRadius: 8, padding: '12px 32px', fontSize: 16 }}>
                Calculate Course Fees
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
