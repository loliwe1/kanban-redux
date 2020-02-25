import React from 'react';
import PropTypes from 'prop-types';
import './Card.css';

const Card = ({ title, openPopupCard, commentsLength }) => {
  return (
    <div onClick={openPopupCard} className="Card" role="button" tabIndex={0}>
      <h3>{title}</h3>
      <small>
        Комментарии:
        <span>{commentsLength}</span>
      </small>
    </div>
  );
};

Card.propTypes = {
  title: PropTypes.string.isRequired,
  openPopupCard: PropTypes.func.isRequired,
  commentsLength: PropTypes.number.isRequired,
};

export default Card;
