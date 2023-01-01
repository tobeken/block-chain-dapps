//https://eth-goerli.g.alchemy.com/v2/4G5qEplB66H4L-aGJ9VZtuI1Y2b2uFni
require("@nomicfoundation/hardhat-toolbox");

module.exports = {
  defaultNetwork:"goerli",
  solidity: "0.8.17",
  networks:{
    goerli:{
      url:"https://eth-goerli.g.alchemy.com/v2/4G5qEplB66H4L-aGJ9VZtuI1Y2b2uFni",
      accounts:[
        "8578aba0f9952e6ea018af5a12fb3f6ef1f05177d0af66e6a78438cf270f7918",

      ],

    },
  },
};
