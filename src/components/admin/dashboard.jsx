import React from "react";
import { Route, Routes } from "react-router-dom";
import SideBar from "./sideBar";
import Users from "./users";
import Posts from "./posts";

const Dashboard = () => {
  return (
    <div>
      <h1>Admin Dashboard</h1>
      <SideBar />
      <Routes>
        <Route path="/users" element={<Users />}></Route>
        <Route path="/posts" element={<Posts />}></Route>
      </Routes>
    </div>
  );
};

export default Dashboard;
