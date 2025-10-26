import React from 'react';
import { View, Text, StyleSheet, ScrollView, Image, TouchableOpacity, Linking } from 'react-native';
import { Feather, FontAwesome } from '@expo/vector-icons';
import Footer from '@/components/Footer';
import { useNavigation } from '@react-navigation/native';

const upcomingEvents = [
  {
    id: 1,
    title: 'Skills Development: First Aid Basics',
    date: '2025-02-15',
    time: '09:00 - 15:00',
    venue: 'Community Centre, Alexandra',
    description: 'Free introductory workshop covering basic first aid techniques. Perfect for those considering our full First Aid course.',
    image: require('@/assets/images/9.jpeg'),
    type: 'Workshop',
    status: 'upcoming',
  },
  {
    id: 2,
    title: 'Graduation Ceremony - January 2025 Cohort',
    date: '2025-01-30',
    time: '10:00 - 12:00',
    venue: 'Main Campus, Johannesburg',
    description: 'Celebrating the achievements of our latest graduates from the six-month programs. Families and employers welcome.',
    image: { uri: 'https://images.unsplash.com/photo-1523580494863-6f3031224c94?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80' },
    type: 'Graduation',
    status: 'upcoming',
  },
  {
    id: 3,
    title: 'Community Outreach: Job Fair',
    date: '2025-03-08',
    time: '08:00 - 16:00',
    venue: 'Soweto Civic Centre',
    description: 'Connecting our graduates with potential employers. Local businesses will be interviewing and offering positions.',
    image: { uri: 'https://images.unsplash.com/photo-1591115765373-5207764f72e7?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80' },
    type: 'Job Fair',
    status: 'upcoming',
  },
  {
    id: 4,
    title: 'Open Day - Explore Our Programs',
    date: '2025-02-22',
    time: '09:00 - 17:00',
    venue: 'All Three Campuses',
    description: 'Visit our facilities, meet instructors, and learn about all available courses. Free lunch and course materials provided.',
    image: { uri: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80' },
    type: 'Open Day',
    status: 'upcoming',
  },
];

const pastEvents = [
  {
    id: 5,
    title: 'Annual Fundraising Gala',
    date: '2024-11-15',
    time: '18:00 - 23:00',
    venue: 'The Venue, Melrose Arch',
    description: 'Our biggest fundraising event of 2024 raised over R150,000 for scholarship programs.',
    image: { uri: 'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80' },
    type: 'Fundraiser',
    status: 'past',
  },
  {
    id: 6,
    title: 'Cooking Competition - Students Showcase',
    date: '2024-12-10',
    time: '10:00 - 14:00',
    venue: 'Training Kitchen, Main Campus',
    description: 'Students from our Cooking course demonstrated their skills in a friendly competition. Winners received prizes and job offers!',
    image: { uri: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80' },
    type: 'Competition',
    status: 'past',
  },
];

function formatDate(dateString: string) {
  const date = new Date(dateString);
  return date.toLocaleDateString('en-ZA', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
}

export default function EventsScreen() {
  const navigation = useNavigation() as any;
  return (
    <ScrollView style={{ backgroundColor: '#f9fafb' }} contentContainerStyle={{ paddingBottom: 32 }}>
      <View style={styles.container}>
        {/* Header */}
        <Text style={styles.headerTitle}>Events & Workshops</Text>
        <Text style={styles.headerSubtitle}>
          Join us for workshops, graduation ceremonies, job fairs, and community events. Be part of our mission to empower communities through education and skills development.
        </Text>
        {/* Upcoming Events */}
        <Text style={styles.sectionHeader}><Feather name="calendar" size={20} color="#16a34a" /> Upcoming Events</Text>
        {upcomingEvents.map((event) => (
          <View key={event.id} style={styles.card}>
            <View style={[styles.eventTypeBox, { backgroundColor: '#fff7ed' }]}> 
              <Text style={{ color: '#ea580c', fontWeight: '700' }}>{event.type}</Text>
            </View>
            <Image source={event.image} style={styles.eventImage} />
            <View style={styles.cardContent}>
              <Text style={styles.cardTitle}>{event.title}</Text>
              <Text style={styles.cardDesc}>{event.description}</Text>
              <View style={styles.infoRow}><Feather name="calendar" size={16} color="#fb923c" /><Text style={styles.infoText}>{formatDate(event.date)}</Text></View>
              <View style={styles.infoRow}><Feather name="clock" size={16} color="#3b82f6" /><Text style={styles.infoText}>{event.time}</Text></View>
              <View style={styles.infoRow}><Feather name="map-pin" size={16} color="#ef4444" /><Text style={styles.infoText}>{event.venue}</Text></View>
              <TouchableOpacity
                style={styles.rsvpButton}
                onPress={() => Linking.openURL(`mailto:info@empoweringnation.org?subject=RSVP for ${encodeURIComponent(event.title)}`)}
              >
                <Text style={styles.rsvpButtonText}>RSVP / Join Event</Text>
              </TouchableOpacity>
            </View>
          </View>
        ))}
        {/* Past Events */}
        <Text style={styles.sectionHeader}><FontAwesome name="users" size={20} color="#ea580c" /> Past Events</Text>
        {pastEvents.map((event) => (
          <View key={event.id} style={[styles.card, { opacity: 0.9 }] }>
            <View style={[styles.eventTypeBox, { backgroundColor: '#fff7ed' }]}> 
              <Text style={{ color: '#ea580c', fontWeight: '700' }}>{event.type}</Text>
            </View>
            <Image source={event.image} style={styles.eventImage} />
            <View style={styles.cardContent}>
              <Text style={styles.cardTitle}>{event.title}</Text>
              <Text style={styles.cardDesc}>{event.description}</Text>
              <View style={styles.infoRow}><Feather name="calendar" size={16} color="#fb923c" /><Text style={styles.infoText}>{formatDate(event.date)}</Text></View>
              <View style={styles.infoRow}><Feather name="clock" size={16} color="#3b82f6" /><Text style={styles.infoText}>{event.time}</Text></View>
              <View style={styles.infoRow}><Feather name="map-pin" size={16} color="#ef4444" /><Text style={styles.infoText}>{event.venue}</Text></View>
              <View style={styles.completedBadge}><Text style={styles.completedBadgeText}>Completed</Text></View>
            </View>
          </View>
        ))}
        {/* Call to Action */}
        <View style={styles.ctaSection}>
          <Text style={styles.ctaTitle}>Stay Updated on Our Events</Text>
          <Text style={styles.ctaSubtitle}>
            Don't miss out on workshops, job opportunities, and community events. Contact us to stay informed about upcoming activities.
          </Text>
          <TouchableOpacity style={[styles.ctaButton, { backgroundColor: '#ea580c' }]} onPress={() => navigation.navigate('Contact')}>
            <Text style={{ color: 'white', fontWeight: '700', fontSize: 16 }}>Contact Us for Updates</Text>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.ctaButton, { backgroundColor: 'white', borderColor: '#ea580c', borderWidth: 2 }]} onPress={() => navigation.navigate('Courses')}>
            <Text style={{ color: '#ea580c', fontWeight: '700', fontSize: 16 }}>View All Courses</Text>
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
    color: '#ea580c',
    fontSize: 26,
    fontWeight: '700',
    marginBottom: 12,
    textAlign: 'center',
    letterSpacing: 0.5,
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
  sectionHeader: {
    fontSize: 20,
    fontWeight: '700',
    marginTop: 32,
    marginBottom: 16,
    color: '#16a34a',
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 20,
    borderWidth: 2,
    borderColor: '#e5e7eb',
    marginBottom: 24,
    shadowColor: '#000',
    shadowOpacity: 0.06,
    shadowRadius: 8,
    shadowOffset: { width: 0, height: 2 },
    overflow: 'hidden',
  },
  eventTypeBox: {
    width: '100%',
    paddingVertical: 10,
    alignItems: 'center',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  eventImage: {
    width: '100%',
    height: 180,
    resizeMode: 'cover',
    backgroundColor: '#eee',
  },
  cardContent: {
    padding: 20,
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: '700',
    color: '#c2410c',
    marginBottom: 8,
  },
  cardDesc: {
    color: '#374151',
    marginBottom: 8,
    fontWeight: '500',
  },
  infoRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    marginBottom: 2,
  },
  infoText: {
    color: '#374151',
    fontSize: 15,
    marginLeft: 6,
  },
  rsvpButton: {
    backgroundColor: '#16a34a',
    borderRadius: 16,
    paddingVertical: 12,
    marginTop: 12,
    alignItems: 'center',
    justifyContent: 'center',
  },
  rsvpButtonText: {
    color: 'white',
    fontWeight: '700',
    fontSize: 16,
  },
  completedBadge: {
    backgroundColor: '#fff7ed',
    borderRadius: 8,
    alignSelf: 'flex-end',
    marginTop: 8,
    paddingHorizontal: 12,
    paddingVertical: 4,
  },
  completedBadgeText: {
    color: '#ea580c',
    fontWeight: '700',
    fontSize: 14,
  },
  ctaSection: {
    marginTop: 32,
    backgroundColor: '#ea580c',
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
    color: '#fef3c7',
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
