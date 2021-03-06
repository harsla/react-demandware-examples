const isServerSide = typeof window === 'undefined';

if (isServerSide) {
	var React = require('react');
} else {
	var React = window.React;
	var ReactDOM = window.ReactDOM;
}

var Item = React.createClass({
	getInitialState: function () {
		return {
			count: this.props.initialCount
		};
	},

	_increment: function () {
		this.setState({ count: this.state.count + 1 });
	},

	render: function () {
		return React.createElement(
			'div',
			{ onClick: this._increment },
			this.state.count
		);
	}
});

if (isServerSide) {
	exports.Item = Item;
} else {
	ReactDOM.render(React.createElement(Item, { initialCount: 7 }), document.getElementById('container'));
}