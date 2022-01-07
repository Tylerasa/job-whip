import React from "react";
import { toggle } from "../redux/floaterSlice";
import { useSelector, useDispatch } from "react-redux";

const Floater = () => {
  const dispatch = useDispatch();
  const value = useSelector((state) => state.floater.value);
  const handleClick = () => {
    dispatch(toggle());
  };
  return (
    <div
      style={{
        width: "50px",
        height: "50px",
        borderRadius: "50%",
        backgroundColor: value ? "#222" : "white",
        position: "fixed",
        bottom: "10px",
        right: "10px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        cursor: "pointer",
        boxShadow: " 10px 8px 44px 3px rgba(0,0,0,0.75)",
      }}
      onClick={handleClick}
    >
      {value ? (
        <i
          style={{
            color: "white",
            fontSize: "30px",
          }}
          className="fas fa-sun"
        ></i>
      ) : (
        <i
          style={{
            color: "black",
            fontSize: "30px",
          }}
          className="fas fa-moon"
        ></i>
      )}
    </div>
  );
};

export default Floater;
