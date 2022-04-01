import Button from "./Button";
import styles from "./App.module.css";
import { useEffect, useState } from "react";

// import "./Button.module.css";

function Hello() {
  /* Clean-up 사용을 위한 구조적 분해방식
    function byeFn() {
      console.log("destroyed...");
    }
    function HelloFn() {
      console.log("created...");
      return byeFn;
    }
    useEffect(HelloFn, []);
  */
  useEffect(() => {
    console.log("created...");
    return () => {
      console.log("destroyed...");
    };
  }, []);
  return <h1>Hello</h1>;
}

function App() {
  const [counter, setValue] = useState(0);
  const [keyword, setKeyword] = useState("");
  const [showing, setShowing] = useState(false);
  const onClick = () => setValue((prev) => prev + 1);
  const onChange = (event) => setKeyword(event.target.value);
  const onClickShow = () => setShowing((prev) => !prev);
  console.log("I run all the time");
  useEffect(() => {
    console.log("I run only once.");
  }, []);
  useEffect(() => {
    console.log("I run when 'keyword' changes");
  }, [keyword]);
  useEffect(() => {
    console.log("I run when 'counter' changes");
  }, [counter]);
  useEffect(() => {
    console.log("I run when 'keyword' or 'counter' changes");
  }, [keyword, counter]);
  return (
    <div>
      <input type="text" onChange={onChange} value={keyword} />
      <h1 className={styles.title}>{counter}</h1>
      <Button text={"Continue"} />
      <br />
      <button onClick={onClick}>Click Me!</button>
      <br />
      {showing ? <Hello /> : null}
      <button onClick={onClickShow}>{showing ? "Hide" : "Show"}</button>
    </div>
  );
}

export default App;
