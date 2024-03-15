import WelcomeScreen from '../../pages/welcome-screen/welcome-screen.tsx';

type WelcomeScreenProps = {
  messageCount: number;
  placesCount: number;
  cardsCount: number;
}

function App({messageCount, placesCount, cardsCount}: WelcomeScreenProps): JSX.Element {
  return (
    <WelcomeScreen messageCount={messageCount} placesCount={placesCount} cardsCount={cardsCount} />
  );
}

export default App;
