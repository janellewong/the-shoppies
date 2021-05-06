import React, { useState, useEffect } from "react";
import { Image, Item, Input, Icon, Grid, Segment } from 'semantic-ui-react'
import NomList from "./NomList";

const FetchOMDB = () => {
  const [loading, setLoading] = useState(false);
  const [movies, setMovies] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [nomList, setnomList] = useState([]);


  const fetchData = async () => {
    setLoading(true)
    const url = `http://www.omdbapi.com/?apikey=f2bfaa0c&type=movie&s=${searchQuery}`;
    const response = await fetch(url);
    const data = await response.json();
    setMovies(data.Search)
    setLoading(false)
  }

  const createList = (movie) => {
    setnomList([...nomList, movie])
  };


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
            <h4>Search Results:</h4>
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
                          onClick={() => createList(movie)}
                          disabled={nomList.some(x => x.imdbID === movie.imdbID)}
                        >Nominate</button>
                      </div>
                    </Item.Content>
                  </Item>
            ))}
            </Item.Group>
          </Grid.Column>
          <Grid.Column width={1}></Grid.Column>
          <Grid.Column width={7} className="search-results">
            <NomList nomList={nomList} setnomList={setnomList}></NomList> 
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </div>
  
  )
}

export default FetchOMDB;
