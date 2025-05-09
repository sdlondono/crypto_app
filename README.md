# 📱 CryptoApp – React Native Million

**CryptoApp** is a mobile application developed with **React Native, TypeScript, and Expo**
It fetches real-time cryptocurrency data from the CoinLore API and allows users to:

- Browse a list of cryptocurrencies
- View their current price in USD
- Filter them by name or symbol
- Access detailed information by tapping on any coin

https://github.com/user-attachments/assets/c0cf09b4-d63b-4047-97e4-e552651f926e

---

## ✅ Test Requirements

> A real estate company requires a mobile app to obtain cryptocurrency information in **USD** (due to governance decisions).  
> The app must:

- List cryptocurrencies
- Show their value in USD
- Include a search/filter feature
- Display detailed data upon selection

### Data Source:

[CoinLore Cryptocurrency API](https://www.coinlore.com/cryptocurrency-data-api)

---

## 🚀 Technologies Used

- [React Native](https://reactnative.dev/)
- [Expo](https://expo.dev/)
- [TypeScript](https://www.typescriptlang.org/)
- [expo-router](https://expo.github.io/router/)
- Custom React Hooks
- REST API integration
- Performance-focused architecture

---

## 📦 How to Run the Project

### 1. Clone the repository

```bash
git clone https://github.com/your-username/crypto_app.git
cd crypto_app
```

### 2. Install dependencies

```bash
npm install
```

### 3. Run the app

```bash
npx expo start
```

## 🧠 Project Structure

```
app/               # Screens (handled by expo-router)
├── index.tsx      # Main list and search screen
├── [id].tsx       # Cryptocurrency detail screen
components/
├── CryptoCard.tsx
constants/
├── colors.ts      # Binance-style dark color palette
hooks/
├── useCryptos.ts          # Fetch and logic for the list
├── useCryptoDetails.ts    # Fetch and logic for the detail view
models/
├── Crypto.ts              # Type definitions
services/
├── cryptoService.ts       # API access layer (optional)
utils/
├── format.ts              # Reusable formatters (price, percent)
```

## 🔍 Features Implemented

- ✅ **Real-time data integration** using the CoinLore API to fetch live cryptocurrency market data.
- ✅ **USD price display** with locale-aware formatting using `Intl.NumberFormat` for improved user readability.
- ✅ **Search and filtering functionality** with `TextInput` and optimized with `useMemo` to ensure performance on large lists.
- ✅ **Screen navigation** built with `expo-router`, enabling clean, declarative routing (`index.tsx → [id].tsx`).
- ✅ **Comprehensive detail view** for each cryptocurrency, including:
  - 🪙 Name and symbol
  - 💵 Current price in USD
  - 📈 24-hour price change percentage
  - 🏦 Market capitalization
  - 📊 Trading volume over the last 24 hours
  - 🏅 Global ranking
- ✅ **User interface design inspired by Binance**, with a dark theme and yellow accent to enhance visual consistency.
- ✅ **Logical separation of concerns**, with data fetching and business logic encapsulated in custom hooks, and UI in reusable components.
- ✅ **Render performance improvements** via `useCallback` and `useMemo` to avoid unnecessary re-renders.
- ✅ **Strict type safety** and scalable architecture through modular folder organization and clear type definitions.

## 📐 Best Practices Followed

- 📦 **Separation of concerns** between UI components, logic, services, and types for better maintainability and readability.
- 🧠 **Custom hooks** (`useCryptos`, `useCryptoDetails`) encapsulate data-fetching logic, promoting reusability and testability.
- 💡 **Optimized rendering** with `useCallback` and `useMemo` to reduce unnecessary component re-renders and improve performance.
- 🔒 **Type safety** enforced throughout the project using TypeScript and shared interfaces located in the `models/` directory.
- 🧱 **Scalable architecture** with a modular folder structure, making the project easy to extend and navigate.
- 🎨 **Centralized styling** using a Binance-inspired color palette and dark theme stored in `constants/colors.ts`.
- 🔍 **Clean and readable code**, with meaningful naming, consistent formatting, and inline documentation where needed.
- 📁 **Atomic components** and reusable UI elements to promote a consistent look and feel across screens.
- 🧪 **Code prepared for testing**, with logic abstracted from UI and structured in a way that can be easily tested with tools like `jest`.
