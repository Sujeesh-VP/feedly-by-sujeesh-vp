import React from 'react'
import Prominent from '../../Article/Prominent'
import Recommend from '../../Article/Recommend'

function NewsContent({category, data}) {
    
    
    return (
        <div>
            <div>
                <Prominent category = {category} data = {data[0]}/>
            </div>
            <div className = "flex flex-wrap pt-4 border-b-2 justify-between">
                <Recommend  category = {category} data = {data[1]}/>
                <Recommend  category = {category} data = {data[2]}/>
                <Recommend  category = {category} data = {data[3]}/>
                <Recommend  category = {category} data = {data[4]}/>
            </div>
        </div> 
    );
}

export default NewsContent
