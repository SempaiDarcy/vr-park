export interface Game {
    id: number,
    img: string,
    type:'PVP' | 'PVE',
    title: string;
    description: string;
    players: {
        min: number;
        max: number;
    };
    time: number;
    age: number;
    genre: string;
}
export interface GameDetails {
    players: {
        min: number;
        max: number;
    };
    time: number;
    age: number;
    genre: string;
}
// export interface GameData {
//     [key: number]: Game;
// }