


import React, { useState, useEffect } from 'react';
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';
import '../styles/emergency-styles.css';

const EmergencyContact = () => {
  const [contacts, setContacts] = useState([]);
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');

  // Load contacts from local storage on initial render
  useEffect(() => {
    const storedContacts = localStorage.getItem('emergencyContacts');
    if (storedContacts) {
      setContacts(JSON.parse(storedContacts));
    }
  }, []);

  // Save contacts to local storage whenever the contacts state changes
  useEffect(() => {
    localStorage.setItem('emergencyContacts', JSON.stringify(contacts));
  }, [contacts]);

  const handleSpeedDialClick = (number) => {
    window.location.href = `tel:${number}`;
  };

  const handleAddContact = (event) => {
    event.preventDefault();
    if (name.trim() === '' || phone.trim() === '') {
      return;
    }
    setContacts([...contacts, { name, number: phone }]);
    setName('');
    setPhone('');
  };

  const handleEditContact = (index) => {
    setName(contacts[index].name);
    setPhone(contacts[index].number);
    // Delete the contact from the list when editing
    setContacts(contacts.filter((_, i) => i !== index));
  };

  const handleDeleteContact = (index) => {
    setContacts(contacts.filter((_, i) => i !== index));
  };

  return (
    <div className='contact-box'>
      <h3>Emergency Contact</h3>
      <div>
        {contacts.map((contact, index) => (
          <div key={index}>
            <button
              className="speed-dial-button"
              onClick={() => handleSpeedDialClick(contact.number)}
            >
              {contact.name}
            </button>
            <button onClick={() => handleEditContact(index)}>Edit</button>
            <button onClick={() => handleDeleteContact(index)}>Delete</button>
          </div>
        ))}
      </div>
      <hr />
      <h3>Contact Form</h3>
      <div>
        <form onSubmit={handleAddContact}>
          <div>
            <label htmlFor="name">Name:</label>
            <br/>
            <input
              type="text"
              id="name"
              name="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>
          <div>
            <label htmlFor="phone">Phone:</label>
            < div className="phoneInputContainer">
            <PhoneInput
              inputProps={{
                name: 'phone',
                required: true,
              }}
              country="us"
              onlyCountries={['us', 'ca' , 'in']} // Limit the selectable countries if needed
              value={phone}
              onChange={(number) => setPhone(number)}
            />
            </div>
          </div>
          <div>
            <button type="submit">Add Contact</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EmergencyContact;



