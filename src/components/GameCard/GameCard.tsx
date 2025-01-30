import {Game} from "@/interfaces";
import styles from './GameCard.module.css'
import Image from "next/image";
import {Type} from "@/components/GameCard/details";

interface GameCardProps {
    game: Game
}

export function GameCard({game}: GameCardProps) {
    return (
        <div className={styles.gameCard}>
            <div className={styles.imageWrapper}>
                <Image
                    className={styles.img}
                    src={game.img}
                    alt={"preview"}
                    width={540}
                    height={300}
                />
                <Type data={game.type}/>
            </div>
            <div className={styles.body}>
                <div className="fs2plus">{game.title}</div>
            </div>
        </div>
    )
}