import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

export default function GamePlaceholder({ route, navigation }) {
  const { gameId } = route.params;

  const gameNames = {
    '1': 'Challenge & Connect',
    '2': 'Snake & Ladder'
  };

  const gameName = gameNames[gameId] || 'Unknown Game';

  return (
    <View style={styles.container}>
      <Text style={styles.title}>🎮 {gameName}</Text>
      <Text style={styles.subtitle}>You have joined the game!</Text>
      <Button title="Back to Lobby" onPress={() => navigation.navigate('GameLobby')} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1, justifyContent: 'center', alignItems: 'center', padding: 20
  },
  title: {
    fontSize: 24, fontWeight: 'bold', marginBottom: 12
  },
  subtitle: {
    fontSize: 16, marginBottom: 20
  }
});
