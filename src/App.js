import Home from "./pages/Home";
import { UserProfileProvider } from "./context/UserProfileContext";

function App() {
   return (
      <div className="App">
         <UserProfileProvider>
            <Home />
         </UserProfileProvider>
      </div>
   );
}

export default App;
