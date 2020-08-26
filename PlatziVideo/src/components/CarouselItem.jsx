import React from 'react';
import { connect } from 'react-redux';
import { setFavorite, deleteFavorite } from '../actions/index'
import propTypes from 'prop-types';
import '../assets/styles/components/CarouselItem.scss';
import plus from '../assets/static/plus-icon.png';
import play from '../assets/static/play-icon.png';
import remove from '../assets/static/remove-icon.png';

const CarouselItem = (props) => {
    const { id, cover, title, year, contentRating, duration, isList } = props;

    const handleSetFavorite = () => {
        props.setFavorite(
            {
                id, cover, title, year, contentRating, duration
            }
        )
    }

    const handleDeleteFavorite = (itemId) => {
        props.deleteFavorite(itemId)
    }

    return (
        <div className="carousel-item" key={id}>
            <img className="carousel-item__img" src={cover} alt={title} />
            <div className="carousel-item__details">
                <div>
                    <img className="carousel-item__details--img" src={play} alt="Play Icon" />
                    {
                        isList 
                        ?  
                        <img className="carousel-item__details--img" src={remove} alt="Remove Icon" onClick={() => handleDeleteFavorite(id)} />
                        : 
                        <img className="carousel-item__details--img" src={plus} alt="Plus Icon" onClick={handleSetFavorite} />
                    }
                </div>
                <p className="carousel-item__details--title">{title}</p>
                <p className="carousel-item__details--subtitle">
                    {`${year} ${contentRating} ${duration}`}
                </p>
            </div>
        </div>
    )
};

CarouselItem.propTypes = {
    id: propTypes.number,
    cover: propTypes.string,
    title: propTypes.string,
    year: propTypes.number,
    contentRating: propTypes.string,
    duration: propTypes.number
}

const mapDispatchToProps = {
    setFavorite,
    deleteFavorite
}

export default connect(null, mapDispatchToProps)(CarouselItem);