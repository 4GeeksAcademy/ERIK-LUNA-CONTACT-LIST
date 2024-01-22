
import React, {useContext} from "react";
import { Link } from "react-router-dom";
import "../../styles/Contact.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPencil, faTrashCan, faLocationDot, faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { Context } from "../store/appContext";

export const Contacts = () => {
	const { store, actions } = useContext(Context);
  
	return (
	  <div className="contactsPage container">
		<div className="d-flex justify-content-center align-items-center mb-3">
		  <Link to="/Add">
			<button className="btn btn-primary w-100 max-w-270px">New contact</button>
		  </Link>
		</div>
  
		<div className="row w-100">
		  {store.contacts.map((item) => (
			<div className="col-md-9" key={item.id}>
			  <div className="contactGroup mb-3">
				<div className="contact d-flex">
				  <div className="image">
					<img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTTue0QzcbncaPSxMCpLhzOab4a1Sux6xXpow&usqp=CAU" alt="Contact"/>
				  </div>
				  <div className="information ml-3 flex-grow-1">
					<h5>{item.full_name}</h5>
					<p><FontAwesomeIcon icon={faLocationDot} /> {item.address}</p>
					<p><FontAwesomeIcon icon={faPhone} /> {item.phone}</p>
					<p><FontAwesomeIcon icon={faEnvelope} /> {item.email}</p>
				  </div>
				  <div className="editContact ml-3"> {/* Aquí añadí ml-3 para darle un poco de espacio a la izquierda */}
					<Link to={"/Edit/"+ item.id}>
					  <button className="btn btn-primary"><FontAwesomeIcon icon={faPencil} className="pencil"/></button>
					</Link>
					<button className="btn btn-primary" >
					  <FontAwesomeIcon icon={faTrashCan} data-bs-toggle="modal" data-bs-target={"#deleteModal-"+item.id} className="trash"/>

					  <div className="modal fade" id={"deleteModal-"+item.id} tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div className="modal-dialog">
    <div className="modal-content">
      <div className="modal-header">
        <h5 className="modal-title text-dark" id={"deleteModalLabel-"+item.id}>Confirm Delete</h5>
        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div className="modal-body text-dark">
        Are you sure?
      </div> 
      <div className="modal-footer">
        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button type="button" className="btn btn-primary" onClick={() => actions.deleteContact(item.id)} data-bs-dismiss="modal">Confirm</button>
      </div>
    </div>
  </div>
</div>

					</button>
				  </div> 
				</div>
			  </div>
			</div>
		  ))}
		</div>
	  </div>
	);
  };
  