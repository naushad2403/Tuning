import React from "react";
import styles from "./usermenu.module.css";

const UserMenu = ({ name, email, bio }) => {
  return (
    <div className={styles.userMenu}>
      <div className={styles.profileInfo}>
        <img
          className={styles.profilePicture}
          src="/assets/placeholder.svg"
          alt="Profile"
        />
        <div className={styles.profileDetails}>
          <h3 className={styles.username}>{name}</h3>
          <p className={styles.headline}>{email}</p>
          <p className={styles.location}>{bio}</p>
        </div>
      </div>
      <nav className={styles.menuItems}>
        <a href="#" className={styles.menuLink}>
          View Profile
        </a>
        <a href="#" className={styles.menuLink}>
          Logout
        </a>
      </nav>
    </div>
  );
};

export default UserMenu;
