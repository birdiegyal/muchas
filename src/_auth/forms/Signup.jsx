import Error from "@/components/shared/Error";
import { Button } from "@/components/ui/button";
import { useUsrContext } from "@/contexts/AuthContext";
import {
  useCreateUserAcMutation,
  useSignInAcMutation,
} from "@/lib/react-query/queriesAndMutations";
import { Formik, Field, Form, ErrorMessage, useFormik } from "formik";
import { Link, useNavigate } from "react-router-dom";
import * as Yup from "yup";

const schema = Yup.object().shape({
  Usrname: Yup.string()
    .required("Username is required.")
    .max(20, "Username must be 20 characters or less"),
  Email: Yup.string()
    .required("Email is required.")
    .email("Invalid email format."),
  Passcode: Yup.string()
    .required("Passcode is required.")
    .min(8, "Passcode must be at least 8 characters.")
    .matches(
      /^(?=.*[a-zA-Z])(?=.*[0-9])/,
      "Passcode must contain at least one digit, one letter, and one special character."
    ),
  PhNo: Yup.string()
    .required("Phone number is required.")
    .matches(/^\d{10}$/, "Invalid phone number format."),
});

export default function Signup() {
  // case: when usrs logged in
  const { checkUsrAuth } = useUsrContext();
  const navigate = useNavigate();

  //  TODO:
  // case: when usrs signing up
  const { mutateAsync: createUserAc, isPending: isCreatingUser } =
    useCreateUserAcMutation();

  //  TODO:
  // case: when usrs signing in
  const { mutateAsync: signinAc } = useSignInAcMutation();

  //  FIXME:
  async function onSubmit(values) {
    const newUser = await createUserAc(values);

    if (!newUser) {
      // toast({ title: "❌ signup failed ❌", })
      return;
    }

    const session = signinAc({
      email: values.Email,
      passcode: values.Passcode,
    });

    if (!session) {
      /*            toast({
                           title: "❌ signin failed ❌"
                       }) */

      return;
    }

    const isUsrLoggedIn = await checkUsrAuth();

    if (isUsrLoggedIn) {
      // toast({ title: "✅ sign in succeed ✅" })
      // form.reset()
      navigate("/");
    } else {
      /*             toast({
                            title: "❌ signup failed. try logging in again ❌"
                        }) */

      return;
    }
  }

  return (
    <Formik
      initialValues={{
        Usrname: "",
        Email: "",
        PhNo: "",
        Passcode: "",
      }}
      validationSchema={schema}
      onSubmit={async (values, { setSubmitting }) => {
        console.log(values);
        await onSubmit(values);
        // formikProps.handleReset()
        setSubmitting(false);
      }}
    >
      <Form className="flex flex-col w-full md:w-2/5 px-2">
        <Field
          name="Usrname"
          type="text"
          placeholder="Usrname"
          className="form-input "
          id="Usrname"
        />
        <div className="min-h-[22.39px]">
          <ErrorMessage
            name="Usrname"
            render={Error}
            id="UsrnameErrorMessage"
          />
        </div>

        <Field
          name="Email"
          type="text"
          placeholder="Email"
          className="form-input"
          id="Email"
        />
        <div className="min-h-[22.39px]">
          <ErrorMessage name="Email" render={Error} id="EmailErrorMessage" />
        </div>

        <Field
          name="PhNo"
          type="number"
          placeholder="Phone number"
          className="form-input"
          id="PhNo"
        />
        <div className="min-h-[22.39px]">
          <ErrorMessage name="PhNo" render={Error} id="PhNoErrorMessage" />
        </div>

        <Field
          name="Passcode"
          type="password"
          placeholder="Choose a new passcode"
          className="form-input"
          id="Passcode"
        />
        <div className="min-h-[22.39px]">
          <ErrorMessage
            name="Passcode"
            render={Error}
            id="PasscodeErrorMessage"
          />
        </div>

        <Button type="submit" className="form-button">
          Signup
        </Button>

        <p className="text-small-regular text-white text-center mt-2">
          Already have an account?
          <Link
            to="/signin"
            className="text-primary-500 text-small-semibold ml-1"
          >
            Sign in
          </Link>
        </p>
      </Form>
    </Formik>
  );
}

/* 
 WORKFLOW: 
 
 1. usrname
 2. email
 3. phno
 4. choose Passcode

*/
