import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import LinkContextProvider from './contexts/LinkContext';
import { ToastContextProvider } from "./contexts/ToastContext";
import 'bootstrap/dist/css/bootstrap.min.css';


ReactDOM.render(
    <ToastContextProvider>
        <LinkContextProvider>
            <App />
        </LinkContextProvider>
    </ToastContextProvider>,
    document.getElementById("root")
);
