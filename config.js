const PRODUCTS = [
  {ticker: 'BTCUSD', name: 'Bitcoin'},
  {ticker: 'ETHUSD', name: 'Ethereum'},
  {ticker: 'LKKUSD', name: 'Lykke'},
  {ticker: 'LTCUSD', name: 'Litecoin'},
  {ticker: 'DASHUSD', name: 'Dash'},
  {ticker: 'ETCUSD', name: 'Ethereum Classic'}
];

const SELF_URL = process.env.SELF_URL || 'http://localhost:3000';
const BASE_API_URL = process.env.BASE_API_URL || 'https://apiv2.lykke.com/api';

const WALLET_URL = process.env.WALLET_URL || 'https://wallet.lykke.com';
const TERMINAL_URL = process.env.TERMINAL_URL || 'https://trade.lykke.com';

module.exports = {
  PRODUCTS,
  SELF_URL,
  BASE_API_URL,
  WALLET_URL,
  TERMINAL_URL
};
