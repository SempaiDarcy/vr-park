import styles from './styles.module.css'
import {GameDetails} from "@/interfaces";

type DetailsProps = GameDetails

export function Details({players, time, age, genre}: DetailsProps) {
    return (
        <div className={styles.details}>
            <div className={styles.detail}>
                <div className="fs1m">
                    {players.min} - {players.max}
                </div>
                <div className="fs0">количество игроков</div>
            </div>
            <div className={styles.detail}>
                <div className="fs1m">
                    {time} мин
                </div>
                <div className="fs0">
                    длительность сеанса
                </div>
            </div>
            <div className={styles.detail}>
                <div className="fs1m">
                    {age}+
                </div>
                <div className="fs0">
                    возрастное ограничение
                </div>
            </div>
            <div className={styles.detail}>
                <div className="fs1m">
                    {genre}
                </div>
                <div className="fs0">
                    жанр игры
                </div>
            </div>
        </div>
    )
}