import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import { Icon } from 'react-fa';

import Text from '../../Text';

import styles from './component.pcss';

const TimelineItem = (props) => {
  const { item, index } = props;
  const verticalPosition = index * 95;
  const lineWidth = 65/(index+1);

  return (
	  <li>
		  <div className={styles.direction}>
			  <div className={styles.flagWrapper}>
				  <span className={styles.flag}>{ item.name }
				  	<Icon
							name="circle"
						/>
				  </span>
					<span
						className={styles.line}
						style={{
							width: lineWidth,
							top: 14-verticalPosition,
						}}
					/>
					<span
						className={styles.verticalLine}
						style={{
              height: verticalPosition,
              top: 14-verticalPosition,
							right: 15+lineWidth,
            }}
					/>
					<span
						className={styles.line}
						style={{
              width: 65-lineWidth,
							right: lineWidth+15,
            }}
					/>
					<span
						className={styles.circle}
						style={{
							transform: `translateY(-${verticalPosition}px)`
						}}
					/>
			  </div>
			  <div className={styles.desc}>
				  <Text fontSize={12}>
					  Release date - { moment(item.releaseDate).format('DD/MM/YY') }
				  </Text>
				  <Text fontSize={12}>
					  Lead actor - { item.leadActor }
				  </Text>
				  <Text fontSize={12}>
					  Sub-Genre - { item.subGenre }
				  </Text>
				  <Text fontSize={12}>
					  Producer - { item.producer }
				  </Text>
			  </div>
		  </div>
	  </li>
  );
};

TimelineItem.propTypes = {
  item: PropTypes.shape({}),
};

TimelineItem.defaultProps = {
  item: {},
};

export default TimelineItem;
