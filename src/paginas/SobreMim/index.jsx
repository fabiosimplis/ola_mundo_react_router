import PostModelo from "components/PostModelo";
import fotoCapa from "assets/sobre_mim_capa.png";
import styles from "./SobreMim.module.css";
import fotoSobreMim from "assets/foto_perfil.png";
export default function SobreMim() {
  return (
    <main>
      <PostModelo fotoCapa={fotoCapa} titulo="Sobre mim">
        <h3 className={styles.subtitulo}>Olá eu sou Fábio</h3>
        <img
          className={styles.fotoSobreMim}
          src={fotoSobreMim}
          alt="Foto de Fábio em preto e branco"
        />
        <p className={styles.paragrafo}>
          Sou desenvolvedor de software com mais de 8 anos de experiência
          especializada em soluções para o setor financeiro. Minha carreira
          inclui empresas como Muxi e Dock onde tive a oportunidade em
          desenvolver soluções para Petrobras, Fiserv Brasil e Argentina, NIUBIZ
          Perú, RoadCard e Sicredi.
        </p>
        <p className={styles.paragrafo}>
          Com expertise em tecnologias como Java, Spring Boot, SQL, e um
          profundo conhecimento de ISO 8583 e EMV, tenho contribuído
          significativamente para o desenvolvimento de sistemas de alta
          performance e segurança.
        </p>
        <p className={styles.paragrafo}>
          Vivência em coordenação de equipe, suporte a cliente, JavaScript,
          Python e AWS.
        </p>
        <p className={styles.paragrafo}>
          Em minha trajetória profissional inclui o desenvolvimento e a melhoria
          de aplicações de ponto de venda (POS) e software backend em ambientes
          que necessitavam de rápida solução assertiva de forma a mitigar riscos
          e proteger a reputação corporativa.
        </p>
        <p className={styles.paragrafo}>
        Entre minhas conquistas estão a criação de soluções que aumentaram a
        eficiência das transações financeiras e a rapida resolução de bugs para
        garantir a continuidade das operações sem interrupções. Minha
        experiência otimizar comunicações com clientes e implementar
        metodologias ágeis para garantir entregas bem-sucedidas.
        </p>
        <p className={styles.paragrafo}>
          Possuo capacidade analítica, habilidades interpessoais, proatividade,
          iniciativa, objetividade e resolução de problemas
        </p>
        <p className={styles.paragrafo}>
          Durante meu tempo livre trabalho em projetos pessoais colocando em
          prática os conhecimentos adquiridos.
        </p>
        <p className={styles.paragrafo}>
          Vamos conversar e ver como podemos transformar suas ideias em soluções
          práticas e eficazes!
        </p>
      </PostModelo>
    </main>
  );
}
