import React, { useContext } from "react";
import Recommend from "../../Article/Recommend";
import { Typography} from "@bigbinary/neetoui/v2";

import { globalDataContext } from "../../../App";
import WriteToUs from "../../NavBar/WriteToUs";

function NoNews() {
  const [globalData, setGlobalData] = useContext(globalDataContext);
  console.log("data....", globalData.randomList);

  return (
    <div>
      <div className="flex flex-col justify-items-center h-50% pb-10 border-b-2">
        <img
          src="/Images/NoNewsPage.png"
          className="flex justify-center mx-auto w-1/5"
        />
        <Typography
          style="h3"
          weight="semibold"
          className="pt-1 pb-2 neeto-ui-text-gray-800 flex justify-center"
        >
          No News Articles Found
        </Typography>
        <WriteToUs/>
      </div>

      <div className="flex flex-wrap pt-4 border-b-2 justify-between py-8">
        {globalData.randomList.map((item) => {
          return item.value.map((news, index) => {
            console.log("news..", item.key);
            if (index < 2) {
              return (
                <Recommend
                  key={`newsContent${index}`}
                  category={item.key}
                  data={news}
                  id={news.id}
                />
              );
            }
          });
        })}
      </div>
    </div>
  );
}

export default NoNews;
