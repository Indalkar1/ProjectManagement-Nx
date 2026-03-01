import { useState, createContext, useContext, useEffect } from 'react';

const AppContext = createContext();


const ProjectContextProvider = (props) => {
  const [toast, setToast] = useState({ show: false, text: '', color: '' });
  const [theme, setTheme] = useState(() =>
    sessionStorage.getItem('theme') === 'dark' ? "dark" : "light");

  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [theme])

  return (
    <AppContext.Provider
      value={{
        toast,
        setToast,
        theme,
        setTheme,
      }}
    >
      {props.children}
    </AppContext.Provider>
  );
};


export const useProjectContext = () => {
  return useContext(AppContext)
}

export { AppContext, ProjectContextProvider };

