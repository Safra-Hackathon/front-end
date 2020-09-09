import styled from 'styled-components';

export default styled.div`
  margin-top: ${(props) => (props.notmargin ? '0' : '15px')};
`;
