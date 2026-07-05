import React, { useState, useEffect } from "react";

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await fetch("http://localhost:5000/");
        const data = await result.json();

        setData(data);
        console.log(data);
      } catch (err) {
        console.log("something just happened");
      }
    };

    fetchData();
  }, []);

  return (
    <div style={{ padding: "50px" }}>
      <table border="1">
        <thead>
          <tr>
            <th>ID</th>
            <th>Username</th>
            <th>Email</th>
            <th>Created At</th>
          </tr>
        </thead>

        <tbody>
          {data.map((d) => (
            <tr key={d.id}>
              <td>{d.id}</td>
              <td>{d.username}</td>
              <td>{d.email}</td>
              <td>{d.created_at}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;