import React from 'react'
import { Typography, Button} from "@bigbinary/neetoui/v2";

function Recommend() {
    return (
        <div className = "flex flex-row pb-4 w-2/5">
            <div className= "w-auto pr-4">
               <img src = "https://picsum.photos/536/356"/>
            </div>
            <div className= "flex flex-col">
                <Typography style="h6" weight="semibold" className = "pt-1 pb-2 neeto-ui-text-gray-700">Director of photography killed, movie director injured 
                after Alec Baldwin discharged prop firearm on movie set
                </Typography>
                <Typography otherProps={{}} style="body3" weight="normal" className ="neeto-ui-text-gray-500 self-end pb-2">Shalini Ojha at 07:36 pm on 22 Oct 2021,Friday 
                </Typography>
                <Button label="Read More" onClick={function noRefCheck(){}} style="link"/>
            </div>
        </div>
    )
}

export default Recommend
