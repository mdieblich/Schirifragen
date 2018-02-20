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
    },
    {
        id: 6,
        question:  "Wie breit muss die Torlinie zwischen den Torpfosten sein?",
        answers: [
            " 5 cm",
            " 6 cm",
            " 8 cm",
            "10 cm"],
        correctAnswers: [2],
        ruleReferences: ["1:3"]
    },
    {
        id: 7,
        question:  "Kurz vor dem Schlusspfiff wird B2 an der Torraumlinie angespielt, setzt zum Torwurf an und wird dabei regelwidrig behindert. Bevor der Ball die Hand von B2 verlassen hat, ertönt das Schlusssignal. Richtige Entscheidung?",
        answers: [
            "Spiel ist beendet",
            "Freiwurf für B",
            "7-Meter-Wurf für B",
            "Spiel ist beendet; Vermerk im Spielprotokoll"],
        correctAnswers: [2],
        ruleReferences: ["2:4", "14.1a"]
    },
    {
        id: 8,
        question:  "Kurz vor Ende der 1. Halbzeit ist noch ein 7-Meter-Wurf auszuführen. Der von A9 ge-worfene Ball knallt gegen die Latte, von dort gegen den Rücken des ca. 3 Meter vor seinem Tor stehenden Torwarts und dann ins Tor. Der Pfiff des Zeitnehmers ertönte, als der Ball von der Latte in Richtung Torwartrücken flog. Wie ist zu entscheiden?",
        answers: [
            "Tor",
            "Wiederholung des 7-Meter-Wurfs",
            "Halbzeit beendet, keine weitere Entscheidung"],
        correctAnswers: [1],
        ruleReferences: ["2:4"]
    },
    {
        id: 9,
        question:  "Nach dem Schlusssignal ist noch ein 7-Meter-Wurf auszuführen. Das unmittelbare Ergebnis dieses Wurfs wird abgewartet. Welcher Schiedsrichter beendet das Spiel nun?",
        answers: [
            "Der Erstgenannte",
            "Einer von beiden",
            "Der Feldschiedsrichter",
            "Der Torschiedsrichter"],
        correctAnswers: [1],
        ruleReferences: ["2:4"]
    },
    {
        id: 10,
        question:  "Wann beginnt das Spiel?",
        answers: [
            "Mit dem Pfiff des erstgenannten Schiedsrichters",
            "Wenn der Ball die Hand des Werfers verlassen hat",
            "Wenn der Zeitnehmer die Stoppuhr startet oder die öffentliche Zeitmessanlage zu laufen be-ginnt",
            "Mit dem Anpfiff des Anwurfs durch den Feldschiedsrichter"],
        correctAnswers: [3],
        ruleReferences: ["2:3"]
    },
    {
        id: 11,
        question:  "Wer bestimmt bei einem 7-m-Werfen, auf welches Tor geworfen wird?",
        answers: [
            "Die Mannschaft, die das Losen gewinnt",
            "Die Mannschaft, die das Losen verliert",
            "Die Schiedsrichter",
            "Der erstgenannte Schiedsrichter"],
        correctAnswers: [2],
        ruleReferences: ["2:2, Kommentar"]
    }

    
];