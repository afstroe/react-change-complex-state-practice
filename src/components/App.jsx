import React, { useState } from "react";

//CHALLENGE: Make the code in App.jsx work.
//The final app should have a single contact
//with fName, lName and email.

//HINT: You'll need to apply the following things you learnt:
//1. Using JS Objects with state.
//2. Making use of previous state when changing state.
//3. Working with forms in React.
//4. Handing events

function App() {
  const [contact, setContact] = useState({
    fName: "",
    lName: "",
    email: ""
  });

  return (
    <div className="container">
      <h1>
        Hello {contact.fName} {contact.lName}
      </h1>
      <p>{contact.email}</p>
      <form>
        <input
          onChange={event => {
            setContact({
              fName: event.target.value,
              lName: contact.lName,
              email: contact.email
            });
          }}
          name="fName"
          placeholder="First Name"
          value={contact.fName}
        />
        <input
          onChange={event => {
            setContact({
              fName: contact.fName,
              lName: event.target.value,
              email: contact.email
            });
          }}
          name="lName"
          placeholder="Last Name"
          value={contact.lName}
        />

        <input
          onChange={event => {
            setContact({
              fName: contact.fName,
              lName: contact.lName,
              email: event.target.value
            });
          }}
          name="email"
          placeholder="Email"
        />
        <button>Submit</button>
      </form>
    </div>
  );
}

export default App;
