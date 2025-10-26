import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, ScrollView, Alert } from 'react-native';
import { Feather, FontAwesome } from '@expo/vector-icons';
import { WebView } from 'react-native-webview';

const venues = [
  {
    name: 'Main Campus',
    address: '45 Hope Street, Johannesburg, 2001',
    description: 'Our main training facility with all course offerings',
    phone: '+27 11 123 4567',
    email: 'main@empoweringnation.org'
  },
  {
    name: 'Alexandra Branch',
    address: '12 Progress Avenue, Alexandra, 2090',
    description: 'Community-focused branch serving the Alexandra township',
    phone: '+27 11 765 4321',
    email: 'alexandra@empoweringnation.org'
  },
  {
    name: 'Soweto Campus',
    address: '88 Freedom Square, Soweto, 1818',
    description: 'Full-service campus with specialized workshops',
    phone: '+27 11 987 6543',
    email: 'soweto@empoweringnation.org'
  }
];

export default function ContactScreen() {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (field: string, value: string) => {
    setForm({ ...form, [field]: value });
  };

  const handleSubmit = () => {
    if (!form.name || !form.email || !form.message) {
      Alert.alert('Please fill in all required fields.');
      return;
    }
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setForm({ name: '', email: '', subject: '', message: '' });
    }, 3000);
  };

  return (
    <ScrollView style={{ backgroundColor: '#f9fafb' }} contentContainerStyle={{ padding: 24 }}>
      <View style={styles.container}>
        <Text style={styles.header}>Contact Us</Text>
        <Text style={styles.subHeader}>
          Have questions about our courses? Need guidance on which program is right for you? We're here to help you take the next step toward a brighter future.
        </Text>
        {/* Contact Form */}
        <View style={styles.formCard}>
          <Text style={styles.formTitle}>
            <FontAwesome name="envelope" size={20} color="#ea580c" /> Send Us a Message
          </Text>
          {submitted ? (
            <View style={{ alignItems: 'center', padding: 32 }}>
              <FontAwesome name="send" size={40} color="#16a34a" />
              <Text style={{ fontSize: 20, fontWeight: 'bold', color: '#16a34a', marginTop: 12 }}>Message Sent Successfully!</Text>
              <Text style={{ color: '#374151', marginTop: 8 }}>Thank you for contacting us. We'll get back to you within 24 hours.</Text>
            </View>
          ) : (
            <>
              <TextInput
                style={styles.input}
                placeholder="Full Name *"
                value={form.name}
                onChangeText={text => handleChange('name', text)}
              />
              <TextInput
                style={styles.input}
                placeholder="Email Address *"
                value={form.email}
                onChangeText={text => handleChange('email', text)}
                keyboardType="email-address"
                autoCapitalize="none"
              />
              <TextInput
                style={styles.input}
                placeholder="Subject"
                value={form.subject}
                onChangeText={text => handleChange('subject', text)}
              />
              <TextInput
                style={[styles.input, { height: 100 }]}
                placeholder="Message *"
                value={form.message}
                onChangeText={text => handleChange('message', text)}
                multiline
              />
              <TouchableOpacity style={styles.button} onPress={handleSubmit}>
                <Text style={styles.buttonText}>Send Message</Text>
              </TouchableOpacity>
            </>
          )}
        </View>
        {/* Contact Information */}
        <View style={styles.infoSection}>
          <Text style={styles.infoHeader}>Quick Contact</Text>
          <View style={styles.infoRow}>
            <Feather name="phone" size={18} color="#16a34a" />
            <Text style={styles.infoText}>Main Office: +27 11 123 4567</Text>
          </View>
          <View style={styles.infoRow}>
            <Feather name="mail" size={18} color="#16a34a" />
            <Text style={styles.infoText}>General Inquiries: info@empoweringnation.org</Text>
          </View>
          <View style={styles.infoRow}>
            <Feather name="clock" size={18} color="#16a34a" />
            <Text style={styles.infoText}>Mon - Fri: 8:00 AM - 5:00 PM</Text>
          </View>
        </View>
        {/* Locations */}
        <Text style={styles.locationsHeader}>Our Locations</Text>
        {venues.map((venue, idx) => (
          <View key={idx} style={styles.venueCard}>
            <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 8 }}>
              <Feather name="map-pin" size={18} color="#60a5fa" />
              <Text style={styles.venueName}>{venue.name}</Text>
            </View>
            <Text style={styles.venueAddress}>{venue.address}</Text>
            <Text style={styles.venueDesc}>{venue.description}</Text>
            <Text style={styles.venueContact}>Phone: {venue.phone}</Text>
            <Text style={styles.venueContact}>Email: {venue.email}</Text>
          </View>
        ))}
        {/* Embedded Map */}
        <Text style={styles.mapHeader}>Main Campus Map</Text>
        <View style={styles.mapContainer}>
          <WebView
            source={{ uri: 'https://www.google.com/maps?q=45+Hope+Street,+Johannesburg,+South+Africa&output=embed' }}
            style={{ height: 250, borderRadius: 12 }}
          />
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { maxWidth: 700, alignSelf: 'center' },
  header: { fontSize: 28, fontWeight: 'bold', color: '#ea580c', marginBottom: 8, textAlign: 'center' },
  subHeader: { fontSize: 16, color: '#374151', marginBottom: 24, textAlign: 'center' },
  formCard: { backgroundColor: '#fff7ed', borderRadius: 16, padding: 20, marginBottom: 32, elevation: 2 },
  formTitle: { fontSize: 20, fontWeight: 'bold', color: '#ea580c', marginBottom: 16, textAlign: 'center' },
  input: { backgroundColor: '#fff8e1', borderRadius: 8, padding: 12, marginBottom: 16, fontSize: 16, borderWidth: 1, borderColor: '#fbbf24' },
  button: { backgroundColor: '#ea580c', borderRadius: 8, paddingVertical: 14, alignItems: 'center', marginTop: 8 },
  buttonText: { color: '#fff', fontWeight: 'bold', fontSize: 16 },
  infoSection: { backgroundColor: '#f0fdf4', borderRadius: 16, padding: 20, marginBottom: 32 },
  infoHeader: { fontSize: 18, fontWeight: 'bold', color: '#16a34a', marginBottom: 12 },
  infoRow: { flexDirection: 'row', alignItems: 'center', marginBottom: 8 },
  infoText: { marginLeft: 8, fontSize: 16, color: '#166534' },
  locationsHeader: { fontSize: 20, fontWeight: 'bold', color: '#7c3aed', marginBottom: 16, textAlign: 'center', borderWidth: 2, borderColor: '#c4b5fd', borderRadius: 10, padding: 8, backgroundColor: '#f5f3ff' },
  venueCard: { backgroundColor: '#f0f6ff', borderRadius: 12, padding: 16, marginBottom: 16, borderWidth: 2, borderColor: '#93c5fd' },
  venueName: { fontWeight: 'bold', color: '#60a5fa', fontSize: 17, marginLeft: 8 },
  venueAddress: { fontSize: 15, color: '#1e293b', fontWeight: '500', marginBottom: 4 },
  venueDesc: { fontSize: 14, color: '#60a5fa', marginBottom: 8, fontWeight: '500' },
  venueContact: { fontSize: 14, color: '#60a5fa', marginBottom: 2 },
  mapHeader: { fontSize: 18, fontWeight: 'bold', color: '#ea580c', marginBottom: 8, textAlign: 'center' },
  mapContainer: { borderRadius: 12, overflow: 'hidden', marginBottom: 32 },
});