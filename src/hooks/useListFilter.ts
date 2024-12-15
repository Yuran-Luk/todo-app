import { useSelector } from 'react-redux';
import { RootState } from '../store/index';

const useListFilter = () => {
    const todoState = useSelector((state: RootState) => state.todoList)
    const { items, filter } = todoState
    const filtered = items.filter((item) => {
        switch (filter) {
            case "todo":
                return !item.isDone
            case "done":
                return item.isDone
            case "all":
            default:
                return true
          }
    })
    return filtered
}

export default useListFilter
