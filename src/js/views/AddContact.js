import React, {useContext, useState, useEffect} from "react";
import { useNavigate, useParams } from "react-router-dom";
import "../../styles/AddContact.css";
import { Context } from "../store/appContext";

export const AddContact = (props) => {

        const { store, actions } = useContext(Context);
        const params = useParams();
        const navigate = useNavigate();
        const [fullName, setFullName] = useState("");
        const [phone, setPhone] = useState("");
        const [email, setEmail] = useState("");
        const [address, setAddress] = useState("");
        const newContact = {full_name: fullName, email: email, agenda_slug: "Erik-Luna", address: address, phone: phone };
        function saveButton (e) {
            e.preventDefault()
            if (props.opt == "add") {
                actions.createContact(newContact)
                navigate("/")
            }
            if (props.opt == "edit") {
                
                    let requestOptions = {
                        method: 'PUT',
                        redirect: 'follow',
                        body: JSON.stringify(newContact),
                        headers: {
                                    "Content-Type": "application/json"
                                }
                            };
                      
                       fetch("https://playground.4geeks.com/apis/fake/contact/" + params.id, requestOptions)
                        .then(response => response.json())
                        .then(result => navigate("/"))
                
            }
        }
        
        useEffect (()=> {
            actions.loadSomeData(params.id)
        }, [])

        useEffect (()=> {
            setFullName(store.current_contact?.full_name),
            setPhone(store.current_contact?.phone),
            setEmail(store.current_contact?.email),
            setAddress(store.current_contact?.address)
        }, [store.current_contact])
    
	return (
		<form onSubmit={(e) => saveButton(e)}>
			<h1 className="d-flex justify-content-center mt-5">{props.opt == "add" ? "Add a new contact" : "Edit contact"}</h1>
			<div className="mb-3 mx-3">
                <label htmlFor="Name" className="form-label">Full Name</label>
                <input value= {fullName} onChange={(e) => {setFullName(e.target.value)}} name="Name" type="text" className="form-control" placeholder="Full Name" required/>
            </div>
            <div className="mb-3 mx-3">
                <label htmlFor="Email" className="form-label">Email</label>
                <input value= {email} onChange={(e) => {setEmail(e.target.value)}} name="Email" type="email" className="form-control" placeholder="Enter email" required/>
            </div>
            <div className="mb-3 mx-3">
                <label htmlFor="Phone" className="form-label">Phone</label>
                <input value= {phone} onChange={(e) => {setPhone(e.target.value)}} name="Phone" type="tel" className="form-control" placeholder="Enter phone" required />
            </div>
			<div className="mb-3 mx-3">
                <label htmlFor="Address" className="form-label">Address</label>
                <input value= {address} onChange={(e) => {setAddress(e.target.value)}} name="Address" type="tel" className="form-control" placeholder="Enter address" required/>
            </div>
			<div className="d-grid gap-2">
                <button type="submit" className="btn btn-primary mx-5 mt-3">Save</button>
				{/* <Link to="/" className="ms-5">
					or get back to contacts
				</Link> */}
			</div>
        </form>
	);
};
