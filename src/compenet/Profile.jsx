import '../styling/Profile.css';

function Profile({ profileData }) {
  return (
    <div className="user-profile">
      <img className="avatar" src={profileData.avatar_url} alt="profilePic" />

      <h2 className="name">{profileData.name}</h2>
      <p className="username">@{profileData.login}</p>

      {profileData.bio && <p className="bio">{profileData.bio}</p>}
      {profileData.location && <p className="location">📍 {profileData.location}</p>}

      <div className="stats">
        <p>Followers: <strong>{profileData.followers}</strong></p>
        <p>Following: <strong>{profileData.following}</strong></p>
        <p>Public Repos: <strong>{profileData.public_repos}</strong></p>
      </div>

      <p className="joined">Joined GitHub: <strong>{new Date(profileData.created_at).toLocaleDateString()}</strong></p>

      <a className="profile-link" href={profileData.html_url} target="_blank" rel="noopener noreferrer">
        🔗 View on GitHub
      </a>
    </div>
  );
}

export default Profile;
