import React from 'react'
import Prominent from '../../Article/Prominent'
import Recommend from '../../Article/Recommend'

function NewsContent({category, data}) {
    console.log(data)
    
    return (
        <div>
            <div>
                <Prominent category = {category} data = {data[0]} id = {data[0].id}/>
            </div>
            <div className = "flex flex-wrap pt-4 border-b-2 justify-between">
                {data.map((e, index)=>{
                    if(index !== 0 && index < 5){
                        return(
                            <Recommend  category = {category} data =  {e} id = {e.id}/>
                        )}
                })}
                
            </div>
        </div> 
    );
}

export default NewsContent
