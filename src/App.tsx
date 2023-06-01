import { Redirect, Route } from 'react-router-dom';
import {
  IonApp,
  IonIcon,
  IonLabel,
  IonRouterOutlet,
  IonTabBar,
  IonTabButton,
  IonTabs,
  setupIonicReact
} from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import { ellipse, square, triangle } from 'ionicons/icons';
import WelcomeScreen from './pages/WelcomeScreen';
import AuthPage from './pages/AuthPage';


/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

/* Theme variables */
import './theme/variables.css';
import WheelGamesPage from './pages/WheelGames';
import AccountPage from './pages/Account';

setupIonicReact();

const App: React.FC = () => (
  <IonApp>
    <IonReactRouter>
      <IonTabs>
      <IonRouterOutlet>
          <Route exact path="/welcome">
            <WelcomeScreen />
          </Route>
          <Route exact path="/login">
            <AuthPage />
          </Route>
          <Route exact path="/wheel-games">
            <WheelGamesPage />
          </Route>
          <Route exact path="/account">
            <AccountPage />
          </Route>
          <Redirect exact from="/" to="/welcome" />
        </IonRouterOutlet>
        <IonTabBar slot="bottom">
          <IonTabButton tab="home" href="/home">
            Home
          </IonTabButton>
          <IonTabButton tab="wheel-games" href="/wheel-games">
            Wheel Games
          </IonTabButton>
          <IonTabButton tab="account" href="/account">
            Account
          </IonTabButton>
        </IonTabBar>
      </IonTabs>
    </IonReactRouter>
  </IonApp>
);

export default App;
