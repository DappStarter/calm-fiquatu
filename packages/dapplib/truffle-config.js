require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'gloom arena brave food grief reward stereo company inside light army gift'; 
let testAccounts = [
"0xd797c9e158ed01484abc88a2b33511439f63129d51b8373f99ec1062abd2fbd3",
"0x1702de30f71bcb8ef0086a1a52445fd88e3adfda58a2598cbbf2c01d57ce7dc9",
"0xb3041576d70e39bb7f3eaa1ed936fd755aac3bffb35860c56d3f25e5712626bb",
"0x20545954382b4f3377463eb4f0fa1a52e1d938377ebca970a494d23ad0a9df03",
"0xf00b5ce0606d85a245c650098dddc209677d4aed8b346d6a43d60c2399068b8f",
"0x199cfb1bb5b45ef324ea51e8776b9450417ad7f08557cd2a1b3d319d115d369d",
"0x2110b6151c68ac91d83ee5d96ac4e3e757ea257ecb67d27ac09ad23b57a2752f",
"0xa3864dd1913ddb401d416c0b8f70408dc6616cb51e6ce3999e35fc2bcfd9a608",
"0x6723b970f12b7d05e353a997f6f483b25cf48eb5670907b20dbd071b8364f8e1",
"0x4dc527b3c26c3def5a7cae1072d003ff827505105319a72bba7fce42081ca8e9"
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
