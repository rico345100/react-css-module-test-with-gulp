import React from 'react';
import ReactDOM from 'react-dom';
import style from './style.css';

class MyComponent extends React.Component {
	render() {
		return (
			<div styleName={style.text}>
				<h1>Helloworld!</h1>
			</div>
		);
	}
}

ReactDOM.render(
	<MyComponent />,
document.getElementById('entry'));