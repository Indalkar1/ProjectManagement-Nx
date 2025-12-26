import { useState, createContext } from 'react';

const AppContext = createContext();

const ProjectContextProvider = (props) => {
  const [toast, setToast] = useState({ show: false, text: '', color: '' });

  return (
    <AppContext.Provider
      value={{
        toast,
        setToast,
      }}
    >
      {props.children}
    </AppContext.Provider>
  );
};

export { AppContext, ProjectContextProvider };
