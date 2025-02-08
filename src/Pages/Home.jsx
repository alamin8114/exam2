import { useState } from "react"
import { getDatabase, ref, onValue, push, set } from "firebase/database";

const Home = () => {
        // ......custom variable
        const [data, setdata]=useState({tododata:'',tododataerror:''})
        const [show, setshow]=useState([])
        
        const db = getDatabase();
        
        const handeadd=()=>{
            if (data.tododata==''){
              setdata((prev)=>({...prev , tododataerror:'Enter your Todo'}))
            }
            
            set(push(ref(db, 'allnote/' )), {
              todoNote:data.tododata
            });



              onValue(ref(db, 'allNote/'), (snapshot) => {
                let arr= []
                snapshot.forEach((item)=>{
                  arr.push(item.val())
                })
                setshow(arr)
              });
        }
  return (
    <>
      <div className="note flex justify-center ">
        
        <p className="text-[18px] text-red-400">{data.tododataerror}</p>
        <input onChange={(e)=>{setdata((prev)=>({...prev ,tododata:e.target.value})), setdata((prev)=>({...prev , tododataerror:''}))}} className="w-[200px] h-[40px] outline-none border-2 border-black" type="text" />
        <button onClick={handeadd} className="text-[20px] px-3 py-1  rounded-lg bg-black text-white">add</button>
      </div>
          {
            show.map((item)=>(
            <div key={item.key} className="mt-[40px] flex justify-center">
              <h2 className="text-[24px]">{item.todoNote}</h2>
              <button className="text-[24px] px-2 py-1 rounded-lg bg-red-500"></button>
              </div>

            ))
          }
      {}
    </>
  )
}

export default Home
