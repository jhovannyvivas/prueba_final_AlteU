import { useEffect, useState } from "react";


export const GetMovieList = ({year}) => {

    const [Info, setInfo] = useState([]);
    useEffect(()=>{
        fetch('https://jsonmock.hackerrank.com/api/movies?Year='+year).then((response)=> response.json()).then((data)=> setInfo(data));
    },[])

    console.log(Info.data?.length === 0? 'no data' : Info.data?.map((i)=>i.Title ))

    console.log('info');
    console.log(Info.data);
    return <div>
        {Info.data?.map((i)=> <h1 key={i.Title}>{i.Title}</h1>)}
    </div>
}