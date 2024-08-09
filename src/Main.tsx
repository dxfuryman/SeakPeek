import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import {BrowserRouter} from "react-router-dom";
import AuthProvider from "@/context/AuthContext.tsx";
import QueryProvider from "@/lib/react-query/QueryProvider.tsx";


const rootElement = document.getElementById('root');
const root = createRoot(rootElement);
root.render(
<BrowserRouter>
    <QueryProvider>
        <AuthProvider>
            <App />
        </AuthProvider>
    </QueryProvider>
</BrowserRouter>
);
