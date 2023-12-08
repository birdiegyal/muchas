export default function FileUploader({
    setFieldValue,
}) {
    return (
        <div>
            <input
                type="file"
                name="image"
                accept="image/png, .svg, .jpg, .jpeg"
                onChange={(e) => {
                    if (e.currentTarget.files) {
                        setFieldValue("image", e.currentTarget.files[0]);
                    }
                }}
            />
        </div>
    )
}
