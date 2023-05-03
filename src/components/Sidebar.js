import React from "react";
import { SidebarData } from "./SidebarData";
import "../App.css";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <>
      <div className="Sidebar">
        <div>
          <ul className="SidebarList">
            {SidebarData.map((val, key) => {
              return (
                <>
                  <Link to = {`${val.link}`}>
                  <li
                    key={key}
                    className="row"
                  >
                  <div id="title">{val.title}</div>
                  </li>
                  </Link>
                </>
              );
            })}
          </ul>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
