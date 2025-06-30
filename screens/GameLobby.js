import React from 'react';
import { View, Text, FlatList, StyleSheet, Alert, TouchableOpacity } from 'react-native';
import GameCard from '../components/GameCard';
import { games } from '../data/games';
import { useNavigation } from '@react-navigation/native';
import { useWallet } from '../context/WalletContext';

export default function GameLobby() {
  const navigation = useNavigation();
  const { coins, deductCoins } = useWallet();

  const handleJoin = (game) => {
    const success = deductCoins(game.entry);
    if (success) {
      navigation.navigate('Game', { gameId: game.id });
    } else {
      Alert.alert("Insufficient Balance", "You don't have enough coins to join this game.");
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.headerRow}>
        <Text style={styles.header}>Game Lobby</Text>
        <TouchableOpacity onPress={() => navigation.navigate('Wallet')}>
          <Text style={styles.walletLink}>💰 Wallet</Text>
        </TouchableOpacity>
      </View>

      <FlatList
        data={games}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <GameCard game={item} onJoin={handleJoin} />
        )}
        contentContainerStyle={{ paddingBottom: 20 }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1, padding: 16, backgroundColor: '#f2f2f2'
  },
  headerRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16
  },
  header: {
    fontSize: 24, fontWeight: 'bold'
  },
  walletLink: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#007bff'
  }
});
