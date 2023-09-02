Ten folder zawiera prosty serwer, dzięki któremu będziemy mogli odczytać listę tłumaczeń, dodać nowe tłumaczenie lub usunąć istniejące tłuamczenie.

Żeby uruchomić server wywołaj w terminalu `npm i` a następnie `npm run dev` na poziomie folderu `back-end`. Możesz również wywołać te same komendy folder wyżej - wtedy uruchomisz jednocześnie server i projekt frontendowy.

| Ścieżka             | Metoda   | Jak działa?                                                                                                                   |
| ------------------- | -------- | ----------------------------------------------------------------------------------------------------------------------------- |
| /words              | `GET`    | Pobiera wszystkie elementy                                                                                                    |
| /words?category=XYZ | `GET`    | Pobiera elementy o kategorii `XYZ`                                                                                            |
| /words              | `POST`   | Dodaje element. Wymagania przesłania body z danymi nowego elementu, np: `{word: 'kot', translation: 'cat', category: 'noun'}` |
| /words/ID           | `DELETE` | Kasuje element o danym `ID`                                                                                                   |
