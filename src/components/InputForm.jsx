import _uniqueId from 'lodash/uniqueId';
import '../style/InputForm.css'

function InputForm({ type, label }) {
    const id = _uniqueId()

    return (
        <div className='input-form'>
            <label htmlFor={id}>{label}</label>
            <input id={id} type={type} />
        </div>
    )

}

export default InputForm