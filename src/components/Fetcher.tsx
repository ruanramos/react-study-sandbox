import React, { useState } from "react";

export const Fetcher = () => {
  const url = "https://randomuser.me/api/";
  const [users, setUsers] = useState([]);
  const [pending, setPending] = useState(false);

  const fetchData = () => {
    setPending(true);
    console.log("STARTING FETCH")
    fetch(url)
      .then((res) => res.json())
      .then((u) => {
        setUsers([...users, u.results[0]]);
        setPending(false);
        console.log("ENDING FETCH")
      });
  };

  const st = { display: "flex", color: "red" };

  const userInfo = <div style={st}>
    {users.map((u) => (
      <div key={u.id.value}>
        <div>
          <img src={`${u.picture.large}`} />
        </div>
        <div>{`${u.name.title} ${u.name.first} ${u.name.last}`}</div>
      </div>
    ))}
  </div>;

  const userJson = <div>
    {users.map((u) => (
      <div key={u.id.value}>
        <ul>
          <li>
            <div>{`${JSON.stringify(u)}`}</div>
          </li>
        </ul>
      </div>
    ))}
  </div>;


  return (
    <div>
      {pending ?
        "LOADING...." :
        <><button onClick={fetchData} onMouseUp={() => console.log(users)} >FETCH</button>
          <div className="users">
            {userInfo}
          </div></>
      }
    </div>
  );
};
