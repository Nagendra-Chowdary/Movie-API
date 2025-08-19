import movies from "../data/movies.json" assert{type:"json"}

export default function handler(req,res){
    const {query}=req.query;
    if(query){
     const results =  movies.filter((movie)=>{
            return movie.title.toLowerCase().includes(query.toLowerCase());
        })
        res.status(200).json(results);
    }

    else{
     res.status(200).json(movies);
    }
}
