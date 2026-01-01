import { useState, createContext, useContext } from 'react';

const AppContext = createContext();

export const useProjectContext=()=>{
    return useContext(AppContext)
}

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
