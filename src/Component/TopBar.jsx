import React, { useEffect, useState } from "react";
import { FaFacebookF, FaTwitter, FaYoutube, FaSearch } from "react-icons/fa";

const TopBar = () => {
    const [date, setDate] = useState("");

     useEffect(() => {
    const today = new Date();
    const options = { weekday: 'long', day: 'numeric', month: 'long', year: 'numeric' };
    setDate(today.toLocaleDateString("en-GB", options));
  }, []);
  return (
    <div style={styles.topbar}>
      <div style={styles.left}>
        <span>📞 01826423501, 01959203001</span>
        <span>✉️ rangpuridealacademy@gmail.com</span>
      </div>
      <div style={styles.center}>
        <a href="#"><FaFacebookF /></a>
        <a href="#"><FaTwitter /></a>
        <a href="#"><FaYoutube /></a>
        <span>{date}</span>
      </div>
      <div style={styles.right}>
        <input type="text" placeholder="Search..." style={styles.input} />
        <button style={styles.button}><FaSearch /></button>
      </div>
    </div>
  );
  
};


const styles = {
  topbar: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#f7b90e",
    color: "white",
    padding: "5px 20px",
    fontSize: "14px",
    flexWrap: "wrap",
    fontFamily: "sans-serif"
  },
  left: {
    display: "flex",
    gap: "15px"
  },
  center: {
    display: "flex",
    alignItems: "center",
    gap: "10px"
  },
  right: {
    display: "flex"
  },
  input: {
    padding: "4px 8px",
    border: "none",
    borderRadius: "4px 0 0 4px"
  },
  button: {
    padding: "4px 8px",
    backgroundColor: "#1e2c4b",
    color: "white",
    border: "none",
    borderRadius: "0 4px 4px 0",
    cursor: "pointer"
  }
};

export default TopBar