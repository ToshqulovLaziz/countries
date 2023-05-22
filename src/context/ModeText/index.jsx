import React from "react";
import PropTypes from "prop-types";

const Context = React.createContext(null);

const Provider = ({ children }) => {
    const [modeText, setModeText] = React.useState(
      localStorage.getItem("modeText") || "Dark Mode"
    );

    const toggleText = () => {
      localStorage.setItem(
        "modeText",
        modeText === "Dark Mode" ? "Light Mode" : "Dark Mode"
      );
      setModeText(modeText === "Dark Mode" ? "Light Mode" : "Dark Mode");
    };
  return <Context.Provider value={{modeText, toggleText}}>{children}</Context.Provider>;
};

Provider.propTypes = {
  children: PropTypes.object,
};

export { Context, Provider };
