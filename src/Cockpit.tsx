// src/index.tsx

import { LogProvider } from './components/ConsolLogs/LogContext';
import DraggableFAB from './components/DraggableFAB';

export const Cockpit = () => {
  return (
    <LogProvider>
      <DraggableFAB />
    </LogProvider>
  );
};

export default Cockpit;
