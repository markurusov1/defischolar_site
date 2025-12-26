---
title: Impermanent Loss
weight: 43
---

## Impermanent Loss in Uniswap V3

**Impermanent loss (IL)** is the difference in value between:

1. Holding your tokens in your wallet, and
2. Providing them as liquidity in a Uniswap V3 pool.

It occurs when the price of the two tokens in the pool moves away from the price at which you deposited. The loss is
called “impermanent” because it only becomes real when you withdraw; if the price returns to the original level, the
loss disappears.

### Simple Example (ETH/USDC pool)

- Current price: 1 ETH = $2,000
- You deposit $10,000 total: 2.5 ETH + $5,000 USDC (50/50 value) into a Uniswap V3 position.

**Two scenarios after some time:**

| Scenario                         | Price of ETH | If you had just HODLed (kept tokens)    | Value of your LP position when withdrawn | Impermanent Loss  |
|----------------------------------|--------------|-----------------------------------------|------------------------------------------|-------------------|
| Price stays the same             | $2,000       | $10,000                                 | $10,000                                  | $0                |
| Price rises to $4,000 (ETH 2×)   | $4,000       | 2.5 ETH × $4,000 + $5,000 = **$15,000** | ≈ **$13,416**                            | ≈ **$1,584** loss |
| Price falls to $1,000 (ETH 0.5×) | $1,000       | 2.5 ETH × $1,000 + $5,000 = **$7,500**  | ≈ **$6,881**                             | ≈ **$619** loss   |

In both cases where price moved, your LP position is worth less than simply holding the original tokens would have been.

### Why Uniswap V3 is different

- In V3 you choose a specific price range (e.g., $1,800–$2,200).
- If the market price leaves your range, your position becomes 100% one token (usually the stablecoin when price rises,
  or the volatile token when the price falls).
- Narrow ranges = higher fees when the price stays inside, but much higher IL when price moves out.

**Bottom line:**  
Impermanent loss is the cost of earning trading fees. The more the price moves (and the narrower your range), the larger
the potential IL. Fees collected can offset or exceed the loss in low-volatility or high-volume pools, but in highly
volatile conditions IL often dominates.

Yes, the summary largely holds for **Uniswap V4**, with some nuances.

### Core Mechanism Remains the Same

- **Uniswap V4** retains the same concentrated liquidity model as V3. Liquidity providers select specific price ranges,
  and impermanent loss (IL) arises from the same source: price divergence causing the pool to rebalance tokens,
  resulting in a position worth less than simply holding the deposited tokens.
- The example in the summary (e.g., value loss when ETH price rises or falls) applies identically to standard V4 pools.
- If the price leaves your chosen range, the position shifts to 100% one token, amplifying potential IL in narrow
  ranges—just like in V3.

## Key Differences in V4

- **Hooks** (customizable plugins) allow pool creators to add logic that can **mitigate or hedge IL**, such as:
    - Dynamic fees that adjust based on volatility to better compensate for loss.
    - Automated rebalancing or hedging strategies (e.g., buying options to offset IL).
    - Other custom curves or protections.
- However, these are **optional** and depend on the specific pool. In a basic V4 pool without advanced hooks, IL behaves
  exactly as in V3.
- V4's official documentation confirms concentrated liquidity has the "same core implementation" as V3.
