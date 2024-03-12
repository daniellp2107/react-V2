// NotFound.js
import React from 'react';
import styled from 'styled-components';

const NotFoundContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
`;

const NotFoundTitle = styled.h1`
  font-size: 4rem;
  color: #333;
`;

const NotFoundMessage = styled.p`
  font-size: 1.5rem;
  color: #555;
`;

const NotFoundPage = () => {
  return (
    <NotFoundContainer>
      <NotFoundTitle>404 - Página no encontrada</NotFoundTitle>
      <NotFoundMessage>Lo sentimos, la página que buscas puede que no exista o se encuentra en construcción.</NotFoundMessage>
    </NotFoundContainer>
  );
};

export default NotFoundPage;
