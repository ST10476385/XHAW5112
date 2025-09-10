import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Card, CardContent } from './ui/card';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { courses } from './data/courses';
import { Clock, DollarSign, Users, BookOpen } from 'lucide-react';

export default function CoursesPage() {
  const [filteredCourses, setFilteredCourses] = useState(courses);
  const [activeFilter, setActiveFilter] = useState('all');
  const location = useLocation();

  useEffect(() => {
    // Check for URL parameters
    const urlParams = new URLSearchParams(location.search);
    const typeParam = urlParams.get('type');
    
    if (typeParam === 'six-month' || typeParam === 'six-week') {
      setActiveFilter(typeParam);
      filterCourses(typeParam);
    } else {
      setActiveFilter('all');
      setFilteredCourses(courses);
    }
  }, [location.search]);

  const filterCourses = (type) => {
    if (type === 'all') {
      setFilteredCourses(courses);
    } else {
      setFilteredCourses(courses.filter(course => course.type === type));
    }
    setActiveFilter(type);
  };

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
        <div style={{ textAlign: 'center', marginBottom: 48 }}>
          <h1 style={{ color: 'var(--color-orange-600, #ea580c)', marginBottom: 12, fontSize: '2.3rem', fontWeight: 700, letterSpacing: 0.5 }}>Our Training Courses</h1>
          <p style={{ fontSize: 17, color: 'var(--color-gray-700, #374151)', maxWidth: 700, margin: '0 auto 24px', fontWeight: 500 }}>
            Choose from our comprehensive range of skills training programs designed to enhance your career prospects and earning potential.
          </p>
          {/* Filter Buttons */}
          <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: 16, marginTop: 8 }}>
            <Button
              style={{
                background: activeFilter === 'all' ? 'var(--color-orange-600, #ea580c)' : '#fff',
                color: activeFilter === 'all' ? '#fff' : 'var(--color-orange-600, #ea580c)',
                border: '2px solid var(--color-orange-600, #ea580c)',
                fontWeight: 700,
                borderRadius: 24,
                padding: '8px 28px',
                fontSize: 16,
                boxShadow: activeFilter === 'all' ? '0 2px 8px 0 rgba(234,88,12,0.10)' : 'none',
                transition: 'all 0.2s',
              }}
              onClick={() => filterCourses('all')}
            >
              All Courses
            </Button>
            <Button
              style={{
                background: activeFilter === 'six-month' ? 'var(--color-green-600, #16a34a)' : '#fff',
                color: activeFilter === 'six-month' ? '#fff' : 'var(--color-green-600, #16a34a)',
                border: '2px solid var(--color-green-600, #16a34a)',
                fontWeight: 700,
                borderRadius: 24,
                padding: '8px 28px',
                fontSize: 16,
                boxShadow: activeFilter === 'six-month' ? '0 2px 8px 0 rgba(22,163,74,0.10)' : 'none',
                transition: 'all 0.2s',
              }}
              onClick={() => filterCourses('six-month')}
            >
              6-Month Courses
            </Button>
            <Button
              style={{
                background: activeFilter === 'six-week' ? 'var(--color-orange-600, #ea580c)' : '#fff',
                color: activeFilter === 'six-week' ? '#fff' : 'var(--color-orange-600, #ea580c)',
                border: '2px solid var(--color-orange-600, #ea580c)',
                fontWeight: 700,
                borderRadius: 24,
                padding: '8px 28px',
                fontSize: 16,
                boxShadow: activeFilter === 'six-week' ? '0 2px 8px 0 rgba(234,88,12,0.10)' : 'none',
                transition: 'all 0.2s',
              }}
              onClick={() => filterCourses('six-week')}
            >
              6-Week Courses
            </Button>
          </div>
        </div>
        {/* Course Grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))', gap: 32 }}>
          {filteredCourses.map((course) => (
            <Card key={course.id} style={{ border: '2px solid var(--color-gray-200, #e5e7eb)', borderRadius: 20, background: '#fff', transition: 'box-shadow 0.3s, transform 0.3s', boxShadow: '0 4px 16px 0 rgba(0,0,0,0.06)' }}>
              <CardContent style={{ padding: 28, minHeight: 340, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 16 }}>
                  <h3 style={{ fontSize: '1.25rem', fontWeight: 700, color: 'var(--color-orange-700, #c2410c)' }}>{course.title}</h3>
                  <Badge 
                    style={course.type === 'six-month' 
                      ? { background: 'var(--color-green-100, #dcfce7)', color: 'var(--color-green-700, #15803d)', fontWeight: 700, borderRadius: 8, padding: '4px 12px', fontSize: 15 }
                      : { background: 'var(--color-orange-50, #fff7ed)', color: 'var(--color-orange-600, #ea580c)', fontWeight: 700, borderRadius: 8, padding: '4px 12px', fontSize: 15 }
                    }
                  >
                    {course.type === 'six-month' ? '6 Months' : '6 Weeks'}
                  </Badge>
                </div>
                <p style={{ color: 'var(--color-gray-700, #374151)', marginBottom: 16, minHeight: 40, fontWeight: 500 }}>{course.purpose}</p>
                <div style={{ marginBottom: 24 }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 8, color: 'var(--color-gray-600, #374151)', fontSize: 15, marginBottom: 2 }}>
                    <Clock style={{ height: 16, width: 16, color: 'var(--color-orange-400, #fb923c)' }} />
                    <span>Duration: {course.duration}</span>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 8, color: 'var(--color-gray-600, #374151)', fontSize: 15, marginBottom: 2 }}>
                    <DollarSign style={{ height: 16, width: 16, color: 'var(--color-green-500, #22c55e)' }} />
                    <span style={{ fontWeight: 700, color: 'var(--color-green-700, #15803d)' }}>{formatPrice(course.fees)}</span>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 8, color: 'var(--color-gray-600, #374151)', fontSize: 15 }}>
                    <BookOpen style={{ height: 16, width: 16, color: 'var(--color-blue-500, #3b82f6)' }} />
                    <span>{course.content.length} modules covered</span>
                  </div>
                </div>
                {/* Course Content Preview */}
                <div style={{ marginBottom: 24 }}>
                  <h4 style={{ fontSize: 14, fontWeight: 600, color: 'var(--color-green-700, #15803d)', marginBottom: 8, letterSpacing: 0.2 }}>What you’ll learn:</h4>
                  <ul style={{ color: 'var(--color-gray-700, #374151)', fontSize: 14, paddingLeft: 0, listStyle: 'none', margin: 0 }}>
                    {course.content.slice(0, 3).map((item, index) => (
                      <li key={index} style={{ display: 'flex', alignItems: 'flex-start', gap: 8 }}>
                        <div style={{ width: 7, height: 7, borderRadius: '50%', background: 'var(--color-green-400, #4ade80)', marginTop: 8, flexShrink: 0 }}></div>
                        <span>{item}</span>
                      </li>
                    ))}
                    {course.content.length > 3 && (
                      <li style={{ color: 'var(--color-orange-600, #ea580c)', fontSize: 12, fontWeight: 600 }}>
                        +{course.content.length - 3} more topics
                      </li>
                    )}
                  </ul>
                </div>
                <Link to={`/courses/${course.id}`}>
                  <Button
                    style={{
                      width: '100%',
                      fontWeight: 700,
                      background: course.type === 'six-week' ? 'var(--color-orange-600, #ea580c)' : 'var(--color-green-600, #16a34a)',
                      color: '#fff',
                      borderRadius: 16,
                      fontSize: 16,
                      padding: '12px 0',
                      marginTop: 8,
                      boxShadow: course.type === 'six-week' ? '0 2px 8px 0 rgba(234,88,12,0.10)' : '0 2px 8px 0 rgba(22,163,74,0.10)',
                      transition: 'all 0.2s',
                    }}
                  >
                    View Course Details
                  </Button>
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>
        {/* No courses message */}
        {filteredCourses.length === 0 && (
          <div style={{ textAlign: 'center', padding: '48px 0' }}>
            <p style={{ color: 'var(--color-gray-500)', fontSize: 18 }}>No courses found for the selected filter.</p>
          </div>
        )}
        {/* Call to Action */}
        <div style={{ marginTop: 64, background: 'linear-gradient(90deg, #ea580c 0%, #fbbf24 100%)', borderRadius: 16, padding: 48, textAlign: 'center', color: 'white' }}>
          <h2 style={{ color: 'white', marginBottom: 16, fontSize: '2rem', fontWeight: 700 }}>Ready to Get Started?</h2>
          <p style={{ color: '#fef3c7', marginBottom: 32, maxWidth: 600, margin: '0 auto' }}>
            Take the first step towards a brighter future. Calculate your total fees and apply for multiple courses to receive our special discounts.
          </p>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 16, alignItems: 'center', justifyContent: 'center' }}>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 16, justifyContent: 'center' }}>
              <Link to="/calculator">
                <Button size="lg" style={{ background: 'white', color: 'var(--color-orange-600)', fontWeight: 600, borderRadius: 8, padding: '12px 32px', fontSize: 16 }}>
                  Calculate Course Fees
                </Button>
              </Link>
              <Link to="/contact">
                <Button size="lg" style={{ background: 'transparent', border: '2px solid white', color: 'white', fontWeight: 600, borderRadius: 8, padding: '12px 32px', fontSize: 16 }}>
                  Contact Us for More Info
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
