export default async function getUserPosts(id) {
    const response = await fetch(`https://jsonplaceholder.typicode.com/posts?userId=${id}`)

    if (!response.ok) {
        throw new Error('failed to load user posts')
    }

    return response.json()
}