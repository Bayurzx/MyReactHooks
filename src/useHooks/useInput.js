import {useState} from 'react'
//we got rid of react import since we don't have any jsx in the code


function useInput(initialValue) {
    const [value, setValue] = useState(initialValue);

    const reset = () => {
        setValue(initialValue)
    }

    const bind = {
        value,
        onChange: e => setValue(e.target.value)
    }

    return [value, bind, reset];
}

export default useInput;
