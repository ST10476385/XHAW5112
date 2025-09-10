import React from 'react';
import { View, Text, StyleSheet, Image, ScrollView } from 'react-native';
import { FontAwesome, Feather } from '@expo/vector-icons';
import Footer from '@/components/Footer';
import { useNavigation } from '@react-navigation/native';

const teamMembers = [
  {
    name: 'Precious Radebe',
    role: 'Founder & Director',
  image: require('@/assets/images/1.jpeg'),
    bio: 'Passionate about empowering communities through education and skills development.'
  },
  {
    name: 'Thabo Mthembu',
    role: 'Head of Training',
  image: require('@/assets/images/2.jpeg'),
    bio: 'Experienced educator with 15+ years in vocational training programs.'
  },
  {
    name: 'Nomsa Khumalo',
    role: 'Student Coordinator',
  image: require('@/assets/images/3.jpeg'),
    bio: 'Dedicated to ensuring every student receives personalized support and guidance.'
  },
  {
    name: 'David Mokoena',
    role: 'Partnerships Manager',
  image: require('@/assets/images/4.jpeg'),
    bio: 'Builds relationships with employers and community organizations for job placement.'
  }
];

export default function AboutScreen() {
  const navigation = useNavigation() as any;
  return (
    <ScrollView style={{ backgroundColor: '#fff' }} contentContainerStyle={{ paddingVertical: 32, paddingHorizontal: 16 }}>
      {/* Hero Section */}
      <View style={styles.heroSection}>
        <Text style={styles.heroTitle}>About Empowering Nation</Text>
        <Text style={styles.heroSubtitle}>
          Founded with a vision to break the cycle of limited opportunities, Empowering Nation is more than just a training center – we're a catalyst for community transformation.
        </Text>
        <Image
          source={require('@/assets/images/9.jpeg')}
          style={styles.heroImage}
        />
      </View>

      {/* Our Story */}
      <View style={styles.storySection}>
        <View style={{ flex: 1 }}>
          <Text style={styles.sectionTitle}>Our Story</Text>
          <Text style={styles.sectionText}>
            Empowering Nation was born from a deeply personal mission. Founder Precious Radebe witnessed firsthand how her parents and elderly relatives were denied opportunities to upskill themselves or pursue formal educational qualifications. This training school is her way of supporting similarly affected members from her community, ensuring that today's domestic workers and gardeners have access to the opportunities that previous generations were denied. Since our establishment in 2022, we've been dedicated to breaking down barriers and creating pathways to economic empowerment through practical, marketable skills training.
          </Text>
        </View>
        <Image
          source={require('@/assets/images/8.jpeg')}
          style={styles.storyImage}
        />
      </View>

      {/* Mission & Goals */}
      <View style={styles.missionSection}>
        <Text style={styles.sectionTitleOrange}>Our Mission & Goals</Text>
        <View style={styles.missionRow}>
          <View style={styles.missionCard}>
            <Feather name="target" size={40} color="#ea580c" style={{ marginBottom: 10 }} />
            <Text style={styles.missionCardTitle}>Our Mission</Text>
            <Text style={styles.missionCardText}>
              To empower marginalized communities by providing accessible, high-quality skills training that creates pathways to better employment, higher income, and entrepreneurial opportunities.
            </Text>
          </View>
          <View style={styles.missionCard}>
            <FontAwesome name="heart" size={40} color="#16a34a" style={{ marginBottom: 10 }} />
            <Text style={[styles.missionCardTitle, { color: '#15803d' }]}>Our Vision</Text>
            <Text style={styles.missionCardText}>
              A South Africa where every person, regardless of their background, has access to opportunities for personal and professional growth, leading to stronger, more prosperous communities.
            </Text>
          </View>
        </View>
        <View style={styles.missionRow}>
          <View style={styles.missionCard}>
            <FontAwesome name="users" size={36} color="#f59e42" style={{ marginBottom: 8 }} />
            <Text style={styles.missionCardTitle}>Community Impact</Text>
            <Text style={styles.missionCardText}>
              Strengthen communities by upskilling residents and creating local employment opportunities.
            </Text>
          </View>
          <View style={styles.missionCard}>
            <Feather name="book-open" size={36} color="#16a34a" style={{ marginBottom: 8 }} />
            <Text style={[styles.missionCardTitle, { color: '#15803d' }]}>Skills Development</Text>
            <Text style={styles.missionCardText}>
              Provide practical, marketable skills that directly translate to better job prospects.
            </Text>
          </View>
          <View style={styles.missionCard}>
            <Feather name="target" size={36} color="#ea580c" style={{ marginBottom: 8 }} />
            <Text style={styles.missionCardTitle}>Economic Empowerment</Text>
            <Text style={styles.missionCardText}>
              Enable graduates to command higher wages and start their own businesses.
            </Text>
          </View>
        </View>
      </View>

      {/* Who We Help */}
      <View style={styles.helpSection}>
        <Text style={styles.sectionTitleGreen}>Who We Help</Text>
        <View style={styles.helpRow}>
          <View style={styles.helpCard}>
            <Image source={require('@/assets/images/5.jpeg')} style={styles.helpImage} />
            <Text style={styles.helpCardTitle}>Domestic Workers</Text>
            <Text style={styles.helpCardText}>
              Empowering domestic workers with additional skills to increase their marketability and earning potential in households and commercial settings.
            </Text>
          </View>
          <View style={styles.helpCard}>
            <Image source={require('@/assets/images/6.jpeg')} style={styles.helpImage} />
            <Text style={[styles.helpCardTitle, { color: '#15803d' }]}>Gardeners</Text>
            <Text style={styles.helpCardText}>
              Training gardeners in advanced landscaping, maintenance techniques, and plant care to expand their service offerings and client base.
            </Text>
          </View>
          <View style={styles.helpCard}>
            <Image source={require('@/assets/images/7.jpeg')} style={styles.helpImage} />
            <Text style={[styles.helpCardTitle, { color: '#d97706' }]}>Youth & Job Seekers</Text>
            <Text style={styles.helpCardText}>
              Supporting unemployed youth and community members with practical skills training that opens doors to employment and entrepreneurship.
            </Text>
          </View>
        </View>
      </View>

      {/* Our Team */}
      <View style={styles.teamSection}>
        <Text style={styles.sectionTitleGreen}>Meet Our Team</Text>
        <View style={styles.teamRow}>
          {teamMembers.map((member, idx) => (
            <View key={idx} style={styles.teamCard}>
              <Image source={member.image} style={styles.teamImage} />
              <Text style={styles.teamName}>{member.name}</Text>
              <Text style={styles.teamRole}>{member.role}</Text>
              <Text style={styles.teamBio}>{member.bio}</Text>
            </View>
          ))}
        </View>
      </View>
      <Footer navigation={navigation} />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  heroSection: {
    alignItems: 'center',
    marginBottom: 40,
  },
  heroTitle: {
    color: '#ea580c',
    fontSize: 28,
    fontWeight: '700',
    marginBottom: 16,
    textAlign: 'center',
  },
  heroSubtitle: {
    fontSize: 18,
    color: '#374151',
    marginBottom: 24,
    textAlign: 'center',
    maxWidth: 700,
  },
  heroImage: {
    width: 320,
    height: 180,
    borderRadius: 16,
    marginBottom: 8,
    resizeMode: 'cover',
    backgroundColor: '#eee',
  },
  storySection: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 24,
    alignItems: 'center',
    marginBottom: 40,
  },
  sectionTitle: {
    color: '#15803d',
    fontSize: 22,
    fontWeight: '700',
    marginBottom: 16,
  },
  sectionTitleOrange: {
    color: '#ea580c',
    fontSize: 22,
    fontWeight: '700',
    marginBottom: 24,
    textAlign: 'center',
  },
  sectionTitleGreen: {
    color: '#15803d',
    fontSize: 22,
    fontWeight: '700',
    marginBottom: 24,
    textAlign: 'center',
  },
  sectionText: {
    color: '#374151',
    fontSize: 16,
    marginBottom: 8,
    maxWidth: 700,
  },
  storyImage: {
    width: 200,
    height: 120,
    borderRadius: 16,
    backgroundColor: '#eee',
    marginLeft: 16,
    resizeMode: 'cover',
  },
  missionSection: {
    backgroundColor: '#fff7ed',
    borderRadius: 24,
    padding: 24,
    marginBottom: 40,
    shadowColor: '#ea580c',
    shadowOpacity: 0.04,
    shadowRadius: 8,
    shadowOffset: { width: 0, height: 2 },
  },
  missionRow: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 16,
    justifyContent: 'center',
    marginBottom: 16,
  },
  missionCard: {
    backgroundColor: '#fff',
    borderRadius: 18,
    borderWidth: 2,
    borderColor: '#fed7aa',
    padding: 18,
    minWidth: 160,
    maxWidth: 220,
    alignItems: 'center',
    margin: 8,
    shadowColor: '#ea580c',
    shadowOpacity: 0.04,
    shadowRadius: 8,
    shadowOffset: { width: 0, height: 2 },
  },
  missionCardTitle: {
    color: '#ea580c',
    fontWeight: '700',
    fontSize: 16,
    marginBottom: 8,
    textAlign: 'center',
  },
  missionCardText: {
    color: '#374151',
    fontSize: 14,
    textAlign: 'center',
  },
  helpSection: {
    marginBottom: 40,
  },
  helpRow: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 16,
    justifyContent: 'center',
  },
  helpCard: {
    backgroundColor: '#fff',
    borderRadius: 16,
    borderWidth: 2,
    borderColor: '#bbf7d0',
    padding: 18,
    minWidth: 140,
    maxWidth: 180,
    alignItems: 'center',
    margin: 8,
    shadowColor: '#16a34a',
    shadowOpacity: 0.04,
    shadowRadius: 8,
    shadowOffset: { width: 0, height: 2 },
  },
  helpImage: {
    width: 64,
    height: 64,
    borderRadius: 32,
    marginBottom: 12,
    resizeMode: 'cover',
    backgroundColor: '#eee',
  },
  helpCardTitle: {
    color: '#ea580c',
    fontWeight: '600',
    fontSize: 15,
    marginBottom: 6,
    textAlign: 'center',
  },
  helpCardText: {
    color: '#6b7280',
    fontSize: 13,
    textAlign: 'center',
  },
  teamSection: {
    backgroundColor: '#f0fdf4',
    borderRadius: 16,
    padding: 24,
    marginBottom: 40,
  },
  teamRow: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 16,
    justifyContent: 'center',
  },
  teamCard: {
    backgroundColor: '#fff',
    borderRadius: 16,
    borderWidth: 2,
    borderColor: '#bbf7d0',
    padding: 18,
    minWidth: 140,
    maxWidth: 180,
    alignItems: 'center',
    margin: 8,
    shadowColor: '#16a34a',
    shadowOpacity: 0.04,
    shadowRadius: 8,
    shadowOffset: { width: 0, height: 2 },
  },
  teamImage: {
    width: 64,
    height: 64,
    borderRadius: 32,
    marginBottom: 12,
    resizeMode: 'cover',
    backgroundColor: '#eee',
  },
  teamName: {
    color: '#15803d',
    fontWeight: '700',
    fontSize: 15,
    marginBottom: 2,
    textAlign: 'center',
  },
  teamRole: {
    color: '#ea580c',
    fontWeight: '600',
    fontSize: 13,
    marginBottom: 6,
    textAlign: 'center',
  },
  teamBio: {
    color: '#6b7280',
    fontSize: 12,
    textAlign: 'center',
  },
});
