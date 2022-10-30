import React, { Component } from "react";
const LangContext = React.createContext();
const themeContext = React.createContext();
const First = props => {
  return (
    <div>
      <themeContext.Consumer>
        {theme => {
          return (
            <>
              <LangContext.Consumer>
        {lang => {
          return(<div>
            {theme} -- {lang}
          </div>)
        }}
              </LangContext.Consumer>
            </>
          )
        }}
      </themeContext.Consumer>


    </div>
  );
};

export default class App extends Component {
  state = {
    theme: "default",
    lang: "ch"
  };
  render() {
    return (
      <div>
        <button
          onClick={() => {
            this.setState({ theme: "default" });
          }}
        >
          白天
        </button>
        <button
          onClick={() => {
            this.setState({ theme: "night" });
          }}
        >
          夜间
        </button>
        <button
          onClick={() => {
            this.setState({ lang: "zh" });
          }}
        >
          中文
        </button>
        <button
          onClick={() => {
            this.setState({ lang: "cn" });
          }}
        >
          英文
        </button>



        <themeContext.Provider value={this.state.theme}>
        <LangContext.Provider value={this.state.lang}><First/></LangContext.Provider>
        </themeContext.Provider>
      </div>
    );
  }
}
