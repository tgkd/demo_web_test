import Button from '../Button';
import styles from './form.module.css';

export default function Form({ handleSubmit }) {
  const onSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const value = Object.fromEntries(formData.entries());
    handleSubmit(value);
  };

  return (
    <form className={styles.form} onSubmit={onSubmit}>
      <input name="email" className={styles.input} label="Email" type="email" />
      <input
        name="password"
        className={styles.input}
        label="Password"
        type="password"
      />
      <Button label="Login" type="submit" />
    </form>
  );
}
