import React from "react";
import { Item } from 'semantic-ui-react'



const NomList = ({nomList, setnomList}) => {

    const handleDelete = (id) => {
        // only locally (doesn't save)
        const newMovieList = nomList.filter(nom => nom.id !== id);
        localStorage.setItem('movies', newMovieList)
        setnomList(newMovieList);

        // fetch('http://localhost:8000/movies/'+ id, {
        //     method: 'DELETE'
        // })
       
    }

    

    return ( 
        <div className="nom-list">
            <div className="nomlist-space">
                <h2>Nominated Movies:</h2>
                <Item.Group>
                {nomList.map(nom => (
                    <Item>
                        <Item.Image size='tiny' src={nom.Poster} />
                        <Item.Content>
                            <Item.Header as='a'>{nom.Title}</Item.Header>
                            <Item.Meta>Year released: {nom.Year}</Item.Meta>
                            <Item.Extra>Movie Type: {nom.Type}</Item.Extra>
                            <div className = "nominate-button">
                                <button onClick ={() => handleDelete(nom.id)}>Delete Movie</button>
                            </div>
                        </Item.Content>
                    </Item>
                ))}
                </Item.Group>
            </div>
        </div> 

    );
}

export default NomList;

