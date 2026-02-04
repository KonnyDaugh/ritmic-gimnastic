import React from "react";
import { schoolInfo } from "../data/school";

function CoachesList() {
    return (
        <div>
            <h2>Наши тренеры</h2>
            <ul>
                {schoolInfo.coaches.map(coach => (
                    <li key={coach.id} >
                        <strong>{coach.name}</strong> - опыт {coach.experience} лет
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default CoachesList;