import React from "react";
import "./Burger.css";
import { AiTwotoneHome } from "react-icons/ai";
import { BsFillBookFill } from "react-icons/bs";
import { AiFillContacts } from "react-icons/ai";

const Burger = () => {
  return (
    <div className="mainBurger">
      <div>
        <div className="BurgerNavigation">
          <AiTwotoneHome />
          <span>Home</span>
        </div>

        <div className="BurgerNavigation">
          <BsFillBookFill />
          <span>About</span>
        </div>

        <div className="BurgerNavigation">
          <AiFillContacts />
          <span>Contact</span>
        </div>
      </div>
    </div>
  );
};

export default Burger;
