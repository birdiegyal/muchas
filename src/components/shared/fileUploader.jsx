import { convertFileToUrl } from "@/lib/utils";
import { ImagePlus } from "lucide-react";
import { useState } from "react";

export default function FileUploader({
    setFieldValue,
    name
}) {
    const [fileUrl, setFileUrl] = useState("")
    return (
        <div className="flex flex-col justify-center align-middle">
            {fileUrl ? (
                <div className="w-64 h-64 p-1 overflow-scroll">
                    <img src={fileUrl} alt="" className="object-cover rounded-lg"/>
                </div>
            ) : (<ImagePlus color="#cad2c5" size={128} className="self-center mt-1" />)}
            <input
                className="p-2 font-bold text-lg rounded-lg self-center"
                type="file"
                name={name}
                accept="image/png, .svg, .jpg, .jpeg"
                onChange={(e) => {
                    if (e.currentTarget.files) {
                        setFieldValue(name, e.currentTarget.files[0]);
                        setFileUrl(convertFileToUrl(e.currentTarget.files[0]))
                    }
                }}
            />
        </div>
    )
}
