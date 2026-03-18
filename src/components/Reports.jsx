import React from "react";

function Reports({ users }) {
  const totalUsers = users.length;

  return (
    <div>
      <h2>Reports</h2>

      <div className="card">
        <h4>Total Users</h4>
        <p>{totalUsers}</p>
      </div>

      
      <div className="card">
        <h4>Users by City</h4>
        <ul>
          {users.map((user, idx) => (
            <li key={user.id}>
              {idx + 1}. {user.name} ({user.address.city})
            </li>
          ))}
        </ul>
      </div>

      
      <div className="card">
        <h4>All Users</h4>
        <table className="table table-striped">
          <thead>
            <tr>
              <th>#</th>
              <th>Name</th>
              <th>Email</th>
              <th>City</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, idx) => (
              <tr key={user.id}>
                <td>{idx + 1}</td> 
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>{user.address.city}</td>
              </tr>
            ))}
          </tbody>
        </table>
    </div>
    </div>
  );
}

export default Reports;