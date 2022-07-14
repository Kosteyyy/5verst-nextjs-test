import React from "react";
import A from "./A";

const MainContainer = ({ children }) => {
  return (
    <>
      <div className="navbar">
        <A href="/" text="Главная" />
        <A href="/map" text="Карта" />
      </div>
      <div className="content-container">{children}</div>
      <style jsx>
        {`
          .navbar {
            background: orange;
            padding: 15px;
          }
        `}
      </style>
    </>
  );
};

export default MainContainer;
