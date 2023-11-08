export interface PortalIconProps {
    className?: string
}

const PortalIcon: React.FC<PortalIconProps> = (props) => {
    const { className } = props;

    return <svg className={`w-[76px] ${className}`} viewBox="0 0 76 76" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M37.9887 69.838C35.3179 53.5603 22.475 40.7142 6.21539 38.0704C22.5216 35.4189 35.3917 22.5063 38.0113 6.16225C40.682 22.4398 53.525 35.2857 69.7846 37.9296C53.478 40.5811 40.6082 53.4938 37.9887 69.838Z" fill="#FDDB55" stroke="black" />
    </svg>

};

export default PortalIcon;
