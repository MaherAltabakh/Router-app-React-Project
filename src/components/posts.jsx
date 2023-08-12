import React from "react";
import { useParams } from "react-router-dom";
// import {  useLocation } from "react-router-dom";
// import queryString from "query-string";

const Posts = () => {
  const parameters = useParams();
  // const result = queryString.parse(useLocation().search);
  // console.log("result:", result);

  return (
    <div>
      <h1>Posts</h1>
      Year: {parameters.year}, Month: {parameters.month}
    </div>
  );
};

export default Posts;
