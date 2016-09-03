import React, {Component} from 'react';
import RaisedButton from 'material-ui/RaisedButton'
import SocialShare from 'material-ui/svg-icons/social/share'
import AutoCompleteList from './AutoCompleteList'
import Popover from 'material-ui/Popover';

export default class ActionButtons extends Component {
    constructor(props) {
        super(props);
        this.state = {
            open: false,
        };
    }

    handleTouchTap = (event) => {
        // This prevents ghost click.
        event.preventDefault();

        this.setState({
            open: true,
            anchorEl: event.currentTarget,
        });
    };

    handleRequestClose = () => {
        this.setState({
            open: false,
        });
    };

    render() {
        return (
            <div className="row rightAlign">
                <div className="col-xs-4">
                    <div className="row between-xs ">
                        <div className="col-xs-3">
                            <RaisedButton label="חדש" primary={true}/>
                        </div>
                        <div className="col-xs-3">
                            <RaisedButton label="שכפל" primary={true}/>
                        </div>
                        <div className="col-xs-3">
                            <RaisedButton label="מחק" primary={true}/>
                        </div>
                        <div className="col-xs-3">
                            <RaisedButton label="שמור" primary={true}/>
                        </div>
                    </div>
                </div>
                <div className="col-xs-4">
                </div>
                <div className="col-xs-4 center-xs">
                    <RaisedButton icon={<SocialShare/>}
                                  onTouchTap={this.handleTouchTap}
                    />
                    <Popover
                        open={this.state.open}
                        anchorEl={this.state.anchorEl}
                        anchorOrigin={{horizontal: 'left', vertical: 'bottom'}}
                        targetOrigin={{horizontal: 'left', vertical: 'top'}}
                        onRequestClose={this.handleRequestClose}
                    >
                      <AutoCompleteList/>
                    </Popover>
                </div>
            </div>

        )
    }
}