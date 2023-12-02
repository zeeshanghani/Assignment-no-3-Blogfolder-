export default function Blogposts({
    params 
}:{
    params:{
        blogposts: string
    }
})  {
    return(
        <h1> Blog Posts no {params.blogposts}</h1>
    )
}