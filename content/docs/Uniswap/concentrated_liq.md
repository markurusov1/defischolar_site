---
title: Concentrated Liquidity
weight: 44
---

### Example Illustration of Concentrated Liquidity in Uniswap v3 (BTC/ETH Pair)

Based on Section 2 of the Uniswap v3 whitepaper ("Concentrated Liquidity"), this is a simplified example using a 
BTC/ETH pool, where the price *p* is quoted as ETH per BTC (i.e., how many ETH are needed to buy 1 BTC; BTC is asset 
X, ETH is asset Y). This follows the paper's math for virtual and real reserves, position solvency within ranges, and how positions activate/deactivate as price moves. 

To keep calculations exact and illustrative, we'll assume:
- Each LP provides liquidity *L* = 1000 (a measure of position size/depth, as defined in the paper where *L* = √*k* for the virtual constant product curve).
- Positions use price ranges with perfect squares for clean math (e.g., 1, 4, 9, 16, 25).
- Swap fee tier = 0.3% (as mentioned in the paper; fees are paid on input amount and accrued to active positions).
- Initial price *p* = 9 ETH per BTC (imaginary for simplicity; real-world BTC/ETH is ~20, but this doesn't change the mechanics).
- A large price movement upward (BTC appreciates vs. ETH) caused by traders buying BTC (inputting ETH, outputting BTC).
- Positions:
    - **LP1 (close to current price)**: Range [4, 16] ETH per BTC. This is narrow around the initial price of 9.
    - **LP2 (deeper in the book, lower prices)**: Range [1, 4] ETH per BTC. Far below the initial price (inactive initially).
    - **LP3 (deeper in the book, higher prices)**: Range [16, 25] ETH per BTC. Far above the initial price (inactive initially).
- Only LP1 is active initially (since 4 ≤ 9 ≤ 16). LP2 and LP3 are inactive and hold only one asset each.
- We'll simulate the price movement via **two transactions** (swaps) that cross ranges: one moving price from 9 to 16 (deactivating LP1), and another from 16 to 20 (activating LP3). This shows deactivation/activation. Swaps are computed segment-by-segment when crossing ranges, per the paper's concentrated liquidity model.

Numbers are rounded to two decimals for readability (exact values from simulation).

#### Initial State (Before Any Transactions)
- **Current price**: 9 ETH per BTC.
- **Pool reserves**: 133.33 BTC, 2000 ETH.
- **Active positions**: Only LP1 (provides all trading liquidity).
- **Position details** (size *L*, range, real reserves held; inactive positions hold single-asset reserves but don't contribute to trading):
  | LP   | L (Position Size) | Range [p_a, p_b] | Real Reserves (BTC) | Real Reserves (ETH) | Status      |
  |------|-------------------|------------------|----------------------|---------------------|-------------|
  | LP1  | 1000              | [4, 16]         | 83.33                | 1000                | Active      |
  | LP2  | 1000              | [1, 4]          | 0                    | 1000                | Inactive    |
  | LP3  | 1000              | [16, 25]        | 50                   | 0                   | Inactive    |
- **Notes**: Real reserves follow Equation 2.2 from the paper. Total pool reserves sum all positions (including inactive). The spot price is determined only by active positions' virtual reserves (here, LP1's virtual curve gives exactly p=9). Fees paid: N/A (no transaction yet).

#### Transaction 1: Swap ETH for BTC to Move Price from 9 to 16
- **Description**: A trader inputs ETH to buy BTC, moving the price up to the upper bound of LP1's range (16 ETH per BTC). This uses only LP1's liquidity (as it's the only active position). Once the price hits 16, LP1 deactivates (its reserves shift to 100% ETH, per the paper—it can no longer support upward trades).
- **Input**: 1003.01 ETH (gross; trader pays this to the pool).
- **Output**: 83.33 BTC.
- **Fees paid**: 3.01 ETH (0.3% of input; accrued to LP1 as it was active during the trade).
- **New price**: 16 ETH per BTC.
- **New pool reserves**: 50 BTC, 3003.01 ETH.
- **New position details** (real reserves are base formula values; accrued fees are extra claimable by LPs but remain in pool reserves):
  | LP   | L (Position Size) | Range [p_a, p_b] | Real Reserves (BTC) | Real Reserves (ETH) | Status               |
  |------|-------------------|------------------|----------------------|---------------------|----------------------|
  | LP1  | 1000              | [4, 16]         | 0                    | 2000 (+3.01 fees)  | Inactive (deactivated) |
  | LP2  | 1000              | [1, 4]          | 0                    | 1000                | Inactive             |
  | LP3  | 1000              | [16, 25]        | 50                   | 0                   | Inactive (but activates at 16 for further upward moves) |
- **Notes**: LP1 deactivated as price exited its range upward (reserves now 100% ETH, matching paper's description). Total pool ETH includes the 3.01 fees. LP2 remains inactive (price moved further away). LP3 is now at its lower bound and will activate for the next upward trade.

#### Transaction 2: Swap ETH for BTC to Move Price from 16 to 20
- **Description**: Another trader (or continuation) inputs ETH to buy BTC, moving price to 20 ETH per BTC. This uses LP3's liquidity (activated at 16). LP1 remains inactive.
- **Input**: 473.56 ETH (gross; trader pays this to the pool).
- **Output**: 26.39 BTC.
- **Fees paid**: 1.42 ETH (0.3% of input; accrued to LP3 as it was active during the trade).
- **New price**: 20 ETH per BTC.
- **New pool reserves**: 23.61 BTC, 3476.57 ETH.
- **New position details** (real reserves are base formula values; accrued fees are extra claimable by LPs but remain in pool reserves):
  | LP   | L (Position Size) | Range [p_a, p_b] | Real Reserves (BTC) | Real Reserves (ETH) | Status               |
  |------|-------------------|------------------|----------------------|---------------------|----------------------|
  | LP1  | 1000              | [4, 16]         | 0                    | 2000 (+3.01 fees)  | Inactive             |
  | LP2  | 1000              | [1, 4]          | 0                    | 1000                | Inactive             |
  | LP3  | 1000              | [16, 25]        | 23.61                | 472.14 (+1.42 fees)| Active (activated)   |
- **Notes**: LP3 activated as price entered its range (providing the virtual curve for trading). LP1 stayed inactive (price is now outside [4,16]). LP2 remained inactive (price is even further above its range). Total pool ETH includes cumulative fees (4.43 ETH total across transactions). If price reversed downward, LP3 could deactivate, and LP1 could reactivate.

This example demonstrates the paper's key concepts: LPs concentrate liquidity in custom ranges for efficiency, positions activate/deactivate based on current price (allowing market-driven allocation), and inactive positions hold single assets without contributing to trades. In a real BTC/ETH pool, similar dynamics apply, but with discrete ticks and real prices (e.g., around 20 ETH per BTC). If the price moved downward instead, it could deactivate LP1 and potentially activate LP2. For more details or variations, see Equations 2.1–2.2 and Figures 1–3 in the paper.