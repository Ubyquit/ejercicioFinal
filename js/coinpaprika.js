( async () => {
    const cp = require( 'coinpaprika-js' );
    
    // Get market overview data
    console.log( await cp.global() );
    
    // List coins
    console.log( await cp.coins() );
    
    // Get coin by ID
    console.log( await cp.coin("btc-bitcoin") );
    
    // Get 24h OHLC candle (USD,BTC)
    console.log( await cp.candle() );
    
    // Get Today's OHLC candle: rolls over at 23:59:59 (USD,BTC)
    console.log( await cp.today() );
    
    // Get tickers for all coins (USD,BTC,ETH)
    console.log( await cp.tickers() );
    
    // Get ticker information for a specific coin (USD,BTC,ETH)
    console.log( await cp.ticker("btc-bitcoin", { quotes: "USD,BTC,ETH" }) );
    
    // Get historical ticker information for a specific coin (USD,BTC,ETH)
    console.log( await cp.historical("btc-bitcoin", "2019-01-20") );
    
    // Get historical OHLCV information for a specific coin (USD,BTC)
    console.log( await cp.candles("btc-bitcoin", "2019-01-01", { limit: 366 }) );
    
    // List exchanges (USD,BTC,ETH,PLN)
    console.log( await cp.exchangeList() );
    
    // Get exchange by ID (USD,BTC)
    console.log( await cp.exchange("binance") );
    
    // Get markets by exchange ID (USD,BTC,ETH,PLN)
    console.log( await cp.exchangeMarkets("binance") );
    
    // Get markets by coin ID (USD,BTC,ETH,PLN)
    console.log( await cp.markets("btc-bitcoin") );
    
    // Get exchanges by coin ID
    console.log( await cp.exchanges("btc-bitcoin") );
    
    // Get events by coin ID
    console.log( await cp.events("btc-bitcoin") );
    
    // Get tweets by coin ID
    console.log( await cp.twitter("btc-bitcoin") );
    
    // Get person by ID
    console.log( await cp.people("vitalik-buterin") );
    
    // List tags
    console.log( await cp.tags("coins,icos") );
    
    // Get tag by ID
    console.log( await cp.tag("blockchain-service") );
    
    // Search
    console.log( await cp.search("btc") );
    
    // Get market depth by ID
    console.log( await cp.depth("btc-bitcoin") );

    // Get market capitalization (24h 7d 30d 1q 1y)
    console.log( await cp.mcap("24h") );

    // Get market capitalization excluding BTC (24h 7d 30d 1q 1y)
    console.log( await cp.altcap("7d") );
} )();