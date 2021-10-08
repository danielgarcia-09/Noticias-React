import useSelect from "../Hooks/useSelect";
import styles from "./Form.module.css";
import PropTypes from 'prop-types';

const Form = ({updateCategory}) => {

  const OPTIONS = [
    { value: 'general', label: 'General' },
    { value: 'business', label: 'Negocios' },
    { value: 'entertainment', label: 'Entretenimiento' },
    { value: 'health', label: 'Salud' },
    { value: 'science', label: 'Ciencia' },
    { value: 'sports', label: 'Deportes' },
    { value: 'technology', label: 'Tecnologia' },
  ];

  //* Using custom hook
  const [category, SelectNews] = useSelect("general", OPTIONS);

  //* When submit, passing category to app.js
  const searchNews = e => {
      e.preventDefault();

      updateCategory(category);
  }

  return (
    <div className={`${styles.buscador} row`}>
      <div className="col s12 m8  offset-m2">
        <form
            onSubmit={searchNews}
        >
          <h2 className={styles.heading}>Encuentra noticias por categoria</h2>

          <SelectNews />

          <div className="input-field col s12">
            <input
              type="submit"
              className={`${styles["btn-block"]}  btn-large amber darken-2`}
              value="Buscar"
            />
          </div>
        </form>
      </div>
    </div>
  );
};

Form.propTypes = {
  updateCategory: PropTypes.func.isRequired,
}
export default Form;
