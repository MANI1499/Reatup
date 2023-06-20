import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { Home } from "./pages/Home";
import { Contact } from './pages/Contact';
import { Profile } from './pages/Profile';
import { Navbar } from './pages/Navbar';
import { useState, createContext } from 'react';
import { QueryClient, QueryClientProvider} from "@tanstack/react-query";


export const AppContext = createContext();

function App() {

  const client = new QueryClient({ defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
    }
  } })

  const [username, setUsername] = useState('Mani');

  return <div className='App'> 
  <QueryClientProvider client={ client }>
  <AppContext.Provider  value={{ username, setUsername }}>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={ <Home  /> } />
          <Route path="/contact" element={ <Contact  /> } />
          <Route path="/profile" element={ <Profile /> } />
          <Route path="/*" element={ <h1>404 Page Not Found </h1> } />
        </Routes>
      </Router>
      </AppContext.Provider>
      </QueryClientProvider>
    </div>;

  
}

export default App;
