import { convertFileToUrl } from "@/lib/utils";
import { ImagePlus } from "lucide-react";
import { useState } from "react";

export default function FileUploader({ setFieldValue, name }) {
  const [fileUrl, setFileUrl] = useState("");
  return (
    <div className="max-w-[96%] flex flex-col gap-5 items-center justify-center align-middle">
      {fileUrl ? (
        <div className="w-60 h-60 p-1 overflow-scroll my-4">
          <img src={fileUrl} alt="" className="object-cover rounded-lg" />
        </div>
      ) : (
        <ImagePlus color="#cad2c5" size={110} className="self-center mt-1" />
      )}

      <input
        className="p-2 font-bold  text-lg mx-auto rounded-lg  text-center"
        type="file"
        name={name}
        accept="image/png, .svg, .jpg, .jpeg"
        onChange={(e) => {
          if (e.currentTarget.files) {
            setFieldValue(name, e.currentTarget.files[0]);
            setFileUrl(convertFileToUrl(e.currentTarget.files[0]));
          }
        }}
      />
    </div>
  );
}
