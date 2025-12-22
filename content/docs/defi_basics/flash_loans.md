---
title: Flash loans
weight: 23
---

### Summary of DeFi Flash Loans

Flash loans are a unique feature in **Decentralized Finance (DeFi)** that allow users to borrow large amounts of cryptocurrency without any collateral. The catch is that the loan must be repaid (plus a small fee, usually around 0.09%) within the same blockchain transaction—typically in seconds.

If repayment doesn't occur, the entire transaction is automatically reversed, making the loan risk-free for the lender. This innovation, popularized by protocols like Aave, enables powerful strategies but also high-risk exploits.

**Key benefits**:
- Access unlimited capital instantly.
- No upfront funds or credit checks needed.

**Main uses**:
- Price arbitrage across exchanges.
- Collateral swaps.
- Debt refinancing.

**Risks**: Failed transactions waste gas fees, and they've been used in major attacks by manipulating prices temporarily.

### Simple Example: Arbitrage

Imagine ETH is trading at $2,000 on DEX A but $2,020 on DEX B (a temporary price difference).

1. You take a flash loan of 100 ETH (worth ~$200,000) from Aave—no collateral needed.
2. Buy 100 ETH cheaply on DEX A using the loaned funds.
   No, wait: actually, to arbitrage, you borrow stablecoins, say USDC.

Better simple version:

- Borrow $1 million USDC via flash loan.
- Swap the $1M USDC for ETH on DEX A (where ETH is cheaper).
- Immediately swap that ETH back to USDC on DEX B (where ETH is more expensive).
- Repay the $1M USDC + tiny fee to Aave.
- Keep the profit (e.g., $10,000 difference).

All this happens in one transaction. If prices align and no profit (or loss), it reverts safely.


Flash loans democratize high-finance strategies but highlight DeFi's wild, permissionless nature!