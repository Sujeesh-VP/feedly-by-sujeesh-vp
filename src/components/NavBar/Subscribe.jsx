import React, { useState } from 'react'
import { Modal, Button, Typography, Check, Input } from "@bigbinary/neetoui/v2";
import { Search, Notification} from "@bigbinary/neeto-icons";

function Subscribe(){
    const [showModal, setShowModal] = useState(false);
    return (
        <div>
            <div className="flex flex-row items-center justify-start space-x-6">
                <Button onClick={() => setShowModal(true)} icon = {Notification} style = "secondary"/>
            </div>
            <div>
            <Modal isOpen={showModal} onClose={() => setShowModal(false)} size = "xs">
                <Modal.Header>
                    <img src = "https://picsum.photos/536/355"/>
                </Modal.Header>
                <Modal.Body>
                    <Typography style="h2" weight="semibold" className = "neeto-ui-text-gray-800 pb-2">Subscribe to Feed.ly</Typography>
                    <Typography style="body2" weight="normal" className = "pb-8">We don’t spam, but, we deliver the latest news in short.</Typography>
                    <Input type = "email" placeholder = "oliver@example.com"></Input>    
                </Modal.Body>
                <Modal.Footer className="space-x-2">
                <Button icon={Check} label="Sign Up" onClick={() => setShowModal(false)} size="large"/>
                <Button style="text" label="Cancel" onClick={() => setShowModal(false)} size="large"/>
                </Modal.Footer>
            </Modal>
            </div>

            
        </div>
    )
}

export default Subscribe
