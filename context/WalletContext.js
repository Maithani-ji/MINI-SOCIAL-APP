import React, { createContext, useState, useContext } from 'react';

const WalletContext = createContext();

export const WalletProvider = ({ children }) => {
  const [coins, setCoins] = useState(50);
  const [history, setHistory] = useState([]);

  const addCoins = (amount) => {
    setCoins(prev => prev + amount);
    setHistory(prev => [...prev, { type: 'credit', amount, date: Date.now() }]);
  };

  const deductCoins = (amount) => {
    if (coins < amount) return false;
    setCoins(prev => prev - amount);
    setHistory(prev => [...prev, { type: 'debit', amount, date: Date.now() }]);
    return true;
  };

  return (
    <WalletContext.Provider value={{ coins, history, addCoins, deductCoins }}>
      {children}
    </WalletContext.Provider>
  );
};

export const useWallet = () => useContext(WalletContext);
