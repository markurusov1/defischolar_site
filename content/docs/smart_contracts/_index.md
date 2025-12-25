---
title: Smart Contracts
bookCollapseSection: true
weight: 15
---

## What are smart contracts?
{{% hint info %}}
- Smart contracts are programs (code) that run on the blockchain networks 
- Ethereum started it. Solana scaled it. The rest are racing to own DeFi in 2025. 
- Smart contracts execute logic that moves tokens between wallets 
- The execution is automated. Once the contract is started, there’s no stopping or changing it 
- Anyone can create and deploy smart contracts 
- An easy example would be creating a pool for a fantasy football league
{{% /hint %}}

## Fantasy League Pool & Payouts via Smart Contracts

![Fantasy League Pool](/images/smart_contract_pool.jpg "Pool Example")

{{% hint info %}}
#### __Pool Creation__
- Smart contract is __deployed__ with rules: entry fee (e.g., 0.01 ETH), max players, deadline, payout structure (1st: 
  50%, 2nd: 30%, 3rd: 20%)
- Contract __accepts deposits__ — each player sends crypto to the __contract address__ (not a person)
#### __Entry & Commitment__
- Players __submit team rosters__
- Contract __locks funds__ until league ends — no refunds after deadline (enforced by code)
#### __Score Tracking (Oracle Integration)__
- Smart contract pulls __real player__ stats from a trusted Oracle (e.g., Chainlink)
- Oracle is a __third party__ that provides data to smart contracts 
#### __Automatic Payouts__
- At league end, distributePrizes() triggers: first place → 50% of pool, second → 30%, third → 20%
- Funds sent __directly to winners’ wallets — no manual payout, no trust needed__ – this is where the automatic 
  execution 
  of a smart contract guarantees contract enforcement
{{% /hint %}}
