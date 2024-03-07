import React from 'react';
import { Title, Paragraph } from './styled';
import { Container } from '../../styles/GlobalStyles';

export default function Login() {
  return (
    <Container>
      <Title>
        Login <small>there</small>
      </Title>
      <Paragraph>kljlkj</Paragraph>
      <button type="button">Send</button>
    </Container>
  );
}
