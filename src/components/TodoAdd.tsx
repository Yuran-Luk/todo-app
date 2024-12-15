import { useDispatch } from 'react-redux';
import styled from 'styled-components';
import { addTodo } from '../store/todoSlice/todoSlice';

const Input = styled.input.attrs({
    type: "text",
    placeholder: "What needs to be done?"
})`
	width: 40vw;
    height: 5vw;
    padding: 0 20px;
    font-size: 3vw;
`


const TodoAdd = () => {
    const dispatch = useDispatch();
    const onEnter = (event: React.KeyboardEvent<HTMLInputElement>) => {
        const target = event.target as HTMLInputElement
        if (event.key === 'Enter' && target.value) {
          dispatch(addTodo(target.value))
          target.value = ''
        }
      }
    return (
        <Input
            onKeyDown={onEnter}
        />
    )
}

export default TodoAdd
