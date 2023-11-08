import { DetailedHTMLProps, InputHTMLAttributes } from "react";

export interface InputProps {
    className?: string
    icon?: React.ReactNode
    inputAttribute?: DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>
}

const Input: React.FC<InputProps> = (props) => {
    const { inputAttribute, className } = props;

    return <div className={`flex gap-3 border border-[#3F3F3F] rounded-md ${className}`}>
        <input {...inputAttribute} className={`focus:outline-none focus:ring focus:border-yellow-300 rounded-md outline-none border-none font-Jost w-full text-[0.875rem] text-[#3F3F3F] ${inputAttribute?.className}`} />
    </div>;
};

export default Input;
