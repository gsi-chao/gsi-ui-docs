import React, { Component } from 'react';
import {
  TypePickerColor,
  VColorPicker,
  VColorResult,
  VHSLColor,
  VRGBColor
} from 'gsi-vx-ui';

interface IState {
  typePickerColor: TypePickerColor;
  color: string | VHSLColor | VRGBColor;
  disable: boolean;
}

class VColorPickerDoc extends Component<any, IState> {
  constructor(props: any) {
    super(props);

    this.state = {
      typePickerColor: 'SketchPicker',
      color: 'blue',
      disable: false
    };
  }

  render() {
    return (
      <div>
        <br />
        <br />
        <button onClick={this.handleChangeTypeToSketchPicker}>
          SketchPicker
        </button>
        <button onClick={this.handleChangeTypeToChromePicker}>
          ChromePicker
        </button>
        <br />
        <br />
        <VColorPicker
          Color={this.state.color}
          onChange={this.handleChangeColor}
          typePickerColor={this.state.typePickerColor}
          position="right"
          width={30}
          height={30}
          disable={this.state.disable}
        />
        <br />
        <button
          onClick={() => {
            this.setState({
              color: 'red'
            });
          }}
        >
          change color to red
        </button>

        <button
          onClick={() => {
            this.setState({
              color: 'blue'
            });
          }}
        >
          change color to blue
        </button>

        <button
          onClick={() => {
            this.setState({
              disable: !this.state.disable
            });
          }}
        >
          {this.state.disable ? 'enable' : 'disable'}
        </button>
        <br />
      </div>
    );
  }

  handleChangeColor = (color: VColorResult) => {
    this.setState({
      color: color.rgb
    });

    // console.log(' color:', color.hex)
  };

  handleChangeTypeToChromePicker = () => {
    this.setState({
      typePickerColor: 'ChromePicker'
    });
  };

  handleChangeTypeToSketchPicker = () => {
    this.setState({
      typePickerColor: 'SketchPicker'
    });
  };
}

export default VColorPickerDoc;
