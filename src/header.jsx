var React = require('react');

//FIRST WAY
// var Header = react.createClass({});

// module.exports = header;

module.exports = React.createClass({
  getInitialState: function () {
    return {
      text: ''
    }
  },

  render: function () {
    // console.log(this.props)
    return <div className="input-group">
            <input
                value={this.state.text}
                onChange={this.handleInputChange}
                className="form-control"
                type="text" />
              <span className="input-group-btn">
                <button
                    onClick={this.handleClick}
                    className="btn btn-success"
                    type="button">
                    Add
                </button>
              </span>
           </div>
  },

  handleInputChange: function (event) {
      this.setState({ text: event.target.value});
  },

  handleClick: function () {
    // console.log(this.state.text)
    // console.log(this.props);
    this.props.itemsStore.push({
      text: this.state.text,
      done: false
    })

    this.setState({text: ''})
  }

});


// if you want the value of anyting you just can call this.state.text

// cannot read property BLANK of null
// - need to set an initial value to remove this
// - create this
// getInitialState: function () {
//   return {
//     text: '123';
//   }
// }

// anytime you change state you wanna call this.setState
