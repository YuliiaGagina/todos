import styled from '@emotion/styled';

export const Button = styled.button`
  margin-top: 12px;
  width: 90px;
  padding: 10px;
  background-color: #c9e913;
  color: white;
  border-radius: 50%;
  :hover {
    background-color: #f1f692;
    color: #413941;
  }
`;
export const Select = styled.select`
  width: 100px;
  height: 50px;
  padding: 5px 10px;
  border: 1px solid black;
  font-size: 16px;

  text-align: center;
  margin-bottom: 40px;
`;

export const ListContainer = styled.ul`
  display: flex;
  gap: 20px;
  flex-wrap: wrap;
`;

export const ListItem = styled.li`
  margin-bottom: 10px;
  border: 1px solid #ddd;
  border-radius: 5px;
  padding: 10px;
  background-color: #f8f8f8;
  transition: all 0.3s ease;
  &:hover {
    background-color: #eaeaea;
  }
`;

export const UpContainer = styled.div`
  justify-content: center;
  display: flex;
  gap: 20px;
  flex-wrap: wrap;
`;

export const TodoTitle = styled.p`
  font-size: 18px;
  font-weight: bold;
  textdecoration: ${({ completed }) => (completed ? 'line-through' : 'none')};
  text-decoration: ${({ completed }) => (completed ? 'line-through' : 'none')};
`;

export const Count = styled.p`
  font-size: 22px;
  font-weight: 600;
  line-height: 1.8;
  margin-bottom: 10px;
`;
