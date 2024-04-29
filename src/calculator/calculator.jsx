import { useState } from "react";

import "./calc.css";

const Calculator = () => {
  const [state, setState] = useState({ prev: "", cur: "", operator: "" });

  const updateNumber = (e) => {
    if (e.target.innerText === "." && state.cur.includes(".")) return;

    setState({ ...state, cur: state.cur + e.target.innerText });
  };

  const operation = (e) => {
    if (state.cur === "") return;

    if (state.prev !== "") {
      const res = calculate();

      return setState({ prev: res, cur: "", operator: e.target.innerText });
    }

    setState({ prev: state.cur, cur: "", operator: e.target.innerText });
  };

  const calculate = () => {
    let compute;

    switch (state.operator) {
      case "+":
        compute = parseFloat(state.prev) + parseFloat(state.cur);
        break;
      case "-":
        compute = parseFloat(state.prev) - parseFloat(state.cur);
        break;
      case "x":
        compute = parseFloat(state.prev) * parseFloat(state.cur);
        break;
      case "/":
        compute = parseFloat(state.prev) / parseFloat(state.cur);
        break;
      default:
        return;
    }

    return compute;
  };

  const showResult = () => {
    let res = calculate();

    if (isNaN(res)) {
      return;
    }

    setState({ prev: "", cur: res, operator: "" });
  };

  const del = () => {
    if (state.cur) {
      const value = state.cur.toString().slice(0, state.cur.length - 1);

      setState({ ...state, cur: value });
    }
  };

  const clear = () => {
    setState({ prev: "", cur: "", operator: "" });
  };

  return (
    <div className="calc-container">
      <div className="calc-wrapper">
        <div className="num-list">
          {state.prev} {state.operator}
        </div>
        <div className="num">{state.cur || "0"}</div>

        <table>
          <tbody>
            <tr>
              <td>%</td>
              <td onClick={operation}>x</td>
              <td onClick={operation}>/</td>
              <td className="operand del-btn" onClick={del}>
                Del
              </td>
            </tr>

            <tr>
              <td onClick={updateNumber}>7</td>
              <td onClick={updateNumber}>8</td>
              <td onClick={updateNumber}>9</td>
              <td className="operand" onClick={operation}>
                -
              </td>
            </tr>

            <tr>
              <td onClick={updateNumber}>4</td>
              <td onClick={updateNumber}>5</td>
              <td onClick={updateNumber}>6</td>
              <td className="operand" onClick={operation}>
                +
              </td>
            </tr>

            <tr>
              <td onClick={updateNumber}>1</td>
              <td onClick={updateNumber}>2</td>
              <td onClick={updateNumber}>3</td>
              <td rowSpan={2} className="operand result" onClick={showResult}>
                =
              </td>
            </tr>

            <tr>
              <td onClick={clear}>AC</td>
              <td onClick={updateNumber}>0</td>
              <td onClick={updateNumber}>.</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Calculator;
