import { useAuth0 } from "@auth0/auth0-react";
import Awotex from "./Pages/Awotex";
import "./Styles/App.css";
import LoadingScreen from "./Components/LoadingScreen";
import Login from "./Pages/Login";

const App = () => {
  const { loginWithRedirect, logout, isAuthenticated, isLoading, user } = useAuth0();
  // console.log("user", user);

  return <div className="App">
    { 
    isLoading 
    ? <LoadingScreen/>
    : isAuthenticated 
    ? <Awotex user={user} logout={logout}/> 
    : <Login loginWithRedirect={loginWithRedirect}/> 
    }
    
    </div>;
};

export default App;
