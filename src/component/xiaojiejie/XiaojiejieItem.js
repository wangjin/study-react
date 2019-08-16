import React, { Component } from "react";
import PropTypes from "prop-types";
class XiaojiejieItem extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  shouldComponentUpdate(nextProps, nextState) {
    if (nextProps.content !== this.props.content) {
      return true;
    } else {
      return false;
    }
  }

  render() {
    return <li onClick={this.handleClick.bind(this)}>{this.props.content}</li>;
  }

  handleClick() {
    console.log("点击了 li" + this.props.index);
    this.props.deleteItem(this.props.index);
  }
}

XiaojiejieItem.propTypes = {
  index: PropTypes.number.isRequired,
  content: PropTypes.string.isRequired,
  deleteItem: PropTypes.func.isRequired
};

export default XiaojiejieItem;
