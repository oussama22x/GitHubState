import React, { useEffect, useState } from 'react';
import '../styling/GetProfile.css';
import Profile from './Profile';
import RepoList from './RepoList';
function GetProfile({username}){
    const [userData, SetUserData] = useState(null);
    const [userRepos, SetUserRepo] = useState([]);
    const [error, Seterror] = useState(null);
    const [location, setlocation] = useState(-1);
    useEffect(()=>{
        const fetchData = async () =>{
            try{
                const userDataRespond =  await fetch(`https://api.github.com/users/${username}`);
                if(!userDataRespond.ok){
                    throw new Error("User not found");
                }
                const userDataRespondJson = await userDataRespond.json();

                const userRepoRespongn = await fetch(`https://api.github.com/users/${username}/repos`);
                const userReopJson = await userRepoRespongn.json();

                SetUserData(userDataRespondJson);
                SetUserRepo(userReopJson);
                Seterror(null);
            }
            catch (err){
                Seterror("404");
                SetUserData(null);
                SetUserRepo([]);
            }
        };
        fetchData();
    }, [username]);

    if(error === "404")
        return (
        <div className='ERROR-GRID'>
            <h1>404</h1>
            <p>User Not Found</p>
        </div>
        );
    if (!userData) return <p> Loading... </p>;

    //1 to render profile
    //0 to render repos

    return(
    <>
        {location === -1 &&
        <div className='chose'>
            <button className='profileButton' onClick={() => setlocation(1)} >See Profile</button>
            <button className='RepoButton' onClick={() => setlocation(0)}>See Repos</button>
        </div>}
        {location === 1 &&
        <Profile profileData={userData}/>
        }
        {location === 0 &&
            <RepoList Data={userRepos}/>
        }

    </>
    )
}

export default GetProfile; 