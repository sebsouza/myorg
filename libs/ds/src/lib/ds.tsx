import styles from './ds.module.css';

/* eslint-disable-next-line */
export interface DsProps {}

export function Ds(props: DsProps) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to Ds!</h1>
    </div>
  );
}

export default Ds;
