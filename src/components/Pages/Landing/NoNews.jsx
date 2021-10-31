import React, { useContext } from "react";
import Recommend from "../../Article/Recommend";
import { Typography, Button } from "@bigbinary/neetoui/v2";
import { Highlight } from "@bigbinary/neeto-icons";
import { globalDataContext } from "../../../App";



function NoNews() {

const [globalData, setGlobalData] = useContext(globalDataContext);
console.log("data....", globalData.randomList)

  return (
    <div>
      <div className="flex flex-col justify-items-center h-50% pb-10 border-b-2">
        <img src="/Images/NoNewsPage.png" className = "flex justify-center mx-auto w-1/5" />
        <Typography
          style="h3"
          weight="semibold"
          className="pt-1 pb-2 neeto-ui-text-gray-800 flex justify-center">No News Articles Found</Typography>
        <Button icon = { Highlight} iconPosition="left" label="Write to us" style="secondary" size="small"  className = "flex justify-center w-28 mx-auto "/>
      </div>


      
      
      
      
      
      <div className="flex flex-wrap pt-4 border-b-2 justify-between py-8">

        
        {globalData.randomList.map((item)=>{
            return item.value.map((news,index)=> {
                console.log("news..",item.key)
                if(index <2){
                   return  <Recommend key = {`newsContent${index}`} category={item.key} data={news} id={news.id}/>
                }

            })

        })
        
        
    
        }
      </div>
    </div>
  );
}

export default NoNews;