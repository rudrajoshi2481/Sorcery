import { fireDB } from "@/components/config/fire"
import {collection,addDoc,getDoc} from "firebase/firestore"


// check the cooke already present

const IsCookiePresent = () => {
    return false
}


const NewVisitDocPresent = () => {
    // getDocs(collection(fireDB,"analytics"))
}

const Newvisit = async () => {
    // update count

    

    // get total visit




    // new visit
    await addDoc(collection(fireDB,"analytics"),{
        time:Date.now()
    })

    // generate cookie


    return true
    
}


const revisit = async() => {
    return await addDoc(collection(fireDB,"revisit"),{

    })
    
}

const VisitEffect = () => {

    if (!IsCookiePresent()) {
        
    }else{
        //update count 
        //old visit
    }


}

