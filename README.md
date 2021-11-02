# Project-3 Search and filter in database
Applikasjonen henter inn en rekke animes og presenterer tittel, score og episodenummeret. Det er mulig å sortere episodene etter score og tittel og man kan velge å søke på tittel eller score høyere eller lik søkeresultatet. Dersom man ønsker å å få mer informasjon om episoden kan man trykke nederst og tilleggsinformasjonen vil komme opp. 

## Kjør applikasjonen lokalt
### Server
Åpne terminalen i rotmappen. Gå så inn i backend slik `cd backend`.  

Skriv deretter `npm i` for å installere de avhengige pakkene.

Kjør backend applikasjonen ved å skrive `npm start`

### Client
Åpne terminalen i rotmappen. Gå så inn i frontend slik `cd frontend`.  

Skriv deretter `npm i` for å installere de avhengige pakkene.

Kjør frontend applikasjonen ved å skrive `npm start`

## Pagination
Ved skalering av datasett, ønsker vi å kunne hente ut litt og litt data fra databasen. Dette gjør vi ved bruk av "offset based pagination" i backend, med et fast antall resultater per side, som er satt av en grense, f.eks. 10 elementer av gangen. Gitt at der finnes nok elementer, og man deretter trykker "Next page", lastes det inn 10 nye elementer med et offset på 10, altså element 11-20 som matcher søkekriteriene osv. Når brukeren trykker seg inn på en ny side, vil det skje en spørring som henter nye resultater basert på parametrene som er relevante (søkeord og sorteringsmåte). Spørringene blir sendt til databasen ved hjelp av GraphQL som er koblet opp mot MongoDB.

##Apollo Client
For å håndtere dataen i prosjektet har vi valgt å bruke **Apollo Client** grunnet dens gode cache-løsning, deklarativ data-fetching og utrolig god GraphQL implementasjon. Dette har gjort at vi ikke trengte å bruke Redux, nenvt i avsnittet om **State management**.

##MongoDB
Vi har valgt å bruke den collection-baserte teknologien MongoDB som databaseløsning. Måten den fungerer er at den lagrer data i formen av dokumenter som minner om JSON-dokumenter med dynamisk schema. Dette gjorde at vi lett kunne importere informasjonen med over 1500 film/serie-titler som var tiltenkt databasen med en lett konversjon fra JSON-format til MongoDB sin dokumentstruktur. Den har høy kapasitet på data, og gjør at spørringene på vår skala går lynraskt med metoder som **find** og **insert**, og tilbyr gode og enkle løsninger for vår "offset based pagination".

## State management
**Redux** var tenkt til å brukes for å lagre Filmene/ Animes i `store` slik at man ikke trengte å laste inn data fra databasen man allerede hadde hentet. **Apollo Client** implementerer InMemoryCache, som gjorde at vi ikke hadde noe behov for å bruke redux til dette, i tillegg er **Apollo** lett å implementere med **GraphQL**. Vi valgte fortsat å la redux oppsettet være med i prosjektet for å vise forståelsen av redux og lagring til store uten integrering til applikasjonen. Dette ligger under [AllEpisodes](https://gitlab.stud.idi.ntnu.no/it2810-h21/team-31/project-3/-/tree/master/frontend/src/components/AllEpisodes). Komponenten blir ikke brukt i appen.

## Komponenter
Vi har en rekke ulike komponenter for å hente/presentere data, blant annet en som står for rendering av "Anime" titler og informasjon om disse, i tillegg til en egen komponent for navbaren i toppen av siden, samt en for GraphQL spørringer for å koble backend med frontend. Komponenter importert fra Chakra nevnes nedenfor.

## Testing
Vi har valgt å utføre e2e(end to end) testing ved hjelp av **Cypress**. Cypress gjør det veldig enkelt å teste funksjonaliteten på siden. ved å kjøre npm test vil man få opp et vindu der man kan trykke på testfilen for å kjøre testene. Man kan enkelt lage tester på funksjonalitet ved å trykke på add new test. Deretter er det bare å trykke seg rundt for så å sjekke at riktig informasjon er på riktig sted. koden som trengs for å utføre testene vil deretter bli skrevet så å si av seg selv. Cypress har også mange plugins som man kan bruke, som gjør det lett å lage tester. Vi har valgt å ikke lage egne enhetstester da vi tester alle kompoenentene i en helhet. For at end to end testene skal fungere så krever det at alle komponentene fungerer som de skal.

## Design
For å presentere dataen på nettsiden har vi brukt UI biblioteket **Chakra UI**. Ved å bruke et eksternt UI bibliotek går implementasjon av responsivitet kjappere og bidrar til et oversiktlig og ryddig grensesnitt. Chakra UI ga også mulighet for å implementere eksisterende komponenter for applikasjonens funksjonalitet. Vi har så å si ikke brukt noe css men alt av design er lagd med **Chakra**. Chakra tilbyr persistent tema i form av lyst- og mørkt modus, dette er gjort implisitt gjennom `localstorage`.

## Accessibility
Prinsipper, kriterier, krav
Vi har gjort noen små tiltak for å gjøre at siden kan brukes av folk med nedsatt funksjonsevne. Vi har testet ved å bruke en _screen reader_. Vi har brukt aria og har blant annet satt på labler for å gjøre det enkelt for de med nedsatt syn. Når de hovrer elementer som er viktige vil en enkel label fortelle dem hva de ulike knappene gjør, og hva de ulike delene er. **Chakra** har en innebygd funksjon som for eksempel at sorteringsfilteret sier ifra hvis den er åpen eller lukket. Alle seriene og filmene vil bli lest opp og dersom man åpner den opp kan man blå seg ned til beskrivelsen og den vil bli lest opp for brukeren. 

## Nyttige kilder

### Redux 
- https://www.youtube.com/watch?v=poQXNp9ItL4&ab_channel=ProgrammingwithMosh

### MongoDB
- https://medium.com/swlh/how-to-create-your-first-mern-mongodb-express-js-react-js-and-node-js-stack-7e8b20463e66

### Pagination med GraphQL
- https://graphql.org/learn/pagination/
