import { DetailedHTMLProps, InputHTMLAttributes } from "react";

export interface InputProps {
    className?: string
    leftIcon?: React.ReactNode,
    rightIcon?: React.ReactNode
    inputAttribute?: DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>
}

const Input: React.FC<InputProps> = (props) => {
    const { inputAttribute, className, leftIcon, rightIcon } = props;

    return <div className={` bg-white flex gap-3 items-center border border-[#3F3F3F] rounded-md ${className}`}>
        {leftIcon && <div className="ml-1">{leftIcon}</div>}
        <input {...inputAttribute} className={`${!['checkbox', 'radio'].includes(inputAttribute?.type!) && !leftIcon ? 'px-3' : 'p-0'}  py-2 bg-none focus:outline-none focus:ring focus:border-yellow-300 rounded-md outline-none border-none font-Jost w-full text-[0.875rem] text-[#3F3F3F] ${inputAttribute?.className}`} />
        {rightIcon && <div className="mr-1">{rightIcon}</div>}
    </div>;
};

export default Input;
