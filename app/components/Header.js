import React from "react";
import Search from "../containers/Search";
import { ListGroupItem, Row, Col } from "react-bootstrap";

const Header = () => (
    <ListGroupItem className="header">
        <Row>
            <Col xs={8} md={8}>
               The to-do list exercise
            </Col>
            <Col xs={4} md={4}>
               <Search/>
            </Col>
        </Row>
    </ListGroupItem>
);

export default Header;