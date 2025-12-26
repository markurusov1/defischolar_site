---
title: Collateralized Lending
weight: 25
---

### What is Collateralized Lending in DeFi?

Collateralized lending is a core mechanism in Decentralized Finance (DeFi) that allows users to borrow cryptocurrency assets by locking up other crypto as collateral, all without traditional intermediaries like banks. Unlike centralized lending (e.g., a bank loan requiring credit checks), DeFi lending is permissionless, trustless, and executed via smart contracts on blockchains like Ethereum or Solana. It's "over-collateralized," meaning you must deposit more value in collateral than the loan amount to mitigate default risks in volatile crypto markets.

This concept draws from traditional finance but leverages blockchain for transparency and automation. Protocols like Aave, Compound, and MakerDAO popularized it, enabling users to lend idle assets for interest or borrow against holdings to access liquidity without selling.

#### How It Works: Step-by-Step
1. **Deposit Collateral**: You supply crypto assets (e.g., ETH, stablecoins like USDC, or tokenized real-world assets like RWAs) into a lending protocol's smart contract pool. These become your collateral, earning interest if others borrow against the pool.

2. **Borrow Funds**: Using your collateral, you can borrow other assets up to a certain **loan-to-value (LTV) ratio**—typically 50-80% of the collateral's value. For example:
    - Deposit $1,000 worth of ETH as collateral.
    - Borrow up to $600 in USDC (at 60% LTV).
    - The protocol calculates this in real-time based on oracle-fed prices (e.g., from Chainlink) to reflect market values.

3. **Interest and Repayment**: Borrowers pay variable or fixed interest rates, which accrue to lenders. You repay the loan plus interest anytime, retrieving your collateral. No fixed terms—it's flexible.

4. **Liquidation Mechanism**: To protect lenders, if your collateral's value drops (e.g., ETH price crashes) and the LTV exceeds a threshold (e.g., 80%), the protocol automatically liquidates part of your collateral. Liquidators (other users) buy it at a discount (e.g., 5% bonus) to repay the loan, ensuring the system stays solvent.

The math behind it often uses formulas like the constant product for pools (inspired by AMMs like Uniswap's x*y=k), but for lending, it's about health factors:  
**Health Factor = (Collateral Value × Liquidation Threshold) / Borrowed Value**  
If this falls below 1, liquidation triggers.

#### Key Examples in Practice
- **Aave or Compound**: Users deposit ETH to borrow stablecoins for yield farming or trading. In 2025, with RWA trends, you might collateralize tokenized real estate or even simulated school assets (like a virtual NFT backpack) for educational demos.
- **MakerDAO**: Borrow DAI (a stablecoin) against ETH or other cryptos, backing the entire ecosystem with over-collateralized vaults.

#### Benefits
- **Accessibility**: No KYC or credit score needed—anyone with a wallet can participate.
- **Efficiency**: Earn yields on collateral (e.g., 2-5% APY) while borrowing.
- **Composability**: Borrowed funds can be used in other DeFi apps, like providing liquidity for extra rewards.
- **Decentralized Credit**: Mirrors 2025 innovations in protocols decentralizing credit markets, turning everyday assets into lendable tokens.

#### Risks and Considerations
- **Volatility and Liquidation**: Crypto price swings can wipe out collateral quickly—e.g., a 30% ETH drop could trigger liquidation, leading to losses.
- **Impermanent Loss/Smart Contract Risks**: If using borrowed funds in pools, you face additional risks like divergence loss; bugs in code can lead to exploits.
- **Over-Collateralization Penalty**: Ties up more capital than traditional loans (e.g., 150%+ collateral required).
- **Regulatory Evolution**: While simulated versions (e.g., in edtech like DeFi Scholar) avoid hurdles, real DeFi lending faces growing scrutiny for stability.
### Top DeFi Lending Protocols

Based on data from CoinGecko as of June 2025, here is a table of the top 10 DeFi lending protocols ranked by Total Value Locked (TVL). For the most current rankings (as of November 2025), DefiLlama shows the top 5 as Aave ($32.029B), Morpho ($7.334B), SparkLend ($4.93B), JustLend ($4.217B), and Maple ($2.861B). The full top 20 includes additional protocols like Kamino Finance, Compound, Venus, Euler, and Fluid with TVL ranging from $0.3B to $3.6B, but detailed current TVL for ranks 11–20 varies by source and market conditions—recommend checking DefiLlama for real-time updates. TVL can fluctuate significantly due to market volatility.

| Rank | Protocol       | TVL          | Primary Chain(s)              | Brief Description |
|------|----------------|--------------|-------------------------------|-------------------|
| 1    | Aave          | $43.8B      | Ethereum, Arbitrum, Optimism, others | Cornerstone of DeFi; supports wide assets, RWA integration via Horizon; governed by AAVE token; overcollateralized loans with asset-specific LTVs (e.g., high for ETH). |
| 2    | Morpho        | $6.3B       | Ethereum, Base (EVM multichain) | Non-custodial lending with zero borrower fees and optimized yields via Vaults; supports 70+ assets; LTV up to 86%; governed by MORPHO token. |
| 3    | Spark         | $5B         | Ethereum, Gnosis             | Part of Sky Ecosystem (ex-Maker); includes Savings, SparkLend, Liquidity Layer; supports ETH, WBTC, LSTs, stablecoins; LTV up to 82% for ETH; based on Aave code; future SPK governance. |
| 4    | Kamino Finance| $3.6B       | Solana                       | Largest on Solana; offers lending, liquidity vaults, leveraged Multiply, DEX integration; yield-bearing Ktokens as collateral; high thresholds (75% SOL, 90% stables); governed by KMNO. |
| 5    | Compound      | $3.6B       | Ethereum, Polygon, Arbitrum, Base, others (EVM) | Veteran protocol; cTokens accrue interest; risk management via Comptroller; LTV up to 90% via COMP governance; revenue from borrower reserves. |
| 6    | Venus         | $2.3B       | BNB Chain, Ethereum, L2s     | Combines lending with VAI stablecoin minting; Compound/Maker fork; 73+ assets; collateral factors 50–82.5% LTV; 10% liquidation bonus; governed by XVS. |
| 7    | Euler         | $2B         | EVM networks                 | Modular with specialized vaults for risk levels; earn rewards on supplies while borrowing; flexible LTVs by vault; proportional liquidation discounts; governed by EUL DAO. |
| 8    | Fluid         | $2B         | Ethereum, Base, Arbitrum     | Capital-efficient with Liquidity Layer and dual interface; "Smart Collateral" earns DEX fees; high LTV (95% wstETH/ETH); low penalties (0.1%); no fees; governed by FLUID. |
| 9    | Suilend       | $741M       | Sui                          | Leading on Sui; lending + DEX + bridge; 17+ assets; LTV up to 77% stables; 0% borrow fees; 5% liquidation bonus; governed by SEND DAO. |
| 10   | Save Finance (ex-Solend) | $284M | Solana                       | Major Solana lender; no repayment deadlines; 129+ assets incl. memecoins; 0.1% borrow fee; 5% liquidation bonus; governed by SAVE token. |
