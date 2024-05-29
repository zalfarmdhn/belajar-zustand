import { useAppStore } from "../stores/app-stores";

export default function InputUsername() {
  const username = useAppStore((state) => {
    return state.username;
  });

  const updateUsername = useAppStore((state) => {
    return state.updateUsername;
  })

  return (
    <div>
      <p>Username : {username}</p>
      <input 
        type="text"
        placeholder="New username"
        onChange={(event) => {
          const newUsername = event.target.value;
          updateUsername(newUsername);
        }}
      />
    </div>
  );
}