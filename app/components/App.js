import React from "react";
import Footer from "./Footer";
import AddTodo from "../containers/AddTodo";
import Search from "../containers/Search";
import VisibleTodos from "../containers/VisibleTodos";

const App = () => (
    <div>
        <Search/>
        <AddTodo />
        <VisibleTodos />
        <Footer />
    </div>
);

export default App