import styles from './Catalog.module.css'
import {Game} from "@/interfaces";
import {GameCard} from "@/components/GameCard";

interface CatalogProps {
    games: Game[]
}
export const Catalog = ({games}: CatalogProps) => {
    return (
        <div className={styles.catalog}>
            {games.map(game=>{
                return <GameCard key={game.id} game={game}/>
            })}
        </div>
    )
}