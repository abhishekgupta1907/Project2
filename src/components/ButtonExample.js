import Button from "react-bootstrap/Button";
import React from "react";

function ButtonExample() {
    return (
        <>
            <Button href="www.google.com" variant="outline-primary">
                Primary
            </Button>{" "}
            <Button size="lg" variant="secondary">
                Secondary
            </Button>{" "}
            <Button size="sm" variant="success">
                Success
            </Button>{" "}
            <Button active={true} variant="warning">
                Warning
            </Button>{" "}
            <Button variant="danger">Danger</Button>{" "}
            <Button variant="info">Info</Button>{" "}
            <Button variant="light">Light</Button>{" "}
            <Button variant="dark">Dark</Button>
            <Button variant="link">Link</Button>
            <Button as="input" type="button" value="click" />
        </>
    );
}

export default ButtonExample;
