export default function Box({ styles, option, onChange }) {
  return (
    <div className={styles.option}>
      <input
        className={styles.checkbox}
        type="checkbox"
        id={option.text}
        name={option.text}
        onChange={(e) => onChange(e, option.price)}
      />
      <label htmlFor={option.text}>{option.text}</label>
    </div>
  );
}
