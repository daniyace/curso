import React from 'react';
import { Link } from 'gatsby';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import { colors, typography } from '../common/Theme';
import Spinner from './Spinner';

const minWidths = {
  xs: 5,
  sm: 10,
  md: 12,
  lg: 29,
  xl: 38,
};

const getMinWidth = ({ variant, size }) => {
  if (variant === 'link') return 0;
  return minWidths[size] || 0;
};

const Wrapper = styled.button`
  display: inline-block;
  text-align: center;
  border-radius: 0.3em;
  padding: 0.6em;
  min-width: 10em;
  //font-size: 1.6rem;
  font-weight: bold;
  transition: all 0.2s;
  text-transform: uppercase;
  cursor: pointer;
  border: none;

  &:disabled {
    pointer-events: none;
    cursor: default;
  }

  min-width: ${getMinWidth}rem;

  ${(props) =>
    props.variant !== 'link' &&
    props.size === 'fw' &&
    css`
      width: 100%;
    `}

  ${(props) =>
    props.variant === 'primary' &&
    css`
      color: ${colors.text.main};

      background-color: ${colors.primary.main};

      &:hover {
        color: ${colors.text.main} !important;
        background-color: ${colors.primary.dark};
      }

      &:active {
        background-color: ${colors.primary.main};
      }

      &:disabled {
        color: ${colors.gray.main};
        background-color: ${colors.primary.extraLight};
      }
    `}

    ${(props) =>
    props.variant === 'secondary' &&
    css`
      color: #ffffff !important;
      background-color: #000000;
      border: solid 1px #000000;

      .spinner {
        border-color: #ffffff;
        border-right-color: #000000;
      }

      &:hover,
      &:active {
        color: #000000 !important;
        background-color: #ffffff;
        border: solid 1px #000000;
        .spinner {
          border-color: #000000;
          border-right-color: #ffffff;
        }
      }

      &:disabled {
        background-color: ${colors.gray.main};
        border: solid 1px ${colors.gray.main};
      }
    `}

    ${(props) =>
    props.variant === 'outline' &&
    css`
      color: #000000;

      background-color: #ffffff;
      border: solid 1px #000000;

      &:hover {
        background-color: ${colors.primary.main};
        color: #000000;
      }

      &:active {
        background-color: ${colors.primary.main};
        border: solid 1px ${colors.primary.main};
      }

      &:disabled {
        border: solid 1px ${colors.gray.main};
        color: ${colors.gray.main};
        background-color: #ffffff;
      }
      ${(props) =>
        props.active &&
        css`
          background-color: ${colors.primary.mediumLight};
          border: solid 1px ${colors.primary.mediumLight};
        `}
    `}

    ${(props) =>
    props.variant === 'link' &&
    css`
      position: relative;
      text-align: left;
      text-transform: none;
      color: #000000;
      background-color: inherit;
      padding: 0;
      border-radius: 0;
      overflow: hidden;

      &:before,
      &:after {
        content: '';
        display: block;
        position: absolute;
        bottom: 0;
        left: 0;
        width: 100%;
        border-bottom: 2px solid
          ${(props) =>
            props.disabled ? colors.gray.main : colors.primary.main};
        transition: transform 0.7s cubic-bezier(0.19, 1, 0.22, 1);
      }

      &:before {
        transform: none;
        transition-delay: 0.2s;
      }

      &:after {
        transform: translate3d(100%, 0, 0);
        transition-delay: 0;
      }

      &:hover {
        /* color: ${colors.text.gray}; */

        &:before {
          transform: translate3d(-100%, 0, 0);
          transition-delay: 0;
        }

        &:after {
          transform: none;
          transition-delay: 0.3s;
        }
      }

      &:active {
        color: initial;
      }

      &:disabled {
        /* border-bottom: solid 1px ${colors.gray.main}; */
        color: ${colors.gray.main};
      }
    `}

        ${(props) =>
    props.variant === 'pill' &&
    css`
      border: none;
      padding: 0.3em 1.5em;
      height: 2em;
      text-transform: unset;
      background-color: #e4e6e8;
      border-radius: 1.5em;
      color: ${colors.text.gray};
      ${typography.subtitle3}
    `}
`;
const Button = ({ loading, children, href, external, ...props }) => {
  const wrapper = (
    <Wrapper {...props}>
      {loading ? <Spinner className='spinner' $size='2.5' /> : children}
    </Wrapper>
  );

  if (href) {
    if (external)
      return (
        <a href={href} target='_blank' rel='noopener noreferrer'>
          {wrapper}
        </a>
      );
    else
      return (
        <Link to={href} passHref>
          {wrapper}
        </Link>
      );
  }

  return wrapper;
};

export default Button;

Button.propTypes = {
  variant: PropTypes.oneOf([
    'primary',
    'secondary',
    'outline',
    'link',
    'noStyle',
    'pill',
  ]),
  size: PropTypes.oneOf(['xs', 'sm', 'md', 'lg', 'xl', 'fw']),
  disabled: PropTypes.bool,
  children: PropTypes.node.isRequired,
};

Button.defaultProps = {
  variant: 'primary',
  size: 'sm',
};
