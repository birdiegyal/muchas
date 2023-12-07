import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import { useNavigate } from "react-router-dom"

export default function OnBoard() {

    const navigate = useNavigate()

    function handleChange(value) {
        switch (value) {
            case "Merchant":
                navigate("/merchsignup")
                break;
            case "Usr":
                navigate("/signup")
                break;
        }
    }


    return (
        <div className="m-auto">
            <Select onValueChange={handleChange}>
                <SelectTrigger className="mb-[23px] min-w-[200px] w-full bg-input text-[20px] focus:ring-[4px] hover:ring-2 outline-none">
                    <SelectValue placeholder="Who are you?" />
                </SelectTrigger>
                <SelectContent className=" self-center bg-secondary text-[24px] focus:ring-[4px] hover:ring-2 outline-none regular">
                    <SelectGroup>
                        <SelectLabel>Roles</SelectLabel>
                        <SelectItem className=" focus:text-background " value="Merchant">Merchant</SelectItem>
                        <SelectItem className=" focus:text-background " value="Usr" >User</SelectItem>
                    </SelectGroup>
                </SelectContent>
            </Select>
        </div>
    )
}


