export default function Box({ styles, name, id }) {
  return (
    <div className={styles.option}>
      <input className={styles.checkbox} type="checkbox" id={id} name={id} />
      <label htmlFor={id}>{name}</label>
    </div>
  );
}
