import { convertFileToUrl } from "@/lib/utils";
import { useState } from "react";

export default function FileUploader({
    setFieldValue,
}) {
    const [fileUrl, setFileUrl] = useState("")
    return (
        <div>
            {fileUrl && (
                <div className="w-40 h-40 p-1 m-2 overflow-scroll">
                    <img src={fileUrl} alt="" className="object-cover rounded-lg "/>
                </div>
            )}
            <input
                type="file"
                name="image"
                accept="image/png, .svg, .jpg, .jpeg"
                onChange={(e) => {
                    if (e.currentTarget.files) {
                        setFieldValue("image", e.currentTarget.files[0]);
                        setFileUrl(convertFileToUrl(e.currentTarget.files[0]))
                    }

                }}
            />
        </div>
    )
}
