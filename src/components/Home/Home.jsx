import { Title, Img } from './Home.styled';
import Todo from '../../assets/todo1.jpg';
export const Home = () => {
  return (
    <>
      <Title>If you want to create some todos, go my todos</Title>
      <Img src={Todo} width="auto" alt="todo" />
    </>
  );
};
