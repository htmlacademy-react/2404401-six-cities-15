import { Link } from 'react-router-dom';

function ErrorScreen(): JSX.Element {
  return (
    <div className="error-container">
      <div title="404" className="error-element">404</div>
      <Link to='/'>Вернуться на главную</Link>
    </div>
  );
}

export default ErrorScreen;
