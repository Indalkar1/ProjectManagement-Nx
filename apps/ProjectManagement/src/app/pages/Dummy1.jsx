import React, { useContext } from 'react';
import { useProjectContext } from '../context/ProjectContextProvider';

function Dummy1() {
  const { toast } = useProjectContext();
  console.log('Toast', toast);
  return <div>Dummy1 Dummy1</div>;
}

export default Dummy1;
