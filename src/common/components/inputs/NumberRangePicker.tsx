import Input from "@/common/components/inputs/Input";
import { TbCurrencyPeso } from "react-icons/tb";

export interface NumberRangePickerProps {
    onChange?: (data: number[]) => void
    value?: number[]
}

const NumberRangePicker: React.FC<NumberRangePickerProps> = (props) => {
    const { value, } = props;

    return <div className="flex flex-col">
        <small className="opacity-80">Rent Bill</small>
        <div className="flex gap-3">
            <Input leftIcon={<TbCurrencyPeso color="#e67e22" size={20} />} inputAttribute={{ placeholder: 'Min', value: value?.[0], type: 'number', className: "text-sm text-[#d35400]", }} />
            <Input leftIcon={<TbCurrencyPeso color="#e67e22" size={20} />} inputAttribute={{ placeholder: 'Max', value: value?.[1], type: 'number', className: "text-sm text-[#d35400]", }} />
        </div>
    </div>;
};

export default NumberRangePicker;
