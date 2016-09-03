require('./assets/index.js');
import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import MyStatefulEditor from './components/MyStatefulEditor';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

ReactDOM.render(
	<MuiThemeProvider>
		<MyStatefulEditor />
	</MuiThemeProvider>,
	document.getElementById('app')
);