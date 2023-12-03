import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from "yup";

const schema = Yup.object().shape({
    Usrname: Yup
        .string()
        .required('Username is required.')
        .max(20, 'Username must be 20 characters or less'),
    Email: Yup
        .string()
        .required('Email is required.')
        .email('Invalid email format.'),
    Passcode: Yup
        .string()
        .required('Password is required.')
        .min(8, 'Password must be at least 8 characters.')
        .matches(/^(?=.*[a-zA-Z])(?=.*[0-9])/, 'Password must contain at least one digit, one letter, and one special character.'),
    PhNo: Yup
        .string()
        .required('Phone number is required.')
        .matches(/^\d{10}$/, 'Invalid phone number format.'),
})

export default function Signup() {

    return (

        <Formik
            initialValues={{
                Usrname: '',
                Email: '',
                PhNo: '',
                Passcode: '',
            }}
            validationSchema={schema}
            onSubmit={(values, { setSubmitting }) => {
                setTimeout(() => {
                    alert(JSON.stringify(values, null, 2));
                    setSubmitting(false);
                }, 400);
            }}
        >
            <Form className="flex flex-col w-full md:w-3/5 px-2">

                
                <Field name="Usrname" type="text" placeholder="Usrname"  className="form-input "/>
                <ErrorMessage name="Usrname" />

                
                <Field name="Email" type="text" placeholder="Email"  className="form-input"/>
                <ErrorMessage name="Email" />

                
                <Field name="PhNo" type="number" placeholder="Phone number" className="form-input"/>
                <ErrorMessage name="PhNo" />
                

                <Field name="Passcode" type="password" placeholder="Choose a new passcode"  className="form-input"/>
                <ErrorMessage name="Passcode" />

                <Button type="submit" className="form-button">Submit</Button>
            </Form>
        </Formik>
    )
}

/* 
 WORKFLOW: 
 
 1. usrname
 2. email
 3. phno
 4. choose password

*/

