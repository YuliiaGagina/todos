import { Wrapper, FilterWrap } from './Todos.styled';

import { TodoPart } from '../../components/TodoPart/TodoPart';

export function Todos() {
  return (
    <>
      <Wrapper>
        <FilterWrap>
          <TodoPart />
        </FilterWrap>
      </Wrapper>
    </>
  );
}
