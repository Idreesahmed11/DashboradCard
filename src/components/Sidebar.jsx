import React from "react";

function Sidebar({ setPage, currentPage }) {
  return (
    <div className="sidebar">
      <h3>Admin Panel</h3>

      <ul>
        <li
          className={currentPage === "dashboard" ? "active" : ""}
          onClick={() => setPage("dashboard")}
        >
          Dashboard
        </li>
        <li
          className={currentPage === "users" ? "active" : ""}
          onClick={() => setPage("users")}
        >
          Users
        </li>
        <li
          className={currentPage === "tasks" ? "active" : ""}
          onClick={() => setPage("tasks")}
        >
          Tasks
        </li>
        <li
          className={currentPage === "reports" ? "active" : ""}
          onClick={() => setPage("reports")}
        >
          Reports
        </li>
      </ul>
    </div>
  );
}

export default Sidebar;