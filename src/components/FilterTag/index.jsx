import React, { useContext, useState } from "react";
import { Tag } from "@bigbinary/neetoui/v2";
import { FilterContext } from "../../App";

function FilterTag() {
  const [FilterCategories, setFilterCategories] = useContext(FilterContext);
  const { categories = [], isToday = false } = FilterCategories;

  return (
    <div className="flex  w-3/4  mx-auto mt-10 self-start flex-wrap">
      {categories.map((item) => {
        return (
          <div className="flex flex-row items-start mr-4 mb-2">
            <Tag
              label={item}
              size="small"
              className="capitalize py-2"
              onClose={() => {
                let index = categories.indexOf(item);
                if (index > -1) {
                  setFilterCategories({
                    ...FilterCategories,
                    categories: [
                      ...categories.slice(0, index),
                      ...categories.slice(index + 1),
                    ],
                  });
                }
              }}
            />
          </div>
        );
      })}
      {isToday ? (
        <div className="flex flex-row items-start mr-4">
          <Tag
            label={"Include archived articles"}
            size="small"
            className="capitalize py-2"
            onClose={() => {
              setFilterCategories({ ...FilterCategories, isToday: false });
            }}
          />
        </div>
      ) : (
        <></>
      )}
    </div>
  );
}

export default FilterTag;
