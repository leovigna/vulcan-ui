# Chainlink Aggregator Dashboard
## Description
React app deployed at [feeds.link](https://feeds.link)
Opensource dashboard displaying custom Chainlink Aggregator data feeds.

## Environment Variables
### Fallback RPC
The vulcan dashboard uses a Mainnet and Ropsten fallback RPC for users who do not have a web3 plugin such as Metamask. Make sure to set the respective environment variables. You will need a websocket connection to listen to event updates.
```
REACT_APP_INFURA_MAINNET=<REPLACE_HERE>
REACT_APP_INFURA_MAINNET_WSS=<REPLACE_HERE>
REACT_APP_INFURA_ROPSTEN=<REPLACE_HERE>
REACT_APP_INFURA_ROPSTEN_WSS=<REPLACE_HERE>
```

### Default Contracts
The default Aggregator Contracts tracked by the app can either be defined under `./data/contracts.js` or leverage a GraphQL API. We recommend getting started with the hard-coded `contracts.js` file. Note that the app always offers the option to locally add custom contracts through the "Add Contract" tab.

If you wish to use the GraphQL API, be sure to get familiar with [vulcan-api](https://github.com/leovigna/vulcan-api) first. Then add the following environment variables.
```
REACT_APP_GRAPHQL_HTTP_URI=<REPLACE_HERE>
REACT_APP_GRAPHQL_WSS_URI=<REPLACE_HERE>
REACT_APP_GRAPHQL_API=true
```

## Installing
Install dependencies.
```
npm install
```
Build static production deployment.
```
npm run build
```
For more info see `REACT.md`.

## Contributing
To contribute code, feel free to fork this repo. Feel free to contact us if you have any questions or would like to collaborate.

## About Vulcan Link
We are a Paris-based Chainlink node operator working on actively maintaining 30+ reliable data feeds and developing decentralized applications that leverage smart contracts with external data. We believe in building trust through transparency by contributing to opensource projects. If you'd like us to add other data feeds to [feeds.link](https://feeds.link), feel free to reach out through our links below! 

Find us at online at [vulcan.link](https://vulcan.link)
Follow us on Twitter [@vulcanlink](https://twitter.com/vulcanlink) for updates on new projects like this one.
If you'd like to contribute, join us on [Telegram](https://t.me/vulcanlink) and [Discord](https://discord.gg/uGwqJJH).


## License
2020 Leo Vigna
MIT License.