import getUser from "@/app/utils/getUser"
import getUserPosts from "@/app/utils/getUserPosts"
import { Suspense } from "react"
import UserPosts from "@/app/components/UserPosts"




export default async function UserPage({params: {id}}) {
    //* initiate both requests in parallel 
    const userData = getUser(id)
    const userPosts = getUserPosts(id)

    const user = await userData
  return (
    <div className="text-center text-5xl">
        <h1 >{user.name} </h1>
        <Suspense fallback={<div>Loading...</div>} >
        <UserPosts promise={userPosts} />
        </Suspense>
     </div>
  )
} 
