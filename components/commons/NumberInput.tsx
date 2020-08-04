import React from 'react'

type NumberInputProps = {
    inputName: string
    defaultValue?: number
}
const NumberInput: React.FC<NumberInputProps> = ({ inputName, defaultValue }: NumberInputProps) => {
    // eslint-disable-next-line prefer-const
    let [amount, setAmount] = React.useState(defaultValue || 0)
    return (
        <div className="input-group  input-spinner">
            <div className="input-group-prepend">
                <button
                    onClick={() => {
                        const num = amount - 1 * 1
                        if (num >= 0) {
                            setAmount(num)
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
                defaultValue={amount}
                value={amount}
            />
            <div className="input-group-append">
                <button
                    onClick={() => {
                        const num = amount + 1 * 1
                        console.log('num :>> ', num);
                        setAmount(num)
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
