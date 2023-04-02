import React from "react";
import { Button, Card } from "react-bootstrap";
import { currencyFormat } from "../utilities/currencyFormat";

export function StoreItem({ id, name, price, imgUrl,alt }) {
    const quantity=1;
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
                                {currencyFormat(price)}
                            </span>
                        </Card.Title>
                        <Card.Text>Some text</Card.Text>
                        {quantity===0?(<Button variant="primary">+ Add to Cart</Button>):<div className="d-flex flex-column align-items-center" style={{gap:"1rem"}}>
                                <div className="d-flex" style={{gap:"1rem"}}>
                                    <Button>-</Button>
                                    <div>
                                        <span className="fs-3">{quantity} </span>
                                        in cart
                                    </div>
                                    <Button>+</Button>
                                </div>
                                <Button variant="danger">Remove</Button>
                            </div>}
                    </Card.Body>
                </Card>
            </article>
        </div>
    );
}
