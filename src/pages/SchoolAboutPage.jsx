import './SchoolAboutPage.css';
import '../styles/layout.css';

const SchoolAboutPage = () => {
    const rules = [
        'Безопасность и здоровье ребёнка — в приоритете',
        'Индивидуальный подход к каждой гимнастке',
        'Развитие дисциплины, уверенности и характера',
    ];
    return (
        <section className="container school-about">
        {/* Hero */}
            <div className="hero">
                <h1>RG School</h1>
                <p>Школа художественной гимнастики</p>
            </div>

            {/* About */}
            <div className="about">
                <h2>О школе</h2>
                <p>
                RG School — это пространство, где девочки развивают гибкость,
                координацию, силу и уверенность в себе под руководством
                профессиональных тренеров.
                </p>
            </div>

            {/* Rules */}
            <div className="rules">
                <h2>Наши принципы</h2>
                <ul>
                {rules.map((rule, index) => (
                    <li key={index}>{rule}</li>
                ))}
                </ul>
            </div>
        </section>
    );
}

export default SchoolAboutPage;