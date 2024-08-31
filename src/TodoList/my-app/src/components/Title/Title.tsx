import React from 'react';
import styles from './title.module.scss';
function Title() {
  return <h1 className={styles.title}>Todo list</h1>;
}

export default React.memo(Title);
