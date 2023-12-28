import { useSelector, useDispatch } from 'react-redux';
import { selectVisiblePositions } from '../store/positions/position-selectors';
import { addFilter } from '../store/filters/filter-actions';
import { selectFilters } from '../store/filters/filter-selectors';
import JobPosition from './JobPosition';
import { RootState } from '../store';

const JobList = () => {
  const filters = useSelector(selectFilters); 
  const positions = useSelector((state: RootState) => selectVisiblePositions(state, filters));
  const dispatch = useDispatch();

  const handleAddFilter = (filter: string) => {
    dispatch(addFilter(filter));
  };

  return (
    <div className='job-list'>
        {positions.map(pos => (
            <JobPosition
              {...pos}
              key={pos.id}
              onClick={(filter: string) => handleAddFilter(filter)}
            />
        ))}
    </div>
  )
}

export default JobList;