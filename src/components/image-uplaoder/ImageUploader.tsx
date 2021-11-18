import { BoxProps as MUIBoxProps } from "@mui/system";
import AddOutlinedIcon from "@mui/icons-material/AddOutlined";
import CloseOutlinedIcon from "@mui/icons-material/CloseOutlined";
import {
    ImageUploaderContainer,
    ImageUploaderContent,
    AddButtonContainer,
    AddButtonContent,
    ImageUplaoderImage,
} from "./ImageUploader.style";
import Input from "@mui/material/Input";
import { useState } from "react";

export interface ImageUploaderProps extends MUIBoxProps<"div", unknown> {
    canUpload?: boolean;
    onUpload?: (file: File) => void;
    width?: number;
    height?: number;
}

const ImageUploader = ({ canUpload, onUpload, ...restProps }: ImageUploaderProps): JSX.Element => {
    const [file, setFile] = useState<string>();
    const handleChange = (e: any) => {
        const latestFile = e.target.files[0];
        setFile(URL.createObjectURL(latestFile).toString());
        onUpload && onUpload(latestFile);
    };

    const handleClick = (e: any) => {
        if (file) {
            e.preventDefault();
            setFile("");
            e.target.value = null;
        }
    };
    const id: string = Date.now().toString();

    return (
        <ImageUploaderContainer {...restProps}>
            <ImageUploaderContent {...restProps}>{file && <ImageUplaoderImage src={file} />}</ImageUploaderContent>
            {canUpload && (
                <AddButtonContainer>
                    <label htmlFor={id}>
                        <Input id={id} type="file" sx={{ display: "none" }} onChange={handleChange} onClick={handleClick} />
                        <AddButtonContent component="span" color="secondary" size="small">
                            {file ? <CloseOutlinedIcon aria-label="file remove" /> : <AddOutlinedIcon aria-label="file upload" />}
                        </AddButtonContent>
                    </label>
                </AddButtonContainer>
            )}
        </ImageUploaderContainer>
    );
};

export default ImageUploader;
