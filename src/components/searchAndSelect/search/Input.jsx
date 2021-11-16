import styled from 'styled-components'

export  const Input = styled.input.attrs({
    type: 'search',
    placeholder:'Country Search...'
})`
  background-color: var(--colors-ui-base);
  margin-left: 2rem;
  border: none;
  outline: none;
  color: var(--color-text)
`;
