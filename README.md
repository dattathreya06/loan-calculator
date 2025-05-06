# 💸 Loan Calculator with Live Exchange Rates 🌍

A fully responsive and theme-toggle-enabled Loan Calculator built using React and Material UI. It features real-time EMI calculation and live currency exchange rates using the ExchangeRate API. Users can toggle between light and dark modes, and view currency conversions in real-time.

## 🚀 Live Demo

🌐 [Live Site](https://your-deployed-link.com)

## 📌 Features

- 🔢 Loan EMI calculator (based on principal, interest rate, and duration)
- 💹 Live currency exchange rates using ExchangeRate API
- 🌙 Light/Dark theme toggle (Context API based)
- 🌍 Currency selection and conversion
- 📱 Fully responsive design (mobile/tablet/desktop)
- 🧭 Intuitive navigation with current page highlight
- 🧠 Global state management via Context API

## 🛠️ Tech Stack

- React
- React Router DOM
- Material UI (MUI)
- ExchangeRate API
- Context API
- Axios

## 📂 Project Structure

```
loan-calculator/
├── public/
├── src/
│   ├── components/
│   │   ├── CalculatorForm.js
│   │   ├── LoanResults.js
│   │   └── Navbar.js
│   ├── context/
│   │   └── AppContext.js
│   ├── hooks/
│   │   └── useExchangeRates.js
│   ├── pages/
│   │   ├── Home.js
│   │   ├── ExchangeRates.js
│   │   └── About.js
│   ├── App.js
│   └── index.js
└── README.md
```

## 🔧 Setup Instructions

1. Clone the repo:

   ```bash
   git clone https://github.com/dattathreya06/loan-calculator.git
   cd loan-calculator
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Start the development server:

   ```bash
   npm start
   ```

4. Build for production:
   ```bash
   npm run build
   ```

## 🔐 API Key

This app uses the [ExchangeRate API](https://www.exchangerate-api.com/). You can get a free API key and replace it in:

```js
useExchangeRates.js
https://v6.exchangerate-api.com/v6/YOUR_API_KEY/latest/USD
```

## 📃 License

This project is open source and available under the [MIT License](LICENSE).
