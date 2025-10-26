import React from 'react';
import { View, Text, StyleSheet, ScrollView, Image, TouchableOpacity } from 'react-native';
import Footer from '@/components/Footer';
import { FontAwesome, Feather, MaterialIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

const testimonials = [
  {
    id: 1,
    name: 'Maria Sibanda',
    image: { uri: 'https://randomuser.me/api/portraits/women/12.jpg' },
    course: 'First Aid & Life Skills',
    rating: 5,
    year: 2024,
    quote: 'Before joining Empowering Nation, I struggled to find stable work. The First Aid course opened so many doors - now I work at a private clinic and earn three times what I used to make. The confidence I gained from the Life Skills program helped me negotiate my salary!',
    achievement: 'Now employed at MediCare Clinic',
  },
  {
    id: 2,
    name: 'Thabo Mokoena',
    image: { uri: 'https://randomuser.me/api/portraits/men/32.jpg' },
    course: 'Landscaping',
    rating: 5,
    year: 2023,
    quote: 'I was just doing basic garden maintenance, but after the landscaping course, I can design beautiful gardens! I now have my own small business with 15 regular clients. The course taught me about plant combinations I never knew existed.',
    achievement: 'Started his own landscaping business',
  },
  {
    id: 3,
    name: 'Grace Nkomo',
    image: { uri: 'https://randomuser.me/api/portraits/women/65.jpg' },
    course: 'Sewing',
    rating: 5,
    year: 2024,
    quote: 'The sewing course changed my entire life. I learned to make beautiful clothes and do alterations. Now I run a tailoring shop from my home and even train other women in my community. My children are so proud of what I\'ve achieved!',
    achievement: 'Opened her own tailoring business',
  },
  {
    id: 4,
    name: 'David Motsumi',
    image: { uri: 'https://randomuser.me/api/portraits/men/45.jpg' },
    course: 'Child Minding & Cooking',
    rating: 5,
    year: 2024,
    quote: 'Taking both courses was the best decision I made. The child minding skills helped me get a job with a wonderful family, and my cooking skills mean I can prepare healthy meals for the children. The family increased my salary after seeing my capabilities!',
    achievement: 'Full-time nanny with competitive salary',
  },
  {
    id: 5,
    name: 'Nomthandazo Dlamini',
    image: { uri: 'https://randomuser.me/api/portraits/women/22.jpg' },
    course: 'Garden Maintenance',
    rating: 5,
    year: 2024,
    quote: 'I thought I knew about gardens, but this course taught me so much about water conservation and plant care. Now I help homeowners save money on their water bills while keeping their gardens beautiful. My clients recommend me to their friends!',
    achievement: 'Manages gardens for 20+ households',
  },
  {
    id: 6,
    name: 'Joseph Mthembu',
    image: { uri: 'https://randomuser.me/api/portraits/men/77.jpg' },
    course: 'Life Skills',
    rating: 5,
    year: 2023,
    quote: 'The Life Skills course taught me about my rights as a worker and how to manage my money. I opened my first bank account at age 45! The instructors were patient and made everything easy to understand. Now I\'m helping my friends with their finances too.',
    achievement: 'Financial literacy mentor in his community',
  },
  {
    id: 7,
    name: 'Sarah Hlongwane',
    image: { uri: 'https://randomuser.me/api/portraits/women/33.jpg' },
    course: 'Multiple Courses',
    rating: 5,
    year: 2023,
    quote: 'I completed First Aid, Sewing, and Child Minding courses. The discount for multiple courses made it affordable for me. Now I offer comprehensive services to families - I can take care of children, do alterations, and handle medical emergencies. I\'m booked months in advance!',
    achievement: 'Premium domestic services provider',
  },
  {
    id: 8,
    name: 'Patrick Sibeko',
    image: { uri: 'https://randomuser.me/api/portraits/men/23.jpg' },
    course: 'Cooking',
    rating: 5,
    year: 2024,
    quote: 'I never thought I could cook professionally, but the course taught me about nutrition and meal planning. I now work for a catering company and even cook for special events on weekends. My dream is to open my own restaurant one day!',
    achievement: 'Professional chef at local catering company',
  },
];

const impactStats = [
  { icon: 'trophy', number: '500+', label: 'Graduates', color: '#ea580c' },
  { icon: 'heart', number: '85%', label: 'Job Placement Rate', color: '#16a34a' },
  { icon: 'star', number: '4.9/5', label: 'Average Rating', color: '#3b82f6' },
  { icon: 'quote-right', number: '95%', label: 'Would Recommend', color: '#a21caf' },
];

export default function TestimonialsScreen() {
  const navigation = useNavigation() as any;
  return (
    <ScrollView style={{ backgroundColor: '#f9fafb' }} contentContainerStyle={{ paddingBottom: 32 }}>
      <View style={styles.container}>
        {/* Header */}
        <Text style={styles.headerTitle}>Success Stories</Text>
        <Text style={styles.headerSubtitle}>
          Read inspiring stories from our graduates who have transformed their lives through our training programs. Their success is our greatest achievement.
        </Text>
        {/* Impact Stats */}
        <View style={styles.statsRow}>
          {impactStats.map((stat, idx) => (
            <View key={idx} style={[styles.statCard, { borderColor: stat.color, backgroundColor: '#f5f3ff' }] }>
              <FontAwesome name={stat.icon as any} size={32} color={stat.color} style={{ marginBottom: 8 }} />
              <Text style={[styles.statNumber, { color: stat.color }]}>{stat.number}</Text>
              <Text style={styles.statLabel}>{stat.label}</Text>
            </View>
          ))}
        </View>
        {/* Testimonials Grid */}
        <View style={styles.testimonialsGrid}>
          {testimonials.map((t, idx) => (
            <View key={t.id} style={[styles.testimonialCard, { borderColor: '#c4b5fd', backgroundColor: '#f5f3ff' }] }>
              <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 12 }}>
                <Image source={t.image} style={styles.avatar} />
                <View style={{ marginLeft: 12, flex: 1 }}>
                  <Text style={styles.name}>{t.name}</Text>
                  <View style={styles.badge}><Text style={styles.badgeText}>{t.course}</Text></View>
                  <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 4 }}>
                    {[...Array(t.rating)].map((_, i) => (
                      <FontAwesome key={i} name="star" size={16} color="#facc15" />
                    ))}
                    <Text style={styles.year}>({t.year})</Text>
                  </View>
                </View>
              </View>
              <View style={{ flexDirection: 'row', alignItems: 'flex-start', marginBottom: 8 }}>
                <MaterialIcons name="format-quote" size={24} color="#c4b5fd" style={{ marginRight: 4, marginTop: 2 }} />
                <Text style={styles.quote}>{t.quote}</Text>
              </View>
              <View style={styles.achievementBox}>
                <FontAwesome name="trophy" size={16} color="#ea580c" style={{ marginRight: 6 }} />
                <Text style={styles.achievement}>{t.achievement}</Text>
              </View>
            </View>
          ))}
        </View>
        {/* Partner Testimonial */}
        <View style={styles.partnerSection}>
          <Text style={styles.partnerHeader}>What Our Partners Say</Text>
          <View style={styles.partnerCard}>
            <Image source={{ uri: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80' }} style={styles.partnerAvatar} />
            <Text style={styles.partnerName}>Mrs. Jennifer Walsh</Text>
            <View style={styles.partnerBadge}><Text style={styles.partnerBadgeText}>Employer & Volunteer</Text></View>
            <MaterialIcons name="format-quote" size={32} color="#e5e7eb" style={{ marginVertical: 8 }} />
            <Text style={styles.partnerQuote}>
              "I've hired three graduates from Empowering Nation over the past two years. The difference in their skills, confidence, and professionalism compared to untrained staff is remarkable. They arrive ready to work, understand safety protocols, and bring innovation to their roles. I now exclusively hire from their program."
            </Text>
            <View style={styles.partnerAchievementBox}>
              <FontAwesome name="trophy" size={18} color="#334155" style={{ marginRight: 6 }} />
              <Text style={styles.partnerAchievement}>Hired 3 graduates • 100% satisfaction</Text>
            </View>
          </View>
        </View>
        {/* Call to Action */}
        <View style={styles.ctaSection}>
          <Text style={styles.ctaTitle}>Ready to Write Your Success Story?</Text>
          <Text style={styles.ctaSubtitle}>
            Join hundreds of graduates who have transformed their lives through our training programs. Your journey to a better future starts with a single step.
          </Text>
          <TouchableOpacity style={[styles.ctaButton, { backgroundColor: 'white', borderColor: '#ea580c', borderWidth: 2 }]} onPress={() => navigation.navigate('Courses')}>
            <Text style={{ color: '#ea580c', fontWeight: '700', fontSize: 16 }}>Explore Our Courses</Text>
          </TouchableOpacity>
        </View>
        <Footer navigation={navigation} />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    maxWidth: 700,
    alignSelf: 'center',
    padding: 16,
  },
  headerTitle: {
    color: '#7c3aed',
    fontSize: 26,
    fontWeight: '700',
    marginBottom: 12,
    textAlign: 'center',
    letterSpacing: 0.5,
    borderWidth: 2,
    borderColor: '#c4b5fd',
    borderRadius: 10,
    paddingVertical: 12,
    backgroundColor: '#f5f3ff',
    minWidth: 220,
    alignSelf: 'center',
  },
  headerSubtitle: {
    fontSize: 16,
    color: '#374151',
    maxWidth: 700,
    marginBottom: 24,
    textAlign: 'center',
    alignSelf: 'center',
    fontWeight: '500',
  },
  statsRow: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    gap: 16,
    marginBottom: 32,
  },
  statCard: {
    borderRadius: 12,
    borderWidth: 2,
    padding: 18,
    alignItems: 'center',
    minWidth: 120,
    margin: 4,
  },
  statNumber: {
    fontSize: 24,
    fontWeight: '700',
    marginBottom: 2,
  },
  statLabel: {
    fontSize: 14,
    color: '#374151',
    textAlign: 'center',
  },
  testimonialsGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    gap: 16,
    marginBottom: 32,
  },
  testimonialCard: {
    borderRadius: 16,
    borderWidth: 2.5,
    padding: 18,
    margin: 6,
    width: 320,
    backgroundColor: '#f5f3ff',
    shadowColor: '#e0e7ef',
    shadowOpacity: 0.08,
    shadowRadius: 8,
    shadowOffset: { width: 0, height: 2 },
  },
  avatar: {
    width: 56,
    height: 56,
    borderRadius: 28,
    backgroundColor: '#e0e7ef',
  },
  name: {
    fontWeight: '700',
    fontSize: 16,
    color: '#7c3aed',
  },
  badge: {
    backgroundColor: '#c7d2fe',
    borderRadius: 8,
    paddingHorizontal: 8,
    paddingVertical: 2,
    marginTop: 2,
    alignSelf: 'flex-start',
  },
  badgeText: {
    color: '#7c3aed',
    fontWeight: '600',
    fontSize: 13,
  },
  year: {
    fontSize: 13,
    color: '#64748b',
    marginLeft: 8,
  },
  quote: {
    color: '#374151',
    fontStyle: 'italic',
    flex: 1,
    lineHeight: 20,
  },
  achievementBox: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fef3c7',
    borderRadius: 8,
    padding: 8,
    marginTop: 6,
  },
  achievement: {
    color: '#ea580c',
    fontWeight: '600',
    fontSize: 14,
  },
  partnerSection: {
    marginBottom: 32,
    alignItems: 'center',
  },
  partnerHeader: {
    textAlign: 'center',
    color: '#334155',
    marginBottom: 16,
    fontSize: 20,
    fontWeight: '700',
    borderWidth: 2,
    borderColor: '#e5e7eb',
    borderRadius: 10,
    paddingVertical: 10,
    backgroundColor: '#f1f5f9',
    minWidth: 220,
    alignSelf: 'center',
  },
  partnerCard: {
    borderWidth: 2,
    borderColor: '#e5e7eb',
    backgroundColor: '#f1f5f9',
    borderRadius: 16,
    padding: 24,
    alignItems: 'center',
    maxWidth: 400,
    alignSelf: 'center',
  },
  partnerAvatar: {
    width: 72,
    height: 72,
    borderRadius: 36,
    marginBottom: 8,
    backgroundColor: '#e0e7ef',
  },
  partnerName: {
    fontWeight: '700',
    color: '#334155',
    fontSize: 16,
    marginBottom: 4,
  },
  partnerBadge: {
    backgroundColor: '#e0e7ef',
    borderRadius: 8,
    paddingHorizontal: 8,
    paddingVertical: 2,
    marginBottom: 8,
  },
  partnerBadgeText: {
    color: '#334155',
    fontWeight: '600',
    fontSize: 13,
  },
  partnerQuote: {
    fontSize: 16,
    color: '#374151',
    fontStyle: 'italic',
    marginBottom: 12,
    textAlign: 'center',
  },
  partnerAchievementBox: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'white',
    borderRadius: 8,
    padding: 8,
    marginTop: 6,
    alignSelf: 'center',
  },
  partnerAchievement: {
    color: '#334155',
    fontWeight: '600',
    fontSize: 14,
  },
  ctaSection: {
    marginTop: 32,
    backgroundColor: 'linear-gradient(90deg, #f97316 0%, #ef4444 100%)',
    borderRadius: 16,
    padding: 32,
    alignItems: 'center',
  },
  ctaTitle: {
    color: 'white',
    marginBottom: 12,
    fontSize: 22,
    fontWeight: '700',
  },
  ctaSubtitle: {
    color: '#fed7aa',
    marginBottom: 24,
    fontSize: 15,
    textAlign: 'center',
    maxWidth: 600,
  },
  ctaButton: {
    borderRadius: 8,
    paddingVertical: 12,
    paddingHorizontal: 32,
    margin: 4,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
