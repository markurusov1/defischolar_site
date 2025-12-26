---
title: Multiple Pools
weight: 45
---

### Section 3: Architectural Changes (Uniswap v3 Whitepaper)

Uniswap v3 introduces several architectural redesigns compared to v1 and v2. Some changes are required to support 
**concentrated liquidity** (custom price ranges per position), while others are independent enhancements for flexibility and modularity. 

#### 3.1 Multiple Pools per Pair
- **v1/v2 Limitation**: Only one pool per token pair (e.g., ETH/USDC), with a fixed **0.30%** swap fee for all trades.
    - This fee is often too high for low-volatility pairs (e.g., stablecoins like USDC/DAI).
    - Too low for high-volatility or exotic pairs (needing higher LP compensation).
- **v3 Solution**: Multiple pools per token pair, each with a different **swap fee tier**.
    - All pools created via the same **factory contract**.
    - Initial fee tiers: **0.05%** (stablecoins), **0.30%** (default), **1.00%** (volatile pairs).
    - UNI governance can add new tiers later.
- **Benefits**:
    - LPs and traders choose the optimal pool for risk/reward.
    - Avoids liquidity fragmentation while allowing fee customization.

#### 3.2 Non-Fungible Liquidity
Concentrated liquidity makes positions **unique** (custom ranges + separate fees), so traditional fungible LP tokens are impossible.

##### 3.2.1 Non-Compounding Fees
- **v1/v2 Behavior**: Swap fees automatically added back to the pool as more liquidity → passive growth and **compounding**.
- **v3 Behavior**: Fees stored **separately** as the **actual tokens** paid (not reinvested automatically).
    - LPs must manually **claim** and reinvest fees if desired.
- **Reason**: Custom positions prevent automatic reinvestment without losing precision.

##### 3.2.2 Removal of Native Liquidity Tokens
- **v1/v2 Behavior**: Pool contract **is** an ERC-20 token (LP shares minted/burned on deposit/withdraw).
    - Convenient but violates the "core vs. periphery" design (core should be minimal; extras in external contracts).
    - Discourages third-party innovations (e.g., better wrappers).
- **v3 Behavior**:
    - **No ERC-20** in the core pool contract.
    - Liquidity tracked **internally** via position data.
    - **Periphery contracts** (built by anyone) can wrap positions:
        - ERC-20 wrappers for fungibility (with custom fee handling/reinvestment).
        - ERC-721 NFTs for individual positions (including accrued fees) → enables trading/lending.

| Feature                  | Uniswap v1/v2                          | Uniswap v3                                      |
|--------------------------|----------------------------------------|-------------------------------------------------|
| Pools per Pair           | 1 (fixed 0.30% fee)                    | Multiple (variable fees: 0.05%, 0.30%, 1%+)     |
| Fee Compounding          | Automatic (reinvested as liquidity)    | Manual (fees as raw tokens)                     |
| LP Token Standard        | Native ERC-20 in core                  | None in core; periphery ERC-20/ERC-721 optional |
| Position Fungibility     | Fully fungible                         | Non-fungible (custom ranges)                    |

**Overall Impact**: These changes enable concentrated liquidity, give LPs more control, keep the core lean, and encourage ecosystem innovation (e.g., vaults, NFT-based DeFi composability)