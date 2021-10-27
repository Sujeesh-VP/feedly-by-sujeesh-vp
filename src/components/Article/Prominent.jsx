import React from 'react'
import { Typography, Button} from "@bigbinary/neetoui/v2";

function Prominent() {
    return (
        <div>
            <Typography otherProps = {{}} style = "h2" weight = "semibold" className = "neeto-ui-text-gray-800 pb-4">National News</Typography>
            <div className = "flex flex-row border-b-2 pb-4">
                <div className = "w-1/2 pr-6">
                    <img src = "https://picsum.photos/536/354"/>
                </div>
                <div className = "flex flex-col w-1/2">
                    <Typography style ="h3" weight = "semibold" className = "pt-1 pb-4 neeto-ui-text-gray-700">Director of photography killed, movie director injured 
                    after Alec Baldwin discharged prop firearm on movie set
                    </Typography>
                    <Typography otherProps = {{}} style = "body1" weight = "normal" className = "neeto-ui-text-gray-500 self-end pb-4">Shalini Ojha at 07:36 pm on 22 Oct 2021,Friday 
                    </Typography>
                    <Typography style =  "body1" weight = "normal" className = "pb-4">Former Punjab CM Captain Amarinder Singh criticised Deputy CM Sukhjinder Singh Randhawa's remarks, saying Pakistani journalist and his friend Aroosa Alam has been coming to India for 16 years with government permission. Earlier, Randhawa said his government will probe her alleged links with ISI...... 
                    </Typography>
                    <Button label = "Read More" onClick = {function noRefCheck(){}} style = "link" size = "large"/>
                </div>
            </div>
        </div>
    )
}

export default Prominent
