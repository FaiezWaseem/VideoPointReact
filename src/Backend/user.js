import database from "./Fire";

export default function user( fn ) {
    var obj = {};
    database.once("users/"+database.getUid() , (snap)=>{
         fn(snap.val())
        })
}
