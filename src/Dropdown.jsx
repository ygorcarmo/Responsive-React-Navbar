import { useState, useEffect } from "react";

export default function Dropdown() {
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const [dropdownContent, setDropdownContent] = useState(null);

  const hideDropdownContent = () => {
    dropdownContent.style.display = "none";
    setDropdownOpen(false);
  };
  const showDropdownContent = () => {
    dropdownContent.style.display = "block";
    setDropdownOpen(true);
  };

  useEffect(() => {
    setDropdownContent(document.querySelector(".dropdown-content"));
    // close the dropdown content when user presses something other than the dropdown title on mobile
    document.addEventListener("click", (e) => {
      if (isDropdownOpen && !e.target.classList.contains("dropdown-title")) {
        hideDropdownContent();
      }
    });
  }, [isDropdownOpen]);

  const openOrClosedDropdown = () => {
    if (window.matchMedia("(max-width: 767px)").matches) {
      if (isDropdownOpen) {
        hideDropdownContent();
      } else {
        showDropdownContent();
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
