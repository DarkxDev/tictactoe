import PropTypes from 'prop-types';

const Square = ({ value, onClick }) => {
  const style = {
    backgroundColor: 'transparent',
    border: '0.1rem solid white',
    cursor: 'pointer',
    borderRadius: '0.2rem',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  };

  return (
    <button type="button" onClick={onClick} style={style}>
      {value}
    </button>
  );
};

Square.propTypes = {
  value: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default Square;
