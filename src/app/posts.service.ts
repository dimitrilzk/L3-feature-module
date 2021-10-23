
export async function getPosts(){
   return await (await fetch('assets/db.json')).json()
}