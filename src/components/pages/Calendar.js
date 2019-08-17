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
                <EachDay header="實驗說明會" time="09/10 18:30" location="電二137" 
                icon="info icon massive" description="加簽、門禁設定、上課時間調查與上課規定，未到同學視同放棄選課，會將其名額讓出來給現場加簽同學。"/>
                <EachDay header="區塊鏈(1)" time="09/17 18:30" location="電二137" 
                icon="btc icon massive" description="Blockchain 101"/>
                <EachDay header="網路攻防(1)" time="09/17 18:30" location="電二137" 
                icon="user secret icon massive" description="Web Security"/>

                <EachDay header="區塊鏈(2)" time="09/17 18:30" location="電二137" 
                icon="btc icon massive" description="Pseudo Bitcoin(1)"/>
                <EachDay header="網路攻防(2)" time="09/17 18:30" location="電二137" 
                icon="user secret icon massive" description="Cryptography"/>

                <EachDay header="區塊鏈(3)" time="09/17 18:30" location="電二137" 
                icon="btc icon massive" description="Pseudo Bitcoin(2)"/>
                <EachDay header="網路攻防(3)" time="09/17 18:30" location="電二137" 
                icon="user secret icon massive" description="Reversing"/>
                <EachDay header="Final Project 分組、選題 Deadline" time="09/10 18:30" location="電二137" 
                icon="info icon massive" description="請同學在該天前分好組別，選好Final題目。"/>

                <EachDay header="區塊鏈(4)" time="09/17 18:30" location="電二137" 
                icon="btc icon massive" description="Ethereum(1)"/>
                <EachDay header="網路攻防(4)" time="09/17 18:30" location="電二137" 
                icon="user secret icon massive" description="Binary Exploit"/>

                <EachDay header="區塊鏈(5)" time="09/17 18:30" location="電二137" 
                icon="btc icon massive" description="Ethereum(2)"/>
                <EachDay header="網路攻防(5)" time="09/17 18:30" location="電二137" 
                icon="user secret icon massive" description="More on Web Security"/> 
                
                <EachDay header="Final Project Meeting(1)" time="09/17 18:30" location="電二137" 
                icon="bug icon massive" description="咪(ㄅㄧㄝˊ)挺(ㄕㄨㄚˇ)一(ㄈㄟˋ)：佔小demo成績1/3"/> 
                <EachDay header="Final Project Meeting(2)" time="09/17 18:30" location="電二137" 
                icon="bug icon massive" description="咪(ㄉㄧˇ)挺(ㄅㄚˋ)二(ㄍㄜ˙)：佔小demo成績1/3"/> 
                <EachDay header="Final Project Meeting(3)" time="09/17 18:30" location="電二137" 
                icon="bug icon massive" description="真．咪(ㄅㄠˋ)挺(ㄍㄢ)：佔小demo成績1/3"/> 
               
                <EachDay header="Final Project Demo" time="09/17 18:30" location="博理藝廊" 
                icon="trophy icon massive" description="現場有海報架、桌子，請自行備妥Demo用設備"/>
                
            </div>
            </div>
        )
    }
}

export default Calendar
