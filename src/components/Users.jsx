import styles from "./Users.module.css";
import Account from "./Account";
import { useState } from "react";

const accounts = [
  {
    name: "Bon Tertius T.",
    email: "tuyishimirebt12@gmail.com",
    phone: "+25765849761",
    position: { lat: -3.34, lng: 2.4 },
  },
  {
    name: "Toussaint I.",
    email: "iradukunda@gmail.com",
    phone: "+25765269871",
    position: [-3.34, 2.4],
  },
  {
    name: "Liberatrice B.",
    email: "bayizere@gmail.com",
    phone: "+25765826719",
    position: [-3.34, 2.4],
  },
];
function Users() {
  const [isOpen, setIsOpen] = useState(false);

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
