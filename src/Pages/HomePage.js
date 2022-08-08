import Header from '../components/Header';
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Cards } from '../components/Cards';
import styles from '../Styles/Card.module.css';

function Home() {
  const [movies, setMovies] = useState({});

  useEffect(() => {
    let res;
    const fetchData = async () => {
      try {
        res = await axios('http://localhost:3001/movies');
        console.log(res.data);
      } catch (e) {
        console.log(e);
      }
      setMovies(res.data);
    };

    fetchData();
  }, []);

  return (
    <div>
      <Header></Header>
      <div className={styles.box}>
        <div className={styles.heading}>
          <h2 className="font-link">New relases</h2>
          <div>
            <div className={styles.cardContainer}>
              {Object.entries(movies).map((value, index) => (
                <Cards
                  key={index}
                  id={value[1].id}
                  poster={value[1].Poster}
                  title={value[1].Title}
                />
              ))}
            </div>
          </div>
        </div>

        <div className={styles.heading}>
          <h2 className="font-link">Upcoming movies</h2>
          <div>
            <div className={styles.cardContainer}>
              {Object.entries(movies).map((value, index) => (
                <Cards
                  key={index}
                  id={value[1].id}
                  poster={value[1].Poster}
                  title={value[1].Title}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Home;
