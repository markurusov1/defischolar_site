---
Title: Margin Loans
weight: 32
---

## Margin Loans

Margin loans allow traders to borrow assets against collateral to increase their position size (leverage). In DeFi, these loans are provided through decentralized lending protocols using smart contracts.
Traders deposit collateral (e.g., ETH) and borrow another asset (e.g., USDC) to trade with leverage (2x, 5x, 10x, etc.).
## How Margin Loans Work

- **Collateral Deposit:**
Deposit assets into a lending protocol. The loan-to-value (LTV) ratio determines the maximum borrow amount (e.g., 75% LTV means 100 collateral allows borrowing 75).
- **Borrowing:**
Select the asset and amount to borrow. Interest accrues continuously based on supply and demand.
- **Leveraged Trading:**
Use borrowed funds to open larger positions in spot, perpetuals, or options markets.
- **Health Factor / Collateral Ratio:**
The protocol monitors the collateral-to-debt ratio. If it falls below a threshold (e.g., 150%), the position becomes eligible for liquidation.
- **Liquidation:**
If undercollateralized, the collateral is sold to repay the loan. Liquidators usually receive a fee.

## Key Metrics

- **Loan-to-Value (LTV):** Maximum borrow amount relative to collateral.
- **Liquidation Threshold:** Collateral ratio below which liquidation occurs.
- **Interest Rates:** Variable rates determined by utilization (borrowed vs. available liquidity).

## Benefits

- **Amplified returns** — Leverage magnifies gains.
- **Capital efficiency** — Trade larger positions with less capital.
- **No credit checks** — Permissionless and instant.

## Risks

- **Liquidation risk** — Volatility can trigger forced sales.
- **Interest costs** — Rates can spike during high demand.
- **Market manipulation** — Oracle price feeds must be reliable.

## Best Practices

- Maintain a high collateral ratio (e.g., 200%+).
- Use stop-loss orders to manage risk.
- Monitor positions during volatile periods.
- Borrow conservatively and understand liquidation mechanics.

Margin loans enable leveraged trading in a decentralized manner but require careful risk management.

## Example

### Simple, No-Hedges Version
(Exactly how a pure cash equity market maker operates on a normal day with only stock + prime broker loan)

**Stock:** TSLA  
**Date:** A regular day in 2025, TSLA around $420  
**Market maker:** “Northstar Trading” (small 8-person shop)  
**Prime broker:** Citadel Securities or Jane Street (they also act as PB for smaller firms)

#### Start of Day (09:30 ET)
Northstar is flat: 0 shares, 0 cash borrowed.

They put up the tightest quote on the tape:  
Bid $420.00 × 20,000 shares  
Ask $420.01 × 20,000 shares  
(1-cent wide – they want all the flow)

#### 09:35 – Retail buying frenzy starts
In the first 15 minutes, retail keeps hitting their offer.  
Northstar sells 500,000 shares short at an average price of $420.15

Position now:  
–500,000 TSLA (short)  
Cash generated: +$210,075,000 (credit balance)

Prime broker instantly lends them the $210 million worth of stock to be short.  
Because it’s a pure portfolio margin on a single liquid stock, the PB only requires about 12–15% margin on a well-behaved day.

Margin requirement: ≈ $28 million  
Northstar’s own capital used: $28 million  
Effective leverage: ≈ 7.5× (they control $210m of inventory with $28m of their own money)

#### 10:30 – Big seller appears (institution unloading)
The same institution that was buying yesterday is now selling 1.2 million shares.  
They lean on Northstar’s bid.

Northstar buys aggressively: +900,000 shares at an average $ 418.80

Position flips in 8 minutes:  
From –500k → now +400,000 net long TSLA  
Average long price: $418.80  
Current market price: $418.50 (stock is down $1.50 on the selling pressure)

Cash borrowed from PB now: ≈ $167 million (to finance the long shares)  
Margin requirement jumps to ≈ $52 million (still only ~15–18% because TSLA is liquid and volatility is normal)

Leverage at this moment: still ~6–7×

#### 13:00 – Rebound
Elon tweets something; the stock rips from $418 to $424 in 30 minutes.

Northstar is long 400,000 shares → an unrealized gain of ~$6/share = +$2.4 million in half an hour.

They calmly sell their entire long inventory into the strength between $423.50 – $424.20, flattening out again.

#### End of Day (16:00 ET)
Total shares traded by Northstar: 2.6 million round-trip  
Average edge captured: $0.011 per share  
Gross profit from the bid-ask spread + inventory rebounds: ≈ $58,000 realized + $2.38 million from the well-timed long inventory = ~$2.44 million total P&L

Peak borrowing from prime broker during the day: $192 million  
Peak own capital at risk: $58 million  
Highest leverage hit: ~7.5×  
Margin calls / restrictions: zero (the PB system simply raised the requirement gradually; Northstar always had excess margin)

This is real life for dozens of small-to-mid-sized equity market makers every single day — no options, no futures, just stock + smart portfolio-margin loan from the prime broker that understands the true risk second-by-second.

In DeFi today, the same person providing liquidity on a TSLA/wETH pool would have been liquidated twice already (once when it dropped to $418, once on the way back up when they went out of range), even though their actual economic risk was tiny, and they made $2.4 million.
