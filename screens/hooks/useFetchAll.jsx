import { useEffect ,useState} from "react"

import { collection, getDocs, query, where,orderBy ,onSnapshot} from "firebase/firestore"
import { db } from "../firebaseConfig";



const useFetchAll = (tbl,location,property) => {
    const col = tbl;
    const [posts,setPosts] = useState([])
    const [isErrorP,setError] = useState(null)
    const [isPendingP, setPendingP] = useState(true)
   
    useEffect((tbl) => {
        const Posts = []
          
            const userRef = collection(db, col)
                    const q = query(userRef,where("status","==","Pending"))
            getDocs(q).then(users => {
                users.forEach(user => {
                            Posts.push({ ...user.data(),id:user.id})
                })
                setPosts(Posts)
                 setPendingP(false)
               
            }).catch(err => {
            
                console.log(err.message)
                    })
                
    }, [tbl])
    return {posts,isErrorP,isPendingP}
}
export default useFetchAll