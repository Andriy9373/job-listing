import PropTypes from 'prop-types';
// import { ReactComponent as ReactIcon } from '../assets/images/icon-remove.svg';
import { ReactNode } from 'react';

interface Props {
    children: ReactNode,
    variant?: string,
    colorScheme?: string,
    onClear?: any,
    onClick?: () => void,
}

const Badge = ({
    variant = 'basic',
    colorScheme = 'light',
    children,
    onClear,
    onClick,
}: Props) => (
    <div className={`badge badge--${variant} badge--${colorScheme}`} onClick={onClick}>
        <span>
            {children}
        </span>
        {variant === 'clearable' && (
            <div className='badge-remover' onClick={onClear}>
                {/* <ReactIcon /> */}
                <img src='/images/icon-remove.svg' alt="Icon Remove"/>
            </div>
        )}
    </div>
);

export default Badge;

Badge.propTypes = {
    variant: PropTypes.oneOf(['basic', 'clearable', 'rounded']),
    colorScheme: PropTypes.oneOf(['light', 'primary', 'dark']),
    children: PropTypes.node.isRequired,
    onClick: PropTypes.func,
}