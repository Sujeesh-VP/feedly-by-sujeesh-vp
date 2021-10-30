import React, { useState } from 'react'
import { Typography, Button} from "@bigbinary/neetoui/v2";
import ArticlePage from '../Pages/Article';




function Prominent ({category, data, id}) {

    return (
        
        <div>
                <Typography style = "h2" weight = "semibold" className = "neeto-ui-text-gray-800 pb-4 capitalize pt-2">{category} </Typography>
                <div className = "flex flex-row border-b-2 pb-4">
                    <div className = "w-1/2 pr-6">
                        <img src = "https://picsum.photos/536/354"/>
                    </div>
                    <div className = "flex flex-col w-1/2">
                        <Typography style ="h3" weight = "semibold" className = "pt-1 pb-6 neeto-ui-text-gray-700 leading-8">{data.title}</Typography>
                        <Typography style = "body1" weight = "normal" className = "neeto-ui-text-gray-400 self-end pb-4">{data.author} at {data.time} on {data.date}
                        </Typography>
                        <Typography style =  "body1" weight = "normal" className = "pb-4">{data.content}</Typography>
                        <Button label = "Read More" style = "link" size = "large" to = {`/article/${category}/${id}`} />
                    </div>
                    
                </div>
        </div>
    )
}

export default Prominent
