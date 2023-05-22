import React from "react";
import PropTypes from "prop-types";
import { Provider as ModeProvider } from "./Mode";
import { Provider as ModeTextProvider } from "./ModeText";
const Context = React.createContext(null);

const Provider = ({children}) => {
    return (
      <Context.Provider value={{}}>
        <ModeProvider>
          <ModeTextProvider>{children}</ModeTextProvider>
        </ModeProvider>
      </Context.Provider>
    );
}

Provider.propTypes = {
  children: PropTypes.object,
};

export {Context, Provider};
