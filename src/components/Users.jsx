import styles from "./Users.module.css";
import Account from "./Account";
import { useEffect, useState } from "react";
import initializeApp from "firebase/compat/app";
import firebaseConfig from "./firebaseConfig/config";
import firebase from "firebase/compat/app";
import "firebase/compat/database";

const accounts = [
  {
    name: "Bon Tertius T.",
    email: "tuyishimirebt12@gmail.com",
    phone: "+25765849761",
    position: { lat: 15.4756, lng: 37.2045 },
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
    position: { lat: -3.2658, lng: 29.0569 },
  },
];

function Users({ showUserLocation }) {
  firebase.initializeApp(firebaseConfig);
  const [data, setData] = useState(null);
  const [isOpen, setIsOpen] = useState(true);

  function handleToggleHide() {
    setIsOpen(is => !is);
  }
  const usersData = [];
  useEffect(() => {
    const dbRef = firebase.database().ref();
    dbRef.on("value", snapshot => {
      const newData = snapshot.val();
      setData(newData);
      usersData.push(data);
      console.log(data);
    });
    return () => dbRef.off("value");
  }, []);
  return (
    <div className={styles.accounts}>
      <h1>Connected Accounts</h1>
      {isOpen ? (
        <ul className={styles["accounts__list"]}>
          {accounts.map(account => (
            <Account
              account={account}
              key={account.name}
              showUserLocation={showUserLocation}
            />
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
