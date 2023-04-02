import React from "react";
import { Button, Card } from "react-bootstrap";

export function StoreItem({ id, name, price, imgUrl,alt }) {
    return (
        <div>
            <article>
                <Card>
                    <Card.Img
                        variant="top"
                        src={imgUrl}
                        height="200rem"
                        style={{ objectFit: "cover" }}
                        alt={alt}
                    />
                    {/*height="200px"*/}
                    <Card.Body className="d-flex flex-column">
                        <Card.Title className="d-flex justify-content-between mb-4">
                            <span className="fs-2">{name}</span>
                            {/*ms-2 : margin-start 2 to prevent title and price from overlapping */}
                            <span className="ms-2 text-secondary">
                                {price}
                            </span>
                        </Card.Title>
                        <Card.Text>Some text</Card.Text>
                        <Button variant="primary">Click</Button>
                    </Card.Body>
                </Card>
            </article>
        </div>
    );
}
