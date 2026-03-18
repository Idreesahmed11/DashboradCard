import React from "react";

function TaskTable() {
  const tasks = [
    { id: 1, name: "Calculator Task" },
    { id: 2, name: "Clock Live Time" },
    { id: 3, name: "Simple Login File" },
    { id: 4, name: "Another Example Task" },
  ];

  return (
    <table className="table table-striped">
      <thead>
        <tr>
          <th>ID</th>
          <th>Task Name</th>
        </tr>
      </thead>
      <tbody>
        {tasks.map(task => (
          <tr key={task.id}>
            <td>{task.id}</td>
            <td>{task.name}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default TaskTable;