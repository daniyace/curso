import styled from 'styled-components';
import PropTypes from 'prop-types';
import { typography } from './Theme';

const Wrapper = styled.div`
  ${(props) => typography[props.variant]}
`;

const Typography = Wrapper;

export default Typography;

Typography.propTypes = {
  children: PropTypes.node,
  variant: PropTypes.oneOf([
    'h1',
    'h2',
    'h3',
    'h4',
    'h5',
    'h6',
    'subtitle1',
    'subtitle2',
    'subtitle3',
    'subtitle4',
    'body1',
    'body2',
    'body3',
    'body4',
    'label1',
    'label2',
  ]),
};
