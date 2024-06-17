import React, { useEffect } from "react";
import * as styles from "./Input.module.scss";
import useDebounce from "../../hook/useDebounce";
import { useDispatch } from "react-redux";
import { setFilter } from "../../redux/slice/filterSlice";
function Input() {
  const [isValue, setValue] = React.useState<string>("");
  const debouncedValue = useDebounce(isValue, 1000);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(setFilter(debouncedValue));
  }, [debouncedValue]);
  return (
    <label className={styles.inputLabel} htmlFor="1" id="">
      <img src="./white_search.svg" alt="" />
      <input
        type="text"
        id="1"
        placeholder="Painting title"
        onChange={(e) => setValue(e.target.value)}
        value={isValue}
      />
      {isValue && (
        <img
          className={styles.clearImg}
          onClick={() => setValue("")}
          src="./clearImg.svg"
          alt=""
        />
      )}
    </label>
  );
}

export default Input;
