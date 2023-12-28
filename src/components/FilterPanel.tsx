import { useSelector, useDispatch } from 'react-redux';
import Badge from '../UI/Badge';
import Card from '../UI/Card';
import Stack from '../UI/Stack';
import { selectFilters } from '../store/filters/filter-selectors';
import { clearFilter, removeFilter } from '../store/filters/filter-actions';

const FilterPanel = () => {
  const dispatch = useDispatch();
  const filters = useSelector(selectFilters); 
  
  const handleClearFilter = (filter: string) => {    
    dispatch(removeFilter(filter));
  };

  if (!filters.length) {
    return null;
  }

  return (
    <Card className="filter-panel">
      <div className="filter-panel-wrapper">
        <Stack pos='center'>
          {filters.map((item: any, index) => <Badge key={index} variant="clearable" onClear={() => handleClearFilter(item)}>{item}</Badge>)}
        </Stack>

        <button className='link' onClick={() => dispatch(clearFilter)}>Clear</button>
      </div>
    </Card>
  )
}

export default FilterPanel;