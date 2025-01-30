import {Game} from "@/interfaces";
import styles from './GameCard.module.css'
import Image from "next/image";
import {Details, Type} from "@/components/GameCard/details";
import {Button} from "@/components/Button";

interface GameCardProps {
    game: Game
}

export function GameCard({
                             game: {
                                 img,
                                 type,
                                 title,
                                 description,
                                 players,
                                 time,
                                 age,
                                 genre
                             }
                         }: GameCardProps) {
    return (
        <div className={styles.gameCard}>
            <div className={styles.imageWrapper}>
                <Image
                    className={styles.img}
                    src={img}
                    alt={"preview"}
                    width={540}
                    height={300}
                />
                <Type data={type}/>
            </div>
            <div className={styles.body}>
                <div className="fs2plus">{title}</div>
                <div className={styles.description}>{description}</div>
                <Details
                    players={players}
                    time={time}
                    age={age}
                    genre={genre}
                />
                <div className={styles.actions}>
                    <Button variant={"outline"}>
                        Забронировать
                    </Button>
                    <Button variant={"link"}>
                        Подробнее
                    </Button>
                </div>
            </div>
        </div>
    )
}