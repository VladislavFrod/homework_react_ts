const baseUrl = "https://jsonplaceholder.typicode.com";

const urls={
    users:{
        base: '/users',
        byId: (id: string): string => urls.users.base + `${id}`
    },
    posts:{
        base: '/posts',
        byId: (id: string): string => urls.posts.base + `${id}`
    }
}

export {
    urls,
    baseUrl
}