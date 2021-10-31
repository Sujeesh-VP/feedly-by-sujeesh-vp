import React, { useState, useEffect } from "react";
import { Pane, Typography, Button, Checkbox } from "@bigbinary/neetoui/v2";
import { Filter, Check } from "@bigbinary/neeto-icons";
import { FilterContext } from "../../App";
import { useContext } from "react";

import { useHistory } from "react-router-dom";





function FilterOptions() {
  const [showPane, setShowPane] = useState(false);
  const [FilterCategories, setFilterCategories] = useContext(FilterContext);
  const {categories = [], isToday = false} = FilterCategories || {}
  
  const [option, setOption] = useState(categories);
  const [archived, setArchived] = useState(isToday);
  let history = useHistory();
  
    useEffect(() => {
        setOption(categories);

    }, [categories])

    useEffect(() => {
        setArchived(isToday);

    }, [isToday])

    

  const saveFilter = () => {

        setFilterCategories({categories: option, isToday: archived});
        setShowPane(false);
        history.push('/');

  };
 
    
  const addOption = (props) => {
        let index = option.indexOf(props);
        if (index > -1) {
          setOption([
            ...option.slice(0, index),

            ...option.slice(index + 1),
          ]);
        } else {
          setOption([...option, props]);
        }
    };
  const checkboxItems = [
    { id: 1, value: "all", label: "All" },
    { id: 2, value: "science", label: "Science" },
    { id: 3, value: "business", label: "Business" },
    { id: 4, value: "national", label: "National" },
    { id: 5, value: "sports", label: "Sports" },
    { id: 6, value: "world", label: "World" },
    { id: 7, value: "technology", label: "Technology" },
    { id: 8, value: "politics", label: "Politics" },
    { id: 9, value: "startup", label: "Startup" },
    { id: 10, value: "entertainment", label: "Entertainment" },
    { id: 11, value: "miscellaneous", label: "Miscellaneous" },
    { id: 12, value: "automobile", label: "Automobile" },
    
  ];

  return (
    <div>
      <div className="flex flex-row items-center justify-start space-x-6">
        <Button
          label="Filter"
          onClick={() => setShowPane(true)}
          icon={Filter}
          style="secondary"
          
        />
      </div>
      <Pane isOpen={showPane} onClose={() => setShowPane(false)}>
        <Pane.Header>
          <div className="top-10 left-10 neeto-ui-text-gray-800">
            <Typography style="h2" weight="semibold">
              Filter Articles
            </Typography>
          </div>
        </Pane.Header>
        <Pane.Body>
          <div className="top-24 left-10 flex flex-col neeto-ui-text-gray-700 space-y-4 w-full">
            <Typography style="h4" weight="semibold">
              Category
            </Typography>
            <div className="flex flex-col justify-evenly space-y-5 pl-2 pt-4 pb-6 border-b-2">
              {checkboxItems.map((item) => {
                return (
                  <Checkbox
                    checked={
                       option?.includes(item.value)
                    }
                    key={item.id}
                    id={item.value}
                    label={item.label}
                    onClick={() => addOption(item?.value)}
                  />
                );
              })}
            </div>
            <div className="space-y-4 pl-2">
              <Checkbox
                id="Include_archived_articles"
                label="Include archived articles"
                checked = {archived}
                onClick = {()=> setArchived(!archived)}
              />
            </div>
          </div>
        </Pane.Body>
        <Pane.Footer className="flex items-center space-x-2">
          <Button
            icon={Check}
            size="large"
            label="Save Changes"
            onClick= {saveFilter}
            />
          <Button
            style="text"
            size="large"
            label="Cancel"
            onClick={() => setShowPane(false)}
            className=" neeto-ui-text-gray-800"
          />
        </Pane.Footer>
      </Pane>
    </div>
  );
}

export default FilterOptions;
