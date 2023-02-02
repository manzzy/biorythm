import { IonCard, IonCardContent, IonCardHeader, IonCardTitle } from "@ionic/react";
import dayjs from "dayjs";
import { calculateBioRythms } from "../lib/biorythm";
import BioChart from "./BioChart";

function formatTargetDate(date) {
    const day = dayjs(date);
    return day.format('D MMMM YYYY')
}
function ResultsCard({birthdate,targetDate}) {

    const res = calculateBioRythms(birthdate, targetDate);
    return(
        <IonCard className="ion-text-center">
            <IonCardHeader>
                <IonCardTitle>{formatTargetDate(targetDate)}</IonCardTitle>
                
            </IonCardHeader>

            <IonCardContent>
                <div>
                  <BioChart birthdate={birthdate} targetdate={targetDate} />  
                </div>
                
                <p className="p">Physical: {res.physical}</p>
                <p className="e">Emotional: {res.emotional}</p>
                <p className="i">Intellectual: {res.intellectual}</p>
            </IonCardContent>
        </IonCard>
    )
}

export default ResultsCard;