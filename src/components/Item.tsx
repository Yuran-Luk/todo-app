import styled from 'styled-components';
import { TodoItem, toggleIsDone } from '../store/todoSlice/todoSlice';
import { useDispatch } from 'react-redux';

export type DialogProps = {
    item: TodoItem
}

const StyledItem = styled.div<{ isDone: boolean }>`
    padding: 0 15px;
    display: flex;
    align-items: center;
    gap: 10px;
    width: 50vw;
    height: 4vh;
    border-radius: 10px;
    background: #80808061;
    text-decoration: ${({ isDone }) => isDone ? 'line-through' : 'none'};
    color: ${({ isDone }) => isDone ? '#ffffff57' : 'white'};;
    flex-shrink: 0;
`

const Item = ({ item }: DialogProps) => {
    const dispatch = useDispatch()
    const onDoneClick = () => {
        dispatch(toggleIsDone(item.id))
    }

    return (
        <StyledItem isDone={item.isDone}>
            <input type="checkbox" checked={item.isDone} onChange={onDoneClick} />
            <span>{item.name}</span>
        </StyledItem>
    )
}

export default Item
