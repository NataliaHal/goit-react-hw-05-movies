import { styled } from 'styled-components';
import { Link } from 'react-router-dom';

export const Wrapper = styled.div`
  width: 130px;
  font-size: 14px;
  padding: 8px 15px;
  color: black;
  margin-bottom: 20px;
  background-color: rgb(227, 192, 192);
  border-radius: 20px;
  cursor: pointer;
`;

export const LinkTo = styled(Link)`
  color: black;
  font-size: 25px;
  font-weight: 600;
  text-decoration: none;
`;

export const Title = styled.h2`
  margin-bottom: 15px;
`;

export const Article = styled.article`
  display: flex;
  gap: 20px;
  margin-bottom: 30px;
`;

export const Text = styled.p`
  font-size: 19px;
  font-weight: 400;
  margin-bottom: 20px;
`;
