import React from 'react';
import Container from '../../Utils/Container';

const Main = ({children}) => {
  return (
    <>
        <Container>
            {children}
        </Container>
    </>
  )
}

export default Main