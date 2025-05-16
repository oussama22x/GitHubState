import { useEffect, useState } from "react";
import '../styling/RepoCard.css'
import Bar from '../compenet/graghs'
function RepoCard({Repo}){
    const [languages, setLnaguages] = useState({});
    const [loading, setloading] = useState(false);

    useEffect(() => {
        const fetchData = async () => {
            try{
                const res = await fetch(Repo.languages_url);
                const resJson = await res.json()
                setLnaguages(resJson);
            }
            catch(err){
                console.log("error fetching data", err);
                setLnaguages({});
            }
            finally{
                setloading(true);
            }
        };
        fetchData();
    }, [Repo.languages_url])
 
    const total = Object.values(languages).reduce((a, b) => a + b, 0);
    const percentages = Object.entries(languages).map(([lang, bytes]) => ({
    lang,
    percent: ((bytes / total) * 100).toFixed(1),
  }));

    return(
        <div className="repo-card">
            <h3>
                <a href={Repo.html_url} target="_blank" rel="noopener noreferrer">
                {Repo.name}
                </a>
            </h3>
            {Repo.description && <p>{Repo.description}</p>}
            <p>⭐ Stars: {Repo.stargazers_count}</p>
            {!loading ? (
                <p>Loading language data...</p>
            ) : total > 0 ? (
                <Bar Data={percentages}/>
            ) : (
            <p>No language data available.</p>
            )}
        </div>
    )

}
export default RepoCard;