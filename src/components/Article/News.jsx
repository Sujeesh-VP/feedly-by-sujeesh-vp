import React from 'react'
import { Typography, Button} from "@bigbinary/neetoui/v2";
import { Copy } from "@bigbinary/neeto-icons";
function News() {
    return (
        <div className = "flex flex-col border-b-2">
            <Typography style ="h1" weight = "semibold" className = "pt-1 pb-4 neeto-ui-text-gray-700">
                Director of photography killed, movie director injured after Alec Baldwin discharged prop firearm on movie set
                <Button icon = {Copy} style = "text"/>
            </Typography>
            <Typography otherProps = {{}} style = "body1" weight = "normal" className = "neeto-ui-text-gray-500 self-start pb-8">
                Shalini Ojha at 07:36 pm on 22 Oct 2021,Friday 
            </Typography>
            <div className = "w-1/2 pr-6 self-center pb-8">
                    <img src = "https://picsum.photos/536/354"/>
            </div>
            <Typography style =  "body1" weight = "normal" className = "pb-8">
                Former Punjab CM Captain Amarinder Singh criticised Deputy CM Sukhjinder Singh Randhawa's remarks, saying Pakistani journalist and his friend Aroosa Alam has been coming to India for 16 years with government permission. Earlier, Randhawa said his government will probe her alleged links with ISI...... 
            </Typography>
        </div>
    )
}

export default News
