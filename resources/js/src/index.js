import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from "react-router-dom";
import App from './App';


const rootTag = document.getElementById('root');


    if(rootTag) {
        const root = ReactDOM.createRoot(rootTag);
        root.render(
            <React.StrictMode>
                <BrowserRouter>
                    <App />
                </BrowserRouter>
            </React.StrictMode>
        );
    }

