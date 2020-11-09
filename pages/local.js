import React, {Component} from 'react';
export default class Local extends Component {
    static async getInitialProps() {
        const res = await fetch('https://xkcd.com/4/info.0.json');
        const data = await res.json();

        return { data }
    }

    render() {
        return (<div>TESTING</div>);
    }
}