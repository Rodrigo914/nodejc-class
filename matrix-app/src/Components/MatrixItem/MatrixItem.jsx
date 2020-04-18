import React from "react";

import "./MatrixItem.css";

const styles = {
  matrixItem: {
    width: "64px",
    height: "64px",
  },
};

export class MatrixItem extends React.Component {
  handleValueChange(value) {
    if (isNaN(value)) {
      value = 0;
    } else {
      value = Number(value);
    }
    this.props.onValueChanges(value);
  }

  render() {
    return (
      <div className="matrixItem">
        <input
          type="text"
          placeholder="0"
          className="itemInput"
          onInput={(e) => this.handleValueChange(e.target.value)}
        />
      </div>
    );
  }
}
