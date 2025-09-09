import {
  createContext,
  useContext,
  useRef,
  useEffect,
  useState,
  type ReactNode,
} from 'react';

export type LogType = 'log' | 'warn' | 'error' | 'info';
export type LogEntry = {
  type: LogType;
  message: string;
  timestamp: string;
};

interface LogContextValue {
  logs: LogEntry[];
  clearLogs: () => void;
}

const LogContext = createContext<LogContextValue | undefined>(undefined);

export const useLogs = () => {
  const ctx = useContext(LogContext);
  if (!ctx) throw new Error('useLogs must be used within LogProvider');
  return ctx;
};

interface LogProviderProps {
  children: ReactNode;
  maxLogs?: number;
}

export const LogProvider = ({ children, maxLogs = 500 }: LogProviderProps) => {
  const [logs, setLogs] = useState<LogEntry[]>([]);
  const originalConsole = useRef<{ [key: string]: any }>({ ...console });

  useEffect(() => {
    const appendLog = (type: LogType, ...args: any[]) => {
      setLogs((prev) => {
        const next = [
          {
            type,
            message: args.map(String).join(' '),
            timestamp: new Date().toLocaleTimeString(),
          },
          ...prev,
        ];
        return next.slice(0, maxLogs);
      });
    };
    const originalConsoleCopy = { ...originalConsole.current };
    console.log = (...args: any[]) => {
      appendLog('log', ...args);
      originalConsoleCopy.log(...args);
    };
    console.warn = (...args: any[]) => {
      appendLog('warn', ...args);
      originalConsoleCopy.warn(...args);
    };
    console.error = (...args: any[]) => {
      appendLog('error', ...args);
      originalConsoleCopy.error(...args);
    };
    console.info = (...args: any[]) => {
      appendLog('info', ...args);
      originalConsoleCopy.info(...args);
    };
    return () => {
      Object.assign(console, originalConsoleCopy);
    };
  }, [maxLogs]);

  const clearLogs = () => setLogs([]);

  return (
    <LogContext.Provider value={{ logs, clearLogs }}>
      {children}
    </LogContext.Provider>
  );
};
