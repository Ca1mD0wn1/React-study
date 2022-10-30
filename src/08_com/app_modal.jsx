import React, { Component } from "react";
import ReactDOM from "react-dom";
class Modal extends React.Component {
  modalRef = React.createRef();
  render() {
    return ReactDOM.createPortal(
      <div
        ref={this.modalRef}
        id="modal"
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          bottom: 0,
          right: 0,
          backgroundColor: "rgba(0, 0, 0, 0.5)",
          display: "flex",
          justifyContent: "center",
          alignItems: "center"
        }}
        onClick={event => {
          if (event.target === this.modalRef.current) {
            this.props.onClick();
          }
        }}
      >
        <div
          style={{
            width: "50%",
            minHeight: "300px",
            backgroundColor: "#fff"
          }}
        >
          模态框
          <button onClick={this.props.onClick}>关闭</button>
        </div>
      </div>,
      document.getElementsByTagName("body")[0]
    );
  }
}
export default class APP extends Component {
  state = {
    show: false
  };
  close() {
    this.setState({ show: false });
  }
  render() {
    return (
      <div>
        <button
          onClick={() => {
            this.setState({
              show: true
            });
          }}
        >
          打开模态框
        </button>
        {this.state.show ? <Modal onClick={this.close.bind(this)} /> : null}
      </div>
    );
  }
}
