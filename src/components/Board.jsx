import Square from './Square';
import PropTypes from 'prop-types';

const Board = ({ squares, onClick }) => {
  const boardStyle = {
    display: 'grid',
    gridTemplate: 'repeat(3, 1fr) / repeat(3, 1fr)',
    width: '15rem',
    height: '15rem',
    margin: '0 auto',
  };
  return (
    <div style={boardStyle}>
      {squares.map((square, i) => (
        <Square value={square} onClick={() => onClick(i)} key={i} />
      ))}
    </div>
  );
};

Board.propTypes = {
  squares: PropTypes.array.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default Board;
