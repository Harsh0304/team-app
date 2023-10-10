import React from "react";
import styles from "./profile.module.css";
import {
  AiOutlineTwitter,
  AiOutlineGithub,
  AiOutlineGooglePlus,
} from "react-icons/ai";
import Card from "../UI/card/Card";

const Profile = ({ image, name, job, company, link }) => {
  return (
    <Card>
      <div className={styles.profile}>
        <img src={image} alt="" />
        <div className={styles["profile-content"]}>
          <h3>My Profile</h3>
          <div className={styles.text}>
            <p>Name:</p>
            <p>{name}</p>
          </div>
          <div className={styles.text}>
            <p>Job:</p>
            <p>{job}</p>
          </div>
          <div className={styles.text}>
            <p>Company:</p>
            <p>{company}</p>
          </div>
          <div className={styles.icons}>
            <AiOutlineTwitter />
            <AiOutlineGithub />
            <AiOutlineGooglePlus />
          </div>
          <div className={styles.btn}>
            <a href={link} target="_blank" rel="noreferrer">
              View Profile
            </a>
          </div>
        </div>
      </div>
    </Card>
  );
};

export default Profile;
