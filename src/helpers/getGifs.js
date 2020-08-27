

export const getGifs = async(category) => {
    const url = `https://api.giphy.com/v1/gifs/search?q=${encodeURI(category)}&api_key=zWgr1JZwicNsrJtnNrmQlBorU4nTN2xZ`;
    const request = await fetch(url);
    const { data } = await request.json();
    const gifs = data.map( img => {
        return {
            id: img.id,
            title: img.title,
            url: img.images?.downsized_medium.url
        }
    })
    return gifs;
}