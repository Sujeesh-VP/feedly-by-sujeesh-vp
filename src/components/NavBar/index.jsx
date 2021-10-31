import React, {useState} from 'react'
import { Typography, Tooltip, Button} from "@bigbinary/neetoui/v2";
import { Search} from "@bigbinary/neeto-icons";
import FilterOptions from './FilterOptions';
import Subscribe from './Subscribe';
import SearchModal from './Search/Modal';

function NavBar() {
    const [show,setShow] = useState(false)
    
    return (
        <div className = "flex flex-row items-center w-360 h-16 left-0 top-0 bg-white shadow px-6 py-4">
            <Typography style = "h4" className = "w-310 h- 6 left-6 top-5 flex-grow">Feed.ly</Typography>
            <div className = "flex flex-row items-center 38 ml--9">
                {show && <SearchModal show = {show} setShowValue = {(e)=>{setShow(e)}}/>}
                <Tooltip placement = {"bottom-end"} content = {"Search"}>
                    <div >
                    <Button
          
          onClick={() => setShow(true)}
          icon={Search}
          style="secondary"
          
        />
                    </div>
                </Tooltip>
                <Tooltip placement = {"bottom-end"} content = {"Subscribe"}>
                    <div className = "mx-3">
                        <Subscribe/>
                    </div>
                </Tooltip>
                <div>
                    <FilterOptions/>
                </div>
            </div>
        </div>
    )
}

export default NavBar
