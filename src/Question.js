export default function Question({ question }) {

    const handleClick = () => {
        console.log(question.question)
    }
    return (
        <div onClick={() => handleClick()}>
            <span><span style={{ fontWeight: "bold" }}>{question.num}. </span>{question.question}</span>
        </div>
    );
}