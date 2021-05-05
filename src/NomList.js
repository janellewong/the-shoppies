import React, {useState} from "react";

//you can pass FUNCTIONS AS PROPS
const NomList = ({movies, imdbID}) => {
    const [nomList, setnomList] = useState([]);
    
    const handleClick = (movieID) => {
        createList(movieID);
    }
    
    const createList = (movieID) => {
        setnomList(
            nomList.map(nom => {
                if (nom.imdbID === movieID) {
                    const nom = movies.movie;
                    return {...nom,  complete: !nom.complete};
                } else {
                    return nom;
                }
            })
        );
    };
    
    const handleDelete = (imdbID) => {
        //THIS DOESN'T SAVE WHEN YOU REFRESH
        const newMovieList = nomList.filter(nom => nom.imdbI !== imdbID);
        setnomList(newMovieList);
    }

    return ( 
        <div className="nom-list">
            <h2>Nominated Movies</h2>
            {nomList.map(nom => (
                <div className="movies" key={nom.id} >
                    <h2>{ nom.Title }</h2>
                    <button onClick ={() => handleDelete(nom.imdbID)}>Delete Movie</button>
                </div>
        ))}
        </div> 
     );
}

export default NomList;

   // run fn every time button is pressed
    //Option 1. set nomList = movies; 2. setState to filtered list with only ids of the ones in the var list
    //Option 2. nomList is empty; add only the new movie of that id to list 