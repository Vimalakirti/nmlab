import React from 'react'
import { Component } from 'react'

import BussinessCard from './home/BussinessCard'
import Divider from './Divider'

class Home extends Component {
    render() {
        return (
            <div>
                <div class="ui container">
                    <div class="ui header">
                        <h1>網路與多媒體實驗室 課程介紹</h1>
                        <p>本實驗為臺大電機系大學部學生十選二必修的實驗之一，修課學生透過實驗室的設備和線上資源，
                            能透過做中學的方式，更加熟悉網路技術與多媒體應用的開發。</p>
                    </div>
                </div>
                <Divider description="教授與助教群" icon="users icon"/>
                <div class="three wide column stackable ui cards container">
                    <BussinessCard name="指導教授：林宗男" href="http://www.ee.ntu.edu.tw/profile1?teacher_id=901147&p=3" office="博理520" photo="images/Lin.jpg"/>
                    <BussinessCard name="區塊鏈助教：陳秉珏" href="mailto:r08942078@ntu.edu.tw" office="電二449" photo="images/BING_JYUE.jpg"/>
                    <BussinessCard name="網路攻防助教：陳允中" href="mailto:f08921a01@ntu.edu.tw" office="博理507" photo="images/YUN_CHUNG.jpg"/>
                </div>
            </div>
            
        )
    }
}

export default Home
