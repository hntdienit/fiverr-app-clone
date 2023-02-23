import React, { useState } from "react";
import { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

import "./Navbar.scss";

const Navbar = () => {
  const [active, setActive] = useState(false);
  const [open, setOpen] = useState(false);

  const isActive = () => {
    window.scrollY > 0 ? setActive(true) : setActive(false);
  };

  const { pathname } = useLocation();

  useEffect(() => {
    window.addEventListener("scroll", isActive);

    return () => {
      window.removeEventListener("scroll", isActive);
    };
  }, []);

  const currentUser = {
    id: 1,
    usename: "thanh dien",
    isSeller: true,
  };

  return (
    <div className={active || pathname !== "/" ? "navbar active" : "navbar"}>
      <div className="container">
        <div className="logo">
          <Link to={"/"} className="link">
            <span className="text">fiverr</span>
          </Link>

          <span className="dot">.</span>
        </div>
        <div className="links">
          <span>Fiverr Business</span>
          <span>Explore</span>
          <span>English</span>
          <span>Sign in</span>
          {!currentUser?.isSeller && <span>Become a Seller</span>}
          {!currentUser && <button>Join</button>}
          {currentUser && (
            <>
              <div
                className="user"
                onClick={() => {
                  setOpen(!open);
                }}
              >
                <img
                  src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBwgHBgkIBwgKCgkLDRYPDQwMDRsUFRAWIB0iIiAdHx8kKDQsJCYxJx8fLT0tMTU3Ojo6Iys/RD84QzQ5OjcBCgoKDQwNGg8PGjclHyU3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3N//AABEIAIMA6QMBIgACEQEDEQH/xAAaAAEAAwEBAQAAAAAAAAAAAAAAAgMEBQEH/8QAMBAAAgIBAwEGBAUFAAAAAAAAAAECAxEEEiExIjJBUWFxExSBkQUjQsHwUnKhseH/xAAZAQEBAQEBAQAAAAAAAAAAAAAAAwECBAX/xAAgEQEBAQACAgIDAQAAAAAAAAAAAQIREgMxIVETMkEi/9oADAMBAAIRAxEAPwD6CAD5L64AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADQAHoYAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAZ5auuNzpxLesY9crP8+nmjQThVZY+xGTz5Gycst4ZlfupVka7eWlhxafXy8iiOo1TinPSWbtiyuF2jpz02zm62qvz3TI40vjrqPo8nfSue+WPV3WadSnGnfWoNuW7GMFa1k42RU6ZbbLNtcsrx+vpn2OiqqbOIarTzz4bjyeltik5V7lHlNYa9zLmxvafbJdqPgy2ui5xxxKuG7+eH3Ix1sJTsjFSaj3ZY73t90ac85Q6rk5dQx6/QAAAAYAAAAAAAAAAAAAAAAAAAAAAAXaOCs1NcWvHk2Tm8Mt4nL3bXp4Rnet9kuY1+nmyUFqdV3rI01eEY8HM0t1us10dTOUXB2cwT5UfVHZho7bJylKNddTfCS7US2Zz6R1ePmqZ6LT196x59up5XoU08aanHnOKybfkYw5hKUceKf7GXT6q61yUIuW147cccHVzOfmOZvVnxeVFmghGmUXB1t/qik0Z9HpdTVN/L6iS8lF8P7nST7WdWpcdF+kstnTYkowU5PptM6/R3rL2ptV62CqtlxGyK7Mn6lNkJVycZrDXgW67dTSvjW8N4UW84Iyn8bSae595xw354ONx3iqgASWAAAAAAAAAAAAAAAAAAAAAAAAC/RvF8X6FBZpmo3Rb9jvH7Rzv9alp9E9J+K/GqinprW5Npcwl5N+XJ1q7JTTmuUuMLo/qVVNKXa6YxjzJ7oQszFd5JPH+z1dePTx22rFP8xwa546dTPrLKtIpXtYT5nz7L9y1KcZK2U4J+KS/chOMLYv40YWNtNR3ccdB8uf6zPUq2ezeqku9nr/AMKdTqdBpYtu5Rmunw5Zk/cxWfg19monZ8xCndLdiDlJ8+vBdR+CaSD33uy+Wedzwn9uTiTd/i3+J6rAvmPxjVZqTVcViVk1xFHX1MIwoqrhlQh2V9jSksRqrjGKXSKWEl7Hso11P822Kfryb+PifLO/N9OWDpuELINxcZx9DBfX8Oz0fKI78fWcr48na8KwASUAAAAAAAAAAAAAAAAAAAAAAZxj0eQDT26Vc98FNeJMwae74bxLuM3JppNPhnsxuajx+TFzUsvGMnh4DtMLW/yY/wBzKic32IxXgn1NFe6UN23HPjnoZNRGU59mM3FeOOpbK2FfeT3eJ585H+iX3JbubOLVcZ1LzI90Vc65ScspNY256lWskviKPikJ6qUk1FbfXxM+W+X1Ib3OvXK2M67dqAAmqAAwAAAAAAAAAAAAAAAAAAAAAAnXbOruvjyIA2Wz0yyX22R1cf1pr1RP5mn+v/BgBWebUT/DlueqqXR59kU26ucuI8Lz8TODL5dVs8WYN5fIAJqAAMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAB/9k="
                  alt="Logo_CTU"
                />
                <span>{currentUser?.usename}</span>
                {open && (
                  <div className="options">
                    {currentUser?.isSeller && (
                      <>
                        <Link className="link" to={"/gig"}>
                          Gig
                        </Link>
                        <Link className="link" to={"/add"}>
                          A New Gig
                        </Link>
                      </>
                    )}
                    <Link className="link" to={"/orders"}>
                      Orders
                    </Link>
                    <Link className="link" to={"/messages"}>
                      Messages
                    </Link>
                    <Link className="link" to={"/"}>
                      LogOut
                    </Link>
                  </div>
                )}
              </div>
            </>
          )}
        </div>
      </div>

      {(active || pathname !== "/") && (
        <>
          <hr />
          <div className="menu">
            <Link className="link" to={"/"}>
              Graphics & Design
            </Link>
            <Link className="link" to={"/"}>
              Digital Marketing
            </Link>
            <Link className="link" to={"/"}>
              Writing & Translation
            </Link>
            <Link className="link" to={"/"}>
              Video & Animation
            </Link>
            <Link className="link" to={"/"}>
              Music & Audio
            </Link>
            <Link className="link" to={"/"}>
              Programming & Tech
            </Link>
            <Link className="link" to={"/"}>
              Business
            </Link>
            <Link className="link" to={"/"}>
              Lifestyle
            </Link>
            <Link className="link" to={"/"}>
              AI Services
            </Link>
          </div>
        </>
      )}
    </div>
  );
};

export default Navbar;
