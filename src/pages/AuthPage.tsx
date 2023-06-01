import React, { useState } from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonInput, IonButton } from '@ionic/react';

const AuthPage: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleEmailChange = (e: CustomEvent) => {
    setEmail(e.detail.value);
  };

  const handlePasswordChange = (e: CustomEvent) => {
    setPassword(e.detail.value);
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Perform registration or login logic here
    console.log('Email:', email);
    console.log('Password:', password);
  };

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Login/Register</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <form onSubmit={handleFormSubmit}>
          <IonInput type="email" placeholder="Email Address" onIonChange={handleEmailChange} />
          <IonInput type="password" placeholder="Password" onIonChange={handlePasswordChange} />
          <IonButton expand="full" type="submit">Login/Register</IonButton>
        </form>
      </IonContent>
    </IonPage>
  );
};

export default AuthPage;
