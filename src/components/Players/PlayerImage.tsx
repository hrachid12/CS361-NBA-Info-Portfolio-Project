import styles from './PlayerImage.module.css';

const PlayerImage: React.FC<{ image: string, alt: string }> = (props) => {
    return (
        <img src={props.image} alt={props.alt} className={styles.player_img} />
    );
}

export default PlayerImage;