import { Button } from "./Button";

export function Friend({ friend, onclick, setid }) {
  function handleClick(onclick) {
    if (friend.balance === 0) {
      onclick();
      setid(friend.id);
    }
  }
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
      <Button onClick={() => handleClick(onclick)}>Select</Button>
    </li>
  );
}