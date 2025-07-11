
import { ConnectButton } from '@rainbow-me/rainbowkit';

export default function Home() {
  return (
    <main style={{ padding: 30 }}>
      <h1>🚗 EVRS Vehicle Mileage Data</h1>
      <p>Connect your wallet to view data</p>
      <ConnectButton />
    </main>
  );
}
