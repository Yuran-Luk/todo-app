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

const NoItems = styled.h3`
    color: #fff;
`;



const ItemsList = () => {
    const filteredList = useListFilter()
    return (
        <List>
            {filteredList.length > 0
                ? filteredList.map((item, i) => <Item key={i} item={item} />)
                : <NoItems>No items</NoItems>
            }
        </List>
    )
}

export default ItemsList
