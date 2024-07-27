import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { FaSearch } from "react-icons/fa";

import "./Apifetch1.css"

   function Apifetch1() {
  let [movie, setMovie] = useState([]);
  console.log(movie)
  let [searchTerm, setSearchTerm] = useState('');
  const handleInputChange = (e) => {
    setSearchTerm(e.target.value);
  };

  useEffect(() => {
    if (searchTerm) {
      axios.get(`https://api.themoviedb.org/3/search/movie?api_key=cadf4c838e760c1d2d99fd3f0c87191a&query=${searchTerm}`)
        .then(response => {
          console.log(response.data.results);
          setMovie(response.data.results); 
        })
        .catch(err => {
          console.error('Error fetching data:', err);
        });
    }
  }, [searchTerm]);

 
  return (
    <>
      <nav className='navigation'>
        <div>

        <img className='logo' src="https://www.themoviedb.org/assets/2/v4/logos/v2/blue_short-8e7b30f73a4020692ccca9c88bafe5dcb6f8a62a4c6bc55cd9ba82bb2cd95f6c.svg" alt="" />
        </div>
        <ul>
            <li>

        <a href="#">Home</a>
            </li>
            <li>
        <a href="#">Popular</a>
            </li>
            <li>
        <a href="#">Catagories</a>
            </li>
            <li>
        <a href="#">BlockBusters</a>
            </li>
        </ul>
      <div className='button-box'>
        <input
      type="text"
        placeholder="Enter Movie"value={searchTerm}onChange={handleInputChange}/>
        <button onClick={handleInputChange}><FaSearch /></button>
      </div>
      </nav>

        <div className='total'>
         {
          movie.map((value)=>{
            console.log(value.title)
            return(
               
              <div className='section-part'> 
                          <img className='poster-part' src={`https://image.tmdb.org/t/p/w500${ value.poster_path}`} alt="" />

              <h1 className='title-part'>
                {value.title}
              </h1>
              <h2 className='rating-part'>{value.vote_average}⭐
              </h2>
              </div>
            )

          })
         }
        </div>
        <footer>
            {
                (searchTerm && movie)  && <p>Copyright &copy; by Kiran Jena!😻</p> 
            }
        </footer>
    </>
  );
}

export default Apifetch1;
