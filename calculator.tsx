import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, TextInput, Alert } from 'react-native';
import { FontAwesome, Feather, MaterialIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import Footer from '@/components/Footer';
import coursesData from './courses';
// If './courses' exports a function, change it to export an array instead.
// Example: export default [ { id: 1, type: 'six-week', ... }, ... ];
const courses = typeof coursesData === 'function' ? coursesData() : coursesData;

function calculateTotal(selectedCourses: any[]) {
  const subtotal = selectedCourses.reduce((sum, c) => sum + c.fees, 0);
  let discountRate = 0;
  if (selectedCourses.length === 2) discountRate = 0.05;
  else if (selectedCourses.length === 3) discountRate = 0.10;
  else if (selectedCourses.length >= 4) discountRate = 0.15;
  const discount = subtotal * discountRate;
  const total = subtotal - discount;
  const totalWithVAT = total * 1.15;
  return { subtotal, discount, total, totalWithVAT };
}

function formatPrice(price: number) {
  return `R${price.toFixed(2)}`;
}

export default function FeeCalculatorScreen() {
  const navigation = useNavigation() as any;
  const [selectedCourses, setSelectedCourses] = useState<any[]>([]);
  const [customerInfo, setCustomerInfo] = useState({ name: '', phone: '', email: '' });
  const [showQuote, setShowQuote] = useState(false);

  const handleCourseToggle = (course: any) => {
    if (selectedCourses.some((c) => c.id === course.id)) {
      setSelectedCourses(selectedCourses.filter((c) => c.id !== course.id));
    } else {
      setSelectedCourses([...selectedCourses, course]);
    }
  };

  const handleInputChange = (field: string, value: string) => {
    setCustomerInfo((prev) => ({ ...prev, [field]: value }));
  };

  const handleCalculate = () => {
    if (selectedCourses.length === 0) {
      Alert.alert('Please select at least one course.');
      return;
    }
    setShowQuote(true);
  };

  const handleRequestConsultation = () => {
    if (!customerInfo.name || !customerInfo.phone || !customerInfo.email) {
      Alert.alert('Please fill in all contact details.');
      return;
    }
    if (selectedCourses.length === 0) {
      Alert.alert('Please select at least one course.');
      return;
    }
    Alert.alert('Thank you! A consultant will contact you within 24 hours to discuss your course selection and arrange booking.');
  };

  const totals = calculateTotal(selectedCourses);

  return (
    <ScrollView style={{ backgroundColor: '#f9fafb' }} contentContainerStyle={{ paddingBottom: 32 }}>
      <View style={styles.container}>
        {/* Header */}
        <Text style={styles.headerTitle}>Course Fee Calculator</Text>
        <Text style={styles.headerSubtitle}>
          Select your desired courses and get an instant quote. The more courses you choose, the more you save with our discount packages!
        </Text>
        {/* Course Selection */}
        <View style={styles.card}>
          <View style={styles.cardHeader}>
            <FontAwesome name="shopping-cart" size={20} color="#16a34a" style={{ marginRight: 8 }} />
            <Text style={styles.cardHeaderText}>Select Your Courses</Text>
          </View>
          {/* Six-Month Courses */}
          <Text style={styles.sectionHeader}>Six-Month Courses (R1,500 each)</Text>
          {courses.filter((c) => c.type === 'six-month').map((course: any) => (
            <TouchableOpacity
              key={course.id}
              style={[styles.courseRow, selectedCourses.some((c) => c.id === course.id) && styles.selectedRow]}
              onPress={() => handleCourseToggle(course)}
            >
              <Feather name={selectedCourses.some((c) => c.id === course.id) ? 'check-square' : 'square'} size={22} color="#16a34a" style={{ marginRight: 8 }} />
              <View style={{ flex: 1 }}>
                <Text style={styles.courseTitle}>{course.title}</Text>
                <Text style={styles.coursePurpose}>{course.purpose}</Text>
                <Text style={styles.courseFee}>{formatPrice(course.fees)}</Text>
              </View>
            </TouchableOpacity>
          ))}
          {/* Six-Week Courses */}
          <Text style={styles.sectionHeader}>Six-Week Courses (R750 each)</Text>
          {courses.filter((c) => c.type === 'six-week').map((course: any) => (
            <TouchableOpacity
              key={course.id}
              style={[styles.courseRow, selectedCourses.some((c) => c.id === course.id) && styles.selectedRow]}
              onPress={() => handleCourseToggle(course)}
            >
              <Feather name={selectedCourses.some((c) => c.id === course.id) ? 'check-square' : 'square'} size={22} color="#d97706" style={{ marginRight: 8 }} />
              <View style={{ flex: 1 }}>
                <Text style={styles.courseTitle}>{course.title}</Text>
                <Text style={styles.coursePurpose}>{course.purpose}</Text>
                <Text style={[styles.courseFee, { color: '#d97706' }]}>{formatPrice(course.fees)}</Text>
              </View>
            </TouchableOpacity>
          ))}
        </View>
        {/* Contact Information */}
        <View style={styles.card}>
          <Text style={styles.sectionHeader}>Contact Information</Text>
          <TextInput
            style={styles.input}
            placeholder="Full Name *"
            value={customerInfo.name}
            onChangeText={(v) => handleInputChange('name', v)}
          />
          <TextInput
            style={styles.input}
            placeholder="Phone Number *"
            value={customerInfo.phone}
            onChangeText={(v) => handleInputChange('phone', v)}
            keyboardType="phone-pad"
          />
          <TextInput
            style={styles.input}
            placeholder="Email Address *"
            value={customerInfo.email}
            onChangeText={(v) => handleInputChange('email', v)}
            keyboardType="email-address"
            autoCapitalize="none"
          />
          <View style={styles.buttonRow}>
            <TouchableOpacity style={styles.calcButton} onPress={handleCalculate}>
              <Feather name="percent" size={18} color="white" style={{ marginRight: 8 }} />
              <Text style={styles.calcButtonText}>Calculate Total</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.consultButton} onPress={handleRequestConsultation}>
              <Feather name="user-check" size={18} color="white" style={{ marginRight: 8 }} />
              <Text style={styles.consultButtonText}>Request Consultant</Text>
            </TouchableOpacity>
          </View>
        </View>
        {/* Quote Summary */}
        <View style={styles.card}>
          <Text style={styles.sectionHeader}>Selected Courses</Text>
          {selectedCourses.length === 0 ? (
            <Text style={styles.emptyText}>No courses selected yet</Text>
          ) : (
            selectedCourses.map((course) => (
              <View key={course.id} style={styles.selectedCourseRow}>
                <Text style={styles.selectedCourseTitle}>{course.title}</Text>
                <Text style={styles.selectedCourseFee}>{formatPrice(course.fees)}</Text>
              </View>
            ))
          )}
        </View>
        {showQuote && selectedCourses.length > 0 && (
          <View style={styles.card}>
            <Text style={styles.sectionHeader}>Your Quote</Text>
            <View style={styles.quoteRow}><Text>Subtotal:</Text><Text>{formatPrice(totals.subtotal)}</Text></View>
            {totals.discount > 0 && (
              <View style={styles.quoteRow}><Text>Discount:</Text><Text>-{formatPrice(totals.discount)}</Text></View>
            )}
            <View style={styles.quoteRow}><Text>Subtotal after discount:</Text><Text>{formatPrice(totals.total)}</Text></View>
            <View style={styles.quoteRow}><Text>VAT (15%):</Text><Text>{formatPrice(totals.totalWithVAT - totals.total)}</Text></View>
            <View style={[styles.quoteRow, { borderTopWidth: 1, borderTopColor: '#ea580c', marginTop: 8, paddingTop: 8 }] }>
              <Text style={{ fontWeight: '700', color: '#ea580c' }}>Total:</Text>
              <Text style={{ fontWeight: '700', color: '#ea580c' }}>{formatPrice(totals.totalWithVAT)}</Text>
            </View>
            <Text style={styles.quoteNote}>* This is a quote only. Final invoice will be provided upon booking confirmation.</Text>
          </View>
        )}
        {/* Help */}
        <View style={styles.card}>
          <Text style={styles.sectionHeader}>Need Help?</Text>
          <Text style={styles.helpText}>Have questions about our courses or need guidance on which ones to choose?</Text>
          <TouchableOpacity style={styles.helpButton} onPress={() => navigation.navigate('Contact')}>
            <Feather name="mail" size={18} color="#16a34a" style={{ marginRight: 8 }} />
            <Text style={styles.helpButtonText}>Contact Our Team</Text>
          </TouchableOpacity>
        </View>
        <Footer navigation={navigation} />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { maxWidth: 700, alignSelf: 'center', padding: 16 },
  headerTitle: { color: '#ea580c', fontSize: 26, fontWeight: '700', marginBottom: 12, textAlign: 'center', letterSpacing: 0.5 },
  headerSubtitle: { fontSize: 16, color: '#374151', maxWidth: 700, marginBottom: 24, textAlign: 'center', alignSelf: 'center', fontWeight: '500' },
  card: { backgroundColor: '#fff', borderRadius: 16, borderWidth: 2, borderColor: '#e5e7eb', marginBottom: 24, padding: 18, shadowColor: '#e0e7ef', shadowOpacity: 0.08, shadowRadius: 8, shadowOffset: { width: 0, height: 2 } },
  cardHeader: { flexDirection: 'row', alignItems: 'center', marginBottom: 12 },
  cardHeaderText: { color: '#16a34a', fontWeight: '700', fontSize: 18 },
  sectionHeader: { fontSize: 16, fontWeight: '700', color: '#2563eb', marginTop: 12, marginBottom: 8 },
  courseRow: { flexDirection: 'row', alignItems: 'flex-start', gap: 8, padding: 12, borderWidth: 1, borderColor: '#d1fae5', borderRadius: 8, backgroundColor: '#f0fdf4', marginBottom: 8 },
  selectedRow: { borderColor: '#16a34a', backgroundColor: '#bbf7d0' },
  courseTitle: { fontSize: 15, fontWeight: '600', color: '#166534' },
  coursePurpose: { fontSize: 13, color: '#64748b', marginTop: 2 },
  courseFee: { fontSize: 14, color: '#16a34a', fontWeight: '500', marginTop: 2 },
  input: { backgroundColor: '#fff', borderRadius: 6, borderWidth: 1, borderColor: '#d1d5db', fontSize: 16, padding: 10, marginBottom: 8 },
  buttonRow: { flexDirection: 'row', gap: 12, marginTop: 8 },
  calcButton: { backgroundColor: '#ea580c', borderRadius: 8, paddingVertical: 12, paddingHorizontal: 18, alignItems: 'center', justifyContent: 'center', flexDirection: 'row', marginRight: 8 },
  calcButtonText: { color: 'white', fontWeight: '700', fontSize: 16 },
  consultButton: { backgroundColor: '#16a34a', borderRadius: 8, paddingVertical: 12, paddingHorizontal: 18, alignItems: 'center', justifyContent: 'center', flexDirection: 'row' },
  consultButtonText: { color: 'white', fontWeight: '700', fontSize: 16 },
  emptyText: { color: '#6b7280', textAlign: 'center', padding: 12 },
  selectedCourseRow: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', paddingVertical: 6, borderBottomWidth: 1, borderBottomColor: '#f3f4f6' },
  selectedCourseTitle: { fontSize: 15, fontWeight: '500', color: '#374151' },
  selectedCourseFee: { fontSize: 15, color: '#6b7280' },
  quoteRow: { flexDirection: 'row', justifyContent: 'space-between', marginBottom: 2 },
  quoteNote: { fontSize: 12, color: '#64748b', marginTop: 8 },
  helpText: { fontSize: 14, color: '#4b5563', marginBottom: 12, textAlign: 'center' },
  helpButton: { borderRadius: 8, borderWidth: 1.5, borderColor: '#16a34a', backgroundColor: '#fff', paddingVertical: 10, paddingHorizontal: 18, alignItems: 'center', justifyContent: 'center', flexDirection: 'row', alignSelf: 'center' },
  helpButtonText: { color: '#16a34a', fontWeight: '700', fontSize: 15 },
});
