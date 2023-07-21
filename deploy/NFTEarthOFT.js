const LZ_ENDPOINTS = require("@layerzerolabs/lz-sdk");
const MAINNET_DEPLOY_CONFIGS = require("../constants/oftv2Config/deployConfig.json");

module.exports = async function ({ deployments, getNamedAccounts }) {
    const { deploy } = deployments
    const { deployer } = await getNamedAccounts()
    console.log(`>>> your address: ${deployer}`)

    const name = MAINNET_DEPLOY_CONFIGS["NFTEarthOFT"].tokenName;
    const symbol = MAINNET_DEPLOY_CONFIGS["NFTEarthOFT"].tokenSymbol;
    const sharedDecimals = MAINNET_DEPLOY_CONFIGS["NFTEarthOFT"].sharedDecimals;
    const lzEndpointAddress = LZ_ENDPOINTS.LZ_ADDRESS[hre.network.name]
    console.log({name, symbol, sharedDecimals, lzEndpointAddress})

    await deploy("NFTEarthOFT", {
        from: deployer,
        args: [name, symbol, sharedDecimals, lzEndpointAddress],
        log: true,
        waitConfirmations: 1,
        skipIfAlreadyDeployed: true
    })
}

module.exports.tags = ["NFTEarthOFT"]
