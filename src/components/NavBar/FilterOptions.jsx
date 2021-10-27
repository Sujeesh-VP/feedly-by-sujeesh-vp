import React, { useState } from 'react'
import { Pane, Typography, Button, Checkbox } from "@bigbinary/neetoui/v2";
import { Filter, Check} from "@bigbinary/neeto-icons";

function FilterOptions() {
    const [showPane, setShowPane] = useState(false);
    return (
        <div>
            <div className="flex flex-row items-center justify-start space-x-6">
                <Button label="Filter" onClick={() => setShowPane(true)} icon = {Filter} style = "secondary"/>
            </div>
            <Pane isOpen={showPane} onClose={() => setShowPane(false)}>
                <Pane.Header>
                    <div className = "top-10 left-10 neeto-ui-text-gray-800">
                        <Typography style="h2" weight="semibold">Filter Articles</Typography>
                    </div>
                </Pane.Header>
                <Pane.Body>
                    <div className = "top-24 left-10 flex flex-col neeto-ui-text-gray-700 space-y-4 w-full">
                        <Typography style="h4" weight="semibold">Category</Typography>
                        <div className = "flex flex-col justify-evenly space-y-5 pl-2 pt-4 pb-6 border-b-2">
                            <Checkbox id="all" label="All"/>
                            <Checkbox id="science" label="Science"/>
                            <Checkbox id="business" label="Business"/>
                            <Checkbox id="national" label="National"/>
                            <Checkbox id="sports" label="Sports"/>
                            <Checkbox id="world" label="World"/>
                            <Checkbox id="technology" label="Technology"/>
                        </div>
                        <div className= "space-y-4 pl-2">
                            <Checkbox id="Include_archived_articles" label="Include archived articles"/>
                        </div>
                    </div>
                </Pane.Body>
                <Pane.Footer className="flex items-center space-x-2">
                        <Button icon={Check} size="large" label="Save Changes" onClick={() => setShowPane(false)}/>
                        <Button style="text" size="large" label="Cancel" onClick={() => setShowPane(false)} className = " neeto-ui-text-gray-800"/>
                </Pane.Footer>
            </Pane>
            
        </div>
    );
}

export default FilterOptions
