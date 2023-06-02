import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonSpinner } from '@ionic/react';
import React, { useState, useEffect } from 'react';

const WelcomeScreen: React.FC = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 4000); // Adjust the duration as needed

    return () => {
      clearTimeout(timer);
    };
  }, []);

  if (loading) {
    return (
      <IonPage>
        <IonHeader>
          <IonToolbar>
            <IonTitle>Welcome to The Wheel of Golf!</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonContent>
          <p>Put a brief introduction or any other relevant information here.</p>
          <IonSpinner color="primary" />
        </IonContent>
      </IonPage>
    );
  }

  return null; // Return null when loading is false to hide the welcome screen
};

export default WelcomeScreen;
