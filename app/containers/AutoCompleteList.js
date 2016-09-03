import React, {Component} from 'react';
import AutoComplete from 'material-ui/AutoComplete';
import MenuItem from 'material-ui/MenuItem'


const styles = {
    customWidth: {
        width: 200,

    },
    rightItem: {
        textAlign: "left",
    }
};

export default class AutoCompleteList extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            dataSource: [],
        };
    }

    handleUpdateInput = (value) => {
        this.setState({
            dataSource: [
                value,
                value + value,
                value + value + value,
            ],
        });
    };

    render() {
        return (
            <AutoComplete
                hintText="הכנס שם דף"
                dataSource={this.state.dataSource}
                onUpdateInput={this.handleUpdateInput}
            />
        )
    }
}