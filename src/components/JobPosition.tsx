import PropTypes from 'prop-types';
import Badge from '../UI/Badge';
import Card from '../UI/Card';
import Stack from '../UI/Stack';

interface Props {
  id: number,
  company: string,
  logo: string,
  new: boolean,
  featured: boolean,
  position: string,
  role: string,
  level: string,
  postedAt: string,
  contract: string,
  location: string,
  languages: string[],
  tools: string[],
  onClick: (value: string) => void,
}

const JobPosition = ({
  //@ts-ignore
  id,
  company,
  logo,
  new: isNew,
  featured,
  position,
  role,
  level,
  postedAt,
  contract,
  location,
  languages,
  tools,
  onClick,
}: Props) => {
  const badges = [role, level].concat(...languages, ...tools);

  return (
    <Card isFeatured={featured}>
      <div className='job-position'>
        <div className='job-position-info'>
          <img
            className='job-position-avatar'
            src={logo}
            alt={company}
          />
          <div className='job-position-body'>
            <div className='job-postion-company'>
              <h3>{company}</h3>
              {(isNew || featured) && (
                <Stack>
                  {isNew && (
                    <Badge variant="rounded" colorScheme="primary">
                      NEW!
                    </Badge>
                  )}
                  {featured && (
                    <Badge variant="rounded" colorScheme="dark">
                      FEATURED
                    </Badge>
                  )}
                </Stack>
              )}
            </div>
            <h2 className='job-position-title'>
              {position}
            </h2>
            <Stack pos='center'>
              <div className='job-position-meta'>
                {postedAt}
              </div>
              <div className='job-position-meta'>
                {contract}
              </div>
              <div className='job-position-meta'>
                {location}
              </div>
            </Stack>
          </div>
        </div>
        <Stack pos='center'>
          {badges.map(item => (
            <Badge
              key={item}
              onClick={() => onClick(item)}
            >
              {item}
            </Badge>
          ))}
        </Stack>
      </div>
    </Card>
  )
}

export default JobPosition;

JobPosition.propTypes = {
    id: PropTypes.number,
    company: PropTypes.string,
    logo: PropTypes.string,
    new: PropTypes.bool,
    featured: PropTypes.bool,
    position: PropTypes.string,
    role: PropTypes.string,
    level: PropTypes.string,
    postedAt: PropTypes.string,
    contract: PropTypes.string,
    location: PropTypes.string,
    languages: PropTypes.arrayOf(PropTypes.string),
    tools: PropTypes.arrayOf(PropTypes.string),
    onClick: PropTypes.func,
};