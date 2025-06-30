import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import GameLobby from '../screens/GameLobby';
import Wallet from '../screens/Wallet';
import GamePlaceholder from '../screens/GamePlaceholder';

const Stack = createNativeStackNavigator();

export default function AppNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="GameLobby" component={GameLobby} />
      <Stack.Screen name="Wallet" component={Wallet} />
      <Stack.Screen name="Game" component={GamePlaceholder} />
    </Stack.Navigator>
  );
}
