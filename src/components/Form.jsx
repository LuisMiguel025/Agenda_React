import React, { useState } from "react";

const Form = () => {
  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");

  const post = async () => {
    const data = {
      nombre: name,
      apellido: lastName,
      telefono: phoneNumber,
    };

    await fetch("http://www.raydelto.org/agenda.php", {
      method: "POST",
      headers: {
        "Content-Type": "text/plain",
      },
      body: JSON.stringify(data),
    })
      .then(() => {
        setName("");
        setLastName("");
        setPhoneNumber("");
      })
      .catch((err) => console.log(err));
  };

  const onSubmit = (e) => {
    e.preventDefault();
    post();
  };

  return (
    <div className="form">
      <form className="form-inline" id="form" onSubmit={onSubmit}>
        <input
          id="name"
          maxLength={30}
          minLength={3}
          onChange={(e) => setName(e.target.value)}
          placeholder="Name"
          required={true}
          type="text"
          value={name}
        />
        <input
          id="lastName"
          maxLength={30}
          minLength={3}
          onChange={(e) => setLastName(e.target.value)}
          placeholder="Last Name"
          required={true}
          type="text"
          value={lastName}
        />
        <input
          id="phoneNumber"
          maxLength={15}
          minLength={10}
          onChange={(e) => setPhoneNumber(e.target.value)}
          placeholder="Phone Number"
          required={true}
          type="tel"
          value={phoneNumber}
        />
        <button type="submit" id="saveButton">
          Save
        </button>
      </form>
    </div>
  );
};

export default Form;
