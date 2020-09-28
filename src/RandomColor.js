import React from 'react';

const green = '#39D1B4';

export class RandomColor extends React.Component {
  constructor(props) {
    super(props);
    this.state = { color: green };
    this.changeColor = this.changeColor.bind(this);
  }

  changeColor() {
    const newColor =
      '#' +
      (Math.random().toString(16) + '000000').substring(2, 8).toUpperCase();
    this.setState({ color: newColor });
  }

  render() {
    return (
      <div style={{ background: this.state.color }}>
        <section>
          <button onClick={this.changeColor}>Change color</button>
          <h1>Change my color</h1>
        </section>
      </div>
    );
  }
}
