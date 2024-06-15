import { useState } from "react";
import "./index.css";
import { FriendsList } from "./FriendsList";
import { Button } from "./Button";
import { FormAddFriend } from "./FormAddFriend";
import { FormSplitBill } from "./FormSplitBill";

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

  function handleAddFriend(friend) {
    console.log(friend);
    setFriends((friends) => [...friends, friend]);
    setIsOpen(false);
  }

  return (
    <div className="app">
      <div className="sidebar">
        <FriendsList
          friends={friends}
          onclick={() => setIsSplitOpen(true)}
          setid={setId}
        />
        {isOpen && <FormAddFriend onAddFriend={handleAddFriend} />}
        <Button onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? "Close" : "Add Friend"}
        </Button>
      </div>
      {isSplitOpen ? (
        <FormSplitBill
          onclick={() => setIsSplitOpen(false)}
          splitID={id}
          friends={friends}
          setFriends={setFriends}
        />
      ) : null}
    </div>
  );
}
