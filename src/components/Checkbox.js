/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import { firebase } from 'firebase';
import React from 'react';

const Checkbox = ({ id }) => {
  const archiveTask = () => {
    firebase
      .firestore()
      .collection('tasks')
      .doc(id)
      .update({
        archived: true,
      });
  };

  return (
    <div
      className="checkbox-holder"
      data-testid="checkbox-action"
      onKeyDown={() => archiveTask()}
      onClick={() => archiveTask()}
      role="button"
      tabIndex={0}
    >
      <span className="checkbox" />
    </div>
  );
};

export default Checkbox;
