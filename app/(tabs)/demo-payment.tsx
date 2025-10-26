import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert, ScrollView } from 'react-native';

export default function DemoPaymentScreen() {
  const [cardNumber, setCardNumber] = useState('');
  const [name, setName] = useState('');
  const [expiry, setExpiry] = useState('');
  const [cvc, setCvc] = useState('');

  const handleSubmit = () => {
    if (!cardNumber || !name || !expiry || !cvc) {
      Alert.alert('Please fill in all fields.');
      return;
    }
    Alert.alert('Thank you for your (fake) donation!');
    setCardNumber('');
    setName('');
    setExpiry('');
    setCvc('');
  };

  return (
    <ScrollView contentContainerStyle={styles.scroll}>
      <View style={styles.container}>
        <Text style={styles.header}>Fake Payment Portal</Text>
        <Text style={styles.subHeader}>
          This is a demo payment page. No real transaction will occur.
        </Text>
        <View style={styles.form}>
          <TextInput
            style={styles.input}
            placeholder="Card Number"
            value={cardNumber}
            onChangeText={setCardNumber}
            keyboardType="number-pad"
          />
          <TextInput
            style={styles.input}
            placeholder="Name on Card"
            value={name}
            onChangeText={setName}
          />
          <View style={styles.row}>
            <TextInput
              style={[styles.input, { flex: 1, marginRight: 8 }]}
              placeholder="MM/YY"
              value={expiry}
              onChangeText={setExpiry}
              keyboardType="numbers-and-punctuation"
            />
            <TextInput
              style={[styles.input, { flex: 1 }]}
              placeholder="CVC"
              value={cvc}
              onChangeText={setCvc}
              keyboardType="number-pad"
              secureTextEntry
            />
          </View>
          <TouchableOpacity style={styles.button} onPress={handleSubmit}>
            <Text style={styles.buttonText}>Pay Now</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  scroll: {
    flexGrow: 1,
    justifyContent: 'center',
    backgroundColor: '#f0f4ff',
  },
  container: {
    backgroundColor: '#fff',
    borderRadius: 16,
    padding: 32,
    maxWidth: 400,
    width: '100%',
    alignSelf: 'center',
    marginTop: 48,
    marginBottom: 48,
    shadowColor: '#dbeafe',
    shadowOpacity: 0.2,
    shadowRadius: 8,
    shadowOffset: { width: 0, height: 2 },
  },
  header: {
    color: '#2563eb',
    fontWeight: '700',
    fontSize: 22,
    marginBottom: 16,
    textAlign: 'center',
  },
  subHeader: {
    color: '#334155',
    marginBottom: 24,
    textAlign: 'center',
    fontSize: 16,
  },
  form: {
    width: '100%',
  },
  input: {
    width: '100%',
    padding: 12,
    marginBottom: 12,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#cbd5e1',
    fontSize: 16,
    backgroundColor: '#f8fafc',
  },
  row: {
    flexDirection: 'row',
    marginBottom: 12,
  },
  button: {
    marginTop: 24,
    width: '100%',
    backgroundColor: '#22c55e',
    borderRadius: 8,
    paddingVertical: 14,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    color: '#fff',
    fontWeight: '600',
    fontSize: 18,
  },
});