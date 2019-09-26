import React from 'react';

export class TrebleClef extends React.Component {
    render() {
        return (
            <Staff></Staff>
        )
    }
}

export class BassClef extends React.Component {
    render() {
        return (
            <Staff></Staff>
        )
    }
}
export class Staff extends React.Component {
    render() {
        return (
            <svg height="80" width="500">
                <line x1="0" y1="20" x2="500" y2="20" stroke="black" />
                <line x1="0" y1="30" x2="500" y2="30" stroke="black" />
                <line x1="0" y1="40" x2="500" y2="40" stroke="black" />
                <line x1="0" y1="50" x2="500" y2="50" stroke="black" />
                <line x1="0" y1="60" x2="500" y2="60" stroke="black" />
            </svg>
        )
    }
}