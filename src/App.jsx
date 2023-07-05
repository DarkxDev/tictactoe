import Game from './components/Game';

const App = () => {
  const style = {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    height: "90vh"
  };
  return (
    <div style={style}>
      <Game />
    </div>
  );
};

export default App;
