import { useSelector } from 'react-redux';
import { RootState } from '../store/index';
import styled from 'styled-components';
import Item from './Item';
import useListFilter from '../hooks/useListFilter';

const List = styled.div`
    max-height: 65vh;
    margin: 30px 0;
    overflow: auto;
    display: flex;
    flex-direction: column;
    gap: 10px;
    flex-grow: 1;
`;



const ItemsList = () => {
    const filteredList = useListFilter()
    return (
        <List>
            {filteredList.map((item, i) => <Item key={i} item={item} />)}
        </List>
    )
}

export default ItemsList
