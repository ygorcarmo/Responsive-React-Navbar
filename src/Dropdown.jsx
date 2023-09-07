import { useState, useEffect } from "react";

export default function Dropdown() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [dropdownContent, setDropdownContent] = useState(null);
  const checkDevice = () => {
    if (
      navigator.userAgent.match(/Android/i) ||
      navigator.userAgent.match(/webOS/i) ||
      navigator.userAgent.match(/iPhone/i) ||
      navigator.userAgent.match(/iPad/i) ||
      navigator.userAgent.match(/iPod/i) ||
      navigator.userAgent.match(/BlackBerry/i) ||
      navigator.userAgent.match(/Windows Phone/i)
    ) {
      setIsMobile(true);
    } else {
      setIsMobile(false);
    }
  };
  useEffect(() => {
    checkDevice();
    if (isMobile) {
      setDropdownContent(document.querySelector(".dropdown-content"));
    }
  }, []);

  return (
    <li className="dropdown">
      <a
        href="#"
        className="dropdown-title"
        onClick={(e) => {
          e.preventDefault();
          if (isMobile) {
            if (!isDropdownOpen) {
              dropdownContent.style.display = "block";
              setIsDropdownOpen(true);
            } else {
              dropdownContent.style.display = "none";
              setIsDropdownOpen(false);
            }
          }
        }}
      >
        Tour
      </a>
      <ul className="dropdown-content">
        <li>
          <a href="#">Link 1</a>
        </li>
        <li>
          <a href="#">Link 2</a>
        </li>
        <li>
          <a href="#">Link 3</a>
        </li>
      </ul>
    </li>
  );
}
