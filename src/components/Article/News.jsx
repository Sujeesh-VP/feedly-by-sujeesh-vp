import React from 'react'
import { Typography, Button} from "@bigbinary/neetoui/v2";
import { Copy } from "@bigbinary/neeto-icons";
function News({news}) {
    const {title, author, time, date, content} = news
    
    return (
        <div className = "flex flex-col border-b-2">
            
            <div>
                <Typography style ="h1" weight = "semibold" className = "pt-1 pb-4 neeto-ui-text-gray-700">{title}
                    <Button icon = {Copy} style = "text"/>
                </Typography>
                <Typography  style = "body1" weight = "normal" className = "neeto-ui-text-gray-500 self-start pb-8">{author} at {time} on {date}
                
                </Typography>
                <div className = "w-1/2 pr-6 self-center pb-8">
                    <img src = "https://picsum.photos/536/354"/>
                </div>
                <Typography style =  "body1" weight = "normal" className = "pb-8">{content}
                
                </Typography>
            </div>
        </div>
    )
}

export default News
