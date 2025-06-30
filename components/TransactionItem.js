import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function TransactionItem({ item }) {
  const isCredit = item.type === 'credit';

  return (
    <View style={styles.item}>
      <Text style={[styles.type, { color: isCredit ? 'green' : 'red' }]}>
        {isCredit ? 'CREDIT' : 'DEBIT'}
      </Text>
      <Text style={styles.amount}>{item.amount} coins</Text>
      <Text style={styles.date}>{new Date(item.date).toLocaleString()}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  item: {
    backgroundColor: '#fff',
    padding: 12,
    borderRadius: 8,
    marginVertical: 6,
    elevation: 1
  },
  type: {
    fontWeight: 'bold',
    fontSize: 14,
    marginBottom: 4
  },
  amount: {
    fontSize: 16,
    marginBottom: 2
  },
  date: {
    fontSize: 12,
    color: '#666'
  }
});
