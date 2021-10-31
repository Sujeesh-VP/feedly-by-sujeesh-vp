import React, {useState} from 'react'
import { Modal } from "@bigbinary/neetoui/v2";
import { Pane, Typography, Button, Input, Textarea } from "@bigbinary/neetoui/v2";
import { Check, Highlight } from "@bigbinary/neeto-icons";


function WriteToUs() {
    const [showModal, setShowModal] = useState(false);
    const [value, setValue] = useState("");
    return (
        <div className="w-full">
            <div  className="flex justify-center w-28 mx-auto ">
                    <Button label="Write to us" onClick={() => setShowModal(true)} icon = {Highlight} iconPosition="left" style = "secondary"/>
            </div>

            <Modal isOpen={showModal} onClose={() => setShowModal(false)}>
                <Modal.Header>
                <Typography style="h2">Can’t find what you came for?</Typography>
                <Typography className = "font-extralight">Write to us about which category interests you and we will fetch them for you daily, for free.</Typography>
                </Modal.Header>
                <Modal.Body>
                    <div className = "flex flex-row justify-between py-4">
                        <div className = "w-48">
                            
                            <Input label="Name" value={value} onChange={(e) => setValue(e.target.value)} placeHolder = "Oliver Smith"/>
                        </div>
                        <div className = "w-48">
                            
                            <Input label="Email" value={value} onChange={(e) => setValue(e.target.value)} placeHolder = "oliver@example.com"/>
                        </div>
                    </div>
                    <div>
                        <Textarea label="Message" value={value} onChange={(e) => setValue(e.target.value)}/>
                    </div>
                </Modal.Body>
                <Modal.Footer className="space-x-2">
                <Button
                    icon={Check}
                    label="Continue"
                    onClick={() => setShowModal(false)}
                    size="large"
                />
                <Button
                    bstyle="text"
                    lael="Cancel"
                    onClick={() => setShowModal(false)}
                    size="large"
                />
                </Modal.Footer>
            </Modal>
        </div>
    )
}

export default WriteToUs
