import React from "react";
import { Container, Navbar as NavBs,Nav, Button } from "react-bootstrap";
import { NavLink } from "react-router-dom";
// import "CartIcon" from "../assets/cart.svg";

export function Navbar() {
    return (
        <NavBs sticky="top" className="bg-white shadow-sm mb-3">
            <Container>
                <Nav className="me-auto">
                    {" "}
                    {/* me=margin from end , fills Navbar so that the cart button is pushed to the end of Navbar */}
                    <Nav.Link as={NavLink} to="/">
                        Home
                    </Nav.Link>
                    <Nav.Link as={NavLink} to="/store">
                        Store
                    </Nav.Link>
                    <Nav.Link as={NavLink} to="/about">
                        About
                    </Nav.Link>
                </Nav>
                <Button
                    style={{
                        width: "3rem",
                        height: "3rem",
                        position: "relative",
                    }}
                    variant="outline-info"
                    className="rounded-circle"
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                    >
                        <path d="M10 19.5c0 .829-.672 1.5-1.5 1.5s-1.5-.671-1.5-1.5c0-.828.672-1.5 1.5-1.5s1.5.672 1.5 1.5zm3.5-1.5c-.828 0-1.5.671-1.5 1.5s.672 1.5 1.5 1.5 1.5-.671 1.5-1.5c0-.828-.672-1.5-1.5-1.5zm1.336-5l1.977-7h-16.813l2.938 7h11.898zm4.969-10l-3.432 12h-12.597l.839 2h13.239l3.474-12h1.929l.743-2h-4.195z" />
                    </svg>
                    <div
                        className="rounded-circle bg-secondary d-flex justify-content-center align-items-center"
                        style={{
                            color: "white",
                            position: "absolute",
                            right: 0,
                            bottom: 0,
                            height:"1.5rem",
                            width:"1.5rem",
                            transform:"translate(30%,30%)"
                        }}
                    >
                        10
                    </div>
                </Button>
            </Container>
        </NavBs>
    );
}
