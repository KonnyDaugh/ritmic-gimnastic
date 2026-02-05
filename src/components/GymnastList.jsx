import React from "react";
import { gymnasts } from "../data/gymnasts";
// import './GymnastList.css';

function GymnastList() {
    return (
        <div className="card" >
            <h2>Список гимнасток</h2>
            <ul>
                {gymnasts.map(g => (
                    <li key={g.id}>
                        <img src={g.photo} alt={g.name} width={50} />
                        <strong>{g.name}</strong> - {g.age} лет, уровень: {g.level}, баллы: {g.score}
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default GymnastList