import { createRoot } from 'react-dom/client';
import App from './App';
import { BrowserRouter} from 'react-router-dom';

const rootElement = document.getElementById('root');
if (rootElement) {
    const root = createRoot(rootElement);
    root.render(
        <BrowserRouter>
            <App />
        </BrowserRouter>

            );
} else {
    console.error("Root element not found");
}
