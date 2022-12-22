import styled from 'styled-components';

const Spinner = styled.div.attrs()`
  display: inline-block;
  width: ${(props) => props.size}rem;
  height: ${(props) => props.size}rem;
  vertical-align: text-bottom;
  border: 0.25em solid #000000;
  border-right-color: transparent;
  border-radius: 50%;
  animation: spin 0.75s linear infinite;

  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;
export default Spinner;

Spinner.defaultProps = {
  size: 3,
  role: 'status',
};
