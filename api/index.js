import path from "path";
import { readFileSync } from "fs";



export default function handler(req,res){
    const filePath = path.join(process.cwd(), "data", "movies.json");
  const fileData = fs.readFileSync(filePath, "utf-8");
  const movies = JSON.parse(fileData);
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
