import { HardhatUserConfig } from "hardhat/config";
import "@nomiclabs/hardhat-etherscan";
import "@nomiclabs/hardhat-waffle";
import "@typechain/hardhat";
import "hardhat-gas-reporter";
import "hardhat-contract-sizer";
import * as dotenv from "dotenv";

dotenv.config();

module.exports = {
    solidity: {
        version: "0.8.18",
        settings: {
            optimizer: {
                enabled: true,
                runs: 200,
            },
        },
    },
    docgen: {
        output: "docs",
        pages: "files",
    },
    paths: {
        sources: "./contracts",
        cache: "./cache",
        artifacts: "./artifacts",
    },
    networks: {
        zinde: {
            url: "https://rpc.zinde.xyz",
            // accounts: [process.env.PRIVATE_KEY]
        },
    },

    etherscan: {
        apiKey: {
            zinde: "VIMK9YZY363TS1RB99ARVXRXER8WFW2678",
        },
        customChains: [
            {
                network: "zinde",
                chainId: 3737,
                urls: {
                    apiURL: "https://scan.zinde.xyz/api",
                    browserURL: "https://scan.zinde.xyz",
                },
            },
        ],
    },
} as HardhatUserConfig;
