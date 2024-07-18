'use client';
import { ThirdwebWeb3Provider } from '@3rdweb/hooks';
import App from './app';

const supportedChainIds = [11155111];
const connectors = {
  injected: {},
};

export default function Home() {
  return (
    <ThirdwebWeb3Provider
      supportedChainIds={supportedChainIds}
      connectors={connectors}
    >
      <App />
    </ThirdwebWeb3Provider>
  );
}
