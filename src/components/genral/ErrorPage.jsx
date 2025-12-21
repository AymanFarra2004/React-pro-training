import '../../styles/genral/loading-error.css';

const Error = ({ message }) => {
  return (
    <div className="status-container error-style">
      <div className="error-icon">⚠️</div>
      <p>Something went wrong!</p>
      {message && <small>{message}</small>}
      <button onClick={() => window.location.reload()}>Try Again</button>
    </div>
  );
};

export default Error;
