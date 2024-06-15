import { useState } from "react";
import { Button } from "./Button";

export function FormAddFriend({ onAddFriend }) {
  const [name, setName] = useState("");
  const [image, setImage] = useState("");
  const defaultImage =
    "https://tse2.mm.bing.net/th?id=OIP.fqSvfYQB0rQ-6EG_oqvonQHaHa&pid=Api&P=0&h=180";
  const id = Date.now();

  function handlesumbit(event) {
    event.preventDefault();
    if (!name) return;
    const newFriend = {
      id,
      name,
      image: image ? image : defaultImage,
      balance: 0,
    };
    console.log(newFriend);
    onAddFriend(newFriend);
    setName("");
    setImage("");
  }

  return (
    <form className="form-add-friend" onSubmit={handlesumbit}>
      <label>🧑‍🤝‍🧑Friend name</label>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
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
