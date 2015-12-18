var React = require('react');
var ListItem = require('./list-item');


module.exports = React.createClass({


  render: function () {
    // console.log(this.props.items);
    return  <div>
                {this.renderList()}
            </div>
  },

  renderList: function () {
    if(this.props.items['.value'] === null) {
      return <h4>
                add a todo to get started
             </h4>
    } else {
      var children = [];

      for (var key in this.props.items) {
        if (key !== '.key'){

          var item = this.props.items[key];
          item.key = key;

          children.push(
              <ListItem
                  item={item}
                  key={key}
                />
            )
        }
      }
      return children
    }
  }

});
