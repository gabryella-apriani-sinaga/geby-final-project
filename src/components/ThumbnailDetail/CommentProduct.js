import React, {useState, useEffect} from 'react';
import axios from 'axios';
import {useParams} from 'react-router-dom'


const CommentProduct = () => {

  const {id} = useParams();
  console.log(id)
  const [comment, setComment] = useState([]);
  const [username, setUsername] = useState("");
  const [comments, setComments] = useState("");
  useEffect (() => {
    axios.get(`https://giant-cow-sundress.cyclic.cloud/api/comments/${id}`).then(res => setComment(res.data.data.comments))
  }, []);

  const handleClick = (e) => {
    e.preventDefault();
    axios.post(`https://giant-cow-sundress.cyclic.cloud/api/comments/${id}`,{
      username, comment:comments
    }).then(res => setComment([...comment, res.data.data.comment]))
    setUsername('');
    setComments('')
  }
  return (
    <div style={{marginTop:'1rem', borderTop:'15px solid #65451F '}} className='w-1/2 '>
      <ul style={{border:'1px solid #C8AE7D'}} className='p-2'>
        {comment.map(cmt =>  <li comment={cmt}>[{cmt.username}] - {cmt.comment}</li>)}  

      </ul>
      
  
      <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 mt-3"  style={{backgroundColor:'#F8F0E5'}}>
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">
          Username
        </label>
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="username"
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
      </div>
      <div className="mb-6">
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
          Comment
        </label>
        <textarea
        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        id="message"
        rows="4"
        placeholder="Type your message here..."
        value={comments}
        onChange={(e) => setComments(e.target.value)}
      />
      </div>
      <div className="flex items-center justify-between">
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          type="button" onClick={handleClick}
        >
          Comment
        </button>
      
      </div>
    </form>
     
    </div>
  )
}

export default CommentProduct
