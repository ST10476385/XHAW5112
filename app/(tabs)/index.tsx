

import Footer from '@/components/Footer';

import React from 'react';
import { View, Text, StyleSheet, Image, ScrollView, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function HomeScreen() {
  const navigation = useNavigation() as any;
  return (
    <ScrollView style={{ backgroundColor: 'white', flexGrow: 1 }} contentContainerStyle={{ flexGrow: 1 }}>
      {/* Hero Section */}
      <View style={styles.heroSection}>
        <View style={styles.heroOverlay} />
        <View style={styles.heroContent}>
          <View style={styles.heroTextContainer}>
            <Text style={styles.heroTitle}>Building Brighter Futures – One Course at a Time</Text>
            <Text style={styles.heroSubtitle}>
              Empowering domestic workers and gardeners with skills training to create better opportunities and transform communities across Johannesburg.
            </Text>
            <View style={styles.heroButtons}>
              <TouchableOpacity style={styles.primaryButton} onPress={() => navigation.navigate('Courses')}>
                <Text style={styles.primaryButtonText}>Explore Our Courses</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.secondaryButton} onPress={() => navigation.navigate('Donate')}>
                <Text style={styles.secondaryButtonText}>Support Our Mission</Text>
              </TouchableOpacity>
            </View>
          </View>
          <View style={styles.heroImageContainer}>
            <Image
              source={require('@/assets/images/Urban Gardening Techniques are a fantastic and….jpeg')}
              style={styles.heroImage}
              resizeMode="cover"
            />
          </View>
        </View>
      </View>

      {/* About Section */}
      <View style={styles.aboutSection}>
        <View style={styles.aboutLogoContainer}>
          <Image source={require('@/assets/images/logo.jpg')} style={styles.aboutLogo} />
        </View>
        <Text style={styles.aboutTitle}>About Empowering Nation</Text>
        <Text style={styles.aboutDescription}>
          Established in 2025, Empowering Nation offers skills training courses in Johannesburg to uplift domestic workers and gardeners. Our mission is to provide professional development opportunities that create pathways to better employment and entrepreneurship.
        </Text>
        <View style={styles.aboutCardsContainer}>
          <View style={styles.aboutCard}>
            <Text style={styles.aboutCardTitle}>Hundreds Trained</Text>
            <Text style={styles.aboutCardText}>We've successfully trained hundreds of domestic workers and gardeners in our comprehensive programs.</Text>
          </View>
          <View style={styles.aboutCard}>
            <Text style={styles.aboutCardTitle}>Two Program Types</Text>
            <Text style={styles.aboutCardText}>Six-month Learnerships and six-week Short Skills Training Programmes to suit different needs.</Text>
          </View>
          <View style={styles.aboutCard}>
            <Text style={styles.aboutCardTitle}>Marketable Skills</Text>
            <Text style={styles.aboutCardText}>Our graduates gain valuable skills that make them more employable and enable higher earning potential.</Text>
          </View>
        </View>
      </View>

      {/* Quick Links Section */}
      <View style={styles.quickLinksSection}>
        <Text style={styles.quickLinksTitle}>Explore Our Programs</Text>
        <View style={styles.quickLinksCardsContainer}>
          <View style={styles.quickLinkCard}>
            <Text style={styles.quickLinkCardTitle}>Six-Month Courses</Text>
            <Text style={styles.quickLinkCardText}>Comprehensive 12-week programs including First Aid, Sewing, Landscaping, and Life Skills.</Text>
            <Text style={styles.quickLinkCardPrice}>R1,500 per course</Text>
            <TouchableOpacity style={styles.quickLinkButton} onPress={() => navigation.navigate('Courses', { type: 'six-month' })}>
              <Text style={styles.quickLinkButtonText}>View Six-Month Courses</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.quickLinkCard}>
            <Text style={styles.quickLinkCardTitle}>Six-Week Courses</Text>
            <Text style={styles.quickLinkCardText}>Focused short courses in Child Minding, Cooking, and Garden Maintenance.</Text>
            <Text style={styles.quickLinkCardPrice}>R750 per course</Text>
            <TouchableOpacity style={[styles.quickLinkButton, { backgroundColor: '#ea580c' }]} onPress={() => navigation.navigate('Courses', { type: 'six-week' })}>
              <Text style={styles.quickLinkButtonText}>View Six-Week Courses</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>

      {/* Call to Action */}
      <View style={styles.ctaSection}>
        <Text style={styles.ctaTitle}>Ready to Transform Your Future?</Text>
        <Text style={styles.ctaSubtitle}>Join hundreds of graduates who have improved their lives through our training programs.</Text>
        <View style={styles.ctaButtons}>
          <TouchableOpacity style={styles.ctaPrimaryButton} onPress={() => navigation.navigate('Courses')}>
            <Text style={styles.ctaPrimaryButtonText}>Browse All Courses</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.ctaSecondaryButton} onPress={() => navigation.navigate('Contact')}>
            <Text style={styles.ctaSecondaryButtonText}>Contact Us</Text>
          </TouchableOpacity>
        </View>
      </View>

      <Footer navigation={navigation} />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  heroSection: {
    position: 'relative',
    backgroundColor: '#ea580c',
    paddingTop: 48,
    paddingBottom: 48,
    paddingHorizontal: 0,
  },
  heroOverlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(0,0,0,0.20)',
    zIndex: 1,
  },
  heroContent: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 24,
    alignItems: 'center',
    justifyContent: 'center',
    maxWidth: 1200,
    marginHorizontal: 'auto',
    paddingHorizontal: 16,
    zIndex: 2,
  },
  heroTextContainer: {
    flex: 1,
    minWidth: 220,
    zIndex: 2,
    paddingRight: 8,
  },
  heroTitle: {
    fontSize: 28,
    fontWeight: '700',
    marginBottom: 16,
    color: 'white',
  },
  heroSubtitle: {
    fontSize: 18,
    color: '#fed7aa',
    marginBottom: 24,
  },
  heroButtons: {
    flexDirection: 'row',
    gap: 12,
    marginBottom: 8,
  },
  primaryButton: {
    backgroundColor: 'white',
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 8,
    marginRight: 8,
  },
  primaryButtonText: {
    color: '#ea580c',
    fontWeight: '600',
    fontSize: 16,
  },
  secondaryButton: {
    borderWidth: 2,
    borderColor: 'white',
    backgroundColor: 'transparent',
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 8,
  },
  secondaryButtonText: {
    color: 'white',
    fontWeight: '600',
    fontSize: 16,
  },
  heroImageContainer: {
    flex: 1,
    minWidth: 220,
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 2,
  },
  heroImage: {
    borderRadius: 16,
    width: 200,
    height: 200,
    backgroundColor: '#fff',
  },
  aboutSection: {
    paddingVertical: 40,
    backgroundColor: '#f0fdf4',
    alignItems: 'center',
    paddingHorizontal: 16,
  },
  aboutLogoContainer: {
    marginBottom: 16,
  },
  aboutLogo: {
    width: 80,
    height: 80,
    resizeMode: 'contain',
  },
  aboutTitle: {
    color: '#c2410c',
    fontSize: 22,
    fontWeight: '700',
    marginBottom: 12,
    textAlign: 'center',
  },
  aboutDescription: {
    fontSize: 16,
    color: '#374151',
    maxWidth: 700,
    marginBottom: 24,
    textAlign: 'center',
  },
  aboutCardsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 16,
    justifyContent: 'center',
    width: '100%',
  },
  aboutCard: {
    borderWidth: 2,
    borderColor: '#fed7aa',
    backgroundColor: 'white',
    borderRadius: 12,
    padding: 20,
    minWidth: 180,
    maxWidth: 220,
    margin: 8,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.04,
    shadowRadius: 8,
    elevation: 2,
  },
  aboutCardTitle: {
    color: '#15803d',
    fontWeight: '600',
    fontSize: 16,
    marginBottom: 6,
    textAlign: 'center',
  },
  aboutCardText: {
    color: '#6b7280',
    fontSize: 14,
    textAlign: 'center',
  },
  quickLinksSection: {
    paddingVertical: 40,
    backgroundColor: 'white',
    alignItems: 'center',
    paddingHorizontal: 16,
  },
  quickLinksTitle: {
    color: '#c2410c',
    fontSize: 22,
    fontWeight: '700',
    marginBottom: 24,
    textAlign: 'center',
  },
  quickLinksCardsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 16,
    justifyContent: 'center',
    width: '100%',
  },
  quickLinkCard: {
    borderWidth: 2,
    borderColor: '#bbf7d0',
    backgroundColor: 'white',
    borderRadius: 12,
    padding: 24,
    minWidth: 220,
    maxWidth: 280,
    margin: 8,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.04,
    shadowRadius: 8,
    elevation: 2,
  },
  quickLinkCardTitle: {
    color: '#15803d',
    fontWeight: '600',
    fontSize: 16,
    marginBottom: 6,
    textAlign: 'center',
  },
  quickLinkCardText: {
    color: '#6b7280',
    fontSize: 14,
    textAlign: 'center',
  },
  quickLinkCardPrice: {
    color: '#ea580c',
    fontWeight: '600',
    marginVertical: 8,
    fontSize: 15,
  },
  quickLinkButton: {
    backgroundColor: '#16a34a',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 8,
    marginTop: 8,
  },
  quickLinkButtonText: {
    color: 'white',
    fontWeight: '600',
    fontSize: 15,
  },
  ctaSection: {
    paddingVertical: 40,
    backgroundColor: '#16a34a',
    alignItems: 'center',
    paddingHorizontal: 16,
  },
  ctaTitle: {
    color: 'white',
    fontSize: 22,
    fontWeight: '700',
    marginBottom: 16,
    textAlign: 'center',
  },
  ctaSubtitle: {
    fontSize: 16,
    color: '#dcfce7',
    marginBottom: 24,
    textAlign: 'center',
  },
  ctaButtons: {
    flexDirection: 'row',
    gap: 12,
    justifyContent: 'center',
  },
  ctaPrimaryButton: {
    backgroundColor: 'white',
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 8,
    marginRight: 8,
  },
  ctaPrimaryButtonText: {
    color: '#15803d',
    fontWeight: '600',
    fontSize: 16,
  },
  ctaSecondaryButton: {
    borderWidth: 2,
    borderColor: 'white',
    backgroundColor: 'transparent',
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 8,
  },
  ctaSecondaryButtonText: {
    color: 'white',
    fontWeight: '600',
    fontSize: 16,
  },
});
