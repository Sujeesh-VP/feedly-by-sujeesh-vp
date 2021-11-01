import React, { useState } from "react";
import {
  Modal,
  Button,
  Typography,
  Check,
  Input,
  Toastr,
} from "@bigbinary/neetoui/v2";
import { Notification } from "@bigbinary/neeto-icons";
import axios from "axios";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Subscribe() {
  const [showModal, setShowModal] = useState(false);
  const [userEmail, setUserEmail] = useState("");
  const pattern =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  const handleSubscribe = async (item) => {
    if (pattern.test(item)) {
      await axios.post(
        "https://webhook.site/5b6ca08e-f926-4a33-ba9c-6ad9406bd6ed",
        { item }
      );
      Toastr.success("Thank You For Subscribing!");
      setShowModal(false);
      setUserEmail("");
    } else {
      Toastr.error(Error("Invalid Email Address"));
    }
  };
  return (
    <div>
      <ToastContainer />
      <div className="flex flex-row items-center justify-start space-x-6">
        <Button
          onClick={() => setShowModal(true)}
          icon={Notification}
          style="normal"
        />
      </div>
      <div>
        <Modal isOpen={showModal} onClose={() => setShowModal(false)} size="xs">
          <Modal.Header>
            <img src="https://picsum.photos/536/355" />
          </Modal.Header>
          <Modal.Body>
            <Typography
              style="h2"
              weight="semibold"
              className="neeto-ui-text-gray-800 pb-2"
            >
              Subscribe to Feed.ly
            </Typography>
            <Typography style="body2" weight="normal" className="pb-8">
              We don’t spam, but, we deliver the latest news in short.
            </Typography>
            <Input
              type="email"
              placeholder="oliver@example.com"
              value={userEmail}
              onChange={(e) => setUserEmail(e.target.value)}
            ></Input>
          </Modal.Body>
          <Modal.Footer className="space-x-2">
            <Button
              icon={Check}
              label="Sign Up"
              onClick={() => handleSubscribe(userEmail)}
              size="large"
            />
            <Button
              style="secondary"
              label="Cancel"
              onClick={() => setShowModal(false)}
              size="large"
            />
          </Modal.Footer>
        </Modal>
      </div>
    </div>
  );
}

export default Subscribe;
