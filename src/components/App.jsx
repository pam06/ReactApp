import React, { useState } from "react";
import Card from "./Card";
import contacts from "../contacts";

function App() {
  const [namefound, setname] = useState("");
  const [identity, setid] = useState("");
  const [emailid, setemail] = useState("");
  const [lastname, setlastname] = useState("");
  const [image, setimg] = useState("");
  const [name, searchName] = useState("");

  function handleChange(event) {
    searchName(event.target.value);
  }

  function clicked() {
    var lowerName = name.toLowerCase();
    var names = [];
    for (var i = 0; i < 6; i++) {
      names.push(contacts[i].first_name.toLowerCase());
    }
    var ids = [];
    for (var j = 0; j < 6; j++) {
      ids.push(contacts[j].id);
    }

    var lnames = [];
    for (var k = 0; k < 6; k++) {
      lnames.push(contacts[k].last_name.toLowerCase());
    }

    if (names.includes(lowerName) || lnames.includes(lowerName)) {
      var searchId;
      if (names.includes(lowerName)) {
        searchId = names.indexOf(lowerName);
      } else {
        searchId = lnames.indexOf(lowerName);
      }
      setname(contacts[searchId].first_name);
      setid(contacts[searchId].id);
      setlastname(contacts[searchId].last_name);
      setimg(contacts[searchId].avatar);
      setemail(contacts[searchId].email);
    } else {
      alert("Name not found");
    }
  }

  if (namefound) {
    return (
      <div>
        <h1 className="heading">React App</h1>
        <div className="search">
          <input
            className="searchbox"
            onChange={handleChange}
            placeholder="type name here"
            value={name}
          />
          <a className="searchButton" onClick={clicked}>
            Search
          </a>
          <div>
            <Card
              name={namefound}
              id={identity}
              lname={lastname}
              img={image}
              email={emailid}
            />
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <div>
        <h1 className="heading">React App</h1>
        <div className="search">
          <input
            className="searchbox"
            onChange={handleChange}
            placeholder="type name here"
            value={name}
          />
          <a className="searchButton" onClick={clicked}>
            Search
          </a>
        </div>

        <Card
          name={contacts[0].first_name}
          id={contacts[0].id}
          lname={contacts[0].last_name}
          img={contacts[0].avatar}
          email={contacts[0].email}
        />
        <Card
          name={contacts[1].first_name}
          id={contacts[1].id}
          lname={contacts[1].last_name}
          img={contacts[1].avatar}
          email={contacts[1].email}
        />
        <Card
          name={contacts[2].first_name}
          id={contacts[2].id}
          lname={contacts[2].last_name}
          img={contacts[2].avatar}
          email={contacts[2].email}
        />
        <Card
          name={contacts[3].first_name}
          id={contacts[3].id}
          lname={contacts[3].last_name}
          img={contacts[3].avatar}
          email={contacts[3].email}
        />
        <Card
          name={contacts[4].first_name}
          id={contacts[4].id}
          lname={contacts[4].last_name}
          img={contacts[4].avatar}
          email={contacts[4].email}
        />
        <Card
          name={contacts[5].first_name}
          id={contacts[5].id}
          lname={contacts[5].last_name}
          img={contacts[5].avatar}
          email={contacts[5].email}
        />
      </div>
    );
  }
}

export default App;
