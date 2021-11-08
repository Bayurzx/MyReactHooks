import {useEffect} from 'react'
//we got rid of react import since we don't have any jsx in the code


function useDocTitle(count) {
    useEffect(() => {
        document.title = `Count is ${count}`
    }, [count])

}

export default useDocTitle;
