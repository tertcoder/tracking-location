import { useState, useEffect } from "react";
import initializeApp from "firebase/compat/app";
import firebaseConfig from "./firebaseConfig/config";
import firebase from "firebase/compat/app";
import "firebase/compat/database";
import styles from "./AddAccount.module.css";
import ErrorMessage from "./ErrorMessage";
// import { useData } from "../contexts/FormContext";

function AddAccount() {
  firebase.initializeApp(firebaseConfig);

  const [showForm, setShowForm] = useState(false);

  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [profile, setProfile] = useState("");

  const [error, setError] = useState("");

  function handleCloseForm(e) {
    e.preventDefault();
    setShowForm(false);
  }
  function handleOpenForm(e) {
    e.preventDefault();
    setShowForm(true);
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (!name || !username || !email || !phone) setError("Fill all fields");
    const newUser = {
      name,
      username,
      email,
      phone,
      profile,
    };
    firebase.database().ref().push({
      name: newUser.name,
      username: newUser.username,
      email: newUser.email,
      phone: newUser.phone,
      profile: newUser.profile,
    });
  }

  return (
    <>
      {showForm ? (
        <form className={styles.form}>
          <div className={styles.inputContainer}>
            <label htmlFor="name">Name:</label>
            <input
              id="name"
              name="name"
              type="text"
              value={name}
              onChange={e => setName(e.target.value)}
            />
          </div>
          <div className={styles.inputContainer}>
            <label htmlFor="username">Username:</label>
            <input
              id="username"
              name="username"
              type="text"
              value={username}
              onChange={e => setUsername(e.target.value)}
            />
          </div>
          <div className={styles.inputContainer}>
            <label htmlFor="email">Email address:</label>
            <input
              id="email"
              name="email"
              type="email"
              value={email}
              onChange={e => setEmail(e.target.value)}
            />
          </div>
          <div className={styles.inputContainer}>
            <label htmlFor="phone">Phone:</label>
            <input
              id="phone"
              name="phone"
              type="text"
              value={phone}
              onChange={e => setPhone(e.target.value)}
            />
          </div>
          <div className={styles.inputContainer}>
            <label htmlFor="phone">Profile pic(url):</label>
            <input
              id="profile"
              name="profile"
              type="text"
              value={profile}
              onChange={e => setProfile(e.target.value)}
            />
          </div>
          {error ? <ErrorMessage>*{error}!!!</ErrorMessage> : ""}
          <div className={styles.buttons}>
            <button onClick={handleCloseForm} style={{ cursor: "pointer" }}>
              Cancel
            </button>
            <button
              type="submit"
              style={{ cursor: "pointer" }}
              onClick={handleSubmit}
            >
              Submit
            </button>
          </div>
        </form>
      ) : (
        <div className={styles.addAccount}>
          <h2>Add Account</h2>
          <p>to share your current location</p>
          <button className={styles.openForm} onClick={handleOpenForm}>
            &rarr;
          </button>
        </div>
      )}
    </>
  );
}

export default AddAccount;
