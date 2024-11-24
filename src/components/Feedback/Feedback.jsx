import styles from './Feedback.module.css';

const Feedback = ({ good, neutral, bad, total, positive }) => (
  <div className={styles.feedback}>
    <p>Good: {good}</p>
    <p>Neutral: {neutral}</p>
    <p>Bad: {bad}</p>
    <p>Total: {total}</p>
    <p>Positive: {positive}%</p>
  </div>
);

export default Feedback;
