import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

export default function GameCard({ game, onJoin }) {
  return (
    <View style={styles.card}>
      <Text style={styles.name}>{game.name}</Text>
      <Text>Entry: {game.entry} coins</Text>
      <Text>Players: {game.players}</Text>
      <Button title="Join" onPress={() => onJoin(game)} />
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    padding: 16,
    margin: 8,
    backgroundColor: '#fff',
    borderRadius: 10,
    elevation: 2,
    shadowColor: '#000',
    shadowOpacity: 0.1
  },
  name: {
    fontWeight: 'bold',
    fontSize: 16
  }
});
