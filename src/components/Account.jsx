import { Link } from "react-router-dom";
import styles from "./Account.module.css";

function Account({ account, showUserLocation }) {
  // const navigate = useNavigate();
  const { name, email, phone, position } = account;
  return (
    <li>
      <Link
        className={styles.account}
        to={`?lat=${position.lat}&lng=${position.lng}`}
        onClick={() => showUserLocation(position.lat, position.lng)}
      >
        <h2>{name}</h2>
        <p>{email}</p>
        <p>{phone}</p>
      </Link>
    </li>
  );
}

export default Account;
