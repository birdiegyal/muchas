import { useUsrContext } from "@/contexts/AuthContext";
import { useFormik } from 'formik';
import { Link, useNavigate } from "react-router-dom";
import FileUploader from "../shared/fileUploader";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";
import { useCreateOfferMutation } from "@/lib/react-query/queriesAndMutations";
import Loader from "../shared/Loader";


export default function OfferForm() {
    const {usr} = useUsrContext()
    const {mutateAsync: createOffer, isPending: isCreatingOffer} = useCreateOfferMutation()

    const formik = useFormik({
        initialValues: {
            image: '',
            offerDesc: '',
        },
        onSubmit(values) {
            // // upload the values to the offerColl.
            async function success({coords}){
                const offer = {
                    file: [values.image,],
                    userID: usr.id,
                    offerDesc: values.offerDesc,
                    geocode: [coords.longitude, coords.latitude]

                }

                const offerRes = await createOffer(offer)
            }
            function error(error){
                console.error(error);
            }
            const locator = navigator.geolocation.getCurrentPosition(success, error)
        }
    })

    return (
            <form onSubmit={formik.handleSubmit} className="flex flex-col gap-4" >

                <FileUploader name={"image"} setFieldValue={formik.setFieldValue}/>
                
                <Textarea name="offerDesc" onChange={formik.handleChange} value={formik.values.offerDesc} placeholder="enter your offer description"/>


                <Button className="form-button" type="submit">
                    {isCreatingOffer && <Loader />}
                    Create offer
                    </Button>
            </form>
    )
}
