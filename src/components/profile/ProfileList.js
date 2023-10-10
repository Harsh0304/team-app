import React from "react";
import styles from "./profileList.module.css";
import Profile from "./Profile";
import { profiles } from "../../profile-data";

const ProfileList = () => {
  return (
    <section>
      <div className={styles.center}>
        <div>
          <h1>Team Member</h1>
          <div className={styles["profile-container"]}>
            {profiles?.map(({ img, name, job, company, link }, index) => {
              return (
                <Profile
                  key={index}
                  image={img}
                  name={name}
                  job={job}
                  company={company}
                  link={link}
                />
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProfileList;
