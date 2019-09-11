import React from 'react'

import Divider from './Divider'
import ResourceCard from './resouces/ResourceCard'

const Resources = () => {
    return (
      <div>
        <Divider description="實驗資源" icon="icon folder open outline"/>
        <div class="two wide column stackable ui cards container">    
            <ResourceCard 
              page="/blockchain"
              img="images/bitcoin.jpg"
              course="區塊鏈實驗"
              since="Since Fall, 2018"
            />
            <div class="ui card">
            <a class="image" href="http://nmlab-ctf.joey-wang-4.engineer/?fbclid=IwAR0IRJMbu9i9aImKvMMjJstTRccZuGpbfD5xny3mGfVVn4SD7MLjIwgUZqU" target="_blank" rel="noopener noreferrer">
                <img  src="images/hacker.jpg"/>
            </a>
            <div class="content">
                <a class="header" href="http://nmlab-ctf.joey-wang-4.engineer/?fbclid=IwAR0IRJMbu9i9aImKvMMjJstTRccZuGpbfD5xny3mGfVVn4SD7MLjIwgUZqU" target="_blank" rel="noopener noreferrer">網路攻防實驗</a>
                <div class="meta">
                <a>Since Fall, 2016</a>
                </div>
            </div>
        </div>
        </div>
      </div>
    )
}

export default Resources