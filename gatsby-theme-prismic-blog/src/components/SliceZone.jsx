import React from 'react';
import PropTypes from 'prop-types';

import Text from './slices/Text';

const SliceZone = ({ sliceZone }) => {
  const sliceComponents = {
    text: Text
  };

  const sliceZoneContent = sliceZone.map((slice, index) => {
    const SliceComponent = sliceComponents[slice.slice_type];
    if (SliceComponent) {
      /* eslint-disable react/no-array-index-key */
      return <SliceComponent slice={slice} key={`slice-${index}`} />;
    }
    return null;
  });

  return <main id="slice-zone">{sliceZoneContent}</main>;
};

SliceZone.propTypes = {
  sliceZone: PropTypes.array
};

SliceZone.defaultProps = {
  sliceZone: []
};

export default SliceZone;
