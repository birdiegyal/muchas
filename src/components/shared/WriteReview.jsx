import { Formik, Field, Form, ErrorMessage } from "formik";
import React, { useState } from "react";
import Error from "@/components/shared/Error";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Link, useNavigate } from "react-router-dom";
import * as Yup from "yup";
import StarRatings from "./StarRatings";

const schema = Yup.object().shape({
  Title: Yup.string()
    .required("Title is required.")
    .max(100, "Title must be 100 characters or less"),
  Descriptions: Yup.string().max(
    1000,
    "Username must be 1000 characters or less"
  ),
});

const WriteReview = () => {
  const navigate = useNavigate();
  const [rating, setRating] = useState(0);

  const onSubmit = (values, { setSubmitting }) => {
    // Handle form submission here
    console.log("Submitted values:", values);

    // Simulate successful submission and redirect to profile page
    setSubmitting(false);
    navigate("/reviews");
  };

  return (
    <div className="max-w-2xl w-full  mx-2">
      <h1 className="text-2xl font-bold mx-2 text-center my-5">
        Write a review
      </h1>

      <Formik
        initialValues={{
          Title: "",
          Descriptions: "",
        }}
        validationSchema={schema}
        onSubmit={onSubmit}
      >
        <Form className="flex flex-col max-w-xl w-full mx-auto">
          <Field
            name="Title"
            type="text"
            placeholder="Title"
            className="form-input"
            id="Title"
          />

          <ErrorMessage name="Title" render={Error} id="UsrnameErrorMessage" />

          {/* <Field
            name="Bio"
            type="text"
            placeholder="Bio"
            className="form-input my-10"
            id="Bio"
          /> */}
          <div className="grid w-full gap-1.5 mx-2 my-5">
            <Label htmlFor="message" className="text-md">
              Descriptions
            </Label>
            <Textarea
              type="text"
              className="max-w-sm w-[96%] h-24  resize-none"
              placeholder="Descriptions"
              id="Descriptions"
            />
          </div>
          <div className="mb-5 mx-2 flex justify-center items-center flex-col">
            <div>Rate the Service</div>
            <StarRatings rating={rating} onRatingChange={setRating} />
          </div>

          <Button
            type="submit"
            className="form-button mt-5 w-full  hover:bg-input hover:text-white"
          >
            Post
          </Button>
        </Form>
      </Formik>
      <div className="text-center mt-5">
        <Link className="text-blue-500 hover:underline" to="/profile">
          Back to Reviews
        </Link>
      </div>
    </div>
  );
};

export default WriteReview;
