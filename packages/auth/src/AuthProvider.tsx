"use client";

import React, { createContext, useContext, useState, useEffect } from "react";
import { WagmiProvider, createConfig, http } from "wagmi";
import { mainnet, polygon, optimism, arbitrum, sepolia } from "wagmi/chains";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  RainbowKitProvider,
  getDefaultConfig,
  darkTheme,
  lightTheme,
} from "@rainbow-me/rainbowkit";
import "@rainbow-me/rainbowkit/styles.css";

import {
  ConnectionProvider,
  WalletProvider,
} from "@solana/wallet-adapter-react";
import {
  WalletModalProvider,
  WalletDisconnectButton,
  WalletMultiButton,
} from "@solana/wallet-adapter-react-ui";
import {
  PhantomWalletAdapter,
  SolflareWalletAdapter,
  TorusWalletAdapter,
  LedgerWalletAdapter,
} from "@solana/wallet-adapter-wallets";
import { clusterApiUrl } from "@solana/web3.js";
import { WalletAdapterNetwork } from "@solana/wallet-adapter-base";

// Import des styles Solana
require("@solana/wallet-adapter-react-ui/styles.css");

// Types pour le contexte d'authentification
interface AuthContextType {
  isEthereumConnected: boolean;
  isSolanaConnected: boolean;
  currentNetwork: "ethereum" | "solana" | null;
  switchNetwork: (network: "ethereum" | "solana") => void;
  disconnect: () => Promise<void>;
}

// Contexte d'authentification
const AuthContext = createContext<AuthContextType | undefined>(undefined);

// Configuration Wagmi améliorée
const wagmiConfig = getDefaultConfig({
  appName: "Node3X",
  projectId: process.env.NEXT_PUBLIC_WALLETCONNECT_PROJECT_ID || "your-project-id", 
  chains: [mainnet, polygon, optimism, arbitrum, sepolia],
  transports: {
    [mainnet.id]: http(process.env.NEXT_PUBLIC_ETHEREUM_RPC_URL),
    [polygon.id]: http(process.env.NEXT_PUBLIC_POLYGON_RPC_URL), 
    [optimism.id]: http(process.env.NEXT_PUBLIC_OPTIMISM_RPC_URL),
    [arbitrum.id]: http(process.env.NEXT_PUBLIC_ARBITRUM_RPC_URL),
    [sepolia.id]: http(process.env.NEXT_PUBLIC_SEPOLIA_RPC_URL),
  },
  ssr: true,
});

// Configuration Query Client pour React Query
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 1000 * 60 * 5, // 5 minutes
      retry: 3,
    },
  },
});

interface AuthProviderProps {
  children: React.ReactNode;
  theme?: "light" | "dark" | "auto";
  network?: WalletAdapterNetwork;
}

export function AuthProvider({ 
  children, 
  theme = "auto",
  network = WalletAdapterNetwork.Mainnet 
}: AuthProviderProps) {
  // États pour la gestion de l'authentification
  const [currentNetwork, setCurrentNetwork] = useState<"ethereum" | "solana" | null>(null);
  const [isEthereumConnected, setIsEthereumConnected] = useState(false);
  const [isSolanaConnected, setIsSolanaConnected] = useState(false);

  // Configuration Solana
  const endpoint = React.useMemo(() => {
    if (network === WalletAdapterNetwork.Devnet) {
      return clusterApiUrl("devnet");
    } else if (network === WalletAdapterNetwork.Testnet) {
      return clusterApiUrl("testnet");
    }
    return clusterApiUrl("mainnet-beta");
  }, [network]);

  const wallets = React.useMemo(
    () => [
      new PhantomWalletAdapter(),
      new SolflareWalletAdapter(),
      new TorusWalletAdapter(),
      new LedgerWalletAdapter(),
    ],
    []
  );

  // Fonctions utilitaires
  const switchNetwork = (network: "ethereum" | "solana") => {
    setCurrentNetwork(network);
  };

  const disconnect = async () => {
    try {
      // Déconnexion logic ici
      setIsEthereumConnected(false);
      setIsSolanaConnected(false);
      setCurrentNetwork(null);
    } catch (error) {
      console.error("Erreur lors de la déconnexion:", error);
    }
  };

  // Détermination du thème
  const rainbowKitTheme = React.useMemo(() => {
    if (theme === "dark") return darkTheme();
    if (theme === "light") return lightTheme();
    
    // Auto theme - détection du système
    if (typeof window !== "undefined") {
      const isDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
      return isDark ? darkTheme() : lightTheme();
    }
    return lightTheme();
  }, [theme]);

  // Valeur du contexte
  const authValue: AuthContextType = {
    isEthereumConnected,
    isSolanaConnected,
    currentNetwork,
    switchNetwork,
    disconnect,
  };

  // Gestion des erreurs Solana
  const onError = React.useCallback((error: any) => {
    console.error("Erreur Solana Wallet:", error);
  }, []);

  return (
    <AuthContext.Provider value={authValue}>
      <QueryClientProvider client={queryClient}>
        <WagmiProvider config={wagmiConfig}>
          <RainbowKitProvider 
            theme={rainbowKitTheme}
            showRecentTransactions={true}
            coolMode={true}
          >
            <ConnectionProvider endpoint={endpoint}>
              <WalletProvider 
                wallets={wallets} 
                onError={onError}
                autoConnect={true}
              >
                <WalletModalProvider>
                  {children}
                </WalletModalProvider>
              </WalletProvider>
            </ConnectionProvider>
          </RainbowKitProvider>
        </WagmiProvider>
      </QueryClientProvider>
    </AuthContext.Provider>
  );
}

// Hook personnalisé pour utiliser le contexte d'authentification
export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("useAuth doit être utilisé dans un AuthProvider");
  }
  return context;
};

// Hook pour Ethereum
export const useEthereum = () => {
  // Tu peux ajouter ici des hooks wagmi spécifiques
  return {
    // Fonctions et états Ethereum
  };
};

// Hook pour Solana
export const useSolana = () => {
  // Tu peux ajouter ici des hooks Solana spécifiques
  return {
    // Fonctions et états Solana
  };
};

export default AuthProvider;