# Project-3

## Kjør applikasjonen
Åpne terminalen i rotmappen. Skriv deretter npm i for å installere de avhengige pakkene. Start så applikasjonen lokalt ved å skrive npm run dev. Denne kommandoen vil kjøre serveren samtidig som frontend ved bruk av pakken, concurrently.

## Info om appen
Appen henter inn en rekke episoder og presenterer tittel, score og episodenummeret. Det er mulig å sortere episodene etter score og tittel og man kan velge å søke på tittel eller score høyere eller lik søkeresultatet. Dersom man ønsker å å få mer informasjon om episoden kan man trykke nederst og tilleggsinformasjonen vil komme opp. 

## Redux
Redux var tenkt til å brukes for å lagre Episodene/Filmene i store slik at man ikke trengte å laste inn alle hver gang man ønsket å sortere eller søke i databasen. Apollo cacher fra før, som gjorde at vi ikke hadde noe behov for å bruke redux til dette. Vi valgte fortsat å la redux store være med i prosjektet for å vise forståelsen av redux og lagring til store.

## Nyttige kilder

### Redux 
- https://www.youtube.com/watch?v=poQXNp9ItL4&ab_channel=ProgrammingwithMosh

### MongoDB
- https://medium.com/swlh/how-to-create-your-first-mern-mongodb-express-js-react-js-and-node-js-stack-7e8b20463e66
