import React, { useCallback, useEffect, useState, createContext } from "react";
import { Alert } from 'react-bootstrap';

const ToastContext = createContext();

export default ToastContext;

export function ToastContextProvider({ children }) {
  const [toasts, setToasts] = useState([]);

  useEffect(() => {
    if (toasts.length > 0) {
      const timer = setTimeout(
        () => setToasts((toasts) => toasts.slice(1)),
        2000
      );
      return () => clearTimeout(timer);
    }
  }, [toasts]);

  const addToast = useCallback(
    function (toast) {
      setToasts((toasts) => [...toasts, toast]);
    },
    [setToasts]
  );

  return (
    <ToastContext.Provider value={addToast}>
      {children}
      <div className="toasts-wrapper">
        {toasts.map((toast) => (
            <div className="toast" key={toast}>
              <Alert variant="success">{toast}</Alert>
          </div>
        ))}
      </div>
    </ToastContext.Provider>
  );
}
