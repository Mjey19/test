import "./App.scss";

import { IData } from "./models/CardModels";

import Card from "./components/Card/Card";
import Header from "./components/Header/Header";
import Input from "./components/Input/Input";
import Pagination from "./components/Pagination/Pagination";

import React from "react";
import axios from "axios";
import { useSelector } from "react-redux";

function App() {
  const [data, setData] = React.useState([]);
  const [totalLength, SetTotalLength] = React.useState(0);
  const [page, setPage] = React.useState(1);
  const [isLoading, setIsLoading] = React.useState(false);
  const filterText = useSelector((state: any) => state.filter.filter);
  React.useEffect(() => {
    try {
      async function fetchData() {
        await axios
          .get(
            `https://test-front.framework.team/paintings?_page=${page}&_limit=6${
              filterText ? `&q=${filterText}` : ""
            }`
          )
          .then((res) => setData(res.data));
        // .then((data) => setData(data));
        await axios
          .get(
            `https://test-front.framework.team/paintings${
              filterText ? `?q=${filterText}` : ""
            }`
          )
          .then((res) => SetTotalLength(res.data.length));
        setIsLoading(true);
      }
      fetchData();
    } catch (e) {
      setIsLoading(false);
    }
  }, [filterText, page]);

  return (
    <div className="wrapper">
      <div className="container">
        <Header />
        <div className="input-container">
          <Input />
        </div>
        {totalLength ? (
          <div className="card-inner">
            {isLoading &&
              data.map((item: IData, index) => {
                return <Card key={index} {...item} />;
              })}
          </div>
        ) : (
          <div className="error_title">
            <p>
              No matches for <b>{filterText}</b>{" "}
            </p>
            Please try again with a different spelling or keywords.
          </div>
        )}

        {totalLength ? (
          <Pagination
            totalLength={totalLength}
            clickPage={(page: number) => setPage(page)}
            prevPage={() => setPage((prev) => (prev > 1 ? prev - 1 : 1))}
            nextPage={() =>
              setPage((prev) =>
                prev > Math.ceil(totalLength / 6) - 1
                  ? Math.ceil(totalLength / 6)
                  : prev + 1
              )
            }
          />
        ) : (
          ""
        )}
      </div>
    </div>
  );
}

export default App;
