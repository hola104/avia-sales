import React from "react";

import classes from "./Tabs.module.scss";

export default function Tabs() {
  return (
    <div className={classes["button-box"]}>
      <button type="button" className={classes.tabs}>
        САМЫЙ ДЕШЕВЫЙ
      </button>
      <button type="button" className={classes.tabs}>
        САМЫЙ БЫСТРЫЙ
      </button>
      <button type="button" className={classes.tabs}>
        ОПТИМАЛЬНЫЙ
      </button>
    </div>
  );
}
