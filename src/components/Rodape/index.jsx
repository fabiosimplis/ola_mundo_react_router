import MarcaRegistrada from "assets/marca_registrada.svg?react";
import styles from "./Rodape.module.css";

export default function Rodape() {
  return (
    <footer className={styles.rodape}>
      <MarcaRegistrada />
      Desenvolvido por Fábio Júnior junto a Alura
    </footer>
  );
}
