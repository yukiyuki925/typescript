import Button from "../components/Button/Button";
import Display from "../components/Display/Display";
import quizData from "../data/quiz";

export default function QuizPage() {
  const quizIndex = 0;
  const handleClick = (clickedIndex) => {
    console.log("clickedIndex:", clickedIndex);
  };
  return (
    <>
      <Display>{`Q1. ${quizData[quizIndex].question}`}</Display>
      {quizData[quizIndex].options.map((option, index) => {
        return (
          <Button key={`option-${index}`} onClick={() => handleClick(index)}>
            {option}
          </Button>
        );
      })}
    </>
  );
}
