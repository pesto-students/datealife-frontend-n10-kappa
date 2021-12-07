import { useState, useEffect } from "react";
import { BoxProps as MUIBoxProps } from "@mui/system";
import Input from "@mui/material/Input";
import AddOutlinedIcon from "@mui/icons-material/AddOutlined";
import CloseOutlinedIcon from "@mui/icons-material/CloseOutlined";
import {
    ImageUploaderContainer,
    ImageUploaderContent,
    AddButtonContainer,
    AddButtonContent,
    ImageUplaoderImage,
    ImageUplaoderSvg,
} from "./ImageUploader.style";

export interface ImageUploaderProps extends MUIBoxProps<"div", unknown> {
    canUpload?: boolean;
    onUpload?: (file: File) => void;
    removeFile?: () => void;
    src?: string;
    width?: number;
    height?: number;
    maxHeight?: number;
    maxWidth?: number;
    alt?: string;
}

const ImageUploader = ({ canUpload, onUpload, removeFile, src, alt, ...restProps }: ImageUploaderProps): JSX.Element => {
    const [file, setFile] = useState<string | undefined>(src);

    useEffect(() => {
        setFile(src || "");
    }, [src]);

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
            removeFile && removeFile();
        }
    };
    const id: string = Date.now().toString();

    return (
        <ImageUploaderContainer {...restProps} >
            <ImageUploaderContent {...restProps} data-testid="image-section">
                {file ? (
                    <ImageUplaoderImage src={file} alt={alt || "Uploaded image"} width={restProps?.width} />
                ) : (
                    <ImageUplaoderSvg
                        xmlns="http://www.w3.org/2000/svg"
                        preserveAspectRatio="none"
                        title="no image"
                        focusable="false"
                        role="img"
                    >
                        <rect width="100%" height="100%" fill="#959595"></rect>
                    </ImageUplaoderSvg>
                )}
            </ImageUploaderContent>
            {canUpload && (
                <AddButtonContainer data-testid="image-upload-button">
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
