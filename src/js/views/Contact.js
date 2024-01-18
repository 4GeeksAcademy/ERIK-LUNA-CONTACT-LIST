
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
		  <div className="d-flex justify-content-center align-items-center vh-100">
			<Link to="/Add">
			  <button className="btn btn-primary w-70 max-w-200px mb-1">New contact</button>
			</Link>
		  </div>
	  
		  {store.contacts.map((item, index) => (
			<div className="contactGroup mb-3" key={index}>
			  <div className="contact">
				<div className="image">
				  <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTTue0QzcbncaPSxMCpLhzOab4a1Sux6xXpow&usqp=CAU" alt="Contact"/>
				</div>
				<div className="information">
				  <div>
					<h5>{item.full_name}</h5>
					<p><FontAwesomeIcon icon={faLocationDot} /> {item.address}</p>
					<p><FontAwesomeIcon icon={faPhone} /> {item.phone}</p>
					<p><FontAwesomeIcon icon={faEnvelope} /> {item.email}</p>
				  </div>
				</div>
				<div className="editContact">
				  <Link to={"/Edit/"+ item.id}>
					<button><FontAwesomeIcon icon={faPencil} className="pencil"/></button>
				  </Link>
				  <button onClick={() => actions.deleteContact(item.id)}>
					<FontAwesomeIcon icon={faTrashCan} className="trash"/>
				  </button>
				</div>
			  </div>
			</div>
		  ))}
		</div>
	  )};
