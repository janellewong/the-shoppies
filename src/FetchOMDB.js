import React, { useState, useEffect } from "react";
import { Item, Input, Icon, Grid } from 'semantic-ui-react'
import NomList from "./NomList";
import { store } from 'react-notifications-component';
import 'react-notifications-component/dist/theme.css';


const FetchOMDB = () => {
  const [loading, setLoading] = useState(false);
  const [movies, setMovies] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [nomList, setnomList] = useState([]);


  const fetchData = async () => {
    setLoading(true)
    const url = `https://www.omdbapi.com/?apikey=f2bfaa0c&type=movie&s=${searchQuery}`;
    const response = await fetch(url);
    const data = await response.json();
    setMovies(data.Search)
    setLoading(false)
  }

  useEffect(() => {
    const movies = JSON.parse(localStorage.getItem('movies') || '[]')
    console.log(movies)
    setnomList(movies)
    // fetch('http://localhost:8000/movies')
    // .then(res => {
    //     return res.json()
    // })
    // .then((data) => {
    //     console.log(data);
    //     setnomList(data);
    // });
  }, [nomList]); //fetches data when you refresh page (empty dependency list) and when nomList changes

  const createList = (movie) => {
    const updatedMovies = [...nomList, movie]
    setnomList(updatedMovies);

    localStorage.setItem('movies', updatedMovies)
    //saves movie to json data
    // fetch('http://localhost:8000/movies', {
    //   method: 'POST',
    //   headers: {'Content-Type': 'application/json'},
    //   body: JSON.stringify(movie) //changes movie into json data
    // }).then(() => {
    //   console.log(movie);
      
    // })

  };

  const bannerPop = () => {
    if (nomList.length >= 4) {
      
        store.addNotification({
            title: "Congratulations!",
            message: "You have nominated 5 movies for the Shoppies!",
            type: "success",
            insert: "top",
            container: "top-right",
            animationIn: ["animate__animated", "animate__fadeIn"],
            animationOut: ["animate__animated", "animate__fadeOut"],
            dismiss: {
              duration: 5000,
              onScreen: true
            }
        });
    }
}

  useEffect(() => {
    fetchData()
  }, [searchQuery])

  return (
    <div>
      <div className="search-bar">
        <Input 
          fluid icon={<Icon name='search' inverted circular link />}
          placeholder='Search a movie...'
          value={searchQuery}
          onChange={(e) => {
            setSearchQuery(e.target.value)
          }} />
          

        {loading && (
          <div>loading...</div>
        )}
      </div>
      
      

      <Grid columns={3}>
        <Grid.Row>
          <Grid.Column width={8} className="search-results">
            <div className="search-space">
              <h2>Search Results:</h2>
              <Item.Group>
              {!movies ? (
                <div>Sorry, there are no search results for " {searchQuery} "</div>
              ) : movies.map(movie => (
                    <Item>
                      <Item.Image size='tiny' src={movie.Poster} />
                      <Item.Content>
                        <Item.Header as='a'>{movie.Title}</Item.Header>
                        <Item.Meta>Year released: {movie.Year}</Item.Meta>
                        <Item.Extra>Movie Type: {movie.Type}</Item.Extra>
                        <div className = "nominate-button">
                          <button
                            onClick={() => {createList(movie); bannerPop();}}
                            disabled={nomList.some(x => x.imdbID === movie.imdbID || nomList.length >= 5)}
                          >Nominate</button>
                        </div>
                      </Item.Content>
                    </Item>
              ))}
              </Item.Group>
            </div>
          </Grid.Column>
          <Grid.Column width={1}></Grid.Column>
          <Grid.Column width={7} className="search-results">
            {nomList && <NomList nomList={nomList} setnomList={setnomList}></NomList>}
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </div>
  
  )
}

export default FetchOMDB;
