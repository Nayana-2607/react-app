import styles from '../Styles/Card.module.css';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

export const Cards = (props) => {
  Cards.propTypes = {
    id: PropTypes.node.isRequired,
    poster: PropTypes.node.isRequired,
    title: PropTypes.node.isRequired
  };

  return (
    <div>
      <div key={props.id} className={styles.imageContainer}>
        <img className={styles.image} src={props.poster} alt={props.title}></img>
        <div className={styles.movie}>
          <h3 className="font-link">{props.title}</h3>
        </div>

        <Link to={'/movie/' + props.title}>
          <button className={styles.btn1}>Book Tickets</button>
        </Link>
        <button className={styles.btn2}>Watch Trailer</button>
      </div>
    </div>
  );
};
