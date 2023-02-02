
import { IonApp, IonContent , IonHeader, IonInput, IonItem, IonLabel, IonList, IonTitle, IonToolbar } from '@ionic/react';
import { useState } from 'react';
import './App.css';
import ResultsCard from './components/ResultsCard';
import { useStoredState } from './lib/hooks';
function getToday() {
  return new Date().toISOString().slice(0, 'yyyy-mm-dd'.length)
}

function App() {

  const [birthdate, setBirthdate] = useStoredState('bd');
  const [targetDate, setTargetDate] = useState(getToday());
  return (
    <IonApp>
      <IonHeader >
        <IonToolbar color='primary'>
          <IonTitle>BioRythm</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        { Boolean(birthdate) && (
          <ResultsCard birthdate={birthdate} targetDate={targetDate}/>
        )}
        <IonList>
          <IonItem >
            <IonLabel position="floating">Birth Date</IonLabel>
            <IonInput type='date' value={birthdate} 
              onIonChange={(event) => setBirthdate(event.detail.value )} />
          </IonItem>

          <IonItem >
            <IonLabel position="floating">Target Date</IonLabel>
            <IonInput type='date' value={targetDate} 
              onIonChange={(event) => setTargetDate(event.detail.value )}  />
          </IonItem>
        </IonList>
        
        
      </IonContent>
      
    </IonApp>
  );
}

export default App;
