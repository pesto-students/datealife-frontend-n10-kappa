import { render, cleanup } from "@testing-library/react";
import Modal, { ModalProps } from "./Modal";

describe("Modal component", () => {
    afterEach(cleanup);
    const component = <Modal {...{modalOpen: true} as ModalProps}/>;
    test("Renders modal ", () => {
        const result = render(component);
        expect(result).not.toBeUndefined();
    });
});
