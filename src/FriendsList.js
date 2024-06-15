import { Friend } from "./Friend";

export function FriendsList({ friends, onclick, setid }) {
  return (
    <ul>
      {friends.map((friend) => (
        <Friend
          friend={friend}
          key={friend.name}
          onclick={onclick}
          setid={setid}
        />
      ))}
    </ul>
  );
}
