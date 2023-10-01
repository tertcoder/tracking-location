import { useState } from "react";
import styles from "./AddAccount.module.css";
function AddAccount() {
  const [showForm, setShowForm] = useState(false);

  function handleCloseForm(e) {
    e.preventDefault();
    setShowForm(false);
  }
  function handleOpenForm(e) {
    e.preventDefault();
    setShowForm(true);
  }
  return (
    <>
      {showForm ? (
        <form className={styles.form}>
          <div className={styles.inputContainer}>
            <label htmlFor="name">Name:</label>
            <input id="name" name="name" type="text" />
          </div>
          <div className={styles.inputContainer}>
            <label htmlFor="username">Username:</label>
            <input id="username" name="username" type="text" />
          </div>
          <div className={styles.inputContainer}>
            <label htmlFor="email">Email address:</label>
            <input id="email" name="email" type="email" />
          </div>
          <div className={styles.inputContainer}>
            <label htmlFor="phone">phone:</label>
            <input id="phone" name="phone" type="text" pattern="[0-9]" />
          </div>
          <div className={styles.buttons}>
            <button onClick={handleCloseForm}>Cancel</button>
            <button>Submit</button>
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
