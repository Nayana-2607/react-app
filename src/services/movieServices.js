import axios from 'axios';
export const currentMovies = async () => {
  try {
    const { data } = await axios('api/v1/movie/all/current');
    return { data };
  } catch (error) {
    return { error };
  }
};

export const oldMovies = async () => {
  try {
    const { data } = await axios('api/v1/movie/all/old');
    return { data };
  } catch (error) {
    return { error };
  }
};

export const upcomingMovies = async () => {
  try {
    const { data } = await axios('api/v1/movie/all/upcoming');
    return { data };
  } catch (error) {
    return { error };
  }
};
