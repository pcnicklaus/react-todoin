var React = require('react');
var ReactFire = require('reactfire');
var Firebase = require('firebase');
var rootUrl = 'https://todo-firebase-pn.firebaseio.com/';

// components
var Header = require('./header');
var List = require('./list');

var Hello = React.createClass({

  getInitialState: function () {
    return {
        items: {}
      }
  },
  // like inject from angular
  mixins: [ReactFire],

  // only runs once when the component is rendered to the dom
  componentWillMount: function () {

    // connecting our firebase to our component
    this.fb = new Firebase(rootUrl + 'items/');

    // react fire method, bind the item endpoint to items
    this.bindAsObject(this.fb, 'items');
  },

  // runs twice
  render: function() {
    // console.log(this.state.items);
    return <div className="row panel panel-default">
              <div className="col-md-8 col-md-offset-2">
                <h2 className="text-center">
                  Todo List
                </h2>
                <hr />
                <Header itemsStore={this.firebaseRefs.items}/>
                <List items={this.state.items}/>
              </div>
            </div>
          }
});

var element = React.createElement(Hello, {});
React.render(element, document.querySelector('.container'));


// stores are akin to factories in angular

// itemsStore passing through the firebase refs
// all the ite
