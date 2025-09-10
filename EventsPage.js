import { Link } from 'react-router-dom';
import { Card, CardContent } from './ui/card';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { Calendar, Clock, MapPin, Users } from 'lucide-react';

export default function EventsPage() {
  const upcomingEvents = [
    {
      id: 1,
      title: 'Skills Development: First Aid Basics',
      date: '2025-02-15',
      time: '09:00 - 15:00',
      venue: 'Community Centre, Alexandra',
      description: 'Free introductory workshop covering basic first aid techniques. Perfect for those considering our full First Aid course.',
      image: require('./assets/9.jpeg'),
      type: 'Workshop',
      status: 'upcoming'
    },
    {
      id: 2,
      title: 'Graduation Ceremony - January 2025 Cohort',
      date: '2025-01-30',
      time: '10:00 - 12:00',
      venue: 'Main Campus, Johannesburg',
      description: 'Celebrating the achievements of our latest graduates from the six-month programs. Families and employers welcome.',
      image: 'https://images.unsplash.com/photo-1523580494863-6f3031224c94?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
      type: 'Graduation',
      status: 'upcoming'
    },
    {
      id: 3,
      title: 'Community Outreach: Job Fair',
      date: '2025-03-08',
      time: '08:00 - 16:00',
      venue: 'Soweto Civic Centre',
      description: 'Connecting our graduates with potential employers. Local businesses will be interviewing and offering positions.',
      image: 'https://images.unsplash.com/photo-1591115765373-5207764f72e7?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
      type: 'Job Fair',
      status: 'upcoming'
    },
    {
      id: 4,
      title: 'Open Day - Explore Our Programs',
      date: '2025-02-22',
      time: '09:00 - 17:00',
      venue: 'All Three Campuses',
      description: 'Visit our facilities, meet instructors, and learn about all available courses. Free lunch and course materials provided.',
      image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
      type: 'Open Day',
      status: 'upcoming'
    }
  ];

  const pastEvents = [
    {
      id: 5,
      title: 'Annual Fundraising Gala',
      date: '2024-11-15',
      time: '18:00 - 23:00',
      venue: 'The Venue, Melrose Arch',
      description: 'Our biggest fundraising event of 2024 raised over R150,000 for scholarship programs.',
      image: 'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
      type: 'Fundraiser',
      status: 'past'
    },
    {
      id: 6,
      title: 'Cooking Competition - Students Showcase',
      date: '2024-12-10',
      time: '10:00 - 14:00',
      venue: 'Training Kitchen, Main Campus',
      description: 'Students from our Cooking course demonstrated their skills in a friendly competition. Winners received prizes and job offers!',
      image: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
      type: 'Competition',
      status: 'past'
    }
  ];

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-ZA', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  // All event type boxes for upcoming events use lighter orange
  const getEventTypeStyle = (type, isUpcoming = true) => {
    if (isUpcoming) {
      return {
        background: 'var(--color-orange-50, #fff7ed)',
        color: 'var(--color-orange-600, #ea580c)'
      };
    }
    const styles = {
      'Workshop': { background: 'var(--color-blue-100)', color: 'var(--color-blue-700)' },
      'Graduation': { background: 'var(--color-green-100)', color: 'var(--color-green-700)' },
      'Job Fair': { background: 'var(--color-purple-100)', color: 'var(--color-purple-700)' },
      'Open Day': { background: 'var(--color-orange-50, #fff7ed)', color: 'var(--color-orange-600, #ea580c)' },
      'Fundraiser': { background: 'var(--color-pink-100)', color: 'var(--color-pink-700)' },
      'Competition': { background: 'var(--color-amber-100)', color: 'var(--color-amber-700)' }
    };
    return styles[type] || { background: 'var(--color-gray-100)', color: 'var(--color-gray-700)' };
  };

  return (
    <div style={{ padding: '64px 0', background: 'var(--color-gray-50, #f9fafb)' }}>
      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 24px' }}>
        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: 48 }}>
          <h1 style={{ color: 'var(--color-orange-600, #ea580c)', marginBottom: 12, fontSize: '2.3rem', fontWeight: 700, letterSpacing: 0.5 }}>Events & Workshops</h1>
          <p style={{ fontSize: 17, color: 'var(--color-gray-700, #374151)', maxWidth: 700, margin: '0 auto 24px', fontWeight: 500 }}>
            Join us for workshops, graduation ceremonies, job fairs, and community events. Be part of our mission to empower communities through education and skills development.
          </p>
        </div>
        {/* Upcoming Events */}
        <section style={{ marginBottom: 64 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 32 }}>
            <Calendar style={{ height: 24, width: 24, color: 'var(--color-green-600)' }} />
            <h2 style={{ color: 'var(--color-green-700)', fontSize: 22, fontWeight: 600 }}>Upcoming Events</h2>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))', gap: 32 }}>
            {upcomingEvents.map((event) => (
              <Card key={event.id} style={{ border: '2px solid var(--color-gray-200, #e5e7eb)', borderRadius: 20, background: '#fff', transition: 'box-shadow 0.3s, transform 0.3s', boxShadow: '0 4px 16px 0 rgba(0,0,0,0.06)', overflow: 'hidden' }}>
                <div style={{ position: 'relative' }}>
                  {/* Event Type Box */}
                  <div style={{
                    width: '100%',
                    ...getEventTypeStyle(event.type, true),
                    fontWeight: 700,
                    fontSize: 16,
                    padding: '10px 0',
                    textAlign: 'center',
                    borderTopLeftRadius: 20,
                    borderTopRightRadius: 20,
                    letterSpacing: 0.5,
                  }}>
                    {event.type}
                  </div>
                  <img
                    src={event.image}
                    alt={event.title}
                    style={{ width: '100%', height: 192, objectFit: 'cover', borderBottomLeftRadius: 0, borderBottomRightRadius: 0 }}
                  />
                </div>
                <CardContent style={{ padding: 28, minHeight: 220, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                  <h3 style={{ fontSize: '1.25rem', fontWeight: 700, color: 'var(--color-orange-700, #c2410c)', marginBottom: 12 }}>{event.title}</h3>
                  <p style={{ color: 'var(--color-gray-700, #374151)', marginBottom: 16, fontWeight: 500 }}>{event.description}</p>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: 8, color: 'var(--color-gray-600, #374151)', fontSize: 15, marginBottom: 16 }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                      <Calendar style={{ height: 16, width: 16, color: 'var(--color-orange-400, #fb923c)' }} />
                      <span>{formatDate(event.date)}</span>
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                      <Clock style={{ height: 16, width: 16, color: 'var(--color-blue-500, #3b82f6)' }} />
                      <span>{event.time}</span>
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                      <MapPin style={{ height: 16, width: 16, color: 'var(--color-red-500, #ef4444)' }} />
                      <span>{event.venue}</span>
                    </div>
                  </div>
                  <a
                    href={`mailto:info@empoweringnation.org?subject=RSVP for ${encodeURIComponent(event.title)}`}
                    style={{
                      display: 'block',
                      width: '100%',
                      textDecoration: 'none',
                      marginTop: 8
                    }}
                  >
                    <Button style={{ width: '100%', fontWeight: 700, background: 'var(--color-green-600, #16a34a)', color: '#fff', borderRadius: 16, fontSize: 16, padding: '12px 0', boxShadow: '0 2px 8px 0 rgba(22,163,74,0.10)', transition: 'all 0.2s' }}>
                      RSVP / Join Event
                    </Button>
                  </a>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>
        {/* Past Events */}
        <section>
          <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 32 }}>
            <Users style={{ height: 24, width: 24, color: 'var(--color-orange-600)' }} />
            <h2 style={{ color: 'var(--color-orange-700)', fontSize: 22, fontWeight: 600 }}>Past Events</h2>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))', gap: 32 }}>
            {pastEvents.map((event) => (
              <Card key={event.id} style={{ border: '2px solid var(--color-orange-200, #fed7aa)', borderRadius: 20, background: '#fff', transition: 'box-shadow 0.3s, transform 0.3s', boxShadow: '0 4px 16px 0 rgba(0,0,0,0.06)', overflow: 'hidden', opacity: 0.9 }}>
                <div style={{ position: 'relative' }}>
                  {/* Event Type Box */}
                  <div style={{
                    width: '100%',
                    ...getEventTypeStyle(event.type, false),
                    fontWeight: 700,
                    fontSize: 16,
                    padding: '10px 0',
                    textAlign: 'center',
                    borderTopLeftRadius: 20,
                    borderTopRightRadius: 20,
                    letterSpacing: 0.5,
                  }}>
                    {event.type}
                  </div>
                  <img
                    src={event.image}
                    alt={event.title}
                    style={{ width: '100%', height: 192, objectFit: 'cover', borderBottomLeftRadius: 0, borderBottomRightRadius: 0 }}
                  />
                  <div style={{ position: 'absolute', bottom: 16, right: 16 }}>
                    <Badge style={{ background: 'var(--color-orange-50, #fff7ed)', color: 'var(--color-orange-600, #ea580c)', fontWeight: 700, borderRadius: 8, padding: '4px 12px', fontSize: 15 }}>
                      Completed
                    </Badge>
                  </div>
                </div>
                <CardContent style={{ padding: 28 }}>
                  <h3 style={{ fontSize: '1.25rem', fontWeight: 700, color: 'var(--color-orange-700, #c2410c)', marginBottom: 12 }}>{event.title}</h3>
                  <p style={{ color: 'var(--color-gray-700, #374151)', marginBottom: 16, fontWeight: 500 }}>{event.description}</p>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: 8, color: 'var(--color-gray-600, #374151)', fontSize: 15 }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                      <Calendar style={{ height: 16, width: 16, color: 'var(--color-orange-400, #fb923c)' }} />
                      <span>{formatDate(event.date)}</span>
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                      <Clock style={{ height: 16, width: 16, color: 'var(--color-blue-500, #3b82f6)' }} />
                      <span>{event.time}</span>
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                      <MapPin style={{ height: 16, width: 16, color: 'var(--color-red-500, #ef4444)' }} />
                      <span>{event.venue}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>
        {/* Call to Action */}
        <div style={{ marginTop: 64, background: 'linear-gradient(90deg, #ea580c 0%, #fbbf24 100%)', borderRadius: 16, padding: 48, textAlign: 'center', color: 'white' }}>
          <h2 style={{ color: 'white', marginBottom: 16, fontSize: '2rem', fontWeight: 700 }}>Stay Updated on Our Events</h2>
          <p style={{ color: '#fef3c7', marginBottom: 32, maxWidth: 600, margin: '0 auto' }}>
            Don't miss out on workshops, job opportunities, and community events. Contact us to stay informed about upcoming activities.
          </p>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 16, alignItems: 'center', justifyContent: 'center' }}>
            <Button size="lg" style={{ background: 'var(--color-orange-600, #ea580c)', color: 'white', fontWeight: 700, borderRadius: 8, padding: '12px 32px', fontSize: 16, boxShadow: '0 2px 8px 0 rgba(234,88,12,0.10)' }}>
              Contact Us for Updates
            </Button>
            <Link to="/courses">
              <Button size="lg" style={{ background: 'transparent', border: '2px solid white', color: 'white', fontWeight: 600, borderRadius: 8, padding: '12px 32px', fontSize: 16 }}>
                View All Courses
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
