import { useUsrContext } from "@/contexts/AuthContext";
import { useFormik } from 'formik';
import { Link, useNavigate } from "react-router-dom";
import FileUploader from "../shared/fileUploader";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";


export default function OfferForm() {
    const formik = useFormik({
        initialValues: {},
        onSubmit(values) {
            // upload the values to the offerColl.
            console.log(values)
        }
    })
    return (
        // <div className="flex-col gap-4">
            <form onSubmit={formik.handleSubmit} className="flex flex-col gap-4" >

                <FileUploader setFieldValue={formik.setFieldValue} />
                <Textarea placeholder="enter your offer description"/>

                <Button className="form-button" type="submit">Create offer</Button>
            </form>

        // </div>
    )
}