import React, { Component } from "react";

export default class App extends Component {
  state = {
    cityList: []
  };

  componentDidMount() {
    fetch("http://121.89.205.189:3001/api/city/sortCity")
      .then(res => res.json())
      .then(res => {
        this.setState({ cityList: JSON.parse(res.data) });
      });
  }
  render() {
    const { cityList } = this.state;
    return (
      <div>
        <ul>
          {cityList.map(item => {
            return (
              <li key={item.letter}>
                {item.letter}
                <ol>
                  {item.data.map(item => {
                    return (
                      <li key={item.cityId}>
                        {item.name}
                      </li>
                    );
                  })}
                </ol>
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}
