import {useState, useEffect} from 'react'

const tabs =['posts', 'comments', 'albums', 'photos', 'todos', 'users']

function App() {


  const [post, setPost] =useState([]);
  const [type, setType] = useState('posts');
  console.log(type);


  useEffect(()=>{
    fetch(`https://jsonplaceholder.typicode.com/${type}`)
    .then(res => res.json())
    .then(type=>{
      setPost(type);
    })


  },[type])


  return (
    <div className="App">
      {tabs.map(tab=>(
            <button key={tab} onClick={()=>{setType(tab)}}>{tab}</button>

      ))}

      <ul>
        {post.map(post=>(
          <li key={post.id}>{post.title || post.email}</li>

        ))}
      </ul>


    </div>
  );
}

export default App;
