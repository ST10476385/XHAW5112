import React, { useState } from 'react';
import { View, Text, ScrollView, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Feather } from '@expo/vector-icons';

// Course type
type Course = {
  id: string;
  title: string;
  type: string;
  duration: string;
  fees: number;
  purpose: string;
  content: string[];
};

// Example course data
const courses: Course[] = [
  {
    id: 'first-aid',
    title: 'First Aid & Home Care',
    type: 'six-week',
    duration: '6 Weeks',
    fees: 1200,
    purpose: 'Learn essential first aid and home care skills for emergencies and daily life.',
    content: [
      'Basic first aid techniques',
      'CPR and emergency response',
      'Home safety and accident prevention',
      'Caring for children and elderly',
      'Managing chronic conditions',
    ],
  },
  {
    id: 'sewing',
    title: 'Sewing & Tailoring',
    type: 'six-month',
    duration: '6 Months',
    fees: 3500,
    purpose: 'Master sewing, tailoring, and garment repair for personal or business use.',
    content: [
      'Sewing machine operation',
      'Pattern making',
      'Garment construction',
      'Alterations and repairs',
      'Starting a tailoring business',
    ],
  },
  {
    id: 'landscaping',
    title: 'Landscaping & Garden Maintenance',
    type: 'six-week',
    duration: '6 Weeks',
    fees: 1500,
    purpose: 'Gain practical skills in landscaping, garden design, and maintenance.',
    content: [
      'Garden design basics',
      'Plant care and selection',
      'Lawn maintenance',
      'Watering systems',
      'Seasonal gardening tips',
    ],
  },
  {
    id: 'life-skills',
    title: 'Life Skills & Personal Development',
    type: 'six-month',
    duration: '6 Months',
    fees: 2800,
    purpose: 'Develop essential life skills for personal growth and success.',
    content: [
      'Communication skills',
      'Financial literacy',
      'Time management',
      'Goal setting',
      'Problem solving',
    ],
  },
  {
    id: 'child-minding',
    title: 'Child Minding & Early Childhood Care',
    type: 'six-week',
    duration: '6 Weeks',
    fees: 1300,
    purpose: 'Learn to care for and educate young children in a safe environment.',
    content: [
      'Child safety and nutrition',
      'Early learning activities',
      'Behavior management',
      'First aid for children',
      'Parent communication',
    ],
  },
  {
    id: 'cooking',
    title: 'Cooking & Nutrition',
    type: 'six-month',
    duration: '6 Months',
    fees: 3200,
    purpose: 'Master healthy cooking techniques and nutrition basics.',
    content: [
      'Meal planning',
      'Food safety',
      'Cooking methods',
      'Nutrition fundamentals',
      'Budget-friendly recipes',
    ],
  },
];

