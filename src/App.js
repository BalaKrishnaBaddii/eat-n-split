import { useState } from "react";
import "./index.css";

const initialFriends = [
  {
    id: 118836,
    name: "Clark",
    image: "https://i.pravatar.cc/48?u=118836",
    balance: -7,
  },
  {
    id: 933372,
    name: "Sarah",
    image: "https://i.pravatar.cc/48?u=933372",
    balance: 20,
  },
  {
    id: 499476,
    name: "Anthony",
    image: "https://i.pravatar.cc/48?u=499476",
    balance: 0,
  },
];

export default function App() {
  const [friends, setFriends] = useState(initialFriends);
  const [isOpen, setIsOpen] = useState(false);
  const [isSplitOpen, setIsSplitOpen] = useState(false);
  const [id, setId] = useState("");

  console.log(friends);

  return (
    <div className="app">
      <div className="sidebar">
        <FriendsList friends={friends} onclick={() => setIsSplitOpen(true)} />
        {!isOpen ? (
          <Button onClick={() => setIsOpen(true)}>Add Friend</Button>
        ) : null}
        {isOpen ? (
          <>
            <FormAddFriend
              friends={friends}
              setFriends={setFriends}
              setIsOpen={setIsOpen}
            />
            <Button onClick={() => setIsOpen(false)}>Close</Button>
          </>
        ) : null}
      </div>
      {isSplitOpen ? (
        <FormSplitBill onclick={() => setIsSplitOpen(false)} />
      ) : null}
    </div>
  );
}

function FriendsList({ friends, onclick }) {
  return (
    <ul>
      {friends.map((friend) => (
        <Friend friend={friend} key={friend.name} onclick={onclick} />
      ))}
    </ul>
  );
}

function Friend({ friend, onclick }) {
  return (
    <li>
      <img src={friend.image} alt={friend.name} />
      <h3>{friend.name}</h3>
      {friend.balance < 0 && (
        <p className="red">
          You owe {friend.name} ${Math.abs(friend.balance)}
        </p>
      )}
      {friend.balance > 0 && (
        <p className="green">
          {friend.name} owe you ${friend.balance}
        </p>
      )}
      {friend.balance === 0 && (
        <p className="label">You and {friend.name} are Even</p>
      )}
      <Button onClick={onclick}>Select</Button>
    </li>
  );
}

function Button({ children, onClick }) {
  return (
    <button className="button" onClick={onClick}>
      {children}
    </button>
  );
}

function FormAddFriend({ friends, setFriends, setIsOpen }) {
  const [friendName, setFriendname] = useState("");
  const [image, setImage] = useState("");

  function handlesumbit(event) {
    event.preventDefault();
    setFriends([
      ...friends,
      { id: Date.now(), name: friendName, image: image, balance: 0 },
    ]);
    setFriendname("");
    setImage("");
    console.log(friends);
    setIsOpen(false);
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

function FormSplitBill({ friendName, onclick }) {
  return (
    <form className="form-split-bill">
      <h2>Split a Bill with Antony</h2>
      <label>💵Bill Value</label>
      <input type="text" />

      <label>💰Your Expense</label>
      <input type="text" />

      <label>👦{friendName}'s expense:</label>
      <input type="text" disabled />

      <label>🤑Who is paying bill:</label>
      <select>
        <option>You</option>
        <option>{friendName}</option>
      </select>
      <Button>Split Bill</Button>
      <Button onClick={onclick}>Close</Button>
    </form>
  );
}
