import logo from './logo.svg';
import './App.css';
import AppRoutes from './Routes/Routes';
import { AuthProvider } from './AuthContext/AuthContext';

function App() {
  return (
    <AuthProvider>
      <AppRoutes />
    </AuthProvider>
  );
}

export default App;
