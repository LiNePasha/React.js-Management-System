import React from "react";
import Login from "./LoginPage";
import TaskList from "../main/TaskList";

export const nav = [
     { path:     "/",         name: "Home",        element: <Login />,       isMenu: false,     isPrivate: false  },
     { path:     "/tasklist",  name: "Tasklist",     element: <TaskList />,    isMenu: false,     isPrivate: true  },
];
