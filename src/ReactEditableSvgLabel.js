import React from 'react';
import { PortalWithState } from 'react-portal';
import PropTypes from 'prop-types';

class ReactEditableSvgLabel extends React.Component {
  constructor (props) {
    super(props);

    this.state = {
      isEditing: false,
      labelX: 0,
      labelY: 0,
      labelWidth: 0,
      labelHeight: 0
    };

    this.handleOpen = this.handleOpen.bind(this);
    this.toggleEditing = this.toggleEditing.bind(this);
    this.handleChangeText = this.handleChangeText.bind(this);
    this.updateLabelBounds = this.updateLabelBounds.bind(this);
  }

  handleOpen (domNode) {
    if (this.props.focusOnOpen) {
      this.inputElement.focus();
    }
  }

  toggleEditing () {
    const newIsEditing = !this.state.isEditing;
    this.setState({ isEditing: newIsEditing });
    if (newIsEditing) {
      this.portalElement.current.openPortal();
    }
  }

  handleChangeText (e) {
    var text = e.target.value;
    this.props.onChange(text);
  }

  updateLabelBounds () {
    var rect = this.labelElement.getBoundingClientRect();
    this.setState({
      labelX: rect.left,
      labelY: rect.top,
      labelWidth: rect.width,
      labelHeight: rect.height
    });
  }

  componentDidMount () {
    this.updateLabelBounds();
  }

  render () {
    // Omit onChange, minLabelWidth, and children.
    var passThroughProps = Object.assign({}, this.props);
    Object.keys(this.constructor.propTypes).forEach(function (key) {
      delete passThroughProps[key];
    });

    return (
      <PortalWithState
        ref={el => { this.portalElement = el; }}
        closeOnOutsideClick
        onOpen={this.handleOpen}
      >
        {({ openPortal, closePortal, isOpen, portal }) => (
          <React.Fragment>
            <text
              ref={el => { this.labelElement = el; }}
              onClick={openPortal}
              {...passThroughProps}
            >
              {this.props.children}
            </text>
            {portal(
              <input
                ref={el => { this.inputElement = el; }}
                type='text'
                value={this.props.children}
                onChange={this.handleChangeText}
                style={{
                  position: 'absolute',
                  top: this.state.labelY,
                  left: this.state.labelX,
                  width: Math.max(this.props.minLabelWidth, this.state.labelWidth),
                  height: this.state.labelHeight
                }}
              />
            )}
          </React.Fragment>
        )}
      </PortalWithState>
    );
  }
}

ReactEditableSvgLabel.propTypes = {
  onChange: PropTypes.func,
  minLabelWidth: PropTypes.number,
  focusOnOpen: PropTypes.bool,
  children: PropTypes.any
};

ReactEditableSvgLabel.defaultProps = {
  onChange: function () {},
  minLabelWidth: 100,
  focusOnOpen: true
};

export default ReactEditableSvgLabel;
