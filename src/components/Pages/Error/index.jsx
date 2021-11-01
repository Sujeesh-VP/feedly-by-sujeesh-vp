import React from 'react'
import { Typography, Button} from "@bigbinary/neetoui/v2";
import { Home } from "@bigbinary/neeto-icons";

function ErrorPage() {
    return (
        <div className = "flex flex-col w-1/5 place-items-center h-screen mx-auto my-32">
            
            <img src = "/Images/Error.png" className = "py-4"/>
            <Typography style="h3" weight="semibold" className = "neeto-ui-text-gray-800 py-4 text-center">You have landed somwhere unknown.</Typography>
            <Button  icon ={Home} label="Take me home" size="large" style="secondary" className = "border -2 py-4" iconPosition="left" to = "/"/>
            
        </div>
    )
}

export default ErrorPage
