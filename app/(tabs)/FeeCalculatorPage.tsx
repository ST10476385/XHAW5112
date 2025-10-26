import { Calculator, ShoppingCart, Percent, Receipt } from "lucide-react-native";
import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ScrollView,
  StyleSheet,
  Alert,
} from "react-native";


interface Course {
  id: string;
  title: string;
  purpose: string;
  type: "six-month" | "six-week";
  fees: number;
}

const courses: Course[] = [
  { id: "1", title: "Baking Fundamentals", purpose: "Learn baking basics", type: "six-week", fees: 750 },
  { id: "2", title: "Advanced Cake Design", purpose: "Master decorative cakes", type: "six-month", fees: 1500 },
  { id: "3", title: "Pastry Art", purpose: "Create pastries and desserts", type: "six-month", fees: 1500 },
  { id: "4", title: "African Cuisine", purpose: "Explore traditional dishes", type: "six-week", fees: 750 },
];

export default function FeeCalculatorPage() {
  const [selectedCourses, setSelectedCourses] = useState<Course[]>([]);
  const [customerInfo, setCustomerInfo] = useState({
    name: "",
    phone: "",
    email: "",
  });
  const [showQuote, setShowQuote] = useState(false);

  const handleSelect = (course: Course) => {
    const exists = selectedCourses.some((c) => c.id === course.id);
    if (exists) {
      setSelectedCourses(selectedCourses.filter((c) => c.id !== course.id));
    } else {
      setSelectedCourses([...selectedCourses, course]);
    }
  };

  const calculateTotal = () => {
    const subtotal = selectedCourses.reduce((sum, c) => sum + c.fees, 0);
    let discountRate = 0;
    if (selectedCourses.length >= 4) discountRate = 0.15;
    else if (selectedCourses.length === 3) discountRate = 0.1;
    else if (selectedCourses.length === 2) discountRate = 0.05;

    const discount = subtotal * discountRate;
    const total = subtotal - discount;
    const totalWithVAT = total * 1.15;

    return { subtotal, discount, total, totalWithVAT };
  };

  const totals = calculateTotal();

  const handleCalculate = () => {
    if (selectedCourses.length === 0) {
      Alert.alert("No courses selected", "Please select at least one course.");
      return;
    }
    setShowQuote(true);
  };

  const handleRequestConsultation = () => {
    const { name, phone, email } = customerInfo;
    if (!name || !phone || !email) {
      Alert.alert("Missing information", "Please fill in all fields.");
      return;
    }
    if (selectedCourses.length === 0) {
      Alert.alert("No courses selected", "Please choose at least one course.");
      return;
    }
    Alert.alert(
      "Request Sent",
      "Thank you! A consultant will contact you within 24 hours."
    );
  };

  const formatPrice = (price: number) =>
    `R${price.toFixed(2)}`;

  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      <View style={styles.header}>
        <Calculator color="#ea580c" size={50} />
        <Text style={styles.headerTitle}>Course Fee Calculator</Text>
        <Text style={styles.headerSubtitle}>
          Select your desired courses and get an instant quote. The more courses
          you choose, the more you save!
        </Text>
      </View>

      {/* Course Selection */}
      <View style={styles.section}>
        <View style={styles.sectionHeader}>
          <ShoppingCart color="#16a34a" size={22} />
          <Text style={styles.sectionTitle}>Select Your Courses</Text>
        </View>

        {courses.map((course) => {
          const selected = selectedCourses.some((c) => c.id === course.id);
          return (
            <TouchableOpacity
              key={course.id}
              style={[
                styles.courseCard,
                selected && { borderColor: "#16a34a", backgroundColor: "#f0fdf4" },
              ]}
              onPress={() => handleSelect(course)}
            >
              <Text style={styles.courseTitle}>{course.title}</Text>
              <Text style={styles.coursePurpose}>{course.purpose}</Text>
              <Text style={styles.coursePrice}>{formatPrice(course.fees)}</Text>
            </TouchableOpacity>
          );
        })}
      </View>

      {/* Contact Info */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Your Contact Details</Text>
        <TextInput
          style={styles.input}
          placeholder="Full Name"
          value={customerInfo.name}
          onChangeText={(t) => setCustomerInfo({ ...customerInfo, name: t })}
        />
        <TextInput
          style={styles.input}
          placeholder="Phone Number"
          keyboardType="phone-pad"
          value={customerInfo.phone}
          onChangeText={(t) => setCustomerInfo({ ...customerInfo, phone: t })}
        />
        <TextInput
          style={styles.input}
          placeholder="Email Address"
          keyboardType="email-address"
          value={customerInfo.email}
          onChangeText={(t) => setCustomerInfo({ ...customerInfo, email: t })}
        />
      </View>

      {/* Buttons */}
      <View style={styles.buttonRow}>
        <TouchableOpacity style={[styles.button, { backgroundColor: "#ea580c" }]} onPress={handleCalculate}>
          <Text style={styles.buttonText}>Calculate Total</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.button, { backgroundColor: "#16a34a" }]} onPress={handleRequestConsultation}>
          <Text style={styles.buttonText}>Request Consultant</Text>
        </TouchableOpacity>
      </View>

      {/* Quote Summary */}
      {showQuote && selectedCourses.length > 0 && (
        <View style={[styles.section, styles.quoteCard]}>
          <View style={styles.sectionHeader}>
            <Receipt color="#ea580c" size={22} />
            <Text style={[styles.sectionTitle, { color: "#ea580c" }]}>Your Quote</Text>
          </View>
          <Text>Subtotal: {formatPrice(totals.subtotal)}</Text>
          {totals.discount > 0 && (
            <Text style={{ color: "#16a34a" }}>
              Discount: -{formatPrice(totals.discount)}
            </Text>
          )}
          <Text>Subtotal after discount: {formatPrice(totals.total)}</Text>
          <Text>VAT (15%): {formatPrice(totals.totalWithVAT - totals.total)}</Text>
          <Text style={styles.totalText}>
            Total: {formatPrice(totals.totalWithVAT)}
          </Text>
        </View>
      )}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f9fafb",
    padding: 20,
  },
  header: {
    alignItems: "center",
    marginBottom: 30,
  },
  headerTitle: {
    fontSize: 24,
    fontWeight: "700",
    color: "#ea580c",
    marginTop: 10,
  },
  headerSubtitle: {
    textAlign: "center",
    color: "#4b5563",
    marginTop: 8,
    fontSize: 15,
    maxWidth: 320,
  },
  section: {
    marginBottom: 30,
  },
  sectionHeader: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
    marginBottom: 10,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "600",
    color: "#1e293b",
  },
  courseCard: {
    borderWidth: 1,
    borderColor: "#d1d5db",
    borderRadius: 8,
    padding: 12,
    marginBottom: 10,
  },
  courseTitle: {
    fontSize: 16,
    fontWeight: "500",
    color: "#111827",
  },
  coursePurpose: {
    color: "#4b5563",
    fontSize: 14,
    marginTop: 4,
  },
  coursePrice: {
    color: "#16a34a",
    fontWeight: "500",
    marginTop: 4,
  },
  input: {
    borderWidth: 1,
    borderColor: "#d1d5db",
    borderRadius: 8,
    padding: 10,
    fontSize: 16,
    marginTop: 8,
  },
  buttonRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 20,
  },
  button: {
    flex: 1,
    paddingVertical: 12,
    borderRadius: 8,
    marginHorizontal: 5,
    alignItems: "center",
  },
  buttonText: {
    color: "#fff",
    fontWeight: "600",
    fontSize: 16,
  },
  quoteCard: {
    backgroundColor: "#fff7ed",
    borderRadius: 8,
    padding: 16,
    borderWidth: 1,
    borderColor: "#fed7aa",
  },
  totalText: {
    fontWeight: "700",
    color: "#ea580c",
    marginTop: 10,
    fontSize: 16,
  },
});
