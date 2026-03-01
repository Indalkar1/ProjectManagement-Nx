import React, { useContext } from 'react';
import FlowDeskLogo from '../assets/FlowDeskLogoNoBg.png';
import Icon from '@mdi/react';
import { mdiBellOutline, mdiWeatherSunny, mdiWeatherNight } from '@mdi/js';
import { useProjectContext } from '../context/ProjectContextProvider';

function Navbar() {
  const { theme, setTheme } = useProjectContext();

  const toggleTheme = () => {
    setTheme((prev) => {
      const newTheme = prev === 'light' ? 'dark' : 'light';
      sessionStorage.setItem('theme', newTheme);
      return newTheme;
    });
  };

  return (
    <div className="w-full px-4 py-2 h-[70px] bg-app-surface text-app-primary shadow-md items-center border-b border-app transition-colors duration-300 sticky top-0 z-50">
      <div className="flex justify-between h-full items-center">
        <div className="flex gap-2 h-full items-center">
          <img src={FlowDeskLogo} alt="FlowDesk Logo" className="h-[35px]" />
          <div className="text-2xl font-semibold bg-gradient-to-r from-[#0077B6] via-[#00B4D8] to-[#48CAE4] bg-clip-text text-transparent">Flowdesk</div>
        </div>
        <div className="flex h-full items-center gap-2">
          <div className='flex gap-3 items-center'>
            <button
              onClick={toggleTheme}
              className="p-2 rounded-lg hover:bg-app transition-all duration-300"
              title={theme === 'dark' ? 'Light Mode' : 'Dark Mode'}
            >
              <Icon
                path={theme === 'dark' ? mdiWeatherSunny : mdiWeatherNight}
                size={1}
                className="text-app-primary"
              />
            </button>
            <Icon path={mdiBellOutline} size={1} className="text-app-primary" />
          </div>
          <div className="flex items-center gap-2 pe-3">
            <div className="profile-initials-logo py-[5px] px-[10px] bg-app rounded text-app-secondary">SI</div>
            <div className="flex flex-col gap-1">
              <div className="text-[14px] font-medium text-app-primary">Jhon Warner</div>
              <div className="text-[12px] mt-[-3px] text-app-secondary">Admin</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;