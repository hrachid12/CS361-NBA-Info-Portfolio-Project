import styles from './Home.module.css';

const Home = () => {
    return (
        <div>
            <h1>Home page</h1>
            <div className={styles.team_div}>
                <p>Placeholder for all 30 NBA teams</p>
            </div>
        </div>
    );
}

export default Home;