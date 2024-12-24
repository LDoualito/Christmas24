import React, { useState } from "react";
import "./App.css"; // Vous pouvez ajouter vos propres styles ici

function App() {
  const [showSurprise, setShowSurprise] = useState(false);

  const handleButtonClick = () => {
    setShowSurprise(!showSurprise);
  };

  return (
    <div className="app-container" style={styles.container}>
      <h1 style={styles.title}> ❄️❄️Joyeux Noël ! ❄️❄️ </h1>
      <p style={styles.subtitle}>Nous vous souhaitons de merveilleuses fêtes de fin d'année !</p>

      <button style={styles.button} onClick={handleButtonClick}>
        {showSurprise ? "Cacher la surprise" : "Afficher une surprise"}
      </button>

      {showSurprise && (
        <div style={styles.surprise}>
          <p>❄️❄️❄️Que la magie de Noël illumine vos journées ! ❄️❄️❄️</p>
          <img
            src="https://source.unsplash.com/400x300/?christmas"
            alt="Noël magique"
            style={styles.image}
          />
        </div>
      )}
    </div>
  );
}

const styles = {
  container: {
    textAlign: "center",
    padding: "20px",
    backgroundColor: "#f2f2f2",
    color: "#2c3e50",
    fontFamily: "'Roboto', sans-serif",
  },
  title: {
    fontSize: "2.5rem",
    color: "#e74c3c",
  },
  subtitle: {
    fontSize: "1.2rem",
    margin: "10px 0 20px",
  },
  button: {
    padding: "10px 20px",
    fontSize: "1rem",
    backgroundColor: "#27ae60",
    color: "white",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
  },
  buttonHover: {
    backgroundColor: "#2ecc71",
  },
  surprise: {
    marginTop: "20px",
    padding: "10px",
    backgroundColor: "#ecf0f1",
    borderRadius: "5px",
    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
  },
  image: {
    marginTop: "10px",
    width: "100%",
    borderRadius: "5px",
  },
};

export default App;

