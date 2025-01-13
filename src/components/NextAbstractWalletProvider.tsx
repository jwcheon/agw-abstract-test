"use client";

//import { AbstractWalletProvider } from "@abstract-foundation/agw-react";
import { AbstractPrivyProvider } from "@abstract-foundation/agw-react/privy";
import { abstractTestnet } from "viem/chains";

export default function AbstractWalletWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    // <AbstractWalletProvider config={{ testnet: true }}>
    <AbstractPrivyProvider
      testnet={true}
      appId="cm5upiv7g08l1s0092ewk9v18"
      config={{
        defaultChain: abstractTestnet,
        supportedChains: [abstractTestnet],
      }}
    >
      {children}
    </AbstractPrivyProvider>
    // </AbstractWalletProvider>
  );
}
