import React from 'react'
import Prominent from '../../Article/Prominent'
import Recommend from '../../Article/Recommend'

function NewsContent({category, content}) {
 
    
    return (
        <div>
            <div>
                <Prominent category = {category} details = {content[0]}/>
            </div>
            <div className = "flex flex-wrap pt-4 border-b-2 justify-between">
                <Recommend  details = {content[1]}/>
                <Recommend  details = {content[2]}/>
                <Recommend  details = {content[3]}/>
                <Recommend  details = {content[4]}/>
            </div>
        </div>
    );
}

export default NewsContent
