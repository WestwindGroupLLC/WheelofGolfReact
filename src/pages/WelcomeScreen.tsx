import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import React, { useState, useEffect} from 'react';

const WelcomeScreen: React.FC = () => {
  const [showWelcome, setShowWelcome] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowWelcome(false);
    }, 5000);
    return () => {
      clearTimeout(timer);
    };
  }, []);

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
  };
  export default WelcomeScreen;
  