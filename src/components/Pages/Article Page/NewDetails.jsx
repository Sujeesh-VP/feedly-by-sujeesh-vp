import React from 'react'
import News from '../../Article/News'
import Recommend from '../../Article/Recommend'

function NewDetails({category, content}) {
    return (
        <div>
             <div>
                <News category = {category} details = {content[0]}/>
            </div>
            <div className = "flex flex-wrap pt-4 border-b-2 justify-between">
                <Recommend details = {content[1]}/>
                <Recommend details = {content[2]}/>
                <Recommend details = {content[3]}/>
                <Recommend details = {content[4]}/>
            </div>
        </div>
    )
}

export default NewDetails
