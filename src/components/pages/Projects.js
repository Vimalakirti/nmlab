import React from 'react'

import Divider from './Divider'
import Semester from './projects/Semester'
import Tbody2018Fall  from './projects/Tbody2018Fall'
import Tbody2019Spring from './projects/Tbody2019Spring'
import Tbody2019Fall from './projects/Tbody2019Fall'

// TODO: 新增歷屆final資料
const Projects = () => {
    return (
        <div>
            <Divider description="須上傳ceiba的檔案" icon="upload icon"/>
            <div class="ui bulleted list container">
                    <p class="item">
                        <i class="object group icon"></i>
                        Poster link
                    </p>
                    <p class="item">
                        <i class="youtube icon"></i>
                        &nbsp;Video link
                    </p>
                    <p class="item">
                        <i class="github icon"></i>
                        Github link
                    </p>
            </div>
            <Divider description="歷屆 Final Projects" icon="file alternate outline icon"/>
            <Semester semester="It's your turn now!" tbody=""/>
            <Semester semester="108-1 (2019 Fall)" tbody={<Tbody2019Fall/>}/>
            <Semester semester="107-2 (2019 Spring)" tbody={<Tbody2019Spring/>}/>
            <Semester semester="107-1 (2018 Fall)" tbody={<Tbody2018Fall/>}/>
        </div>
    )
}

export default Projects