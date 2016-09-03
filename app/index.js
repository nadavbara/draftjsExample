require('./assets/index.js');
import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import MyStatefulEditor from './components/MyStatefulEditor';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import ActionButtons from './containers/ActionButtons'
import Headline from './components/Headline'
import VersionSelector from './components/VersionSelector'
import getMuiTheme from 'material-ui/styles/getMuiTheme';

const muiTheme = getMuiTheme({
    isRtl:true,
});

ReactDOM.render(
    <MuiThemeProvider muiTheme={muiTheme}>
        <div className="container">
            <div className="row rightAlign">
                <div className="col-xs-4">
                    <Headline/>
                </div>
                <div className="col-xs-4">
                </div>
                <div className="col-xs-4 bottom-xs">
                    <VersionSelector/>
                </div>
            </div>
            <div className="row">
                <div className="col-xs-12">
                    <MyStatefulEditor />
                </div>
            </div>
            <ActionButtons/>
        </div>
    </MuiThemeProvider>,
    document.getElementById('app')
);