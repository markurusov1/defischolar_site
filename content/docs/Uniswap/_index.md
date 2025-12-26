---
title: Uniswap
bookCollapseSection: true
weight: 40
---

## Overview

### What is Uniswap?

- Uniswap is a decentralized exchange (DEX) protocol that operates as an automated market maker (AMM) on the Ethereum
  blockchain and compatible networks, enabling users to swap cryptocurrencies directly in a permissionless,
  noncustodial manner without relying on centralized intermediaries like traditional exchanges
- At its core, Uniswap allows anyone to create liquidity pools for token pairs by depositing equal values of two assets,
  which traders can then use to execute swaps while liquidity providers (LPs) earn fees proportional to their share of
  the pool—typically ranging from 0.05% to 1% per trade, depending on the pool's fee tier.
- This model democratizes market-making, provides on-chain price discovery, and supports features like concentrated
  liquidity (introduced in v3) for capital-efficient positioning within specific price ranges, as well as
  customizable "hooks" in v4 for advanced functionalities such as dynamic fees or on-chain auctions.

### Origins
The protocol originated in November 2018 when developer Hayden Adams, inspired by a blog post from Ethereum co-founder
Vitalik Buterin on constant-function market makers, launched Uniswap v1 as a proof-of-concept with funding from an
Ethereum Foundation grant. It quickly gained traction in the decentralized finance (DeFi) ecosystem, evolving through
v2 (2020, adding ERC-20 token swaps) and v3 (2021, enhancing efficiency with concentrated liquidity and oracles) to 
v4 (launched in mid-2024, focusing on modularity and gas optimizations). By 2025, Uniswap remains the dominant DEX by 
trading volume, processing billions in daily trades and holding a significant share of DeFi liquidity, while its 
governance token UNI empowers community-driven decisions on protocol upgrades

### Competition

- Uniswap faces competition from other AMM-based DEXs that have forked or built upon its design, including SushiSwap
  (a community-driven fork emphasizing yield farming and governance rewards), Curve Finance (specialized in low-slippage
  stablecoin swaps), Balancer (supporting multi-asset weighted pools for portfolio management), PancakeSwap (a Binance
  Smart Chain alternative with lower fees and gaming elements), and aggregators like 1inch (which routes trades across
  multiple DEXs for optimal pricing).
- These rivals often differentiate through niche focuses, such as stable assets or cross-chain compatibility, but
  Uniswap's first-mover advantage, security track record, and ongoing innovations continue to solidify its leadership in
  the space.
  ere is a comparison of **Uniswap** and its top 3 competitors (SushiSwap, PancakeSwap, and Curve Finance) based on the latest available data as of late December 2025. Metrics are approximate and aggregated across chains/deployments where applicable; trading volume refers to recent 24h figures, TVL reflects protocol-wide estimates, and number of currency pairs varies by version/chain (permissionless DEXs often have thousands of possible pairs via user-created pools).

| DEX Name      | Number of Currency Pairs Traded | TVL (approx.)     | Trade Volume (24h approx.) |
|---------------|---------------------------------|-------------------|----------------------------|
| Uniswap      | 1,000–2,000+ (e.g., ~1,710 on V3 Ethereum; higher across chains) | ~$4–5 billion    | $1–2 billion (dominant on Ethereum/Arbitrum/Base) |
| SushiSwap    | 300–1,000 (e.g., ~315–949 across deployments) | <$1 billion      | $50–200 million   |
| PancakeSwap  | 1,000–3,000+ (e.g., ~1,305 on V3 BSC; higher combined) | ~$2–3 billion    | $1–2 billion (leads on BNB Chain) |
| Curve Finance| 100–500 (specialized pools, e.g., ~474 on Ethereum) | ~$1.8–2.3 billion| $300–600 million (strong in stablecoin swaps) |

### Reading list

- [V3 whitepaper](https://uniswap.org/whitepaper-v3.pdf)
- [V3 blog](https://blog.uniswap.org/uniswap-v3)