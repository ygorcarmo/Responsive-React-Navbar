import { useState, useEffect } from "react";

export default function Dropdown() {
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const [dropdownContent, setDropdownContent] = useState(null);

  useEffect(() => {
    document.addEventListener("click", (e) => {
      setDropdownContent(document.querySelector(".dropdown-content"));
      if (isDropdownOpen && !e.target.classList.contains("dropdown-title")) {
        dropdownContent.style.display = "none";
        setDropdownOpen(false);
      }
    });
  }, [isDropdownOpen]);

  const openOrClosedDropdown = () => {
    if (window.matchMedia("(max-width: 767px)").matches) {
      if (!isDropdownOpen) {
        dropdownContent.style.display = "block";
        setDropdownOpen(true);
      } else {
        dropdownContent.style.display = "none";
        setDropdownOpen(false);
      }
    }
  };

  return (
    <li className="dropdown">
      <a href="#" className="dropdown-title" onClick={openOrClosedDropdown}>
        Tour
      </a>
      <ul className="dropdown-content">
        <li>
          <a href="/ashushau">Link 1</a>
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
