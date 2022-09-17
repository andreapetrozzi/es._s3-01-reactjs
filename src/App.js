import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import MainSearch from './components/MainSearch'
import CompanySearchResults from './components/CompanySearchResults'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Favourites from './components/Favourites'


function App() {
  return (
    <BrowserRouter>

      <Routes>
        <Route path="/" element={<MainSearch />} />
        <Route path="/:companyName" element={<CompanySearchResults />} />
        <Route path="/favourites" element={<Favourites />} />
      </Routes>

    </BrowserRouter>
  )
}

export default App


// Sul terminale
  // npm i bootstrap@4.6.1
  // npm i react-bootstrap@1.6.5
  // npm i react-router-dom
  // npm i @reduxjs/toolkit
  // npm i react - redux


// TRACCIA: Jobs Search Engine
// Hai il compito di migliorare un progetto esistente, un motore di ricerca per offerte di lavoro in remoto.

// Oggi il tuo compito è dividere i reducers e migliorare la pulizia del progetto.


//   TASKS: (continua da dove sei arrivato precedentemente)
//     Riscrivi i tuoi action creator come abbiamo fatto in classe, scrivendoli in un file separato.Sostituisci ogni proprietà type scritta come semplice stringa con una costante.
//     Crea due diversi reducer: uno continuerà a memorizzare i preferiti, mentre l’altro sarà riservato ad ospitare l’array dei risultati derivante dalla ricerca.
//     Per riempire questa porzione del Redux Store, muovi l’operazione di fetch dentro un action creator “speciale” come abbiamo fatto questa mattina, in modo da dispatchare l’azione contenente i risultati solamente al termine dell’operazione asincrona.
//     Mantieni intatto il resto delle funzionalità, e se non l’hai ancora fatto, fornisci all’utente la capacità di rimuovere un’azienda dalla lista dei preferiti.