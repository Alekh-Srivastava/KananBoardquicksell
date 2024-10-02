import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setGrouping, setOrdering } from '../Features/SettingSlice.js';
import './Controller.css'; // Import your pure CSS file

const Controller = () => {
  const dispatch = useDispatch();
  const grouping = useSelector((state) => state.set.grouping);
  const ordering = useSelector((state) => state.set.ordering);

  // State to toggle display of grouping and ordering options
  const [showOptions, setShowOptions] = useState(false);

  // Function to toggle the options
  const toggleOptions = () => setShowOptions(!showOptions);

  return (
    <div className="control-bar">
      <div className="display-toggle" onClick={toggleOptions}>
        <img
          className="display-icon"
          src="data:image/svg+xml;base64,PHN2ZyBmaWxsPSIjMDA3OGU3IiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNCAyNCI+PHBhdGggZD0iTTEyIDNDNy4wMyAzIDIuNTMgNi42MSAxIDEyYzEuNTMgNS4zOSA2LjAzIDkgMTEgOXM5LjQ3LTMuNjEgMTEtOWMtMS41My01LjM5LTYuMDMtOS0xMS05em0wIDE2Yy00LjQyIDAtOC0zLjU4LTgtOHMzLjU4LTggOC04IDggMy41OCA4IDgtOCAzLjU4LTggOCA4LTggOHptLTItMTNoMnY1aC0yem0wIDZoMnYyaC0yeiIvPjwvc3ZnPg=="
          alt="Display Icon"
        />
        <span>Display</span>
      </div>
      <div className={showOptions ? 'show-options' : 'hidden-options'}>
        <label>
          Grouping:
          <select
            value={grouping}
            onChange={(e) => dispatch(setGrouping(e.target.value))}
          >
            <option value="status">Status</option>
            <option value="user">User</option>
            <option value="priority">Priority</option>
          </select>
        </label>
        <label>
          Ordering:
          <select
            value={ordering}
            onChange={(e) => dispatch(setOrdering(e.target.value))}
          >
            <option value="priority">Priority</option>
            <option value="title">Title</option>
          </select>
        </label>
      </div>
    </div>
  );
};

export default Controller;
