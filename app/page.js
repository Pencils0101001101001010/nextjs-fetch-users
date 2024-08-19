import Link from "next/link";




//? the rest of this function is in the utils file
export default async function Home() {

  return (
    <div className="text-center text-5xl">
      <h1>Home Page</h1>
      <div className="hover:underline"><Link href='/users'>Go to Users Page</Link></div>
      
    </div>
  );
}

// ? to use fetch to get API's
// import Image from "next/image"

// //* no-cache way to fetch data. if data is static you don't have to use this method
// //* remember you need to include the domain path in you next.config
// async function getDog() {
//   const response = await fetch('https://dog.ceo/api/breeds/image/random', {
//     cache: 'no-cache' ,
//   })
//   const data = response.json()
//   return data
// }

// export default async function Home() {

//   const dogs = await getDog()
//   console.log(dogs)
//   return (
//     <div>
//       <h1>Home Page</h1>
//       <Image src={dogs.message}  alt="dogs" width={500} height={500}/>
//     </div>
//   )
// }

// ?This is the way to navigate through to other pages with the useRout
// 'use client'

// import { useRouter } from "next/navigation"

// export default function Home() {
//   const router = useRouter();
//   return (
//    <div >
//     <h1 className="text-5xl">Home Page</h1>
//     <button
//     className="hover:underline text-3xl"
//      onClick={() => router.push('/about')}>Go to about page</button>
//    </div>
//   )
// }
