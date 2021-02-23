require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'hover enter flat sugar fan release stick social inflict private metal general'; 
let testAccounts = [
"0x7047f316a00d017633fad4350d0955193c392eb37e3d810f629d058d4b80bd8b",
"0xf675881dbfc3c8b99f6954b8a1391f943e487b0037e064492242d1acb18ad4d6",
"0x37738cdb54c4d898004ae612e08d37c0850a6ca75ad3d57c40696a33d02270d0",
"0x71b448d4bc4ecdc4ffbe0f5a3d9bad7bc8cf6d97aa7c6b0d43664896670ea1af",
"0xee1f401d6ecf98c643c3832cf6853a8ec344f4d99ea23591509be175f9e28437",
"0xbe2c4772976143aff81f9947ba1820875d93ebeba49f51431e629c0d5c1766c3",
"0x7ef5674bbcfbd9825a6419b85de7887753d76ba1293acc74d41e65091d303787",
"0xe71a10b3e371f9f64bcd273e3d06a1f12ec69b3e592727fc0960ed78e982d699",
"0x8bd66ebe4cdb9f633f1936f1b51eaf80ac883a78815dc9aacc25a6732767e8a0",
"0xea1da9fcd7fe11c732f29308e2832b4241ca7e8fdaf471c01110d845534f54f8"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};
