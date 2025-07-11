import '../styles/globals.css';
import '@rainbow-me/rainbowkit/styles.css';
import { RainbowKitProvider, getDefaultWallets } from '@rainbow-me/rainbowkit';
import { configureChains, createClient, WagmiConfig } from 'wagmi';
import { sepolia } from 'wagmi/chains';
import { publicProvider } from 'wagmi/providers/public';

// Configure the chains you want
const { chains, provider } = configureChains(
  [sepolia], // <-- Only Sepolia for now
  [publicProvider()]
);

// Default wallet connectors (MetaMask, Coinbase, WalletConnect, etc.)
const { connectors } = getDefaultWallets({
  appName: 'EVRS Dashboard',
  chains
});

// Create wagmi client
const wagmiClient = createClient({
  autoConnect: true,
  connectors,
  provider
});

// Main app wrapper
export default function App({ Component, pageProps }) {
  return (
    <WagmiConfig client={wagmiClient}>
      <RainbowKitProvider chains={chains}>
        <Component {...pageProps} />
      </RainbowKitProvider>
    </WagmiConfig>
  );
}
