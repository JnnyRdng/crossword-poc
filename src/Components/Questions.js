export default function Questions({ questions, setDirection, starts }) {

    // console.log("num of qs across", questions.across.length)
    // console.log("num of qs down", questions.down.length)

    function Question({ q, dir }) {

        const handleClick = () => {
            // console.log(q.question)
            if (dir === "across") {
                setDirection("across");
            } else {
                setDirection("down");
            }
            document.getElementById(`cell_${starts[q.num]}`).focus();

        }
        return (
            <div onClick={() => handleClick()} style={{ marginTop: 4, textAlign: "start" }}>
                <span><span style={{ fontWeight: "bold" }}>{q.num}. </span>{q.question}</span>
            </div>
        );
    }

    const across = questions.across.sort((a, b) => a.num - b.num).map(q => <Question q={q} key={q.question} dir="across" />);
    const down = questions.down.sort((a, b) => a.num - b.num).map(q => <Question q={q} key={q.question} dir="down" />);

    return (
        <div style={{ height: 50 * 13, width: 300, overflowX: "scroll", overflowY: "none", padding: 10 }}>
            <h3>Across</h3>
            {across}
            <h3>Down</h3>
            {down}
        </div>
    )
}