import React, { useState } from "react";
import "./App.css";

import { createStore } from "redux";
import { Provider, useSelector, useDispatch, connect } from "react-redux";

function reducer(currentState, action) {
  // dispatch로 전달되는 것은 action으로 받는다.
  // console.log(action);

  if (currentState === undefined) {
    return {
      number: 1,
    };
  }
  const newState = { ...currentState };
  if (action.type === "PLUS") {
    newState.number++;
  }
  return newState;
}

const store = createStore(reducer);

function App() {
  return (
    <div id="container">
      <h1>Root </h1>
      <div id="grid">
        <Provider store={store}>
          {/* Provider에 prop 중에 store을 반드시 설정해줘야한다. */}
          <Left1></Left1>
          <Right1></Right1>
        </Provider>
      </div>
    </div>
  );
}

export default App;

function Left1(props) {
  return (
    <div>
      <h1>Left1 : {}</h1>
      <Left2></Left2>
    </div>
  );
}

function Left2(props) {
  return (
    <div>
      <h1>Left2 : {}</h1>
      <Left3></Left3>
    </div>
  );
}

function Left3(props) {
  // function f(state) {
  //   return state.number;
  // }
  // 아래 useSelector의 화살표 함수와 같다.
  const state = useSelector((state) => state);
  //useSelector을 이용해서 state를 가져온다.
  //useSelector에서 화살표 함수를 이용.

  // const number = useSelector((state) => state.number);
  // 위와 같이 원하는 값만 가져올 수 도 있다.

  console.log(state);

  return (
    <div>
      <h1>Left3 : {state.number}</h1>
    </div>
  );
}

function Right1(props) {
  return (
    <div>
      <h1>Right1</h1>
      <Right2></Right2>
    </div>
  );
}

function Right2(props) {
  return (
    <div>
      <h1>Right2</h1>
      <Right3></Right3>
    </div>
  );
}

function Right3(props) {
  const dispatch = useDispatch();

  return (
    <div>
      <h1>Right3</h1>
      <input
        type="button"
        value="+"
        onClick={() => {
          dispatch({ type: "PLUS" });
          // dispatch로 PLUS 라는 액션을 전달.
        }}
      />
    </div>
  );
}
