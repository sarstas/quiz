export interface Question {
    id?: number;
    question: string
    answers: string[];
    correct: number[];
    description: string;
}

export interface QuestionEdit {
    id: number;
    question: string;
    description?: string;
    answers: AnswerEdit[];
}

export interface AnswerEdit {
    answer: string;
    correct: boolean;
}

export function newAnswerEdit(): AnswerEdit {
    return {
        answer: '',
        correct: false
    }
}

export function toQuestionEdit(question: Question): QuestionEdit {
    return {
        id: question.id,
        question: question.question,
        description: question.description,
        answers: question.answers.map((answer, index) => {
            return {
                answer,
                correct: question.correct.includes(index)
            }
        })
    }
}

export function fromQuestionEdit(question: QuestionEdit): Question {
    return {
        description: question.description,
        question: question.question,
        answers: question.answers.map((answerGroup) => answerGroup.answer),
        correct: question.answers
        .map((answerGroup, index) => ({index, correct: answerGroup.correct}))
        .filter(({index, correct}) => correct)
        .map((data) => data.index),
    }
}

export function toQuestion(data: string[]): string[] {
    const question = data.filter((source) => source !== '')
    return question
}
