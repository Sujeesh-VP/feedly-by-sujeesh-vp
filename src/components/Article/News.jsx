import React from 'react'
import { Typography, Button} from "@bigbinary/neetoui/v2";
import { Copy } from "@bigbinary/neeto-icons";
function News({news = {} }) {
    const {title, author, time, date, content} = news
    
    return (
        <div className = "flex flex-col border-b-2">
            
            <div>
                <Typography style ="h1" weight = "semibold" className = "pt-1 pb-4 neeto-ui-text-gray-700">{title}
                    <Button icon = {Copy} style = "text"/>
                </Typography>
                <Typography  style = "body1" weight = "normal" className = "neeto-ui-text-gray-500 self-start pb-8">{author} at {time} on {date}
                
                </Typography>
                <div className = "flex justify-center pb-8">
                    <img src = "https://picsum.photos/550/300"/>
                </div>
                <Typography style =  "body1" weight = "normal" className = "pb-8">{content}</Typography>
                <Typography className = "pb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Velit ut tortor pretium viverra suspendisse. At in tellus integer feugiat scelerisque varius morbi enim. Netus et malesuada fames ac turpis egestas. Ut lectus arcu bibendum at varius. Euismod in pellentesque massa placerat duis ultricies lacus sed turpis. Viverra ipsum nunc aliquet bibendum enim facilisis gravida neque convallis. Commodo quis imperdiet massa tincidunt nunc pulvinar sapien et ligula. Lorem donec massa sapien faucibus et. Morbi tristique senectus et netus et malesuada fames ac. Vulputate ut pharetra sit amet aliquam id diam.</Typography>
            </div>
        </div>
    )
}

export default News
