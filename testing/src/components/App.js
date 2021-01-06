import React from "react";
import CommentBox from "components/CommentBox";
import CommentList from "components/CommentList";

const App = () => {
  return (
    <div>
      <CommentList />
      <CommentBox />
    </div>
  );
};

export default App;
