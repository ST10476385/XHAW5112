import React from "react";
import { useParams } from "react-router-dom";
import { Clock, DollarSign, BookOpen, Calendar, Image as ImageIcon, Check, Info } from "lucide-react";
import { courses, getCourseById } from "../data/courses";

const styles = {
  container: {
    maxWidth: "1200px",
    margin: "40px auto",
    padding: "40px",
    background: "#fff",
    borderRadius: "12px",
    boxShadow: "0 4px 24px rgba(0,0,0,0.07)",
    display: "flex",
    flexDirection: "row",
    gap: "30px",
    fontFamily: "var(--font-main, 'Inter', Arial, sans-serif)",
    minHeight: '700px',
  },
  leftCol: {
    width: '65%',
    minWidth: 0,
    display: "flex",
    flexDirection: "column",
    gap: "30px",
  },
  rightCol: {
    width: '35%',
    minWidth: 0,
    display: "flex",
    flexDirection: "column",
    gap: "30px",
    alignItems: "flex-end",
  },
  headerRow: {
    display: "flex",
    alignItems: "center",
    gap: "18px",
    marginBottom: '0',
  },
  title: {
    fontSize: "32px",
    fontWeight: 700,
    color: "#E65100", // orange
    marginRight: "12px",
    lineHeight: 1.1,
  },
  badge: {
    background: "#DFF5E1", // light green
    color: "#28A745", // green
    fontWeight: 600,
    fontSize: "14px",
    borderRadius: "999px",
    padding: "6px 18px",
    marginLeft: "8px",
    display: "inline-block",
    alignSelf: 'center',
  },
  subtitle: {
    fontSize: "18px",
    color: "#22292F", // dark grey
    marginTop: "10px",
    fontWeight: 500,
    marginBottom: '10px',
  },
  infoRow: {
    display: "flex",
    gap: "20px",
    marginTop: "18px",
    marginBottom: '0',
  },
  infoBox: {
    width: "220px",
    height: "80px",
    background: "#fff",
    borderRadius: "10px",
    boxShadow: "0 2px 8px rgba(0,0,0,0.06)",
    display: "flex",
    alignItems: "center",
    gap: "16px",
    padding: "0 20px",
  },
  infoIcon: {
    width: "24px",
    height: "24px",
  },
  infoText: {
    display: "flex",
    flexDirection: "column",
    gap: "2px",
  },
  infoLabel: {
    fontSize: "14px",
    color: "#888888", // grey
    fontWeight: 500,
  },
  infoValue: {
    fontSize: "16px",
    fontWeight: 700,
    color: "#222222", // black
  },
  infoValueGreen: {
    fontSize: "16px",
    fontWeight: 700,
    color: "#28A745", // green
  },
  ctaRow: {
    display: "flex",
    gap: "15px",
    marginTop: "18px",
    marginBottom: '0',
  },
  applyBtn: {
    width: "140px",
    height: "45px",
    background: "#28A745", // green
    color: "#fff",
    fontWeight: 700,
    fontSize: "15px",
    border: "none",
    borderRadius: "8px",
    cursor: "pointer",
    transition: "background 0.2s",
  },
  askBtn: {
    width: "140px",
    height: "45px",
    background: "#fff",
    color: "#22292F", // dark grey
    fontWeight: 600,
    fontSize: "15px",
    border: "1.5px solid #D1D5DB", // grey border
    borderRadius: "8px",
    cursor: "pointer",
    transition: "background 0.2s",
    marginLeft: '15px',
  },
  contentCard: {
    width: "100%",
    maxWidth: "600px",
    minHeight: '200px',
    background: "#fff",
    borderRadius: "10px",
    boxShadow: "0 2px 8px rgba(0,0,0,0.06)",
    padding: "24px 24px 18px 24px",
    marginTop: "10px",
  },
  contentHeader: {
    display: "flex",
    alignItems: "center",
    gap: "10px",
    fontSize: "18px",
    fontWeight: 700,
    color: "#28A745", // green
    marginBottom: "10px",
  },
  contentDesc: {
    fontSize: "15px",
    color: "#555555", // grey
    marginBottom: "12px",
  },
  checklist: {
    listStyle: "none",
    padding: 0,
    margin: 0,
    display: "flex",
    flexDirection: "column",
    gap: "8px",
  },
  checklistItem: {
    display: "flex",
    alignItems: "center",
    gap: "8px",
    fontSize: "15px",
    color: "#222222", // black
  },
  rightImgBox: {
    width: "400px",
    height: "250px",
    background: "#F3F4F6", // light grey
    borderRadius: "10px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: "30px",
    marginTop: '0',
  },
  scheduleCard: {
    width: "350px",
    minHeight: '180px',
    background: "#fff",
    borderRadius: "10px",
    boxShadow: "0 2px 8px rgba(0,0,0,0.06)",
    padding: "20px 20px 14px 20px",
    marginTop: "10px",
  },
  scheduleHeader: {
    display: "flex",
    alignItems: "center",
    gap: "10px",
    fontSize: "18px",
    fontWeight: 700,
    color: "#7C3AED", // purple
    marginBottom: "10px",
  },
  scheduleSub: {
    fontSize: "14px",
    fontWeight: 700,
    color: "#222222", // black
    marginBottom: "8px",
  },
  dateList: {
    display: "flex",
    flexDirection: "column",
    gap: "8px",
    marginBottom: "10px",
  },
  dateBox: {
    width: "280px",
    height: "40px",
    background: "#F3F4F6", // light grey
    borderRadius: "8px",
    display: "flex",
    alignItems: "center",
    paddingLeft: "16px",
    fontSize: "15px",
    color: "#222222", // black
    fontWeight: 600,
    marginBottom: '6px',
  },
  // Responsive styles for mobile
  '@media (max-width: 900px)': {
    container: {
      flexDirection: 'column',
      padding: '20px',
      gap: '20px',
    },
    leftCol: {
      width: '100%',
    },
    rightCol: {
      width: '100%',
      alignItems: 'center',
    },
    rightImgBox: {
      width: '100%',
      maxWidth: '400px',
      margin: '0 auto 20px',
    },
    scheduleCard: {
      width: '100%',
      maxWidth: '350px',
      margin: '0 auto',
    },
  },
  classTimes: {
    fontSize: "14px",
    color: "#666",
    marginTop: "8px",
  },
};

