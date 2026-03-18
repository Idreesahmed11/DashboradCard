import { useState, useContext } from "react";
import Sidebar from "./components/Sidebar";
import SummaryCards from "./components/SummaryCards";
import SearchBar from "./components/SearchBar";
import UserTable from "./components/UserTable";     
import TaskTable from "./components/TaskTable";     
import AddUserModal from "./components/AddUserModal";
import Footer from "./components/Footer";  
import { ThemeContext } from "./context/ThemeContext";
import Reports from "./components/Reports";    
import "./App.css"; 

function App() {
  const { toggleTheme } = useContext(ThemeContext);

  const [page, setPage] = useState("dashboard");

  const [users, setUsers] = useState([
    { id: 1, name: "Idrees Ahmed", email: "idrees.ahmed@example.com", address: { city: "Karachi" } },
    { id: 2, name: "Sohail Ahmed", email: "sohail.ahmed@example.com", address: { city: "Lahore" } },
    { id: 3, name: "AttuAllah Raza", email: "attuallah.raza@example.com", address: { city: "Hyderabad" } },
    { id: 4, name: "Ali Mustafa", email: "ali.mustafa@example.com", address: { city: "Islamabad" } },
    { id: 5, name: "Zunair Khan", email: "zunair.khan@example.com", address: { city: "Panjab" } },
  ]);

  const [search, setSearch] = useState("");

  const filteredUsers = users.filter(user =>
    user.name.toLowerCase().includes(search.toLowerCase())
  );

  const addUser = (user) => {
    setUsers([
      ...users,
      {
        ...user,
        id: users.length + 1,
        address: { city: user.city },
      },
    ]);
  };

  return (
    <div className="app">
      
      <Sidebar setPage={setPage} currentPage={page} />

      <div className="content">
        
        <button className="theme-btn" onClick={toggleTheme}>
          Toggle Theme
        </button>

        
        {page === "dashboard" && <SummaryCards users={users} />}

      
        {page === "users" && (
          <>
            <SearchBar setSearch={setSearch} />
            <UserTable users={filteredUsers} /> 
            <AddUserModal addUser={addUser} />
          </>
        )}

      
        {page === "tasks" && <TaskTable />} 

        
        {page === "reports" && <Reports users={users} />}

        
        <Footer />
      </div>
    </div>
  );
}

export default App;