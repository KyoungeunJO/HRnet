import '../../style/InputForm.css'

function InputForm({ type, label, selectOptions }) {
    const id = label.toLowerCase().split(' ').join('-')

    if (type == 'submit') {
        return (
            <button id={id}>{label}</button>
        )
    }

    if (type == 'select') {

        const optionItems = selectOptions.map((el, index) =>
            <option 
                id={id}
                value={ el.value ? el.value : el.text }
                key={index}
            >
                { el.text && el.text }
            </option>
        )

        return (
            <div className='input-form'>
                <label htmlFor={id}>{label}</label>
                <select name={label.toLowerCase()} id={id}>
                    { optionItems }
                </select>
            </div>
        )
    }

    return (
        <div className='input-form'>
            <label htmlFor={id}>{label}</label>
            <input id={id} type={type} name={id} />
        </div>
    )

}

export default InputForm