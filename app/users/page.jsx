import Link from "next/link"
import getUsers from "../utils/getUsers"

export default async function AboutPage() {

 const users = await getUsers()


  return (
    <div className="text-center text-6xl">
     <h1>Users Page</h1>
     {users.map((user) => {
      return (
        <>
          <p  
          className="hover:underline"
          key={user.id}>
           <Link href={`/users/${user.id}`}>
           {user.name}
           </Link>
            
          </p>
        </>
      )
     })}
    </div>
  )
} 
