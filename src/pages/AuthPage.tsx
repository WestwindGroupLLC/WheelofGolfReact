import React from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonInput, IonButton } from '@ionic/react';

const AuthPage: React.FC = () => {
    return (
      <IonPage>
        <IonHeader>
          <IonToolbar>
            <IonTitle>Login/Register</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonContent>
          <form>
            <IonInput type="email" placeholder="Email Address" />
            <IonInput type="password" placeholder="Password" />
            <IonButton expand="full">Login/Register</IonButton>
          </form>
        </IonContent>
      </IonPage>
    );
  };
  export default AuthPage;
  