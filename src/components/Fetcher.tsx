import React, { useState } from "react";

export const Fetcher = () => {
  const url = "https://randomuser.me/api/";
  const [users, setUsers] = useState([]);

  const fetchData = () => {
    fetch(url)
      .then((res) => res.json())
      .then((u) => {
        setUsers([...users, u.results[0]]);
        console.log(users);
      });
  };

  return (
    <div>
      <button onClick={fetchData}>FETCH</button>
      <div>
        {users.map((u) => (
          <div key={u.id.value}>
            <ul>
              <li>
                <div>{`${u.gender}`}</div>
                <div>{`${u.name.title} ${u.name.first} ${u.name.last}`}</div>
              </li>
            </ul>
          </div>
        ))}
      </div>

      <div>
        {users.map((u) => (
          <div key={u.id.value}>
            <ul>
              <li>
                <div>{`${JSON.stringify(u)}`}</div>
              </li>
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};
