# Project-3

## Kjør applikasjonen
Åpne terminalen i rotmappen. Skriv deretter npm i for å installere de avhengige pakkene. Start så applikasjonen lokalt ved å skrive npm run dev. Denne kommandoen vil kjøre serveren samtidig som frontend ved bruk av pakken, concurrently.

## Info om appen
Appen henter inn en rekke episoder og presenterer tittel, score og episodenummeret. Det er mulig å sortere episodene etter score og tittel og man kan velge å søke på tittel eller score høyere eller lik søkeresultatet. Dersom man ønsker å å få mer informasjon om episoden kan man trykke nederst og tilleggsinformasjonen vil komme opp. 

## Redux
Redux brukes til å lagre alle episodene slik at man slipper å sende en forespørsel til serveren for å hente alle episodene på nytt. Ved å lagre den i en store så kan andre komponenter hente ut episodene uten å sende en forespørsel. Vår store er veldig enkel. Vi kan kun legge til episoder. Dette er fordi vi ikke ser noe behov for å kunne fjerne episodene etter vi har lagret dem. 

## Nyttige kilder

### Redux 
- https://www.youtube.com/watch?v=poQXNp9ItL4&ab_channel=ProgrammingwithMosh

### MongoDB
- https://medium.com/swlh/how-to-create-your-first-mern-mongodb-express-js-react-js-and-node-js-stack-7e8b20463e66
