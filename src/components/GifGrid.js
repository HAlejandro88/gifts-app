import React, { useState, useEffect } from 'react'

export const GifGrid = ({ category }) => {

    const [images, setImages] = useState([])

    useEffect(() => {
        getGifs();
    }, [])

    const getGifs = async() => {
        const url = 'https://api.giphy.com/v1/gifs/search?q=Rick+and+Morty&api_key=zWgr1JZwicNsrJtnNrmQlBorU4nTN2xZ';
        const request = await fetch(url);
        const { data } = await request.json();
        const gifs = data.map( img => {
            return {
                id: img.id,
                title: img.title,
                url: img.images?.downsized_medium.url
            }
        })
        console.log(gifs);
        setImages(gifs)
    }


    return (
        <div>
            <h3>{ category }</h3>
            <ol>
                {
                    images.map( ({ id, title }) => <li key={ id }>{ title }</li>)
                }
            </ol>
        </div>
    )
}
