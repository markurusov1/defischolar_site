---
title: RWAs in DeFi
weight: 22
---

# Real World Assets (RWAs) in DeFi: A Comprehensive Overview

## What Are Real World Assets (RWAs) in DeFi?

Real World Assets (RWAs) are traditional off-chain assets — such as real estate, bonds, commodities (e.g., gold), art, invoices, or carbon credits — that are tokenized on a blockchain. Tokenization converts ownership rights into digital tokens, allowing these assets to be used within decentralized finance (DeFi) protocols for lending, borrowing, trading, and yield generation.

RWAs bridge traditional finance (TradFi) with DeFi, bringing real-world value and stability on-chain while leveraging blockchain's efficiency, transparency, and 24/7 accessibility.

## How RWAs Work in DeFi

1. **Legal Structuring**: The asset is held by an off-chain entity (e.g., Special Purpose Vehicle or SPV).
2. **Tokenization**: Smart contracts mint digital tokens (usually ERC-20 for fractional ownership or ERC-721 for unique assets) representing shares of the underlying asset.
3. **Oracles & Data Feeds**: Services like Chainlink provide real-time pricing and verification (e.g., Net Asset Value updates).
4. **On-Chain Integration**: Tokens are used as collateral, for liquidity provision, or yield farming in protocols like Aave, MakerDAO, Centrifuge, or Ondo Finance.

## Key Benefits

- **Fractional Ownership**: High-value assets become accessible to retail investors.
- **Increased Liquidity**: Illiquid assets (e.g., real estate) can be traded globally and instantly.
- **Stable Yields**: Exposure to real-world returns (e.g., U.S. Treasuries) reduces reliance on volatile crypto assets.
- **Efficiency**: Lower costs and faster settlements compared to traditional markets.
- **Global Access**: Borderless participation, especially for underserved regions.

## Popular Use Cases & Examples

- **U.S. Treasuries**: Ondo Finance (OUSG) tokenizes short-term Treasuries.
- **Real Estate**: RealT (property-specific NFTs), Centrifuge (pooled real estate loans).
- **Commodities**: Pax Gold (PAXG) backed by physical gold.
- **Private Credit**: Goldfinch and Centrifuge for on-chain lending against real-world invoices or loans.
- **Carbon Credits**: Toucan Protocol for tokenized environmental assets.

## Challenges

- Regulatory uncertainty around tokenized securities.
- Reliance on off-chain custodians and oracles (potential centralization risks).
- Legal and operational complexity in linking on-chain tokens to off-chain assets.

## How Token Supply and Network Are Defined

Token issuers follow a structured process to ensure integrity:

1. **Legal Wrapper (SPV/Trust)**: Defines total asset value and exclusivity (one canonical representation).
2. **Token Standard**: Often ERC-3643 (permissioned) or ERC-20/721 with role-based minting controlled by the SPV.
3. **Supply Mechanism**: Minting is tied to audited Net Asset Value (NAV) via oracles; supply = Asset Value ÷ Token Price.
4. **Canonical Network**: Declared in legal documents (commonly Ethereum, Base, Polygon, or dedicated chains like Centrifuge Chain).

## Preventing Duplicate Listings of the Same Asset

Multiple mechanisms ensure one asset isn't tokenized multiple times across chains:

- **Legal Exclusivity Clauses**: SPV agreements prohibit multiple issuances.
- **On-Chain Proof-of-Reserve (PoR)**: Chainlink or similar verifies custody; mismatches flag duplicates.
- **Unique Identifiers**: ERC-3643 ONCHAINID, Centrifuge Pool UUID, or metadata hashes (IPFS + legal document hashes).
- **Public Registries**: Platforms like RWA.xyz list canonical tickers and chains.
- **Bridging Controls**: Cross-chain versions use "lock-and-mint" (wrapped tokens), never creating new underlying supply.

## Outlook

As of late 2025, RWA total value locked has grown significantly, attracting institutional interest. Advances in oracles, standards (e.g., ERC-3643), and regulation are accelerating adoption. RWAs are expected to bring trillions in traditional asset value on-chain, maturing DeFi with greater stability and real-world utility.

---

*This page summarizes key concepts in Real World Assets within Decentralized Finance. For the latest developments, refer to protocols like Ondo Finance, Centrifuge, and resources such as RWA.xyz.*