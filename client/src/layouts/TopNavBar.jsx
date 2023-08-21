"use client";
import { useState } from "react";
import "./topnavbar.css";
import UserMenu from "@/components/UserMenu/UserMenu";
import { useSelector } from "react-redux";
import { userInfo } from "@/services/whoami";

const TopNavBar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const { data: user } = useSelector(userInfo);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <nav className="top-navbar">
      <div className="left-section">
        <img src="/assets/logo.png" alt="Logo" className="logo" />
        <input type="text" placeholder="Search..." className="search-bar" />
      </div>
      <div className="right-section">
        <div className="user-icon" onClick={toggleDropdown}>
          {user ? (
            <>
              <img src="/assets/placeholder.svg" alt="User Icon" />
              {isDropdownOpen && (
                <div className="dropdown">
                  <UserMenu
                    name={user?.UserAttributes[2]?.Value}
                    email={user?.UserAttributes[3]?.Value}
                    bio={""}
                  />
                </div>
              )}
            </>
          ) : (
            <></>
          )}
        </div>
      </div>
    </nav>
  );
};

export default TopNavBar;
