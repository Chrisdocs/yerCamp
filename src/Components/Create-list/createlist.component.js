import React, { Component, useState } from "react";

export default function CreateList() {
  const [listDesc, setListDesc] = useState("");
  const [listType, setListType] = useState("");
  const [listPriority, setListPriority] = useState("");
  const [listComp, setListComp] = useState(false);

  const updateListDesc = (e) => {
    setListDesc(e.target.value);
  };

  const updateListType = (e) => {
    setListType(e.target.value);
  };

  const updateListPriority = (e) => {
    setListPriority(e.target.value);
  };

  const updateListComp = (e) => {};

  const onSubmit = (e) => {
    e.preventDefault();

    console.log("Form Submitted!");
    console.log("list Description: ", listDesc);
    console.log("List Responsible: ", listType);
    console.log("List Priority: ", listPriority);

    setListType("");
    setListDesc("");
    setListPriority("");
    setListComp(false);
  };

  return (
    <>
      <div style={{ marginTop: 10 }}>
        <h3>Create New Todo</h3>
        <form onSubmit={onSubmit}>
          <div className="form-group">
            <label>Description: </label>
            <input
              type="text"
              className="form-control"
              value={listDesc}
              onChange={updateListDesc}
            />
          </div>
          <div className="form-group">
            <label>List Type: </label>
            <input
              type="text"
              className="form-control"
              value={listType}
              onChange={updateListType}
            />
          </div>
          <div className="form-group">
            <div className="form-check form-check-inline">
              <input
                className="form-check-input"
                type="radio"
                name="priorityOptions"
                id="priorityLow"
                value="Low"
                checked={listPriority === "Low"}
                onChange={updateListPriority}
              />
              <label className="form-check-label">Low</label>
            </div>
            <div className="form-check form-check-inline">
              <input
                className="form-check-input"
                type="radio"
                name="priorityOptions"
                id="priorityMedium"
                value="Medium"
                checked={listPriority === "Medium"}
                onChange={updateListPriority}
              />
              <label className="form-check-label">Medium</label>
            </div>
            <div className="form-check form-check-inline">
              <input
                className="form-check-input"
                type="radio"
                name="priorityOptions"
                id="priorityHigh"
                value="High"
                checked={listPriority === "High"}
                onChange={updateListPriority}
              />
              <label className="form-check-label">High</label>
            </div>
          </div>
          <div className="form-group">
            <input
              type="submit"
              value="Create Todo"
              className="btn btn-primary"
            />
          </div>
        </form>
      </div>
    </>
  );
}
