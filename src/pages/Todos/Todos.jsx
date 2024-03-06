import { Wrapper, FilterWrap } from './todos.styled'

import { TodoPart } from '../../components/TodoPart/todo-part'

export function Todos() {
  return (
    <>
      <Wrapper>
        <FilterWrap>
          <TodoPart />
        </FilterWrap>
      </Wrapper>
    </>
  )
}
