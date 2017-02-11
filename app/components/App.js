import React from "react";
import Footer from "./Footer";
import AddTodo from "../containers/AddTodo";
import Header from "./Header";
import VisibleTodos from "../containers/VisibleTodos";
import { Grid, ListGroup, Row, Col } from "react-bootstrap";

const App = () => (
    <Grid>
        <Row className="show-grid">
            <Col xs={12} md={8}>
                <ListGroup>
                    <Header/>
                    <AddTodo />
                    <VisibleTodos />
                </ListGroup>
                <Footer />
            </Col>
        </Row>
    </Grid>
);

export default App