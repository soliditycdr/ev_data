import { useAccount } from 'wagmi';
import { ConnectButton } from '@rainbow-me/rainbowkit';

export default function Home() {
  const { address, isConnected } = useAccount();

  return (
    <main className="min-h-screen bg-white text-gray-800 p-8 flex flex-col items-center justify-start space-y-6">
      <h1 className="text-3xl font-bold flex items-center space-x-2">
        <span>🚗</span>
        <span>EVRS Vehicle Mileage Dashboard</span>
      </h1>

      <div className="mt-4">
        <ConnectButton />
      </div>

      {isConnected ? (
        <div className="bg-gray-100 p-6 rounded-xl shadow-lg w-full max-w-2xl mt-6 text-left space-y-4">
          <div className="text-sm text-gray-500">
            ✅ Connected wallet: <span className="font-mono text-blue-600">{address}</span>
          </div>
          <div className="text-lg font-semibold">
            📊 Mileage Data (Demo): <span className="text-green-600">52.3 km</span>
          </div>
          <div className="text-gray-500">🚧 More metrics coming soon...</div>
        </div>
      ) : (
        <div className="text-gray-500 mt-4">🔴 Wallet not connected</div>
      )}
    </main>
  );
}