export default function CourseDetailPage() {
  const { courseId } = useParams();
  const course = getCourseById(courseId);

  // Responsive style logic
  const isMobile = typeof window !== 'undefined' && window.innerWidth < 900;
  const containerStyle = {
    ...styles.container,
    flexDirection: isMobile ? 'column' : 'row',
    padding: isMobile ? '20px' : '40px',
    gap: isMobile ? '20px' : '30px',
  };
  const leftColStyle = {
    ...styles.leftCol,
    width: isMobile ? '100%' : '65%',
  };
  const rightColStyle = {
    ...styles.rightCol,
    width: isMobile ? '100%' : '35%',
    alignItems: isMobile ? 'center' : 'flex-end',
  };
  const rightImgBoxStyle = {
    ...styles.rightImgBox,
    width: isMobile ? '100%' : '400px',
    maxWidth: isMobile ? '400px' : undefined,
    margin: isMobile ? '0 auto 20px' : '0 0 30px 0',
  };
  const scheduleCardStyle = {
    ...styles.scheduleCard,
    width: isMobile ? '100%' : '350px',
    maxWidth: isMobile ? '350px' : undefined,
    margin: isMobile ? '0 auto' : '10px 0 0 0',
  };

  if (!course) {
    return (
      <div style={{ maxWidth: 600, margin: '80px auto', padding: 40, background: '#fff', borderRadius: 12, boxShadow: '0 4px 24px rgba(0,0,0,0.07)', textAlign: 'center' }}>
        <Info color="#E65100" size={48} style={{ marginBottom: 16 }} />
        <h2 style={{ color: '#E65100', fontWeight: 700, fontSize: 28 }}>Course Not Found</h2>
        <p style={{ color: '#444', fontSize: 17, marginTop: 12 }}>Sorry, the course you are looking for does not exist.</p>
      </div>
    );
  }

  // Format start dates
  function formatDate(dateStr) {
    const d = new Date(dateStr);
    return d.toLocaleDateString('en-ZA', { year: 'numeric', month: 'long', day: 'numeric' });
  }

  // Format price
  function formatPrice(price) {
    return new Intl.NumberFormat('en-ZA', { style: 'currency', currency: 'ZAR', minimumFractionDigits: 0 }).format(price);
  }

  return (
    <div style={containerStyle}>
      {/* Left Column */}
      <div style={leftColStyle}>
        {/* Header */}
        <div style={styles.headerRow}>
          <span style={styles.title}>{course.title}</span>
          <span style={styles.badge}>{course.type === 'six-month' ? '6-Month Program' : '6-Week Program'}</span>
        </div>
        <div style={styles.subtitle}>{course.purpose}</div>
        {/* Info Boxes */}
        <div style={styles.infoRow}>
          <div style={styles.infoBox}>
            <Clock color="#E65100" style={styles.infoIcon} />
            <div style={styles.infoText}>
              <span style={styles.infoLabel}>Duration</span>
              <span style={styles.infoValue}>{course.duration}</span>
            </div>
          </div>
          <div style={styles.infoBox}>
            <DollarSign color="#28A745" style={styles.infoIcon} />
            <div style={styles.infoText}>
              <span style={styles.infoLabel}>Course Fee</span>
              <span style={styles.infoValueGreen}>{formatPrice(course.fees)}</span>
            </div>
          </div>
        </div>
        {/* CTA Buttons */}
        <div style={styles.ctaRow}>
          <button style={styles.applyBtn}>Apply Now</button>
          <button style={styles.askBtn}>Ask Questions</button>
        </div>
        {/* Course Content Card */}
        <div style={styles.contentCard}>
          <div style={styles.contentHeader}>
            <BookOpen color="#28A745" size={18} />
            Course Content
          </div>
          <div style={styles.contentDesc}>
            This comprehensive course covers all essential topics to ensure you gain practical, marketable skills:
          </div>
          <ul style={styles.checklist}>
            {course.content.map((item, idx) => (
              <li key={idx} style={styles.checklistItem}><Check color="#28A745" size={18} />{item}</li>
            ))}
          </ul>
        </div>
        {/* Application Requirements Card */}
        <div style={{ ...styles.contentCard, marginTop: 20, borderLeft: '6px solid #2563eb', background: '#eff6ff' }}>
          <div style={{ ...styles.contentHeader, color: '#2563eb' }}>
            <Info color="#2563eb" size={18} />
            Application Requirements
          </div>
          <ul style={styles.checklist}>
            {course.requirements.map((req, idx) => (
              <li key={idx} style={{ ...styles.checklistItem, color: '#2563eb' }}><Check color="#2563eb" size={18} />{req}</li>
            ))}
          </ul>
        </div>
      </div>
      {/* Right Column */}
      <div style={rightColStyle}>
        {/* Image Placeholder */}
        <div style={rightImgBoxStyle}>
          <ImageIcon color="#B0B3B8" size={60} />
        </div>
        {/* Schedule & Dates Card */}
        <div style={scheduleCardStyle}>
          <div style={styles.scheduleHeader}>
            <Calendar color="#7C3AED" size={18} />
            Schedule & Dates
          </div>
          <div style={styles.scheduleSub}>Upcoming Start Dates:</div>
          <div style={styles.dateList}>
            {course.startDates && course.startDates.length > 0 ? (
              course.startDates.map((date, idx) => (
                <div key={idx} style={styles.dateBox}>{formatDate(date)}</div>
              ))
            ) : (
              <div style={{ color: '#888', fontSize: 15, padding: '8px 0' }}>Contact us for upcoming dates</div>
            )}
          </div>
          <div style={styles.classTimes}>
            {/* Example: You can add course-specific class times here if available */}
            Classes are held Monday to Friday, 9:00 AM – 3:00 PM
          </div>
        </div>
      </div>
    </div>
  );
}
