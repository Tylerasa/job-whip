import React from "react";

const Floater = () => {
  return (
    <div
      style={{
        width: "50px",
        height: "50px",
        borderRadius: "50%",
        backgroundColor: "#222",
        position: "absolute",
        bottom: "10px",
        right: "10px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <i
        style={{
          color: "white",
          fontSize: "30px",
        }}
        className="fas fa-moon"
      ></i>
    </div>
  );
};

export default Floater;
