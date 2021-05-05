// import { useState, useEffect } from 'react';

// //CUSTOM HOOK

// const customHook = (url) => {
//   const [data, setData] = useState(null);
//   const [isPending, setIsPending] = useState(true);
//   const [error, setError] = useState(null);

// //this fn runs every time something renders 
//   useEffect(() => {
//     const abortCont = new AbortController(); //use to stop fetch
//     setTimeout(() => {
//       fetch(url, {signal: abortCont.signal}) //cleanup function stops this specific fetch fn
//       .then(res => {
//         if (!res.ok) { // error coming back from server
//           throw Error('could not fetch the data for that resource');
//         } 
//         return res.json();
//       })
//       .then(data => {
//         setIsPending(false);
//         setData(data);
//         setError(null);
//       })
//       .catch(err => {
//         // auto catches network / connection error
//         if (err.name !== 'AbortError') {
//           setIsPending(false);
//           setError(err.message);

//         }
//       })
//     },);
//     //cleanup function
//     return () => abortCont.abort();
//   }, [url])  // dependency array [] empty = only runs at refresh render, [name] runs when name changes state 


//   return { data, isPending, error };
// }
 
// export default customHook;