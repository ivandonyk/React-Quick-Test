import React from 'react';
import PropTypes from 'prop-types';
import { Loader } from 'react-loaders';

import classNames from 'classnames';

import './component.scss';


const Loading = (props) => {
  const {
    type,
    active,
    size,
    fixed,
  } = props;

  const className = classNames(props.className, {
    'loader-fixed': fixed,
    'loader-overlay': active,
  });

  return (
    <div className={className}>
      <Loader
        type={type}
        active={active}
        size={size}
      />
    </div>
  );
};

Loading.propTypes = {
  active: PropTypes.bool,
  size: PropTypes.string,
  type: PropTypes.string,
  fixed: PropTypes.bool,
  className: PropTypes.string,
};

Loading.defaultProps = {
  active: true,
  size: 'lg',
  type: 'ball-scale-ripple-multiple',
  fixed: true,
  className: '',
};

export default Loading;
