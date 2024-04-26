import { useState } from "react";

const Item = (props) => {
  const [check, setCheck] = useState(true);

  return (
    <div className="item__row">
      <div>
        <button className="del" onClick={() => props.onSel(props.id)}>
          X
        </button>
      </div>
      <div>
        <li className="item__name" id={props.id} key={props.id}>
          {props.itemValue}
        </li>
      </div>
    </div>
  );
};

export default Item;
