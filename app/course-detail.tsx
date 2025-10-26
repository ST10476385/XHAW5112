import React from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Image,
  Alert,
} from "react-native";
import {
  Clock,
  DollarSign,
  BookOpen,
  Calendar,
  CheckCircle,
  ArrowLeft,
  Users,
} from "lucide-react-native";

interface Course {
  id: string;
  title: string;
  purpose: string;
  type: "six-month" | "six-week";
  duration: string;
  fees: number;
  content: string[];
  requirements: string[];
  startDates: string[];
}

const getCourseImage = (courseId: string) => {
  const images: Record<string, string> = {
    "first-aid":
      "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?auto=format&fit=crop&w=1200&q=80",
    sewing:
      "https://images.unsplash.com/photo-1558648698-3100c129c6e4?auto=format&fit=crop&w=1200&q=80",
    landscaping:
      "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?auto=format&fit=crop&w=1200&q=80",
    "life-skills":
      "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1200&q=80",
    "child-minding":
      "https://images.unsplash.com/photo-1476234251651-f353703a034d?auto=format&fit=crop&w=1200&q=80",
    cooking:
      "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?auto=format&fit=crop&w=1200&q=80",
    "garden-maintenance":
      "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?auto=format&fit=crop&w=1200&q=80",
  };
  return images[courseId] || images["life-skills"];
};

export default function CourseDetailPage({ route, navigation }: any) {
  const { course }: { course: Course } = route.params;

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat("en-ZA", {
      style: "currency",
      currency: "ZAR",
      minimumFractionDigits: 0,
    }).format(price);
  };

  return (
    <ScrollView style={styles.container}>
      {/* Back Button */}
      <TouchableOpacity
        onPress={() => navigation.goBack()}
        style={styles.backButton}
      >
        <ArrowLeft color="white" size={18} />
        <Text style={styles.backText}>Back to Courses</Text>
      </TouchableOpacity>

      {/* Header */}
      <Text style={styles.title}>{course.title}</Text>
      <Text style={styles.badge}>
        {course.type === "six-month"
          ? "6-Month Program"
          : "6-Week Program"}
      </Text>
      <Text style={styles.purpose}>{course.purpose}</Text>

      {/* Image */}
      <Image
        source={{ uri: getCourseImage(course.id) }}
        style={styles.image}
      />

      {/* Duration and Fee */}
      <View style={styles.infoRow}>
        <View style={styles.infoCard}>
          <Clock color="#16a34a" size={28} />
          <View>
            <Text style={styles.infoLabel}>Duration</Text>
            <Text style={styles.infoValue}>{course.duration}</Text>
          </View>
        </View>
        <View style={styles.infoCard}>
          <DollarSign color="#16a34a" size={28} />
          <View>
            <Text style={styles.infoLabel}>Course Fee</Text>
            <Text style={styles.infoValue}>{formatPrice(course.fees)}</Text>
          </View>
        </View>
      </View>

      {/* Buttons */}
      <View style={styles.buttonRow}>
        <TouchableOpacity
          style={[styles.btn, { backgroundColor: "#16a34a" }]}
          onPress={() => Alert.alert("Apply", "Course application coming soon")}
        >
          <Text style={styles.btnText}>Apply Now</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.btn, { backgroundColor: "#7c3aed" }]}
          onPress={() => Alert.alert("Contact", "Redirecting to Contact Page")}
        >
          <Text style={styles.btnText}>Ask Questions</Text>
        </TouchableOpacity>
      </View>

      {/* Course Content */}
      <View style={styles.section}>
        <View style={styles.sectionHeader}>
          <BookOpen color="#db2777" size={20} />
          <Text style={styles.sectionTitle}>Course Content</Text>
        </View>
        {course.content.map((item, index) => (
          <View key={index} style={styles.listItem}>
            <CheckCircle color="#22c55e" size={18} />
            <Text style={styles.listText}>{item}</Text>
          </View>
        ))}
      </View>

      {/* Requirements */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Application Requirements</Text>
        {course.requirements.map((req, index) => (
          <Text key={index} style={styles.listText}>
            • {req}
          </Text>
        ))}
      </View>

      {/* Schedule */}
      <View style={styles.section}>
        <View style={styles.sectionHeader}>
          <Calendar color="#7c3aed" size={20} />
          <Text style={styles.sectionTitle}>Schedule & Dates</Text>
        </View>
        {course.startDates.map((date, index) => (
          <Text key={index} style={styles.listText}>
            {date}
          </Text>
        ))}
        <Text style={styles.note}>
          Classes run Monday to Friday, 9:00 AM - 3:00 PM
        </Text>
      </View>

      {/* Contact */}
      <View style={styles.section}>
        <View style={styles.sectionHeader}>
          <Users color="#16a34a" size={20} />
          <Text style={styles.sectionTitle}>Need More Info?</Text>
        </View>
        <Text style={styles.listText}>Phone: +27 11 123 4567</Text>
        <Text style={styles.listText}>Email: info@empoweringnation.org</Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#f9fafb", padding: 16 },
  backButton: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#ea580c",
    alignSelf: "flex-start",
    padding: 10,
    borderRadius: 8,
    marginBottom: 16,
  },
  backText: { color: "#fff", fontWeight: "600", marginLeft: 6 },
  title: { fontSize: 24, fontWeight: "700", color: "#7c3aed" },
  badge: {
    backgroundColor: "#e0f2fe",
    color: "#0369a1",
    paddingVertical: 4,
    paddingHorizontal: 12,
    borderRadius: 8,
    marginVertical: 8,
    alignSelf: "flex-start",
    fontWeight: "600",
  },
  purpose: { fontSize: 16, color: "#4b5563", marginBottom: 12 },
  image: {
    width: "100%",
    height: 220,
    borderRadius: 12,
    marginBottom: 16,
  },
  infoRow: { flexDirection: "row", justifyContent: "space-between", gap: 8 },
  infoCard: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
    backgroundColor: "#f0fdf4",
    borderRadius: 12,
    padding: 12,
    borderWidth: 1.5,
    borderColor: "#6ee7b7",
  },
  infoLabel: { fontSize: 13, color: "#16a34a", fontWeight: "700" },
  infoValue: { fontSize: 15, fontWeight: "700", color: "#166534" },
  buttonRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    gap: 10,
    marginVertical: 16,
  },
  btn: {
    flex: 1,
    paddingVertical: 12,
    borderRadius: 8,
    alignItems: "center",
  },
  btnText: { color: "#fff", fontWeight: "600", fontSize: 16 },
  section: {
    backgroundColor: "#fff",
    borderRadius: 10,
    padding: 16,
    marginBottom: 16,
    borderWidth: 1,
    borderColor: "#e5e7eb",
  },
  sectionHeader: { flexDirection: "row", alignItems: "center", gap: 8 },
  sectionTitle: { fontWeight: "700", fontSize: 16, color: "#334155" },
  listItem: { flexDirection: "row", alignItems: "center", gap: 8, marginTop: 8 },
  listText: { fontSize: 14, color: "#4b5563" },
  note: { fontSize: 12, color: "#6b7280", marginTop: 8 },
});
