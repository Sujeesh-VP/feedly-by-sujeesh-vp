import React from "react";
import { Typography, Button } from "@bigbinary/neetoui/v2";

function Recommend({ category, data, id }) {
  return (
    <div className="flex flex-row pb-4 w-2/5">
      <div className="pr-4 w-1/4">
        <img src="https://picsum.photos/200" className="w-200 h-200" />
      </div>
      <div className="flex flex-col w-3/4">
        <Typography
          style="h6"
          weight="bold"
          className="pt-1 pb-2 neeto-ui-text-gray-700"
        >
          {data.title}
        </Typography>
        <Typography
          style="body3"
          weight="normal"
          className="neeto-ui-text-gray-500 self-end pb-2"
        >
          {data.author} at {data.time} on {data.date}
        </Typography>
        <Button
          label="Read More"
          style="link"
          size="small"
          to={`/article/${category}/${id}`}
        />
      </div>
    </div>
  );
}

export default Recommend;
