import React from 'react'
import { useParams,Link,useNavigate } from 'react-router-dom'
import { useState,useEffect,useContext } from 'react'
import DataContext from './Context/DataContext'
import {format} from 'date-fns';
import api from './api/posts';

const EditPost = () => {
    const [EditTitle, setEditTitle] = useState('');
    const [EditBody, setEditBody] = useState('');
    const { posts, setPosts } = useContext(DataContext);
    const {id}= useParams();
    const navigate = useNavigate();
    const post = posts.find(post => (post.id).toString()=== id);
    const handleEdit = async(id) =>{
        const datetime = format(new Date(), 'MMMM dd, yyyy pp');
        const updatedPost = {id, title: EditTitle, datetime, body : EditBody};
        try {
          const response = await api.put(`/posts/${id}`, updatedPost);
          setPosts(posts.map(post=>post.id === id? {...response.data} : post));
          setEditTitle('');
          setEditBody(''); 
          navigate('/');
        } catch (err) {
          console.log(`Error: ${err.message}`); 
        }
      }
    useEffect(()=>{
        if(post){
            setEditTitle(post.title);
            setEditBody(post.body);
        }
    },[post, setEditBody, setEditTitle])
    
  return (
    <main className='NewPost'>
        {EditTitle &&
            <>
                <h2>Edit Post</h2>
                <form className='newPostForm' onSubmit={(e) => e.preventDefault()}>
                    <label htmlFor='postTitle'> Title:</label>
                    <input 
                    id="EditTitle"
                    type = "text"
                    required
                    value = {EditTitle}
                    onChange={(e) => setEditTitle(e.target.value)}
                    />
                    <label htmlFor = "postBody"> Post: </label>
                    <textarea 
                    id= "EditBody"
                    required
                    placeholder='Edit Post'
                    value ={EditBody}
                    onChange={(e) => setEditBody(e.target.value)}
                    />
                    <button type = "submit" onClick = {() => handleEdit(post.id)}> Submit </button>
                </form>
            </>
        }
        {!EditTitle && <>
            <h2>Post not Found</h2>
            <p>Well, thats dissapointing</p>
            <p>
                <Link to= '/'>Visit our HomePage</Link>
            </p>
        </>}
    </main>
)
}

export default EditPost