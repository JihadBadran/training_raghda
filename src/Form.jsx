import React, { useState } from "react";

export default function Form({ onCreate = () => {}, onClear }) {
  const [value, setValue] = useState("");
  return (
    <div className="card mb-2">
      <div className="card-body">
        <form>
          <div class="form-group">
            <label for="exampleInputEmail1">Email address</label>
            <input
              type="text"
              value={value}
              className="form-control"
              placeholder="Enter text..."
              id="field"
              onChange={(e) => setValue(e.target.value)}
            ></input>
            <small id="field" class="form-text text-muted">
              Your item will be adde to the list below.
            </small>
          </div>

          <button
            type="submit"
            className="btn btn-primary mr-2"
            onClick={(event) => {
              event.preventDefault();
              onCreate(value);
              setValue("");
            }}
          >
            Add item
          </button>
          <button
            type="reset"
            className="btn btn-secondary"
            onClick={(event) => {
              event.preventDefault();
              onClear();
              setValue("");
            }}
          >
            Clear
          </button>
        </form>
      </div>
    </div>
  );
}
