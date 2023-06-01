import React from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';

function WelcomeScreen() {
    return (
      <IonPage>
        <IonHeader>
          <IonToolbar>
            <IonTitle>Welcome to The Wheel of Golf!</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonContent>
          <p>Put a brief introduction or any other relevant information here.</p>
        </IonContent>
      </IonPage>
    );
  }
  