import { shallow } from "zustand/shallow";
import { useAppStore } from "../stores/app-stores";
import { useState } from "react";

export default function InputLogin() {
  const [user, getUser, logoutUser] = useAppStore(
    (state) => [state.githubUser, state.getGithubUser, state.logoutUser], 
    shallow
  );
  const [username, setUsername] = useState('');

  return (
    <div>
      <p>Login by username</p>
      <input 
        type="text"
        placeholder="New username"
        value={username}
        onChange={(e) =>  setUsername(e.target.value)}
      />
      <button type="button" onClick={() => getUser(username)}>
        Submit
      </button>
      {user.login && (
        <div className="login-frame">
          <img src={user.avatar_url} alt="github profile picture" width="100" />
          <p>Logged in as {user.login}</p>
          <button type="button" onClick={logoutUser}>
            Logout
          </button>
        </div>
      )}

    </div>
  );
}