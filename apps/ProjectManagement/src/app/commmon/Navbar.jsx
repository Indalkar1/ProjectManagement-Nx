import React from 'react';
import FlowDeskLogo from '../assets/FlowDeskLogo.png';
import Icon from '@mdi/react';
import { mdiBellOutline } from '@mdi/js';

function Navbar() {
  return (
    <div className="w-full px-4 py-2 h-[60px] bg-white shadow-md items-center">
      <div className="flex justify-between h-full items-center">
        <div className="flex gap-2 h-full items-center">
          <img src={FlowDeskLogo} alt="FlowDesk Logo" className="h-[35px]" />
          <div className="text-2xl font-semibold bg-gradient-to-r from-[#0077B6] via-[#00B4D8] to-[#48CAE4] bg-clip-text text-transparent">Flowdesk</div>
        </div>
        <div className="flex h-full items-center gap-2">
          <div>
            <Icon path={mdiBellOutline} size={1} />
          </div>
          <div className="flex items-center gap-2 pe-3">
            <div className="profile-initials-logo py-[5px] px-[10px]">SI</div>
            <div className="flex flex-col gap-1">
              <div className="text-[14px] font-medium">Jhon Warner</div>
              <div className="text-[12px] mt-[-3px]">Admin</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
