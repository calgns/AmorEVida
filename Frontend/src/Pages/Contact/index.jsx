import { useState } from "react";
import "./Contact.css";

export default function Contact() {
  return (
    <div className="contact">
      <h1>Entre em Contato Conosco!</h1>
      <div className="mapas">
        <div className="">
          <p>Sede Administrativa e Casa de Acolhimento</p>
          <p>Rua Melo Viana, 401 - Morrinhos - Montes Claros/Minas Gerais, 39400-427<br />
            Horario de Atendimento: Segunda à sexta de 16h30 às 19h30<br />
            Telefone: +55 (38) 88341-899<br />
            Email: casaamorevida@outlook.com<br />
            CNPJ: 28.467.302/0001-93</p>
          <iframe
            title="Amor e vida localização"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3820.904798101652!2d-43.86634122524798!3d-16.73160134672958!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xab54a642027c95%3A0x9b855e093d635c!2sR.%20Melo%20Viana%2C%20401%20-%20Morrinhos%2C%20Montes%20Claros%20-%20MG%2C%2039400-427%2C%20Brasil!5e0!3m2!1spt-BR!2sfr!4v1754738734048!5m2!1spt-BR!2sfr"
            width="654px"
            height="341px"
            style={{ border: 0 }}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            allowFullScreen
          ></iframe>
        </div>
      </div>
      <div className="form">
        <h2>Envie a sua mensagem</h2>
        <p>
          Para dúvidas, oportunidades de parcerias envie um email para
          casaamorevida@outlook.com ou uma mensagem usando o formulário abaixo:
        </p>
        <div className="entradas">
          <FormularioContato />
        </div>
      </div>
    </div>
  );
}

function FormularioContato() {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [mensagem, setMensagem] = useState("");

  function handleSubmit(event) {
    event.preventDefault();
    const url = `mailto:casaamorevida@outlook.com?subject=ContatoSite&body=${mensagem}`;
    window.open(url);
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className="pessoais">
        <div className="campo">
          <label>Nome</label>
          <input type="text" value={nome} onChange={(e) => setNome(e.target.value)} />
        </div>
        <div className="campo">
          <label>Email</label>
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
        </div>
      </div>
      <div className="mensagem">
        <label>Como podemos te ajudar?</label>
        <textarea value={mensagem} onChange={(e) => setMensagem(e.target.value)} />
        <div>
          <BotaoEnviar />
        </div>
      </div>
    </form>
  );
}

function BotaoEnviar() {
  return (
    <button className="botao" type="submit">Enviar</button>
  );
}

