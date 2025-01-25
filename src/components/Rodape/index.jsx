import styles from "./Rodape.module.css";
import marcaRegistrada from "assets/marca_registrada.svg";

export default function Rodape() {
  return (
    <footer className={styles.rodape}>
      <img src={marcaRegistrada} alt="Imagem de marca registrada" />
      Desenvolvido por Fábio Júnior junto a Alura
    </footer>
  );
}
