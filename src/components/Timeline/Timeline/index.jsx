import React from 'react';

import styles from './component.pcss';

class Timeline extends React.Component {
  render() {
    return (
	    <ul className={styles.timeline}>
		    { this.props.children }
      </ul>
    );
  }
}

export default Timeline;
