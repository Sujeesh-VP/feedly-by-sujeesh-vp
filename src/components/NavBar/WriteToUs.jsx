import React, { useState } from "react";
import axios from "axios";
import { Typography, Button, Modal } from "@bigbinary/neetoui/v2";
import { Check, Highlight } from "@bigbinary/neeto-icons";
import { Formik, Form } from "formik";
import { VALIDATION_SCHEMA, INITIAL_VALUES } from "./constants";
import { Input, Textarea } from "@bigbinary/neetoui/v2/formik";

const WriteToUs = () => {
  const [showModal, setShowModal] = useState(false);
  const handleSubmit = async (values) => {
    await axios.post(
      "https://webhook.site/5b6ca08e-f926-4a33-ba9c-6ad9406bd6ed",
      values
    );
    setShowModal(false);
  };

  return (
    <div className="w-full">
      <div className="flex justify-center w-28 mx-auto ">
        <Button
          label="Write to us"
          onClick={() => setShowModal(true)}
          icon={Highlight}
          iconPosition="left"
          style="secondary"
        />
      </div>

      <Modal isOpen={showModal} onClose={() => setShowModal(false)}>
        <Modal.Header>
          <Typography style="h2">Can’t find what you came for?</Typography>
          <Typography className="font-extralight">
            Write to us about which category interests you and we will fetch
            them for you daily, for free.
          </Typography>
        </Modal.Header>
        <Formik
          initialValues={INITIAL_VALUES}
          onSubmit={handleSubmit}
          validationSchema={VALIDATION_SCHEMA}
        >
          <Form className="w-full">
            <Modal.Body>
              <div className="flex flex-row justify-between py-4">
                <div className="w-48">
                  <Input label="Name" name="name" placeHolder="Oliver Smith" />
                </div>
                <div className="w-48">
                  <Input
                    label="Email"
                    name="email"
                    placeHolder="oliver@example.com"
                  />
                </div>
              </div>
              <div>
                <Textarea
                  label="Message"
                  placeholder="Write your message here"
                  name="message"
                />
              </div>
            </Modal.Body>
            <Modal.Footer className="space-x-2">
              <Button
                type="submit"
                icon={Check}
                label="Continue"
                size="large"
              />
              <Button
                style="secondary"
                label="Cancel"
                onClick={() => setShowModal(false)}
                size="large"
              />
            </Modal.Footer>
          </Form>
        </Formik>
      </Modal>
    </div>
  );
};

export default WriteToUs;
