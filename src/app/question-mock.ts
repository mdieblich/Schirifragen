import { Question } from "./question";

export const QUESTIONS: Question[] =
[
	{
		id: 1,
		text: "Welche Abmessungen sehen die Spielregeln für die Spielfläche vor?",
		answers: [
			"40 x 20 Meter",
			"42 x 20 Meter",
			"38 x 18 Meter",
			"Länge zwischen 38 und 42, Breite zwischen 18 und 22 Metern."
		],
		correctAnswers: [0],
		ruleReferences: ["1:1"]
	},
	{
		id: 2,
		text: "Welche Höhe und welche Breite (im Lichten) müssen die Tore haben?",
		answers: [
			"1,92 x 2,92 Meter",
			"2,00 x 3,00 Meter",
			"2,05 x 3,05 Meter",
			"2,08 x 3,08 Meter"
		],
		correctAnswers: [1],
		ruleReferences: ["1:2"]
	},
	{
		id: 3,
		text: "Während der Ausführung eines Abwurfs berührt Torwart A seine Torraumlinie mit einem Fuß. Richtige Entscheidung?",
		answers: [
			"Wiederholung des Abwurfs mit Anpfiff",
			"Freiwurf für Mannschaft B",
			"Weiterspielen lassen"
		],
		correctAnswers: [2],
		ruleReferences: ["1:3", "12:2"]
	},
	{
		id: 4,
		text: "Der Ball liegt auf der Torraumlinie. Angriffsspieler A7 nimmt ihn auf und will aus klarer Torgelegenheit auf das Tor werfen, als er regelwidrig angegriffen wird. Richtige Entscheidung?",
		answers: [
			"Freiwurf für Mannschaft B",
			"Freiwurf für Mannschaft A",
			"7-Meter Wurf für Mannschaft A",
			"Abwurf für Mannschaft B"
		],
		correctAnswers: [3],
		ruleReferences: ["1:3", "6:5", "12:1"]
	},
	{
		id: 5,
		text: "Nach dem Anpfiff eines 7-Meter-Wurfs tritt Torwart A mit einem Fuß auf die Torwartgrenzlinie. Der Ball geht über das Tor. Richtige Entscheidung?",
		answers: [
			"Wiederholung mit Anpfiff",
			"Da kein Tor, Spielfortsetzung mit Abwurf",
			"Stellung des Torwarts war korrekt"
		],
		correctAnswers: [1, 2],
		ruleReferences: ["1:3", "12:1", "14:9"]
	},
	{
		id: 6,
		text: "Wie breit muss die Torlinie zwischen den Torpfosten sein?",
		answers: [
			"5 cm",
			"6 cm",
			"8 cm",
			"10 cm"
		],
		correctAnswers: [2],
		ruleReferences: ["1:3"]
	},
	{
		id: 7,
		text: "Kurz vor dem Schlusspfiff wird B2 an der Torraumlinie angespielt, setzt zum Torwurf an und wird dabei regelwidrig behindert. Bevor der Ball die Hand von B2 verlassen hat, ertönt das Schlusssignal. Richtige Entscheidung?",
		answers: [
			"Spiel ist beendet",
			"Freiwurf für B",
			"7-Meter-Wurf für B",
			"Spiel ist beendet; Vermerk im Spielprotokoll."
		],
		correctAnswers: [2],
		ruleReferences: ["2:4", "14:1a"]
	},
	{
		id: 8,
		text: "Kurz vor Ende der 1. Halbzeit ist noch ein 7-Meter-Wurf auszuführen. Der von A9 geworfene Ball knallt gegen die Latte, von dort gegen den Rücken des ca. 3 Meter vor seinem Tor stehenden Torwarts und dann ins Tor. Der Pfiff des Zeitnehmers ertönte, als der Ball von der Latte in Richtung Torwartrücken flog. Wie ist zu entscheiden?",
		answers: [
			"Tor",
			"Wiederholung des 7-Meter-Wurfs",
			"Halbzeit beendet, keine weitere Entscheidung"
		],
		correctAnswers: [1],
		ruleReferences: ["2:4"]
	},
	{
		id: 9,
		text: "Nach dem Schlusssignal ist noch ein 7-Meter-Wurf auszuführen. Das unmittelbare Ergebnis dieses Wurfs wird abgewartet. Welcher Schiedsrichter beendet das Spiel nun?",
		answers: [
			"Der Erstgenannte",
			"Einer von beiden",
			"Der Feldschiedsrichter",
			"Der Torschiedsrichter"
		],
		correctAnswers: [1],
		ruleReferences: ["2:4"]
	},
	{
		id: 10,
		text: "Wann beginnt das Spiel?",
		answers: [
			"Mit dem Pfiff des erstgenannten Schiedsrichters",
			"Wenn der Ball die Hand des Werfers verlassen hat",
			"Wenn der Zeitnehmer die Stoppuhr startet oder die öffentliche Zeitmessanlage zu laufen beginnt",
			"Mit dem Anpfiff des Anwurfs durch den Feldschiedsrichter."
		],
		correctAnswers: [3],
		ruleReferences: ["2:3"]
	},
	{
		id: 11,
		text: "Wer bestimmt bei einem 7-m-Werfen, auf welches Tor geworfen wird?",
		answers: [
			"Die Mannschaft, die das Losen gewinnt",
			"Die Mannschaft, die das Losen verliert",
			"Die Schiedsrichter",
			"Der erstgenannte Schiedsrichter"
		],
		correctAnswers: [2],
		ruleReferences: ["2:2", "Kommentar"]
	},
	{
		id: 12,
		text: "Der vom Torwart abgewehrte Ball rollt über die Torauslinie. Danach ertönt das automatische Schlusssignal. Die Schiedsrichter stellen fest, dass das Spiel fünf Minuten zu früh beendet wurde. Da sich die Spieler noch auf der Spielfläche befinden, wird das Spiel wieder aufgenommen mit:",
		answers: [
			"Abwurf",
			"Freiwurf",
			"Ohne Anpfiff",
			"Mit Anpfiff"
		],
		correctAnswers: [0, 3],
		ruleReferences: ["2:7", "12:1", "15:5b"]
	},
	{
		id: 13,
		text: "Nach dem automatischen Schlusssignal für die 1. Halbzeit stellt der Schiedsrichter fest, dass diese 1 Minute zu früh beendet wurde. Richtige Entscheidung?",
		answers: [
			"Die 2. Halbzeit um eine Minute verlängern",
			"Die eine Minute wird nicht nachgeholt",
			"Nach der Halbzeitpause zuerst eine Minute in denselben Spielfeldhälften wie in der 1. Halbzeit spielen lassen, dann nach Seitenwechsel normaler Beginn der 2. Halbzeit.",
			"Die Spieler auf dem Spielfeld halten und die verbleibende Spielzeit von 1 Minute noch spielen lassen."
		],
		correctAnswers: [3],
		ruleReferences: ["2:7"]
	},
	{
		id: 14,
		text: "A wirft, Torwart B hält. In diesem Augenblick ertönt das automatische Schlusssignal. Die Schiedsrichter machen den Zeitnehmer darauf aufmerksam, dass noch 30 Sekunden der 2. Halbzeit zu spielen sind. Alle Spieler sind auf der Spielfläche geblieben. Wie wird das Spiel wieder aufgenommen?",
		answers: [
			"Freiwurf für B",
			"Abwurf",
			"Freiwurf für A",
			"Mit Anpfiff",
			"Ohne Anpfiff"
		],
		correctAnswers: [1, 3],
		ruleReferences: ["2:7", "12:1", "15:5b"]
	},
	{
		id: 15,
		text: "Wie viele Farben darf der Spielball haben?",
		answers: [
			"1",
			"2",
			"3",
			"Beliebig viele"
		],
		correctAnswers: [3],
		ruleReferences: ["3:1"]
	},
	{
		id: 16,
		text: "Welchen der folgenden vier Bälle müssen die Schiedsrichter für ein Männerspiel wählen?",
		answers: [
			"Umfang 57 cm, Gewicht 450 g",
			"Umfang 58 cm, Gewicht 400 g",
			"Umfang 59 cm, Gewicht 425 g",
			"Umfang 60 cm, Gewicht 500 g"
		],
		correctAnswers: [2],
		ruleReferences: ["3:2"]
	},
	{
		id: 17,
		text: "Welchen der folgenden vier Bälle müssen die Schiedsrichter für ein Frauenspiel wählen?",
		answers: [
			"Umfang 53 cm, Gewicht 350 g",
			"Umfang 54 cm, Gewicht 300 g",
			"Umfang 55 cm, Gewicht 425 g",
			"Umfang 56 cm, Gewicht 375 g"
		],
		correctAnswers: [3],
		ruleReferences: ["3:2"]
	},
	{
		id: 18,
		text: "Kurz vor Spielbeginn verletzt sich A11 so schwer, dass er nicht spielen kann. Richtige Entscheidung?",
		answers: [
			"A11 darf überhaupt nicht ersetzt werden.",
			"A11 darf ersetzt werden, sofern die gegnerische Mannschaft einverstanden ist.",
			"A11 darf ersetzt werden, sofern die Wettbewerbsbestimmungen dies erlauben, sein Ersatz darf die Nr. 11 tragen, muss aber im Spielprotokoll eingetragen sein.",
			"A11 darf ersetzt werden, aber sein Ersatz darf nicht mit der Nr. 11 spielen."
		],
		correctAnswers: [2],
		ruleReferences: ["4:1", "4:3"]
	},
	{
		id: 19,
		text: "Mannschaft B erscheint mit 5 Feldspielern, aber ohne etatmäßigen Torwart. Mannschaft B bestimmt Feldspieler B5 als Torwart. Konsequenzen für B5?",
		answers: [
			"B5 ist nach einer ordnungsgemäßen Auswechslung jederzeit als Feldspieler einsetzbar.",
			"B5 darf nicht mehr als Feldspieler eingesetzt werden.",
			"B5 darf als Feldspieler eingesetzt werden, wenn der Offizielle der Mannschaft A einverstanden ist.",
			"B5 darf als Feldspieler eingesetzt werden, sobald der vorgesehene Torwart anwesend ist."
		],
		correctAnswers: [0],
		ruleReferences: ["4:1"]
	},
	{
		id: 20,
		text: "Der Vereinspräsident von Heimmannschaft A setzt sich nach Spielbeginn neben die beiden Betreuer, den Masseur und den Trainer auf die Auswechselbank. Welche Kon-sequenzen muss das haben?",
		answers: [
			"Der Auswechseltorwart muss hinter der Bank stehen.",
			"Der Vereinspräsident muss die Auswechselbank verlassen.",
			"Ein Offizieller muss die Auswechselbank verlassen.",
			"Personen, die nicht im Spielprotokoll vermerkt sind, müssen die Auswechselbank verlassen.",
			"Der Mannschaftsverantwortliche erhält eine progressive Strafe."
		],
		correctAnswers: [3, 4],
		ruleReferences: ["4:2"]
	},
	{
		id: 21,
		text: "Wie viele Spieler pro Mannschaft müssen mindestens bei Spielbeginn auf der Spielfläche antreten und im Spielprotokoll eingetragen sein?",
		answers: [
			"5 Spieler",
			"4 Feldspieler und 1 Torwart",
			"5 Feldspieler und 1 Torwart",
			"6 Feldspieler"
		],
		correctAnswers: [0],
		ruleReferences: ["4:1"]
	},
	{
		id: 22,
		text: "Vier Konstellationen: Welcher Spieler ist teilnahmeberechtigt?",
		answers: [
			"Bei Spielbeginn anwesend und im Spielprotokoll eingetragen",
			"Bei Spielbeginn nicht anwesend, aber im Spielprotokoll eingetragen",
			"Bei Spielbeginn anwesend, aber nicht im Spielprotokoll eingetragen",
			"Ein Spieler, der zwar nicht im Spielprotokoll eingetragen ist, aber vom Zeitnehmer die Spielerlaubnis erhält"
		],
		correctAnswers: [0],
		ruleReferences: ["4:3"]
	},
	{
		id: 23,
		text: "Bei Spielbeginn sind nur 6 Spieler von Mannschaft A anwesend. Unmittelbar nach dem Anpfiff treffen die fehlenden Spieler ein. Nach dem Umkleiden läuft A7 über die Auswechsellinie einfach auf die Spielfläche. Im Spielprotokoll ist er nicht eingetragen. Richtige Entscheidung?",
		answers: [
			"Disqualifikation von A7",
			"Hinausstellung von A7 und Eintragung ins Spielprotokoll",
			"A7 wird im Spielprotokoll nachgetragen.",
			"Progressive Bestrafung des Mannschaftsverantwortlichen von A"
		],
		correctAnswers: [2, 3],
		ruleReferences: ["4:3", "16:1b"]
	},
	{
		id: 24,
		text: "Während eines Gegenstoßes von Mannschaft A läuft B7 als zusätzlicher Spieler auf das Spielfeld und umklammert A5 so, dass diesem eine klare Torgelegenheit genommen wird. Richtige Entscheidung?",
		answers: [
			"Hinausstellung von B7",
			"Disqualifikation von B7 ohne schriftlichen Bericht",
			"Disqualifikation von B7 mit schriftlichem Bericht",
			"Freiwurf",
			"7-Meter-Wurf"
		],
		correctAnswers: [2, 4],
		ruleReferences: ["4:6", "8:10b", "14:1a", "16:6b"]
	},
	{
		id: 25,
		text: "Die Schiedsrichter haben auf Freiwurf für A an der Freiwurflinie von B entschieden. Jetzt pfeift der Zeitnehmer und hält die Uhr an. Die Schiedsrichter erkundigen sich nach dem Grund des Pfiffs. Der Zeitnehmer teilt mit, dass A9 einen Wechselfehler begangen hat. Entscheidung?",
		answers: [
			"Freiwurf für A an der Freiwurflinie von B",
			"Freiwurf für B an der eigenen Freiwurflinie",
			"Freiwurf für B am Auswechselraum von A",
			"Hinausstellung von A9"
		],
		correctAnswers: [0, 3],
		ruleReferences: ["16:3a", "4:5", "13:3", "Erläuterung 7"]
	},
	{
		id: 26,
		text: "B14 wechselt bei einer Spielunterbrechung korrekt ein. Trotzdem kommt vom Zeitnehmertisch ein Pfiff, denn B14 ist nicht mit dieser Nummer im Spielprotokoll eingetragen. Die Kontrolle des Spielprotokolls zeigt, dass die Spielerin dort die Nummer 18 hat. Richtige Entscheidung?",
		answers: [
			"Progressive Bestrafung des Mannschafsverantwortlichen von B",
			"Freiwurf für A auf Höhe des Zeitnehmertisches",
			"Korrektur der Nummer im Spielprotokoll",
			"Das Spiel wird mit dem der Spielsituation entsprechenden Wurf fortgesetzt. Schriftlicher Bericht"
		],
		correctAnswers: [2, 3],
		ruleReferences: ["4:3", "13:3", "13:4"]
	},
	{
		id: 27,
		text: "Nach dem Schlusssignal ist von Mannschaft A noch ein Freiwurf auszuführen. Zu diesem Zweck wechselt sie, nachdem A3 und anschließend A4 die Spielfläche verlassen haben, nacheinander die wurfstarken Spieler A5 und A6 ein. Welche der nachfolgenden Aussagen trifft/treffen zu?",
		answers: [
			"Der Zeitnehmer wird pfeifen und die Schiedsrichter auf einen Wechselfehler der Mannschaft A hinweisen.",
			"Spieler A4 ist wegen Wechselfehlers hinauszustellen.",
			"Spieler A6 ist wegen Wechselfehlers hinauszustellen.",
			"Der Zeitnehmer wird nicht pfeifen, da kein Anlass besteht."
		],
		correctAnswers: [0, 2],
		ruleReferences: ["2:5", "4:5", "16:3a"]
	},
	{
		id: 28,
		text: "Der verspätet eingetroffene B8 ist nicht im Spielprotokoll eingetragen. Er rennt aus der Kabine direkt auf das Spielfeld und vereitelt eine klare Torgelegenheit, indem er den im Sprung befindlichen Ballbesitzer so stößt, dass dieser die Körperkontrolle verliert. Richtige Entscheidung?",
		answers: [
			"7-Meter-Wurf für A",
			"Freiwurf für A",
			"Disqualifikation von B8 ohne schriftlichen Bericht",
			"Disqualifikation von B8 mit schriftlichem Bericht",
			"Progressive Bestrafung des Mannschaftsverantwortlichen von B"
		],
		correctAnswers: [0, 3, 4],
		ruleReferences: ["4:3", "8:10b", "14:1a", "16:1b", "16:3e", "16:6b"]
	},
	{
		id: 29,
		text: "Wann ist es bis zu zwei Personen (Offiziellen und/oder Spielern) einer Mannschaftgestattet, die Spielfläche zusätzlich zu betreten?",
		answers: [
			"Während einer Spielzeitunterbrechung",
			"Während einer Spielzeitunterbrechung und mit Erlaubnis eines Schiedsrichters",
			"Bei Verletzung eines Spielers",
			"Mit Erlaubnis des Zeitnehmers"
		],
		correctAnswers: [1],
		ruleReferences: ["4:11"]
	},
	{
		id: 30,
		text: "Der Schiedsrichter pfeift und zeigt eine Spielzeitunterbrechung (Time-out) an, veranlasst durch die 3. Hinausstellung von A2. Als der Schiedsrichter dem Sekretär/Zeitnehmer die Disqualifikation anzeigt, läuft Trainer A auf die Spielfläche, um gegen die Hinausstellung zu protestieren. Ein Offizieller von A war vorher schon verwarnt worden. Richtige Entscheidung?",
		answers: [
			"Disqualifikation des Trainers und Reduzierung von Mannschaft A für 2 Minuten",
			"Persönliche Verwarnung für den Trainer",
			"Disqualifikation des Trainers mit schriftlichem Bericht",
			"Hinausstellung des Trainers"
		],
		correctAnswers: [3],
		ruleReferences: ["4:2", "16:3e"]
	},
	{
		id: 31,
		text: "Während einer Spielzeitunterbrechung wegen einer Verletzung eines Spielers läuft ein zusätzlicher Spieler von A auf das Spielfeld, ohne dass einer der Schiedsrichter dies erlaubt hätte. Richtige Entscheidung?",
		answers: [
			"Verwarnung des Spielers",
			"Hinausstellung des Spielers",
			"Disqualifikation des Spielers",
			"Hinausstellung des Spielers und Reduzierung seiner Mannschaft für 2 Minuten"
		],
		correctAnswers: [3],
		ruleReferences: ["16:3a", "4:4", "4:6"]
	},
	{
		id: 32,
		text: "Direkt ausgeführter Freiwurf für Mannschaft B unmittelbar vor Spielende. Bevor der unhaltbare Ball die Torlinie überquert hat, ertönt das automatische Schlusssignal. Richtige Entscheidung?",
		answers: [
			"Spielende",
			"Wiederholung des Freiwurfs für B",
			"Wiederholung des Freiwurfs für B mit Anpfiff",
			"7-Meter-Wurf für B"
		],
		correctAnswers: [2],
		ruleReferences: ["2:4", "15:5"]
	},
	{
		id: 33,
		text: "Wegen Verletzung eines Spielers von A pfeift der Feldschiedsrichter Time-out und erlaubt dem Arzt von A, die Spielfläche zu betreten. Der Trainer von B betritt das Spielfeld ebenfalls, um seinem Torwart Ratschläge zu geben. Richtige Entscheidung?",
		answers: [
			"Keine Entscheidung, da das Signal allen Spielern und Offiziellen beider Mannschaften das Betreten der Spielfläche erlaubt",
			"Alle vier Offiziellen von Mannschaft B sind zu verwarnen und im Wiederholungsfall zu disqualifizieren.",
			"Der Mannschaftsverantwortliche von B wird verwarnt.",
			"Progressive Bestrafung des Trainers von B."
		],
		correctAnswers: [3],
		ruleReferences: ["4:2", "4:11"]
	},
	{
		id: 34,
		text: "Torwart A16 muss wegen Verletzung durch A5 ersetzt werden. A5 wechselt seine Spielkleidung. Nach 20 Minuten ist A16 wieder einsatzfähig und sein Trainer wechselt: A5 wird erneut als Feldspieler eingesetzt (ohne Mitteilung an Sekretär/Zeitnehmer). Richtige Entscheidung?",
		answers: [
			"Keine Bestrafung, weil dies gestattet ist",
			"Freiwurf für Mannschaft B",
			"Hinausstellung von A5",
			"Disqualifikation von A5"
		],
		correctAnswers: [0],
		ruleReferences: ["4:1"]
	},
	{
		id: 35,
		text: "Spieler A3 gelingt es, den in Richtung Seitenauslinie fliegenden Ball noch vor der Seitenlinie mit einer Hand A7 zuzuspielen. Er gerät bei dieser Aktion jedoch mit einem Fuß außerhalb des Spielfelds. A7 erzielt ein Tor. Richtige Entscheidung?",
		answers: [
			"Einwurf für Mannschaft B",
			"Freiwurf für Mannschaft B",
			"Tor",
			"Hinausstellung von Spieler A3"
		],
		correctAnswers: [2],
		ruleReferences: ["11:1"]
	},
	{
		id: 36,
		text: "Ein Offizieller von A protestiert auf dem Weg in die Kabine (während der Halbzeitpause) bei den Schiedsrichtern. In der 1. Halbzeit wurde bereits der Trainer von A verwarnt. Richtige Entscheidung?",
		answers: [
			"Hinausstellung des Offiziellen von A",
			"Disqualifikation",
			"Mannschaft A beginnt die 2. Halbzeit mit einem Spieler weniger",
			"Schriftlicher Bericht"
		],
		correctAnswers: [0, 2],
		ruleReferences: ["8:7a", "16:3e", "16:10"]
	},
	{
		id: 37,
		text: "A4 verlässt die Spielfläche außerhalb seiner Auswechsellinie. Als er die Seitenlinieüberschritten hat, aber noch nicht in seinem Auswechselraum angekommen ist, betritt A11 für ihn die Spielfläche über die Auswechsellinie. Entscheidung nach Pfiff des Zeitnehmers?",
		answers: [
			"Freiwurf gegen A an der Stelle, an der A4 die Spielfläche verlassen hat",
			"Freiwurf gegen A an der Auswechselzone von A",
			"Hinausstellung von A4",
			"Hinausstellung von A11",
			"Hinausstellung von A11 und A4"
		],
		correctAnswers: [0, 2],
		ruleReferences: ["4:4", "4:5", "13:6", "16:3a"]
	},
	{
		id: 38,
		text: "B3 begeht während einer Spielunterbrechung den ersten Wechselfehler seiner Mannschaft. Vorangegangen war eine Freiwurfentscheidung für B. B3 war bis dahin weder verwarnt noch hinausgestellt worden. Richtige Entscheidung?",
		answers: [
			"Verwarnung von Spieler B3",
			"Hinausstellung von Spieler B3",
			"Freiwurf für Mannschaft A",
			"Freiwurf für Mannschaft B"
		],
		correctAnswers: [1, 3],
		ruleReferences: ["4:5", "13:3", "16:3a"]
	},
	{
		id: 39,
		text: "Nachdem die Schiedsrichter auf 7-Meter-Wurf für Mannschaft A entschieden haben, begeht A27, welcher als Werfer vorgesehen war, einen Wechselfehler. Richtige Entscheidung?",
		answers: [
			"Freiwurf für B",
			"7-Meter-Wurf für A",
			"Abwurf für B",
			"Hinausstellung von Spieler A27"
		],
		correctAnswers: [1, 3],
		ruleReferences: ["4:5", "13:3", "16:3a"]
	},
	{
		id: 40,
		text: "Mannschaft A hat ein Tor erzielt. Vor Anpfiff des Anwurfs betritt B10 die Spielfläche, bevor B6 sie verlassen hat. Richtige Entscheidung?",
		answers: [
			"Anwurf",
			"Freiwurf für A",
			"Hinausstellung von B10",
			"Hinausstellung von B6"
		],
		correctAnswers: [0, 2],
		ruleReferences: ["4:5", "13:3", "16:3a"]
	},
	{
		id: 41,
		text: "Bei Spielbeginn sind von Mannschaft A nur 12 Spieler anwesend, weil die beiden Torwarte noch fehlen. A beginnt daher mit einem der 12 Feldspieler als Torwart. Welche der folgenden Aussagen ist/sind richtig?",
		answers: [
			"Der als Torwart beginnende Feldspieler muss im Spielprotokoll unter Ziffer 1, 12, oder 16 eingetragen werden",
			"Der als Torwart beginnende Feldspieler darf später auch als Feldspieler eingesetzt werden",
			"Die verspätet eintreffenden Torwarte von A müssen im Spielprotokoll unter den Ziffern 1, 12 oder 16 nachgetragen werden",
			"Einer der beiden verspätet eintreffenden Torwarte darf nur als Feldspieler eingesetzt werden."
		],
		correctAnswers: [1],
		ruleReferences: ["4:1", "4:8"]
	},
	{
		id: 42,
		text: "Während einer Spielzeitunterbrechung begeht Spieler A5 den ersten Wechselfehler seiner Mannschaft. Diese war zum Zeitpunkt der Spielzeitunterbrechung in Ballbesitz. Richtige Entscheidung?",
		answers: [
			"Keine Bestrafung",
			"Verwarnung von Spieler A5",
			"Hinausstellung von Spieler A5",
			"Freiwurf für B",
			"Mannschaft A bleibt in Ballbesitz"
		],
		correctAnswers: [2, 4],
		ruleReferences: ["4:5", "13:3", "16:3a"]
	},
	{
		id: 43,
		text: "Torwart A3 will einen 7-Meter-Wurf ausführen. Um das leere Tor zu hüten, betritt A15 im Torwarttrikot die Spielfläche, nachdem er gegen einen Feldspieler ausgewechselt worden ist. Richtige Entscheidung?",
		answers: [
			"Hinausstellung von Spieler A3",
			"Hinausstellung von Spieler A15",
			"Keine Bestrafung",
			"7-Meter-Wurf für Mannschaft A",
			"Freiwurf für B am Auswechselraum von A"
		],
		correctAnswers: [1, 3],
		ruleReferences: ["4:1", "4:5", "13:3", "16:3a"]
	},
	{
		id: 44,
		text: "A5 hat eine klare Torgelegenheit. Der Trainer von A beleidigt den Zeitnehmer, woraufhin dieser genau in dem Moment pfeift, als A5 zum Wurf ansetzt. Richtige Entscheidung?",
		answers: [
			"Freiwurf für B",
			"Bestrafung des Trainers von A",
			"Freiwurf für A",
			"7-Meter-Wurf für A",
			"Bericht im Spielprotokoll"
		],
		correctAnswers: [2, 4],
		ruleReferences: ["Erläuterung 7"]
	},
	{
		id: 45,
		text: "A6 wurde schon zweimal für 2 Minuten hinausgestellt: Jetzt begeht er den 2. Wechselfehler seiner Mannschaft. Wie ist zu entscheiden, wenn er sich besonders grob unsportlich verhält, nachdem die Schiedsrichter ihn über den Wechselfehler informiert haben?",
		answers: [
			"Hinausstellung von Spieler A6",
			"Disqualifikation von A6",
			"Schriftlicher Bericht",
			"Mannschaft A spielt 2 Minuten mit einem Spieler weniger",
			"Mannschaft A spielt 2 Minuten mit zwei Spielern weniger",
			"Mannschaft A spielt 4 Minuten mit einem Spieler weniger"
		],
		correctAnswers: [0, 1, 2, 5],
		ruleReferences: ["4:5", "8:10a", "16:3a", "16:6d", "16:8", "16:9c"]
	},
	{
		id: 46,
		text: "Bei einem Gegenstoß von A – klare Torgelegenheit – begeht B3 einen Wechselfehler. Sekretär/Zeitnehmer reagieren nicht, aber der Feldschiedsrichter hat das Vergehen bemerkt. Richtige Entscheidung?",
		answers: [
			"Sofortige Hinausstellung von B3 und Freiwurf für A",
			"Sofortige Hinausstellung von B3 und 7-Meter-Wurf für A",
			"Torchance abwarten, dann Hinausstellung von B3 und Freiwurf für A",
			"Torchance abwarten, dann Hinausstellung von B3 und Wurf gemäß Spielsituation"
		],
		correctAnswers: [1],
		ruleReferences: ["4:5", "14:2", "16:3a"]
	},
	{
		id: 47,
		text: "Nach einer Abwehr durch Torwart A rollt der Ball entlang der Seitenlinie an der Auswechselbank von A vorbei. Der auf der Bank sitzende A5 hält den Fuß ins Spielfeld und stoppt den Ball, damit A4 ihn noch vor der Seitenlinie aufnehmen kann. Richtige Entscheidung?",
		answers: [
			"Freiwurf für B",
			"Einwurf für B",
			"Hinausstellung von A5",
			"Disqualifikation von A5"
		],
		correctAnswers: [0, 2],
		ruleReferences: ["4:6", "13:1a", "8:8", "16:3f"]
	},
	{
		id: 48,
		text: "30 Sekunden vor Ablauf seiner Hinausstellungszeit betritt A3 die Spielfläche, jedoch ohne in das Spiel einzugreifen. Mannschaft A ist in Ballbesitz. Richtige Entscheidung?",
		answers: [
			"Freiwurf für B",
			"Freiwurf für A",
			"Hinausstellung von A3 und Reduzierung von Team A auf der Spielfläche um einen zusätzlichen Spieler für 30 Sekunden",
			"30 Sekunden für A3 und Reduzierung von Team A auf der Spielfläche um einen zusätzlichen Spieler für 2 Minuten",
			"Disqualifikation von A3 und Reduzierung von Team A auf der Spielfläche um einen zusätzlichen Spieler für 30 Sekunden"
		],
		correctAnswers: [0, 2],
		ruleReferences: ["4:6", "13:1a", "16:3a"]
	},
	{
		id: 49,
		text: "Torwart A13 holt beim Abwurf mit dem Ball über die Torlinie aus. Richtige Entscheidung?",
		answers: [
			"Weiterspielen lassen",
			"Abwurf mit Anpfiff",
			"Tor für B",
			"Freiwurf für B"
		],
		correctAnswers: [0],
		ruleReferences: ["12:2", "15:2"]
	},
	{
		id: 50,
		text: "A5 ist hinausgestellt. Als 1 Minute und 45 Sekunden seiner Hinausstellungszeit verstrichen sind, wird er von seinem Trainer auf die Spielfläche geschickt. Richtige Entscheidung?",
		answers: [
			"Erneute Hinausstellung von A5, jetzt für 2 Minuten und 15 Sekunden",
			"Disqualifikation von A5 und Reduzierung seiner Mannschaft für die Reststrafzeit (15 Sekunden)",
			"Erneute Hinausstellung von A5; zusätzliche Reduzierung von Mannschaft A für die Reststrafzeit (15 Sekunden)"
		],
		correctAnswers: [2],
		ruleReferences: ["4:6", "16:3a"]
	},
	{
		id: 51,
		text: "A2 ist hinausgestellt worden, aber schon nach einer Minute wird er vom Trainer wieder auf die Spielfläche geschickt. Bevor der Zeitnehmer pfeift, hat A2 eine klare Torgelegenheit von B vereitelt. Richtige Entscheidung?",
		answers: [
			"Freiwurf für B und erneute Hinausstellung von A2",
			"7-Meter-Wurf für B, erneute Hinausstellung von A2 und Reduzierung der Mannschaft A für die Reststrafzeit",
			"7-Meter-Wurf für B, Disqualifikation von A2 und Reduzierung seiner Mannschaft für die Reststrafzeit",
			"7-Meter, Disqualifikation von A2 und weitere Reduzierung der Mannschaft für den Rest der Hinausstellungszeit von A2; schriftlicher Bericht"
		],
		correctAnswers: [3],
		ruleReferences: ["4:6", "14:1a", "8:10b", "16:6b", "16:8"]
	},
	{
		id: 52,
		text: "Nach Ablauf seiner Hinausstellungszeit will Torwart B seine Mannschaft, die sich gerade in der Abwehr befindet, ergänzen. Er betritt dazu die Spielfläche und übernimmt als 6. Feldspieler von B im Torwarttrikot die Außenposition. Richtige Entscheidung?",
		answers: [
			"Weiterspielen lassen",
			"7-Meter-Wurf für A",
			"Freiwurf für A",
			"Hinausstellung von Torwart B"
		],
		correctAnswers: [2, 3],
		ruleReferences: ["4:1", "4:5", "13:1", "16:3a"]
	},
	{
		id: 53,
		text: "20 Sekunden vor Spielende, beim Stand von 20:19 für Mannschaft A, lässt sich Torwart A16 beim Abwurf sehr viel Zeit, indem er mit dem Ball im Torraum prellend hin und her geht. Was ist richtig?",
		answers: [
			"Time-out",
			"Freiwurf gegen A",
			"Anpfiff zum Abwurf",
			"Hinausstellung von A16",
			"Vorwarnzeichen „Passives Spiel“ anzeigen"
		],
		correctAnswers: [2],
		ruleReferences: ["5:2", "12:2", "15:5b"]
	},
	{
		id: 54,
		text: "Torwart B kann einen Torwurf abfangen und den Gegenstoß einleiten. Dabei überschreitet er mit dem linken Fuß die Torraumlinie. Richtige Entscheidung?",
		answers: [
			"Weiterspielen lassen",
			"Freiwurf für A",
			"Abwurf mit Anpfiff wiederholen lassen"
		],
		correctAnswers: [2],
		ruleReferences: ["1:3", "5:6", "12:1", "12:2", "15.5b"]
	},
	{
		id: 55,
		text: "Torwart A steht außerhalb seines Torraums im Spielfeld. Bei einem Zuspiel durch einen Mitspieler setzt er beim Zurückgehen einen Fuß in den eigenen Torraum, während der andere Fuß noch auf dem Spielfeld steht. Richtige Entscheidung?",
		answers: [
			"7-Meter-Wurf für B",
			"Weiterspielen lassen",
			"Freiwurf für B",
			"Hinausstellung des Torwarts"
		],
		correctAnswers: [2],
		ruleReferences: ["1:3", "5:3", "5:9", "6:2b", "13:1a"]
	},
	{
		id: 56,
		text: "Torwart A1 wehrt ab und wirft sich nach dem Ball, der sich in Richtung Spielfeld bewegt. Er erreicht ihn, rutscht aber über die Torraumlinie hinaus und spielt erst im Spielfeld einem Mitspieler den Ball zu. Richtige Entscheidung?",
		answers: [
			"Freiwurf für B",
			"Weiterspielen lassen",
			"Abwurf für A mit Anpfiff"
		],
		correctAnswers: [2],
		ruleReferences: ["5:6"]
	},
	{
		id: 57,
		text: "Der Ball rollt im Torraum von Mannschaft A. B8 nimmt ihn auf und erzielt ein Tor. Richtige Entscheidung?",
		answers: [
			"Freiwurf für A",
			"Abwurf für A",
			"Tor",
			"Anwurf"
		],
		correctAnswers: [1],
		ruleReferences: ["6:5", "12:1"]
	},
	{
		id: 58,
		text: "Torwart B wehrt einen Wurf ab. Er bemüht sich, den in Richtung Spielfeld rollenden Ball kurz vor dem an der Torraumlinie stehenden A15 zu erreichen, und schiebt ihn mit dem Fuß über die Torauslinie. Richtige Entscheidung?",
		answers: [
			"7-Meter-Wurf für A",
			"Freiwurf für A",
			"Weiterspielen lassen",
			"Progressive Bestrafung gegen Torwart B, da er einen Gegenspieler gefährdet hat"
		],
		correctAnswers: [1],
		ruleReferences: ["5:10", "13:1a"]
	},
	{
		id: 59,
		text: "Torwart A bekommt den Ball nicht unter Kontrolle. Dieser bewegt sich im Torraum in Richtung Seitenlinie. Der Torwart befördert ihn mit dem Fuß über die Torauslinie. Richtige Entscheidung?",
		answers: [
			"Abwurf für A",
			"Freiwurf für B",
			"Einwurf für B",
			"Progressive Bestrafung des Torwarts"
		],
		correctAnswers: [1],
		ruleReferences: ["5:10", "13:1a"]
	},
	{
		id: 60,
		text: "Spielstand 20:20. B7 fängt einen Querpass von A ab und läuft einen Konter, wobei ihm kein Feldspieler von A folgt. Kurz hinter der Mittellinie läuft ein Zuschauer auf die Spielfläche und reißt B7 zu Boden. Darauf tumultartige Szenen, weitere Zuschauer auf der Spielfläche etc. Der Trainer von B schlägt den Zuschauer, der B7 umgerissen hat, zu Boden. Richtige Entscheidung?",
		answers: [
			"Spielabbruch",
			"Time-out, 7-Meter-Wurf für B, Disqualifikation von Trainer B, Reduzierung von Mannschaft B für 2 Minuten, schriftlicher Bericht",
			"Time-out, 7-Meter für B, Disqualifikation von Trainer B",
			"Time-out, 7-Meter-Wurf für B, Hinausstellung von Trainer B"
		],
		correctAnswers: [1],
		ruleReferences: ["2:8a", "8:10a", "14:1c", "16:6b"]
	},
	{
		id: 61,
		text: "Torwart A wehrt einen Wurf ab, der Ball rollt aber in Richtung Spielfeld, wo B6 ihn unbehindert erwartet. Genau auf der Torraumlinie stoppt der Torwart ihn mit dem Fuß. Richtige Entscheidung?",
		answers: [
			"Abwurf für A mit Anpfiff",
			"Progressive Strafe gegen Torwart A",
			"Freiwurf für B",
			"7-Meter-Wurf für B."
		],
		correctAnswers: [2],
		ruleReferences: ["5:10", "13:1a"]
	},
	{
		id: 62,
		text: "Freiwurf für Mannschaft B an der Freiwurflinie von Mannschaft A. Als alle Spieler korrekt stehen, pfeifen die Schiedsrichter den Freiwurf an. Noch bevor der Ball die Hand des Ausführenden verlassen hat, überschreiten zwei seiner Mitspieler die Freiwurflinie von A. Richtige Entscheidung?",
		answers: [
			"Wiederholung des Freiwurfs",
			"Freiwurf für A",
			"mit Anpfiff",
			"ohne Anpfiff"
		],
		correctAnswers: [1, 3],
		ruleReferences: ["13:7", "15:7", "13:1a"]
	},
	{
		id: 63,
		text: "A3 steht mit beiden Füßen im Spielfeld und fängt einen von seinem Torwart abgeprallten Ball. Da er von B10 korrekt bedrängt wird, prellt er den Ball mehrmals im eigenen Torraum. Richtige Entscheidung?",
		answers: [
			"Weiterspielen lassen",
			"7-Meter-Wurf für B",
			"Freiwurf für B",
			"Freiwurf für A"
		],
		correctAnswers: [0],
		ruleReferences: ["6:5"]
	},
	{
		id: 64,
		text: "Torwart A steht mit dem Ball in der Hand abwurfbereit im Torraum. B6 spielt ihm mit der offenen Hand den Ball weg. Richtige Entscheidung?",
		answers: [
			"Abwurf für A",
			"Freiwurf für A",
			"Abwurf mit Anpfiff",
			"Progressive Bestrafung von B6"
		],
		correctAnswers: [2, 3],
		ruleReferences: ["12:1", "12:2", "15:5", "15:9", "16:1a"]
	},
	{
		id: 65,
		text: "A7 befindet sich zwar außerhalb des Torraums von B, fängt den Ball jedoch deutlich über dem Torraum und wirft ihn ins Tor. Richtige Entscheidung?",
		answers: [
			"Tor für A",
			"Freiwurf für B",
			"Abwurf für B",
			"Abwurf für B mit Anpfiff"
		],
		correctAnswers: [0],
		ruleReferences: ["6:5"]
	},
	{
		id: 66,
		text: "A8, der von einigen Gegenspielern korrekt bedrängt wird, rollt den Ball absichtlich in den eigenen Torraum, wo er liegen bleibt. Torwart A nimmt ihn nicht auf. Richtige Entscheidung?",
		answers: [
			"Abwurf",
			"Abwurf mit Anpfiff",
			"7-Meter-Wurf für B",
			"Freiwurf für B"
		],
		correctAnswers: [3],
		ruleReferences: ["6:7b", "13:1a"]
	},
	{
		id: 67,
		text: "A5 spielt den Ball absichtlich in den eigenen Torraum. Der Ball trifft den Torpfosten und rollt in Richtung Spielfeld. Torwart A nimmt ihn auf und wirft ihn zu A7, der ein Tor erzielt. Richtige Entscheidung?",
		answers: [
			"7-Meter-Wurf für B",
			"Tor",
			"Freiwurf für B",
			"Abwurf für A"
		],
		correctAnswers: [2],
		ruleReferences: ["6:7b", "13:1a"]
	},
	{
		id: 68,
		text: "Bei einem riskanten Anspiel von Außenspieler B3 zu Kreisspieler B11 bemerkt dieser im Sprung, dass er den Ball nicht wird fangen können. Deshalb schlägt er ihn mit der Faust zu B9, der mitten im Spielfeld steht. Richtige Entscheidung?",
		answers: [
			"Weiterspielen lassen",
			"Freiwurf für A bei B9",
			"Freiwurf für A an der Freiwurflinie bei B11",
			"Hinausstellung von B11"
		],
		correctAnswers: [0],
		ruleReferences: ["7:1"]
	},
	{
		id: 69,
		text: "Einwurf für B. Der korrekt ausführende B7 sieht, dass Torwart A12 weit vor seinem Tor steht, und wirft den Ball direkt in Richtung leeres Tor. Feldspieler A3 betritt den Torraum und fängt den Ball. Entscheidung?",
		answers: [
			"Tor",
			"Freiwurf für B",
			"7-Meter-Wurf für B",
			"Progressive Bestrafung von A3"
		],
		correctAnswers: [2],
		ruleReferences: ["15:2", "14:1a"]
	},
	{
		id: 70,
		text: "A4 steht, fängt den Ball, springt und landet auf dem rechten Fuß, springt auf den linken Fuß und wirft. Wie viele Schritte hat er ausgeführt?",
		answers: [
			"1",
			"2",
			"3",
			"4"
		],
		correctAnswers: [1],
		ruleReferences: ["7:3a"]
	},
	{
		id: 71,
		text: "Ein Spieler springt und fängt den Ball. Beim Landen berührt er den Boden mit beiden Füßen gleichzeitig. Danach hebt er den rechten Fuß, macht einen seitlichen Schritt und zieht den linken Fuß nach. Wie viele Schritte machte er?",
		answers: [
			"1",
			"3",
			"0",
			"2"
		],
		correctAnswers: [0],
		ruleReferences: ["7:3d"]
	},
	{
		id: 72,
		text: "Ein Spieler fängt den Ball in der Luft, landet auf dem rechten Fuß und springt mit diesem ab. Er setzt den linken und dann den rechten Fuß auf und wirft. Wie viele Schritte machte er?",
		answers: [
			"3",
			"2",
			"1",
			"0"
		],
		correctAnswers: [1],
		ruleReferences: ["7:3"]
	},
	{
		id: 73,
		text: "A10 führt nach einem Torerfolg von B den Anwurf aus. Da er keinen anspielbaren Feldspieler sieht, überrascht er seinen Torwart A17, der im Torraum steht, mit einem Rückpass. A17 nimmt den Ball auf und spielt zu A9. Entscheidung?",
		answers: [
			"Weiterspielen lassen",
			"7-Meter-Wurf für B",
			"Freiwurf für B",
			"Wiederholung des Anwurfs nach Korrektur"
		],
		correctAnswers: [2],
		ruleReferences: ["6:7b", "13:1a"]
	},
	{
		id: 74,
		text: "A5 muss beim Versuch, den Ball zu fangen, mehrfach nachfassen, ehe er ihn unter Kontrolle hat. Anschließend macht er drei Schritte, tippt einmal und wirft den Ball nach weiteren drei Schritten ins Tor. Richtige Entscheidung?",
		answers: [
			"Freiwurf für B",
			"Tor",
			"Abwurf für B",
			"Einwurf für B"
		],
		correctAnswers: [1],
		ruleReferences: ["7:7", "7:3", "7:4"]
	},
	{
		id: 75,
		text: "Bei der Ausführung eines 7-Meter-Wurfs trifft A4 den Torpfosten. Der Ball prallt zu ihm zurück, ohne vorher einen Mit- oder Gegenspieler berührt zu haben. A4 wirft ihn ins Tor. Richtige Entscheidung?",
		answers: [
			"Freiwurf für B",
			"Abwurf für B",
			"Tor"
		],
		correctAnswers: [2],
		ruleReferences: ["14:6"]
	},
	{
		id: 76,
		text: "A5 will einen Angriff einleiten. Dazu prellt er wiederholt. Nach 5 Schritten nimmt er den Ball auf und spielt ihn ab. Richtige Entscheidung?",
		answers: [
			"Freiwurf für B",
			"Freiwurf für A",
			"Weiterspielen lassen",
			"7-Meter-Wurf für B"
		],
		correctAnswers: [2],
		ruleReferences: ["7:4b"]
	},
	{
		id: 77,
		text: "Nach dem Schlusssignal ist von Mannschaft B noch ein Freiwurf auszuführen. Vor der Ausführung wechselt Mannschaft A, nachdem A8 und A9 gleichzeitig die Spielfläche verlassen haben, die hochgewachsenen A10 und kurz danach A11 ein. Welche der nachfolgenden Aussagen trifft/treffen zu?",
		answers: [
			"Der Zeitnehmer wird pfeifen und die Schiedsrichter auf einen Wechselfehler von Mannschaft A hinweisen.",
			"A10 wird wegen Wechselfehlers hinausgestellt",
			"A11 wird wegen Wechselfehlers hinausgestellt",
			"Der Zeitnehmer wird nicht pfeifen, da alles regelkonform war",
			"A 11 muss die Spielfläche verlassen, A8 oder A9 darf zurückkehren"
		],
		correctAnswers: [0, 1, 4],
		ruleReferences: ["2:5", "4:5", "16:3a"]
	},
	{
		id: 78,
		text: "B6 fängt den Ball, rutscht aus und kommt zu Fall. Auf dem Rücken liegend spielt er zu B9 weiter. Richtige Entscheidung?",
		answers: [
			"Freiwurf für A",
			"Weiterspielen lassen",
			"Freiwurf für B"
		],
		correctAnswers: [1],
		ruleReferences: ["7:6"]
	},
	{
		id: 79,
		text: "A3 läuft zwischen zwei Gegenspieler und stößt den Ball vorwärts in die eigene Laufrichtung. Bevor der Ball den Boden berührt, fängt er ihn und hat jetzt freie Bahn. Nach einmaligem Tippen wirft er den Ball ins Tor. Richtige Entscheidung?",
		answers: [
			"Tor",
			"Freiwurf für B",
			"Abwurf für B"
		],
		correctAnswers: [1],
		ruleReferences: ["7:7", "13:1a"]
	},
	{
		id: 80,
		text: "A7 will nach einem Tippen A5 anspielen, der aber gedeckt wird. A7 ist so irritiert, dass ihm der Ball entgleitet. Er fängt ihn jedoch wieder auf, bevor er den Boden berührt. Richtige Entscheidung?",
		answers: [
			"Weiterspielen lassen",
			"Freiwurf für B",
			"Freiwurf für A"
		],
		correctAnswers: [1],
		ruleReferences: ["7:7", "13:1a"]
	},
	{
		id: 81,
		text: "A7 steht in der Abwehrmitte. B3 versucht, einen Bodenpass anzubringen. A7 versucht zum wiederholten Male, den Wurf gezielt mit einem Bein abzuwehren. Der Ball trifft seinen Unterschenkel und springt von dort ins Tor von A. Richtige Entscheidung?",
		answers: [
			"Freiwurf für B",
			"Tor",
			"7-Meter-Wurf für B",
			"Progressive Bestrafung von A7"
		],
		correctAnswers: [1, 3],
		ruleReferences: ["7:8", "9:1", "13:2", "16:1b"]
	},
	{
		id: 82,
		text: "A wurde ein Einwurf zuerkannt. A8 wirft direkt aufs Tor. Der Ball prallt vom Pfosten zurück zu A8, der ihn fängt und ins Tor wirft. Richtige Entscheidung?",
		answers: [
			"Abwurf",
			"Tor",
			"Wiederholung des Einwurfs mit Anpfiff",
			"Freiwurf für B"
		],
		correctAnswers: [1],
		ruleReferences: ["15:2"]
	},
	{
		id: 83,
		text: "Torwart A wehrt ab und wirft sich nach dem rollenden Ball. B7 steht unbedrängt bereit, den Ball aufzunehmen. Torwart A schlägt den Ball im letzten Moment mit der Hand über die eigene Torauslinie. Richtige Entscheidung?",
		answers: [
			"Freiwurf für B",
			"Einwurf für B",
			"Abwurf für A",
			"Freiwurf für A"
		],
		correctAnswers: [2],
		ruleReferences: ["12:1"]
	},
	{
		id: 84,
		text: "Torwart A9 fällt der Ball beim Abwurfversuch aus der Hand direkt auf den Fuß. Von dort rollt er über die Torraumlinie ins Spielfeld. A9 läuft dem Ball nach, nimmt ihn auf und geht mit dem Ball in der Hand zurück in seinen Torraum, um erneut abzuwerfen. Richtige Entscheidung?",
		answers: [
			"7-Meter-Wurf gegen A",
			"Freiwurf gegen A",
			"Time-out",
			"Korrektur, Abwurf mit Anpfiff"
		],
		correctAnswers: [3],
		ruleReferences: ["12:2", "15:5b"]
	},
	{
		id: 85,
		text: "Wie ist mehrfach wiederholtes passives Spiel zu ahnden?",
		answers: [
			"Freiwurf und Verwarnung",
			"Freiwurf und Hinausstellung",
			"Freiwurf",
			"Freiwurf und Disqualifikation"
		],
		correctAnswers: [2],
		ruleReferences: ["7:11", "13:1a"]
	},
	{
		id: 86,
		text: "Nach einem Wurf von A prallt der Ball vom Pfosten ab, trifft den neben dem Tor im Torraum stehenden Schiedsrichter und überquert deshalb nicht die Torauslinie, sondern die Seitenlinie. Richtige Entscheidung?",
		answers: [
			"Freiwurf für A",
			"Einwurf für B",
			"Abwurf für B"
		],
		correctAnswers: [1],
		ruleReferences: ["7:9", "11:1"]
	},
	{
		id: 87,
		text: "A5 führt einen Einwurf aus, der Ball trifft den Schiedsrichter (im Spielfeld) und gelangt ins Tor. Richtige Entscheidung?",
		answers: [
			"Wiederholung mit Anpfiff",
			"Freiwurf für B",
			"Freiwurf für A",
			"Tor"
		],
		correctAnswers: [3],
		ruleReferences: ["7:9", "15:2"]
	},
	{
		id: 88,
		text: "Bei einem Angriff von A sperrt Kreisspieler A7 ohne Ball Gegenspieler B4 mit seinem Rumpf. Richtige Entscheidung?",
		answers: [
			"Freiwurf für B",
			"Progressive Bestrafung von A7",
			"Weiterspielen lassen"
		],
		correctAnswers: [2],
		ruleReferences: ["8:1b"]
	},
	{
		id: 89,
		text: "Außenspieler A4 kommt zu einer klaren Torgelegenheit. Im letzten Moment versucht B7, ihm den Ball aus der Hand zu spielen, wobei er allerdings nur A4’s Unterarm trifft. Der Ball geht am Tor vorbei. Richtige Entscheidung?",
		answers: [
			"Freiwurf für A",
			"7-Meter-Wurf für A",
			"Hinausstellung von B7",
			"Verwarnung von B7",
			"Keine Bestrafung von B7"
		],
		correctAnswers: [1, 4],
		ruleReferences: ["8:2a", "14:1a"]
	},
	{
		id: 90,
		text: "A3 umspielt mit dem Ball B4 an der Freiwurflinie. Nach dem dritten Schritt will er werfen, wird jedoch von B4 gestoßen. Unmittelbar nach dem 4. Schritt erzielt er ein schönes Tor. Ein anderer Spieler von B hätte nicht eingreifen können. Richtige Entscheidung?",
		answers: [
			"Vorteil und damit Tor",
			"Progressive Bestrafung von B4",
			"Freiwurf für A",
			"7-Meter-Wurf für A"
		],
		correctAnswers: [1, 3],
		ruleReferences: ["8:3c", "16:1a", "14:1a"]
	},
	{
		id: 91,
		text: "A6 läuft einen Gegenstoß, Torwart B12 verlässt seinen Torraum, gelangt in Ballbesitz, verursacht aber einen Zusammenprall mit A6. Möglicherweise hätte aber ein Abwehrspieler Spieler A6 noch regelkonform stoppen können Richtige Entscheidung?",
		answers: [
			"Hinausstellung von B12",
			"Disqualifikation von B12",
			"7-Meter-Wurf für A",
			"Freiwurf für A",
			"Disqualifikation von B12, schriftlicher Bericht"
		],
		correctAnswers: [1, 2],
		ruleReferences: ["8:5 Kommentar", "16:6a", "14:1a", "Erläuterung 6b"]
	},
	{
		id: 92,
		text: "A2 möchte einen Mitspieler in der anderen Spielfeldhälfte anspielen. Dieser wird aber von B5 fest umklammert. B5 hatte vorher schon eine Verwarnung wegen Anrennens eines Gegenspielers ohne Ball erhalten. Richtige Entscheidung?",
		answers: [
			"Freiwurf für A",
			"Hinausstellung von B5",
			"Disqualifikation von B5",
			"Schriftlicher Bericht"
		],
		correctAnswers: [0, 1],
		ruleReferences: ["8:4b", "13:1b", "16:3c"]
	},
	{
		id: 93,
		text: "Der am Kreis freistehende A9 wird angespielt, aber von B2 am Wurfarm zurückgezogen. Richtige Entscheidung?",
		answers: [
			"Freiwurf für A",
			"7-Meter-Wurf für A",
			"Hinausstellung von B2",
			"Disqualifikation von B2",
			"Schriftlicher Bericht"
		],
		correctAnswers: [1, 3],
		ruleReferences: ["8:5", "14:1a", "16:6a"]
	},
	{
		id: 94,
		text: "Was ist richtig, wenn ein Spieler auf der Spielfläche blutet?",
		answers: [
			"Der Spieler muss die Spielfläche sofort und unaufgefordert verlassen.",
			"Der Spieler darf bis zur nächsten Unterbrechung auf der Spielfläche bleiben.",
			"Der Mitspieler, der den blutenden Spieler ersetzt, darf außerhalb der Wechsellinien eintreten.",
			"Der Spieler darf vor der nächsten Unterbrechung nicht zurückkommen.",
			"Wenn der Spieler die Spielfläche entgegen ausdrücklicher Anweisung der Schiedsrichter nicht verlässt, ist er wegen unsportlichen Verhaltens zu bestrafen."
		],
		correctAnswers: [0, 4],
		ruleReferences: ["4:10", "8:7"]
	},
	{
		id: 95,
		text: "Kurz nachdem B9 in der ersten Spielminute wegen Stoßens verwarnt worden ist, umklammert B7 den Kreisspieler von A (keine Torgelegenheit). Richtige Entscheidung?",
		answers: [
			"Freiwurf für A",
			"7-Meter-Wurf für A",
			"Verwarnung von B7",
			"Hinausstellung von B7"
		],
		correctAnswers: [0, 2],
		ruleReferences: ["8:3", "13:1b", "16:1a"]
	},
	{
		id: 96,
		text: "Ehe A4, frei am Torraum angespielt, einen Torwurf anbringen kann, wird er von B3 zu Boden gezogen und verliert den Ball. Richtige Entscheidung?",
		answers: [
			"Verwarnung von B3",
			"Hinausstellung von B3",
			"Disqualifikation von B3",
			"Freiwurf für A",
			"7-Meter-Wurf für A"
		],
		correctAnswers: [1, 4],
		ruleReferences: ["8:4b", "16:3c", "14:1a"]
	},
	{
		id: 97,
		text: "Wann ist ein Spieler zu disqualifizieren?",
		answers: [
			"Bei einer Regelwidrigkeit, die die Gesundheit eines Gegenspielers gefährdet",
			"Bei einem besonders unsportlichen Verhalten auf oder außerhalb der Spielfläche",
			"Bei wiederholtem unsportlichen Verhalten auf der Spielfläche",
			"Bei fehlerhaftem Wechseln während einer Hinausstellungszeit"
		],
		correctAnswers: [0, 1],
		ruleReferences: ["8:5", "8:6", "16:6a"]
	},
	{
		id: 98,
		text: "Ein Mannschaftsoffizieller reklamiert und wird hinausgestellt. Vor Wiederanpfiff protestiert er weiter und wird disqualifiziert. Richtige Entscheidung?",
		answers: [
			"Zwei Spieler seines Teams müssen die Spielfläche für je 2 Minuten verlassen.",
			"Ein Spieler seines Teams muss die Spielfläche für 4 Minuten verlassen.",
			"Seine Mannschaft wird für 2 Minuten um einen Spieler reduziert."
		],
		correctAnswers: [2],
		ruleReferences: ["16:9"]
	},
	{
		id: 99,
		text: "Unmittelbar vor Ende der 1. Halbzeit begeht A7 eine Tätlichkeit gegen B5 und nimmt ihm dadurch eine klare Torgelegenheit. Bevor der Schiedsrichter pfeifen kann, ertönt das automatische Schlusssignal. Richtige Entscheidung?",
		answers: [
			"Die 1. Halbzeit ist zu Ende, keine Bestrafung von A7",
			"Die 1. Halbzeit ist zu Ende, kein Freiwurf oder 7-Meter-Wurf mehr möglich",
			"Disqualifikation von A7 mit schriftlichem Bericht",
			"7-Meter-Wurf für B",
			"Disqualifikation von A7"
		],
		correctAnswers: [2, 3],
		ruleReferences: ["2:4", "8:10a", "16:6b", "14:1a"]
	},
	{
		id: 100,
		text: "A8 wird wegen Stoßens eines Spielers hinausgestellt. Daraufhin beschimpft er den Schiedsrichter: ”Du dummer Kerl, Du Idiot, Du lernst das nie!” Bevor er das Spielfeld verlässt, spuckt er dem Schiedsrichter noch ins Gesicht. Richtige Entscheidung?",
		answers: [
			"Disqualifikation von A8, Mannschaft A für 2 Minuten mit einem Spieler weniger",
			"Disqualifikation von A8, Mannschaft A für 2 Minuten mit zwei Spielern weniger",
			"Disqualifikation von A8, Mannschaft A für 4 Minuten mit einem Spieler weniger; Schriftlicher Bericht",
			"Disqualifikation von A8, Mannschaft A für 2 Minuten mit zwei Spielern weniger; Schriftlicher Bericht"
		],
		correctAnswers: [2],
		ruleReferences: ["8:10a", "16:6b", "16:9c"]
	},
	{
		id: 101,
		text: "Nach einem Wurf auf das Tor von B prallt der Ball vom Torpfosten ab, trifft den Fuß des im Spielfeld stehenden B3 und springt von dort ins Tor. Richtige Entscheidung?",
		answers: [
			"Freiwurf für A",
			"Tor",
			"7-Meter-Wurf für A",
			"Abwurf für B"
		],
		correctAnswers: [1],
		ruleReferences: ["9:1", "7:8", "13:2"]
	},
	{
		id: 102,
		text: "Von Torwart A abgewehrt prallt der Ball vom Rücken von A3, der 2 Meter im Torraum steht, ins Tor. Richtige Entscheidung?",
		answers: [
			"Freiwurf für B",
			"7-Meter-Wurf für B",
			"Verwarnung/Hinausstellung von A3",
			"Tor"
		],
		correctAnswers: [3],
		ruleReferences: ["6:3b", "9:1", "13:2"]
	},
	{
		id: 103,
		text: "Torwart B hat einen Wurf gehalten und will sofort einen Gegenstoß einleiten. Dabei entgleitet ihm der Ball und rollt ins Tor. Richtige Entscheidung?",
		answers: [
			"Tor",
			"Abwurf wiederholen lassen",
			"Einwurf für A",
			"Freiwurf für A"
		],
		correctAnswers: [1],
		ruleReferences: ["12:1", "12:2", "15:2"]
	},
	{
		id: 104,
		text: "Torwart A hält den Ball, der die Torlinie zu drei Vierteln passiert hat, 4 Sekunden auf der Torlinie fest. Richtige Entscheidung?",
		answers: [
			"Tor",
			"Freiwurf B",
			"Abwurf für A"
		],
		correctAnswers: [2],
		ruleReferences: ["9:1", "6:4", "12:1"]
	},
	{
		id: 105,
		text: "A3 betritt seinen Torraum und versucht, einen Wurf mit dem Fuß abzuwehren. Der Ball prallt von seinem Fuß ins Tor. Richtige Entscheidung?",
		answers: [
			"Freiwurf für B",
			"7-Meter-Wurf für B",
			"Tor",
			"Abwurf für A"
		],
		correctAnswers: [2],
		ruleReferences: ["9:1", "14:2"]
	},
	{
		id: 106,
		text: "A6 wirft einen Einwurf in Richtung seines Torwarts. Dieser bemerkt das zu spät, der Ball gelangt ins Tor. Richtige Entscheidung?",
		answers: [
			"Freiwurf für B",
			"Tor",
			"Abwurf für A",
			"Wiederholung des Einwurfs mit Anpfiff"
		],
		correctAnswers: [1],
		ruleReferences: ["9:1", "15:2"]
	},
	{
		id: 107,
		text: "A11 wirft einen \"Heber\" über Torwart B, der weit vor seinem Tor steht. Bevor der Ball die Torlinie überqueren kann, wird er vom Manager von B, der in der ersten Zuschauerreihe hinter dem Tor saß, weggestoßen. Richtige Entscheidung?",
		answers: [
			"7-Meter-Wurf für A",
			"Tor für A",
			"Disqualifikation des Managers von B",
			"Schriftlicher Bericht"
		],
		correctAnswers: [1, 3],
		ruleReferences: ["9:1", "Kommentar"]
	},
	{
		id: 108,
		text: "Ein im Spielprotokoll nicht eingetragener Funktionär der Heimmannschaft A fängt 2 Sekunden vor Spielschluss beim Stand von 25:25 den auf das leere Tor zufliegenden Ball ab und verhindert so einen Torerfolg von B. Unmittelbar danach ertönt das automatische Schlusssignal. Was ist richtig?",
		answers: [
			"Endstand 25:25",
			"7-Meter-Wurf gegen A",
			"Endstand 25:26",
			"Disqualifikation des Funktionärs",
			"Schriftlicher Bericht"
		],
		correctAnswers: [2, 4],
		ruleReferences: ["9:1 Kommentar"]
	},
	{
		id: 109,
		text: "Bis wann darf der Schiedsrichter ein bereits anerkanntes Tor annullieren?",
		answers: [
			"Bis zum Anpfiff des Anwurfs",
			"Bis zum Schlusssignal",
			"Wenn das Tor nach einer Unterbrechung durch den Zeitnehmer erzielt wurde, muss er es annullieren, selbst wenn der Anwurf schon erfolgte",
			"Überhaupt nicht mehr"
		],
		correctAnswers: [0, 2],
		ruleReferences: ["2:9 Kommentar", "9:2"]
	},
	{
		id: 110,
		text: "Mannschaft A gewinnt das Losen und entscheidet sich für den Anwurf. Mannschaft B verlangt Seitenwechsel. Richtige Entscheidung?",
		answers: [
			"Die Seiten wechseln lassen",
			"Die Seiten wechseln lassen, wenn A einverstanden ist",
			"Nochmals losen",
			"Die Seiten nicht wechseln lassen"
		],
		correctAnswers: [0],
		ruleReferences: ["10:1"]
	},
	{
		id: 111,
		text: "Mannschaft A gewinnt das Losen. Sie verlangt, dass die Seiten gewechselt werden. Mannschaft B vertritt die Ansicht, dass A anwerfen müsse. Richtige Entscheidung?",
		answers: [
			"Anwurf A",
			"Seitenwechsel, Anwurf B",
			"Losen wiederholen",
			"Die Mannschaftsvertreter müssen sich einigen"
		],
		correctAnswers: [1],
		ruleReferences: ["10:1"]
	},
	{
		id: 112,
		text: "Wo darf der Spieler den Anwurf ausführen?",
		answers: [
			"Bis zu 3 Meter vor der Mittellinie in seiner eigenen Hälfte",
			"Bis zu 3 Meter hinter der Mittellinie in der gegnerischen Hälfte",
			"In der Mitte des Spielfelds, einen Fuß auf der Mittellinie; seitliche Toleranz 1,5 Meter"
		],
		correctAnswers: [2],
		ruleReferences: ["10:3"]
	},
	{
		id: 113,
		text: "Kurz vor Spielende – Spielstand 15:15 - erzielt der Gastverein das 15:16. Der Heimverein will einen schnellen Anwurf ausführen. Der Ausführende steht mit einem Fuß vor, mit dem anderen Fuß hinter der Mittellinie am Mittelpunkt. Richtige Entscheidung?",
		answers: [
			"Korrektur, Anpfiff",
			"Die Stellung ist korrekt, Anpfiff",
			"Time-out, Korrektur, Anpfiff"
		],
		correctAnswers: [0],
		ruleReferences: ["10:3", "15:1"]
	},
	{
		id: 114,
		text: "Mannschaft A hat Anwurf. Torwart B befindet sich noch nicht in seinem Torraum. Trotzdem pfeift der Feldschiedsrichter das Spiel an; A9 wirft direkt ein Tor. Richtige Entscheidung?",
		answers: [
			"Freiwurf für A an der Mittellinie",
			"Wiederholung des Anwurfs",
			"Tor",
			"Freiwurf gegen A"
		],
		correctAnswers: [2],
		ruleReferences: ["9:1", "10:4", "15:2"]
	},
	{
		id: 115,
		text: "A3 führt einen Einwurf zwei Meter außerhalb der Seitenlinie aus. Richtige Entscheidung?",
		answers: [
			"Weiterspielen lassen, ist erlaubt",
			"Freiwurf für B",
			"Wiederholung des Einwurfs",
			"Wiederholung des Einwurfs mit Anpfiff"
		],
		correctAnswers: [3],
		ruleReferences: ["11:4", "15:1", "15:5"]
	},
	{
		id: 116,
		text: "B4 steht mit einem Fuß auf der Seitenlinie, mit dem anderen im Spielfeld und trifft mit seinem Einwurf direkt ins Tor. Richtige Entscheidung?",
		answers: [
			"Tor",
			"Einwurf für B mit Anpfiff wiederholen lassen",
			"Freiwurf für A",
			"Abwurf für A"
		],
		correctAnswers: [0],
		ruleReferences: ["11:4", "15:2"]
	},
	{
		id: 117,
		text: "A6 führt, mit einem Fuß im und mit dem anderen außerhalb des Spielfelds stehend, einen Einwurf aus und zwar direkt ins Tor von B. Richtige Entscheidung?",
		answers: [
			"Erneuter Einwurf für A nach Anpfiff",
			"Freiwurf für B",
			"Tor",
			"Abwurf für B"
		],
		correctAnswers: [0],
		ruleReferences: ["11:4", "15:1", "15:5"]
	},
	{
		id: 118,
		text: "A7 trifft mit einem Einwurf den Schiedsrichter, nimmt den Ball wieder auf und wirft ihn ins Tor von B. Richtige Entscheidung?",
		answers: [
			"Abwurf für B",
			"Tor",
			"Freiwurf für B",
			"Wiederholung des Einwurfs mit Anpfiff",
			"Freiwurf für A"
		],
		correctAnswers: [2],
		ruleReferences: ["7:9", "15:2", "13:1a"]
	},
	{
		id: 119,
		text: "Wann ist ein Abwurf ausgeführt; wann also darf der Ball frühestens von einem Feldspieler gespielt werden?",
		answers: [
			"Während der Ball sich noch über dem Torraum befindet",
			"Wenn der Ball die Torraumlinie in Richtung Spielfeld passiert hat",
			"Wenn der Ball die Hand des Torwarts verlassen hat",
			"Wenn ein Mitspieler des Torwarts den Ball berührt hat"
		],
		correctAnswers: [1],
		ruleReferences: ["12:2"]
	},
	{
		id: 120,
		text: "Wurf auf das Tor von B. Der Ball prallt von der Latte gegen ein Sportgerät an der Hallendecke über dem Torraum von B. Von dort fällt er exakt in die fangbereiten Arme des Torwarts. Richtige Entscheidung?",
		answers: [
			"Abwurf",
			"Einwurf für B",
			"Freiwurf für B mit Anpfiff",
			"Einwurf für B mit Anpfiff",
			"Time-out verbindlich"
		],
		correctAnswers: [1],
		ruleReferences: ["11:1"]
	},
	{
		id: 121,
		text: "Torwart A will abwerfen. Ein Spieler von B versucht, an der Torraumlinie regelgerecht in Ballbesitz zu gelangen. Dies gelingt ihm und er kommt zu einem Torerfolg. Richtige Entscheidung?",
		answers: [
			"Freiwurf für A",
			"Tor",
			"Abwurf für A",
			"Progressive Bestrafung für den Spieler von B"
		],
		correctAnswers: [1],
		ruleReferences: ["12:2"]
	},
	{
		id: 122,
		text: "Freiwurf für A. Nach allgemein korrekter Aufstellung legt A10 den Ball nieder, um eine Anweisung zu geben. B7 nimmt blitzschnell den Ball auf und läuft einen Gegenstoß. Richtige Entscheidung?",
		answers: [
			"Weiterspielen lassen",
			"Freiwurf mit Anpfiff wiederholen",
			"Freiwurf für A, Verwarnung von B7",
			"Freiwurf für A, Hinausstellung von B7"
		],
		correctAnswers: [0],
		ruleReferences: ["15:2"]
	},
	{
		id: 123,
		text: "B will einen Freiwurf ausführen; A11 steht nur 2 Meter entfernt und versucht, die Ausführung zu verzögern. Richtige Entscheidung?",
		answers: [
			"Persönliche Strafe für A11, Freiwurf anpfeifen",
			"Freiwurf anpfeifen",
			"Hinausstellung von A11",
			"A11 korrigieren und Freiwurf anpfeifen"
		],
		correctAnswers: [0],
		ruleReferences: ["15:5b", "15:9", "16:1a", "16:3b"]
	},
	{
		id: 124,
		text: "Freiwurf für A. Bevor A5 den Ball aufnehmen kann, tut B6 dies und läuft mit dem Ball unter dem Arm in Richtung eigenes Tor. Nach einigen Schritten rollt er den Ball A5 zu. Richtige Entscheidung?",
		answers: [
			"Hinausstellung von B6",
			"Freiwurf für A anpfeifen",
			"Verwarnung von B6",
			"Weiterspielen lassen",
			"Time-out"
		],
		correctAnswers: [0, 1, 4],
		ruleReferences: ["13:5", "15:5b", "8:8b", "16:3f"]
	},
	{
		id: 125,
		text: "Bei einem Gegenstoß von A5 läuft ein Offizieller von B von der Bank aus in Richtung eigener Torraum. A5 ist so verdutzt, dass er seinen Lauf abbricht. Nach Auffassung des Schiedsrichters besaß er eine klare Torgelegenheit. Der fehlbare Offizielle hatte weder Spieler noch Ball berührt, die kürzeste Distanz zu A5 betrug ca. 10 Meter. Richtige Entscheidung?",
		answers: [
			"Time-out",
			"Freiwurf für A",
			"7-Meter-Wurf für A",
			"Disqualifikation des Offiziellen",
			"Disqualifikation des Offiziellen mit schriftlichem Bericht"
		],
		correctAnswers: [0, 2, 4],
		ruleReferences: ["2:8a", "14:1a", "8:10b", "16:6b"]
	},
	{
		id: 126,
		text: "Bei einem 7-Meter-Wurf für A gelangt der Ball hinter die Torlinie, doch hatte ein Mitspieler von A die Freiwurflinie überschritten, bevor der Ball die Hand von A7 verlassen hatte. Richtige Entscheidung?",
		answers: [
			"Tor",
			"Wiederholung des Wurfs",
			"Freiwurf für Mannschaft B",
			"Wiederholung und Verwarnung des fehlbaren Spielers"
		],
		correctAnswers: [2],
		ruleReferences: ["13:1a 14:7", "15:7"]
	},
	{
		id: 127,
		text: "Mannschaft A hat einen Gegenstoß eingeleitet. A5 will A7 anspielen, weil dieser sich ganz allein an der gegnerischen Torraumlinie befindet. Ein Offizieller von B läuft auf das Spielfeld und fängt den Pass ab. Richtige Entscheidung?",
		answers: [
			"Freiwurf für A",
			"7-Meter-Wurf für A",
			"Hinausstellung des Offiziellen von B",
			"Disqualifikation des Offiziellen von B",
			"Disqualifikation des Offiziellen von B, schriftlicher Bericht"
		],
		correctAnswers: [1, 4],
		ruleReferences: ["14:1a", "8:10b", "16:6b"]
	},
	{
		id: 128,
		text: "A5 hat eine klare Torgelegenheit. Mannschaft B begeht einen Wechselfehler. Der Zeitnehmer pfeift deshalb ab, als A5 gerade zum Torwurf ansetzt. Richtige Entscheidung?",
		answers: [
			"Hinausstellung des eintretenden Spielers",
			"Disqualifikation des eintretenden Spielers",
			"Freiwurf für A",
			"7-Meter-Wurf für A"
		],
		correctAnswers: [0, 3],
		ruleReferences: ["4:5", "14:1a", "16:3a; Erläuterung 7"]
	},
	{
		id: 129,
		text: "Abwehrspieler B7 sieht, dass Kreisspieler A9 völlig frei steht. Um einen Pass zu A9 zu verhindern, läuft er (zum wiederholten Mal) durch den Torraum. Er befindet sich bereits wieder außerhalb des Torraums, als A9 tatsächlich angespielt wird. A9 dreht sich und läuft frontal gegen B7. Richtige Entscheidung?",
		answers: [
			"7-Meter-Wurf für A",
			"Freiwurf für A",
			"Freiwurf für B",
			"Progressive Strafe gegen B7"
		],
		correctAnswers: [0, 3],
		ruleReferences: ["6:2c", "14:1a", "8:7f", "16:1b"]
	},
	{
		id: 130,
		text: "Welche der folgenden Handlungen ist/sind als besonders grob unsportliches Verhalten einzustufen und daher mit Disqualifikation und schriftlichem Bericht zu bestrafen?",
		answers: [
			"Wiederholte Abwehr mit Fuß oder Unterschenkel durch einen Feldspieler",
			"Vereiteln einer klaren Torgelegenheit durch einen Offiziellen",
			"Spucken gegen eine andere Person",
			"Wiederholte Spielverzögerung, um Zeit zu schinden"
		],
		correctAnswers: [1, 2],
		ruleReferences: ["8:10a", "8:10b", "16:6b"]
	},
	{
		id: 131,
		text: "A5 überschreitet während des 7-Meter-Wurfs von A3 die Freiwurflinie, nachdem der Schiedsrichter den Wurf angepfiffen, aber bevor der Ball die Hand des Werfers verlassen hat. Torwart B hält. Richtige Entscheidung?",
		answers: [
			"Wiederholung des 7-Meter-Wurfs",
			"Freiwurf für B",
			"Abwurf für B"
		],
		correctAnswers: [2],
		ruleReferences: ["6:4", "14:7", "13:2", "12:1"]
	},
	{
		id: 132,
		text: "B2 setzt nach Anpfiff zum 7-Meter-Wurf an. In diesem Moment macht A5 einen Schritt über die Freiwurflinie. B2 erzielt trotzdem ein Tor. Richtige Entscheidung?",
		answers: [
			"Tor und Disqualifikation von A5",
			"Tor und Hinausstellung von A5",
			"Tor",
			"7-Meter-Wurf wiederholen, Disqualifikation von A5"
		],
		correctAnswers: [2],
		ruleReferences: ["14:8"]
	},
	{
		id: 133,
		text: "A9 blockt den von B3 mittels Sprungwurf geworfenen Ball ab, der auf den Boden fällt. A9 nimmt diesen Ball mit beiden Händen auf, beginnt einen Prellvorgang (Gegenstoß) und wirft ins Tor von B. Richtige Entscheidung?",
		answers: [
			"Tor für A",
			"Freiwurf für B",
			"Hinausstellung von A9",
			"Time out"
		],
		correctAnswers: [0],
		ruleReferences: ["8:1a", "7:4"]
	},
	{
		id: 134,
		text: "B18 wirft auf das Tor. Der Wurf wird so geblockt, dass der Ball seine Flugbahn deutlich in Richtung Torauslinie (innerhalb des Torraums) ändert. Torwart A1 läuft dem Ball nach und kann ihn gerade noch mit dem Fuß über die Torauslinie befördern. Richtige Entscheidung?",
		answers: [
			"Abwurf für A",
			"Einwurf für B",
			"Freiwurf für B",
			"Verwarnung des Torwarts A1"
		],
		correctAnswers: [0],
		ruleReferences: ["12:1", "5:10"]
	},
	{
		id: 135,
		text: "B7 (mit Ball) will einen Gegenstoß einleiten, wird aber von A17 festgehalten. Der Schiedsrichter will gerade pfeifen, als er auf Vorteil erkennt, denn B8 hat den Ball noch bekommen und wirft auf das Tor. Torwart A12 hält und will einen Gegenstoß einleiten. Gegen A und B wurden bereits je 3 Verwarnungen ausgesprochen. Richtige Entscheidung?",
		answers: [
			"Weiterspielen lassen",
			"Hinausstellung von A17",
			"Abwurf",
			"Time out",
			"Freiwurf für B"
		],
		correctAnswers: [1, 2, 3],
		ruleReferences: ["2:8a", "13:2", "16:3d"]
	},
	{
		id: 136,
		text: "Freiwurf für B an der Freiwurflinie von A. Dabei übersehen die Schiedsrichter zwischen Torraum- und Freiwurflinie B8, der angespielt wird und ein Tor erzielt. Richtige Entscheidung?",
		answers: [
			"Wiederholung des Freiwurfs mit Anpfiff",
			"Freiwurf für A",
			"Tor",
			"Verwarnung von B8"
		],
		correctAnswers: [0],
		ruleReferences: ["13:7", "15:5b", "15:7"]
	},
	{
		id: 137,
		text: "Die Schiedsrichter sind gegensätzlicher Auffassung, in welche Richtung ein Einwurf auszuführen ist. Was ist richtig?",
		answers: [
			"Der Feldschiedsrichter entscheidet",
			"Der Torschiedsrichter entscheidet",
			"Die Schiedsrichter einigen sich nach kurzer Rücksprache",
			"Time-out",
			"Kein Time-out, aber Einwurf nach Anpfiff"
		],
		correctAnswers: [2, 3],
		ruleReferences: ["2:8d", "17:7"]
	},
	{
		id: 138,
		text: "Torwart B führt aus dem Torraum einen weiten Abwurf aus. Der Ball gelangt ins Tor von A. Weder Mit- noch Gegenspieler hatten ihn vorher berührt. Richtige Entscheidung?",
		answers: [
			"Abwurf für A",
			"Einwurf für A",
			"Tor",
			"Verwarnung von Torwart B wegen unsportlichen Verhaltens"
		],
		correctAnswers: [2],
		ruleReferences: ["15:2"]
	},
	{
		id: 139,
		text: "Beim Betreten der Halle begegnen die Schiedsrichter dem bereits umgezogenen, aber noch nicht im Spielprotokoll eingetragenen B4. Er ruft sofort: ”Aber nicht schon wieder diese Idioten!” Er lässt sich erst in der 12. Minute als 14. Spieler nachtragen. Jetzt bemerkt ihn der Schiedsrichter. Richtige Entscheidung?",
		answers: [
			"Disqualifikation von B4",
			"B spielt für 2 Minuten mit einem Spieler weniger",
			"Keine Reduzierung von Mannschaft B auf der Spielfläche",
			"Schriftlicher Bericht",
			"B darf sich mit einem anderen Spieler auf 14 Spieler ergänzen"
		],
		correctAnswers: [0, 2, 3],
		ruleReferences: ["8:10a", "16:6b", "16:8", "16:11b"]
	},
	{
		id: 140,
		text: "Torwart B1 hält einen Ball, spielt ihn zu einem Mitspieler, geht in der Nähe des Auswechselraums an die Seitenlinie und verlässt das Spielfeld. Er holt sich sein Handtuch und eine Flasche, aus der er einen Schluck nimmt. Ein anderer Torwart von Mannschaft B geht nicht auf das Spielfeld. Richtige Entscheidung?",
		answers: [
			"Weiterspielen lassen, da dies gestattet ist",
			"Hinausstellung von B1 wegen Wechselfehlers",
			"Freiwurf für A in Höhe des Auswechselraums von B"
		],
		correctAnswers: [0],
		ruleReferences: ["4:4 Kommentar"]
	},
	{
		id: 141,
		text: "Bei einer Freiwurfentscheidung für A betritt ein Offizieller von B das Spielfeld und ruft: \"Aber das ist doch Freiwurf für uns!\" Die Offiziellen von B hatten zuvor während des Spiels noch keine Strafe erhalten. Richtige Entscheidung?",
		answers: [
			"Der Mannschaftsverantwortliche von B soll den fehlbaren Offiziellen aus der Halle führen",
			"Hinausstellung des Offiziellen, die von einem Spieler abgesessen werden muss",
			"Verwarnung des Offiziellen",
			"Freiwurf für A"
		],
		correctAnswers: [2, 3],
		ruleReferences: ["8:7a", "16:1b"]
	},
	{
		id: 142,
		text: "Wie viele Verwarnungen sollten gegen Offizielle einer Mannschaft im selben Spiel höchstens ausgesprochen werden?",
		answers: [
			"Keine",
			"1",
			"2",
			"3"
		],
		correctAnswers: [1],
		ruleReferences: ["16:1 Kommentar"]
	},
	{
		id: 143,
		text: "A5 hat bereits eine Verwarnung und zwei Hinausstellungen erhalten. Bei einem Freiwurf für B hält er (zum ersten Mal) den Abstand nicht ein. Richtige Entscheidung?",
		answers: [
			"Verwarnung",
			"Keine Strafe",
			"3.Hinausstellung und Disqualifikation",
		],
		correctAnswers: [2],
		ruleReferences: ["15:4", "15:9", "8:7c", "16:3d", "16:5", "16:6d"]
	},
	{
		id: 144,
		text: "A3 wurde auf der Spielfläche wegen eines progressiv zu bestrafenden Vergehens verwarnt. Nach einem Wechsel beleidigt er von der Auswechselbank aus den Schiedsrichter. Richtige Entscheidung?",
		answers: [
			"Disqualifikation, Reduzierung der Mannschaft auf der Spielfläche für 2 Minuten",
			"Disqualifikation, Schriftlicher Bericht, Reduzierung der Mannschaft auf der Spielfläche für 2 Minuten",
			"Hinausstellung von A3",
			"Time out"
		],
		correctAnswers: [1, 3],
		ruleReferences: ["8:10a", "16:6b"]
	},
	{
		id: 145,
		text: "Bei einem Gegenstoß wird B9 von A4, der schon verwarnt worden war, am Trikot festgehalten. Trotzdem kann B9 den Ball noch zu B8 spielen, der ein Tor erzielt. Der Schiedsrichter will nun A4 nachträglich bestrafen, der sitzt allerdings bereits auf der Auswechselbank. Richtige Entscheidung?",
		answers: [
			"Hinausstellung von A4; seine Mannschaft ist auf der Spielfläche für 2 Minuten zu reduzieren",
			"A4 darf in den nächsten 2 Minuten nicht mehr mitspielen (seine Mannschaft bleibt aber vollständig)",
			"Keine Bestrafung mehr möglich",
			"Disqualifikation von A4; seine Mannschaft ist auf der Spielfläche für 2 Minuten zu reduzieren"
		],
		correctAnswers: [0],
		ruleReferences: ["8:3", "16:3b"]
	},
	{
		id: 146,
		text: "Mannschaft A erhält einen Freiwurf, als B6 im Ballbesitz ist. B6 geht mit dem Ball vier Meter von der Stelle weg, wo A den Freiwurf ausführen müsste. Richtige Entscheidung?",
		answers: [
			"Verwarnung von B6",
			"Hinausstellung von B6",
			"Disqualifikation von B6",
			"Freiwurf für A an der Stelle, wo der zum Freiwurf führende Fehler begangen wurde",
			"Freiwurf für A an der Stelle, wo der Ball sich befindet"
		],
		correctAnswers: [1, 3],
		ruleReferences: ["13:5", "13:6 Kommentar", "8:8b", "16:3f"]
	},
	{
		id: 147,
		text: "Nach einer Freiwurfentscheidung gegen A4 nimmt dieser den Ball, durchquert den Torraum und legt ihn hin. Richtige Entscheidung?",
		answers: [
			"Hinausstellung von A4",
			"Verwarnung von A4",
			"7-Meter-Wurf für B",
			"Freiwurf für B"
		],
		correctAnswers: [0, 3],
		ruleReferences: ["13:5", "8:8b", "16:3f"]
	},
	{
		id: 148,
		text: "Wann fängt die Hinausstellungszeit eines Spielers an?",
		answers: [
			"Wenn der Schiedsrichter das Zeichen für die Hinausstellung gegeben hat",
			"Wenn der hinausgestellte Spieler die Seitenlinie passiert hat",
			"Wenn der Schiedsrichter das Spiel wieder anpfeift",
			"Wenn der Zeitnehmer die Stoppuhr startet"
		],
		correctAnswers: [2],
		ruleReferences: ["16:5"]
	},
	{
		id: 149,
		text: "Wem sind Hinausstellungen anzuzeigen?",
		answers: [
			"Dem fehlbaren Spieler sowie Sekretär/Zeitnehmer",
			"Dem Mannschaftsverantwortlichen und dem Zeitnehmer",
			"Dem Zeitnehmer/Sekretär",
			"Dem fehlbaren Spieler, dem Mannschaftsverantwortlichen und dem Sekretär"
		],
		correctAnswers: [0],
		ruleReferences: ["16:4"]
	},
	{
		id: 150,
		text: "Torwart A wehrt einen Wurf über die Torauslinie ab. Welche(s) Schiedsrichterzeichen gibt der Torschiedsrichter?",
		answers: [
			"Nr. 8 (Abwurf)",
			"Nr. 9 (Freiwurf-Richtung)",
			"Erst Nr. 9, dann Nr. 8",
			"Erst Nr. 8, dann Nr. 9"
		],
		correctAnswers: [0],
		ruleReferences: ["12:1"]
	},
	{
		id: 151,
		text: "Wann ist ein Spieler zu disqualifizieren?",
		answers: [
			"Bei grob unsportlichem Verhalten",
			"Verhinderung einer klaren Torgelegenheit durch absichtliche Fußabwehr eines Wurfes",
			"Bei fehlerhaftem Wechseln während einer Hinausstellungszeit",
			"Wenn er den Ball bei einer Freiwurfentscheidung gegen seine Mannschaft nicht sofort niederlegt"
		],
		correctAnswers: [0],
		ruleReferences: ["8:7e", "4:6", "8:8b", "8:9", "16:6b"]
	},
	{
		id: 152,
		text: "B ist im Angriff. A11 trennt B6 durch eine Regelwidrigkeit, die die Gesundheit des Gegenspielers gefährdet, vom Ball. Zwischen B6 und dem Tor standen noch zwei weitere Mitspieler von A. Richtige Entscheidung?",
		answers: [
			"Hinausstellung von A11",
			"Disqualifikation von A11",
			"7-Meter-Wurf für B",
			"Freiwurf für B"
		],
		correctAnswers: [1, 3],
		ruleReferences: ["8:5", "16:6a", "Erläuterung 6", "13:1b"]
	},
	{
		id: 153,
		text: "B5 wurde schon zweimal hinausgestellt, einmal wegen einer progressiv zu bestrafenden Regelwidrigkeit, einmal wegen Wegwerfen des Balls, nachdem der Schiedsrichter auf Freiwurf für A entschieden hatte. Jetzt begeht er den zweiten Wechselfehler seiner Mannschaft und vor Wiederaufnahme des Spiels noch eine besonders grobe Unsportlichkeit. Richtige Entscheidung?",
		answers: [
			"Hinausstellung von B5",
			"Disqualifikation von B5, seine Mannschaft spielt 4 Minuten mit nur 5 Feldspielern. Schriftlicher Bericht",
			"Disqualifikation von B5, B spielt für 2 Minuten mit 4 Feldspielern. Schriftlicher Bericht"
		],
		correctAnswers: [0, 1],
		ruleReferences: ["4:5", "8:10a", "16:3a", "16:6d", "16:9b"]
	},
	{
		id: 154,
		text: "Der Trainer ist bereits verwarnt worden. Bei einer Entscheidung der Schiedsrichter rennt der Arzt derselben Mannschaft protestierend mehrere Meter auf das Spielfeld. Richtige Entscheidung?",
		answers: [
			"Keine Bestrafung",
			"Verwarnung des Arztes",
			"Hinausstellung des Arztes",
			"Disqualifikation des Arztes"
		],
		correctAnswers: [2],
		ruleReferences: ["4:2", "16:3e"]
	},
	{
		id: 155,
		text: "Welche(s) der folgenden Vergehen ist/sind laut Regelwerk mit einer Disqualifikation und schriftlichem Bericht zu ahnden?",
		answers: [
			"Unerlaubtes Betreten der Spielfläche durch einen Offiziellen ab dem zweiten Mal",
			"Aufforderung zum Spielabbruch durch einen Offiziellen",
			"Wenn ein 7-m Werfer den Kopf des Torwarts trifft, wobei der Torwart seinen Kopf nicht in Richtung des Balles bewegt",
			"Ein Spieler wirft den Ball nach einer Schiedsrichter-Entscheidung demonstrativ auf die Tribüne.",
			"Ein Spieler bespuckt außerhalb der Spielfläche einen Zuschauer"
		],
		correctAnswers: [1, 4],
		ruleReferences: ["16:6b", "8:10"]
	},
	{
		id: 156,
		text: "A2 ist wegen regelwidrigen Verhaltens hinausgestellt worden und befindet sich auf der Auswechselbank. Als in der Nähe ein Einwurf ansteht, ruft er dem Schiedsrichter beleidigende Worte zu. Richtige Entscheidung?",
		answers: [
			"Hinausstellung von A2",
			"Disqualifikation von A2, was eine 2-Minuten Reduzierung verursacht, die sofort beginnt",
			"Mannschaft A wird für 4 Minuten um einen Spieler reduziert",
			"Schriftlicher Bericht"
		],
		correctAnswers: [1, 3],
		ruleReferences: ["8:10a", "16:8"]
	},
	{
		id: 157,
		text: "Die Schiedsrichter haben auf Einwurf für Mannschaft A entschieden. In diesem Moment beantragt der Mannschaftsverantwortliche von A ein Team-Time-out. Welche der nachfolgenden Aussagen trifft/treffen zu?",
		answers: [
			"Team-Time-out nicht möglich, da der Ball nicht im Spiel ist",
			"Der Zeitnehmer pfeift, hält die Uhr an und gibt das Handzeichen 15",
			"Die Schiedsrichter bestätigen das Team-Time-out für Mannschaft A",
			"Der Sekretär trägt das Team-Time-out in das Spielprotokoll ein"
		],
		correctAnswers: [1, 2, 3],
		ruleReferences: ["2:9 – Erläuterung 3"]
	},
	{
		id: 158,
		text: "Ein Spieler wird wegen regelwidrigen Verhaltens hinausgestellt. Während des Verlassens der Spielfläche beleidigt er den Schiedsrichter, der daraufhin die Rote Karte zieht. Der Spieler regt sich jetzt derart auf, dass er den Schiedsrichter schlägt. Richtige Entscheidung?",
		answers: [
			"Schriftlicher Bericht",
			"Die Mannschaft wird auf der Spielfläche für 2 Minuten um einen Spieler reduziert",
			"Die Mannschaft wird auf der Spielfläche für 2 Minuten um einen weiteren Spieler reduziert",
			"Die Mannschaft spielt für 4 Minuten um einen Spieler reduziert auf der Spielfläche."
		],
		correctAnswers: [0, 3],
		ruleReferences: ["8:10a", "16:9d"]
	},
	{
		id: 159,
		text: "Aus Enttäuschung über einen misslungenen Spielzug ohrfeigt A3 einen Mitspieler. Richtige Entscheidung?",
		answers: [
			"Keine Bestrafung, weil es sich um einen Mitspieler handelt",
			"Hinausstellung von A3",
			"Disqualifikation von A3",
			"Schriftlicher Bericht"
		],
		correctAnswers: [2, 3],
		ruleReferences: ["8:6b", "16:6a"]
	},
	{
		id: 160,
		text: "A5 ist in Ballbesitz, als ein Offizieller von Mannschaft A lautstark gegen die Schiedsrichter protestiert. Die Schiedsrichter pfeifen, geben Time-out und verwarnen den Offiziellen. Richtige Spielfortsetzung?",
		answers: [
			"Freiwurf für B mit Anpfiff in der Nähe der Auswechselzone",
			"Freiwurf für A mit Anpfiff in der Nähe der Auswechselzone",
			"Freiwurf für A mit Anpfiff an dem Ort, wo sich der Ball bei der Spielunterbrechung befand",
			"Einwurf für B in der Nähe der Auswechsellinie"
		],
		correctAnswers: [0],
		ruleReferences: ["8:7a", "13:1a", "13:6", "16:1b"]
	},
	{
		id: 161,
		text: "A7 wird wegen unfairen Spiels für 2 Minuten hinausgestellt. Sein Kommentar zum Schiedsrichter: ”Du bist sowieso ein blinder Trottel.“ Richtige Entscheidung?",
		answers: [
			"Eine weitere Hinausstellung von A7",
			"Disqualifikation von A7 ohne schriftlichen Bericht",
			"Mannschaft A spielt 2 Minuten mit 2 Spielern weniger",
			"Mannschaft A spielt 4 Minuten mit 1 Spieler weniger",
			"Disqualifikation von A7 mit schriftlichem Bericht"
		],
		correctAnswers: [3, 4],
		ruleReferences: ["8:10a", "16:6b", "16:9c"]
	},
	{
		id: 162,
		text: "A3 begeht nach einer Hinausstellung gegen ihn im Auswechselraum vor dem Wiederanpfiff des Spiels eine grobe Unsportlichkeit gegen den Trainer von B, der vorher auf das Spielfeld gelaufen war, obwohl nicht Time-out gegeben worden war. Gegen die \"Bank\" von B war noch keine Strafe ausgesprochen worden. Wie ist zu entscheiden?",
		answers: [
			"Disqualifikation von A3",
			"Verwarnung von Trainer B",
			"Spielfortsetzung für A mit 4/1 Spielern",
			"Spielfortsetzung für A mit 5/1 Spielern"
		],
		correctAnswers: [0, 1, 3],
		ruleReferences: ["4:2", "8:9", "16:1b", "16:6b", "16:9c"]
	},
	{
		id: 163,
		text: "Beim Betreten der Halle begegnen die Schiedsrichter dem bereits umgezogenen B4, der sofort ruft: ”Aber nicht schon wieder diese Idioten!” Die Schiedsrichter stellen vor Spielbeginn fest, dass B4 im Spielprotokoll eingetragen ist. Richtige Entscheidung?",
		answers: [
			"Hinausstellung von B4 zu Beginn des Spiels",
			"Disqualifikation von B4, B spielt zu Beginn für 2 Minuten mit nur 5 Feldspielern",
			"Disqualifikation von B4 nach Kontrolle des Spielprotokolls, seine Mannschaft darf sich auf 14 Spieler ergänzen; schriftlicher Bericht",
			"Disqualifikation von B4, seine Mannschaft darf sich auf 14 Spieler ergänzen, wird aber auf der Spielfläche um 1 Spieler reduziert; schriftlicher Bericht"
		],
		correctAnswers: [2],
		ruleReferences: ["8:10a", "16:6b", "16:11b", "17:10"]
	},
	{
		id: 164,
		text: "Beim Aufwärmen vor dem Spiel prallen A3 und Torwart B unbeabsichtigt zusammen. Die beiden beschimpfen sich; Torwart B gibt A3 eine Ohrfeige, der sofort zurückschlägt. Beide Spieler sind im Spielprotokoll eingetragen. Richtige Entscheidung?",
		answers: [
			"Disqualifikation von Torwart B und 2-Minuten Hinausstellung für A3, die Mannschaften dürfen sich auf 14 Spieler ergänzen. Schriftlicher Bericht",
			"Disqualifikation von beiden Spielern, die Mannschaften dürfen sich auf 14 Spieler ergänzen, die ersten 2 Minuten aber nur mit je 5 Feldspielern spielen. Schriftlicher Bericht",
			"Beide Spieler erhalten eine Hinausstellung, die zu Beginn des Spiels abgesessen werden muss. Schriftlicher Bericht",
			"Disqualifikation von beiden Spielern, die Mannschaften dürfen 14 Spieler einsetzen. Schriftlicher Bericht"
		],
		correctAnswers: [3],
		ruleReferences: ["8:10a", "16:11b", "16:6a", "17:10"]
	},
	{
		id: 165,
		text: "Mit der Disqualifikation eines Spielers reduziert sich die Spielerzahl seiner Mannschaft, es sei denn, die Disqualifikation erfolgte…",
		answers: [
			"wegen einer groben Unsportlichkeit in der Halbzeitpause",
			"wegen eines Vergehens außerhalb der Spielfläche",
			"bereits vor Spielbeginn",
			"wegen Beleidigung des Schiedsrichters"
		],
		correctAnswers: [2],
		ruleReferences: ["16:11b"]
	},
	{
		id: 166,
		text: "Mannschaft A ist an der Freiwurflinie von B in Ballbesitz. Der Trainer von B reklamiert so heftig gegen die Schiedsrichter, dass diese die Spielzeit unterbrechen. Wie und wo geht das Spiel weiter?",
		answers: [
			"Nach Bestrafung von Trainer B Freiwurf für A am Auswechselraum von B",
			"Nach Bestrafung von Trainer B Freiwurf für A an der Freiwurflinie von B"
		],
		correctAnswers: [1],
		ruleReferences: ["13:6"]
	},
	{
		id: 167,
		text: "Während der Halbzeitpause begeht A7 auf der Spielfläche eine Tätlichkeit gegen Torwart B. Richtige Entscheidung?",
		answers: [
			"A7 wird disqualifiziert, schriftlicher Bericht;",
			"A7 wird verwarnt",
			"A7 wird nur ermahnt, weil das Spiel unterbrochen ist"
		],
		correctAnswers: [0],
		ruleReferences: ["16:10", "8:6", "16:6a", "17:10"]
	},
	{
		id: 168,
		text: "Ein Schiedsrichter wird auf dem Weg in die Kabine (während der Pause) von einem Spieler beleidigt. Richtige Entscheidung?",
		answers: [
			"Disqualifikation",
			"Hinausstellung (zu Beginn der 2. Halbzeit)",
			"Die Mannschaft spielt zu Beginn der 2. Halbzeit für 2 Minuten mit nur 5 Feldspielern",
			"Schriftlicher Bericht"
		],
		correctAnswers: [0, 2, 3],
		ruleReferences: ["16:10", "8:10a", "16:6b", "17:10"]
	},
	{
		id: 169,
		text: "Nach dem Halbzeitpfiff geraten A9 und B5 auf der Spielfläche heftig aneinander und schreien sich an. In der Folge stößt A9 B5 mit beiden Händen gegen die Brust, so dass dieser die Körperkontrolle verliert. Richtige Entscheidung?",
		answers: [
			"Hinausstellung von A9 zu Beginn der 2. Halbzeit",
			"Disqualifikation von A9, A spielt zu Beginn der 2. Halbzeit für 2 Minuten mit nur 5 Feldspielern",
			"Disqualifikation von A9, A beginnt die 2. Halbzeit mit 6 Feldspielern"
		],
		correctAnswers: [1],
		ruleReferences: ["16:10", "8:9", "16:6b"]
	},
	{
		id: 170,
		text: "Nach dem Spiel schreit ein Spieler den Schiedsrichter an: ”Du hast uns den Sieg gestohlen, Du Idiot!” Richtige Entscheidung?",
		answers: [
			"Verwarnung",
			"Disqualifikation",
			"Schriftlicher Bericht",
			"Verwarnung und schriftlicher Bericht"
		],
		correctAnswers: [2],
		ruleReferences: ["16:11c"]
	},
	{
		id: 171,
		text: "A9 begeht während der Halbzeitpause noch auf der Spielfläche eine Tätlichkeit gegen den Trainer von B, der A9 daraufhin beleidigt. Maßnahmen?",
		answers: [
			"Disqualifikation von A9, A beginnt die 2. Halbzeit für 2 Minuten mit 5/1 Spielern Schriftlicher Bericht",
			"Disqualifikation von Trainer B, B beginnt die 2. Halbzeit für 2 Minuten mit 5/1 Spielern, schriftlicher Bericht",
			"Disqualifikation von A9, A beginnt in der 2. Halbzeit mit 6/1 Spielern",
			"Disqualifikation von Trainer B, Spielfortsetzung B in der 2. Halbzeit mit 6/1 Spielern"
		],
		correctAnswers: [0, 1],
		ruleReferences: ["8:10a", "16:10", "16:6"]
	},
	{
		id: 172,
		text: "Das automatische Schlusssignal der Zeitmessanlage ist defekt. Der Zeitnehmer hat die Störung nicht bemerkt und reagiert nicht, obwohl die Spielzeit abgelaufen ist. Wer darf in diesem Fall das Schlusssignal geben?",
		answers: [
			"Nur der Sekretär",
			"Nur der Feldschiedsrichter",
			"Nur der Delegierte",
			"Nur einer der Schiedsrichter",
			"Nur der Zeitnehmer",
			"Einer der SR, der Zeitnehmer oder der Delegierte"
		],
		correctAnswers: [5],
		ruleReferences: ["2:3", "17:9"]
	},
	{
		id: 173,
		text: "Ein Spieler begeht eine Regelwidrigkeit. Der Feldschiedsrichter entscheidet auf Disqualifikation und Freiwurf, der Torschiedsrichter auf Hinausstellung und 7-Meter-Wurf. Der Spieler ist zu bestrafen und das Spiel fortzusetzen mit:",
		answers: [
			"Hinausstellung",
			"Disqualifikation",
			"Freiwurf",
			"7-Meter-Wurf"
		],
		correctAnswers: [1, 3],
		ruleReferences: ["17:6"]
	},
	{
		id: 174,
		text: "Das Spiel wird vom Feldschiedsrichter ohne Regelwidrigkeit einer Mannschaft unterbrochen (kein Time-out). B13 hat kurz vor dem unterbrechenden Pfiff den Ball in Richtung Tor von A geworfen. Der Ball ist noch unterwegs und landet nach dem Pfiff unhaltbar im Tor. Wie geht das Spiel weiter?",
		answers: [
			"Freiwurf für B",
			"Freiwurf für A",
			"7-Meter-Wurf für B",
			"Tor für B"
		],
		correctAnswers: [0],
		ruleReferences: ["13:4a"]
	},
	{
		id: 175,
		text: "Wer entscheidet in Zweifelsfällen über die Richtigkeit der Zeitmessung?",
		answers: [
			"Zeitnehmer und Sekretär",
			"Die Schiedsrichter gemeinsam",
			"Der Zeitnehmer",
			"Die Schiedsrichter und der Zeitnehmer gemeinsam"
		],
		correctAnswers: [1],
		ruleReferences: ["17:9"]
	},
	{
		id: 176,
		text: "Welche Strafen sind im Spielprotokoll zu begründen?",
		answers: [
			"Disqualifikationen, ausgenommen die nach der 3. Hinausstellung",
			"Alle Strafen, ausgenommen Ermahnungen",
			"Alle Hinausstellungen, Disqualifikationen",
			"Disqualifikationen für grobe Vergehen und grob unsportliches Verhalten in den letzten Sekunden, wenn damit dem Gegner die Chance genommen wird, in eine Torwurfsituation zu kommen.",
			"Disqualifikationen wegen besonders rücksichtlosem unsportlichen Verhalten",
			"Jede progressive Bestrafung in der letzten Spielminute, falls die Aktion beabsichtigt, dem Gegner die Chance zu nehmen, in eine Torwurfsituation zu kommen."
		],
		correctAnswers: [4],
		ruleReferences: ["17:10", "16:6", "8:5", "8:10c", "8:10d"]
	},
	{
		id: 177,
		text: "Wer hat während des Spiels das Recht, den Schiedsrichter anzusprechen?",
		answers: [
			"Jeder Spieler",
			"Der Trainer",
			"Der Mannschaftsverantwortliche",
			"Spielführer"
		],
		correctAnswers: [2],
		ruleReferences: ["4:2", "17:11"]
	},
	{
		id: 178,
		text: "Mannschaft A liegt in Unterzahl in der 57. Minute 24:23 in Führung. Der Feldschiedsrichter hat auf Freiwurf für sie entschieden. A6 will diesen provokativ mehrere Meter vom eigentlichen Ausführungsort entfernt ausführen, obwohl der Schiedsrichter die Ausführungsstelle klar angezeigt hat. Richtige Entscheidung?",
		answers: [
			"Korrektur des Ausführungsortes, Anpfiff, keine weitere Maßnahme",
			"Korrektur des Ausführungsortes, Anpfiff, Schiedsrichter zeigen Handzeichen für Passives Spiel",
			"Korrektur des Ausführungsortes, progressive Strafe gegen A6, Anpfiff des Freiwurfs, Schiedsrichter zeigen Handzeichen für Passives Spiel"
		],
		correctAnswers: [1],
		ruleReferences: ["7:11", "Erläuterung 4"]
	},
	{
		id: 179,
		text: "Gegenstoß durch A7: er trifft Torwart B mit dem Ball so am Kopf, dass der sichtbar k.o. geht. Der abprallende Ball gelangt zu A9, der mitgelaufen war und regelgerecht ins leere Tor wirft. Richtige Entscheidung, sofern der Schiedsrichter pfeift, wenn der Ball über dem Torraum (also noch nicht im Tor) ist?",
		answers: [
			"Tor für A",
			"7-Meter-Wurf für A",
			"Freiwurf für A mit Anpfiff",
			"Time out"
		],
		correctAnswers: [2, 3],
		ruleReferences: ["13", "4b", "Erläuterung 2"]
	},
	{
		id: 180,
		text: "7-Meter-Werfer A6 steht mit dem Ball bereit, als Trainer B seinen Torwart zum Torwartwechsel auffordert. Der Torwart ist im Begriff, dieser Aufforderung nachzukommen. Richtige Entscheidung?",
		answers: [
			"Nichts unternehmen",
			"Verwarnung von Trainer B",
			"Verwarnung von Trainer B und Torwart B",
			"Verwarnung von Torwart B"
		],
		correctAnswers: [3],
		ruleReferences: ["14:10", "16:1b"]
	},
	{
		id: 181,
		text: "Nach Wurf von A4 trifft der Ball den Torpfosten und fliegt in Richtung Spielfeld. A6 steht an der Torraumlinie bereit, um ihn aufzufangen. B4 geht deutlich in den eigenen Torraum und schlägt den Ball über die Torauslinie. Richtige Entscheidung?",
		answers: [
			"7-Meter-Wurf für A",
			"Einwurf für A",
			"Freiwurf für A",
			"Abwurf für B"
		],
		correctAnswers: [0],
		ruleReferences: ["14:1a", "6:2c", "Erläuterung 6"]
	},
	{
		id: 182,
		text: "A9 setzt zum Sprungwurf an. B5 greift ihm von hinten in den Wurfarm und zieht A9 nach hinten weg. Zwischen A9 und dem Tor stehen noch zwei weitere Abwehrspieler. Richtige Entscheidung?",
		answers: [
			"Freiwurf für A",
			"7-Meter-Wurf für A",
			"Disqualifikation von B5",
			"Hinausstellung von B5",
			"Disqualifikation von B5, schriftlicher Bericht"
		],
		correctAnswers: [0, 2],
		ruleReferences: ["8:5", "16:6a", "13:1b"]
	},
	{
		id: 183,
		text: "A5 prellt den Ball an der Seitenlinie entlang. B2 versperrt ihm korrekt den Weg. Um an B2 vorbeizukommen, überschreitet A5 während des Prellens die Seitenlinie. Richtige Entscheidung?",
		answers: [
			"Freiwurf für A",
			"Einwurf für B",
			"Freiwurf für B",
			"Weiterspielen lassen"
		],
		correctAnswers: [2],
		ruleReferences: ["7:10", "13:1a", "8:1c"]
	},
	{
		id: 184,
		text: "Der Mannschaftsverantwortliche von A beleidigt den Sekretär, ohne dass die Schiedsrichter dies wahrnehmen. Bei der nächsten Unterbrechung meldet der Sekretär das Vergehen. Richtige Entscheidung?",
		answers: [
			"Disqualifikation des Mannschaftsverantwortlichen",
			"Hinausstellung des Mannschaftsverantwortlichen",
			"Schriftlicher Bericht",
			"Verwarnung des Mannschaftsverantwortlichen A",
			"Keine persönliche Strafe möglich"
		],
		correctAnswers: [2, 4],
		ruleReferences: ["18:1", "Erläuterung 7.B.a"]
	},
	{
		id: 185,
		text: "Mannschaft B erhält einen Freiwurf, während A5 noch in Ballbesitz ist. A5 bewegt sich in Richtung Schiedsrichter und überreicht diesem „höflich” den Ball. Richtige Entscheidung?",
		answers: [
			"Hinausstellung von A5 und Freiwurf für B an der Stelle, wo sich der Ball befindet",
			"Verwarnung von A5 und Freiwurf für B an der Stelle, wo sich der Ball befindet",
			"Hinausstellung von A5 und Freiwurf für B an der Stelle, wo auf Freiwurf erkannt worden war",
			"Verwarnung von A5 und Freiwurf für B an der Stelle, wo auf Freiwurf erkannt worden war"
		],
		correctAnswers: [2],
		ruleReferences: ["13:5", "13:6 Kommentar", "8.8b", "16:3f"]
	},
	{
		id: 186,
		text: "Während einer Spielzeitunterbrechung wegen Verletzung eines Spielers der Mannschaft A behandelt ein Arzt den Verletzten. Die Schiedsrichter hatten die Erlaubnis zum Betreten der Spielfläche gegeben. Trainer A verfolgt Spieler B5, der seiner Meinung nach die Verletzung verursacht hat, in dessen Auswechselraum und schlägt ihm ins Gesicht. Richtige Entscheidung?",
		answers: [
			"Disqualifikation des Trainers, Reduzierung von Mannschaft A für 2 Minuten; das Spiel wird mit dem Wurf wieder angepfiffen, mit dem es auch ohne Eingreifen des Trainers A fortgesetzt worden wäre.",
			"2 Minuten Hinausstellung des Trainers, Freiwurf für B",
			"Disqualifikation des Trainers,",
			"Schriftlicher Bericht"
		],
		correctAnswers: [0, 3],
		ruleReferences: ["8:6b", "16:6a", "16:8", "13:3"]
	},
	{
		id: 187,
		text: "Torwart A1 fällt der Ball beim Abwurf aus der Hand und springt in Richtung Spielfeld, wo B6 ihn erwartet, A2 hechtet in den Torraum und stößt den in der Luft befindlichen Ball über die Seitenlinie. Richtige Entscheidung?",
		answers: [
			"Abwurf für A nach Anpfiff",
			"Einwurf für B",
			"Freiwurf für B",
			"7-Meter-Wurf für B"
		],
		correctAnswers: [0],
		ruleReferences: ["12:2"]
	},
	{
		id: 188,
		text: "In welchem Fall/welchen Fällen darf die abwehrende Mannschaft den Abstand von 3 Metern bei Würfen nach einer Spielunterbrechung unterschreiten?",
		answers: [
			"Sobald der Schiedsrichter den Wurf angepfiffen hat",
			"Wenn der Ball die Hand des Werfers verlassen hat",
			"Wenn die Abwehrspieler beim Freiwurf oder Einwurf an der eigenen Torraumlinie stehen"
		],
		correctAnswers: [1, 2],
		ruleReferences: ["15:4", "11:5", "13", "8"]
	},
	{
		id: 189,
		text: "Welche(s) der folgenden Vergehen sind/ist mit einer Disqualifikation zu ahnden?",
		answers: [
			"Unerlaubtes Betreten der Spielfläche durch einen Offiziellen ab dem zweiten Mal",
			"Ein Spieler in Ballbesitz läuft einen Gegenstoß und wird dabei umgerissen, die Situation ist nicht besonders gefährlich",
			"7-Meter-Wurf in das Gesicht des sich nicht bewegenden Torwarts",
			"Ein Spieler wirft den Ball aus Protest gegen eine Schiedsrichter-Entscheidung auf die Tribüne",
			"Der Torwart verlässt den Torraum und kommt in Ballbesitz, verursacht aber einen Zusammenprall mit dem Gegenspieler"
		],
		correctAnswers: [1, 2, 3, 4],
		ruleReferences: ["16:3e", "8:5a", "8:9d", "8:9a", "8:5"]
	},
	{
		id: 190,
		text: "Spielstand A gegen B 24:23 kurz vor Spielende. Freiwurf für A ca. 1 Meter vor der Freiwurflinie von B. Alle Spieler haben zunächst eine korrekte Aufstellung eingenommen; die Schiedsrichter pfeifen die Ausführung des Freiwurfs an, als A10 mit dem Ball die Freiwurflinie von B deutlich um einen Schritt in Richtung Tor von B überschreitet. Richtige Entscheidung?",
		answers: [
			"Freiwurf für A",
			"Time-out",
			"Hinausstellung gegen A10",
			"Freiwurf gegen A"
		],
		correctAnswers: [3],
		ruleReferences: ["15:7", "13:7"]
	},
	{
		id: 191,
		text: "Nach seiner dritten Hinausstellung wurde A9 in der 36. Minute disqualifiziert. Noch in Sportkleidung setzt er sich in die erste Zuschauerreihe hinter der Seitenlinie gegenüber den Auswechselbereichen. Direkt vor ihm begeht B3 in der 55. Minute ein gesundheitsgefährdendes Foul an A10, der verletzt liegen bleibt. Bevor die Schiedsrichter eine Strafe aussprechen können, läuft A9 auf die Spielfläche und schlägt B3 mit der Faust nieder. Richtige Entscheidung?",
		answers: [
			"Time-out",
			"Disqualifikation von B3 und schriftlicher Bericht",
			"A9 ist nicht mehr am Spiel beteiligt, daher keine Meldung erforderlich",
			"Schriftlicher Bericht über das Verhalten von A9",
			"Disqualifikation von B3 ohne schriftlichen Bericht"
		],
		correctAnswers: [0, 1, 3],
		ruleReferences: ["8:6a", "16:6a", "2:8a", "17:2", "17:10"]
	},
	{
		id: 192,
		text: "Eine Verwarnung ist zwingend zu geben bei:",
		answers: [
			"einer progressiv zu ahndenden Regelwidrigkeit im Verhalten dem Gegenspieler gegenüber",
			"einer Regelwidrigkeit bei der Ausführung eines „formellen“ Wurfs durch die gegnerische Mannschaft",
			"Nichtniederlegen des Balles bei einer Entscheidung gegen die eigene Mannschaft",
			"dem Versuch eines Torwarts, einen Wechsel vorzunehmen, wenn der Werfer zum 7-Meter-Wurf bereit ist"
		],
		correctAnswers: [0, 1, 3],
		ruleReferences: ["8:3", "8:7c", "8:8b", "16:1b", "14:10", "16:3d"]
	},
	{
		id: 193,
		text: "A14 will einen Freiwurf (ohne Anpfiff) ausführen und steht wie seine Mitspieler korrekt. Bevor der Ball die Hand von A14 verlassen hat, laufen A13 und A15 über die 9-Meter Linie in Richtung Kreisposition. Richtige Entscheidung?",
		answers: [
			"Korrektur",
			"Freiwurf für A mit Anpfiff",
			"Weiterspielen lassen",
			"Freiwurf für B"
		],
		correctAnswers: [0, 1],
		ruleReferences: ["13:3", "15:1", "15:7"]
	},
	{
		id: 194,
		text: "Wer meldet das Team-Time-out an?",
		answers: [
			"Ein Offizieller",
			"Ein Spieler",
			"Nur der Mannschaftsverantwortliche",
			"Der Mannschaftkapitän"
		],
		correctAnswers: [0],
		ruleReferences: ["Erläuterung 3"]
	},
	{
		id: 195,
		text: "Mannschaft A ist an der 9-Meter-Linie von B in Ballbesitz. Der Delegierte unterbricht das Spiel und berichtet den Schiedsrichtern, dass der Trainer von B ihn beleidigt hat. Richtige Entscheidung?",
		answers: [
			"Ermahnung des Trainers von B, schriftlicher Bericht",
			"Disqualifikation des Trainers von B, schriftlicher Bericht",
			"Spielfortsetzung mit Freiwurf für A am Auswechselraum von B",
			"Spielfortsetzung mit Freiwurf für A an der 9-Meter-Linie von B"
		],
		correctAnswers: [1, 3],
		ruleReferences: ["13:6", "8:10a", "16:6b", "Erläuterung 7.B.b", "Auswechselraum-Reglement 5"]
	},
	{
		id: 196,
		text: "Mannschaft A ist an der 9-Meter-Linie von B in Ballbesitz. Der Zeitnehmer unterbricht das Spiel und berichtet den Schiedsrichtern, dass der Trainer von A ihn beleidigt hat. Richtige Entscheidung?",
		answers: [
			"Schriftlicher Bericht",
			"Disqualifikation des Trainers von A, schriftlicher Bericht",
			"Spielfortsetzung mit Freiwurf für B am Auswechselraum von A",
			"Spielfortsetzung mit dem der Spielsituation entsprechenden Wurf durch A"
		],
		correctAnswers: [0, 3],
		ruleReferences: ["13:4a", "Erläuterung 7.B.a"]
	},
	{
		id: 197,
		text: "Wann ist die Spielzeit verbindlich zu unterbrechen?",
		answers: [
			"7-Meter-Entscheidung",
			"Hinausstellung",
			"Bei Einwirkungen von außen auf das Spiel",
			"Disqualifikation"
		],
		correctAnswers: [1, 3],
		ruleReferences: ["2:8", "Erläuterung 2"]
	},
	{
		id: 198,
		text: "Unmittelbar nach dem Anwurf durch B stellen die Schiedsrichter fest, dass sich im Auswechselraum von Mannschaft B eine nicht im Spielprotokoll eingetragene Person befindet. Die Überprüfung ergibt, dass es ich um den Vereinsvorsitzenden handelt. Mannschaft B hatte jedoch bereits 4 Offizielle im Spielbericht eingetragen. Richtige Entscheidung?",
		answers: [
			"Der Vereinsvorsitzende muss den Auswechselraum verlassen.",
			"Der Mannschaftsverantwortliche von B wird persönlich bestraft.",
			"Ein weiterer Offizieller muss den Auswechselraum verlassen",
			"Spielfortsetzung mit Freiwurf für Mannschaft A"
		],
		correctAnswers: [0, 1, 3],
		ruleReferences: ["4:2", "13:1a"]
	},
	{
		id: 199,
		text: "Was ist als unsportliches Verhalten zu bewerten?",
		answers: [
			"Treffen des Kopfes des sich nicht bewegenden Abwehrspielers",
			"Passives Verhalten des Torwarts bei einer 7-Meter-Wurf Ausführung, aus dem zu schließen ist, dass er den Wurf nicht abwehren will",
			"Versuch, die Schiedsrichter durch Schauspielerei zu irritieren",
			"Aktives Blocken von Würfen durch das Benutzen von Füßen und Unterschenkeln",
			"Wiederholtes Betreten des Torraumes aus taktischen Gründen",
			"Revanchefoul nach einem Vergehen"
		],
		correctAnswers: [2, 3, 4],
		ruleReferences: ["8:7"]
	},
	{
		id: 200,
		text: "Der von Torwart B abgeprallte Ball wird von Angriffsspieler A an der Torraumlinie erwartet. Um es nicht zu einer klaren Torgelegenheit kommen zu lassen, betritt Abwehrspieler B4 seinen Torraum und verhindert so die Ballannahme durch A. Richtige Entscheidung:",
		answers: [
			"Freiwurf für A",
			"7-Meter-Wurf für A",
			"Progressive Strafe gegen B4",
			"Disqualifikation von B4"
		],
		correctAnswers: [1],
		ruleReferences: ["6:2c", "14:1a", "Erläuterung 6.a"]
	},
	{
		id: 201,
		text: "Ein von einem Mitspieler Richtung eigener Torwart A gespielter Ball fliegt Richtung Torwart A. Dieser springt in seinem Torraum ab, fängt den Ball in der Luft und landet mit dem sicher gefassten Ball außerhalb des Torraums. Richtige Entscheidung?",
		answers: [
			"Weiterspielen lassen",
			"Abwurf für A",
			"Freiwurf für die gegnerische Mannschaft",
			"7-Meter-Wurf für die gegnerische Mannschaft"
		],
		correctAnswers: [2],
		ruleReferences: ["5:3", "5:6", "6:7b"]
	},
	{
		id: 202,
		text: "Der Torwart von B führt einen Abwurf aus. Der Ball trifft den Schiedsrichter und prallt zu Torwart B, welcher in der Zwischenzeit den Torraum verlassen hat, zurück. Entscheidung?",
		answers: [
			"Weiterspielen lassen",
			"Wiederholung des Abwurfs",
			"Freiwurf für A",
			"Freiwurf für B mit Anpfiff"
		],
		correctAnswers: [2],
		ruleReferences: ["13:1a", "15:2"]
	},
	{
		id: 203,
		text: "Ein von einem Mitspieler gespielter Ball fliegt Richtung Torwart A. Dieser springt in seinem Torraum ab, fängt den Ball in der Luft und landet mit dem sicher gefassten Ball mit einem Fuß im, mit dem anderen Fuß außerhalb seines Torraums. Richtige Entscheidung?",
		answers: [
			"Weiterspielen lassen",
			"Abwurf für A",
			"Freiwurf für die gegnerische Mannschaft",
			"7-Meter-Wurf für die gegnerische Mannschaft"
		],
		correctAnswers: [2],
		ruleReferences: ["5:3", "5:6", "6:7b"]
	},
	{
		id: 204,
		text: "In welchen Situationen ist eine Disqualifikation mit einem schriftlichen Bericht verbunden?",
		answers: [
			"Tätlichkeit auf der Spielfläche während der Halbzeitpause",
			"Ein besonders rücksichtsloses oder gefährliches Vergehen",
			"Revanchefoul nach einem Vergehen",
			"Eine arglistige Aktion, die ohne jeglichen Bezug zu einer Spielhandlung erfolgt"
		],
		correctAnswers: [0, 1, 3],
		ruleReferences: ["8:5", "8:9f", "8:6"]
	},
	{
		id: 205,
		text: "A9 wirft auf das Tor, Torwart B hält. In diesem Augenblick pfeift der Zeitnehmer das Spiel ab. Die Schiedsrichter machen den Zeitnehmer darauf aufmerksam, dass noch 30 Sekunden der 2. Halbzeit zu spielen sind. Alle Spieler sind auf der Spielfläche geblieben. Wie wird das Spiel wieder aufgenommen?",
		answers: [
			"Freiwurf für B",
			"Abwurf für B",
			"Freiwurf für A",
			"Anpfiff"
		],
		correctAnswers: [1, 3],
		ruleReferences: ["2:7", "15:5b"]
	},
	{
		id: 206,
		text: "Was ist bezüglich der Spielkleidung richtig?",
		answers: [
			"Alle als Torwart eingesetzten Spieler einer Mannschaft müssen eine identische Trikotfarbe benutzen",
			"Die Spieler müssen auf dem Rücken und auf der Brust mindestens 20 cm hohe Nummern tragen",
			"Die Torwarte dürfen einen Kopfschutz aus weichem Material tragen",
			"Die Spieler – auch die Torhüter – dürfen Nummern von 1 bis 100 benutzen"
		],
		correctAnswers: [0],
		ruleReferences: ["4:7", "4:8", "4:9"]
	},
	{
		id: 207,
		text: "Welche Aussagen zum Anwurf sind richtig?",
		answers: [
			"Der Anwurf ist binnen 3 Sekunden nach dem Anpfiff vom Mittelpunkt des Spielfelds aus in Richtung gegnerische Hälfte auszuführen",
			"Der Anwurf kann unmittelbar zu einem Tor beim Gegner führen",
			"Die falsche Ausgangsstellung der verteidigenden Mannschaft ist in jedem Fall zu korrigieren.",
			"Prellt der Werfer den Ball nach dem Anpfiff zum Anwurf, ist auf Freiwurf für den Gegner zu entscheiden",
			"Die Mitspieler dürfen die Mittellinie überschreiten, bevor der Wurf ausgeführt ist"
		],
		correctAnswers: [1, 3, 4],
		ruleReferences: ["10:3", "15:2", "15:3", "15:4"]
	},
	{
		id: 208,
		text: "Team A hat ein Tor erzielt. B will einen schnellen Anwurf ausführen. Deswegen prellt B5 den Ball rasch in Richtung Mittellinie. Dabei läuft er an dem zurücklaufenden A3 vorbei, der ihm den Ball mit der offenen Hand wegspitzelt, so dass der Ball B5 auf den Fuß und von dort aus über die Mittellinie weit in die Hälfte von A prallt. Richtige Entscheidung?",
		answers: [
			"Time-out",
			"Anwurf für B",
			"Progressive Bestrafung von A3",
			"Freiwurf für A"
		],
		correctAnswers: [0, 1, 2],
		ruleReferences: ["15:9", "16:1b", "2:8", "Erläuterung 2c", "8:7c"]
	},
	{
		id: 209,
		text: "Der Ball rollt nach einem ungenauen Pass von A3 zu A9 in der Nähe der Auswechselbank von A in Richtung Seitenlinie. B10 steht einen Meter vom Ball entfernt kurz vor der Ballaufnahme, da hechtet sich A9 nach dem Ball und faustet ihn in Richtung Spielfeldmitte zurück zu A3. Danach rutscht A9 durch seinen Schwung über die Seitenlinie hinaus. Was ist zu entscheiden?",
		answers: [
			"Weiterspielen lassen",
			"Freiwurf für B",
			"Verwarnung oder Hinausstellung von A9",
			"Einwurf für B"
		],
		correctAnswers: [0],
		ruleReferences: ["7:1"]
	},
	{
		id: 210,
		text: "Torwart B16 springt in seinem Torraum ab, um einen weiten Bogenpass zum Linksaußen A7 abzufangen. Er fängt den Ball in der Luft und landet mit Ball mit einem Fuß im Torraum, mit dem anderen im Spielfeld. Aus dieser Position spielt er den Ball weiter zu B3. Richtige Entscheidung?",
		answers: [
			"7-Meter-Wurf gegen B",
			"Weiterspielen lassen",
			"Freiwurf gegen B",
			"Korrektur und Abwurf B nach Anpfiff"
		],
		correctAnswers: [3],
		ruleReferences: ["5:3", "5:6", "15:7"]
	},
	{
		id: 211,
		text: "Welche Aussagen bezüglich des Abwurfs sind richtig?",
		answers: [
			"Der Abwurf ist ausgeführt, wenn der Ball die Hand des Torwarts verlassen hat",
			"Beim Abwurf müssen die Gegenspieler den 3-Meter-Abstand einhalten",
			"Der Abwurf ist ausgeführt, wenn der Ball die Hand des Torwarts verlassen und die Torraumlinie passiert hat.",
			"Beim Abwurf dürfen sich die Gegenspieler direkt an der Torraumlinie aufstellen"
		],
		correctAnswers: [2, 3],
		ruleReferences: ["12:2"]
	},
	{
		id: 212,
		text: "A3 führt einen 7-Meter-Wurf aus; A5 überschreitet die Freiwurflinie nach dem Schiedsrichterpfiff, aber bevor der Ball die Hand von A3 verlassen hat. Richtige Entscheidung?",
		answers: [
			"Wiederholung des 7-Meter-Wurfs",
			"Freiwurf für B",
			"Abwurf für B",
			"Progressive Bestrafung von A5"
		],
		correctAnswers: [1],
		ruleReferences: ["14:7", "13:1a", "15:7"]
	},
	{
		id: 213,
		text: "Tor durch 7-Meter-Wurf von B9. A führt nach Anpfiff der Schiedsrichter einen schnellen Anwurf aus, der nach zwei Pässen zu einem Tor durch A4 führt. In diesem Augenblick pfeift der Zeitnehmer und meldet, dass B9, der inzwischen wieder auf der Auswechselbank sitzt, zum Zeitpunkt des 7-Meter-Wurfs noch 20 Sekunden seiner ersten Hinausstellung hätte auf der Bank verbringen müssen. Was ist richtig?",
		answers: [
			"Der 7-Meter-Wurf für B ist zu wiederholen",
			"B9 erhält seine 2. Hinausstellung",
			"Beide Tore gelten",
			"Beide Tore sind zu annullieren"
		],
		correctAnswers: [1, 2],
		ruleReferences: ["4:6", "9:1", "9:2", "16:3a"]
	},
	{
		id: 214,
		text: "Falscher Wechsel von Mannschaft A, der der Schiedsrichter gerade einen 7-Meter-Wurf zugesprochen hat. Richtige Entscheidung?",
		answers: [
			"Freiwurf für Mannschaft B",
			"7-Meter-Wurf für Mannschaft A",
			"Hinausstellung gegen A",
			"Verwarnung des Mannschaftsverantwortlichen von A"
		],
		correctAnswers: [1, 2],
		ruleReferences: ["4:5", "13:3", "16:3a"]
	},
	{
		id: 215,
		text: "Der Trainer von A begibt sich während des Spieles wiederholt zum Coachen unmittelbar an den Zeitnehmertisch. Dabei protestiert er gegen Entscheidungen der Schiedsrichter. Die Schiedsrichter bemerken wegen der Lautstärke in der Halle nichts. Richtige Entscheidung?",
		answers: [
			"Der Zeitnehmer unterbricht sofort das Spiel und unterrichtet die Schiedsrichter über das Fehlverhalten vom Trainer",
			"Der Zeitnehmer wartet bis zur nächsten Unterbrechung des Spieles und informiert die Schiedsrichter über das Fehlverhalten des Trainers",
			"Progressive Bestrafung gegen den Trainer",
			"Keine Bestrafung möglich"
		],
		correctAnswers: [1, 3],
		ruleReferences: ["Erläuterung 7B - Auswechselraum-Reglement 5"]
	},
	{
		id: 216,
		text: "Nach Tor für A hat B Anwurf. Der Ball wird vom Torwart schnell zur Mittellinie geworfen. B6 nimmt ihn an und steht in der Mitte des Spielfelds mit einem Fuß auf der Mittellinie, mit dem anderen in der eigenen Spielfeldhälfte, worauf der Schiedsrichter sofort anpfeift. Zu diesem Zeitpunkt befinden sich noch Spieler von A in der gegnerischen Spielfeldhälfte. Bevor der Ball seine Hand verlassen hat, läuft der Werfer über die Mittellinie. Was ist richtig?",
		answers: [
			"Weiterspielen lassen",
			"Freiwurf für A",
			"Korrektur der Aufstellung von A und erneuter Anwurf mit Anpfiff",
			"Korrektur der Aufstellung von B6 und erneuter Anwurf mit Anpfiff"
		],
		correctAnswers: [1],
		ruleReferences: ["10:3", "15:7 3. Absatz"]
	},
	{
		id: 217,
		text: "Bei Freiwurfausführung durch B12 gerät der Ball bei der Ausholbewegung hinter die Seitenlinie. Richtige Entscheidung?",
		answers: [
			"Weiterspielen lassen",
			"Freiwurf gegen B",
			"Einwurf gegen B",
			"Freiwurf gegen B, Ermahnung von B12"
		],
		correctAnswers: [0],
		ruleReferences: ["15:1", "15:2"]
	},
	{
		id: 218,
		text: "Torwart B16 will einen Abwurf ausführen. Da B knapp im Rückstand ist, hat er es sehr eilig. Deshalb rutscht ihm der Ball aus der Hand und gelangt zu seinem noch im Torraum befindlichen Mitspieler B6, der den Ball mit dem Fuß zu seinem Torwart zurückspielt. Richtige Entscheidung?",
		answers: [
			"Abwurf nach Anpfiff",
			"Freiwurf gegen B",
			"7-Meter-Wurf gegen B"
		],
		correctAnswers: [0],
		ruleReferences: ["12:2"]
	},
	{
		id: 219,
		text: "A9 steht am Torraum völlig frei und fangbereit. Er wird von A10 durch den Torraum per Aufsetzer angespielt. Dieses Zuspiel wird von B3 erkannt. Er betritt sehr deutlich seinen Torraum und fängt – mit beiden Füßen zum zweiten Mal im Torraum stehend – den Ball ab. Richtige Entscheidung?",
		answers: [
			"Freiwurf für A",
			"7-Meter-Wurf für A",
			"Progressive Strafe für B3"
		],
		correctAnswers: [1, 2],
		ruleReferences: ["14:1a", "Erläuterung 6a", "16:1b", "8:7f"]
	},
	{
		id: 220,
		text: "Anwurf für A in den letzten 30 Sekunden; Anpfiff ist erfolgt, der Ball hat die Hand des Anwerfenden noch nicht verlassen. Mitspieler A3 läuft nach dem Pfiff schnell über die Mittellinie, wird aber von seinem Gegenspieler B5 von hinten niedergerissen, damit er einen möglichen Pass nicht erreichen kann. Richtige Entscheidung?",
		answers: [
			"Hinausstellung von B5",
			"Disqualifikation von B5",
			"Freiwurf für A",
			"7-Meter-Wurf für A",
			"Anwurf für A",
			"Schriftlicher Bericht"
		],
		correctAnswers: [1, 3],
		ruleReferences: ["10:3", "8:10c", "15:2", "16:6b"]
	},
	{
		id: 221,
		text: "Nach Ablauf der regulären Spielzeit (20:20) soll bis zur Entscheidung weitergespielt werden. Was ist richtig?",
		answers: [
			"Vor der Verlängerung 1 Minute Pause",
			"Vor der Verlängerung 5 Minuten Pause",
			"In der Halbzeit der Verlängerung 1 Minute Pause",
			"In der Halbzeit der Verlängerung 5 Minuten Pause"
		],
		correctAnswers: [1, 2],
		ruleReferences: ["2:2"]
	},
	{
		id: 222,
		text: "Die Schiedsrichter sind über die verbleibende Spielzeit unterschiedlicher Auffassung. Im Gespräch will der Torschiedsrichter (Erstgenannter) zunächst 50 Sekunden spielen lassen, der Feldschiedsrichter 42 Sekunden. Richtige Entscheidung?",
		answers: [
			"Die längere Spielzeit ist gültig, 50 Sekunden",
			"Der Erstgenannte ist zuständig, 50 Sekunden",
			"Der Feldschiedsrichter ist zuständig, 42 Sekunden",
			"Die beiden Schiedsrichter müssen sich einigen"
		],
		correctAnswers: [3],
		ruleReferences: ["17:9"]
	},
	{
		id: 223,
		text: "A9 spielt zu seinem auf dem Spielfeld stehenden Torwart A1. In Bedrängnis setzt er den Pass zu hoch an, so dass der Torwart zurückgehen und mit einem Fuß den Torraum betreten muss. Den Ball hat er noch kurz vorher annehmen können. Richtige Entscheidung?",
		answers: [
			"Weiterspielen lassen",
			"Time out",
			"7-Meter-Wurf für die gegnerische Mannschaft",
			"Freiwurf für die gegnerische Mannschaft"
		],
		correctAnswers: [3],
		ruleReferences: ["5:9", "6:1", "13:1a"]
	},
	{
		id: 224,
		text: "In welcher/welchen dieser Situationen ist verbindlich Time-out zu geben?",
		answers: [
			"Hinausstellung",
			"Freiwurf",
			"Passives Spiel",
			"Wechselfehler",
			"Verwarnung",
			"Einwurf"
		],
		correctAnswers: [0, 3],
		ruleReferences: ["2:8a", "4:5"]
	},
	{
		id: 225,
		text: "Der Torwart wehrt den Ball knapp vor der Torlinie ab. Beim anschließenden Versuch, einen Mitspieler anzuspielen, rutscht ihm der Ball aus der Hand ins eigene Tor. Richtige Entscheidung?",
		answers: [
			"Tor",
			"Freiwurf für die gegnerische Mannschaft",
			"7-Meter-Wurf für die gegnerische Mannschaft",
			"Abwurf"
		],
		correctAnswers: [3],
		ruleReferences: ["6:4", "12:1", "12:2", "15:2"]
	},
	{
		id: 226,
		text: "A7 wird aufgrund seiner dritten Hinausstellung disqualifiziert. Anschließend will er mit den Schiedsrichtern diskutieren und verlässt deshalb die Spielfläche nicht. Richtige Entscheidung?",
		answers: [
			"Keine weiteren Maßnahmen",
			"Mannschaft A: 4 Minuten mit 5/1 Spielern",
			"Mannschaft A: 2 Minuten mit 4/1 Spielern"
		],
		correctAnswers: [1],
		ruleReferences: ["16:9b"]
	},
	{
		id: 227,
		text: "B8 ist wegen eines Wechselfehlers hinausgestellt worden; zwei Sekunden nach dem Wiederanpfiff äußert er sich auf der Bank in unsportlicher Weise gegenüber den Schiedsrichtern. Richtige Entscheidung?",
		answers: [
			"Erneute Hinausstellung von B8",
			"Disqualifikation von B8",
			"Mannschaft B spielt für 1 Minute und 58 Sekunden mit 4/1 Spielern und danach 2 Sekunden mit 5/1 Spielern",
			"Mannschaft B spielt für 2 Minuten mit 4/1 Spielern",
			"Freiwurf für A",
			"Time-out"
		],
		correctAnswers: [0, 2, 4, 5],
		ruleReferences: ["2:8a", "8:7a", "16:3d"]
	},
	{
		id: 228,
		text: "Welche der folgenden Aussagen bezüglich des Team-Time-outs ist/sind richtig?",
		answers: [
			"Das Team-Time-out kann nur vom Offiziellen A angemeldet werden",
			"Wird bei Ballbesitz des Gegners ein Team-Time-out angemeldet, gibt der Zeitnehmer die grüne Karte gleich zurück",
			"Die Zeit für das Team-Time-out beginnt mit dem Signal des Zeitnehmers.",
			"Regelwidrigkeiten während eines Team-Time-outs haben die gleichen Folgen wie während der Spielzeit",
			"Nach einem Team-Time-out wird das Spiel immer mit einem Wurf für die beantragende Mannschaft aufgenommen"
		],
		correctAnswers: [1, 3, 4],
		ruleReferences: ["2:10", "Erläuterung 3"]
	},
	{
		id: 229,
		text: "Der Schiedsrichter erkennt auf Freiwurf gegen Kreisspieler B2. Der ausführende Torwart A steht mit einem Fuß im Torraum, mit dem anderen außerhalb. Er passt zu A8, der ein Tor erzielt. Was ist richtig?",
		answers: [
			"Tor für A",
			"Wiederholung des Freiwurfs außerhalb des Torraums von A",
			"Freiwurf für B an der Freiwurflinie von A",
			"Abwurf für B",
			"7-Meter für a"
		],
		correctAnswers: [0],
		ruleReferences: ["5:3"]
	},
	{
		id: 230,
		text: "A10 sitzt seine erste Zeitstrafe ab (Spielzeit bei Beginn der Strafzeit 21:00). Nach Wiederanpfiff des Spiels reklamiert er so heftig, dass die Schiedsrichter das Spiel bei 21:30 mit Time-out unterbrechen und A10 mit einer weiteren Hinausstellung bestrafen. Auswirkungen für Mannschaft A?",
		answers: [
			"weitere Hinausstellung von A10",
			"Disqualifikation von A10",
			"Mannschaft A spielt bis 25:00 mit 5/1 Spielern",
			"Mannschaft A spielt bis 23:00 mit 4/1, dann bis 23:30 mit 5/1 Spielern"
		],
		correctAnswers: [0, 3],
		ruleReferences: ["analog 4:6", "16:3d"]
	},
	{
		id: 231,
		text: "Angreifer A7 betritt mit Ball den gegnerischen Torraum. Richtige Entscheidung?",
		answers: [
			"Freiwurf für B",
			"Abwurf für B",
			"Abwurf für B mit Anpfiff",
			"Freiwurf für B mit Anpfiff"
		],
		correctAnswers: [1],
		ruleReferences: ["6:2a", "12:1"]
	},
	{
		id: 232,
		text: "Welche Aussagen bezüglich des Ausführungsorts eines Freiwurfs sind richtig?",
		answers: [
			"Wird der Ball nach einer Freiwurfentscheidung nicht sofort niedergelegt, darf der Gegner den Wurf dort ausführen, wo der Ball sich befindet",
			"Nach einem Wechselfehler darf der Freiwurf statt am Auswechselraum am Ballort ausgeführt werden, wenn dies für die ausführende Mannschaft von Vorteil ist",
			"Bei passivem Spiel wird der Freiwurf immer dort ausgeführt, wo sich der Ball zum Zeitpunkt des Pfiffs befand",
			"Bei einem Freiwurf auf der Mittellinie ist die seitliche Toleranz etwa gleich groß wie beim Anwurf"
		],
		correctAnswers: [1, 2, 3],
		ruleReferences: ["7;11", "13:6", "13:6 Kommentar"]
	},
	{
		id: 233,
		text: "Kreisspieler B10 sperrt Abwehrspieler A2 korrekt. Als B10 sich löst, spielt Rückraumspieler B4 einen Bodenpass in den Durchbruchsweg zum Tor. Bevor B10 den Ball annehmen kann, wird er von A2 am Trikot zurückgehalten. Richtige Entscheidung?",
		answers: [
			"Freiwurf für B",
			"7-Meter-Wurf für B, unabhängig von der Stellung der gegnerischen Spieler",
			"7-Meter-Wurf für B, wenn kein anderer Spieler von A den Kreisspieler regelgerecht am Torwurf hätte hindern können",
			"Progressive Bestrafung von A2",
			"Zwingend Disqualifikation von A2"
		],
		correctAnswers: [2, 3],
		ruleReferences: ["8:2c", "14:1a", "Erläuterung 6a"]
	},
	{
		id: 234,
		text: "Die Spieler von B haben in Unterzahl ihre Angriffspositionen eingenommen und die Aufbauphase begonnen. Jetzt lassen sich B6 und B8 auswechseln. Richtige Entscheidung?",
		answers: [
			"Warnzeichen „passives Spiel“ geben“",
			"Warnzeichen „passives Spiel“ geben“, wenn binnen 5 Sekunden kein Tempowechsel erfolgt",
			"Sofort Freiwurf für A wegen passiven Spiels",
			"Im Wiederholungsfall Verwarnung gegen B6 oder B8",
			"Im Wiederholungsfall Hinausstellung gegen B6 oder B8"
		],
		correctAnswers: [0],
		ruleReferences: ["7:12", "7:11", "Erläuterung 4.B.2"]
	},
	{
		id: 235,
		text: "Durch welche Aktionen wird das Vorwarnzeichen für passives Spiel aufgehoben?",
		answers: [
			"bei neuerlichem Ballbesitz, nachdem der gegnerische Torwart einen 7-Meter-Wurf abgewehrt hat",
			"bei neuerlichem Ballbesitz nach einem Wurf gegen Pfosten/Latte",
			"Team-Time-out",
			"Druckvolle Aktion vor der nächsten passiven Phase",
			"Durch keine der vorstehenden Aktionen"
		],
		correctAnswers: [0, 1],
		ruleReferences: ["Erläuterung 4.C"]
	},
	{
		id: 236,
		text: "Der während der Spielzeit verwarnte A11 begeht während der Pause eine Unsportlichkeit. Richtige Entscheidung?",
		answers: [
			"Verwarnung von A11",
			"Hinausstellung von A11",
			"Disqualifikation von A11",
			"Mannschaft A zu Beginn der 2. Halbzeit für 2 Minuten mit einem Spieler weniger auf der Spielfläche als vor der Pause",
			"Mannschaft A zu Beginn der 2. Halbzeit mit gleicher Spielerzahl wie zuvor"
		],
		correctAnswers: [1, 3],
		ruleReferences: ["16:3d", "16:5", "16:10"]
	},
	{
		id: 237,
		text: "Mannschaft B ist in Ballbesitz. Der Delegierte unterbricht das Spiel, weil der Trainer von B wegen eines nicht geahndeten Fouls einen Stuhl auf die Spielfläche geworfen hat. Gegen die Offiziellen von B waren bisher keine Strafen ausgesprochen worden. Im Moment des Abpfiffs besaß B7 eine klare Torgelegenheit. Richtige Entscheidung?",
		answers: [
			"Verwarnung von Trainer B",
			"Hinausstellung von Trainer B",
			"Disqualifikation von Trainer B,",
			"Freiwurf für A",
			"7-Meter-Wurf für B",
			"Schriftlicher Bericht"
		],
		correctAnswers: [2, 3, 5],
		ruleReferences: ["8:10", "16:6b"]
	},
	{
		id: 238,
		text: "In welchem/welchen der folgenden Fälle ist der Mannschaftsverantwortliche persönlich zu bestrafen?",
		answers: [
			"Wenn ein Spieler seiner Mannschaft den Auswechselraum ohne Abmeldung bei Sekretär/Zeitnehmer verlässt",
			"Wenn sich ab Spielbeginn im Auswechselraum Personen aufhalten, die nicht im Spielprotokoll eingetragen sind",
			"Wenn ein zusätzlicher Spieler die Spielfläche betritt",
			"Wenn ein nicht teilnahmeberechtigter Spieler seiner Mannschaft die Spielfläche betritt",
			"Wenn nach Spielbeginn eine unkorrekte Ausrüstung festgestellt wird.",
			"Wenn im Auswechselraum Verstöße festgestellt werden, die nicht eindeutig einer einzelnen Person zugeordnet werden können."
		],
		correctAnswers: [1, 3, 4, 5],
		ruleReferences: ["4:2", "4:3"]
	},
	{
		id: 239,
		text: "Torwart A1 wirft einen langen Pass auf A15, der alleine auf das gegnerische Tor zuläuft. Torwart B12 verlässt seinen Torraum, springt ab, fängt den Ball und prallt in der Luft mit A15 zusammen. Beide Spieler fallen zu Boden und bleiben verletzt liegen. Entscheidung?",
		answers: [
			"Time-out, Hinausstellung für A15",
			"Time-out, Hinausstellung für B12",
			"Time-out, Disqualifikation von B12",
			"Freiwurf für A",
			"Freiwurf für B",
			"7m-Wurf für A"
		],
		correctAnswers: [2, 5],
		ruleReferences: ["8:5 Kommentar", "14:1a", "16:6a"]
	},
	{
		id: 240,
		text: "Wer darf an einem 7-Meter-Werfen nicht teilnehmen?",
		answers: [
			"Ein Spieler, der die Schiedsrichter nach Ablauf der 2. Verlängerung beleidigt hat",
			"Die Torwarte",
			"Ein Spieler mit Reststrafzeit aus der Verlängerung",
			"Ein disqualifizierter Spieler",
			"Ein Spieler, der nach Behandlung auf der Spielfläche noch nicht drei Angriffe ausgesetzt hat"
		],
		correctAnswers: [0, 2, 3],
		ruleReferences: ["2:2 Kommentar", "16:5", "16:6b", "16:10"]
	},
	{
		id: 241,
		text: "Fünf Sekunden vor Spielende wehrt der Torwart von A einen Wurf ab, der Ball berührt anschließend die Decke über dem Torraum. Kurz vor Ausführung des Einwurfs für B ertönt das automatische Schlusssignal. Richtige Entscheidung?",
		answers: [
			"Einwurf nach Anpfiff",
			"Time-out",
			"Spielende",
			"Wirkung des Einwurfs abwarten, Spielende"
		],
		correctAnswers: [2],
		ruleReferences: ["2:3", "2:4", "11:1"]
	},
	{
		id: 242,
		text: "B8 wurde schon mit einer Verwarnung belegt. Während eines Team-Time-outs äußert er sich von der Auswechselbank aus unsportlich gegenüber den Schiedsrichtern. Richtige Entscheidung?",
		answers: [
			"Disqualifikation von B8",
			"Hinausstellung von B8",
			"Verwarnung von B8",
			"Keine Entscheidung möglich"
		],
		correctAnswers: [1],
		ruleReferences: ["2:8", "8:7a", "16:3d"]
	},
	{
		id: 243,
		text: "A12 führt kurz vor Spielende beim Stand von 22:21 für seine Mannschaft einen Anwurf regelgerecht nach Anpfiff aus, indem er den Ball Richtung eigenes Tor wirft. Torwart A1 berührt ihn nicht, da er sich im eigenen Torraum befindet. Der Ball geht ins Tor. Die Mitspieler von A12 hatten nach dem Anpfiff, aber bevor der Ball gespielt wurde, sprintend die Mittellinie in Richtung gegnerisches Tor weit überschritten. Richtige Entscheidung?",
		answers: [
			"Tor für B",
			"Freiwurf für B",
			"Wiederholung des Anwurfs",
			"Persönliche Strafe gegen A12",
			"Time-out"
		],
		correctAnswers: [0],
		ruleReferences: ["9:1", "15:2"]
	},
	{
		id: 244,
		text: "Wer ist berechtigt, an einer Entscheidung durch 7-Meter-Werfen teilzunehmen?",
		answers: [
			"Alle im Spielprotokoll eingetragenen Spieler",
			"Spieler, die nicht disqualifiziert sind",
			"Spieler, die am Ende der Spielzeit nicht hinausgestellt sind",
			"Spieler, die die Erlaubnis der Schiedsrichter erhalten haben"
		],
		correctAnswers: [1, 2],
		ruleReferences: ["2:2 Kommentar", "16:5"]
	},
	{
		id: 245,
		text: "Der Feldschiedsrichter pfeift den Anwurf an. A13 nimmt den Ball aus der Hand des zum Anwurf bereitstehenden A9, da er die beiden Außenangreifer A7 und A3 günstig in die gegnerische Spielfeldhälfte sprinten sieht, und spielt zu A7, der ein Tor erzielt. Richtige Entscheidung?",
		answers: [
			"Tor",
			"Korrektur, Wiederholung des Anwurfs",
			"Freiwurf für B",
			"Ermahnung von A13",
			"Ermahnung von A13 und A7"
		],
		correctAnswers: [2],
		ruleReferences: ["15:2", "15:7"]
	},
	{
		id: 246,
		text: "Die Schiedsrichter stellen fest, dass die 2. Halbzeit des Spiels vom Zeitnehmer eine Minute zu spät beendet wurde. Mannschaft A hatte in den Schlusssekunden einen 7-m-Wurf zum Spielstand von 33:32 verwandelt. Im vorhergehenden Angriff der Mannschaft B hatte diese den Ausgleich zum 32:32 erzielt. Wie ist zu verfahren?",
		answers: [
			"Die Schiedsrichter belassen es beim Spielstand 33:32 und melden den Vorfall im Spielbericht.",
			"Die Schiedsrichter korrigieren den Spielstand auf 32:31 und melden den Vorfall im Spielbericht.",
			"Die Schiedsrichter ermitteln anhand der Eintragungen des Sekretärs das vermutliche Ergebnis zum korrekten Spielzeitende und korrigieren dies entsprechend.",
			"Die Schiedsrichter korrigieren im Einvernehmen mit beiden Mannschaftsverantwortlichen den Spielstand."
		],
		correctAnswers: [0],
		ruleReferences: ["2:7", "17:10"]
	},
	{
		id: 247,
		text: "Die 1. Halbzeit ist 1 Minute zu früh abgepfiffen worden. Es liegt zum Zeitpunkt des Pfiffs weder eine Regelwidrigkeit vor, noch ist eine Mannschaft in Ballbesitz (der Ball liegt im Spielfeld auf dem Boden). Beide Mannschaften sind noch auf der Spielfläche. Richtige Entscheidung?",
		answers: [
			"Die 1 Minute wird nicht nachgespielt",
			"Die 1 Minute muss vor der Halbzeitpause nachgespielt werden",
			"Die 1 Minute muss zu Beginn der zweiten Halbzeit nachgespielt werden",
			"Die 1 Minute wird der zweiten Halbzeit hinzugefügt",
			"Mit Losentscheid wird entschieden, welche Mannschaft zu Beginn der 1 Minute Ballbesitz erhält",
			"Die Mannschaft, die zuletzt in Ballbesitz war, erhält den Ball"
		],
		correctAnswers: [1, 5],
		ruleReferences: ["2:7", "13:4b"]
	},
	{
		id: 248,
		text: "Die 1. Halbzeit ist 1 Minute zu früh abgepfiffen worden. Es liegt zum Zeitpunkt des Pfiffs keine Regelwidrigkeit vor, der Ball ist in der Luft über dem Torraum und der Torwart fängt ihn nach dem Pfiff. Beide Teams sind noch auf der Spielfläche. Richtige Entscheidung?",
		answers: [
			"Die 1 Minute wird nicht nachgespielt",
			"1 Minute wird noch gespielt, dann Halbzeitpause",
			"Die 1 Minute muss nach der Pause, vor Beginn der 2. Halbzeit gespielt werden",
			"Die 1 Minute wird der 2. Halbzeit hinzugefügt",
			"Die Mannschaft, die zuletzt in Ballbesitz war, erhält den Ball",
			"Spielfortsetzung mit Abwurf"
		],
		correctAnswers: [1, 4],
		ruleReferences: ["2:7", "13:4a"]
	},
	{
		id: 249,
		text: "Die 1. Halbzeit ist 1 Minute zu früh abgepfiffen worden. Es liegt zum Zeitpunkt des Pfiffs keine Regelwidrigkeit vor, der Ball befindet sich in der Luft über dem Torraum und fliegt nach dem Pfiff am Tor vorbei ins Toraus. Beide Teams sind noch auf der Spielfläche. Richtige Entscheidung?",
		answers: [
			"Die 1 Minute wird nicht nachgespielt",
			"1 Minute wird noch gespielt, dann Halbzeitpause",
			"Die 1 Minute muss nach der Pause, zu Beginn der 2. Halbzeit gespielt werden",
			"Die 1 Minute wird der 2. Halbzeit hinzugefügt",
			"Die Mannschaft, die zuletzt in Ballbesitz war, erhält den Ball",
			"Spielfortsetzung mit Abwurf"
		],
		correctAnswers: [1, 4],
		ruleReferences: ["2:7", "13:4b"]
	},
	{
		id: 250,
		text: "B11 ist in Ballbesitz und versucht, Abwehrspieler A2 zu umspielen. Aufgrund eines Pfiffs aus dem Zuschauerbereich stellt A2 seine Aktivitäten ein; B11 kommt frei zum Torwurf. Richtige Entscheidung?",
		answers: [
			"7-Meter-Wurf für B",
			"Time-out, Rücksprache mit Zeitnehmer",
			"Freiwurf für A",
			"Freiwurf für B"
		],
		correctAnswers: [1, 3],
		ruleReferences: ["13:4a"]
	},
	{
		id: 251,
		text: "Mannschaft A ist in Ballbesitz; ein Mannschaftsoffizieller von B meldet beim Zeitnehmer Team-Time-out an, indem er die grüne Karte auf den Zeitnehmertisch legt. Richtige Entscheidung?",
		answers: [
			"Die grüne Karte wird am Zeitnehmertisch aufgestellt",
			"Der Zeitnehmer pfeift, sobald B in Ballbesitz gelangt",
			"Der Zeitnehmer gibt die grüne Karte zurück",
			"Nur der Mannschaftsverantwortliche darf Team-Time-out anmelden"
		],
		correctAnswers: [2],
		ruleReferences: ["2:10", "Erläuterung 3"]
	},
	{
		id: 252,
		text: "Der Trainer von Mannschaft A reagiert auf eine Entscheidung der SR gegen seine Mannschaft mit lautstarken Protesten sowie den Worten „Ihr seid doch Idioten“. Gegen einen Mannschaftsoffiziellen von A war bereits 10 Minuten vorher eine Verwarnung ausgesprochen worden. Entscheidung?",
		answers: [
			". Verwarnung des Trainers wegen unsportlichen Verhaltens",
			"Hinausstellung gegen den Trainer und Reduzierung der Mannschaft auf der Spielfläche für diese Zeit um einen Spieler.",
			"Disqualifikation des Trainers und Reduzierung der Mannschaft A für 2 Minuten auf der Spielfläche um einen Spieler, Schriftlicher Bericht",
			"Time out und anzeigen der blauen Karte"
		],
		correctAnswers: [2, 3],
		ruleReferences: ["2:8", "8:7a", "8:10a 16:6b", "16:8", "Auswechselraum-Reglement 5"]
	},
	{
		id: 253,
		text: "Nach dem automatischen Schlusssignal muss noch ein Freiwurf ausgeführt werden. B9 wirft auf das Tor. Als der Ball seine Hand gerade verlassen hat, pfeift der Zeitnehmer. Der Ball landet im Tor, der Torwart hätte keine Abwehrchance gehabt. Der Zeitnehmer teilt den Schiedsrichtern mit, dass der im Block stehende A7 vor der Wurfausführung eingewechselt wurde. Richtige Entscheidung?",
		answers: [
			"Hinausstellung von A7",
			"Disqualifikation von A7",
			"Tor für B",
			"7-Meter-Wurf für B",
			"Wiederholung des Freiwurfs mit Anpfiff"
		],
		correctAnswers: [0, 4],
		ruleReferences: ["2:4", "2:5", "2:9 Kommentar", "9:1 3. Absatz", "4:5"]
	},
	{
		id: 254,
		text: "A9 versucht, einen Hüftwurf mit dem Unterschenkel abzuwehren, der Ball geht aber ins Tor. Es war der 2.Versuch, einen Wurf mit dem Fuß abzuwehren. Richtige Entscheidung?",
		answers: [
			"Tor für B",
			"Freiwurf für B",
			"Progressive Strafe gegen A9"
		],
		correctAnswers: [0, 2],
		ruleReferences: ["9:1", "8:7e", "16:1b"]
	},
	{
		id: 255,
		text: "A4 hat sich verletzt. Die Schiedsrichter geben Time-out und das Zeichen zum Betreten der Spielfläche; zwei Offizielle von A sowie der Trainer von B, welcher bereits eine Verwarnung erhalten hatte, betreten die Spielfläche. Richtige Entscheidung?",
		answers: [
			"Keine Intervention",
			"Spielfortsetzung: B mit 6/1 Spielern",
			"Hinausstellung von Trainer B",
			"Disqualifikation von Trainer B",
			"Spielfortsetzung: B für 2 Minuten mit 5/1 Spielern"
		],
		correctAnswers: [2, 4],
		ruleReferences: ["4:11", "16:3e", "16:3 Kommentar"]
	},
	{
		id: 256,
		text: "Der Ball liegt im Torraum von Mannschaft A. In diesem Moment pfeift der Zeitnehmer und erklärt, dass A5 einen Wechselfehler verursacht hat. Richtige Entscheidungen?",
		answers: [
			"Abwurf",
			"Hinausstellung von A5",
			"Freiwurf für B an der Freiwurflinie",
			"Freiwurf für B am Auswechselraum von A"
		],
		correctAnswers: [0, 1],
		ruleReferences: ["4:5", "6:5 2. Absatz", "13:3", "16:3a"]
	},
	{
		id: 257,
		text: "Die Schiedsrichter entscheiden auf Schrittfehler von B21. Dieser legt den Ball an der Torraumlinie von A nieder. Torwart A16, nach der vorangehenden Abwehraktion noch im Torraum am Boden, will den Freiwurf schnell ausführen. Er stützt sich außerhalb des Torraums mit einem Arm ab, ein Fuß befindet sich im Torraum am Boden. In dieser Haltung passt er zu A3, der einen Gegenstoß einleitet, der zu einem Tor führt. Richtige Entscheidung?",
		answers: [
			"Wiederholung des Freiwurfs mit Anpfiff",
			"Tor für A",
			"Freiwurf für B wegen falscher Ausführung des Freiwurfs",
			"Time-out"
		],
		correctAnswers: [1],
		ruleReferences: ["5:3", "7:6", "13:6", "15:1"]
	},
	{
		id: 258,
		text: "Torwart B1 hat seinen Torraum verlassen. Er springt im Spielfeld ab und fängt den von einem Mitspieler gespielten Ball in der Luft, danach landet er beidbeinig im eigenen Torraum. Richtige Entscheidung?",
		answers: [
			"Weiterspielen lassen",
			"Abwurf für B",
			"Freiwurf für A",
			"7-Meter-Wurf für A",
			"Time-out"
		],
		correctAnswers: [2],
		ruleReferences: ["5:9", "13:1a"]
	},
	{
		id: 259,
		text: "A2 steht zur Ausführung des 7-Meter-Wurfs bereit. Der Feldschiedsrichter pfeift an, da lässt A2 irritiert den Ball auf den Boden fallen. B3 nimmt ihn sofort auf und spielt zu B2, der mittels Gegenstoßes ein Tor erzielt. Richtige Entscheidung?",
		answers: [
			"Tor für B",
			"Wiederholung des 7-Meter-Wurfs",
			"Freiwurf gegen A",
			"Time-out"
		],
		correctAnswers: [0],
		ruleReferences: ["13:2", "14:4", "15:2"]
	},
	{
		id: 260,
		text: "Für die Handhabung des Vorwarnzeichens für passives Spiel (IHF-Handzeichen Nr.17) gelten folgende Hinweise:",
		answers: [
			"Wird die Entwicklung zu passivem Spiel erkannt, zeigt dies zuerst der Feldschiedsrichter mit dem IHF-Handzeichen Nr. 17 an; der Torschiedsrichter übernimmt dieses Zeichen und hebt anschließend ebenfalls den Arm entsprechend",
			"Sollte die angreifende Mannschaft nach dem Anzeigen des Vorwarnzeichens ein Team-Time-out beantragen, so muss das Warnzeichen nach Wiederaufnahme des Spiels erneut angezeigt werden",
			"Unternimmt das ballbesitzende Team nach Anzeige des Vorwarnzeichens keinen erkennbaren Versuch, zum Torwurf zu gelangen, entscheidet entweder der Torschiedsrichter oder der Feldschiedsrichter auf passives Spiel",
			"Nach Handzeichen 17 hat die Mannschaft höchstens 6 Pässe zur Verfügung, um zu einem Torwurf zu gelangen."
		],
		correctAnswers: [1, 2, 3],
		ruleReferences: ["Erläuterung 4"]
	},
	{
		id: 261,
		text: "A3 ist gerade mit einem Gegenstoß unterwegs auf das Tor von B. Während seines Sprungwurfs pfeift ein Zuschauer mit einer Schiedsrichter-Pfeife und irritiert A3 dadurch so, dass dieser seinen Gegenstoß abbricht: Er stoppt mit Ball im Torraum. Richtige Entscheidung?",
		answers: [
			"Freiwurf für B mit Anpfiff",
			"7-Meter-Wurf für A",
			"Freiwurf für A mit Anpfiff",
			"Abwurf für B mit Anpfiff",
			"Time-out, Rücksprache mit Zeitnehmer"
		],
		correctAnswers: [1, 4],
		ruleReferences: ["14:1c"]
	},
	{
		id: 262,
		text: "Torwart A13 will einen Abwurf ausführen. Gegenspieler B3 betritt wiederholt den Torraum und versucht ohne Körperkontakt, den Abwurf zu verhindern. Richtige Entscheidung?",
		answers: [
			"Freiwurf für A",
			"Abwurf mit Anpfiff",
			"Verwarnung von B3",
			"Hinausstellung von B3",
			"Time-out"
		],
		correctAnswers: [1, 3, 4],
		ruleReferences: ["12:2", "15:4", "15:9", "16:1b", "16:3d", "8:7c"]
	},
	{
		id: 263,
		text: "Bei unentschiedenem Spielstand nach beiden Verlängerungen ist nach dem Reglement ein 7-Meter-Werfen durchzuführen. A7 erhielt in der 9. Minute der 2. Verlängerung eine Hinausstellung. Zum 7-Meter-Werfen wird er vom Mannschaftsverantwortlichen von A als fünfter Werfer gemeldet. Richtige Entscheidung?",
		answers: [
			"A7 darf teilnehmen",
			"A7 darf nicht teilnehmen"
		],
		correctAnswers: [1],
		ruleReferences: ["2:2 Kommentar", "16:5"]
	},
	{
		id: 264,
		text: "B9 wird wegen einer groben Regelwidrigkeit gegen A9 disqualifiziert. Vor dem Wiederanpfiff schlägt er dem Trainer von A ins Gesicht. Richtige Entscheidung?",
		answers: [
			"Disqualifikation von B9, Mannschaft B für 2 Minuten mit 2 Spielern weniger",
			"Disqualifikation von B9, Mannschaft B für 4 Minuten mit 1 Spieler weniger",
			"Keine zusätzliche Bestrafung möglich",
			"Schriftlicher Bericht"
		],
		correctAnswers: [1, 3],
		ruleReferences: ["8:6b", "16:9d"]
	},
	{
		id: 265,
		text: "B8 wird nach Time-out mit einer Hinausstellung belegt. Beim Hinausgehen, vor dem Wiederanpfiff, äußert er sich gegenüber den Schiedsrichtern unsportlich. Richtige Entscheidung?",
		answers: [
			"2 Minuten + 2 Minuten von B8; Team B für 2 Minuten mit 2 Spielern weniger",
			"2 Minuten + 2 Minuten von B8, Team B für 4 Minuten mit einem Spieler weniger",
			"2 Minuten + Disqualifikation von B8, Team B für 2 Minuten mit 2 Spielern weniger",
			"2 Minuten + Disqualifikation von B8, Team B für 4 Minuten mit einem Spieler weniger"
		],
		correctAnswers: [1],
		ruleReferences: ["16:9a", "8:7a", "16:3d"]
	},
	{
		id: 266,
		text: "Spielbeginn: Welcher Schiedsrichter wird Feld- bzw. Torschiedsrichter?",
		answers: [
			"Der in der Ansetzung Erstgenannte wird Feldschiedsrichter",
			"Der in der Ansetzung Erstgenannte wird Torschiedsrichter",
			"Die Schiedsrichter losen, wer auf welcher Position beginnt",
			"Freie Entscheidung der Schiedsrichter"
		],
		correctAnswers: [3],
		ruleReferences: ["17:1"]
	},
	{
		id: 267,
		text: "B7, dessen Mitspieler in Ballbesitz ist, nimmt ohne Ball eine Position außerhalb der Spielfläche ein. Die Schiedsrichter weisen ihn vergeblich darauf hin, dass er auf die Spielfläche zurück muss. Richtige Entscheidung?",
		answers: [
			"Weiterspielen lassen",
			"Freiwurf für die andere Mannschaft",
			"Progressive Bestrafung von B7",
			"Einwurf für den Gegner"
		],
		correctAnswers: [1],
		ruleReferences: ["7:10"]
	},
	{
		id: 268,
		text: "In welchem/welchen der nachfolgenden Fälle ist auf Abwurf zu entscheiden?",
		answers: [
			"Wenn ein Spieler der angreifenden Mannschaft mit Ball den gegnerischen Torraum berührt",
			"Wenn ein Spieler der angreifenden Mannschaft ohne Ball den gegnerischen Torraum betritt und dadurch einen Vorteil erlangt",
			"Wenn ein Spieler den Ball über die gegnerische Torauslinie ablenkt",
			"Wenn ein Spieler mit Ball den eigenen Torraum betritt"
		],
		correctAnswers: [0, 1, 2],
		ruleReferences: ["6:2a", "12:1"]
	},
	{
		id: 269,
		text: "Tempogegenstoß von A beim Stand von 26:26. A5 setzt an der Torraumlinie zum Torwurf an; in diesem Moment pfeift der Zeitnehmer und erklärt, dass die Spielzeit beendet sei. Die Schiedsrichter stellen fest, dass noch 20 Sekunden zu spielen sind. Richtige Entscheidung?",
		answers: [
			"Freiwurf für A am Zeitnehmertisch",
			"7-Meter-Wurf für A",
			"Bericht im Spielprotokoll",
			"Freiwurf für A an der Stelle, an der sich der Ball bei der Unterbrechung befand"
		],
		correctAnswers: [1, 2],
		ruleReferences: ["2:3", "14:1b", "Erläuterung 6a"]
	},
	{
		id: 270,
		text: "Wo muss der Anwurf ausgeführt werden?",
		answers: [
			"Bis zu 3 Meter vor der Mittellinie, also in der eigenen Hälfte",
			"Bis zu 3 Meter jenseits der Mittellinie, also in der gegnerischen Hälfte",
			"In der Mitte des Spielfelds, einen Fuß auf der Mittellinie, den anderen Fuß in der eigenen Platzhälfte, seitliche Toleranz 1,5 Meter",
			"Nur genau in der Mitte des Spielfelds, einen Fuß auf der Mittellinie"
		],
		correctAnswers: [2],
		ruleReferences: ["10:3"]
	},
	{
		id: 271,
		text: "B3 führt einen Torwurf so unglücklich aus, dass der Ball, ohne einen weiteren Spieler zu berühren, im Torraum liegen bleibt. In diesem Moment beantragt der Mannschaftsverantwortliche von B ein Team-Time-out. Richtige Entscheidung?",
		answers: [
			"Der Zeitnehmer pfeift, stoppt gleichzeitig die Spielzeituhr und zeigt den Schiedsrichtern das Team-Time-out für Mannschaft B an",
			"Der Zeitnehmer gibt dem Mannschaftsverantwortlichen von B die grüne Karte zurück",
			"Spielfortsetzung mit Freiwurf für Mannschaft B",
			"Abwurf für Mannschaft A"
		],
		correctAnswers: [1, 3],
		ruleReferences: ["6:5", "Erläuterung 3"]
	},
	{
		id: 272,
		text: "Mannschaft A lässt sich sehr viel Zeit mit der Ausführung eines Anwurfs. Die Mannschaft war wegen derselben taktischen Verzögerung bereits ermahnt worden. Richtige Entscheidung?",
		answers: [
			"Weiterspielen lassen",
			"Time out, Anwurf anpfeifen",
			"Time out, Anwurf anpfeifen, sofort Handzeichen Nr. 17",
			"Anwurf anpfeifen, sofort Handzeichen Nr. 17",
			"Progressive Bestrafung des Mannschaftsverantwortlichen"
		],
		correctAnswers: [3],
		ruleReferences: ["7:11", "7:12", "Erläuterung 4.B.B1"]
	},
	{
		id: 273,
		text: "A4 berührt den im gegnerischen Torraum rollenden Ball. Im nächsten Moment wird er von B6 zu Boden gestoßen. Richtige Entscheidung?",
		answers: [
			"Progressive Bestrafung von B6",
			"Freiwurf für Mannschaft A",
			"Abwurf für Mannschaft B",
			"Freiwurf für Mannschaft B"
		],
		correctAnswers: [0, 2],
		ruleReferences: ["6:5", "8:2", "8:3", "12:1"]
	},
	{
		id: 274,
		text: "Welche Aussagen zum Anwurf sind falsch?",
		answers: [
			"Der Anwurf ist binnen 3 Sekunden nach dem Anpfiff vom Mittelpunkt des Spielfelds aus in Richtung gegnerische Hälfte auszuführen",
			"Der Anwurf kann nicht unmittelbar zu einem Tor bei der anderen Mannschaft führen",
			"Bei der Ausführung des Anwurfs darf eine falsche Ausgangsstellung der anderen Mannschaft nicht korrigiert werden, wenn der werfenden Mannschaft durch die falsche Ausgangsstellung kein Nachteil entsteht",
			"Die Mitspieler dürfen die Mittellinie nicht überschreiten, bevor der Wurf ausgeführt ist"
		],
		correctAnswers: [0, 1, 3],
		ruleReferences: ["10:3", "15:2", "15:4"]
	},
	{
		id: 275,
		text: "Die Schiedsrichter geben das Zeichen zum Betreten der Spielfläche, da sich ein Spieler von A verletzt hat. Wer darf die Spielfläche betreten?",
		answers: [
			"Zwei Offizielle von A, sonst niemand",
			"Je zwei Offizielle beider Mannschaften",
			"Zwei Personen (Offizielle oder Spieler) von A",
			"Zwei Personen (Offizielle oder Spieler) von beiden Mannschaften",
			"Der Arzt von Mannschaft A, wenn er nicht einer der vier Offiziellen ist"
		],
		correctAnswers: [2],
		ruleReferences: ["4:11"]
	},
	{
		id: 276,
		text: "Welche dieser Aussagen zum Abwurf sind richtig?",
		answers: [
			"Die Spieler der anderen Mannschaft müssen sich außerhalb der Freiwurflinie befinden, bis der Ball im Spiel ist",
			"Die Spieler der anderen Mannschaft müssen sich außerhalb der Torraumlinie und 3 Meter entfernt von der Stelle befinden, an welcher der Torwart den Abwurf ausführt",
			"Den Spielern der anderen Mannschaft ist es erlaubt, den Ball zu berühren, bevor dieser die Torraumlinie überquert",
			"Der Torwart kann beim Abwurf kein Eigentor verursachen",
			"Der Torwart kann bei Ausführung des Abwurfs kein Tor erzielen",
			"Der Torwart darf bei der Ausführung des Abwurfs die Torraumlinie nicht betreten"
		],
		correctAnswers: [3],
		ruleReferences: ["9:1", "12:2", "15:2"]
	},
	{
		id: 277,
		text: "Ein Spieler springt in den gegnerischen Torraum. Er hat Ball- und Körperkontrolle und befindet sich in einer guten Wurfposition. Anstatt zu werfen, dreht er über dem Torraum ab und spielt den Ball zurück zu einem Mitspieler im Rückraum. Richtige Entscheidung?",
		answers: [
			"Vorwarnzeichen für passives Spiel",
			"Sofort Freiwurf wegen passiven Spiels",
			"Sofort Freiwurf wegen unsportlichen Verhaltens",
			"Progressive Bestrafung"
		],
		correctAnswers: [1],
		ruleReferences: ["7:12"]
	},
	{
		id: 278,
		text: "Welche Ausgangsstellungen des Anwurfausführenden sind regelgerecht?",
		answers: [
			"Mindestens mit einem Fuß auf der Mittellinie",
			"Der andere Fuß jenseits der Mittellinie (in der gegnerischen Hälfte)",
			"Der andere Fuß vor der Mittellinie (in der eigenen Hälfte)",
			"Der andere Fuß ebenfalls auf der Mittellinie"
		],
		correctAnswers: [0, 2, 3],
		ruleReferences: ["10:3"]
	},
	{
		id: 279,
		text: "Einer der Offiziellen von A hat bereits eine Verwarnung wegen Reklamierens. Später betritt ein Offizieller von A die Spielfläche ohne Erlaubnis, sein Verhalten ist allerdings nicht unsportlich. Welche Bestrafung ist richtig?",
		answers: [
			"Verwarnung",
			"Hinausstellung des Offiziellen; er muss die Bank für 2 Minuten verlassen",
			"Disqualifikation",
			"Hinausstellung des Offiziellen und Reduzierung seiner Mannschaft auf der Spielfläche für 2 Minuten"
		],
		correctAnswers: [3],
		ruleReferences: ["4:2", "16:3e"]
	},
	{
		id: 280,
		text: "A7 verbüßt wegen unsportlichen Verhaltens seine erste Zeitstrafe. Nach dem Wiederanpfiff gestikuliert er auf der Bank heftig, um zu zeigen, dass er mit den Schiedsrichtern nicht einverstanden ist. Wie ist dies zu bestrafen?",
		answers: [
			"Disqualifikation",
			"Weitere Hinausstellung; A7 muss für 4 Minuten auf der Bank bleiben",
			"Weitere Hinausstellung, welche sofort wirksam wird: Mannschaft A muss auf der Spielfläche reduziert werden",
			"Verwarnung, da die progressive Bestrafung auf der Bank anders zu behandeln ist als die auf der Spielfläche"
		],
		correctAnswers: [2],
		ruleReferences: ["8:8a", "16:3f"]
	},
	{
		id: 281,
		text: "In welchen Situationen ist nicht verbindlich Time-out zu geben?",
		answers: [
			"Der Ball fliegt sehr weit weg",
			"Der Zeitnehmer pfeift",
			"Ein Spieler scheint verletzt zu sein",
			"Die Schiedsrichter zeigen bei einer Entscheidung bezüglich der Spielfortsetzung in verschiedene Richtungen",
			"Wechsel eines Feldspielers mit einem Torwart zur Ausführung eines Abwurfs"
		],
		correctAnswers: [0, 2, 4],
		ruleReferences: ["2:8", "Erläuterung 2"]
	},
	{
		id: 282,
		text: "Torwart A wirft zu A8, welcher sich allein mit Torwart B an dessen Torraum befindet. Kurz bevor A8 den Ball erreicht, pfeift der Zeitnehmer, weil der Trainer von A in diesem Moment ein Team-Time-out anmeldet. Wie ist das Spiel fortzusetzen?",
		answers: [
			"Freiwurf für A außerhalb des Torraums von A",
			"Freiwurf für A an der Auswechsellinie von A",
			"7-Meter-Wurf für A",
			"Freiwurf für A an der Freiwurflinie von B"
		],
		correctAnswers: [3],
		ruleReferences: ["Erläuterung 3"]
	},
	{
		id: 283,
		text: "Die Schiedsrichter lassen den Reserveball ins Spiel bringen. Wann sollte der ursprüngliche Spielball wieder verwendet werden?",
		answers: [
			"Bei der nächsten Unterbrechung",
			"Er darf nicht wieder benutzt werden, es sei denn, es ist unmöglich, mit dem Reserveball weiterzuspielen",
			"Wenn die Schiedsrichter es für erforderlich halten, dass er wieder benutzt wird",
			"Wenn eine der Mannschaften es wünscht"
		],
		correctAnswers: [2],
		ruleReferences: ["3:4"]
	},
	{
		id: 284,
		text: "Mannschaft A im Angriff. B4 steht an seiner Torraumlinie. Der Ball ist frei in der Luft, B4 erreicht ihn und lenkt ihn in seinen Torraum. Er wird vom Torwart berührt und überquert die Torauslinie. Richtige Entscheidung?",
		answers: [
			"Einwurf für A",
			"Freiwurf für A",
			"7-Meter-Wurf für A",
			"Abwurf für B",
			"Progressive Bestrafung von B4"
		],
		correctAnswers: [1],
		ruleReferences: ["6:7b"]
	},
	{
		id: 285,
		text: "A6 wird von B3 regelwidrig gestoßen und spuckt demonstrativ vor B3 auf den Boden. Wie ist A6 zu bestrafen?",
		answers: [
			"Progressiv",
			"Hinausstellung",
			"Disqualifikation",
			"Schriftlicher Bericht"
		],
		correctAnswers: [2],
		ruleReferences: ["8:9; 16:6b"]
	},
	{
		id: 286,
		text: "Welche der folgenden Aussagen bezüglich der richtigen Handhabung des Vorwarnzeichens für passives Spiel ist/sind richtig?",
		answers: [
			"Nur der Feldschiedsrichter darf das Vorwarnzeichen als erster zeigen.",
			"Wenn das Vorwarnzeichen während eines Angriffs zum ersten Mal gezeigt wird, sind die Arme nach ca.10 Sekunden herunterzunehmen",
			"Das Vorwarnzeichen sollte nach der ersten Unterbrechung zur Information wiederholt werden, wenn es bereits vor der Unterbrechung gezeigt wurde",
			"Das Vorwarnzeichen gilt immer als aufgehoben, wenn ein Abwehrspieler progressiv bestraft wird",
			"Das Vorwarnzeichen sollte angezeigt werden, wenn ein Angreifer klare Ballkontrolle hat."
		],
		correctAnswers: [3, 4],
		ruleReferences: ["Erläuterung 4"]
	},
	{
		id: 287,
		text: "Bei einem Zusammenprall von zwei Spielern pfeifen beide Schiedsrichter. Der Feldschiedsrichter entscheidet auf Stürmerfoul, der Torschiedsrichter auf Vergehen der Abwehr. Richtige Entscheidung?",
		answers: [
			"Die Entscheidung des Torschiedsrichters ist maßgebend.",
			"Die Entscheidung des Feldschiedsrichters ist maßgebend.",
			"Die Schiedsrichter nehmen Kontakt auf und treffen eine gemeinsame Entscheidung.",
			"Time-out ist verbindlich.",
			"Time-out ist notwendig, wenn die gemeinsame Entscheidung gegen die angreifende Mannschaft fällt.",
			"Time out ist nicht verpflichtend, wenn die Schiedsrichter elektronische Geräte zur internen Kommunikation benutzen."
		],
		correctAnswers: [2, 3],
		ruleReferences: ["17:7"]
	},
	{
		id: 288,
		text: "In welchen der folgenden Fälle muss eine Mannschaft auf dem Spielfeld für 4 Minuten reduziert werden?",
		answers: [
			"Ein Spieler ist bereits disqualifiziert worden; beim Verlassen der Spielfläche protestiert er in einer Art, die eine Hinausstellung verdient.",
			"Ein Spieler hat bereits eine Hinausstellung erhalten, beim Verlassen der Spielfläche beleidigt er einen Schiedsrichter und wird disqualifiziert.",
			"Ein Spieler hat wegen unsportlichen Verhaltens gegen einen Gegenspieler eine Hinausstellung erhalten, noch auf der Spielfläche schlägt er diesem in das Gesicht und wird disqualifiziert.",
			"Ein Spieler hat wegen unsportlichen Verhaltens eine Hinausstellung erhalten, nach dem Überschreiten der Seitenlinie kommt er zurück auf die Spielfläche, protestiert und erhält eine zusätzliche Hinausstellung.",
			"Ein Spieler hat bereits eine Disqualifikation wegen Anspuckens eines Gegners erhalten, beim Verlassen der Spielfläche stößt er den Schiedsrichter.",
			"Ein Spieler hat bereits eine Disqualifikation wegen groben Vergehens erhalten, nach dem Verlassen der Spielfläche und Wiederanpfiff des Spiels beleidigt er die Schiedsrichter aus dem Zuschauerbereich."
		],
		correctAnswers: [0, 1, 2, 3, 4],
		ruleReferences: ["16:9"]
	},
	{
		id: 289,
		text: "Welche der folgenden Handlungen ist/sind bei Time-out wegen einer Verletzung (die Schiedsrichter gaben Mannschaft A die Erlaubnis zum Betreten der Spielfläche) nicht erlaubt?",
		answers: [
			"Spieler von B halten sich nahe der Seitenlinie auf, um Instruktionen vom Trainer zu erhalten",
			"Spieler von A nehmen Auswechslungen außerhalb der Auswechsellinie vor",
			"Einer der Offiziellen von A auf der Spielfläche entfernt sich weit von dem verletzten Spieler, um anderen Spielern Anweisungen zu geben"
		],
		correctAnswers: [1, 2],
		ruleReferences: ["4:4", "4:11"]
	},
	{
		id: 290,
		text: "Der Ball liegt direkt außerhalb des Torraums von A. Torwart A1 steht innerhalb des Torraums und nimmt den Ball auf, um zu verhindern, dass ein gegnerischer Spieler ihn erhält. Richtige Entscheidung?",
		answers: [
			"Freiwurf für B",
			"7-Meter-Wurf für B",
			"Progressive Bestrafung von A1",
			"Nicht eingreifen, da keine Regelwidrigkeit"
		],
		correctAnswers: [0],
		ruleReferences: ["5:7", "5:8"]
	},
	{
		id: 291,
		text: "Torwart A hat einen Ball gehalten und diesen im Torraum in den Händen, als der Zeitnehmer wegen eines Wechselfehlers von Mannschaft A pfeift. Richtige Entscheidung?",
		answers: [
			"Freiwurf für B am Auswechselraum von A",
			"Time out",
			"Abwurf für A",
			"Hinausstellung von A",
			"Freiwurf für B an der Freiwurflinie von A"
		],
		correctAnswers: [1, 2, 3],
		ruleReferences: ["2:8a", "4:5", "6:4", "12:1", "13:3"]
	},
	{
		id: 292,
		text: "Welche der folgenden Aussagen bezüglich passiven Spiels sind korrekt?",
		answers: [
			"Einer Mannschaft sollten von der Aufbauphase bis zur Abschlussphase nicht mehr als 5 Sekunden zugestanden werden",
			"Die Schiedsrichter sollten genau auf langsamen bzw. verspäteten Spielerwechsel nach Anwurf achten",
			"Die Schiedsrichter müssen beobachten, ob die Mannschaft das Tempo steigert und während der Aufbauphase versucht, Raum zu gewinnen",
			"Die Schiedsrichter sollten auf passives Spiel achten, sobald die ballbesitzende Mannschaft in der eigenen Spielfeldhälfte mit der Spielfeldüberbrückung beginnt",
			"Einer Mannschaft, die einen Gegenstoß versucht hat, muss ein Spielerwechsel erlaubt sein, wenn sie vom Gegenstoß zu einer normalen Aufbauphase übergeht"
		],
		correctAnswers: [1, 2, 3, 4],
		ruleReferences: ["7:11", "Erläuterung 4"]
	},
	{
		id: 293,
		text: "Wann beginnt das Spiel?",
		answers: [
			"Mit dem Pfiff des erstgenannten Schiedsrichters",
			"Wenn der Ball die Hand des Werfers verlassen hat",
			"Wenn der Zeitnehmer die Stoppuhr startet oder die öffentliche Zeitmessanlage zu laufen beginnt",
			"Mit dem Anpfiff des Anwurfs durch den Feldschiedsrichter"
		],
		correctAnswers: [3],
		ruleReferences: ["2:3"]
	},
	{
		id: 294,
		text: "Torwart A 12 springt außerhalb seines Torraums im Spielfeld ab, nimmt einen von einem Mitspieler gespielten Ball in der Luft an und wirft ihn über die eigene Torauslinie. Dann landet er in seinem Torraum. Richtige Entscheidung?",
		answers: [
			"Abwurf",
			"Einwurf für den Gegner",
			"Freiwurf für den Gegner",
			"Verwarnung von A12"
		],
		correctAnswers: [1],
		ruleReferences: ["5:3", "6:7c"]
	},
	{
		id: 295,
		text: "Welche der nachfolgenden Aussagen zur 7-Meter-Ausführung ist/sind zutreffend?",
		answers: [
			"Der ausführende Spieler darf bis zu einem Meter hinter der 7-Meter-Linie stehen",
			"Wenn die abwehrende Mannschaft den Torwart wechselt, müssen die Schiedsrichter auf Time-out entscheiden",
			"Wenn der Torwart bei der Abwehrhandlung die 4-Meter-Linie überschreitet, ist er im Wiederholungsfall persönlich zu bestrafen",
			"Die Spieler der abwehrenden Mannschaft müssen immer 3 Meter vom ausführenden Spieler entfernt sein"
		],
		correctAnswers: [0],
		ruleReferences: ["14:3", "14:5", "14:8", "14:9"]
	},
	{
		id: 296,
		text: "Welche der folgenden Festlegungen trifft das Regelwerk hinsichtlich der Aufgabenteilung von Zeitnehmer und Sekretär?",
		answers: [
			"Die Kontrolle des Aus- und Eintretens der Auswechselspieler ist dem Zeitnehmer vorbehalten",
			"Generell sollte alle notwendigen Spielunterbrechungen der Zeitnehmer vornehmen",
			"Erkennt der Sekretär das zu frühe Eintreten eines hinausgestellten Spielers, hat er zu pfeifen",
			"Wenn keine öffentliche Zeitmessanlage vorhanden ist, unterrichtet der Zeitnehmer die Mannschaftsverantwortlichen über die gespielte oder die noch zu spielende Zeit",
			"Zählen der Anzahl der Angriffe nach der Versorgung eines Spielers auf der Spielfläche"
		],
		correctAnswers: [1, 3, 4],
		ruleReferences: ["18:1", "18:2"]
	},
	{
		id: 297,
		text: "Wie groß sollte der Abstand zwischen Auswechselbänken und Mittellinie sein?",
		answers: [
			"1 Meter",
			"2 Meter",
			"3 Meter",
			"3,5 Meter"
		],
		correctAnswers: [3],
		ruleReferences: ["Auswechselraum-Reglement 1"]
	},
	{
		id: 298,
		text: "Wann muss eine Spielzeitunterbrechung erfolgen?",
		answers: [
			"Vor einer Hinausstellung eines Offiziellen",
			"Vor der dritten Hinausstellung eines Spielers",
			"Nach wiederholt unsportlichem Verhalten",
			"Vor erforderlicher Rücksprache mit dem Partner",
			"Nach grob unsportlichem Verhalten"
		],
		correctAnswers: [0, 1, 2, 3, 4],
		ruleReferences: ["2:8"]
	},
	{
		id: 299,
		text: "A3 wirft auf das Tor und trifft den Pfosten. Der Ball rollt aus dem Torraum. Etwa an der Freiwurflinie werfen sich A3 und B4 – ohne einander zu gefährden – nach dem Ball. B4 kann den Ball zu B6 lenken, der zum Gegenstoß startet und ein Tor erzielt. Richtige Entscheidung?",
		answers: [
			"Verwarnung von B4",
			"Tor für B",
			"Freiwurf je nach Situation für A oder B",
			"Abwurf"
		],
		correctAnswers: [1],
		ruleReferences: ["7:1", "7:6"]
	},
	{
		id: 300,
		text: "A5 wird in Minute 7:00 hinausgestellt. Vor Wiederanpfiff reklamiert er und erhält erneut eine Hinausstellung. Genau eine Minute später läuft er auf das Spielfeld, der Zeitnehmer pfeift: Wegen der erneuten Hinausstellung sei A5 zu disqualifizieren. Daraufhin beleidigt A5 den Schiedsrichter. Richtige Entscheidung?",
		answers: [
			"A von 7.-8. Minute mit 5/1 Spielern, 8.-10. Minute mit 4/1 Spielern, 10.-11. Minute mit 5/1 Spielern",
			"A von 7.-8. Minute mit 5/1 Spielern, 8.-11. Minute mit 4/1 Spielern, 11.-12. Minute mit 5/1 Spielern",
			"A von 7.-8. Minute mit 4/1 Spielern, 8.-10. Minute mit 3/1 Spielern, 10.-11. Minute mit 4/1 Spielern",
			"A von 7.-8. Minute mit 4/1 Spielern, 8.-10. Minute mit 2/1 Spielern, 10.-11 Minute mit 4/1 Spielern"
		],
		correctAnswers: [1],
		ruleReferences: ["16:3a", "16:6d", "16:9d"]
	},
	{
		id: 301,
		text: "A5 springt von der rechten Außenposition in den Torraum und prallt dabei auf B11, der ca. 50 cm hinter der Linie (im Torraum) auf ihn wartet und die Arme gestreckt nach oben hält. Dies macht B11 zum dritten Mal in diesem Spiel. Richtige Entscheidung?",
		answers: [
			"7-Meter-Wurf für A",
			"Stürmerfoul",
			"Hinausstellung von B11",
			"Verwarnung von B11"
		],
		correctAnswers: [0, 2],
		ruleReferences: ["6:2c", "14:1a", "8:7f", "16:3d"]
	},
	{
		id: 302,
		text: "Haben die Schiedsrichter einen Verstoß gegen das AuswechselraumReglement nicht bemerkt, müssen sie von Zeitnehmer/Sekretär...",
		answers: [
			"sofort",
			"bei der nächsten Spielunterbrechung darauf aufmerksam gemacht werden."
		],
		correctAnswers: [1],
		ruleReferences: ["Erläuterung 7Ba"]
	},
	{
		id: 303,
		text: "Nach einer Abwehr durch Torwart A rollt der Ball entlang der Seitenlinie an der Auswechselbank von A vorbei. Der auf der Bank sitzende A5 hält den Fuß ins Spielfeld und stoppt den Ball, damit A4 den Ball noch vor der Seitenlinie aufnehmen kann. Richtige Entscheidung?",
		answers: [
			"Freiwurf für B",
			"Hinausstellung von A5",
			"Disqualifikation von A5",
			"Ein Mitspieler von A5 muss vom Spielfeld",
			"7-Meter-Wurf für B",
			"Schriftlicher Bericht"
		],
		correctAnswers: [0, 1, 3],
		ruleReferences: ["4:6", "16:3a"]
	},
	{
		id: 304,
		text: "A10 versucht ein Kreisanspiel zu A8. Der vor diesem stehende Abwehrspieler B10 wird von dem Ball am Fuß getroffen. Richtige Entscheidung?",
		answers: [
			"Freiwurf für A",
			"Weiterspielen lassen",
			"Entscheidend ist, wer in Ballbesitz kommt"
		],
		correctAnswers: [1],
		ruleReferences: ["7:8"]
	},
	{
		id: 305,
		text: "Spielstand 4 Sekunden vor Spielende 30:30. Gastverein A erzielt das 30:31. Heimverein B will den schnellen Anwurf ausführen. Der Ausführende steht mit einem Fuß vor, mit dem anderen Fuß hinter der Mittellinie. Ohne Anpfiff wirft B10 den Ball und erzielt das Tor zum 31:31. Das automatische Schlusssignal ertönt. Richtige Entscheidung?",
		answers: [
			"Tor für B",
			"Wiederholung des Anwurfs",
			"Wirkung des Wurfs abwarten",
			"Time-out",
			"Spielende, kein Tor"
		],
		correctAnswers: [4],
		ruleReferences: ["2:3", "2:4", "15:5b"]
	},
	{
		id: 306,
		text: "Mannschaft A ist an der Freiwurflinie von B in Ballbesitz. Der Trainer von B reklamiert so stark gegen eine Schiedsrichterentscheidung, dass es zu einer Spielunterbrechung kommt. Wie und wo geht das Spiel weiter?",
		answers: [
			"Progressive Bestrafung von Trainer B",
			"Freiwurf für A am Auswechselraum von B",
			"Freiwurf für A an der Freiwurflinie von B"
		],
		correctAnswers: [0, 2],
		ruleReferences: ["13:6", "8:7", "Auswechselraum-Reglement 5+6"]
	},
	{
		id: 307,
		text: "A7 will einen Freiwurf ausführen und steht wie seine Mitspieler korrekt vor der Freiwurflinie. Der Freiwurf wird ohne Anpfiff schnell ausgeführt. Bevor jedoch der Ball die Hand von A7 verlassen hat, überschreiten A9 und A12 die Freiwurflinie in Richtung Kreisposition. Richtige Entscheidung?",
		answers: [
			"Freiwurf für B",
			"Korrektur",
			"Freiwurf für A mit Anpfiff",
			"Freiwurf für B, Verwarnung von A9 oder A12"
		],
		correctAnswers: [1, 2],
		ruleReferences: ["13:7", "15:1", "15:5", "15:6", "15:7 2. Absatz"]
	},
	{
		id: 308,
		text: "Mit welchem der folgenden Würfe kann kein Eigentor erzielt werden?",
		answers: [
			"Abwurf",
			"Freiwurf",
			"Einwurf",
			"Anwurf"
		],
		correctAnswers: [0],
		ruleReferences: ["12:2", "15:2"]
	},
	{
		id: 309,
		text: "Als sich A6 bei einem Tempogegenstoß in einer klaren Torgelegenheit befindet, fällt die Hallenbeleuchtung aus. Welche der nachfolgenden Aussagen trifft/treffen zu?",
		answers: [
			"Die Schiedsrichter warten zunächst die klare Torgelegenheit ab",
			"Die Schiedsrichter unterbrechen das Spiel unverzüglich mit Time-out",
			"Sobald die Hallenbeleuchtung wieder funktioniert, wird das Spiel mit Freiwurf für Mannschaft A wieder aufgenommen",
			"Sobald die Hallenbeleuchtung wieder funktioniert, wird das Spiel mit 7-Meter-Wurf für Mannschaft A wieder aufgenommen"
		],
		correctAnswers: [1, 3],
		ruleReferences: ["14:1c", "Erläuterung 2a"]
	},
	{
		id: 310,
		text: "Wenn der Delegierte aufgrund eines Verstoßes durch eine Mannschaft eine sofortige Unterbrechung des Spiels für erforderlich hält, wird das Spiel anschließend mit Ballbesitz für die nicht fehlbare Mannschaft fortgesetzt?",
		answers: [
			"Ja",
			"Nein"
		],
		correctAnswers: [0],
		ruleReferences: ["Erläuterung 7.B.b"]
	},
	{
		id: 311,
		text: "Der Trainer von A hat bereits eine Verwarnung und eine Hinausstellung erhalten. Da das Spielprotokoll nur 10 Spieler seiner Mannschaft ausweist, lässt er sich als Spieler nachtragen. Kurz nach dem Betreten der Spielfläche reklamiert er erneut gegen eine Entscheidung. Gegen Spieler von A waren bis dahin noch keine Strafen ausgesprochen worden. Richtige Entscheidung?",
		answers: [
			"Verwarnung",
			"Hinausstellung",
			"Disqualifikation"
		],
		correctAnswers: [1],
		ruleReferences: ["16:1 Kommentar", "16:3d"]
	},
	{
		id: 312,
		text: "A4 blockt einen Wurf von B11. Der Ball berührt die Decke über dem Torraum. Einen Augenblick später legt der Trainer von Mannschaft B die grüne Karte auf den Tisch vor den Zeitnehmer. Richtige Entscheidung?",
		answers: [
			"Mannschaft B erhält unverzüglich ein Team-Time-out",
			"Mannschaft B erhält kein Team-Time-out, da der Ball die Decke über dem Torraum berührte",
			"Mannschaft B erhält kein Team-Time-out, da Mannschaft A den Ball wieder ins Spiel bringen darf",
			"Mannschaft B erhält ein Team-Time-out, sobald der Ball wieder ins Spiel gebracht ist"
		],
		correctAnswers: [0],
		ruleReferences: ["2:8", "Erläuterung 3", "2:10"]
	},
	{
		id: 313,
		text: "Mannschaft A ist in Ballbesitz und beantragt Team-Time-out. Aufgrund großen Lärms hören die Schiedsrichter den Pfiff des Zeitnehmers nicht. Erst nach 10 Sekunden – Mannschaft B ist bereits in Ballbesitz – hören sie den Pfiff. Richtige Entscheidung?",
		answers: [
			"Das Team-Time-out wird gegeben",
			"Spielfortsetzung: Freiwurf für B",
			"Das Team-Time-out wird nicht gewährt",
			"Spielfortsetzung: Freiwurf für A"
		],
		correctAnswers: [0, 3],
		ruleReferences: ["2:8", "Erläuterung 3", "2:9 Kommentar"]
	},
	{
		id: 314,
		text: "Der Mannschaftsverantwortliche A hat bereits auf der Auswechselbank eine Verwarnung erhalten. Er verlässt den Auswechselbereich, setzt sich auf die Tribüne und protestiert von dort aus weiter gegen Schiedsrichterentscheidungen. Richtige Entscheidung?",
		answers: [
			"Keine Entscheidung möglich",
			"Hinausstellung",
			"Disqualifikation"
		],
		correctAnswers: [1],
		ruleReferences: ["8:7a", "16:3e", "Auswechselraum-Reglement 5+6"]
	},
	{
		id: 315,
		text: "A9 wirft auf das Tor. Torwart B1 wehrt ab, der Ball rollt in Richtung Spielfeld, wo ein Spieler von A zur Annahme bereit ist. Da sich der Torwart bei der Abwehraktion verletzt hat, unterbricht der Schiedsrichter das Spiel, als der Ball noch im Torraum Richtung Spielfeld rollt. Richtige Entscheidung?",
		answers: [
			"Freiwurf für A",
			"Abwurf für B",
			"Freiwurf für B"
		],
		correctAnswers: [1],
		ruleReferences: ["6:5"]
	},
	{
		id: 316,
		text: "Spieler B4 steht korrekt zur Ausführung eines Einwurfs bereit. Da er gerade keinen anspielbaren Mitspieler sieht, prellt er den Ball einmal im Spielfeld auf. Richtige Entscheidung?",
		answers: [
			"Freiwurf für Mannschaft A ohne Anpfiff",
			"Einwurf für Mannschaft A mit Anpfiff",
			"Wiederholung des Einwurfs für Mannschaft B mit Anpfiff",
			"Freiwurf für Mannschaft B mit Anpfiff"
		],
		correctAnswers: [0],
		ruleReferences: ["15:2", "15:7"]
	},
	{
		id: 317,
		text: "Unmittelbar vor Ende der 1. Halbzeit begeht A7 eine Tätlichkeit gegen B5, dem dadurch eine klare Torgelegenheit genommen wird. Bevor der Schiedsrichter pfeifen kann, ertönt das automatische Schlusssignal. Richtige Entscheidung?",
		answers: [
			"Die 1. Halbzeit ist zu Ende, keine Ahndung mehr",
			"Disqualifikation von A7",
			"7-Meter-Wurf für B",
			"Freiwurf für B",
			"Schriftlicher Bericht"
		],
		correctAnswers: [1, 2, 4],
		ruleReferences: ["2:4", "8:6 14:1a", "16:6a"]
	},
	{
		id: 318,
		text: "Der Ball rollt im Torraum von Mannschaft A. In diesem Moment pfeift der Zeitnehmer und erklärt, dass A5 einen Wechselfehler verursacht hat. Richtige Entscheidungen?",
		answers: [
			"Abwurf",
			"Hinausstellung von A5",
			"Freiwurf für B an der Freiwurflinie",
			"Freiwurf für B am Auswechselraum von A"
		],
		correctAnswers: [1, 2],
		ruleReferences: ["4:5", "6:5 Absatz 1", "16:3a"]
	},
	{
		id: 319,
		text: "Verwarnung von B6. Beim Anpfiff zum folgenden Freiwurf für A übersieht der Feldschiedsrichter A11, der sich zwischen Freiwurf- und Torraumlinie befindet. A11 erhält den Ball und hat eine klare Torgelegenheit. Der Torschiedsrichter hat die Situation erkannt. Richtige Entscheidung?",
		answers: [
			"Weiterspielen lassen",
			"Wiederholung des Freiwurfs nach Korrektur und Anpfiff",
			"Der Torschiedsrichter entscheidet Freiwurf gegen A.",
			"Der Torschiedsrichter verwarnt A11.",
			"Time-out"
		],
		correctAnswers: [1],
		ruleReferences: ["13:7", "15:1", "15:5b"]
	},
	{
		id: 320,
		text: "Bei einem Angriff wird der Ballführende A6 an der gegnerischen Freiwurflinie durch eine grobe Regelwidrigkeit von B5 zu Fall gebracht. Hinter B5 stand noch B8 an der eigenen Torraumlinie. Richtige Entscheidung?",
		answers: [
			"Freiwurf für A",
			"Disqualifikation von B5",
			"Hinausstellung von B5",
			"7-Meter-Wurf für A"
		],
		correctAnswers: [0, 1],
		ruleReferences: ["8:5", "Erläuterung 6", "13:1b"]
	},
	{
		id: 321,
		text: "A5 verpasst ein Zuspiel. Er läuft dem Ball nach und kann ihn vor dem Überqueren der Seitenlinie stoppen. Er selbst gelangt anschließend über die Seitenlinie. Richtige Entscheidung?",
		answers: [
			"Weiterspielen lassen",
			"Freiwurf für B",
			"Einwurf für B"
		],
		correctAnswers: [0],
		ruleReferences: ["11:1"]
	},
	{
		id: 322,
		text: "Nach dem Halbzeitsignal ist noch ein Freiwurf auszuführen. Welche Spieler dürfen noch ausgewechselt werden?",
		answers: [
			"Alle Spieler beider Mannschaften",
			"Nur Abwehrspieler",
			"Nur Angriffsspieler",
			"Nur ein Spieler der werfenden Mannschaft",
			"Ein Feldspieler der abwehrenden Mannschaft mit einem Torwart, wenn die Mannschaft beim Schlusssignal ohne Torwart spielt."
		],
		correctAnswers: [3, 4],
		ruleReferences: ["2:5"]
	},
	{
		id: 323,
		text: "Was gilt für die Positionen der Spieler bei der Ausführung eines Freiwurfs nach dem Schlusssignal?",
		answers: [
			"Alle Mitspieler des Werfers müssen sich außerhalb der Freiwurflinie des Gegners befinden",
			"Alle Mitspieler des Werfers müssen sich in der eigenen Spielfeldhälfte aufhalten",
			"Die Gegner müssen mindestens 3 Meter vom Werfer entfernt bzw. an der Torraumlinie stehen",
			"Alle Mitspieler müssen mindestens 3 Meter vom Werfer entfernt stehen",
			"Alle Mitspieler dürfen beim Werfer an der Freiwurflinie des Gegners stehen"
		],
		correctAnswers: [0, 2, 3],
		ruleReferences: ["2:5", "13:8"]
	},
	{
		id: 324,
		text: "A7 passt den Ball zu A8. In diesem Moment gibt der Zeitnehmer das Signal zum Team-Time-out für Mannschaft A. Die Schiedsrichter und die Spieler hören dieses Signal nicht und A8 spielt den Ball zu Außenspieler A10. Dieser hat eine klare Torgelegenheit, wird aber von B5 regelwidrig behindert. Die Schiedsrichter entscheiden auf 7-Meter-Wurf und Hinausstellung gegen B5. Jetzt erst nehmen die Schiedsrichter wahr, dass der Zeitnehmer das Signal zum Team Time-out gegeben hatte. Richtige Entscheidung?",
		answers: [
			"7-Meter-Wurf für A",
			"Hinausstellung B5",
			"Team Time-out für A",
			"Abwurf für B",
			"Anpfiff",
			"Spielfortsetzung mit Freiwurf für A an der Position, an welcher sich A7 zum Zeitpunkt der Unterbrechung befand"
		],
		correctAnswers: [1, 2, 4, 5],
		ruleReferences: ["2:9", "2:9 Kommentar", "13:4a", "Erläuterung 3", "10. Absatz", "15:5b"]
	},
	{
		id: 325,
		text: "Mannschaft A erhält einen Freiwurf, den A9 sehr schnell (ohne Anpfiff ) im Sprung ausführt. Der Ball gelangt zu A4, der sich völlig frei vor dem Tor von B befindet. Richtige Entscheidung?",
		answers: [
			"Weiterspielen lassen b) Freiwurf gegen A c) Korrektur des Freiwurfs für A mit Anpfiff"
		],
		correctAnswers: [2],
		ruleReferences: ["15:5b", "15:7"]
	},
	{
		id: 326,
		text: "Mannschaft A erhält einen Freiwurf, den A5 sehr rasch (ohne Anpfiff) im schnellen Lauf ausführt. Der Ball soll zu A4 gelangen, wird aber sofort von B3 abgefangen, der sich nun völlig frei vor dem Tor von A befindet. Richtige Entscheidung?",
		answers: [
			"Weiterspielen lassen b) Korrektur des Freiwurfs mit Anpfiff c) Korrektur des Freiwurfs und progressive Strafe gegen B3"
		],
		correctAnswers: [0],
		ruleReferences: ["13:2", "15:7 2. Absatz"]
	},
	{
		id: 327,
		text: "Torwart A12 läuft aus seinem Torraum dem Gegenstoß laufenden Spieler B99 entgegen. A12 erreicht B99 seitlich und hält ihn fest, wobei B99 den Ball fangen kann und diesen ins leere Tor wirft. Entscheidungen?",
		answers: [
			"Anwurf",
			"Time-out",
			"Disqualifikation A12",
			"Hinausstellung A12",
			"7-Meter-Wurf B"
		],
		correctAnswers: [0, 1, 3],
		ruleReferences: ["2:8", "8:4b", "9:1", "10:2", "16:3c"]
	},
	{
		id: 328,
		text: "Torwart A16 spielt einen langen Pass zu dem Gegenstoß laufenden Mitspieler A4. A4 springt, erreicht den Ball und stößt mit dem Torwart B1 zusammen, welcher seinen Torraum verlassen hatte, um den Gegenstoß zu verhindern. Im Augenblick des Zusammenpralls steht B1 an der9m Linie. Nach dem Zusammenprall verliert A4 die Körperkotrolle und fällt zu Boden. Entscheidung?",
		answers: [
			"Stürmerfoul – Freiwurf für B",
			"Freiwurf für A",
			"7m- Wurf für A",
			"Progressive Bestrafung gegen B1",
			"Disqualifikation von B1"
		],
		correctAnswers: [2, 4],
		ruleReferences: ["8:5 Kommentar", "16:6a", "14:1a", "Erläuterung 6c"]
	},
	{
		id: 329,
		text: "Bei 29:00 in der 1.Halbzeit erhält A5 eine Hinausstellung. Nach der Halbzeitpause, 3 Sekunden nach Wiederanpfiff, pfeift der Zeitnehmer. Mannschaft A hat 7 Spieler auf der Spielfläche. Richtige Entscheidung?",
		answers: [
			"Ein Spieler von A muss die Spielfläche verlassen, keine weitere Entscheidung.",
			"Hinausstellung für einen Spieler von Mannschaft A",
			"Ein zusätzlicher Spieler von A muss die Spielfläche für 57 Sekunden verlassen (die Mannschaft ist um 2 Spieler reduziert)."
		],
		correctAnswers: [1, 2],
		ruleReferences: ["4:6"]
	},
	{
		id: 330,
		text: "Spielzeit: 43:27 – Spielunterbrechung durch den Zeitnehmer nach Torerfolg A15 und nach Anwurf. Er teilt den Schiedsrichtern mit, dass Spieler A15 nicht im Spielprotokoll aufgeführt ist. Im Spielprotokoll sind bereits 14 Spieler für Mannschaft A eingetragen. Die Schiedsrichter stellen fest, dass der Spieler A11 gar nicht anwesend ist. Entscheidung?",
		answers: [
			"Tor wird annulliert.",
			"Tor zählt.",
			"Spieler A11 wird gestrichen und A15 nachgetragen.",
			"Spieler A15 darf nicht mitspielen und muss das Spielfeld verlassen.",
			"Progressive Bestrafung gegen den Mannschaftsverantwortlichen A",
			"Schriftlicher Bericht"
		],
		correctAnswers: [1, 2, 4, 5],
		ruleReferences: ["4:3", "9:1", "9:2"]
	},
	{
		id: 331,
		text: "Welche der folgenden Vergehen sind mit Disqualifikation und schriftlichem Bericht zu bestrafen?",
		answers: [
			"Ein Spieler spuckt einen Gegner an.",
			"Ein Offizieller versucht, seine Mannschaft zu beeinflussen, das Spiel abzubrechen.",
			"Wenn ein 7-m-Werfer den Kopf des Torwarts trifft, wobei der Torwart seinen Kopf nicht Richtung Ball bewegt.",
			"Nach einer Schiedsrichterentscheidung wirft ein Spieler den Ball demonstrativ auf die Tribüne.",
			"Ein Spieler spuckt außerhalb der Spielfläche auf einen Zuschauer (und trifft ihn).",
			"Ein Spieler schlägt absichtlich einen Gegenspieler in den Magen."
		],
		correctAnswers: [0, 1, 4, 5],
		ruleReferences: ["8:9a und d. 8:10a"]
	},
	{
		id: 332,
		text: "Spieler A15 blockt einen Pass von B12, danach rollt der Ball am Boden, A15 und B12 werfen sich nach dem Ball, A15 bekommt den Ball und rutscht den Boden entlang, er steht auf, macht 3 Schritte, spielt den Ball zu einem Mitspieler, dieser erzielt ein Tor. Richtige Entscheidung?",
		answers: [
			"Tor für Mannschaft A",
			"Freiwurf für Mannschaft B"
		],
		correctAnswers: [0],
		ruleReferences: ["7:1", "7:3 Kommentar"]
	},
	{
		id: 333,
		text: "Ein Spieler liegt anscheinend verletzt auf der Spielfläche am Boden. Welche der folgenden Aussagen sind korrekt?",
		answers: [
			"Wenn der Schiedsrichter absolut überzeugt ist, dass der Spieler medizinische Hilfe auf der Spielfläche benötigt, zeigt er sofort Handzeichen 15 und 16 (Time-Out, Erlaubnis zum Betreten der Spielfläche für zwei Personen dieses Teams).",
			"Das Team kann die medizinische Hilfe auf der Spielfläche verweigern",
			"Verweigert das Team die medizinische Hilfe auf der Spielfläche, wird der Physiotherapeut progressiv bestraft.",
			"Verweigert das Team die medizinische Hilfe auf der Spielfläche, wird der Mannschaftsverantwortliche progressiv bestraft."
		],
		correctAnswers: [0, 3],
		ruleReferences: ["Erläuterung 8a"]
	},
	{
		id: 334,
		text: "Ein Spieler liegt anscheinend verletzt auf der Spielfläche am Boden. Welche der folgenden Aussagen sind korrekt?",
		answers: [
			"Wenn der Schiedsrichter nicht sicher ist, ob der Spieler medizinische Hilfe auf der Spielfläche benötigt, fragt er den Spieler, ob er medizinische Hilfe auf der Spielfläche benötige.",
			"Wenn der Schiedsrichter erkennt, dass der Spieler keine medizinische Hilfe auf der Spielfläche benötigt, fordert er den Spieler auf, aufzustehen und sich im Auswechselraum behandeln zu lassen.",
			"Wenn der Spieler die Spielfläche nach dieser Aufforderung nicht umgehend verlässt, ist er progressiv zu bestrafen.",
			"Wenn der Spieler die Spielfläche nach dieser Aufforderung nicht umgehend verlässt, ist der Mannschaftsverantwortliche progressiv zu bestrafen."
		],
		correctAnswers: [0, 1, 2],
		ruleReferences: ["Erläuterung 8a"]
	},
	{
		id: 335,
		text: "Ein Spieler wurde auf der Spielfläche mit Erlaubnis des Schiedsrichters behandelt, nachdem er sich ohne gegnerische Einwirkung verletzt hatte. Welche der folgenden Aussagen sind korrekt?",
		answers: [
			"Nach der Behandlung muss der Spieler die Spielfläche verlassen.",
			"Nach der Behandlung muss der Spieler die Spielfläche verlassen, wenn er nicht sofort weiterspielen kann.",
			"Nach der Behandlung kann der Spieler erst auf die Spielfläche zurückkehren, wenn sein Team drei Angriffe abgeschlossen hat.",
			"Nach der Behandlung kann der Spieler erst nach 2 Minuten auf die Spielfläche zurückkehren.",
			"Delegierte/Zeitnehmer/Sekretär kontrollieren, dass der Spieler nicht zu früh auf die Spielfläche zurückkehrt."
		],
		correctAnswers: [0, 2, 4],
		ruleReferences: ["4:11", "Erläuterung 8b"]
	},
	{
		id: 336,
		text: "Ein Spieler wurde auf der Spielfläche mit Erlaubnis des Schiedsrichters behandelt, nachdem er sich verletzt hatte. Welche der folgenden Aussagen sind korrekt?",
		answers: [
			"Wenn die Mannschaft, deren Spieler behandelt wurde, im Ballbesitz ist, zählt die Wiederaufnahme des Spiels als erster Angriff.",
			"Betritt der verletzte Spieler das Spielfeld zu früh, ist er wegen Wechselfehlers zu bestrafen.",
			"Der auf der Spielfläche behandelte Spieler muss diese nicht verlassen, wenn die Behandlung die Folge eines Fouls ist, für das ein Gegenspieler progressiv bestraft wurde.",
			"Der auf der Spielfläche behandelte Spieler muss diese nicht verlassen, wenn die Behandlung die Folge eines Fouls ist und die Schiedsrichter dafür einen Freiwurf oder einen 7m-Wurf gepfiffen haben."
		],
		correctAnswers: [0, 1, 2],
		ruleReferences: ["4:11", "Erläuterung 8b", "c"]
	},
	{
		id: 337,
		text: "Ein Spieler wurde auf der Spielfläche mit Erlaubnis des Schiedsrichters behandelt, nachdem er sich verletzt hatte. Welche der folgenden Aussagen sind korrekt?",
		answers: [
			"Der auf der Spielfläche behandelte Torwart muss diese nicht verlassen.",
			"Der auf der Spielfläche behandelte Torwart muss diese nicht verlassen, wenn die Behandlung erfolgte, weil er von einem Ball am Kopf getroffen wurde.",
			"Der auf der Spielfläche behandelte Feldspieler muss diese nicht verlassen, wenn die Behandlung erfolgte, weil er von einem Ball am Kopf getroffen wurde.",
			"Der auf der Spielfläche behandelte Abwehrspieler muss diese nicht verlassen, wenn die Behandlung erfolgte, nachdem die Schiedsrichter auf Stürmerfoul entschieden hatten."
		],
		correctAnswers: [1],
		ruleReferences: ["Erläuterung 8c"]
	},
	{
		id: 338,
		text: "Ein Spieler wurde auf der Spielfläche mit Erlaubnis des Schiedsrichters behandelt, nachdem er sich verletzt hatte. Welche der folgenden Aussagen sind korrekt?",
		answers: [
			"Wenn der Spieler am Ende der ersten Halbzeit zwei Angriffe ausgesetzt hat, darf er zu Beginn der zweiten Hälfte wieder eingesetzt werden.",
			"Wenn der Spieler am Ende der ersten Halbzeit zwei Angriffe ausgesetzt hat, darf er zu Beginn der zweiten Hälfte wieder eingesetzt werden – aber nur, wenn seine Mannschaft Anspiel hat.",
			"Die „Auszeit“ des gepflegten Spielers wird am Tisch mit einer weißen Karte mit Spielernummer angezeigt. Diese wird nach drei Angriffen entfernt.",
			"Erhält der Spieler zusammen mit seiner Behandlung eine 2-Minuten-Strafe, kann er nach Ablauf dieser Zeit unabhängig von der Anzahl gespielter Angriffe wieder eingesetzt werden."
		],
		correctAnswers: [0, 2, 3],
		ruleReferences: ["4:11", "Erläuterung 8a", "b"]
	},
	{
		id: 339,
		text: "Nach dem Anzeigen des Vorwarnzeichens für passives Spiel",
		answers: [
			"entscheiden die Schiedsrichter nach höchstens 6 Pässen auf passives Spiel.",
			"entscheiden die Schiedsrichter nach 5 - 8 Pässen auf passives Spiel.",
			"ist es jederzeit möglich, auf passives Spiel zu entscheiden, wenn die Schiedsrichter keinen Versuch erkennen, zu einem Torwurf zu gelangen.",
			"zählen Delegierte/Zeitnehmer/Sekretär die Anzahl Pässe.",
			"zählen die Schiedsrichter die Anzahl Pässe."
		],
		correctAnswers: [0, 2, 4],
		ruleReferences: ["7:12"]
	},
	{
		id: 340,
		text: "Nach dem Anzeigen des Vorwarnzeichens für passives Spiel sind folgende Aussagen korrekt:",
		answers: [
			"Erhält das gegnerische Team eine progressive Strafe, wird das Vorwarnzeichen aufgehoben.",
			"Wird dem angreifenden Team ein Freiwurf zugesprochen, beginnt das Zählen der Pässe bei Null.",
			"Wird ein Wurfversuch durch die abwehrende Mannschaft geblockt und der Ball gelangt zum angreifenden Team zurück, wird das Vorwarnzeichen aufgehoben.",
			"Wird ein Wurfversuch durch die abwehrende Mannschaft geblockt und der Ball gelangt zum angreifenden Team zurück, beginnt das Zählen der Pässe bei Null.",
			"Gelangt der Ball nach einem Wurfversuch vom Tor oder vom Torwart zur angreifenden Mannschaft zurück, wird das Vorwarnzeichen aufgehoben."
		],
		correctAnswers: [0, 4],
		ruleReferences: ["Erläuterung 4C", "4D3a"]
	},
	{
		id: 341,
		text: "Für das Zählen der Pässe sind folgende Aussagen korrekt:",
		answers: [
			"Begeht die abwehrende Mannschaft beim Wurfversuch nach dem 6. Pass des Gegners ein Foul, muss dieser den Freiwurf direkt ausführen.",
			"Begeht die abwehrende Mannschaft beim Wurfversuch nach dem 6. Pass des Gegners ein Foul, wird diesem ein zusätzlicher Pass zugesprochen.",
			"Unterbindet die abwehrende Mannschaft durch ständige Regelwidrigkeiten das Passspiel, ist sie sofort wegen unsportlichem Verhalten zu bestrafen.",
			"Unterbindet die abwehrende Mannschaft durch progressive Regelwidrigkeiten das Passspiel, ist sie konsequent progressiv zu bestrafen.",
			"Falsches Zählen der Pässe ist ein Tatsachenentscheid."
		],
		correctAnswers: [1, 3, 4],
		ruleReferences: ["7:12", "Erläuterung 4D2", "4D3b"]
	},
	{
		id: 342,
		text: "Nach dem Zeigen des Vorwarnzeichens sind folgende Aussagen korrekt:",
		answers: [
			"Wird das versuchte Zuspiel durch ein Foul verhindert, zählt diese Aktion nicht als Pass.",
			"Wird das versuchte Zuspiel durch einen Abwehrspieler ins Seiten- oder Toraus gelenkt, zählt diese Aktion nicht als Pass.",
			"Wird der Wurfversuch nach dem 6. Pass durch einen Abwehrspieler geblockt und gelangt zur angreifenden Mannschaft zurück, muss die Mannschaft nach Ballkontrolle direkt aufs Tor werfen.",
			"Wird der Wurfversuch nach dem 6. Pass durch einen Abwehrspieler geblockt und gelangt zur angreifenden Mannschaft zurück, darf die Mannschaft noch einen Pass spielen."
		],
		correctAnswers: [0, 1, 3],
		ruleReferences: ["Erläuterung 4D", "4D3b"]
	},
	{
		id: 343,
		text: "Eine Blaue Karte zeigen die Schiedsrichter für:",
		answers: [
			"Ein Foul nach Regel 8:5",
			"Ein Foul nach Regel 8:5 in den letzten 30 Sekunden",
			"Ein Foul nach Regel 8:6",
			"Grob unsportliches Verhalten nach Regel 8:9",
			"Besonders grob unsportliches Verhalten nach Regel 8:10"
		],
		correctAnswers: [2, 4],
		ruleReferences: ["8:6", "8:10", "16:8"]
	},
	{
		id: 344,
		text: "In der Schlussphase eines Spiels gibt es besondere Vorschriften bei Vergehen der abwehrenden Mannschaft. Welche der folgenden Aussagen sind korrekt?",
		answers: [
			"Die besonderen Vorschriften gelten für die letzten 30 Sekunden.",
			"Die „letzten 30 Sekunden“ gibt es sowohl in der regulären Spielzeit (Ende der 2. Halbzeit) als auch in den zweiten Halbzeiten von Verlängerungen.",
			"Wird ein Abwehrspieler für ein Vergehen nach Regel 8:5 disqualifiziert, hat dies in den letzten 30 Sekunden einen schriftlichen Bericht zur Folge.",
			"Wird ein Abwehrspieler für ein Vergehen nach Regel 8:5 disqualifiziert, hat dies in den letzten 30 Sekunden einen 7m-Wurf für die gegnerische Mannschaft zur Folge.",
			"Wird ein Abwehrspieler für ein Vergehen nach Regel 8:6 disqualifiziert, hat dies in den letzten 30 Sekunden einen 7m-Wurf für die gegnerische Mannschaft und einen schriftlichen Bericht zur Folge."
		],
		correctAnswers: [0, 1, 3, 4],
		ruleReferences: ["8:6", "8:6 Kommentar", "8:10d", "Guidelines"]
	},
	{
		id: 345,
		text: "In der Schlussphase eines Spiels gibt es besondere Vorschriften bei Vergehen. Welche der folgenden Aussagen sind korrekt?",
		answers: [
			"Wird ein Angreifer für ein Vergehen nach Regel 8:5 disqualifiziert, hat dies in den letzten 30 Sekunden einen 7m-Wurf für die gegnerische Mannschaft zur Folge.",
			"Wird ein Angreifer für ein Vergehen nach Regel 8:5 disqualifiziert, hat dies in den letzten 30 Sekunden einen schriftlichen Bericht zur Folge.",
			"Wird ein Angreifer für ein Vergehen nach Regel 8:6 disqualifiziert, hat dies in den letzten 30 Sekunden einen 7m-Wurf für die gegnerische Mannschaft zur Folge.",
			"Wird ein Angreifer für ein Vergehen nach Regel 8:6 disqualifiziert, hat dies in den letzten 30 Sekunden einen schriftlichen Bericht zur Folge.",
			"Wird ein Angreifer für ein Vergehen nach Regel 8:6 disqualifiziert, hat dies in den letzten 30 Sekunden einen 7m-Wurf für die gegnerische Mannschaft und einen schriftlichen Bericht zur Folge."
		],
		correctAnswers: [3],
		ruleReferences: ["8:6", "8:10d"]
	},
	{
		id: 346,
		text: "In der Schlussphase eines Spiels gibt es besondere Vorschriften bei Vergehen. Welche der folgenden Aussagen sind korrekt?",
		answers: [
			"Die letzten 30 Sekunden beginnen, wenn die Uhr 59:30 zeigt.",
			"Die letzten 30 Sekunden beginnen, wenn die Uhr 59:31 zeigt.",
			"Die besonderen Vorschriften sind auch anwendbar, wenn das Vergehen durch einen Offiziellen erfolgt.",
			"Die besonderen Vorschriften sind auch anwendbar, wenn ein Spieler der abwehrenden Mannschaft in den letzten 30 Sekunden ein „2-Minuten-Foul“ begeht.",
			"Die besonderen Vorschriften gelten nur, wenn das Vergehen in den letzten 30 Sekunden erfolgte."
		],
		correctAnswers: [0, 2, 4],
		ruleReferences: ["8:10c", "8:10d", "Guidelines"]
	},
	{
		id: 347,
		text: "Spielzeit 59:48. A7 reißt B5 in besonders gefährlicher Art am Wurfarm nach hinten. B5 verliert die Körperkontrolle und fällt auf den Rücken. Zwei Abwehrspieler stehen zwischen B5 und dem Tor. Korrekte Entscheidung?",
		answers: [
			"Disqualifikation gegen A7 (Rote Karte, ohne Blaue Karte).",
			"Disqualifikation gegen A7 (Rote Karte, mit Blauer Karte).",
			"Freiwurf Team B.",
			"7m-Wurf Team B.",
			"Time-Out"
		],
		correctAnswers: [1, 3, 4],
		ruleReferences: ["2.8", "8:6", "8:10d", "16:8"]
	},
	{
		id: 348,
		text: "Spielzeit 59:35. B4 stößt A6 im Gegenstoß von hinten. Bevor A6 die Körperkontrolle verliert, ist er in der Lage, den Ball zu spielen. Korrekte Entscheidung in den folgenden Situationen:",
		answers: [
			"A6 wirft ein Tor: Tor, kein 7m-Wurf, Rote Karte gegen B4.",
			"A6 wirft ein Tor: Tor, zusätzlich 7m-Wurf, Rote Karte gegen B4.",
			"A6 passt den Ball zu einem Mitspieler, dieser erzielt ein Tor: Tor, zusätzlich 7m-Wurf, Rote Karte gegen B4.",
			"A6 passt den Ball zu einem Mitspieler, dieser erzielt ein Tor: Tor, kein 7m-Wurf, Rote Karte gegen B4.",
			"A6 passt den Ball zu einem Mitspieler, dieser verfehlt das Tor: 7m-Wurf, Rote Karte gegen B4.",
			"A6 passt den Ball zu einem Mitspieler, dieser verfehlt das Tor: Abwurf, Rote Karte gegen B4."
		],
		correctAnswers: [0, 3, 4],
		ruleReferences: ["8:10d", "Guidelines"]
	},
	{
		id: 349,
		text: "Spielzeit 59:40. B4 stößt A6 im Gegenstoß von hinten. Bevor A6 die Körperkontrolle verliert, ist er in der Lage, den Ball A7 zuzuspielen. Welche Aussagen zur Anwendung der Vorteilsbestimmung treffen zu:",
		answers: [
			"Die Vorteilsbestimmungen werden nicht angewendet.",
			"Der Schiedsrichter entscheidet nur dann auf Vorteil, wenn A7 eine klare Torgelegenheit besitzt.",
			"Der Schiedsrichter entscheidet in jedem Fall auf Vorteil.",
			"Der Schiedsrichter entscheidet auch auf Vorteil, wenn der Ball von A7 zu A8 weiter gespielt wird."
		],
		correctAnswers: [1],
		ruleReferences: ["8:10d", "Guidelines"]
	},
	{
		id: 350,
		text: "Für welche Vergehen wird in den letzten 30 Sekunden ein 7m-Wurf angeordnet?",
		answers: [
			"Der Abwehrspieler verhindert regelwidrig, dass der Gegner den Ball zum Anwurfpunkt spielen kann.",
			"Ein Spieler legt nach einem geahndeten Stürmerfoul den Ball nicht sofort nieder.",
			"Der Delegierte pfeift wegen eines Wechselfehlers der abwehrenden Mannschaft, was zur Folge hat, dass der Abwurf nicht sofort ausgeführt werden kann.",
			"Der Delegierte pfeift, weil ein Offizieller der abwehrenden Mannschaft, einen Ball auf die Spielfläche rollt, was zur Folge hat, dass der Einwurf nicht sofort ausgeführt werden kann.",
			"Die SR haben Time-Out gegeben. Vor dem Wiederanpfiff hält ein Abwehrspieler den Abstand nicht ein."
		],
		correctAnswers: [0, 1, 2, 3],
		ruleReferences: ["8:10c", "Guidelines"]
	},
	{
		id: 351,
		text: "Team B spielt mit 7 Feldspielern und ohne Torwart. Welche der folgenden Aussagen sind korrekt?",
		answers: [
			"Keiner der Feldspieler kann die Funktion des Torwarts übernehmen.",
			"Einer der sieben Spieler muss einen Überzieher in der Farbe des Torwarttrikots tragen.",
			"Der Zeitnehmer/Sekretär pfeift und zeigt einen Wechselfehler des Teams B an.",
			"Jeder der sieben Feldspieler kann gegen einen Torwart ausgetauscht werden.",
			"Nur der zuletzt eingetretene Feldspieler kann gegen einen Torwart ausgewechselt werden."
		],
		correctAnswers: [0, 3],
		ruleReferences: ["4:1", "6:1"]
	},
	{
		id: 352,
		text: "Team B spielt mit 7 Feldspielern und ohne Torwart. B7 verliert den Ball und A5 wirft auf das leere Tor. B6 betritt den Torraum und verhindert ein Tor. Welche der folgenden Aussagen sind korrekt?",
		answers: [
			"Der Wurf auf das leere Tor ist eine klare Torchance.",
			"7m-Wurf für Team A.",
			"B6 wird progressiv bestraft.",
			"B6 erhält eine direkte Hinausstellung.",
			"Im Wiederholungsfall wird der betreffende Spieler progressiv bestraft."
		],
		correctAnswers: [0, 1, 2],
		ruleReferences: ["6:2c", "Erläuterung 6", "Guidelines"]
	},
	{
		id: 353,
		text: "Team B spielt mit 7 Feldspielern und ohne Torwart. Team A verfehlt mit einem Wurf das leere Tor. Welche der folgenden Aussagen sind korrekt?",
		answers: [
			"Der Abwurf kann durch einen der 7 Feldspieler ausgeführt werden.",
			"Wenn einer der 7 Feldspieler den Torraum betritt und den Abwurf ausführt, wird er progressiv bestraft.",
			"Wenn einer der 7 Feldspieler versucht, den Abwurf auszuführen, gibt der Schiedsrichter wenn nötig Time-Out.",
			"Wenn einer der 7 Feldspieler versucht, den Abwurf auszuführen, gibt der Schiedsrichter zwingend Time-Out.",
			"Einer der 7 Feldspieler muss sich gegen einen Torwart auswechseln lassen."
		],
		correctAnswers: [2, 4],
		ruleReferences: ["12:2", "Erläuterung 2e", "Guidelines"]
	},
	{
		id: 354,
		text: "Team B spielt mit 7 Feldspielern und ohne Torwart, als das Schlusssignal ertönt. Nach dem Schlusssignal ist noch ein Freiwurf für Team A auszuführen.Welche der folgenden Aussagen sind korrekt?",
		answers: [
			"Team A darf einen Spielerwechsel vornehmen.",
			"Team B darf keinen Spielerwechsel vornehmen.",
			"Team B darf einen beliebigen Spielerwechsel vornehmen.",
			"Team B darf einen Feldspieler gegen einen Torwart auswechseln.",
			"Der Wechsel eines Feldspielers von B mit einem Torwart ist als Wechselfehler zu bestrafen."
		],
		correctAnswers: [0, 3],
		ruleReferences: ["2:5"]
	},
	{
		id: 355,
		text: "Welche der folgenden Regelauslegungen zu Ausrüstungsgegenständen sind korrekt:",
		answers: [
			"Ein Helm zum Schutz des Kopfes ist erlaubt, wenn er aus weichem, ungefährlichem Material besteht.",
			"Ein Helm zum Schutz des Kopfes ist für den Torwart erlaubt, wenn er aus weichem, ungefährlichem Material besteht.",
			"Ein Helm zum Schutz des Kopfes ist mit ärztlichem Attest erlaubt, wenn er aus weichem, ungefährlichem Material besteht.",
			"Eine Maske zum Schutz des Gesichts ist erlaubt, wenn sie aus weichem, ungefährlichem Material besteht.",
			"Eine Maske zum Schutz des Gesichts ist erlaubt, wenn sie nur einen Teil des Gesichts abdeckt und aus weichem, ungefährlichem Material besteht.",
			"Das Tapen des Nasenbeins ist erlaubt, sofern davon keine Gefährdung ausgeht."
		],
		correctAnswers: [5],
		ruleReferences: ["4:9", "Guidelines", "Guidelines Anhang 2"]
	},
	{
		id: 356,
		text: "Welche der folgenden Regelauslegungen zu Ausrüstungsgegenständen sind korrekt:",
		answers: [
			"Harte Teile von Fußgelenk-Protektoren müssen abgedeckt werden.",
			"Es sind nur Knie- oder Fußgelenk-Protektoren aus weichem Material erlaubt.",
			"Harte Teile von Ellenbogen-Schonern müssen vollständig abgedeckt werden.",
			"Es sind nur Ellenbogenschoner aus weichem Material erlaubt.",
			"Ein Stirnband aus weichem, elastischem Material ist erlaubt.",
			"Handschuhe sind verboten."
		],
		correctAnswers: [0, 3, 4, 5],
		ruleReferences: ["4:9", "Guidelines", "Guidelines Anhang 2"]
	},
	{
		id: 357,
		text: "Welche der folgenden Regelauslegungen zu Ausrüstungsgegenständen sind korrekt:",
		answers: [
			"Ausrüstungsgegenstände, mit denen man sich einen ungerechtfertigten Vorteil verschafft (z.B. Fingerbänder „Spiderman“) sind verboten.",
			"Der Mannschaftsverantwortliche ist auch für die ordnungsgemäße Ausrüstung aller Spieler verantwortlich.",
			"Der Mannschaftsverantwortliche kann in Zweifelsfällen die Ausrüstung vor Spielbeginn durch die Schiedsrichter prüfen lassen.",
			"Stellen die Schiedsrichter nach Spielbeginn unerlaubte Ausrüstungsgegenstände fest, wird der Mannschaftsverantwortliche progressiv bestraft.",
			"Stellen die Schiedsrichter nach Spielbeginn unerlaubte Ausrüstungsgegenstände fest, wird der betreffende Spieler progressiv bestraft."
		],
		correctAnswers: [0, 1, 2, 3],
		ruleReferences: ["4:9", "Guidelines", "Guidelines Anhang 2"]
	},
	{
		id: 358,
		text: "Kurz vor Schluss der zweiten Verlängerung musste A3 auf der Spielfläche gepflegt werden. Das Spiel endet unentschieden. Darf A3 am 7m-Werfen teilnehmen?",
		answers: [
			"Nur, wenn seine Mannschaft vor Ende der Verlängerung drei Angriffe abgeschlossen hat.",
			"Nein, in keinem Fall.",
			"Ja, sofern am Ende der Verlängerung keine Strafe gegen ihn läuft. Die Anzahl abgeschlossener Angriffe ist unerheblich."
		],
		correctAnswers: [2],
		ruleReferences: ["4:11", "Erläuterung 8"]
	},
	{
		id: 359,
		text: "Spielzeit 59:50. Mannschaft A möchte ein schnelles Anspiel ausführen. A6 will den Ball nach dem Anpfiff des Schiedsrichters ungehindert zu A7 werfen. Sein Pass wird aber von B5 abgefangen, der den Abstand zu A6 nach dem Anpfiff des Schiedsrichters auf 2m verkürzt hat. Entscheidung?",
		answers: [
			"7m für Mannschaft A",
			"Freiwurf für Mannschaft A",
			"Disqualifikation von B5",
			"Progressive Bestrafung von B5"
		],
		correctAnswers: [1, 3],
		ruleReferences: ["15:2", "8:7c"]
	},
	{
		id: 360,
		text: "Der Torwart wird wieder für den 7. Feldspieler eingewechselt. Wann gilt das Tor nicht (mehr) als „leer“?",
		answers: [
			"Wenn der Feldspieler die Spielfläche verlassen hat.",
			"Wenn der Torwart die Spielfläche wieder betreten hat.",
			"Wenn der Torwart seinen Torraum wieder betreten hat.",
			"Wenn der Torwart wieder „zwischen den Pfosten“ steht."
		],
		correctAnswers: [2],
		ruleReferences: ["5:3 Abs. 2"]
	},
	{
		id: 361,
		text: "Welche Aussagen zu Knieprotektoren sind korrekt?",
		answers: [
			"Knieprotektoren mit Teilen aus Metall sind verboten.",
			"Knieprotektoren mit Teilen aus Kunststoff sind verboten.",
			"Harte Teile aus Kunststoff müssen vollständig gepolstert sein."
		],
		correctAnswers: [0, 2],
		ruleReferences: ["4:9", "Guidelines", "Guidelines Anhang 2"]
	},
	{
		id: 362,
		text: "In welchen Fällen gilt ein Angriff als abgeschlossen?",
		answers: [
			"Nach einem Torerfolg.",
			"Wenn der gegnerische Torwart den Ball unter Kontrolle hat.",
			"Wenn der Ball die verlängerte Torlinie überquert hat und durch Abwurf wieder ins Spiel gebracht werden muss.",
			"Wenn der Ball im Torraum auf dem Boden liegt.",
			"Wenn ein Abwehrspieler Ballkontrolle erlangt.",
			"Wenn das Spiel unterbrochen ist, ohne dass eine Mannschaft Ballbesitz hat."
		],
		correctAnswers: [0, 1, 2, 3, 4],
		ruleReferences: ["6:4", "6:5", "10:2", "12:1"]
	}
];