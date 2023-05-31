"use client";
import { useState } from "react";
import cn from "classnames";
import styles from "./FooterOverlay.module.scss";

const FooterOverlay = ({ expanded }) => {
  const [internExpanded, setInternExpanded] = useState(expanded);

  const classes = {
    footerOverlay: cn(styles["footer-overlay"], {
      [styles["expanded"]]: internExpanded,
    }),
  };

  return (
    <div className={classes.footerOverlay}>
      <button onClick={() => setInternExpanded(!internExpanded)}>change</button>
    </div>
  );
};

export default FooterOverlay;
