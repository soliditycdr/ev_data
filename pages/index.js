import { ConnectButton } from '@rainbow-me/rainbowkit';
import { useAccount } from 'wagmi';

export default function Home() {
  const { address, isConnected } = useAccount();

  return (
    <main style={{ padding: 30 }}>
      <h1>🚗 EVRS Vehicle Mileage Data</h1>
      <ConnectButton />
      {isConnected && (
        <>
          <p>🔗 Connected wallet: {address}</p>
          <p>📊 Mileage data will appear here (coming soon)</p>
        </>
      )}
    </main>
  );
}
