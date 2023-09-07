import { useState } from "react";

export default function Dropdown() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const onclick = () => {
    if (window.matchMedia("(max-width: 767px)").matches) {
      document.addEventListener("click", (e) => {
        const dropdownContent = document.querySelector(".dropdown-content");
        console.log(e.target.classList.contains("stay-open"));

        if (!isDropdownOpen && e.target.classList.contains("stay-open")) {
          dropdownContent.style.display = "block";
          setIsDropdownOpen(true);
        } else {
          dropdownContent.style.display = "none";
          setIsDropdownOpen(false);
        }
      });
    }
  };

  return (
    <li className="dropdown stay-open">
      <a href="#" className="dropdown-title stay-open" onClick={onclick}>
        Tour
      </a>
      <ul className="dropdown-content stay-open">
        <li>
          <a href="#" className="stay-open">
            Link 1
          </a>
        </li>
        <li>
          <a href="#" className="stay-open">
            Link 2
          </a>
        </li>
        <li>
          <a href="#" className="stay-open">
            Link 3
          </a>
        </li>
      </ul>
    </li>
  );
}
