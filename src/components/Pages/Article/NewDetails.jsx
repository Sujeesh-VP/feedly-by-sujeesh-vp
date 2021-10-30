import React from 'react'
import News from '../../Article/News'
import Recommend from '../../Article/Recommend'

function NewsDetails({list, news, category}) {

    return (
        <div>
             <div>
                <News news = {news}/>
            </div>
            <div className = "flex flex-wrap pt-4 border-b-2 justify-between">
            {list.map((e, index)=>{
                    if(index !== 0 && index < 5){
                        return(
                            <Recommend  category = {category} data =  {e} id = {e.id}/>
                        )}
                })}
            </div>
        </div>
    )
}

export default NewsDetails
