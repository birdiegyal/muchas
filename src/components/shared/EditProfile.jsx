import { useFormik } from "formik";
import React from "react";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Link, useNavigate } from "react-router-dom";
import FileUploader from "./fileUploader";


const EditProfile = () => {
  const navigate = useNavigate()
  const formik = useFormik({
    initialValues: {
      Usrname: "",
      Bio: "",
      Avatar: "",
    },
    onSubmit(values, { setSubmitting }) {
      // Handle form submission here
      console.log("Submitted values:", values);

      // Simulate successful submission and redirect to profile page
      setSubmitting(false);
      navigate("/profile");

    }
  })

  return (
    <form onSubmit={formik.handleSubmit}>
      <div className="max-width-[96%] sm:mx-auto w-full  mx-2">
        <h1 className="text-2xl font-bold mx-2 text-center my-5">Edit Profile</h1>
        <div className="flex flex-col max-w-xl w-full ">
          <div className="p-2 my-2 rounded bg-primary opacity-60 min-h-[30vh]">
            <p className="font-semibold text-[24px]">change Avatar</p>
            <FileUploader name={"Avatar"} setFieldValue={formik.setFieldValue}/>
          </div>

          <input type="text"
            name="Usrname"
            value={formik.values.Usrname}
            onChange={formik.handleChange}
            placeholder="Usrname"
            className="form-input"
            id="Usrname"

          />

          <div className="grid w-full gap-1.5 mx-2 my-5">
            <Label htmlFor="message" className="text-md">
              Bio
            </Label>
            <Textarea
              type="text"
              name="Bio"
              value={formik.values.Bio}
              onChange={formik.handleChange}
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
        </div>
        <div className="text-center mt-5">
          <Link className="text-blue-500 hover:underline" to="/profile">
            Back to Profile
          </Link>
        </div>
      </div>
    </form>
  );
};

export default EditProfile;
