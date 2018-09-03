import React, { Component } from "react";
import { Text, View, Button, Icon } from "native-base";

class ButtonIcon extends Component {
  render() {
    const {
      name,
      type,
      iconStyle,
      btnStyle,
      warning,
      primary,
      success,
      rounded,
      circle
    } = this.props;
    return (
      <Button style={btnStyle} warning={warning} primary={primary}>
        {name && <Icon name={name} type={type} style={iconStyle} />}
      </Button>
    );
  }
}

export default ButtonIcon;

//sm btn ft size = 20
//md btn ft size = 24
//md btn ft size = 24
