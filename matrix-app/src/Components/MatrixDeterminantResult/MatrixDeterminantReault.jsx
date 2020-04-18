import React from "react";

export class MatrixDeterminantResult extends React.Component {
  render() {
    return (
      <div className="row">
        <div className="col-12">
          <button
            className="btn btn-info"
            onClick={() => this.props.onButtonClick()}
          >
            Calcular Determinante
          </button>
        </div>

        {this.props.result && (
          <div className="col-12">
            <h2>A = {this.props.result}</h2>
          </div>
        )}
      </div>
    );
  }
}
