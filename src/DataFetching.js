import React, {useEffect, useState} from 'react'
import axios from 'axios'

const api = "https://jsonplaceholder.typicode.com";

function DataFetching() {
    // const [posts, setPosts] = useState([])
    const [post, setPost] = useState(null)
    const [id, setId] = useState(1)
    const [clicker, setClicker] = useState(1)

    const sendClick = () => {
        setClicker(id)
    }

    useEffect(() => {
        axios.get(`${api}/posts/${id}`)
            .then(res => {console.log(res); setPost(res.data)})
            .catch(err => console.error(err))

        // return () => {
        //     cleanup
        // }
    }, [clicker])
    return (
        <div>
            <input type="text" value={id} onChange={e => setId(e.target.value)} />
            <button onClick={sendClick}>Get Post</button>
            <h2>{post && post.title}</h2>
            <ul>
                {
                    // posts.map(val => <li key={val.id} >{val.title}</li> )
                }
            </ul>
            
        </div>
    )
}

export default DataFetching;
