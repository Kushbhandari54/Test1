import {
  useQuery,
  useMutation,
  useQueryClient,
  QueryClient,
  QueryClientProvider,
} from "react-query";
import { useState, useEffect } from "react";
import getPokemonData from "../../services/pokemon";

const ReactQuery = () => {
  const [data, setData] = useState([]);
  //calling a Get API
  useQuery(["pokemonData"], getPokemonData, {
    onSuccess(data) {
      console.log("Data", data?.data);
    },
  });
  return (
    <>
      <h1>React Query</h1>
      {data}
    </>
  );
};

export default ReactQuery;

// const ReactQuery = () => {
//   const queryClient= new QueryClient();
//   const [title, setTitle] = useState("");
//   const [body, setBody] = useState("");
//   const [posts, setPosts] = useState([]);

//   const fortmatResponse = (res) => {
//     alert(JSON.stringify(res, null, 2));
//     return JSON.stringify(res, null, 2);
//   };

//   const { } = useQuery(
//     "getdata",
//     async () => {
//       return await instance.get("pokemon/ditto");
//     },
//     {
//       enabled: false,
//       onSuccess: (res) => {
//         const result = {
//           status: res.status + "-" + res.statusText,
//           headers: res.headers,
//           data: res.data,
//         };

//         setPosts(fortmatResponse(result));
//       },
//       onError: (err) => {
//         setPosts(fortmatResponse(err.response?.data || err));
//       },
//     }
//   );
//   function getAllData() {
//     try {
//       console.log(posts);
//     } catch (err) {
//       setPosts(fortmatResponse(err));
//     }
//   }

//   return (
//     <>
//        <button className="btn btn-sm btn-primary" onClick={getAllData}>
//               Get All
//             </button>
//     </>
//   )
//calling a api with the help of axios here instance in from utils/axios
// useEffect(() => {
//   instance.get('?._limit=10').then((response) =>{
//     setPosts(response.data);
//   });
//   }, [])
//Posting a api with the help of axios

// const postValue=(e)=>{

//     e.preventDefault();
//     addPosts(title,body);
// }

// const addPosts=()=>{
//     instance.post('',{
//         title:title,
//         body:body,
//     })
//     .then((response) =>{
//         setPosts([response.data,...posts]);
//     })
//     setTitle('');
//     setBody('');
// };

//   return (
//     <>
//       <div>
//         <h2>All Posts</h2>
//         {/* data from the api */}

//         <h1>{posts.data}</h1>
{
  /* {posts.map((post) => {
          return (
            <div key={post.id}>
              <h1 className="text-red-500 ">{post.title}</h1>
              <h1>{post.body}</h1>
            </div>
          );
        })} */
}
{
  /* <form className="p-10 border-2" onSubmit={postValue}>
                    <h1>FORM</h1> <br />
                    <label>Title</label> <br />
                    <input type="text" placeholder="title" value={title} onChange={(event)=>{
                        setTitle(event.target.value)
                    }} /> <br />

                    <label>Body</label><br />
                    <input type="text" placeholder="body" value={body} onChange={(event)=>{
                        setBody(event.target.value)
                    }} /> <br />

                    <button className="p-4 border-2 rounded-xl bg-slate-500 hover:bg-slate-700">
                        Click Me
                    </button>
                </form> */
}

// };

// export default ReactQuery;
