import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import logo from "../assets/logo.png";
import { Menu, X } from "lucide-react";

export const Navbar = () => {
  const [mobileDrawerOpen, setMobileDrawerOpen] = useState(false);
  const [activeButton, setActiveButton] = useState(null);
  const [signInActive, setSignInActive] = useState(false); 
  const toggleNavbar = () => {
    setMobileDrawerOpen(!mobileDrawerOpen);
  };
  const navigate = useNavigate();
  const location = useLocation();

  const navItems = [
    { label: "Home", href: "/" },
    { label: "Features", href: "/features" },
    { label: "Notifications", href: "/notifications" },
  ];

  const handleNotificationsClick = () => {
    if (location.pathname === "/notifications") {
      navigate("/");
      setActiveButton(null);
    } else {
      navigate("/notifications");
      setActiveButton("notifications");
    }
  };

  const handleAboutUsClick = () => {
    if (location.pathname === "/about") {
      navigate("/");
      setActiveButton(null);
    } else {
      navigate("/about");
      setActiveButton("about");
    }
  };

  const handleUserProfileClick = () => {
    if (location.pathname === "/profile") {
      navigate("/");
      setActiveButton(null);
    } else {
      navigate("/profile");
      setActiveButton("profile");
    }
  };

  const handleSignInClick = () => {
    setSignInActive(true);
    
    window.location.href = "https://b7fa-2409-40f2-304b-fd9b-15fb-f415-dca1-b42a.ngrok-free.app/";
  };

  return (
    <nav className="sticky top-0 z-50 py-3 backdrop-blur-lg border-b border-neutral-700/80">
      <div className="container px-4 mx-auto relative text-sm">
        <div className="flex justify-between items-center">
          <div className="flex item-center flex-shrink-0">
            <img className="h-10 w-10 mr-2" src={logo} alt="logo" />
            <span
              className="text-x1 tracking-tight"
              style={{ fontSize: "1.75rem", lineHeight: "2.50rem" }}
            >
              Plant Care
            </span>
          </div>
          <ul className="hidden lg:flex ml-14 space-x-12">
            {navItems.map((item, index) => (
              <li key={index}>
                <button
                  onClick={
                    item.label === "Notifications"
                      ? handleNotificationsClick
                      : () => navigate(item.href)
                  }
                  className={`hover:text-gray-600 ${
                    activeButton === item.label.toLowerCase() ? "active" : ""
                  }`}
                >
                  {item.label}
                </button>
              </li>
            ))}
            <li>
              <button
                onClick={handleAboutUsClick}
                className={`hover:text-gray-600 ${
                  activeButton === "about" ? "active" : ""
                }`}
              >
                About Us
              </button>
            </li>
          </ul>
          <div className="hidden lg:flex justify-center space-x-12 items-center">
            <button
              onClick={handleSignInClick}
              className={`bg-gradient-to-r from-orange-500 to-orange-900 py-2 px-3 border rounded-md ${
                signInActive ? "active" : ""
              }`}
            >
              Sign In
            </button>
            <button
              onClick={handleUserProfileClick}
              className={`bg-gradient-to-r from-orange-500 to-orange-900 py-2 px-3 rounded-md ${
                activeButton === "profile" ? "active" : ""
              }`}
            >
              User Profile
            </button>
          </div>
          <div className="lg:hidden md:flex flex-col justify-end">
            <button onClick={toggleNavbar}>
              {mobileDrawerOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>
        {mobileDrawerOpen && (
          <div className="fixed right-0 z-20 bg-neutral-900 w-full p-12 flex-col justify-center item-center lg:hidden">
            <ul>
              {navItems.map((item, index) => (
                <li key={index} className="py-4">
                  <button
                    onClick={
                      item.label === "Notifications"
                        ? handleNotificationsClick
                        : () => navigate(item.href)
                    }
                    className={`hover:text-gray-600 ${
                      activeButton === item.label.toLowerCase() ? "active" : ""
                    }`}
                  >
                    {item.label}
                  </button>
                </li>
              ))}
              <li className="py-4">
                <button
                  onClick={handleUserProfileClick}
                  className={`bg-gradient-to-r from-orange-500 to-orange-900 py-2 px-3 rounded-md ${
                    activeButton === "profile" ? "active" : ""
                  }`}
                >
                  User Profile
                </button>
              </li>
            </ul>
            <div className="flex space-x-6">
              <button
                onClick={handleSignInClick}
                className="py-2 px-3 bg-gradient-to-r from-orange-500 to-orange-900 rounded-md"
              >
                Sign In
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};
