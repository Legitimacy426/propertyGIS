import { useEffect ,useState} from "react"

import { collection, getDocs, query, where,orderBy ,onSnapshot} from "firebase/firestore"
import { db } from "../firebaseConfig";



const useFetchProperties = (tbl,location,property) => {
    const col = tbl;
    const [posts,setPosts] = useState([])
    const [isErrorP,setErrorP] = useState(null)
    const [isPendingP, setPendingP] = useState(true)
   
    useEffect((tbl) => {
        const Posts = []
          
            const userRef = collection(db, col)
                    const q = query(userRef,where("property","==",property),where("location","==",location),where("status","==","Verified"))
            getDocs(q).then(users => {
                users.forEach(user => {
                            Posts.push({ ...user.data(),id:user.id})
                })
                setPosts(Posts)
                 setPendingP(false)
               
            }).catch(err => {
            
                console.log(err.message)
                setPendingP(false)
                setErrorP(e.message)
                    })
                
    }, [tbl])
    return {posts,isErrorP,isPendingP}
}
export default useFetchProperties