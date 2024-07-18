import btcLogo from '../assets/btc.png';
import ethLogo from '../assets/eth.png';
import solLogo from '../assets/sol.png';

export const coins = [
  {
    name: 'Bitcoin',
    key: 'bitcoin',
    sign: 'BTC',
    logo: btcLogo,
    balanceRp: 23213,
    balanceCoin: 3123123,
    priceRp: 134324,
    change: -7.74,
    allocation: 30.22,
  },
  {
    name: 'Solana',
    key: 'solana',
    sign: 'SOL',
    logo: solLogo,
    balanceRp: 120.2,
    balanceCoin: 667736,
    priceRp: 53424,
    change: 4.74,
    allocation: 30.22,
  },
  {
    name: 'Ethereum',
    key: 'ethereum',
    sign: 'ETH',
    logo: ethLogo,
    balanceRp: 232232,
    balanceCoin: 123321,
    priceRp: 2323,
    change: 6.24,
    allocation: 59.66,
  },
];
