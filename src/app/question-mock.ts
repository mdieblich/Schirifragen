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
        correctAnswers: [0],
        ruleReferences: ["1:1"]
    },
    {
        id: 2,
        question:  "Welche Höhe und welche Breite (im Lichten) müssen die Tore haben?",
        answers: [
            "1,92 x 2,92 Meter",
            "2,00 x 3,00 Meter",
            "2,05 x 3,05 Meter",
            "2,08 x 3,08 Meter"],
        correctAnswers: [1],
        ruleReferences: ["1:2"]
    },
    {
        id: 3,
        question:  "Während der Ausführung eines Abwurfs berührt Torwart A seine Torraumlinie mit einem Fuß. Richtige Entscheidung?",
        answers: [
            "Wiederholung des Abwurfs mit Anpfiff",
            "Freiwurf für Mannschaft B",
            "Weiterspielen lassen"],
        correctAnswers: [2],
        ruleReferences: ["1:3", "12:2"]
    },
    {
        id: 4,
        question:  "Der Ball liegt auf der Torraumlinie. Angriffsspieler A7 nimmt ihn auf und will aus klarer Torgelegenheit auf das Tor werfen, als er regelwidrig angegriffen wird. Richtige Entscheidung?",
        answers: [
            "Freiwurf für Mannschaft B",
            "Freiwurf für Mannschaft A",
            "7-Meter Wurf für Mannschaft A",
            "Abwurf für Mannschaft B"],
        correctAnswers: [3],
        ruleReferences: ["1:3", "6:5", "12:1"]
    },
    {
        id: 5,
        question:  "Nach dem Anpfiff eines 7-Meter-Wurfs tritt Torwart A mit einem Fuß auf die Torwartgrenzlinie. Der Ball geht über das Tor. Richtige Entscheidung?",
        answers: [
            "Wiederholung mit Anpfiff",
            "Da kein Tor, Spielfortsetzung mit Abwurf",
            "Stellung des Torwarts war korrekt"],
        correctAnswers: [1,2],
        ruleReferences: ["1:3", "12:1", "14:9"]
    }

    
];