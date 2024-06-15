import { useState } from "react";
import { Button } from "./Button";

export function FormAddFriend({ friends, setFriends, setIsOpen }) {
  const [friendName, setFriendname] = useState("");
  const [image, setImage] = useState("");

  function handlesumbit(event) {
    event.preventDefault();
    if (friendName !== "") {
      setFriends([
        ...friends,
        { id: Date.now(), name: friendName, image: image, balance: 0 },
      ]);
      setFriendname("");
      setImage("");
      console.log(friends);
      setIsOpen(false);
    }
  }

  return (
    <form className="form-add-friend" onSubmit={handlesumbit}>
      <label>🧑‍🤝‍🧑Friend name </label>
      <input
        type="text"
        value={friendName}
        onChange={(e) => setFriendname(e.target.value)}
      ></input>
      <label>📷 Image URL</label>
      <input
        type="text"
        value={image}
        onChange={(e) => setImage(e.target.value)}
      />
      <Button type="submit">Add</Button>
    </form>
  );
}
