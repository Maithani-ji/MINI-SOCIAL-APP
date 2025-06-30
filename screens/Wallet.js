import React from 'react';
import { View, Text, Button, StyleSheet, FlatList } from 'react-native';
import { useWallet } from '../context/WalletContext';
import TransactionItem from '../components/TransactionItem';

export default function Wallet() {
  const { coins, history, addCoins } = useWallet();

  

  return (
    <View style={styles.container}>
      <Text style={styles.header}>💰 Wallet</Text>
      <Text style={styles.balance}>Balance: {coins} coins</Text>

      <Text style={styles.subHeader}>Recharge</Text>
      <View style={styles.rechargeRow}>
        {[10, 50, 100].map((amt) => (
          <Button key={amt} title={`+${amt}`} onPress={() => addCoins(amt)} />
        ))}
      </View>

      <Text style={styles.subHeader}>Transaction History</Text>
      <FlatList
        data={[...history].reverse()} // latest first
        keyExtractor={(_, i) => i.toString()}
        renderItem={({ item }) => <TransactionItem item={item} />}

        ListEmptyComponent={<Text style={{ marginTop: 20 }}>No transactions yet.</Text>}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1, padding: 16, backgroundColor: '#f2f2f2'
  },
  header: {
    fontSize: 24, fontWeight: 'bold', marginBottom: 12
  },
  subHeader: {
    fontSize: 18, fontWeight: '600', marginTop: 20, marginBottom: 8
  },
  balance: {
    fontSize: 20, fontWeight: 'bold', color: '#007bff'
  },
  rechargeRow: {
    flexDirection: 'row', justifyContent: 'space-around', marginVertical: 10
  },
  transactionItem: {
    backgroundColor: '#fff', padding: 10, borderRadius: 8, marginVertical: 4, elevation: 1
  },
  type: {
    fontWeight: 'bold', color: '#444'
  },
  date: {
    fontSize: 12, color: '#777'
  }
});
