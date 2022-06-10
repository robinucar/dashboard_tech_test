import "./App.css";
import React, { useState, useEffect } from "react";
import axios from "axios";
import DataTable from "./components/DataTable";
import "./App.css";

function App() {
  const [data, setData] = useState([]);
  const [query, setQuery] = useState("");

  useEffect(() => {
    // connect data
    const fetchData = async () => {
      const res = await axios.get("http://localhost:5000/api/startlistentries");
      setData(res.data);
    };
    fetchData();
  }, [setData]);

  // Filter data
  const search = (data) => {
    return data.filter(
      (data) => data.organiserTitle.toLowerCase().indexOf(query) > -1
    );
  };
  const generateStatusTicketsSum = (items, type) => {
    return (
      items.reduce((total, item) => {
        if (item.status === type) {
          total += item.ticketPrice.value;
        }
        return total;
      }, 0) + ' '+ data[0]?.ticketPrice?.currencyCode
    );
  };
 
  const generateOrganiserTicketsSum = (items, id) => {
    return (
      items.reduce((total, item) => {
        if (item.organiserId === id) {
          total += item.ticketPrice.value;
        }
        return total;
      }, 0) + ' '+ data[0]?.ticketPrice?.currencyCode
    );
  };
  return (
    <div className="app">
      <input
        className="search"
        placeholder="Search by organiser..."
        onChange={(e) => setQuery(e.target.value.toLowerCase())}
      />
      <DataTable data={search(data)} />
      <div className="tickets-data">
        <h2>
          Total Confirmed Tickets Sales:{" "}
          {generateStatusTicketsSum(data, "CONFIRMED")}{" "}
        </h2>
        <h2>
          Total Pending Tickets Sales:{" "}
          {generateStatusTicketsSum(data, "PENDING")}{" "}
        </h2>
        <h2>
          Total Refunded Tickets Sales:{" "}
          {generateStatusTicketsSum(data, "REFUNDED")}{" "}
        </h2>
      </div>

      <div className="organisers">
        <h1>Organisers ticket sales</h1>
        <h2>
          Total for Great Run Confirmed Tickets Sales:{" "}
          {generateOrganiserTicketsSum(data, 26391)}
        </h2>
        <h2>
          Total for Limelight Sports Club Confirmed Tickets Sales:{" "}
          {generateOrganiserTicketsSum(data, 154979)}
        </h2>
        <h2>
          Total for Run Through Confirmed Tickets Sales:{" "}
          {generateOrganiserTicketsSum(data, 69173)}
        </h2>
      </div>
    </div>
  );
}

export default App;
