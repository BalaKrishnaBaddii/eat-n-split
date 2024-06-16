import { useState } from "react";
import { Button } from "./Button";

export function FormSplitBill({ selectedFriend, onHandleSplitBill }) {
  const [myExpense, setMyexpense] = useState("");
  const [bill, setBill] = useState("");
  const [friendExpense, setMyFriendExpense] = useState("");
  const [billPayed, setBillPayed] = useState(1);

  function handleBill(value) {
    value >= 0 && value <= bill
      ? setMyexpense(Number(value)) || setMyFriendExpense(bill - Number(value))
      : setMyexpense(bill) || setMyFriendExpense(0);
  }
  function handleSubmit(e) {
    e.preventDefault();
    billPayed === 1
      ? onHandleSplitBill(bill - myExpense)
      : onHandleSplitBill(friendExpense - bill);
  }

  return (
    <form className="form-split-bill" onSubmit={handleSubmit}>
      <h2>Split a Bill with {selectedFriend.name}</h2>
      <label>💵Bill Value</label>
      <input
        type="text"
        value={bill}
        onChange={(e) => {
          setBill(isNaN(e.target.value) ? "" : Number(e.target.value));
          setMyexpense("");
          setMyFriendExpense("");
        }}
      />

      <label>💰Your Expense</label>
      <input
        type="text"
        value={myExpense}
        onChange={(e) =>
          handleBill(isNaN(e.target.value) ? setMyexpense("") : e.target.value)
        }
      />

      <label>👦{selectedFriend.name}'s expense:</label>
      <input type="text" disabled value={friendExpense} />

      <label>🤑Who is paying bill:</label>
      <select
        value={billPayed}
        onChange={(e) => setBillPayed(Number(e.target.value))}
      >
        <option value="1">You</option>
        <option value="2">{selectedFriend.name}</option>
      </select>
      <Button type="submit">Split Bill</Button>
    </form>
  );
}
