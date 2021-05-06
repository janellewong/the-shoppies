import React from "react";

const NomList = ({nomList, setnomList}) => {
    
    const handleDelete = (imdbID) => {
        //THIS DOESN'T SAVE WHEN YOU REFRESH
        const newMovieList = nomList.filter(nom => nom.imdbID !== imdbID);
        setnomList(newMovieList);
    }

    return ( 
        <div className="nom-list">
            <h2>Nominated Movies:</h2>
            {nomList.map(nom => (
                <div className="movies" key={nom.imdbID} >
                    <h2>{ nom.Title }</h2>
                    <button onClick ={() => handleDelete(nom.imdbID)}>Delete Movie</button>
                </div>
        ))}
        </div> 
     );
}

export default NomList;

//    run fn every time button is pressed
//     Option 1. set nomList = movies; 2. setState to filtered list with only ids of the ones in the var list
//     Option 2. nomList is empty; add only the new movie of that id to list 