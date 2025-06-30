# 🎮 Mini Social App — Game Lobby & Wallet Feature

A mobile-first **React Native (Expo)** feature module that simulates a basic social game lobby and wallet system — powered by coins, gamification, and clean UI.

---

## 📱 Features

- 🎮 Game Lobby with:
  - 2 mock games: **Challenge & Connect**, **Snake & Ladder**
  - Entry coin requirement
  - Join button → opens dummy game screen
- 💰 Wallet System:
  - Current balance display
  - Recharge button with fixed coin packs (+10, +50, +100)
  - Transaction history (mocked credit/debit logs)
  - Error alert if balance is insufficient
- 🧠 Global state via Context API
- 📦 Fully responsive & deployed via EAS

---

## 🚀 Live Demo on Expo

Try it instantly via **Expo Go app**:

🔗 [**Preview Link**](https://expo.dev/accounts/maithaniji/projects/mini-social-app/updates/173d574e-82d5-4b91-92c5-d5342cdc60d7)

---

## 🧱 Tech Stack

| Layer        | Tech                 |
|--------------|----------------------|
| Framework    | React Native (Expo)  |
| State        | React Context API    |
| Navigation   | React Navigation     |
| Deployment   | EAS Update (Expo)    |

---

## 📂 Folder Structure

```
.
├── App.js
├── AppNavigator.js
├── assets/
│   ├── coin.png
│   ├── connect.png
│   └── snake.png
├── components/
│   ├── GameCard.js
│   └── TransactionItem.js
├── context/
│   └── WalletContext.js
├── data/
│   └── games.js
├── screens/
│   ├── GameLobby.js
│   ├── Wallet.js
│   └── Game.js
└── eas.json
```

---

## 🧪 Run Locally

> Requires Node.js + Expo CLI

```bash
git clone https://github.com/Maithani-ji/MINI-SOCIAL-APP.git
cd MINI-SOCIAL-APP
npm install
npx expo start
```

Then scan the QR code using **Expo Go** (Android/iOS).

---

## 📦 Build (Optional)

To generate a `.apk`:

```bash
npx eas build --platform android
```

---

## 👤 Author

Built with ❤️ by **Tushar Maithani**  
[GitHub → @Maithani-ji](https://github.com/Maithani-ji)

---

## 📃 License

This project is licensed under the [MIT License](LICENSE).

---

## ✅ Submission Ready

- [x] Game Lobby + Wallet logic complete  
- [x] Coin deduction / recharge flow  
- [x] Dummy game placeholder screen  
- [x] Responsive UI and Expo-ready  
- [x] GitHub + Live demo link ready to share  

---

## 🟡 What You Could Add Later

- Login/auth (Firebase or Supabase)  
- Real multiplayer or API integration  
- Game graphics & animations  
- Leaderboards or tournament screen  
