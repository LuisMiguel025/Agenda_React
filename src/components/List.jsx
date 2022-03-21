import React, { useState, useEffect } from "react";

const List = () => {
  const [contacts, setContacts] = useState([]);
  const getContacts = async () => {
    const response = await fetch("http://www.raydelto.org/agenda.php");
    const data = await response.json();
    setContacts(data);
  };
  useEffect(() => {
    getContacts();
  }, []);
  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Last Name</th>
          <th>Phone Number</th>
        </tr>
      </thead>
      <tbody>
        {contacts.map((contact, index) => {
          return (
            <tr key={index}>
              <td>{contact.nombre}</td>
              <td>{contact.apellido}</td>
              <td>{contact.telefono}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default List;
