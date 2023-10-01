import styles from "./Profile.module.css";
function Profile() {
  return (
    <div className={styles.profile}>
      <img src="/smilewithme.png" className={styles.picProfile} />
      <div className={styles.profileDetails}>
        <h2>@tertcoder</h2>
        <p>Bujumbura,Burundi</p>
      </div>
    </div>
  );
}

export default Profile;
