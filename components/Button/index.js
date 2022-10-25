import styles from './button.module.css';

export default function Button({ label, onClick, type = 'button' }) {
  return (
    <button className={styles.button} onClick={onClick} type={type}>
      {label}
    </button>
  );
}
