---
title: Blockchain Networks
bookCollapseSection: true
weight: 5
---

## Layer 1 (L1) Networks

- A **Layer 1 (L1)** blockchain is a foundational network that operates independently. It handles its own security, 
transaction validation, and consensus without relying on another network. Think of it as the "base layer" or the 
  highway system upon which everything else is built
- L1 networks act as the "source of truth" for the ledger, ensuring decentralization without relying on external 
  systems.
- Layer 2 (L2) solutions are built on top of L1 networks

## Summary of what L1 networks do

| Characteristic | Description | Examples from Prominent L1 Networks |
| --- | --- | --- |
| **Consensus Mechanism** | The protocol that enables network participants (nodes) to agree on the state of the blockchain, ensuring security and preventing double-spending. Common types include Proof-of-Work (PoW, energy-intensive mining), Proof-of-Stake (PoS, staking-based validation), and Delegated Proof-of-Stake (DPoS). This directly impacts decentralization, energy use, and transaction finality. | Bitcoin (PoW), Ethereum (PoS post-Merge), Solana (PoH + PoS hybrid).|
| **Security** | Achieved through cryptographic hashing, distributed node validation, and economic incentives (e.g., slashing stakes for malicious behavior). L1s prioritize immutability and resistance to attacks like 51% attacks. | Ethereum's PoS uses staking penalties; Bitcoin relies on massive computational power for PoW security.|
| **Scalability** | Refers to transaction throughput (TPS), block size/time, and handling network congestion. Most L1s face the "blockchain trilemma" (balancing security, decentralization, and scalability), often achieving 7-100 TPS natively. Solutions like sharding or state channels are integrated at L1 level.| Solana (up to 65,000 TPS via Proof-of-History), Ethereum (15-30 TPS, improved via sharding plans).|
| **Tokenomics** | Native tokens used for transaction fees (gas), staking rewards, and governance. Includes supply mechanics (fixed vs. inflationary) and utility in the ecosystem.| Bitcoin (BTC: fixed 21M supply, store-of-value), Ethereum (ETH: used for gas fees and staking).|
| **Support for Rollups and L2 Solutions** | While rollups (e.g., optimistic or zk-rollups) are L2 scaling tools that batch transactions off-chain and settle on L1, strong L1s provide secure data availability and finality for these. This enables higher TPS without compromising L1 security.| Ethereum dominates rollups (e.g., Arbitrum, Optimism settle on Ethereum); emerging L1s like Polygon (now L1 with zkEVM) natively support rollup-like scaling.|
| **Governance** | Mechanisms for protocol upgrades, often on-chain voting via tokens or off-chain signaling. Affects adaptability to new features.| Ethereum (off-chain EIPs + on-chain voting); Tezos (on-chain baking and proposals).|
| **Interoperability** | Ability to communicate with other chains via bridges or standards, crucial for cross-chain DeFi and data transfer.| Cosmos (IBC protocol for sovereign chains); Polkadot (parachains for shared security).|


