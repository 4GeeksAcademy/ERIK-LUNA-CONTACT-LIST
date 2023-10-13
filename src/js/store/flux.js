const getState = ({ getStore, getActions, setStore }) => {
	const data = [];
	return {
	  store: {
		
		contacts: []
	  },
	  actions: {
		// Otras acciones...
		addContact: (newContact) => {
			const store = getStore();
			const updatedContacts = [...store.contacts, newContact];
			
	
			setStore({ contacts: updatedContacts });
	
			var requestOptions = {
			  method: 'POST',
			  headers: {"Content-Type": "application/json"},
			  body: JSON.stringify(newContact)
			};
	
			fetch("https://playground.4geeks.com/apis/fake/contact", requestOptions)
			  .then(response => response.text())
			  .then(result => console.log(result))
			  .catch(error => console.log('error', error));
		  },

		editContact: (editedContact, index) => {
		  
			const store = getStore();
			const updatedContacts = [...store.contacts];
			updatedContacts[index] = editedContact;
	
			setStore({ contacts: updatedContacts });
	
			var requestOptions = {
			  method: 'PUT',
			  headers: {"Content-Type": "application/json"},
			  body: JSON.stringify(editedContact)
			};
	
			fetch("https://playground.4geeks.com/apis/fake/contact/agenda/Erik-Luna", requestOptions)
			  .then(response => response.text())
			  .then(result => console.log(result))
			  .catch(error => console.log('error', error));
		  
		},

		deleteContacts: (id) => {
		  const store = getStore();
		  console.log("deleteContacts");
		  console.log("Eliminar íd: " + id);
		//   console.log(store.contacts.filter((item, index) => index !== indexDelete));
  
		  setStore({ contacts: store.contacts.filter((item) => item.id !== id) });
  
		  var requestOptions = {
			method: 'DELETE',
			redirect: 'follow'
		  };
  
		  fetch("https://playground.4geeks.com/apis/fake/contact/" + id, requestOptions)
			.then(response => response.text())
			.then(result => console.log(result))
			.catch(error => console.log('error', error));
		},
		loadSomeData: () => {
		  console.log("loadSomeData");
		  setStore({ contacts: data });
  
		  fetch("https://playground.4geeks.com/apis/fake/contact/agenda/Erik-Luna")
			.then((response) => response.json())
			.then(data => setStore({ contacts: data }));
		},
		changeColor: (index, color) => {
		  //get the store
		  const store = getStore();
		  //we have to loop the entire demo array to look for the respective index
		  //and change its color
		  const demo = store.demo.map((elm, i) => {
			if (i === index) elm.background = color;
			return elm;
		  });
  
		  //reset the global store
		  setStore({ demo: demo });
		}
	  }
	};
  };
  
  export default getState;
  