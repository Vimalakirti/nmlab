import React from 'react'

import Divider from './Divider'
import ResourceCard from './resouces/ResourceCard'

const Resources = () => {
    return (
      <div>
        <Divider description="實驗資源" icon="icon folder open outline"/>
        <div class="two wide column ui cards container">    
            <ResourceCard 
              page="resources"
              img="images/bitcoin.jpg"
              course="區塊鏈實驗"
              since="Since Fall, 2018"
            />
            <ResourceCard 
              page="resources"
              img="images/hacker.jpg"
              course="網路攻防實驗"
              since="Since Fall, 2016"
            />
        </div>
      </div>
    )
}

export default Resources