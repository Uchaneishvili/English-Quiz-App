/** @format */

import React from "react";
import { useState } from "react";
import { Modal, Button, Row, Col } from "antd";
import styles from "./Quiz.module.css";
import { useSelector } from "react-redux";
import select from "../Audio/select.mp3";
import click from "../Audio/click.mp3";

function Quiz(props) {
  const play = () => {
    new Audio(select).play();
  };

  const clickSound = () => {
    new Audio(click).play();
  };
  const [showResult, setShowResult] = useState(false);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const activePlayer = useSelector((state) => state.activePlayer);

  const questions = [
    {
      question:
        "Which of the following is an example of a gerund phrase used as the subject of a sentence?",
      options: [
        "To win is everything.",
        "Winning is everything.",
        "He is a winner.",
        "I won the game.",
      ],
      answer: "Winning is everything.",
    },
    {
      question: 'Which of the following phrasal verbs means "to tolerate"?',
      options: [
        "Put up with",
        "Look forward to",
        "Get along with",
        "Turn down",
      ],
      answer: "Put up with",
    },
    {
      question:
        "Which of the following sentences uses the subjunctive mood correctly?",
      options: [
        "If I was you, I would take the job.",
        "If I were you, I would take the job.",
        "I wish I was taller.",
        "I wish I were taller.",
      ],
      answer: "If I were you, I would take the job.",
    },
    // {
    //   question: 'Which of the following is a synonym for the word "arduous"?',
    //   options: ["Easy", "Challenging", "Boring", "Simple"],
    //   answer: "Challenging",
    // },
    // {
    //   question:
    //     "Which of the following sentences uses a relative pronoun correctly?",
    //   options: [
    //     "The girl, who is my sister, is coming to visit.",
    //     "The girl, that is my sister, is coming to visit.",
    //     "The girl, whom is my sister, is coming to visit.",
    //     "The girl, whose my sister, is coming to visit.",
    //   ],
    //   answer: "The girl, who is my sister, is coming to visit.",
    // },
    // {
    //   question: 'Which of the following words is a homophone for "allowed"?',
    //   options: ["Aloud", "Allowed", "Alloud", "Alowd"],
    //   answer: "Aloud",
    // },
    // {
    //   question:
    //     "Which of the following sentences contains a misplaced modifier?",
    //   options: [
    //     "I saw the baby bird with the binoculars.",
    //     "The professor returned the research paper with a red pen.",
    //     "After the rain stopped, we went outside to play.",
    //     "Walking down the street, the flowers smelled lovely.",
    //   ],
    //   answer: "Walking down the street, the flowers smelled lovely.",
    // },
    // {
    //   question: "Which of the following is an example of an emphatic sentence?",
    //   options: [
    //     "Would you please pass the salt?",
    //     "Pass the salt!",
    //     "I wonder if you could pass the salt.",
    //     "Can you pass the salt?",
    //   ],
    //   answer: "Pass the salt!",
    // },
    // {
    //   question: "Which of the following sentences uses the passive voice?",
    //   options: [
    //     "The dog chased the cat.",
    //     "The cat was chased by the dog.",
    //     "The cat chased the dog.",
    //     "The dog was chased by the cat.",
    //   ],
    //   answer: "The cat was chased by the dog.",
    // },
    // {
    //   question: "Which of the following words is spelled incorrectly?",
    //   options: ["Supersede", "Acquaintance", "Concieve", "Embarrass"],
    //   answer: "Concieve",
    // },
    // {
    //   question:
    //     'Which of the following words is a synonym for the adjective "indignant"?',
    //   options: ["Happy", "Angry", "Confused", "Proud"],
    //   answer: "Angry",
    // },
    // {
    //   question:
    //     'Which of the following sentences uses the verb "to lay" correctly?',
    //   options: [
    //     "I am going to lay down for a nap.",
    //     "I laid on the beach for hours yesterday.",
    //     "He had laid the book on the table before leaving.",
    //     "The chicken had already laid its eggs.",
    //   ],
    //   answer: "He had laid the book on the table before leaving.",
    // },
    // {
    //   question:
    //     'Which of the following sentences uses the adverb "correctly" correctly?',
    //   options: [
    //     "I correctly answered all the questions on the quiz.",
    //     "I answered all the questions on the quiz correctly.",
    //     "I answered all the questions correctly on the quiz.",
    //     "All the questions on the quiz I answered correctly.",
    //   ],
    //   answer: "I answered all the questions on the quiz correctly.",
    // },
    // {
    //   question:
    //     'Which of the following words is an antonym for the adjective "abundant"?',
    //   options: ["Scarce", "Plentiful", "Ample", "Sufficient"],
    //   answer: "Scarce",
    // },
    // {
    //   question:
    //     'Which of the following sentences uses the preposition "between" correctly?',
    //   options: [
    //     "I am choosing between two different restaurants for dinner.",
    //     "The book is located in between the two shelves.",
    //     "He had to choose between drinking coffee or tea.",
    //     "I walked between the sidewalk and the street.",
    //   ],
    //   answer: "I am choosing between two different restaurants for dinner.",
    // },
    // {
    //   question:
    //     'Which of the following sentences uses the article "an" correctly?',
    //   options: [
    //     "She is a university student.",
    //     "An apple a day keeps the doctor away.",
    //     "The dog chased a squirrel up the tree.",
    //     "A elephant never forgets.",
    //   ],
    //   answer: "An apple a day keeps the doctor away.",
    // },
    // {
    //   question:
    //     'Which of the following words is a synonym for the adjective "perplexing"?',
    //   options: ["Confusing", "Clear", "Obvious", "Certain"],
    //   answer: "Confusing",
    // },
    // {
    //   question:
    //     'Which of the following sentences uses the verb "to rise" correctly?',
    //   options: [
    //     "I rose early this morning to go for a run.",
    //     "She had risen the cake in the oven for too long.",
    //     "The sun had rised over the horizon.",
    //     "He had to rise the flag for the ceremony.",
    //   ],
    //   answer: "I rose early this morning to go for a run.",
    // },
    // {
    //   question:
    //     "Which of the following sentences uses a participle phrase correctly?",
    //   options: [
    //     "The book, written by Jane Austen, is a classic.",
    //     "The movie, seen by millions, is a blockbuster hit.",
    //     "The music, listened to by everyone, is popular.",
    //     "The story, told by my friend, was interesting.",
    //   ],
    //   answer: "The book, written by Jane Austen, is a classic.",
    // },
    // {
    //   question:
    //     'Which of the following sentences uses the verb "to imply" correctly?',
    //   options: [
    //     "The news report implied that the storm would miss the city.",
    //     "He implied me to come to the party, but I couldn't make it.",
    //     "The teacher implied the students to study for the exam.",
    //     "She implied the book from the library last week.",
    //   ],
    //   answer: "The news report implied that the storm would miss the city.",
    // },
  ];

  const currentQuestion = questions[props.currentQuestionIndex];

  const handleNextQuestion = () => {
    if (currentQuestion.answer === selectedAnswer) {
      if (activePlayer === 1) {
        props.setOneScore(props.oneScore + 1);
      } else {
        props.setTwoScore(props.twoScore + 1);
      }
    }

    props.setCurrentQuestionIndex(props.currentQuestionIndex + 1);

    if (questions.length - 1 === props.currentQuestionIndex) {
      setShowResult(false);
    }
  };

  const handleShowResult = () => {
    if (props.currentQuestionIndex === questions.length - 1) {
      props.setEnabled(false);
    }
    props.setIsFinished(true);
    setShowResult(true);

    const currentQuestion = questions[props.currentQuestionIndex];
    if (currentQuestion.answer === selectedAnswer) {
      if (activePlayer === 1) {
        props.setOneScore(props.oneScore + 1);
      } else {
        props.setTwoScore(props.twoScore + 1);
      }
    }
  };

  const handleAnswerSelect = (answer) => {
    setSelectedAnswer(answer);
    clickSound();
  };

  const handleSubmitAnswer = () => {
    play();
    if (
      props.currentQuestionIndex !== 0 &&
      (props.currentQuestionIndex + 1) % 4 === 0
    ) {
      props.setEnabled(false);
    }

    handleNextQuestion();
  };
  return (
    <>
      <Modal
        open={props.enabled}
        closable={false}
        title={<h2>{!showResult && currentQuestion.question}</h2>}
        footer={
          <>
            {props.currentQuestionIndex < questions.length - 1 ? (
              <>
                <Button
                  type="primary"
                  disabled={!selectedAnswer}
                  onClick={handleSubmitAnswer}
                >
                  Submit Answer
                </Button>
              </>
            ) : (
              <div>
                {!showResult && (
                  <Button
                    type="primary"
                    disabled={!selectedAnswer}
                    onClick={handleShowResult}
                  >
                    Show Result
                  </Button>
                )}
              </div>
            )}
          </>
        }
      >
        {showResult ? (
          <div>
            <h2>
              <Row>
                <Col>
                  {props.fPlayerName}' score: {props.oneScore}/
                  {questions.length}
                </Col>
              </Row>

              <Row>
                <Col>
                  {props.sPlayerName}' score: {props.twoScore}/
                  {questions.length}
                </Col>
              </Row>
            </h2>
          </div>
        ) : (
          <div>
            <div className={styles.container}>
              {currentQuestion.options.map((option) => (
                <Button
                  className={styles.button}
                  key={option}
                  type={selectedAnswer === option ? "primary" : "default"}
                  onClick={() => handleAnswerSelect(option)}
                >
                  {option}
                </Button>
              ))}
            </div>
          </div>
        )}
      </Modal>
    </>
  );
}

export default Quiz;
