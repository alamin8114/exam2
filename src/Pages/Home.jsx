import { useEffect, useState } from "react"
import { getDatabase, ref, onValue, push, set, remove } from "firebase/database";

const Home = () => {
        // ......custom variable
        const [data, setdata]=useState({tododata:'',tododataerror:''})
        const [show, setshow]=useState([])
        
        const db = getDatabase();
        
        const handeadd=()=>{
            if (data.tododata==''){
              setdata((prev)=>({...prev , tododataerror:'Enter your Todo'}))
            }
            else(
              set(push(ref(db, 'allnote/' )), {
                todoNote:data.tododata,
            }),
                setdata((prev)=>({... prev , tododata:''}))
            )
            }
            // delete button
            const hendeldilet=(deleteid)=>{
              remove(ref(db , 'allnote/' + deleteid.key))
            }
            
            // realtime database
            useEffect(()=>{
              onValue(ref(db, 'allnote/'), (snapshot) => {
                let arr= []
                snapshot.forEach((item)=>{
                  if(item.val())
                    arr.push({...item.val() , key:item.key})
                })
                setshow(arr)
              });
            },[])
            console.log(data.tododata)
  return (
    <>
      <div className="note flex justify-center flex-col items-center ">
        <p className="text-[18px] text-red-400">{data.tododataerror}</p>
        <div>
        <input onChange={(e)=>{setdata((prev)=>({...prev ,tododata:e.target.value})), setdata((prev)=>({...prev , tododataerror:''}))}} className="w-[200px] h-[40px] outline-none border-2 border-black" type="text" />
        <button onClick={handeadd} className="text-[20px] px-3 py-1  rounded-lg bg-black text-white">add</button>
        </div>
      </div>
          {
            show.map((item)=>(
            <div key={item.key} className="mt-[40px] flex justify-center">
              <h2 className="text-[24px]">{item.todoNote}</h2>
              <button onClick={()=>hendeldilet(item)} className="text-[24px] px-2 py-1 rounded-lg bg-red-500">delete</button>
              </div>

            ))
          }
      {}
    </>
  )
}

export default Home
