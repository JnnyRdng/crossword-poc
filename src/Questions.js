import Question from "./Question.js";

export default function Questions({ questions }) {

    const across = questions.across.map(q => <Question question={q} key={q.question} />);
    const down = questions.down.map(q => <Question question={q} key={q.question} />);

    return (
        <div>
            <h3>Across</h3>
            {across}
            <h3>Down</h3>
            {down}
        </div>
    )
}