import React from 'react';
import PropTypes from 'prop-types';

const Text = ({ slice }) => (
  <section dangerouslySetInnerHTML={{ __html: slice.primary.text.html }} />
);

Text.propTypes = {
  slice: PropTypes.object.isRequired
};

export default Text;
