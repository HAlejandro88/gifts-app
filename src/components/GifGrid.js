import React from 'react'
import { GifGridItem } from './GifGridItem';
import { useFetchGifs } from '../hooks/useFetchGifs';
import PropTypes from 'prop-types';

export const GifGrid = ({ category }) => {

    const { data: images, loading } = useFetchGifs(category);


    return (
        <>
            <h3>{ category }</h3>
            { loading && <p>Esta Cargando</p>}
            <div className="card-grid">
                    {
                        images.map( img => (
                            <GifGridItem key={ img.id } { ...img } />
                        ))
                    }
            </div>
        </>
    )
}


GifGrid.propTypes = {
    category: PropTypes.string.isRequired
}