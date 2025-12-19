
# Blockchain Basics: Intro and Concepts

- We will start with simple examples to introduce the technology and the way it works
- Then we'll explain what the important concepts are – what makes the technology so powerful
- ...and only then we'll get into complex stuff required to understand what goes on under the hood

__Consider an example:__
{{< card >}}
You have a regular account in a bank (like Chase) and Venmo app. A friend is asking you to pay him in Bitcoin. How would this work? 
{{< /card >}}
(_jump ahead to the details of a [sample transaction:](../sample_transaction)_)

## Wallets
{{% hint info %}}
- Remember how Bitcoin is a network?
- All the kids with their Venmo apps are now nodes in that network
- Specifically, these nodes are known as digital wallets
- __Wallets are a lot like bank accounts__
    - You keep your money (digital currency, tokens) in them
    - You send/receive tokens from/into them
- The network knows the wallets by their IDs (just a long text string)
  {{% /hint %}}
## A Word on Exchanges
{{% hint success %}}
- In real markets and cryptocurrency markets, exchanges are companies that perform buying and selling of stocks or currencies
- If you saw a "Currency Exchange" kiosk at an airport – that's a little exchange
- It holds cash in many currencies
- It buys currency from you at a lower rate and then sells it to someone else at a higher rate and makes profit
- Stock markets do this as well, just at a much higher scale
  {{% /hint %}}
## Buying Bitcoin into Venmo

>- Venmo holds your wallet and Venmo is connected to your bank account
>- Venmo also acts as an exchange broker
>- The first thing you do in the app is press "Buy Crypto"
>- ...and then Venmo will do the following:
>    - Connect to one of many exchanges operating in the Bitcoin network (Paxos)
>    - Conduct the transaction on your behalf
>        - Find another wallet (through an exchange) that transfers its Bitcoins to your wallet
>        - Take some dollars from your bank account and send to that exchange (which will later send it to whoever 
           > sold bitcoins to you)

![Venmo transaction](/images/bitcoin_venmo.jpg "Transaction")

## Can It Be Done Differently?

>- Yes, it can
>- When cryptocurrencies just started, people used USB-sticks with their digital wallets and had to know their counterparties (people to sell to or buy from)
>    - Knowing a counterparty is knowing their wallet’s network address
>- This was a pure __peer-to-peer__ setup – no exchanges, no banks
>- It guaranteed anonymity, which is helpful for all kinds of shady activity
>    - The only information that was public is that a wallet with _ID1_ moved some coins to a wallet with _ID2_
>- This option is still available, but most people use bank-linked apps and trade through exchanges – because it is much easier than going hard-core
>- Digital wallets managed by services like Venmo or other digital currency exchanges are called __“custodial”__ 
   > wallets 
   > – meaning someone has custody of your stuff

## Summary
{{% hint danger %}}
- Blockchain is a P2P network technology
- Bitcoin is just one of many blockchain networks
- Nodes are digital wallets
- In the “pure” model, it is a decentralized anonymous system
- In reality, most people use centrally owned services (banks, apps, exchanges) to transact in Bitcoin
 {{% /hint %}}