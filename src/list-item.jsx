var React = require('react');
var Firebase = require('firebase');
var rootUrl = 'https://todo-firebase-pn.firebaseio.com/';


module.exports = React.createClass({

    getInitialState: function () {
        return {
          text: this.props.item.text,
          done: this.props.item.done,
          textChanged: false
        };
    },

    componentWillMount: function () {
        this.fb = new Firebase(rootUrl + 'items/' + this.props.item.key)
    },
    render: function () {
      // console.log(this.props.item);
                    // add css classes like html disabled
                    // if you didn't want it to be editable
                    // value={this.props.item.text}
        return  <div className="input-group">
                  <span className="input-group-addon">
                    <input
                      type="checkbox"
                      checked={this.state.done}
                      onChange={this.handleDoneChange}
                      />
                  </span>
                  <input
                    type="text"
                    className="form-control"
                    value={this.state.text}
                    onChange={this.handleTextChange}
                    disabled={this.state.done}
                    />
                  <span className="input-group-btn">
                    {this.changeButtons()}
                    <button
                      className="btn btn-danger"
                      onClick={this.handleDeleteClick}
                      >
                      Delete
                    </button>
                  </span>
                </div>
    },

    changeButtons: function () {
        if(!this.state.textChanged) {
          return null;
        } else {
          return [
            <button className="btn btn-success">
              Save
            </button>,
            <button
              className='btn btn-default'
              >
              Undo
            </button>
          ]
        }
    },

    handleTextChange: function (event) {
      this.setState({
          text: event.target.value,
          textChanged: true
      })
    },
    handleDoneChange: function (event) {
        var update = {done: event.target.checked};
        this.setState(update);
        this.fb.update(update);
    },

    handleDeleteClick: function () {
        this.fb.remove();
    }

})
