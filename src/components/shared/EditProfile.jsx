import { useFormik } from "formik";
import React from "react";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Link, useNavigate } from "react-router-dom";
import FileUploader from "./fileUploader";
import { Home } from "lucide-react";

const EditProfile = () => {
  const navigate = useNavigate();
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
    },
  });

  return (
    <form
      onSubmit={formik.handleSubmit}
      className="w-full h-full max-w-2xl mx-auto"
    >
      <div className="mx-2 ">
        <div className="flex justify-between my-4">
          <p className="font-bold text-[30px] mx-2  underline">Edit Profile</p>
          <Link to="/">
            <Home
              color="#cad2c5"
              size={28}
              className="self-center mt-3  text-center"
            />
          </Link>
        </div>
        <div className="flex flex-col max-w-2xl mx-auto w-full ">
          <p className="font-semibold mt-4 text-[18px] text-center">
            Change Avatar
          </p>
          <div className="p-2 my-5 w-full rounded-lg bg-primary opacity-60 min-h-[30vh]">
            <FileUploader
              name={"Avatar"}
              setFieldValue={formik.setFieldValue}
            />
          </div>

          <input
            type="text"
            name="Usrname"
            value={formik.values.Usrname}
            onChange={formik.handleChange}
            placeholder="Usrname"
            className="form-input mx-2    "
            id="Usrname"
          />

          <div className="grid w-full gap-1.5 max-w-2xl my-5">
            <Label htmlFor="message" className="text-md">
              Bio
            </Label>
            <Textarea
              type="text"
              name="Bio"
              value={formik.values.Bio}
              onChange={formik.handleChange}
              className=" w-full h-24  resize-none"
              placeholder="Bio"
              id="Bio"
            />
          </div>
          <Button
            type="submit"
            className="form-button mt-5 w-full  hover:bg-input hover:text-white"
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
