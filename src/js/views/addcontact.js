import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext.js";

export const AddContact = () => {
  const { store, actions } = useContext(Context);
  const [newContact, setNewContact] = useState({
    full_name: "",
    email: "",
    phone: "",
    address: "",
    agenda_slug: "Erik-Luna"
  });

  const agregarContacto = () => {
    actions.addContact(newContact);
    setNewContact({
      full_name: "",
      email: "",
      phone: "",
      address: ""
    });
  };

  return (
    <div className="text-center mt-4 p-2 mx-2">
      <div>
        <h2>Nuevo Contacto</h2>
        <input
          className=" mx-2"
          type="text"
          placeholder="Nombre"
          value={newContact.full_name}
          onChange={(e) => setNewContact({ ...newContact, full_name: e.target.value })}
        />
        <input
          className=" mx-2"
          type="text"
          placeholder="Email"
          value={newContact.email}
          onChange={(e) => setNewContact({ ...newContact, email: e.target.value })}
        />
        <input
          className=" mx-2"
          type="text"
          placeholder="Teléfono"
          value={newContact.phone}
          onChange={(e) => setNewContact({ ...newContact, phone: e.target.value })}
        />
        <input
          className=" mx-2"
          type="text"
          placeholder="Dirección"
          value={newContact.address}
          onChange={(e) => setNewContact({ ...newContact, address: e.target.value })}
        />
        <button className="btn btn-warning" onClick={agregarContacto}>Agregar Contacto</button>
      </div>

      <br />
      <Link to="/"> 
      <div class="d-grid gap-2 d-md-block">
        <button className="btn btn-warning" type="button" >Ir a la página principal</button>
      </div>
        
      </Link>
    </div>
  );
};
