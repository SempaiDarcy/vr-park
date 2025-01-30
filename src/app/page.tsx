import styles from "./page.module.css";
import {Catalog} from "@/components/Catalog";

export default async function Home() {
    const games = await fetch(process.env.url + "/api/games").then((response)=>
        response.json()
    )
    console.log(games)

    return (
        <div className={styles.page}>
            <div className={`${styles.title} fs3plus`}>
                Наши игры
            </div>
            <div>
                Захватывающие игры для всех возрастов,
                которые позволяют погрузиться в мир виртуальной реальности и стать его частью.
            </div>
            <Catalog games={games}/>
        </div>
    );
}
