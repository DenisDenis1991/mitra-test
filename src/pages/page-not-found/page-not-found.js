import { Link } from 'react-router-dom';
import { AppRoute } from '../../const';

const ErrorPage = () => {

  return (
    <main>
      <section>
        <h1>Страница не найена «404 Not Found»</h1>
        <Link
          to={AppRoute.Main}
        >Вернутся на главную страницу
        </Link>
      </section>
    </main>
  );
};


export default ErrorPage;
