import React from 'react'

import Divider from './Divider'

const Rules = () => {
        return (
            <div>
                <Divider description="實驗室規則" icon="handshake outline icon"/>
                <div class="ui bulleted list container">
                    <p class="item">不得在實驗室內飲食，座位上不得堆放食物殘骸。</p>
                    <p class="item">不得以聲音、氣味干擾他人。</p>
                    <p class="item">不得在他人座位或公用區域堆放個人物品，應妥善使用公共器材，歸還時須排整齊。</p>
                    <p class="item">違規攜帶外人進實驗室。</p>
                    <p class="item">違規借用實驗室設備（須向助教登記）。</p>
                    <p class="item">違規缺席或遲到（需有正當理由，並提早告知助教）。</p>
                    <p class="item">不得抄襲網路上、曾經或正在修課同學的code。</p>
                    <p class="item">超過Deadline後繳交的作業，每超過一天成績續打八折計算，不滿一天則以一天計。</p>
                    <p class="item">確定修課者，不得退選，違者該科當掉處分。</p>
                </div>
                <Divider description="評分標準" icon="edit outline icon"/>
                <div class="ui bulleted list container">
                    <p class="item">實驗 50%、Final Project 50%。</p>
                    <p class="item">兩個小實驗各佔25％，由負責助教決定評分方式。</p>
                    <p class="item">Final分數包含三次小demo、組內分工、Final Presentation和最後繳交檔案，由多位評審共同評比。</p>
                    <p class="item">Bonus：參加校外相關比賽並且通過初賽者，出示證明可加總成績10％。</p>
                    <p class="item">Punishment：違反上述實驗室規則者，視情節扣總成績一個（以上）等第。</p>
                </div>
            </div>
        )
}

export default Rules
