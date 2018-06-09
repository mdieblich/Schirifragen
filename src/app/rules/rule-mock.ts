import { Rule } from "./rule";

// https://www.thorntech.com/2012/07/4-things-you-must-do-when-putting-html-in-json/

export const RULES: Rule[] = 
[
    {
        number: "1",
        caption: "Die Spielfläche",
        rulesections:
        [
            {
                paragraphs: 
                [
                    {
                        number: "1:1",
                        sections: 
                        [
                            `<u>Die Spielfläche<\/u> (Abb. 1) ist ein Rechteck von 40 m Länge und 20 m 
                             Breite und umfasst zwei Torräume (Regel 1:4 und Regel 6) und ein Spielfeld. 
                             Die Längsseiten heißen Seitelinien, die Breitseiten Torauslinien, zwischen
                             den Torpfosten jedoch Torlinien.`,
                            `Eine Sicherheitszone entlang der Spielfläche von mindestens 1 m neben 
                             den Seitenlinien und 2 m hinter den Torauslinien sollte gegeben sein.`,
                            `Die Beschaffenheit der Spielfläche darf im Spielverlauf nicht zugunsten 
                             einer Mannschaft verändert werden.`
                        ]
                    },
                    {
                        number: "1:2",
                        sections: 
                        [
                            `In der Mitte der beiden Torauslinien steht ein <u>Tor<\/u> (Abb. 2a und 2b). 
                             Die Tore müssen fest im Boden oder an den Wänden hinter ihnen verankert 
                             sein. Sie sind im Lichten 2 m hoch und 3m breit.`,
                            `Die Pfosten des Tores sind durch eine Querlatte fest verbunden. Ihre 
                             hintere Kante muss mit der hinteren Seite der Torlinie verlaufen. Torpfosten 
                             und Latte müssen quadratisch sein (8 cm). Sie müssen auf den drei vom 
                             Spielfeld einzusehenden Seiten mit zwei kontrastierenden Farben gestrichen
                             sein, die sich ebenfalls deutlich vom Hintergrund abheben sollen.`,
                            `Jedes Tor muss mit einem Netz versehen sein. Dieses muss so aufgehängt
                             werden, dass ein in das Tor geworfener Ball normalerweise im Tor verbleibt.`
                        ]
                    },
                    {
                        number: "1:3",
                        sections: 
                        [
                            `Alle <u>Linien<\/u> auf der Spielfläche sind integraler Bestandteil des 
                             Bereichs, den sie begrenzen. Die Torlinien zwischen den Torpfosten sind 8 
                             cm breit (Abb. 2a), alle andere Linien sind 5 cm breit.`,
                            `Zwei nebeneinander liegene Bereiche knnen anstatt durch Linien auch durch 
                             unterschiedliche Farben voneinander abgegrenzt werden.`
                        ]
                    },
                    {
                        number: "1:4",
                        sections: 
                        [
                            `Vor jedem Tor befindet sich der Torraum (Abb. 5). Der Torraum wird wie 
                             folgt von der <u>Torraumlinie<\/u> (6-m-Linie) begrenzt:`
                        ],
                        subparagraphs:
                        [
                            {
                                number: "1:4a",
                                content: `Vor dem Tor wird in 6 m Abstand parallel zur Torlinie eine 
                                          3 m lange linie gezogen (gemessen von der hinteren Kante 
                                          der Torlinie zur vorderen Kante der Torraumlinie).`
                            },
                            {
                                number: "1:4b",
                                content: `Zwei Viertelkreise von 6 m Halbmesser (gemessen von der 
                                          hinteren Innenkante der Torpfosten) verbinden die 3 m lange 
                                          Linie mit der Torauslinie (Abb. 1 und 2a).`
                            }
                        ]
                    },
                    {
                        number: "1:5",
                        sections: 
                        [
                            `Die <u>Freiwurflinie<\/u> (9-m-Linie) wird gestrichelt und in 3 m Abstand 
                             vor der Torraumlinie gezogen. Die Markierungen der freiwurflinie sowie die 
                             Zwischenräume messen 15 cm (Abb. 1).`
                        ]
                    },
                    {
                        number: "1:6",
                        sections: 
                        [
                            `Die <u>7-m-Linie<\/u> ist eine 1 m lange Linie vor dem Tor. Sie verläuft 
                             parallel zur Torlinie, gezogen in einem Abstand von 7 m, gemessen von der 
                             hinteren Kante der Torlinie zur vorderen Kante der 7-m-Linie (Abb. 1).`
                        ]
                    },
                    {
                        number: "1:7",
                        sections: 
                        [
                            "Die <u>Torwartegrenzlinie<\/u> (4-m-Linie) ist eine 15 cm lange Linie vor dem Tor. Sie verläuft parallel zur Torlinie, gezogen in einem Abstand von 4 m, gemessen von der hinteren Kante der Torlinie zur vorderen Kante der 4-m-Linie (Abb. 1)."
                        ]
                    },
                    {
                        number: "1:8",
                        sections: 
                        [
                            "Die <u>Mittellinie<\/u> verbindet die Halbierungspunkte der beiden Seitenlinien miteinander (Abb. 1 und 3)."
                        ]
                    },
                    {
                        number: "1:9",
                        sections: 
                        [
                            "Die <u>Auswechsellinie<\/u> (ein Teil der Seitenlinie) reicht für jede Mannschaft von der Mittellinie bis zu einem 4,5 m von der Mittellinie entfernten Endpunkt. Von diesem Endpunkt der Auswechsellinien wird parallel zur Mittellinie und beiderseits der Seitenlinie eine 15 cm lange Linie gezogen (Abb. 1 und 3)."
                        ],
                        note: "Detailierte technische Anforderungen für die Spielfläche und die Tore enthalten die \"Richtlinien für Spielflächen und Tore\"."
                    }
                ]
            }
        ]
    },
    {
        number: "2",
        caption: "Spielzeit, Schlusssignal, Time-out",
        rulesections:
        [
            {
                caption: "Spielzeit",
                paragraphs: 
                [
                    {
                        number: "2:1",
                        sections: 
                        [
                            "Die normale <u>Spielzeit<\/u> für alle Mannschaften mit Spielern ab 16 jahren und älter beträgt 2 x 30 Minuten; die Halbzeitpausen normalerweise 10 Minuten.",
                            "Die normale Spielzeit für Jugendmannschaften von 12-16 jahren beträgt 2 x 25 Minuten, für Jugendmannschaften von 8-12 Jahren 2 x 20 Minuten; die Halbzeitpausen normalerweise 10 Minuten."
                        ],
                        note: "IHF, Kontinentalverbände und nationale Verbände haben das Recht, für ihren Bereich abweichende Regelungen bezüglich der Halbzeitpause zu treffen. Die Halbzeitpause beträgt maximal 15 Minuten."
                    },
                    {
                        number: "2:2",
                        sections: 
                        [
                            "Ist ein Spiel nach Ablauf der regulären Spielzeit unentschieden und soll bis zur Entscheidung weitergespielt werden, erfolgt nach einer Pause von 5 Minuten eine <u>Verlängerung<\/u>. Die Verlängerung dauert 2 x 5 Minuten mit 1 Minute Halbzeitpause.",
                            "Ist das Spiel nach einer ersten Verlängerung noch nicht entschieden, erfolgt nach einer Pause von 5 Minuten eine zweite Verlängerung von 2 x 5 Minuten mit 1 Minute Halbzeitpause.",
                            "Fällt auch hier keine Entscheidung, ist der Gewinner im Einklang mit den Bestimmungen des betreffenden Wettbewerbs zu ermitteln. Ist die Entscheidung durch 7-m-Werfen herbeizuführen, gelten die Bestimmungen des folgenden Kommentars."
                        ],
                        comment: "Am 7-m Werfen dürfen hinausgestellte oder disqualifizierte Spieler nicht teilnehmen (beachte auch Regel 4:1 Abs. 4). Jede Mannschaft benennt 5 Spieler. Diese Spieler führen im Wechsel mit der anderen Mannschaft je einen Wurf aus. Die Reihenfolge der Werfer ist den Mannschaften freigestellt. Die Torwarte können frei gewählt und gegen einen anderen zur Teilnahme berechtigten Spielern ausgewechselt werden. Spieler dürfen sowohl als Werfer als auch als Torwart eingesetzt werden. <br> Die Schiedsrichter bestimmen das Tor, auf das geworfen wird. Die Mannschaft, die das Losen gewinnt, entscheidet, ob sie oder die andere Mannschaft mit dem Werfen beginnt. Bei Gleichstand nach dem ersten Durchgang beginnt die andere Mannschaft mit der Fortsetzung des 7-m-Werfens. <br> Für diese Fortsetzung benennt jede Mannschaft wiederum 5 Spieler. Hierbei dürfen dieselben Spieler wie beim ersten Durchgang benannt werden, auch ein Wechsel einzelner oder aller Spieler ist möglich. Diese Regelung ist bis zur endgültigen Entscheidung anzuwenden. Ein Sieger steht jedoch bereits fest, wenn eine Mannschaft nach einem Wurfwechsel in Führung liegt. <br> Spieler können von der weiteren Teilnahme wegen besonderer oder wiederholter Unsportlichkeit disqualifiziert werden (16:6e). Handelt es sich hierbei um einen der 5 benannten Spieler, kann die Mannschaft einen anderen Spieler benennen."
                    },
                ]
            }
        ]
        
    }
];