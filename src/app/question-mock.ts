import { Question } from "./question";

export const QUESTIONS: Question[] = [
    {
        id: 1,
        question:  "Welche Abmessungen sehen die Spielregeln für die Spielfläche vor?",
        answers: [
            "40 x 20 Meter",
            "42 x 20 Meter",
            "38 x 18 Meter",
            "Länge zwischen 38 und 42, Breite zwischen 18 und 22 Metern."],
        correctAnswers: [0]
    }, 
    {
        id: 2,
        question:  "Welche Höhe und welche Breite (im Lichten) müssen die Tore haben?",
        answers: [
            "1,92 x 2,92 Meter",
            "2,00 x 3,00 Meter",
            "2,05 x 3,05 Meter",
            "2,08 x 3,08 Meter"],
        correctAnswers: [1]
    }
];