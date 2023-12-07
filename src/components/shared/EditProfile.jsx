import { Formik, Field, Form, ErrorMessage } from "formik";
import React from "react";
import Error from "@/components/shared/Error";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Link, useNavigate } from "react-router-dom";
import * as Yup from "yup";

const schema = Yup.object().shape({
  Usrname: Yup.string()
    .required("usrname is required.")
    .max(20, "Username must be 20 characters or less"),
  Bio: Yup.string().max(200, "Username must be 200 characters or less"),
});

const EditProfile = () => {
  const navigate = useNavigate();

  const onSubmit = (values, { setSubmitting }) => {
    // Handle form submission here
    console.log("Submitted values:", values);

    // Simulate successful submission and redirect to profile page
    setSubmitting(false);
    navigate("/profile");
  };

  return (
    <div className="max-w-2xl w-full mt-24 mx-2">
      <h1 className="text-2xl font-bold mx-2 text-center my-5">Edit Profile</h1>

      <Formik
        initialValues={{
          Usrname: "",
          Bio: "",
        }}
        validationSchema={schema}
        onSubmit={onSubmit}
      >
        <Form className="flex flex-col max-w-xl w-full mx-auto">
          <Field
            name="Usrname"
            type="text"
            placeholder="Usrname"
            className="form-input"
            id="Usrname"
          />

          <ErrorMessage
            name="Usrname"
            render={Error}
            id="UsrnameErrorMessage"
          />

          {/* <Field
            name="Bio"
            type="text"
            placeholder="Bio"
            className="form-input my-10"
            id="Bio"
          /> */}
          <div className="grid w-full gap-1.5 mx-2 my-5">
            <Label htmlFor="message" className="text-md">
              Bio
            </Label>
            <Textarea
              type="text"
              className="max-w-sm w-[96%] h-24  resize-none"
              placeholder="Bio"
              id="Bio"
            />
          </div>

          <Button
            type="submit"
            className="form-button mt-5  hover:bg-input hover:text-white"
          >
            Save
          </Button>
        </Form>
      </Formik>
      <div className="text-center mt-5">
        <Link className="text-blue-500 hover:underline" to="/profile">
          Back to Profile
        </Link>
      </div>
    </div>
  );
};

export default EditProfile;
