// import { useNavigate } from "react-router-dom";
import styles from "./Account.module.css";

function Account({ account }) {
  // const navigate = useNavigate();
  const { name, email, phone, position } = account;
  return (
    <li
      className={styles.account}
      // onClick={() => navigate(`?lat=${position.lat}&lng=${position.lng}`)}
    >
      <h2>{name}</h2>
      <p>{email}</p>
      <p>{phone}</p>
    </li>
  );
}

export default Account;
