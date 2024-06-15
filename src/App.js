import { useState } from "react";
import "./index.css";
import { FriendsList } from "./FriendsList";
import { Button } from "./Button";
import { FormAddFriend } from "./FormAddFriend.1";
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
  console.log(id);

  console.log(friends);

  return (
    <div className="app">
      <div className="sidebar">
        <FriendsList
          friends={friends}
          onclick={() => setIsSplitOpen(true)}
          setid={setId}
        />
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
