import React, { Component } from 'react';
import { TabBar,NavBar,Icon} from 'antd-mobile';
class Profile extends Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }
    render() {
        return (
            <div>
                <NavBar 
                mode="dark"
                >个人</NavBar>
            </div>
        );
    }
}

export default Profile;