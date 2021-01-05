export default function Questions({ questions }) {

    console.log("num of qs across", questions.across.length)
    console.log("num of qs down", questions.down.length)

    function Question({ q }) {

        const handleClick = () => {
            console.log(q.question)
        }
        return (
            <div onClick={() => handleClick()}>
                <span><span style={{ fontWeight: "bold" }}>{q.num}. </span>{q.question}</span>
            </div>
        );
    }

    const across = questions.across.sort((a, b) => a.num - b.num).map(q => <Question q={q} key={q.question} />);
    const down = questions.down.sort((a, b) => a.num - b.num).map(q => <Question q={q} key={q.question} />);

    return (
        <div>
            <h3>Across</h3>
            {across}
            <h3>Down</h3>
            {down}
        </div>
    )
}