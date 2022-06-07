import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import Post from 'App/Models/Post'

export default class PostSeeder extends BaseSeeder {
  public async run() {
    await Post.createMany([
      {
        title:
          'Blac Chyna Training for Celebrity Boxing Match With Woman Who Fought Kim Kardashian',
        content:
          'Just a week before she enters the ring with Instagram influencer Alysia Magen, Blac Chyna is preparing for the fight by training with Tamara Frapasella-Fortune, who famously fought Kim Kardashian in … [+1740 chars]',
      },
      {
        title:
          'Dogecoin (DOGE) Co-Creator Says Web3 Has Zero Value, Warns NFTs Are a Way To Get New Suckers Into Crypto: Report',
        content:
          'The co-creator of Dogecoin (DOGE) is reportedly dismissing the importance of Web 3.0 and non-fungible tokens (NFTs).\r\nAccording to a new report by the Sydney Morning Herald, Palmer says that Web 3.0,… [+1904 chars]',
      },

      {
        title:
          'Bored Ape Yacht Club and Otherside Metaverse Discord servers reportedly hacked | #socialmedia | #cybersecurity | #infosecurity | #hacker',
        content:
          'The Bored Ape Yacht Club was reportedly hacked, again, by a phishing scam that allowed thieves to steal more than a quarter million dollars worth of NFTs, a month after the group lost $3million from … [+3558 chars]',
      },
      {
        title:
          'Crypto scams conned thousands of people out of over $1 billion since 2021, the most of any type of currency, according to new FTC report',
        content:
          'More than 46,000 people reported losing over $1 billion in cryptocurrency scams since the start of 2021, according to the Federal Trade Commission. \r\nCrypto accounted for about one out of every four … [+1452 chars]',
      },
      {
        title: "Is Solana a 'buy' with SOL price at 10-month lows and down 85% from its peak?",
        content:
          "Solana's (SOL) price dropped on June 3, bringing its net paper losses down to 85% seven months after topping out above $260.\r\nSOL price fell by more than 6.5% intraday to $35.68, after failing to reb… [+3625 chars]",
      },
      {
        title: 'CBDCs Will ‘Kill’ Crypto, Reserve Bank of India Governor Says',
        content:
          'Reserve Bank of India Deputy Governor T. Rabi Sankar says with complete confidence that digital bank assets or CBDCs will ultimately pull the plug on cryptocurrencies such as Bitcoin, Ethereum, and o… [+2628 chars]',
      },

      {
        title:
          'Tezos: Is there a shorting opportunity on the cards as XTZ fails to defend $2 support',
        content:
          'Disclaimer: The information presented does not constitute financial, investment, trading, or other types of advice and is solely the opinion of the writer.\r\nTezos has been bearish on higher timeframe… [+2895 chars]',
      },

      {
        title: 'Better Bitcoin Stock: Riot Blockchain vs. Marathon Digital Holdings',
        content:
          'Riot Blockchain(RIOT -9.61%) and Marathon Digital Holdings (MARA -5.78%) are both Bitcoin(BTC 0.74%) mining companies. Both originally operated completely different businesses before pivoting toward … [+4944 chars]',
      },
      {
        title: 'Cardano Records 369% Year-to-Date Increase in Daily On-Chain Transfer Volumes',
        content:
          'Disclaimer: The opinion expressed here is not investment advice it is provided for informational purposes only. It does not necessarily reflect the opinion of U.Today. Every investment and all tradin… [+2437 chars]',
      },
      {
        title: 'Arthur Hayes Says Ethereum (ETH) Could Reach $10K Level By The End Of Year',
        content:
          'Arthur Hayes, the youngest crypto billionaire of American Africa and the former CEO and co-founder of the derivatives platform BitMEX, predicted Ethereum could hit $10,000 by the end of 2022. Notably… [+2838 chars]',
      },
      {
        title: 'FTC Report Says Victims Of Crypto Scams Have Lost Over $1 Billion Since 2021',
        content:
          'Internet fraud is nothing new, but it appears to have found new life in the crypto space. A new report from the Federal Trade Commission revealed that at least 46000 people had lost money to crypto s… [+2548 chars]',
      },
      {
        title:
          'Ethereum’s Groundbreaking Merge Is Finally Around The Corner — ETH Due For An Explosive Move',
        content:
          '<ul><li>Ethereums transition to Proof-of-Stake is one step closer and the experts are excited over the effects it will have on the network.</li><li>The Ropsten testnet merge was a giant leap towards … [+3005 chars]',
      },
      {
        title:
          'Eyes on New York Governor Kathy Hochul After State Lawmakers Pass Moratorium on Proof-of-Work Crypto Mining',
        content:
          'A bill that would create a moratorium on proof-of-work crypto mining has been approved by the New York State Senate and is now on its way to Governor Kathy Hochuls desk to be potentially signed into … [+1494 chars]',
      },
      {
        title: "Bitcoin long-term hodlers begin 'distribution' which preceded BTC price bottoms",
        content:
          "Bitcoin (BTC) stayed wedged in a tight range on June 4 as traders' demands for a new macro low persisted.\r\nBTC/USD 1-hour candle chart (Bitstamp). Source: TradingView\r\nLong-term holders begin 'distri… [+3928 chars]",
      },

      {
        title: "Bitcoin Mining Might Be Banned in New York, Here's Why",
        content:
          'New York might become the first-ever U.S. state to impose a ban on cryptocurrency mining due to environmental concerns. However, crypto analysts and enthusiasts think that the carbon footprint of Bit… [+2231 chars]',
      },
      {
        title: 'Bitcoin [BTC] holders should know this before exiting their position',
        content:
          'With Bitcoin [BTC] rising above the $30K level at the beginning of June, HODLers may see this as a time to rejoice. However, at press time, BTC was trading below the $30K level and stood at $29,648 d… [+2749 chars]',
      },
      {
        title: 'Crypto Winter Layoffs Hit Hard—But Won’t Kill the Industry',
        content:
          "If you don't think we're in Crypto Winter yet, consider these headlines from the week: Gemini laid off 10% of its staff; Coinbase instituted a hiring freeze and rescinded accepted job offers; Mexico'… [+3220 chars]",
      },

      {
        title: 'Japan’s Parliament Introduces Framework For Stablecoins To Protect Investors',
        content:
          'According to Bloomberg, Japan’s parliament enacted a legislative framework surrounding stablecoins pegged to the yen or another fiat currency on Friday. This is a historic move.\r\nThe bill makes it cl… [+2696 chars]',
      },
      {
        title: "BTC/USD Given Below 30000 Again: Sally Ho's Technical Analysis 5 June 2022 BTC",
        content:
          'Bitcoin (BTC/USD) continued to suffer from negative technical sentiment early in the Asian session as the pair remained on the defensive after encountering selling pressure around the 29868 area foll… [+2509 chars]',
      },
    ])
  }
}
