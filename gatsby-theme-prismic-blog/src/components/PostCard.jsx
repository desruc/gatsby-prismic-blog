import React, { useState } from 'react';
import styled from 'styled-components';
import { animated, useSpring } from 'react-spring';

import { Link } from 'gatsby';
import GatsbyImage from 'gatsby-image';

const StyledLink = styled(Link)`
  text-decoration: none;
  color: ${(props) => props.theme.colors.darkText};
`;

const Card = styled(animated.div)(
  ({ theme }) => `
  cursor: pointer;
  border-radius: ${theme.borderRadius};
  background: ${theme.colors.heading};
  `
);

const CardBody = styled.div`
  padding: 1rem;
`;

const Title = styled.h3(
  ({ theme }) => `
  font-size: 1.5rem;
  margin-bottom: 1rem;
  color: ${theme.colors.darkHeading};
`
);

const Description = styled.p`
  margin-top: 0px;
  margin-bottom: 0px;
`;

const PostCard = ({ post }) => {
  const {
    uid,
    data: { header_image, post_title, post_description }
  } = post;

  const [hover, setHover] = useState(false);
  const onMouseEnter = () => setHover(true);
  const onMouseLeave = () => setHover(false);

  const animatedStyle = useSpring({
    transform: hover ? 'scale(1.02)' : 'scale(1)'
  });

  return (
    <StyledLink to={`/post/${uid}`}>
      <Card
        style={animatedStyle}
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
      >
        <GatsbyImage fluid={header_image?.fluid} />
        <CardBody>
          {post_title?.text && <Title>{post_title?.text}</Title>}
          <Description>{post_description?.text}</Description>
        </CardBody>
      </Card>
    </StyledLink>
  );
};

export default PostCard;
