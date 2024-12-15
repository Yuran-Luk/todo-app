import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import { filters, FilterT, setFilter } from '../store/todoSlice/todoSlice';
import { RootState } from '../store';

const Filter = styled.div`
    justify-self: center;
    display: flex;
    gap: 4px;
`;

const FilterBtn = styled.button<{ isActive: boolean }>`
    height: 4vh;
    min-width: 50px;
    background: transparent;
    border: ${({ isActive }) => isActive ? '1px solid #fff' : 'none'};
    border: 1px solid ${({ isActive }) => isActive ? '#fff' : 'transparent'};
    border-radius: 5px;
    color: #fff;
    cursor: pointer;
`

const FilterBlock = () => {
    const filterState = useSelector((state: RootState) => state.todoList.filter)
    const filterTypes = Object.keys(filters) as FilterT[]

    const dispatch = useDispatch()
    const onFilterClick = (type: FilterT) => {
        dispatch(setFilter(type))
    }
    return <Filter>
        {filterTypes.map((fType) => (
            <FilterBtn
                isActive={filterState === fType}
                onClick={() => onFilterClick(fType)}
            >
                {filters[fType]}
            </FilterBtn>
        ))}
    </Filter>
}

export default FilterBlock
