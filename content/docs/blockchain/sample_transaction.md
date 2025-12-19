# A Step-by-Step Transaction: Mark to Evan

To understand how money moves in DeFi, let's look at a simple scenario where Mark sends 3 Bitcoins to Evan.

## Step 1: Creation and Broadcast

**Signing**: Mark signs the transaction with his wallet’s private key to prove ownership of the coins.
**Mempool**: The transaction enters a "mempool," a digital waiting room for unconfirmed transactions.
**Visibility**: While all nodes can see the transaction, it isn't permanent yet; miners must listen for these broadcasts to prevent double-spending.

## Step 2: Collecting into a Block

**Bookkeeping**: Miners gather thousands of pending transactions into a "block," which acts like a single page in a ledger.
**Metadata**: Each block contains a timestamp and a reference to the previous block, forming the "chain".
**Incentive**: Miners are paid in Bitcoin for this work, though it requires significant electricity.

## Step 3: Solving the Cryptographic Puzzle (Proof of Work)

**The Puzzle**: To add a block, miners must solve a hard math problem by adjusting a number called a "nonce" until the block's hash meets specific network requirements.
**Proof of Work**: This process is called "proof-of-work".
**Security**: This trial-and-error process (trillions of attempts) makes it too expensive for bad actors to attack the network.
**Timing**: The network adjusts difficulty every two weeks to ensure a new block is found roughly every 10 minutes.

## Step 4: Verification and Consensus

**Broadcasting**: The first miner to solve the puzzle shares their block with the network.
**Consensus**: Other nodes verify that the hash is valid and no coins were double-spent.
**Finality**: Once consensus is reached, the block is added. Evan receives his 3 Bitcoins, and the record becomes immutable.

## Step 5: Rewards and Repetition

**Block Reward**: The winning miner currently receives ~3.125 Bitcoins (this "halves" every four years).
**Fees**: Miners also collect small transaction fees paid by users like Mark.
**Supply Cap**: This system ensures that only 21 million Bitcoins will ever exist, preventing uncontrolled inflation.