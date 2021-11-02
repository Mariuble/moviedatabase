# Project-3

## Kjør applikasjonen
Åpne terminalen i rotmappen. Skriv deretter npm i for å installere de avhengige pakkene. Start så applikasjonen lokalt ved å skrive npm run dev. Denne kommandoen vil kjøre serveren samtidig som frontend ved bruk av pakken, concurrently.

## Info om appen
Appen henter inn en rekke episoder og presenterer tittel, score og episodenummeret. Det er mulig å sortere episodene etter score og tittel og man kan velge å søke på tittel eller score høyere eller lik søkeresultatet. Dersom man ønsker å å få mer informasjon om episoden kan man trykke nederst og tilleggsinformasjonen vil komme opp. 

## Redux
Redux var tenkt til å brukes for å lagre Episodene/Filmene i store slik at man ikke trengte å laste inn alle hver gang man ønsket å sortere eller søke i databasen. Apollo cacher fra før, som gjorde at vi ikke hadde noe behov for å bruke redux til dette. Vi valgte fortsat å la redux store være med i prosjektet for å vise forståelsen av redux og lagring til store.

## Cypress
Vi har valgt å utføre e2e(end to end) testing ved hjelp av **Cypress**. **Cypress** gjør det veldig enkelt å teste funksjonaliteten på siden. ved å kjøre npm test vil man få opp et vindu der man kan trykke på testfilen for å kjøre testene. Man kan enkelt lage tester på funksjonalitet ved å trykke på add new test. Deretter er det bare å trykke seg rundt for så å sjekke at riktig informasjon er på riktig sted. koden som trengs for å utføre testene vil deretter bli skrevet så å si av seg selv. **Cypress** har også mange plugins som man kan bruke, som gjør det lett å lage tester.

## Nyttige kilder

### Redux 
- https://www.youtube.com/watch?v=poQXNp9ItL4&ab_channel=ProgrammingwithMosh

### MongoDB
- https://medium.com/swlh/how-to-create-your-first-mern-mongodb-express-js-react-js-and-node-js-stack-7e8b20463e66
