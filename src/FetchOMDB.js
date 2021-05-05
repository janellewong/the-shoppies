import React, { useState, useEffect } from "react";
import { Image, Item, Input, Icon, Grid } from 'semantic-ui-react'
import NomList from "./NomList";

const FetchOMDB = () => {
  const [loading, setLoading] = useState(false);
  const [movies, setMovies] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');

  



  const fetchData = async () => {
    setLoading(true)
    const url = `http://www.omdbapi.com/?apikey=f2bfaa0c&s=${searchQuery}`;
    const response = await fetch(url);
    const data = await response.json();
    setLoading(false)
    setMovies(data.Search)
  }

  useEffect(() => {
    fetchData()
  }, [searchQuery])

  return (
    <div>
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
      
      
      <Grid>
        <Grid.Row>
          <Grid.Column width={9}>
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
                      <button onClick={() => handleClick(movie.imdbID)} style={{
                        backgroundColor: '#ecf0f1',
                        borderRadius: '8px'
                      }}>Nominate</button>
                    </Item.Content>
                  </Item>
            ))}
            </Item.Group>
          </Grid.Column>
          <Grid.Column width={7}>
            <NomList movies={movies}></NomList> 
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </div>
  
  )
}

export default FetchOMDB;
