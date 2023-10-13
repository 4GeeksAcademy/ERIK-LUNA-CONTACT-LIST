import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import "../../styles/demo.css";

export const Home = () => {
  const { store, actions } = useContext(Context);
  const [editIndex, setEditIndex] = useState(null);
  const [editedContact, setEditedContact] = useState({});
  const [newContact, setNewContact] = useState({ full_name: "", email: "", phone: "", address: "" });

  const editar = (index) => {
    setEditIndex(index);
    setEditedContact(store.contacts[index]);
  };

  const guardarCambios = () => {
    if (editIndex !== null) {
      actions.editContact(editedContact, editIndex);
      setEditIndex(null);
      setEditedContact({});
    }
  };

  const agregarContacto = () => {
    actions.addContact(newContact);
    setNewContact({ full_name: "", email: "", phone: "", address: "" });
  };

  return (
    <div className="container">
      <ul className="list-group">
        {store.contacts.map((item, index) => {
          return (
            <li key={index} className="list-group-item d-flex justify-content-between">
              {editIndex === index ? (
                <div>
                  <input
                    type="text"
                    placeholder="Nombre"
                    value={editedContact.full_name || ""}
                    onChange={(e) => setEditedContact({ ...editedContact, full_name: e.target.value })}
                  />
                  <input
                    type="text"
                    placeholder="Email"
                    value={editedContact.email || ""}
                    onChange={(e) => setEditedContact({ ...editedContact, email: e.target.value })}
                  />

                  <input
                    type="text"
                    placeholder="Teléfono"
                    value={editedContact.phone || ""}
                    onChange={(e) => setEditedContact({ ...editedContact, phone: e.target.value })}
                  />
                  <input
                    type="text"
                    placeholder="Dirección"
                    value={editedContact.address || ""}
                    onChange={(e) => setEditedContact({ ...editedContact, address: e.target.value })}
                  />
                  <button onClick={guardarCambios}>Guardar</button>
                </div>
              ) : (
                <div >
                  {item.full_name}
                  <br />
                  {item.email}
                  <br />
                  {item.phone}
                  <br />
                  {item.address}
                </div>
              )}
              <div className="d-grid gap-2 d-md-flex justify-content-md-end">
              <button className="btn btn-warning" type="button" onClick={() => editar(index)}>Editar</button>
              <button className="btn btn-warning" type="button" onClick={() => actions.deleteContacts(item.id)}>Eliminar</button>
              </div>
            </li>
          );
        })}
      </ul>
</div>
     
  );
};
