import Alert from "react-bootstrap/Alert";
import React from "react";
import { useState } from "react";
import { AlertHeading, Button } from "react-bootstrap";

function AlertExample() {
    const [show, setValue] = useState(true);
    return (
        <>
            <Alert
                show={show}
                variant="primary"
                dismissible
                onClose={() => {
                    setValue(false);
                }}
            >
                Hello
                <AlertHeading>this abhishek</AlertHeading>
            </Alert>
            {!show && <Button onClick={() => setValue(true)}>show</Button>}
            {[
                "primary",
                "secondary",
                "success",
                "danger",
                "warning",
                "info",
                "light",
                "dark",
            ].map((variant) => (
                <Alert key={variant} variant={variant}>
                    This is a {variant} alert—check it out!
                </Alert>
            ))}
        </>
    );
}

export default AlertExample;