export default function CoursesScreen() {
  const navigation = useNavigation<any>();
  const [activeFilter, setActiveFilter] = useState('all');

  const filteredCourses =
    activeFilter === 'all'
      ? courses
      : courses.filter((course) => course.type === activeFilter);

  const formatPrice = (price: number) => `R${price}`;

  return (
    <ScrollView style={{ backgroundColor: '#f9fafb' }} contentContainerStyle={{ paddingBottom: 32 }}>
      <View style={styles.container}>
        <Text style={styles.headerTitle}>Our Training Courses</Text>
        <Text style={styles.headerSubtitle}>
          Choose from our comprehensive range of skills training programs designed to enhance your career prospects and earning potential.
        </Text>
        {/* Filter Buttons */}
        <View style={styles.filterRow}>
          <TouchableOpacity
            style={[
              styles.filterButton,
              activeFilter === 'all' && { backgroundColor: '#ea580c' },
            ]}
            onPress={() => setActiveFilter('all')}
          >
            <Text style={{ color: activeFilter === 'all' ? '#fff' : '#ea580c', fontWeight: '700' }}>All Courses</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[
              styles.filterButton,
              activeFilter === 'six-month' && { backgroundColor: '#16a34a' },
            ]}
            onPress={() => setActiveFilter('six-month')}
          >
            <Text style={{ color: activeFilter === 'six-month' ? '#fff' : '#16a34a', fontWeight: '700' }}>6-Month Courses</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[
              styles.filterButton,
              activeFilter === 'six-week' && { backgroundColor: '#ea580c' },
            ]}
            onPress={() => setActiveFilter('six-week')}
          >
            <Text style={{ color: activeFilter === 'six-week' ? '#fff' : '#ea580c', fontWeight: '700' }}>6-Week Courses</Text>
          </TouchableOpacity>
        </View>
        {/* Course List */}
        <View style={styles.courseList}>
          {filteredCourses.map((course: Course) => (
            <View key={course.id} style={styles.card}>
              <Text style={styles.cardTitle}>{course.title}</Text>
              <Text style={styles.cardPurpose}>{course.purpose}</Text>
              <View style={styles.cardInfoRow}>
                <Feather name="clock" size={16} color="#fb923c" />
                <Text style={styles.cardInfoText}>Duration: {course.duration}</Text>
              </View>
              <View style={styles.cardInfoRow}>
                <Feather name="dollar-sign" size={16} color="#22c55e" />
                <Text style={[styles.cardInfoText, { color: '#15803d', fontWeight: '700' }]}>{formatPrice(course.fees)}</Text>
              </View>
              <View style={styles.cardInfoRow}>
                <Feather name="book-open" size={16} color="#3b82f6" />
                <Text style={styles.cardInfoText}>{course.content.length} modules covered</Text>
              </View>
              {/* Course Content Preview */}
              <View style={{ marginTop: 8 }}>
                <Text style={styles.learnTitle}>What you’ll learn:</Text>
                {course.content.slice(0, 3).map((item: string, idx: number) => (
                  <View key={idx} style={styles.learnRow}>
                    <View style={styles.learnDot} />
                    <Text style={styles.learnText}>{item}</Text>
                  </View>
                ))}
                {course.content.length > 3 && (
                  <Text style={styles.moreTopics}>+{course.content.length - 3} more topics</Text>
                )}
              </View>
              <TouchableOpacity
                style={styles.detailsButton}
                onPress={() => navigation.navigate('course-detail', { id: course.id })}
              >
                <Text style={{ color: '#fff', fontWeight: '700', fontSize: 16 }}>View Course Details</Text>
              </TouchableOpacity>
            </View>
          ))}
          {filteredCourses.length === 0 && (
            <Text style={styles.noCoursesText}>No courses found for the selected filter.</Text>
          )}
        </View>
        {/* Call to Action */}
        <View style={styles.ctaSection}>
          <Text style={styles.ctaTitle}>Ready to Get Started?</Text>
          <Text style={styles.ctaSubtitle}>
            Take the first step towards a brighter future. Calculate your total fees and apply for multiple courses to receive our special discounts.
          </Text>
          <View style={styles.ctaButtonRow}>
            <TouchableOpacity
              style={[styles.ctaButton, { backgroundColor: '#fff' }]}
              onPress={() => navigation.navigate('calculator')}
            >
              <Text style={{ color: '#ea580c', fontWeight: '600', fontSize: 16 }}>Calculate Course Fees</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[styles.ctaButton, { backgroundColor: 'transparent', borderWidth: 2, borderColor: '#fff' }]}
              onPress={() => navigation.navigate('contact')}
            >
              <Text style={{ color: '#fff', fontWeight: '600', fontSize: 16 }}>Contact Us for More Info</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { padding: 16 },
  headerTitle: { fontSize: 24, fontWeight: 'bold', color: '#ea580c', marginBottom: 8, textAlign: 'center' },
  headerSubtitle: { fontSize: 16, color: '#374151', marginBottom: 24, textAlign: 'center' },
  filterRow: { flexDirection: 'row', justifyContent: 'center', gap: 12, marginBottom: 24 },
  filterButton: { borderRadius: 24, borderWidth: 2, borderColor: '#ea580c', paddingVertical: 8, paddingHorizontal: 20, marginHorizontal: 4, backgroundColor: '#fff' },
  courseList: { gap: 24 },
  card: { backgroundColor: '#fff', borderRadius: 16, padding: 16, marginBottom: 16, elevation: 2 },
  cardTitle: { fontSize: 18, fontWeight: 'bold', color: '#c2410c', marginBottom: 4 },
  cardPurpose: { color: '#374151', marginBottom: 8 },
  cardInfoRow: { flexDirection: 'row', alignItems: 'center', gap: 8, marginBottom: 2 },
  cardInfoText: { fontSize: 15, color: '#374151' },
  learnTitle: { fontWeight: 'bold', color: '#15803d', marginBottom: 4 },
  learnRow: { flexDirection: 'row', alignItems: 'center', marginBottom: 2 },
  learnDot: { width: 7, height: 7, borderRadius: 4, backgroundColor: '#4ade80', marginRight: 8 },
  learnText: { fontSize: 14, color: '#374151' },
  moreTopics: { color: '#ea580c', fontSize: 12, fontWeight: '600' },
  detailsButton: { backgroundColor: '#ea580c', borderRadius: 8, paddingVertical: 12, alignItems: 'center', marginTop: 12 },
  noCoursesText: { color: '#374151', textAlign: 'center', marginTop: 24 },
  ctaSection: { marginTop: 32, backgroundColor: '#ea580c', borderRadius: 16, padding: 32, alignItems: 'center' },
  ctaTitle: { color: '#fff', fontWeight: '700', fontSize: 22, marginBottom: 12 },
  ctaSubtitle: { color: '#fef3c7', marginBottom: 24, textAlign: 'center', fontSize: 16 },
  ctaButtonRow: { flexDirection: 'row', gap: 16, marginTop: 8 },
  ctaButton: { borderRadius: 8, paddingVertical: 12, paddingHorizontal: 24, margin: 4, alignItems: 'center', justifyContent: 'center' },
});