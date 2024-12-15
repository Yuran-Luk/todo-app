import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import { clearCompleted } from '../store/todoSlice/todoSlice';
import { RootState } from '../store';
import FilterBlock from './FilterItems';

const Controls = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    width: 90vw;
    height: 5vw;
    color: #fff;
`;

const LeftItems = styled.span`
    text-align: start;
`;

const DeleteBtn = styled.button`
    height: 4vh;
    min-width: 16vw;
    cursor: pointer;
    justify-self: end;
    border-radius: 5px;
    background: #fff;
`

const ListControls = () => {
    const todos = useSelector((state: RootState) => state.todoList.items)
    const todoCounter = todos
        .filter((item) => !item.isDone)
        .length
    const dispatch = useDispatch()
    const onRemove = () => {
        dispatch(clearCompleted())
    }
    return <Controls>
        <LeftItems>{`${todoCounter} items left`}</LeftItems>
        <FilterBlock />
        <DeleteBtn onClick={onRemove}>Clear completed</DeleteBtn>
    </Controls>
}

export default ListControls
