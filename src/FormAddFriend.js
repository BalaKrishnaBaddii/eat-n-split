import { useState } from "react";
import { Button } from "./App";

export function FormAddFriend() {
  const [frendName, setFriendname] = useState("");
  const [image, setImage] = useState("");
  function handleButton() {}
  return (
    <form className="form-add-friend">
      <label>🧑‍🤝‍🧑Friend name </label>
      <input
        type="text"
        // value={frendName}
        onChange={(e) => setFriendname(e.target.validationMessage)}
      ></input>
      <label>📷 Image URL</label>
      <input
        type="text"
        value={image}
        onChange={(e) => setFriendname(e.target.validationMessage)}
      />
      <Button>Add</Button>
    </form>
  );
}
