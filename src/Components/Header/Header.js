import React, { useState } from "react";
import "./Header.css";
import { AiTwotoneHome } from "react-icons/ai";
import { BsFillBookFill } from "react-icons/bs";
import { AiFillContacts } from "react-icons/ai";
import { GiHamburgerMenu } from "react-icons/gi";
import { GiCancel } from "react-icons/gi";
import Burger from "../BurgerClick/Burger";

const Header = () => {
  const [toggle, setToggle] = useState(false);

  const toggleChange = () => {
    setToggle(!toggle);
  };
  return (
    <>
      <div className="mainHeader">
        <div className="headerHold">
          <div className="LogoDiv">LOGO</div>

          <div className="NavDivs">
            <div className="Navigation">
              <AiTwotoneHome />
              <span>Home</span>
            </div>

            <div className="Navigation">
              <BsFillBookFill />
              <span>About</span>
            </div>

            <div className="Navigation">
              <AiFillContacts />
              <span>Contact</span>
            </div>
          </div>

          <div className="burgerIconHold" onClick={toggleChange}>
            {toggle ? (
              <GiCancel color="white" size="25px" />
            ) : (
              <GiHamburgerMenu color="white" size="25px" />
            )}
          </div>
        </div>
      </div>
      <div className="BuggerContentHold">{toggle ? <Burger /> : null}</div>
    </>
  );
};

export default Header;
