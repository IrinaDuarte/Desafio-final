import S from "./inicio.module.scss";
import balance from "../../assets/balance.png";
import read from "../../assets/read.png";
import punho from "../../assets/punho.png";
import comunidade from "../../assets/comunidade.png";

export default function Inicio() {
  return (
    <main>
      <section className={S.banner}>
        <h2>VENHA FAZER PARTE DA MAIOR REDE DE DOAÇÃO</h2>
      </section>
      <section className={S.devoDoar}>
        <div>
          <h2>Por que devo doar?</h2>
        </div>
        <section className={S.boxCard}>
          <article>
            <img src={comunidade} alt="" />
            <p>
              Oferece livros a quem não tem acesso, ajudando a reduzir a
              exclusão social.
            </p>
          </article>
          <article>
            <img src={read} alt="" />
            <p>Estimula o hábito da leitura e o aprendizado contínuo.</p>
          </article>
          <article>
            <img src={punho} alt="" />
            <p>
              Fornece conhecimento e inspiração, permitindo que indivíduos
              transformem suas vidas.
            </p>
          </article>
          <article>
            <img src={balance} alt="" />
            <p>
              Garante que todos, independentemente de sua condição, tenham
              oportunidades de aprendizado.
            </p>
          </article>
        </section>
      </section>
    </main>
  );
}
