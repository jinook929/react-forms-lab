import React from "react";

class TwitterMessage extends React.Component {
  constructor() {
    super();

    this.state = {
      message: ""
    };
  }

  // handleChange = (e) => {
  //   e.persist()
  //   this.setState((state) => ({ message: e.target.value}))
  // }

  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input type="text" name="message" id="message" value={this.state.message} onChange={(e) => this.setState({message: e.target.value})} />
        {/* <input type="text" name="message" id="message" value={this.state.message} onChange={this.handleChange} /> */}
        <p>{this.props.maxChars - this.state.message.length} characters left.</p>
      </div>
    );
  }
}

export default TwitterMessage;
