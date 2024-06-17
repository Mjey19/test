import * as styles from "./Card.module.scss";
import { IData } from "../../models/CardModels";
import React from "react";

function Card({ imageUrl, name, created, authorId }: IData) {
  const [isName, setIsName] = React.useState("");
  const [location, setLocation] = React.useState("");
  const [isLoading, setIsLoading] = React.useState(false);

  React.useEffect(() => {
    try {
      async function fetchData() {
        await fetch(
          `https://test-front.framework.team/authors?id=${authorId}`
        ).then((data) => data.json().then((data) => setIsName(data[0].name)));
        await fetch(
          `https://test-front.framework.team/locations?id=${authorId}`
        ).then((data) =>
          data.json().then((data) => setLocation(data[0].location))
        );
      }
      fetchData();
    } catch (e) {
      setIsName("Не найдено");
      setLocation("Не найдено");
    }
  }, []);
  return (
    <div className={styles.card}>
      {!isLoading && <div>Загрузка...</div>}
      <img
        src={`https://test-front.framework.team/${imageUrl}`}
        alt=""
        className={styles.card__bg}
        onLoad={() => setIsLoading(true)}
        style={{ display: isLoading ? "block" : "none" }}
      />

      <div
        className={styles.cardInfo__block}
        style={{ display: isLoading ? "flex" : "none" }}
      >
        <span></span>
        <div className={styles.cardInfo}>
          <h2 className={styles.cardInfo__title}>{name}</h2>
          <p>{created}</p>
        </div>
        <div className={styles.cardInfo__hover}>
          <h2 className={styles.cardInfo__title}>{isName}</h2>
          <p>{location}</p>
        </div>
      </div>
    </div>
  );
}

export default Card;
