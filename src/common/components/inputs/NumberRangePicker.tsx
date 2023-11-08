import Input from "@/common/components/inputs/Input";
import { useEffect, useState } from "react";
import { TbCurrencyPeso } from "react-icons/tb";

export interface NumberRangePickerProps {
    onChange?: (data: number[]) => void
    value?: number[]
}

const NumberRangePicker: React.FC<NumberRangePickerProps> = (props) => {
    const { value, onChange } = props;
    const [valueHandler, setValueHandler] = useState([0, 0])

    useEffect(() => {

    }, [])
    return <div className="flex flex-col">
        <small className="opacity-80">Rent Bill</small>
        <div className="flex gap-3">
            <Input
                leftIcon={
                    <TbCurrencyPeso color="#e67e22" size={20} />
                }
                inputAttribute={{
                    onChange: (e) => {
                        setValueHandler([+e.currentTarget.value, valueHandler[1]])
                        onChange?.([+e.currentTarget.value, valueHandler[1]])
                    },
                    placeholder: 'Min',
                    value: value?.[0],
                    type: 'number',
                    className: "text-sm text-[#d35400]",
                }}
            />
            <Input
                leftIcon={<TbCurrencyPeso color="#e67e22" size={20} />}
                inputAttribute={{
                    onChange: (e) => {
                        setValueHandler([valueHandler[0], +e.currentTarget.value])
                        onChange?.([+e.currentTarget.value, valueHandler[1]])
                    },
                    placeholder: 'Max',
                    value: value?.[1],
                    type: 'number',
                    className: "text-sm text-[#d35400]",
                }}
            />
        </div>
    </div>;
};

export default NumberRangePicker;
