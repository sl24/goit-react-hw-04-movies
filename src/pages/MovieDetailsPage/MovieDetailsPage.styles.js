import styled from 'styled-components';

const DetailsPageContainer = styled.div`
  padding: 0 20px;
`;

const CastAndAuthorPageList = styled.ul`
  display: flex;
  margin-bottom: 20px;
`;

const CastAndAuthorPageItem = styled.li`
  &:not(:last-child) {
    margin-right: 16px;
  }
`;

const Button = styled.button`
  margin: 0 0 10px 25px;
  outline: none;
  padding: 12px 40px;
  border-radius: 30px;
  background-image: linear-gradient(
    45deg,
    #6ab1d7 0%,
    #33d9de 50%,
    #002878 100%
  );
  background-position: 100% 0;
  background-size: 200% 200%;
  color: white;
  box-shadow: 0 16px 32px 0 rgba(0, 40, 120, 0.35);
  transition: 0.5s;
  &:hover {
    box-shadow: 0 0 0 0 rgba(0, 40, 120, 0);
    background-position: 0 0;
  }
`;

export {
  DetailsPageContainer,
  CastAndAuthorPageList,
  CastAndAuthorPageItem,
  Button,
};
