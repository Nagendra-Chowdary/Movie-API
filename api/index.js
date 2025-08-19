import path from "path";
import { readFileSync } from "fs";

const movies = JSON.parse(
  readFileSync(path.join(process.cwd(), "data/movies.json"), "utf-8")
);

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
