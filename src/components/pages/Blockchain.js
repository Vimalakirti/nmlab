import React from 'react'

import Divider from './Divider'
import ResourceCardSimple from './resouces/ResourceCardSimple'

const Blockchain = () => {
    return (
        <div>
            <div class="ui container">
                <a href="resources">
                    <i class="angle left icon"></i>
                    相關資源
                </a>
            </div>
            <Divider description="Basic Blockchain & Bitcoin" icon="yellow icon bitcoin"/>
            <div class="ui three doubling cards container">   
                <ResourceCardSimple
                    page="https://bitcoin.org/bitcoin.pdf"
                    content="Bitcoin paper" 
                    description="中本聰改變世界的起點。"
                />
                <ResourceCardSimple
                    page="https://anders.com/blockchain/"
                    content="Blockchain demo part 1" 
                    description="展示區塊鏈如何管理帳本。"
                />
                <ResourceCardSimple
                    page="https://anders.com/blockchain/public-private-keys/"
                    content="Blockchain demo part 2" 
                    description="展示區塊鏈如何管理帳戶。"
                />
                <ResourceCardSimple
                    page="https://blockchaindemo.io/"
                    content="Blockchain demo (P2P)" 
                    description="漂亮UI、模擬P2P網路的區塊鏈展示。"
                />
                <ResourceCardSimple
                    page="https://www.blockchain.com/explorer"
                    content="Blockchain explorer" 
                    description="探索Bitcoin各個區塊內部資訊的工具。"
                />
                <ResourceCardSimple
                    page="https://etherscan.io/"
                    content="Etherscan" 
                    description="主要用來查看Ethereum block的工具。"
                />
            </div>
            <Divider description="Smart Contract" icon="grey icon ethereum"/>
            <div class="ui three doubling cards container"> 
                <ResourceCardSimple
                    page="https://github.com/ethereum/wiki/wiki/White-Paper"
                    content="Ethereum white paper" 
                    description="天才Vitalik Buterin與他的小夥伴們寫的Ethereum白皮書。"
                />
                <ResourceCardSimple
                    page="https://cryptozombies.io/"
                    content="Crypto zombies" 
                    description="從遊戲中學習Solidity。"
                />
                <ResourceCardSimple
                    page="https://www.trufflesuite.com/"
                    content="Truffle suite" 
                    description="Ganache作為Ethereum simulator、Truffle作為DApp開發框架。"
                />
                <ResourceCardSimple
                    page="https://web3js.readthedocs.io/en/v1.2.1/"
                    content="Web3.js" 
                    description="開發DApp前端需要web3作為與smart contracts的橋樑。"
                />
                <ResourceCardSimple
                    page="https://aws.amazon.com/tw/managed-blockchain/"
                    content="AWS managed blockchain" 
                    description="Amazon幫你雲端管理區塊鏈，共有Ethereum和Hyperledger兩種可選。"
                />
            </div>
            <Divider description="Other Distributed Ledger Tech." icon="orange icon monero"/>
            <div class="ui three doubling cards container"> 
                <ResourceCardSimple
                    page="https://www.iota.org/"
                    content="IOTA"
                    description="不使用區塊鏈架構，而使用有向無環圖來設計DLT。"
                />
                <ResourceCardSimple
                    page="https://www.getmonero.org/"
                    content="Monero" 
                    description="注重隱私、不可追蹤的加密貨幣。"
                />
                <ResourceCardSimple
                    page="https://www.ripple.com/"
                    content="Ripple"
                    description="一種較中心化，旨在全球性支付的加密貨幣。"
                />
                <ResourceCardSimple
                    page="https://www.getmonero.org/"
                    content="Steemit" 
                    description="能獎勵創作者的分佈式內容、社群平台。"
                />
                <ResourceCardSimple
                    page="https://github.com/decrypto-org/blockchain-papers"
                    content="Blockchain papers"
                    description="區塊鏈重要論文大集合。"
                />
                <ResourceCardSimple
                    page="https://ipfs.io/"
                    content="IPFS"
                    description="其實是分散式儲存系統，而不算是DLT，與區塊鏈應用能完美的配對。"
                />
                <ResourceCardSimple
                    page="https://dappradar.com/"
                    content="DApp radar"
                    description="整理了各種DLT上的DApps。"
                />
            </div>
        </div>
    )
}

export default Blockchain