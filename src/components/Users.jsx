import styles from "./Users.module.css";
import Account from "./Account";
import { useState } from "react";

const accounts = [
  {
    name: "Bon Tertius T.",
    email: "tuyishimirebt12@gmail.com",
    phone: "+25765849761",
    position: { lat: -3.342249, lng: 29.401736 },
  },
  {
    name: "Toussaint I.",
    email: "iradukunda@gmail.com",
    phone: "+25765269871",
    position: { lat: -3.3449276, lng: 29.4034562 },
  },
  {
    name: "Liberatrice B.",
    email: "bayizere@gmail.com",
    phone: "+25765826719",
    position: { lat: -3.345509, lng: 29.393489 },
  },
];
function Users() {
  const [isOpen, setIsOpen] = useState(true);

  function handleToggleHide() {
    setIsOpen(is => !is);
  }
  return (
    <div className={styles.accounts}>
      <h1>Connected Accounts</h1>
      {isOpen ? (
        <ul className={styles["accounts__list"]}>
          {accounts.map(account => (
            <Account account={account} key={account.name} />
          ))}
        </ul>
      ) : (
        ""
      )}
      <button className={styles.toggleHide} onClick={handleToggleHide}>
        <span>{isOpen ? "-" : "+"}</span>
      </button>
    </div>
  );
}

export default Users;
