import React from "react";
import { Link } from "react-router-dom";

function Dashboard(props) {


  return (
    <div>
      <h2>Your Stocks</h2>
      <ul>
        {props.data.map((p) => (
          <Link to={`${p.symbol}`} key={p.symbol}>
            <li>{p.name}</li>
          </Link>
        ))}
      </ul>
    </div>
  );
}

export default Dashboard;