import styles from "./Banner.module.css";
import circuloColorido from "../../assets/circulo_colorido.png";

export default function Banner() {
  return (
    <div className={styles.banner}>
      <div className={styles.apresentacao}>
        <h1 className={styles.titu}>Olá, Mundo!</h1>

        <p className={styles.paragrafo}>
          Boas vindas ao meu espaço. Eu sou Fábio, desenvolvedor full stack.
          Aqui vou compartilhar meu projetos.
        </p>
      </div>
      <div className={styles.imagens}>
        <img
          className={styles.circuloColorido}
          src={circuloColorido}
          aria-hidden={true}
        />
        <img 
          className={styles.minhaFoto}
          src="https://github.com/fabiosimplis.png" alt="Foto de Fábio" />
      </div>
    </div>
  );
}
