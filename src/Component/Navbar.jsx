import React from 'react'
import { FaHome } from "react-icons/fa";


const Navbar = () => {
  const styles = {
    navbar: {
      backgroundColor: "#2c3e50",
      display: "flex",
      justifyContent: "center",
      padding: "10px",
    },
    navItem: {
      color: "#fff",
      margin: "0 15px",
      position: "relative",
      textDecoration: "none",
      cursor: "pointer",
      fontSize: "14px",
    },
    dropdown: {
      position: "absolute",
      top: "30px",
      left: 0,
      backgroundColor: "#14e0e3",
      padding: "10px",
      display: "none",
      flexDirection: "column",
      minWidth: "150px",
      zIndex: 10,
    },
    navItemHover: {
      display: "flex",
      flexDirection: "column",
      alignItems: "flex-start",
    },
  };

   const menuWithDropdown = ["OUR CAMPUSES", "ADMISSION", "MANAGEMENT", "GALLERY", "RESULTS"];

   

  const renderMenuItem = (item) => {
    return (
      <div
        style={styles.navItem}
        onMouseEnter={(e) => {
          const dropdown = e.currentTarget.querySelector(".dropdown");
          if (dropdown) dropdown.style.display = "flex";
        }}
        onMouseLeave={(e) => {
          const dropdown = e.currentTarget.querySelector(".dropdown");
          if (dropdown) dropdown.style.display = "none";
        }}
      >
        {item === "HOME" ? <FaHome style={{ marginRight: "5px" }} /> : null}
        {item}
        {menuWithDropdown.includes(item) && (
          <div className="dropdown" style={styles.dropdown}>
            <a href="#" style={{ color: "#fff", padding: "5px 0" }}>Campus-1</a>
            <a href="#" style={{ color: "#fff", padding: "5px 0" }}>Campus-2</a>
            <a href="#" style={{ color: "#fff", padding: "5px 0" }}>Campus-3</a>
          </div>
        )}
      </div>
    );
  };

  const menuItems = [
    "HOME",
    "OUR CAMPUSES",
    "ADMISSION",
    "MANAGEMENT",
    "GALLERY",
    "RESEARCHES",
    "RESULTS",
    "NOTICE",
    "CAREERS",
    "CONTACT US",
  ];
  return (
    <div style={styles.navbar}>
      {menuItems.map((item, index) => (
        <React.Fragment key={index}>{renderMenuItem(item)}</React.Fragment>
      ))}
    </div>
  );
};

export default Navbar