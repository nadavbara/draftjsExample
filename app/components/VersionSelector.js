import React, {Component} from 'react';
import DropDownMenu from 'material-ui/DropDownMenu';
import MenuItem from 'material-ui/MenuItem'


const styles = {
    customWidth: {
        width: 200,

    },
    rightItem: {
        textAlign: "left",
    }
};

export default class SelectFieldExampleSimple extends React.Component {

    constructor(props) {
        super(props);
        this.state = {value: 1};
    }

    handleChange = (event, index, value) => this.setState({value});

    render() {
        return (
            <DropDownMenu value={this.state.value}
                          onChange={this.handleChange}
                          autoWidth={true}>
                <MenuItem style={styles.rightItem} value={1} primaryText="ואם זה ממש ארוך"/>
                <MenuItem style={styles.rightItem} value={2} primaryText="יענו ממש ממש ממש ארוך"/>
                <MenuItem style={styles.rightItem} value={3} primaryText="ממש ממשממשממשממשממשממש ארוך"/>
                <MenuItem style={styles.rightItem} value={4} primaryText="מחר"/>
                <MenuItem style={styles.rightItem} value={5} primaryText="אולי"/>
            </DropDownMenu>
        )
    }
}