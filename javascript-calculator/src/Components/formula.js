import React from 'react';
import '../App.css';
class Formula extends React.Component {
    render() {
      return <div className="formulaScreen">{this.props.formula}</div>;
    }
  }
export default Formula;  