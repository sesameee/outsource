import React from 'react'

type NumberInputProps = {
    amount: number
    setAmount: React.Dispatch<React.SetStateAction<number>>
    inputName: string
    defaultValue?: number
    minValue?: number
    maxValue?: number
    amountCB?: any
}
const NumberInput: React.FC<NumberInputProps> = ({
    inputName,
    amount,
    setAmount,
    minValue,
    maxValue,
    amountCB,
}: NumberInputProps) => {
    // eslint-disable-next-line prefer-const
    // let [amount, setAmount] = React.useState(defaultValue || 0)
    return (
        <div className="input-group  input-spinner">
            <div className="input-group-prepend">
                <button
                    onClick={() => {
                        const num = amount - 1 * 1
                        if (minValue && num < minValue) {
                            return
                        }
                        if (num >= 0) {
                            setAmount(num)
                            amountCB && amountCB(num)
                        }
                    }}
                    style={{ minWidth: '26px' }}
                    className="btn btn-decrement btn-spinner"
                    type="button"
                >
                    <i className="icon-minus"></i>
                </button>
            </div>
            <input
                type="text"
                name={inputName}
                style={{ textAlign: 'center' }}
                className="form-control "
                placeholder=""
                value={amount}
                min={minValue}
                max={maxValue}
                onChange={(e) => {
                    console.log(e)
                }}
            />
            <div className="input-group-append">
                <button
                    onClick={() => {
                        const num = amount + 1 * 1
                        if (maxValue && num > maxValue) {
                            return
                        }
                        setAmount(num)
                        amountCB && amountCB(num)
                    }}
                    style={{ minWidth: '26px' }}
                    className="btn btn-increment btn-spinner"
                    type="button"
                >
                    <i className="icon-plus"></i>
                </button>
            </div>
        </div>
    )
}
export default NumberInput
