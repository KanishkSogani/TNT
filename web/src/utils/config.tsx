import {
  arbitrum,
  base,
  mainnet,
  optimism,
  polygon,
  scrollSepolia,
  sepolia,
} from "wagmi/chains";
import {
  getDefaultConfig,
  RainbowKitProvider,
  darkTheme,
  Chain,
} from "@rainbow-me/rainbowkit";
import * as chains from "wagmi/chains";
import { citreaTestnet } from "@/components/CitreaTestnet";
import { ethereumClassic } from "@/components/EthereumClassic";

// const AllChains: readonly [Chain, ...Chain[]] = [
//   ...(Object.values(chains) as Chain[]),
// //   citreaTestnet,
// ] as unknown as readonly [Chain, ...Chain[]];

export const config = getDefaultConfig({
  appName: "clowder",
  projectId: process.env.NEXT_PUBLIC_PROJECT_ID ?? "",
  chains: [ethereumClassic, scrollSepolia, polygon, mainnet, citreaTestnet],
  ssr: true,
});
