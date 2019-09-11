import React from 'react'
import { Component } from 'react'
import EachDay from './calendar/EachDay'
import Divider from './Divider'

class Calendar extends Component {
    render() {
        return (
            <div>
            <Divider description="學期進度與內容" icon="calendar alternate outline icon"/>
            <div class="ui items container">
                <EachDay header="實驗說明會" time="09/11 18:00" location="電二102" 
                icon="info icon huge" description="加簽、上課規定說明，未到同學視同放棄選課，會將其名額讓出來給現場加簽同學。"/>
                <EachDay header="區塊鏈(1)" time="09/18 18:00" location="電二102" 
                icon="btc icon huge" description="Blockchain 101"/>
                <EachDay header="網路攻防(1)" time="09/25 18:00" location="電二102" 
                icon="user secret icon huge" description="Web Security"/>

                <EachDay header="區塊鏈(2)" time="10/02 18:00" location="電二102" 
                icon="btc icon huge" description="Pseudo Bitcoin(1)"/>
                <EachDay header="網路攻防(2)" time="10/09 18:00" location="電二102" 
                icon="user secret icon huge" description="Cryptography"/>

                <EachDay header="區塊鏈(3)" time="10/16 18:00" location="電二102" 
                icon="btc icon huge" description="Pseudo Bitcoin(2)"/>
                <EachDay header="網路攻防(3)" time="10/23 18:00" location="電二102" 
                icon="user secret icon huge" description="Reversing"/>
                <EachDay header="Final Project 分組、選題 Deadline" time="10/29 23:59" location="電二102" 
                icon="info icon huge" description="請同學在該天前分好組別，選好Final題目，題目與表單連結將提早公佈在ceiba上。"/>

                <EachDay header="區塊鏈(4)" time="10/30 18:00" location="電二102" 
                icon="btc icon huge" description="Smart Contract(1)"/>
                <EachDay header="網路攻防(4)" time="11/06 18:00" location="電二102" 
                icon="user secret icon huge" description="Binary Exploit"/>

                <EachDay header="區塊鏈(5)" time="11/13 18:00" location="電二102" 
                icon="btc icon huge" description="Smart Contract(2)"/>
                <EachDay header="網路攻防(5)" time="11/20 18:00" location="電二102" 
                icon="user secret icon huge" description="More on Web Security"/> 
                
                <EachDay header="Final Project Meeting(1)" time="11/27 18:00" location="電二102" 
                icon="bug icon huge" description="咪(ㄅㄧㄝˊ)挺(ㄕㄨㄚˇ)一(ㄈㄟˋ)：佔小demo成績1/3"/> 
                <EachDay header="Final Project Meeting(2)" time="12/11 18:00" location="電二102" 
                icon="bug icon huge" description="咪(ㄉㄧˇ)挺(ㄅㄚˋ)二(ㄍㄜ˙)：佔小demo成績1/3"/> 
                <EachDay header="Final Project Meeting(3)" time="12/25 18:00" location="電二102" 
                icon="bug icon huge" description="咪(ㄅㄨˋ)挺(ㄌㄟˊ)三(ㄖㄣˊ)：佔小demo成績1/3"/> 
               
                <EachDay header="Final Project Demo" time="2020/01/13 14:00" location="博理藝廊" 
                icon="trophy icon huge" description="現場有海報架、桌子，請自行備妥Demo用設備"/>
                
            </div>
            </div>
        )
    }
}

export default Calendar
