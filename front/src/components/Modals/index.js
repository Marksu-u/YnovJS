import React, { useState } from 'react';
import Popup from 'reactjs-popup';
import Input from "../../components/Input";
import styles from './index.module.scss';

export default () => (

  <Popup
    trigger={<button className={styles.button}> Ouvrir Modal </button>}
    modal
    nested
    >
    {close => (
      <div className={styles.modal}>
        <button className={styles.close} onClick={close}>
          &times;
        </button>
        <div className={styles.header}> Modal Title </div>
        <div className={styles.content}>
          <p>Un joli modal</p>
        </div>
      </div>
    )}
  </Popup>

);