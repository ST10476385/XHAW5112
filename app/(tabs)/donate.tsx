import React from 'react';
import { View, Text, ScrollView, TouchableOpacity, StyleSheet, Linking } from 'react-native';
import { Feather } from '@expo/vector-icons';

export default function DonateScreen() {
  return (
    <ScrollView style={{ backgroundColor: '#f9fafb' }} contentContainerStyle={{ paddingBottom: 32 }}>
      <View style={styles.container}>
        <View style={styles.header}>
          <Feather name="heart" size={48} color="#ef4444" style={{ alignSelf: 'center', marginBottom: 16 }} />
          <Text style={styles.title}>Support Our Mission</Text>
          <Text style={styles.subtitle}>
            Your donation directly transforms lives by providing skills training to those who need it most. Every contribution helps break the cycle of poverty and builds stronger communities.
          </Text>
        </View>
        <View style={styles.card}>
          <Text style={styles.sectionTitle}>How Your Donation Helps</Text>
          <Text style={styles.impactText}>• R500 provides materials for one student for 6 months</Text>
          <Text style={styles.impactText}>• R200 covers meals for one student for a month</Text>
          <Text style={styles.impactText}>• R1,000 helps upgrade training equipment</Text>
          <Text style={styles.impactText}>• R1,500 sponsors a complete 6-month course</Text>
        </View>
        <View style={styles.card}>
          <Text style={styles.sectionTitle}>Donation Methods</Text>
          <Text style={styles.impactText}>Bank: ABC Bank</Text>
          <Text style={styles.impactText}>Account Name: Empowering Nation</Text>
          <Text style={styles.impactText}>Account Number: 123456789</Text>
          <Text style={styles.impactText}>Branch Code: 010101</Text>
          <Text style={styles.impactText}>Reference: Your Name + "Donation"</Text>
        </View>
        <View style={styles.card}>
          <Text style={styles.sectionTitle}>Donate Online</Text>
          <TouchableOpacity
            style={styles.donateButton}
            onPress={() => Linking.openURL('https://your-payment-link.com')}
          >
            <Text style={styles.donateButtonText}>Donate Online Now</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.card}>
          <Text style={styles.sectionTitle}>Tax-Deductible Donations</Text>
          <Text style={styles.impactText}>
            Empowering Nation is a registered non-profit organization. All donations are tax-deductible under South African law. You will receive an official receipt for tax purposes.
          </Text>
          <Text style={styles.impactText}>
            Registration Number: NPO-123-456 | PBO Number: 930-123-456
          </Text>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { padding: 16 },
  header: { alignItems: 'center', marginBottom: 24 },
  title: { fontSize: 26, fontWeight: '700', color: '#ea580c', marginBottom: 8, textAlign: 'center' },
  subtitle: { fontSize: 16, color: '#374151', marginBottom: 16, textAlign: 'center' },
  card: { backgroundColor: '#fff', borderRadius: 16, padding: 18, marginBottom: 18, elevation: 2 },
  sectionTitle: { fontSize: 18, fontWeight: '700', color: '#2563eb', marginBottom: 8 },
  impactText: { fontSize: 15, color: '#374151', marginBottom: 4 },
  donateButton: { backgroundColor: '#ea580c', borderRadius: 8, paddingVertical: 14, alignItems: 'center', marginTop: 8 },
  donateButtonText: { color: '#fff', fontWeight: '700', fontSize: 16 },
});