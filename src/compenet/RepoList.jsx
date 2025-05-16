import RepoCard from "./RepoCard";
function RepoList({Data}){
    if(!Data || Data.length === 0){
        return <h3>No repos found.</h3>;
    }
    return(
        <div className="repo-list">
            <h2>Repositories</h2>
        {Data.map((repo) => (
            <RepoCard key={repo.id} Repo={repo}/>
        ))}
        </div>
    )
}
export default RepoList;