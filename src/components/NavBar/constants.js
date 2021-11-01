import * as yup from "yup";

const VALIDATION_SCHEMA = yup.object({
    email: yup.string().email().required("Email required"),
});

const INITIAL_VALUES = {
    email: "",
};

export {VALIDATION_SCHEMA, INITIAL_VALUES}