import React from "react";
import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";

const ManageStaffInfo = () => {
  const [username, setusername] = useState('');
  const [password, setpassword] = useState('');
  const [contacts, setContacts] = useState([]);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);
  const [selectedContacts, setSelectedContacts] = useState([]);
  const [showAddForm, setShowAddForm] = useState(false);
  const [showContactList, setShowContactList] = useState(false);
  const [showDeleteConfirm, setShowDeleteConfirm] = useState(false);

  // Function to fetch the contact list from the server
  const fetchContacts = async () => {
    try {
      const response = await axios.get('http://localhost:5000/getContacts');
      setContacts(response.data);
    } catch (err) {
      setError('Failed to fetch contacts');
    }
  };

  useEffect(() => {
    // Fetch the contact list when the component mounts
    fetchContacts();
  }, []);

  // Function to update a contact
  const handleUpdateContact = async (contact) => {
    try {
      const updatedusername = prompt('Enter updated username:', contact.username);
      const updatedpassword = prompt('Enter updated password:', contact.password);

      if (!updatedusername || !updatedpassword) {
        setError('username and password cannot be empty');
        return;
      }

      const response = await axios.put(`http://localhost:5000/updateContact/${contact._id}`, {
        username: updatedusername,
        password: updatedpassword,
      });

      setContacts(
        contacts.map((c) => (c._id === response.data._id ? { ...c, username: response.data.username, password: response.data.password } : c))
      );

      setError('');
    } catch (err) {
      setError('Failed to update contact');
    }
  };

  const handleAddContact = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://localhost:5000/addContact', { username, password });
      setSuccess(true);
      setError('');
      setContacts([...contacts, response.data]);
      setusername('');
      setpassword('');
    } catch (err) {
      setSuccess(false);
      setError('Failed to add contact');
    }
  };

  const handleDeleteContacts = async () => {
    try {
      const selectedIds = selectedContacts.map((contact) => contact._id);
      await axios.delete(`http://localhost:5000/deleteContact/${selectedIds[0]}`);
      setContacts(contacts.filter((contact) => !selectedIds.includes(contact._id)));
      setSelectedContacts([]);
      setShowDeleteConfirm(false);
    } catch (err) {
      setError('Failed to delete contacts');
    }
  };

  const handleCheckboxChange = (e, contact) => {
    const { checked } = e.target;
    if (checked) {
      setSelectedContacts([...selectedContacts, contact]);
    } else {
      setSelectedContacts(selectedContacts.filter((selectedContact) => selectedContact._id !== contact._id));
    }
  };

  return (
    <div>
      <h1>Contact App</h1>
      <div classusername="buttons-container">
        <button onClick={() => setShowAddForm(!showAddForm)} classusername="action-button">
          {showAddForm ? 'Cancel' : 'Add Contact'}
        </button>
        <button onClick={() => setShowContactList(!showContactList)} classusername="action-button">
          Contact List
        </button>
        {showContactList && (
          <>
            <button onClick={() => setShowDeleteConfirm(true)} classusername="action-button">
              Delete
            </button>
          </>
        )}
      </div>

      {showAddForm && (
        <form onSubmit={handleAddContact}>
          <div>
            <label htmlFor="username">username:</label>
            <input type="text" id="username" value={username} onChange={(e) => setusername(e.target.value)} required />
          </div>
          <div>
            <label htmlFor="password">password:</label>
            <input type="text" id="password" value={password} onChange={(e) => setpassword(e.target.value)} required />
          </div>
          {error && <div>{error}</div>}
          {success && <div>Contact added successfully!</div>}
          <button type="submit">Add Contact</button>
        </form>
      )}

      {showContactList && contacts.length > 0 && !showAddForm && (
        <table>
          <thead>
            <tr>
              <th>username</th>
              <th>password</th>
              <th>Edit</th>
              {showDeleteConfirm && <th>Action</th>}
            </tr>
          </thead>
          <tbody>
            {contacts.map((contact) => (
              <tr key={contact._id}>
                <td>{contact.username}</td>
                <td>{contact.password}</td>
                {showDeleteConfirm && (
                  <td>
                    <input
                      type="checkbox"
                      checked={selectedContacts.some((selectedContact) => selectedContact._id === contact._id)}
                      onChange={(e) => handleCheckboxChange(e, contact)}
                    />
                  </td>
                )}
                <td>
                  <button onClick={() => handleUpdateContact(contact)}>Update</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}

      {showDeleteConfirm && selectedContacts.length > 0 && (
        <div>
          <h3>Confirm Deletion</h3>
          <p>Are you sure you want to delete the selected contacts?</p>
          <button onClick={handleDeleteContacts}>Confirm Delete</button>
        </div>
      )}
    </div>
  )
}

export default ManageStaffInfo;