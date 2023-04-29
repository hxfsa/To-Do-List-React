import styles from "./TaskItem.module.css";
import { PencilSquareIcon } from '@heroicons/react/24/solid'
import { TrashIcon } from '@heroicons/react/24/solid'
import { useState } from "react";


function TaskItem({}) {


  return (
    <li className={styles.task}>
      <div className={styles["task-group"]}>
        <input
          className={styles.checkbox}
          type="checkbox"
            // onChange={toggleChange}
            // checked={}
            // name={}
            // id={}
        />
        <label
          // htmlFor={}
          className={styles.label}
        >
          {/* {} */}
          <p className={styles.checkmark}>
            {/* <CheckIcon strokeWidth={2} width={24} height={24} /> */}
          </p>
        </label>
      </div>
      <div className={styles["task-group"]}>
        <button
          className="btn"
          //  aria-label={`Update ${} Task`}
          // onClick={}
        >
          {/* <PencilSquareIcon width={24} height={24}/> */}
        </button>

        <button
          className={`btn ${styles.delete}`}
          //  aria-label={`Delete ${} Task`}
          // onClick={}
        >
          {/* <TrashIcon width={24} height={24}/> */}
        </button>
      </div>
    </li>
  );
}

export default TaskItem;
