import Badge from "react-bootstrap/Badge";
import Button from "react-bootstrap/Button";
import React from "react";
function BagdeExample() {
    return (
        <>
            <Button variant="primary">
                Profile <Badge bg="secondary">9</Badge>
            </Button>
            <Badge>abhishek</Badge>
        </>
    );
}

export default BagdeExample;
