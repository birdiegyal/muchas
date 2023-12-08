import Error from "@/components/shared/Error";
import { Button } from "@/components/ui/button";
import { useUsrContext } from "@/contexts/AuthContext";
import { useSignInAcMutation } from "@/lib/react-query/queriesAndMutations";
import { Formik, Field, Form, ErrorMessage } from 'formik';
import { Link, useNavigate } from "react-router-dom";
import * as Yup from "yup";

const schema = Yup.object().shape({

    Email: Yup
        .string()
        .required('Email is required.')
        .email('Invalid email format.'),
    Passcode: Yup
        .string()
        .required('Passcode is required.')
        .min(8, 'Passcode must be at least 8 characters.')
        .matches(/^(?=.*[a-zA-Z])(?=.*[0-9])/, 'Passcode must contain at least one digit, one letter, and one special character.'),

})


export default function Signin() {

    const navigate = useNavigate()

    // case: when usrs logged in
    const { checkUsrAuth } = useUsrContext()

    // case: when usrs signing in
    const { mutateAsync: signinAc, isPending: isSigningIn } = useSignInAcMutation()


    async function onSubmit(values) {

        const session = signinAc({
            email: values.Email,
            passcode: values.Passcode,
        })

        if (!session) {
            /*             toast({
                            title: "❌ signin failed ❌"
                        }) */

            return
        }
        const isUsrLoggedIn = await checkUsrAuth()
        if (isUsrLoggedIn) {
            // toast({ title: "✅ sign in succeed ✅" })
            // form.reset()
            navigate("/")
        } else {
            // toast({
            //     title: "❌ signup failed. try logging in again ❌"
            // })
            return
        }


    }

    return (

        <Formik
            initialValues={{

                Email: '',

                Passcode: '',
            }}
            validationSchema={schema}
            onSubmit={(values, { setSubmitting }) => {
                onSubmit(values)
                setSubmitting(false)

            }}
        >

            <Form className="flex flex-col w-full md:w-2/5 px-2">



                <Field name="Email" type="text" placeholder="Email" className="form-input" id="Email" />
                <div className="min-h-[22.39px]">
                    <ErrorMessage name="Email" render={Error} id="EmailErrorMessage" />
                </div>


                <Field name="Passcode" type="password" placeholder="Passcode" className="form-input" id="Passcode" />
                <div className="min-h-[22.39px]">
                    <ErrorMessage name="Passcode" render={Error} id="PasscodeErrorMessage" />
                </div>

                <Button type="submit" className="form-button">Signin</Button>

                <p className="text-small-regular text-white text-center mt-2">
                    Don't have an account?
                    <Link
                        to="/onboard"
                        className="text-primary-500 text-small-semibold ml-1">
                        Sign up
                    </Link>
                </p>
            </Form>
        </Formik>
    )
}

/* 
 WORKFLOW: 
 
 1. email
 2. choose Passcode

*/

