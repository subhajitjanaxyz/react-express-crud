import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import { Provider } from 'react-redux';
import { store } from './store/store.jsx';

createRoot(document.getElementById('root')).render(


    <Provider store={store}>

    <App />
    </Provider>

)
