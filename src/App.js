import React from "react";
import MyList from "./MyList";

export default function App() {
  return (
    <div className="List-Wrapper">
      <header>Header</header>
      <div className="List-Wrapper">
        <MyList />
      </div>
    </div>
  );
}
