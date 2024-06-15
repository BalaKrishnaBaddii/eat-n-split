import { useState } from "react";
import { Button } from "./Button";

export function FormSplitBill({ friends, onclick, splitID, setFriends }) {
  const friend = friends.find((friend) => friend.id === splitID);
  const friendName = friend.name;
  const [myExpense, setMyexpense] = useState("");
  const [bill, setBill] = useState("");
  const [friendExpense, setMyFriendExpense] = useState("");
  const [billPayed, setBillPayed] = useState(1);

  console.log(bill);
  console.log(myExpense);
  console.log(billPayed);
  console.log(bill - myExpense);
  console.log(friends);

  function handleBill(e) {
    if (Number(e.target.value) > bill) {
      setMyexpense(bill);
      setMyFriendExpense(0);
    } else {
      setMyexpense(e.target.value);
      setMyFriendExpense(bill - e.target.value);
    }
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (billPayed === 1) {
      setFriends(
        friends.map((fr) =>
          fr.id === splitID
            ? {
                ...fr,
                balance: bill - myExpense,
              }
            : fr
        )
      );
    } else {
      setFriends(
        friends.map((fr) =>
          fr.id === splitID
            ? {
                ...fr,
                balance: friendExpense - bill,
              }
            : fr
        )
      );
    }
    onclick(onclick);
  }

  return (
    <form className="form-split-bill" onSubmit={handleSubmit}>
      <h2>Split a Bill with {friend.name}</h2>
      <label>💵Bill Value</label>
      <input
        type="text"
        value={bill}
        onChange={(e) => setBill(e.target.value)}
      />

      <label>💰Your Expense</label>
      <input type="text" value={myExpense} onChange={(e) => handleBill(e)} />

      <label>👦{friendName}'s expense:</label>
      <input type="text" disabled value={friendExpense} />

      <label>🤑Who is paying bill:</label>
      <select
        value={billPayed}
        onChange={(e) => setBillPayed(Number(e.target.value))}
      >
        <option value="1">You</option>
        <option value="2">{friendName}</option>
      </select>
      <Button type="submit">Split Bill</Button>
      <Button onClick={onclick}>Close</Button>
    </form>
  );
}
