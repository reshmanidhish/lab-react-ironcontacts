import { useState } from "react";
import "./App.css";
import contacts from "./contacts.json";

function App() {
  const [contactList, setContactList] = useState(contacts.slice(0, 5));
  const remainingContacts = contacts.slice(5);

  function addRandomContact() {
    if (remainingContacts.length > 0) {
      const randomIndex = Math.floor(Math.random() * remainingContacts.length);
      const randomContact = remainingContacts.splice(randomIndex, 1)[0];
      setContactList((previousContactList) => [
        ...previousContactList,
        randomContact,
      ]);
    }
  }
    function sortByName() {
      const sortedContacts = [...contactList].sort((a, b) =>
        a.name.localeCompare(b.name)
      );
      setContactList(sortedContacts);
    }

    function sortByPopularity() {
      const sortedContacts = [...contactList].sort(
        (a, b) => b.popularity - a.popularity
      );
      setContactList(sortedContacts);
    }

    function deleteContact(contactId) {
      debugger
      const updatedContacts = contactList.filter((contact) => contact.id !== contactId);
      setContactList(updatedContacts);
    }
  
  
  return (
    <div className="App">
      <h1>IronContacts</h1>
      <div>
        <button onClick={addRandomContact}>Add Random Contact</button>
        <button onClick={sortByName}>Sort by Name</button>
        <button onClick={sortByPopularity}>Sort by Popularity</button>
      </div>
      <table>
        <thead>
          <tr>
            <th>Picture</th>
            <th>Name</th>
            <th>Popularity</th>
            <th>Won Oscar</th>
            <th>Won Emmy</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {contactList.map((contact) => {
            return (
              <tr key={contact.id}>
                <td>
                  <img src={contact.pictureUrl} alt="" height={70} />
                </td>
                <td>{contact.name}</td>
                <td>{contact.popularity}</td>
                <td>
                  {contact.wonOscar ? (
                    <img
                      alt=""
                      src="https://github.githubassets.com/images/icons/emoji/unicode/1f3c6.png"
                    />
                  ) : (
                    ""
                  )}
                </td>
                <td>
                  <button onClick={() => deleteContact(contact.id)}>Delete</button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default App;
