import { render, cleanup } from "@testing-library/react";
import ImageUploader from "./ImageUploader";

describe("Image uploader component", () => {
    afterEach(cleanup);

    test("Renders image uploader component", () => {
        const result = render(<ImageUploader />);
        expect(result).not.toBeUndefined();
    });

    test("Displays image section", () => {
        const { getByTestId } = render(<ImageUploader />);
        expect(getByTestId("image-section")).not.toBeUndefined();
    });

    test("Displays upload button", () => {
        const { getByTestId } = render(<ImageUploader canUpload={true} />);
        expect(getByTestId("image-upload-button")).not.toBeUndefined();
    });
});
