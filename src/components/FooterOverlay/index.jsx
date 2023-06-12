"use client";

import cn from "classnames";
import styles from "./FooterOverlay.module.scss";
import { useState } from "react";

const FooterOverlay = ({ expanded }) => {
  const [internExpanded, setInternExpanded] = useState(expanded);

  const classes = {
    footerOverlay: cn(styles["footer-overlay"], {
      [styles["expanded"]]: internExpanded,
    }),
    btns: cn(styles["btns"], {
      [styles["expanded"]]: internExpanded,
    })
  };

  return (
    <div className={classes.footerOverlay}>
      <div className={classes.btns}>
        <button onClick={() => setInternExpanded(!internExpanded)}>change</button>
        <button onClick={() => setInternExpanded(!internExpanded)}>change</button>
        <button onClick={() => setInternExpanded(!internExpanded)}>change</button>
        <button onClick={() => setInternExpanded(!internExpanded)}>change</button>
      </div>
    </div>
  );
};

export default FooterOverlay;
