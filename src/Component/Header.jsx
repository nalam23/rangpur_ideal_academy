import React from 'react'
import logo from "../logo.svg"



const Header = () => {
  const styles = {
    container: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      padding: "10px 0",
      borderBottom: "1px solid green",
      backgroundColor: "#FF5733",
    },
    logo: {
      height: "70px",
      marginRight: "15px",
    },
    textContainer: {
      textAlign: "left",
    },
    title: {
      fontSize: "24px",
      fontWeight: "bold",
      color: "#FFFFFF",
      margin: "0",
    },
    subtitle: {
      fontSize: "16px",
      color: "#FFFACD",
      marginTop: "4px",
    },
  };
  return (
    <div style={styles.container}>
      <img src={logo} alt="Logo" style={styles.logo} />
      <div style={styles.textContainer}>
        <h1 style={styles.title}>RANGPUR IDEAL ACADEMY</h1>
        <p style={styles.subtitle}>[A Noble Education]</p>
      </div>
    </div>
  );
};
  


export default Header      
