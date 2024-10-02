import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setGrouping, setOrdering } from '../Features/SettingSlice.js';

const Controller = () => {
  const dispatch = useDispatch();
  const grouping = useSelector((state) => state.set.grouping);
  const ordering = useSelector((state) => state.set.ordering);
  return (
    <div className="control-bar">
      <label>
        Grouping:
        <select value={grouping} onChange={(e) => dispatch(setGrouping(e.target.value))}>
          <option value="status">Status</option>
          <option value="user">User</option>
          <option value="priority">Priority</option>
        </select>
      </label>
      <label>
        Ordering:
        <select value={ordering} onChange={(e) => dispatch(setOrdering(e.target.value))}>
          <option value="priority">Priority</option>
          <option value="title">Title</option>
        </select>
      </label>
    </div>
  );
};

export default Controller;
