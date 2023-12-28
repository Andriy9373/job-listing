import PropTypes from 'prop-types';
import { ReactNode } from 'react';

interface Props {
    children: ReactNode,
    className?: string,
    isFeatured?: boolean,
}

const Card = ({children, className, isFeatured}: Props) => {
  return (
    <div
        className={
            `card${isFeatured ? ' card--featured' : ''}${className ? ' ' + className : ''}`
        }
    >
        {children}
    </div>
  )
}

export default Card;

Card.propTypes = {
  children: PropTypes.node.isRequired,
  isFeatured: PropTypes.bool,
  className: PropTypes.string,
}