import React, { useState , useEffect} from "react";
import ContactForm from "./ContactForm/ContactForm";
import ContactList from "./ContactsList/ContactsList";
import Filter from "./Filter/Filter";
import s from "..//components/ContactForm/ContactForm.module.css"
const App=()=>{
const[contact, setContact]= useState(()=>{
  const contact =  JSON.parse( localStorage.getItem('LocalPhonebook'))
  return  contact ? contact:[];
})
const [filter, setFilter]= useState("")
useEffect(()=>{ localStorage.setItem('LocalPhonebook',JSON.stringify(contact))}, [contact])
const addToPhonebook = (newContact) => {
  contact.find(
    (contact) => contact.name.toLowerCase() === newContact.name.toLowerCase()
  )
    ? alert(`${newContact.name} is already in contacts`)
    : setContact((prevContact) => {return [...prevContact, newContact]})
};
const deleteContact = (id) => {
setContact (prevContact =>prevContact.filter((contact) => contact.id !== id));
};
 const filterHandler = ({ target }) => {setFilter(target.value );
};
 const getfilteredContacts = () => {
   const insensitiveValue = filter.toLowerCase();
  if (filter.length) {
    return contact.filter((contact) =>
      contact.name.toLowerCase().includes(insensitiveValue)
    );
  } else {
    return contact;
  }
};
 const filteredContacts =  getfilteredContacts();

return (
  <div>
    <h1 className={s.header}>Phonebook</h1>
    <ContactForm onSubmit={addToPhonebook} />
    <h2  className={s.header}>Contacts</h2>
    <Filter filter={filter} inputHandler={filterHandler} />
    <ContactList
      filteredContacts={filteredContacts}
      deleteContact={deleteContact}
    />
  </div>
);
}

export default App;
/*
  componentDidMount(){       
    const LocalStoragePhonebook = localStorage.getItem('LocalPhonebook');
    const LocalPhonebook = JSON.parse(LocalStoragePhonebook);

    if (LocalPhonebook?.length) {
        this.setState({contacts: LocalPhonebook});
    }; 
}

componentDidUpdate (prevProps, prevState) {
    const prevConatcts = prevState.contacts;
    const currentContacts = this.state.contacts;

    if (currentContacts !== prevConatcts) {
        localStorage.setItem ('LocalPhonebook', JSON.stringify(currentContacts));
    }
}*/