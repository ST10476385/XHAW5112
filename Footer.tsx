import React from 'react';
import { View, Text, StyleSheet, Linking, TouchableOpacity, Image } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

const contactInfo = {
  phone: '+27 11 123 4567',
  email: 'info@empoweringnation.org',
  address: '45 Hope Street, Johannesburg, South Africa',
};

const socialLinks = [
  { name: 'Facebook', icon: 'facebook', href: '#' },
  { name: 'Instagram', icon: 'instagram', href: '#' },
  { name: 'Twitter', icon: 'twitter', href: '#' },
];


const quickLinks = [
  { label: 'About Us', screen: 'About' },
  { label: 'Courses', screen: 'Courses' },
  { label: 'Events', screen: 'Events' },
  { label: 'Testimonials', screen: 'Testimonials' },
  { label: 'Contact', screen: 'Contact' },
  { label: 'Donate', screen: 'Donate' },
  { label: 'Fee Calculator', screen: 'Calculator' },
];

const courseLinks = [
  { label: 'First Aid', screen: 'FirstAid' },
  { label: 'Sewing', screen: 'Sewing' },
  { label: 'Landscaping', screen: 'Landscaping' },
  { label: 'Life Skills', screen: 'LifeSkills' },
  { label: 'Child Minding', screen: 'ChildMinding' },
  { label: 'Cooking', screen: 'Cooking' },
  { label: 'Garden Maintenance', screen: 'GardenMaintenance' },
];

const currentYear = new Date().getFullYear();


type FooterProps = {
  navigation?: any;
};

const validIcons = {
  Facebook: 'facebook',
  Instagram: 'instagram',
  Twitter: 'twitter',
};


const styles = StyleSheet.create({
  footer: {
    backgroundColor: '#1a2634',
    paddingVertical: 32,
    paddingHorizontal: 8,
    borderTopWidth: 1,
    borderTopColor: '#e5e7eb',
    marginTop: 32,
  },
  footerRow: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginBottom: 16,
    gap: 16,
  },
  footerColLogo: {
    flex: 1,
    minWidth: 140,
    alignItems: 'flex-start',
    marginRight: 8,
    maxWidth: 180,
  },
  footerLogo: {
    width: 48,
    height: 48,
    resizeMode: 'contain',
    marginBottom: 8,
  },
  footerBrand: {
    color: '#fff',
    fontWeight: '700',
    fontSize: 16,
    marginBottom: 4,
  },
  footerMission: {
    color: '#cbd5e1',
    fontSize: 13,
    marginBottom: 8,
  },
  footerCol: {
    flex: 1,
    minWidth: 120,
    marginHorizontal: 8,
  },
  sectionTitle: {
    fontWeight: '700',
    color: '#fff',
    fontSize: 15,
    marginBottom: 8,
  },
  text: {
    color: '#cbd5e1',
    fontSize: 13,
    marginBottom: 2,
  },
  link: {
    color: '#38bdf8',
    fontSize: 13,
    marginBottom: 4,
    textDecorationLine: 'underline',
  },
  socialContainer: {
    flexDirection: 'row',
    gap: 12,
    marginTop: 8,
  },
  socialIcon: {
    marginRight: 8,
  },
  copyright: {
    color: '#cbd5e1',
    fontSize: 12,
    marginTop: 8,
    textAlign: 'center',
  },

});

export default function Footer({ navigation }: FooterProps) {
  return (
    <View style={styles.footer}>
      <View style={styles.footerRow}>
        {/* Logo and Mission */}
        <View style={styles.footerColLogo}>
          <Image source={require('@/assets/images/logo.jpg')} style={styles.footerLogo} />
          <Text style={styles.footerBrand}>Empowering</Text>
          <Text style={styles.footerBrand}>Nation</Text>
          <Text style={styles.footerMission}>
            Building brighter futures through skills development and training for domestic workers and gardeners across Johannesburg.
          </Text>
          <View style={styles.socialContainer}>
            {socialLinks.map((link) => (
              <TouchableOpacity key={link.name} onPress={() => Linking.openURL(link.href)}>
                <FontAwesome name={validIcons[link.name as keyof typeof validIcons] as any} size={22} color="#ea580c" style={styles.socialIcon} />
              </TouchableOpacity>
            ))}
          </View>
        </View>
        {/* Quick Links */}
        <View style={styles.footerCol}>
          <Text style={styles.sectionTitle}>Quick Links</Text>
          {quickLinks.map((link) => (
            <TouchableOpacity key={link.label} onPress={() => navigation && navigation.navigate(link.screen)}>
              <Text style={styles.link}>{link.label}</Text>
            </TouchableOpacity>
          ))}
        </View>
        {/* Course Links */}
        <View style={styles.footerCol}>
          <Text style={styles.sectionTitle}>Our Courses</Text>
          {courseLinks.map((link) => (
            <TouchableOpacity key={link.label} onPress={() => navigation && navigation.navigate(link.screen)}>
              <Text style={styles.link}>{link.label}</Text>
            </TouchableOpacity>
          ))}
        </View>
        {/* Contact Info */}
        <View style={styles.footerCol}>
          <Text style={styles.sectionTitle}>Get in Touch</Text>
          <Text style={styles.text}>{contactInfo.email}</Text>
          <Text style={styles.text}>{contactInfo.phone}</Text>
          <Text style={styles.text}>Mon - Fri: 8AM - 5PM</Text>
          <Text style={styles.text}>{contactInfo.address}</Text>
        </View>
      </View>
      <Text style={styles.copyright}>© {currentYear} Empowering Nation. All rights reserved.</Text>
    </View>
  );
}
