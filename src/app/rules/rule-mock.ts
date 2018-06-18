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
                            `Die <u>Torwartegrenzlinie<\/u> (4-m-Linie) ist eine 15 cm lange Linie vor
                             dem Tor. Sie verläuft parallel zur Torlinie, gezogen in einem Abstand von 
                             4 m, gemessen von der hinteren Kante der Torlinie zur vorderen Kante der 
                             4-m-Linie (Abb. 1).`
                        ]
                    },
                    {
                        number: "1:8",
                        sections: 
                        [
                            `Die <u>Mittellinie<\/u> verbindet die Halbierungspunkte der beiden 
                             Seitenlinien miteinander (Abb. 1 und 3).`
                        ]
                    },
                    {
                        number: "1:9",
                        sections: 
                        [
                            `Die <u>Auswechsellinie<\/u> (ein Teil der Seitenlinie) reicht für jede 
                             Mannschaft von der Mittellinie bis zu einem 4,5 m von der Mittellinie 
                             entfernten Endpunkt. Von diesem Endpunkt der Auswechsellinien wird 
                             parallel zur Mittellinie und beiderseits der Seitenlinie eine 15 cm lange 
                             Linie gezogen (Abb. 1 und 3).`
                        ],
                        note: `Detailierte technische Anforderungen für die Spielfläche und die Tore 
                               enthalten die \"Richtlinien für Spielflächen und Tore\".`
                    }
                ]
            } // rulesections
        ]
    },  // rule 1
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
                            `Die normale <u>Spielzeit<\/u> für alle Mannschaften mit Spielern ab 16 
                             jahren und älter beträgt 2 x 30 Minuten; die Halbzeitpausen normalerweise 
                             10 Minuten.`,
                            `Die normale Spielzeit für Jugendmannschaften von 12-16 jahren beträgt 
                             2 x 25 Minuten, für Jugendmannschaften von 8-12 Jahren 2 x 20 Minuten; 
                             die Halbzeitpausen normalerweise 10 Minuten.`
                        ],
                        note: `IHF, Kontinentalverbände und nationale Verbände haben das Recht, für 
                               ihren Bereich abweichende Regelungen bezüglich der Halbzeitpause zu 
                               treffen. Die Halbzeitpause beträgt maximal 15 Minuten.`
                    },
                    {
                        number: "2:2",
                        sections: 
                        [
                            `Ist ein Spiel nach Ablauf der regulären Spielzeit unentschieden und soll
                             bis zur Entscheidung weitergespielt werden, erfolgt nach einer Pause von
                            5 Minuten eine <u>Verlängerung<\/u>. Die Verlängerung dauert 2 x 5 
                             Minuten mit 1 Minute Halbzeitpause.`,
                            `Ist das Spiel nach einer ersten Verlängerung noch nicht entschieden, 
                             erfolgt nach einer Pause von 5 Minuten eine zweite Verlängerung von 2 x 5
                              Minuten mit 1 Minute Halbzeitpause.`,
                            `Fällt auch hier keine Entscheidung, ist der Gewinner im Einklang mit den 
                             Bestimmungen des betreffenden Wettbewerbs zu ermitteln. Ist die Entscheidung 
                            durch 7-m-Werfen herbeizuführen, gelten die Bestimmungen des folgenden 
                             Kommentars.`
                        ],
                        comment: 
                            `Am 7-m Werfen dürfen hinausgestellte oder disqualifizierte Spieler nicht 
                             teilnehmen (beachte auch Regel 4:1 Abs. 4). Jede Mannschaft benennt 5 
                             Spieler. Diese Spieler führen im Wechsel mit der anderen Mannschaft je einen
                             Wurf aus. Die Reihenfolge der Werfer ist den Mannschaften freigestellt. Die
                             Torwarte können frei gewählt und gegen einen anderen zur Teilnahme 
                             berechtigten Spielern ausgewechselt werden. Spieler dürfen sowohl als Werfer
                             als auch als Torwart eingesetzt werden. <br> Die Schiedsrichter bestimmen das
                             Tor, auf das geworfen wird. Die Mannschaft, die das Losen gewinnt, 
                             entscheidet, ob sie oder die andere Mannschaft mit dem Werfen beginnt. Bei 
                             Gleichstand nach dem ersten Durchgang beginnt die andere Mannschaft mit der 
                             Fortsetzung des 7-m-Werfens. <br> Für diese Fortsetzung benennt jede 
                             Mannschaft wiederum 5 Spieler. Hierbei dürfen dieselben Spieler wie beim 
                             ersten Durchgang benannt werden, auch ein Wechsel einzelner oder aller 
                             Spieler ist möglich. Diese Regelung ist bis zur endgültigen Entscheidung 
                             anzuwenden. Ein Sieger steht jedoch bereits fest, wenn eine Mannschaft nach 
                             einem Wurfwechsel in Führung liegt. <br> Spieler können von der weiteren 
                             Teilnahme wegen besonderer oder wiederholter Unsportlichkeit disqualifiziert 
                             werden (16:6e). Handelt es sich hierbei um einen der 5 benannten Spieler, 
                             kann die Mannschaft einen anderen Spieler benennen.`
                    },
                ]
            },  // rulesection Spielzeit
            {
                caption: "Schlusssignal",
                paragraphs: 
                [
                    {
                        number: "2:3",
                        sections: 
                        [
                            `Die Spielzeit beginnt mit dem Anpfiff des Anwurfs durch einen Schiedsrichter und endet mit dem automatischen
                            <u>Schlusssignal<\/u> der öffentlichen Zeitmessanlage oder dem Schlusssignal des Zeitnehmers. Ertönt kein derartiges
                            Signal, pfeift der Schiedsrichter,<u><b>der Zeitnehmer oder der Delegierte<\/b><\/u>, um anzuzeigen, dass die Spielzeit abgelaufen ist (17:9).`
                            
                        ],
                        comment: `Sollte keine öffentliche Zeitmessanlage mit automatischem Schlusssignal vorhanden sein, bedient sich der Zeitnehmer
                        einer Tisch- oder Handstoppuhr und beendet das Spiel mit dem Schlusssignal (18:2, Absatz 2).`
                    },
                    {
                        number: "2:4",
                        sections: 
                        [
                            `Regelwidrigkeiten und unsportliches Verhalten vor oder mit dem Ertönen des Schlusssignals (bei Halbzeit- oder Spielende
                                bzw. zum Ende der Halbzeiten einer Verlängerung) sind zu ahnden, auch wenn die Ausführung des Freiwurfs (nach Regel
                                13:1) oder 7-m-Wurfs nicht vor dem Schlusssignal erfolgen kann.`,
                            `Ertönt das Schlusssignal, wenn ein Frei- oder 7-m-Wurf noch auszuführen ist oder der Ball sich nach einem solchen Wurf
                            noch in der Luft befindet, ist dieser Wurf ebenfalls zu wiederholen.`,
                            `In beiden Fällen beenden die Schiedsrichter das Spiel erst, wenn der Freiwurf oder 7-m-Wurf ausgeführt oder wiederholt
                            wurde und das Ergebnis dieses Wurfes feststeht.`
                        ]
                    },
                    {
                        number: "2:5",
                        sections: 
                        [
                            `Für Freiwurfausführungen (oder -wiederholungen) nach Regel 2:4 gelten besondere Anweisungen bezüglich
                             der Aufstellung der Spieler und des Spielerwechsels. Abweichend von dem normalen Spielerwechsel gemäß
                             Regel 4:4 darf die angreifende Mannschaft einen Spieler auswechseln, ebenso darf die abwehrende Mannschaft
                             einen Feldspieler gegen einen Torwart auswechseln, wenn sie beim Ertönen des Schlusssignals ohne Torwart
                             spielt. Verstöße sind entsprechend Regel 4:5 Abs. 1 zu ahnden. Die Mitspieler des Werfers müssen sich 
                             mindestens drei Meter von ihm entfernt und nicht zwischen Torraum- und Freiwurflinie der anderen Mannschaft 
                             aufhalten (13:7, 15:6, siehe auch Erläuterung 1). Für die Spieler der abwehrenden Mannschaft gilt Regel 13:8.`
                        ]
                    },
                    {
                        number: "2:6",
                        sections: 
                        [
                            `Unter den in den Regeln 2:4-5 beschriebenen Umständen können gegen Spieler und Mannschaftsoffizielle für 
                             Regelwidrigkeiten und unsportliches Verhalten bei der Ausführung eines Freiwurfs oder 7-m-Wurfs <u>persönliche 
                             Bestrafungen<\/u> ausgesprochen werden. Eine Regelwidrigkeit bei der Ausführung eines derartigen Wurfs kann 
                             jedoch keinen Freiwurf in die andere Richtung nach sich ziehen.`
                        ]
                    },
                    {
                        number: "2:7",
                        sections: 
                        [
                            `Stellen die Schiedsrichter fest, dass der Zeitnehmer das Spiel zu früh mit dem Schlusssignal (Halbzeit, 
                             Ende des Spiels oder der Verlängerungen) beendet hat, sind sie verpflichtet, die Spieler auf der Spielfläche
                             zu behalten und die verbleibende Spielzeit nachspielen zu lassen.`,
                            `Bei der Wiederaufnahme des Spiels bleibt die Mannschaft in Ballbesitz, welche zum Zeitpunkt des zu früh 
                             ertönten Signals im Ballbesitz gewesen ist. War der Ball nicht im Spiel, wird das Spiel mit dem der 
                             Spielsituation entsprechenden Wurf fortgesetzt, andernfalls laut Regel 13:4a-b mit Freiwurf.`,
                            `Ist die 1. Halbzeit eines Spiels (oder einer Verlängerung) zu spät beendet worden, muss die 2. Halbzeit um 
                             die entsprechende Zeit verkürzt werden. Ist die 2. Halbzeit eines Spiels (oder einer Verlängerung) zu spät 
                             beendet worden, können die Schiedsrichter nichts mehr an der Situation ändern.`
                        ]
                    },
                ]
            },  // rulesection Schlusssignal
            {
                caption: "Time-out",
                paragraphs: 
                [
                    {
                        number: "2:8",
                        sections: 
                        [
                            `Die Schiedsrichter entscheiden, wann und wie lange die Spielzeit unterbrochen wird (\"Time-out\").`,
                            `In folgenden Situationen ist ein Time-out verbindlich:`
                        ],
                        subparagraphs:
                        [
                            {
                                number: "2:8a",
                                content: `Hinausstellung, Disqualifikation`
                            },
                            {
                                number: "2:8b",
                                content: `Team-Time-Out`
                            },
                            {
                                number: "2:8c",
                                content: `Pfiff vom Zeitnehmer oder Delegierten`
                            },
                            {
                                number: "2:8c",
                                content: `notwendige Rücksprache zwischen den Schiedsrichtern entsprechend Regel 17:7.`
                            }
                        ],
                        postsections:
                        [
                            `Entsprechend den Umständen wird ein Time-out normalerweise auch in bestimmten anderen Situationen gewährt (Erläuterung 2).`,
                            `Regelwidrigkeiten während eines Time-out haben die gleichen Folgen wie Regelwidrigkeiten während der Spielzeit (16:10).`
                        ]
                    },
                    {
                        number: "2:9",
                        sections: 
                        [
                            `Bei einem Time-out entscheiden grundsätzlich die Schiedsrichter, wann die Uhr anzuhalten und wieder in Gang zu setzen ist.`,
                            `Die Spielzeitunterbrechung ist dem Zeitnehmer durch drei kurze Pfiffe und Handzeichen 15 anzuzeigen.`,
                            `Erfolgt die Spielunterbrechung jedoch durch Signal des Zeitnehmers oder Delegierten (2:8b-c), muss der Zeitnehmer die
                             Uhr sofort, ohne Bestätigung durch die Schiedsrichter, anhalten.`,
                            `Nach einem Time-out (15:5b) muss das Spiel durch Anpfiff wiederaufgenommen werden.`
                        ],
                        comment:
                            `Ein Signal des Zeitnehmers/Delegierten unterbricht das Spiel. Auch wenn die Schiedsrichter
                            (und die Spieler) nicht sofort wahrnehmen, dass das Spiel unterbrochen ist, ist jede Handlung
                            auf der Spielfläche nach dem Signal ungültig, also auch ein nach dem Signal gefallenes Tor.
                            Ebenso ist eine Wurfentscheidung für eine Mannschaft (7-m-Wurf, Freiwurf, Einwurf, Anwurf
                            oder Abwurf) ungültig. Das Spiel ist entsprechend der zum Zeitpunkt des Signals gegebenen
                            Situation wieder aufzunehmen. Hauptgründe für ein Signal des Zeitnehmers/Delegierten sind
                            ein beantragtes Team-Time-out oder ein Wechselfehler.<br>
                            Persönliche Strafen, die die Schiedsrichter zwischen dem Signal des Zeitnehmers/Delegierten
                            und der Wahrnehmung ausgesprochen haben, bleiben gültig, unabhängig von der Art des
                            Vergehens und der Art der Strafe.`
                    },
                    {
                        number: "2:10",
                        sections: 
                        [
                            `Jede Mannschaft hat pro Halbzeit (ausgenommen Verlängerungen) Anspruch auf ein
                             Team-Time-out von einer Minute Länge (Erläuterung 3).`
                        ],
                        note:
                            `IHF, Kontinentalverbände und nationale Verbände haben das Recht, für ihren Bereich
                            abweichende Regelungen bezüglich der Anzahl der Team-Time-outs zu treffen, wobei jede
                            Mannschaft pro Spiel (ausgenommen Verlängerungen) Anspruch auf drei Team-Time-outs
                            von jeweils einer Minute hat aber pro Halbzeit nur 2 möglich sind (siehe Hinweis in
                            Erläuterung 3).`
                    },
                ]
            }   // rulesection Time-out
        ]   
    },   // rule 2
    {
        number: "3",
        caption: "Der Ball",
        rulesections:
        [
            {
                paragraphs: 
                [
                    {
                        number: "3:1",
                        sections: 
                        [
                            `Der Ball besteht aus einer Leder- oder Kunststoffhülle. Er muss rund sein. Das
                             Außenmaterial darf nicht glänzend oder glatt sein (17:3).`
                        ]
                    },
                    {
                        number: "3:2",
                        sections: 
                        [
                            `Die einzelnen Mannschaftskategorien müssen folgende Ballgrößen, d.h. Umfang und
                             Gewicht verwenden:
                             <ul>
                             <li>58-60 cm und 425-475 g (IHF-Größe 3) für Männer und männliche Jugend (16 Jahre und älter);<\/li>
                             <li>54-56 cm und 325-375 g (IHF-Größe 2) für Frauen, weibliche Jugend (14 Jahre und älter) und männliche Jugend (12 bis 16 Jahre);<\/li>
                             <li>50-52 cm und 290-330 g (IHF-Größe 1) für weibliche Jugend (8 bis 14 Jahre) und männliche Jugend (8 bis 12 Jahre).<\/li>
                             <\/ul>`
                        ],
                        comment: 
                            `Das „IHF-Ballreglement“ umfasst die technischen Anforderungen für Bälle, die bei allen
                             offiziellen internationalen Spielen eingesetzt werden.<br>
                             Diese Spielregeln beinhalten nicht Größe und Gewicht von Bällen für den „Mini-Handball“.`
                    },
                    {
                        number: "3:3",
                        sections: 
                        [
                            `Bei jedem Spiel müssen mindestens zwei Bälle vorhanden sein. Die Reservebälle
                             müssen während des Spielverlaufs beim Zeitnehmertisch unmittelbar verfügbar sein.
                             Die Bälle müssen den Regeln 3:1-2 entsprechen.`
                        ]
                    },
                    {
                        number: "3:4",
                        sections: 
                        [
                            `Die Schiedsrichter entscheiden, wann ein Reserveball eingesetzt wird. In diesem Fall
                             sollten sie den Reserveball zügig ins Spiel bringen, um eine Unterbrechung so kurz wie
                             möglich zu halten und ein Time-out zu vermeiden.`
                        ]
                    },
                ]
            }   // rulesection
        ]
    },   // rule 3
    {
        number: "4",
        caption: "Mannschaften, Spielerwechsel, Ausrüstung, Spielerverletzung",
        rulesections:
        [
            {
                caption: "Mannschaft",
                paragraphs: 
                [
                    {
                        number: "4:1",
                        sections: 
                        [
                            `Eine Mannschaft besteht aus bis zu 14 Spielern.
                             Auf der Spielfläche dürfen sich gleichzeitig höchstens 7 Spieler befinden. Die übrigen
                             Spieler sind Auswechselspieler.`,
                            `Ein Spieler, der als Torwart gekennzeichnet ist, kann jederzeit die Position als
                             Feldspieler einnehmen (beachte jedoch Regel 8:5 Kommentar Absatz 2). Ebenso kann
                             ein als Torwart gekennzeichneter Feldspieler jederzeit die Position des Torwarts
                             einnehmen (beachte Regeln 4:4 und 4:7).`,
                            `Spielt eine Mannschaft ohne Torwart, dürfen sich auf der Spielfläche gleichzeitig
                             höchstens 7 Feldspieler befinden (beachte Regeln 4:7, 6:1, 6:2c, 6:3, 8:7f, 14:1a).`,
                            `Für den Wechsel zwischen Torwart und Feldspieler gelten die Regeln 4:4-4:7.`,
                            `Zu Spielbeginn müssen wenigstens 5 Spieler auf der Spielfläche antreten.
                             Die Anzahl der Spieler einer Mannschaft darf im Spielverlauf - einschließlich der
                             Verlängerungen - jederzeit auf bis zu 14 Spieler ergänzt werden.
                             Sinkt die Anzahl der Spieler einer Mannschaft auf der Spielfläche unter 5, kann
                             weitergespielt werden. Es liegt im Ermessen des Schiedsrichters, ob und wann ein Spiel
                             abzubrechen ist (17:12).`
                        ],
                        note: 
                            `IHF, Kontinentalverbände und nationale Verbände haben das Recht, für ihren Bereich
                             abweichende Regelungen bezüglich der Anzahl von Spielern zu treffen. Die maximale Anzahl
                             von 16 Spielern darf dabei nicht überschritten werden.`
                    },
                    {
                        number: "4:2",
                        sections:
                        [
                            `Eine Mannschaft darf im Spielverlauf höchstens 4 Mannschaftsoffizielle einsetzen.
                             Diese dürfen während des Spiels nicht ausgewechselt werden. Einer von ihnen ist als
                             \"Mannschaftsverantwortlicher\" zu bezeichnen. Nur er ist berechtigt,
                             Zeitnehmer/Sekretär und eventuell die Schiedsrichter anzusprechen (ausgenommen
                             Erläuterung 3).`,
                             `Im Allgemeinen ist ein Mannschaftsoffizieller nicht berechtigt, während des Spiels die
                              Spielfläche zu betreten. Ein Verstoß gegen diese Regel ist als unsportliches Verhalten
                              zu ahnden (8:7-10, 16:1b, 16:3e-g und 16:6c). Das Spiel wird mit einem Freiwurf für
                              die gegnerische Mannschaft fortgesetzt (13:1a-b; Erläuterung 7).`,
                            `Der Mannschaftsverantwortliche ist dafür verantwortlich, dass sich ab Spielbeginn im
                             Auswechselraum keine anderen Personen als die eingetragenen Offiziellen (max. 4) und
                             die teilnahmeberechtigten Spieler (4:3) befinden. Ebenso ist er für die Einhaltung des
                             Auswechselraum-Reglements verantwortlich. Bei Verstößen ist er progressiv zu
                             bestrafen (16:1b, 16:3e und 16:6c).`
                        ]
                    },
                    {
                        number: "4:3",
                        sections:
                        [
                            `Ein Spieler oder Mannschaftsoffizieller ist <u>teilnahmeberechtigt<\/u>, wenn er beim Anpfiff
                            anwesend und im Spielprotokoll eingetragen ist.`,
                            `Nach Spielbeginn eintreffende Spieler/Mannschaftsoffizielle müssen vom
                             Zeitnehmer/Sekretär in das Spielprotokoll eingetragen werden und erhalten damit die
                             Teilnahmeberechtigung.`,
                            `Ein teilnahmeberechtigter Spieler kann die Spielfläche jederzeit über seine eigene
                             Auswechsellinie betreten (beachte 4:4 und 4:6).
                             Der Mannschaftsverantwortliche ist dafür verantwortlich, dass nur teilnahmeberechtigte
                             Spieler die Spielfläche betreten. Andernfalls ist er wegen unsportlichen Verhaltens zu
                             bestrafen (13:1a-b, 16:1b, 16:3d, 16:6c, Erläuterung 7).`
                        ]
                    }
                ]
            },   // rulesection Mannschaft
            {
                caption: "Spielerwechsel",
                paragraphs:
                [
                    {
                        number: "4:4",
                        sections:
                        [
                            `Auswechselspieler dürfen während des Spiels jederzeit und wiederholt (siehe jedoch
                             Regel 2:5 und Regel 4:11), ohne Meldung beim Zeitnehmer/Sekretär, eingesetzt
                             werden, sofern die zu ersetzenden Spieler die Spielfläche verlassen haben (4:5).`,
                            `Das Ein- und Auswechseln von Spielern darf nur über die eigene Auswechsellinie
                             erfolgen (4:5). Dies gilt auch für den Torwartwechsel (4:7 und 14:10).
                             Die Auswechselregeln gelten auch bei Time-out (ausgenommen Team-Time-out).`
                        ],
                        comment:
                            `Sinn der Auswechsellinie ist es, ein korrektes Auswechseln sicherzustellen, nicht aber, Spieler
                             zu bestrafen, die die Seiten- oder die Torauslinie ohne Vorteilsabsicht überschreiten (z.B. um
                             Wasser oder das Handtuch direkt neben der Auswechsellinie zu holen oder die Spielfläche
                             nach einer Hinausstellung auf sportliche Weise außerhalb der eigenen
                             Auswechselraummarkierung zu verlassen). Taktisches und nicht erlaubtes Verlassen wird in
                             Regel 7:10 behandelt.`
                    },
                    {
                        number: "4:5",
                        sections:
                        [
                            `Ein Wechselfehler ist mit einer Hinausstellung für den fehlbaren Spieler zu ahnden.
                             Begehen mehrere Spieler einer Mannschaft in der gleichen Situation einen
                             Wechselfehler, so ist nur der erste Spieler, welcher eine Regelwidrigkeit begeht, zu
                             bestrafen.`,
                            `Das Spiel wird mit Freiwurf für die gegnerische Mannschaft fortgesetzt (13:1a-b; Erläuterung 7).`
                        ]
                    },
                    {
                        number: "4:6",
                        sections:
                        [
                            `Betritt ein <u>zusätzlicher<\/u> Spieler die Spielfläche ohne Auswechselung oder greift ein
                             Spieler unberechtigt vom Auswechselraum aus in das Spielgeschehen ein, erhält dieser
                             Spieler eine Hinausstellung. Die Mannschaft muss für die folgenden 2 Minuten um
                             einen Spieler auf der Spielfläche reduziert werden (abgesehen davon, dass der
                             zusätzliche Spieler die Spielfläche verlassen muss).`,
                            `Betritt ein hinausgestellter Spieler <u>während seiner Hinausstellungszeit<\/u> die Spielfläche,
                             erhält er erneut eine Hinausstellung, die sofort beginnt, und die Mannschaft muss für die
                             Restzeit der ersten Hinausstellung auf der Spielfläche um einen weiteren Spieler
                             reduziert werden.`,
                            `Das Spiel wird in beiden Fällen mit einem Freiwurf für die gegnerische Mannschaft
                             fortgesetzt (13:1a-b; Erläuterung 7).`
                        ]
                    }
                ]
            },   // rulesection Spielerwechsel
            {
                caption: "Ausrüstung",
                paragraphs:
                [
                    {
                        number: "4:7",
                        sections:
                        [
                            `Alle Feldspieler einer Mannschaft müssen einheitliche Spielkleidung tragen. Die
                             Kombinationen von Farbe und Design der beiden Mannschaften müssen sich deutlich
                             voneinander unterscheiden. Alle als Torwart eingesetzten Spieler einer Mannschaft
                             müssen eine identische Farbe tragen, die sich von den Farben der Feldspieler beider
                             Mannschaften und der Torwarte der anderen Mannschaft deutlich unterscheidet (17:3).`
                        ]
                    },
                    {
                        number: "4:8",
                        sections:
                        [
                            `Die Spieler müssen auf der Trikotrückseite mindestens 20 cm und auf der
                             Trikotvorderseite mindestens 10 cm hohe sichtbare Nummern haben. Dabei muss es
                             sich um Nummern von 1 bis 99 handeln. Spieler, die zwischen Feldspieler und
                             Torwartposition wechseln, müssen die gleiche Nummer benutzen.`,
                            `Die Farbe der Nummern muss sich deutlich von Farbe und Design der Spielkleidung abheben.`
                        ]
                    },
                    {
                        number: "4:9",
                        sections:
                        [
                            `Die Spieler müssen Sportschuhe tragen.`,
                            `Das Tragen von Gegenständen, welche die Spieler gefährden könnten oder mit denen
                             sich Spieler einen unrechtmäßigen Vorteil verschaffen, ist nicht erlaubt. Dies betrifft
                             z.B. Kopfschutz, Gesichtsmaske, Handschuhe, Armbänder, Armbanduhren, Ringe,
                             sichtbares Piercing, Halsketten oder Ketten, Ohrschmuck, Brillen ohne Haltebänder
                             oder mit festen Gestellen sowie alle anderen Gegenstände, welche eine Gefährdung
                             darstellen könnten (17:3).`,
                            `Spieler, die solche gefährlichen Gegenstände tragen / an sich haben, dürfen nicht
                             mitspielen, bis der Mangel behoben ist.`,
                            `Flache Ringe, kleine Ohrringe und Piercing sind erlaubt, wenn sie abgedeckt sind und
                             Spieler nicht gefährden. Das Tragen von Stirnbändern, Kopftüchern und
                             Kapitänsbinden aus weichem, elastischem Material ist erlaubt.`,
                            `Der Mannschaftsverantwortliche bestätigt mit seiner Unterschrift auf dem Spielbericht /
                             der Spielermeldung vor dem Spiel die ordnungsgemäße Ausrüstung aller Spieler.
                             Stellen die Schiedsrichter nach Spielbeginn trotzdem eine unkorrekte Ausrüstung (nach
                             Regel 4:9) fest, wird der Mannschaftsverantwortliche progressiv bestraft und der
                             entsprechende Spieler muss die Spielfläche verlassen, bis der Mangel behoben ist.`,
                            `In Zweifelsfällen zeigt der Mannschaftsverantwortliche nicht eindeutig erlaubte
                             Ausrüstungsgegenstände vor dem Spiel den Schiedsrichtern oder dem Delegierten an
                             (siehe auch Guidelines Anhang 2).`
                        ]
                    }
                ]
            },   // rulesection Ausrüstung
            {
                caption: "Spielerverletzung",
                paragraphs:
                [
                    {
                        number: "4:10",
                        sections:
                        [
                            `Blutet ein Spieler oder hat ein Spieler Blut am Körper oder an der Spielkleidung, muss
                             er die Spielfläche umgehend und von sich aus (durch eine reguläre Auswechselung)
                             verlassen, um die Blutung zu stoppen, die Wunde abzudecken und Körper und
                             Spielkleidung zu reinigen. Erst dann darf er die Spielfläche wieder betreten.`,
                            `Ein Spieler, welcher im Zusammenhang mit dieser Bestimmung den Anweisungen der
                             Schiedsrichter nicht Folge leistet, macht sich unsportlichen Verhaltens schuldig (8:7,
                             16:1b und 16:3d).`
                        ]
                    },
                    {
                        number: "4:11",
                        sections:
                        [
                            `Im Falle einer Verletzung können die Schiedsrichter zwei teilnahmeberechtigten
                             Personen der betreffenden Mannschaft (siehe 4:3) bei Time-out die Erlaubnis erteilen,
                             die Spielfläche zu betreten (Handzeichen 15 und 16), um den verletzten Spieler zu
                             versorgen.`,
                            `Nachdem ein Spieler auf der Spielfläche versorgt wurde, muss er diese umgehend
                             verlassen. Er darf die Spielfläche erst nach Abschluss des dritten Angriffs seiner
                             Mannschaft wieder betreten (Verfahren und Ausnahmen siehe Erläuterung 8).`,
                            `Der Spieler kann unabhängig von der Anzahl der gezählten Angriffe bei
                             Wiederaufnahme des Spiels nach einer Spielhälfte wieder eingesetzt werden. Betritt
                             dieser Spieler die Spielfläche vorher, wird er nach Regel 4:4-4:6 bestraft.`
                        ],
                        note: `Nur nationale Verbände haben das Recht, in Jugend-Spielklassen die Bestimmungen von Regel 4:11, Abs.2, auszusetzen.`,
                        postsections:
                        [
                            `Wenn eine dritte oder weitere Personen sowie Personen der nicht betroffenen
                             Mannschaft die Spielfläche betreten, ist dies im Falle von Spielern nach Regel 4:6 und
                             16:3a und im Falle von Offiziellen nach Regel 4:2, 16:1b, 16:3d und 16:6c als
                             unberechtigtes Eintreten zu ahnden. Wer die Spielfläche gemäß Regel 4:11 Abs. 1 mit
                             Erlaubnis betritt, aber, anstatt den verletzten Spieler zu versorgen, Anweisungen an
                             andere Spieler gibt, sich mit Gegnern oder Schiedsrichtern beschäftigt usw., ist wegen
                             unsportlichen Verhaltens zu bestrafen (16:1b, 16:3d und 16:6c).`
                        ]
                    }
                ]
            }   // rulesection Spielerverletzung
        ]
    },   // rule 4
    {
        number: "5",
        caption: "Der Torwart",
        rulesections:
        [
            {
                note: "Es ist dem Torwart <b>erlaubt<\/b>:",
                paragraphs: 
                [
                    {
                        number: "5:1",
                        sections: 
                        [
                            `bei der Abwehr im Torraum den Ball mit allen Körperteilen zu berühren;`
                        ]
                    },
                ]
            }   // rulesection  erlaubt
        ]
    }   // rule 5
];