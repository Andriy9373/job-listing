import PropTypes from 'prop-types';
import { ReactNode } from 'react';

interface Props {
    children: ReactNode,
    pos?: string,
}

const Stack = ({children, pos}: Props) => (
    <div className='stack' style={{
        justifyContent: pos === 'center' ? 'center' : `flex-${pos}`
    }}>
        {children}
    </div>
);

export default Stack;

Stack.propTypes = {
  children: PropTypes.node.isRequired,
}