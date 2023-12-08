import Error from "@/components/shared/Error"
import { Button } from "@/components/ui/button"
import { ErrorMessage, Field, Form, Formik } from "formik"
import { Link } from "react-router-dom"
import * as Yup from 'yup'
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectTrigger,
    SelectValue,
    SelectLabel,
} from "@/components/ui/select"
import AddressInput from "@/components/shared/AddressInput"


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
        .required('Passcode is required.')
        .min(8, 'Passcode must be at least 8 characters.')
        .matches(/^(?=.*[a-zA-Z])(?=.*[0-9])/, 'Passcode must contain at least one digit, one letter, and one special character.'),
    PhNo: Yup
        .string()
        .required('Phone number is required.')
        .matches(/^\d{10}$/, 'Invalid phone number format.'),
    locationType: Yup.string().required('Location type is required').oneOf(['currentLocation', 'address']),
    currentLocation: Yup.array().when('locationType', {
        is: 'currentLocation',
        then: Yup.array().length(2).of(Yup.number().required('Latitude and longitude are required')),
    }),
    address: Yup.string().when('locationType', {
        is: 'address',
        then: Yup.string().required('Address is required').min(5).max(255),
    }),
})

export default function MerchSignup() {
    
    return (
        <Formik
            initialValues={{
                Usrname: '',
                Email: '',
                PhNo: '',
                Passcode: '',
            }}
            validationSchema={schema}
            onSubmit={async (values, { setSubmitting }) => {
                console.log(values)
                await onSubmit(values)
                // formikProps.handleReset()
                setSubmitting(false)


            }}
        >


            <Form className="flex flex-col w-full container md:w-2/5 px-2">


                <Field name="Usrname" type="text" placeholder="Usrname" className="form-input " id="Usrname" />
                <div className="min-h-[23px]">
                    <ErrorMessage name="Usrname" render={Error} id="UsrnameErrorMessage" />
                </div>


                <Field name="Email" type="text" placeholder="Email" className="form-input" id="Email" />
                <div className="min-h-[23px]">
                    <ErrorMessage name="Email" render={Error} id="EmailErrorMessage" />
                </div>


                <Field name="PhNo" type="number" placeholder="Phone number" className="form-input" id="PhNo" />
                <div className="min-h-[23px]">
                    <ErrorMessage name="PhNo" render={Error} id="PhNoErrorMessage" />
                </div>

                {/* <SelectDemo /> */}
                <div className="my-2">
                <AddressInput />
                </div>


                <Field name="Passcode" type="password" placeholder="Choose a new passcode" className="form-input" id="Passcode" />
                <div className="min-h-[23px]">
                    <ErrorMessage name="Passcode" render={Error} id="PasscodeErrorMessage" />
                </div>

                <Button type="submit" className="form-button">Signup</Button>

                <p className="text-small-regular text-white text-center mt-2">
                    Already have an account?
                    <Link
                        to="/signin"
                        className="text-primary-500 text-small-semibold ml-1">
                        Sign in
                    </Link>
                </p>
            </Form>
        </Formik>
    )
}

/* 
 WORKFLOW: 
 1. we'll add a select menu to choose a location type.
 2. validate the location entered 
 3. put it into our merchPtsColl
*/

export function SelectDemo() {

    function handleChange(value) {
        switch (value) {
            case "address":
                // let him enter the addy.
                return 'addy'
            case "currentLocation":
                // get the current location
                return 'loc'
        }
    }

    return (
        <Select onValueChange={handleChange}>
            <SelectTrigger className="mb-[23px] w-full bg-input text-[20px] focus:ring-[4px] hover:ring-2 outline-none ">
                <SelectValue placeholder="use Current location" />
            </SelectTrigger>
            <SelectContent className=" self-center bg-secondary text-[24px] focus:ring-[4px] hover:ring-2 outline-none regular">
                <SelectGroup>
                    <SelectLabel>Enter location</SelectLabel>
                    <SelectItem className=" focus:text-background " value="address">enter address</SelectItem>
                    <SelectItem className=" focus:text-background " value="currentLocation">use Current location</SelectItem>
                </SelectGroup>
            </SelectContent>
        </Select>
    )
}