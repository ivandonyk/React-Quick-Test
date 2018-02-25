import React from 'react';
import PropTypes from 'prop-types';

const Text = (props) => {
  const style = {
    color: props.color,
    textTransform: props.transform,
    textAlign: props.align,
    fontSize: props.fontSize,
    fontWeight: props.fontWeight,
    fontFamily: 'Arial',
    lineHeight: props.lineHeight,
    marginTop: props.margin.top || 0,
    marginRight: props.margin.right || 0,
    marginBottom: props.margin.bottom || 0,
    marginLeft: props.margin.left || 0,
    cursor: props.onClick ? 'pointer' : 'select',
    ...props.style,
  };

  return (
    <div style={style} onClick={props.onClick}>
      {props.children}
    </div>
  );
};

Text.propTypes = {
  children: PropTypes.node.isRequired,
  color: PropTypes.string,
  fontSize: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.string,
  ]),
  transform: PropTypes.oneOf([
    'uppercase',
    'capitalize',
    'lowercase',
    'none',
  ]),
  align: PropTypes.string,
  fontWeight: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.string,
  ]),
  lineHeight: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.string,
  ]),
  margin: PropTypes.shape({
    top: PropTypes.number,
    right: PropTypes.number,
    bottom: PropTypes.number,
    left: PropTypes.number,
  }),
  style: PropTypes.shape({}),
  onClick: PropTypes.oneOfType([
    PropTypes.func,
    PropTypes.instanceOf(null),
  ]),
};

Text.defaultProps = {
  color: '#676a6c',
  transform: 'none',
  fontSize: 16,
  fontWeight: 'normal',
  lineHeight: 'normal',
  align: 'normal',
  margin: {},
  style: {},
  onClick: null,
};

export default Text;
