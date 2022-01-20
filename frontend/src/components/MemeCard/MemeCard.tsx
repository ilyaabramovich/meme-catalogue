import React, { FC, useContext } from 'react';

const MemeCard: FC<MemeCardProps> = ({ card, onCardClick, onCardFavour, onCardDelete}) => {
  const { name, link } = card;
  const currentUser = useContext(CurrentUserContext);
  const isOwn = card.owner._id === currentUser._id;
  // const isFavoured = ...

  const handleClick = () => onCardClick(card);
  const handleDelete = () => onCardDelete(card);
  const handleFavour = () => onCardFavour(card);

  return (
    <div className={styles.card}>
      <div className={styles.element}>
        <img src={link} alt={name} className={styles.image} onClick={handleClick} />
        <div className={styles.description}>
          <h3 className={styles.title}>{name}</h3>
          <button className={styles.button} />
        </div>
        <button onClick={handleDelete} className={styles.deleteButton} />
      </div>
    </div>
  )
}

export default MemeCard;