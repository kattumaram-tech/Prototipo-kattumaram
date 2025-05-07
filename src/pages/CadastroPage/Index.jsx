import { useState } from 'react';
import styles from './Cadastro.module.css';
import brasaoPE from '../../assets/icon/icon.webp'; // Você precisará adicionar este arquivo

const Cadastro = () => {
  const [formData, setFormData] = useState({
    nome: '',
    cpf: '',
    dataNascimento: '',
    rg: '',
    orgaoEmissor: '',
    email: '',
    celular: '',
    cep: '',
    logradouro: '',
    numero: '',
    complemento: '',
    bairro: '',
    cidade: '',
    senha: '',
    confirmarSenha: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleCPFChange = (e) => {
    let value = e.target.value.replace(/\D/g, '');
    if (value.length <= 11) {
      // Formata o CPF: 000.000.000-00
      value = value.replace(/(\d{3})(\d)/, '$1.$2');
      value = value.replace(/(\d{3})(\d)/, '$1.$2');
      value = value.replace(/(\d{3})(\d{1,2})$/, '$1-$2');
    }
    setFormData({
      ...formData,
      cpf: value
    });
  };

  const handleCEPChange = (e) => {
    let value = e.target.value.replace(/\D/g, '');
    if (value.length <= 8) {
      // Formata o CEP: 00000-000
      value = value.replace(/(\d{5})(\d)/, '$1-$2');
    }
    setFormData({
      ...formData,
      cep: value
    });
  };

  const handleCelularChange = (e) => {
    let value = e.target.value.replace(/\D/g, '');
    if (value.length <= 11) {
      // Formata o celular: (00) 00000-0000
      value = value.replace(/(\d{2})(\d)/, '($1) $2');
      value = value.replace(/(\d{5})(\d)/, '$1-$2');
    }
    setFormData({
      ...formData,
      celular: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Lógica de cadastro aqui
    console.log('Dados enviados:', formData);
  };

  return (
    <div className={styles.container}>
      <div className={styles.cadastroCard}>
        <div className={styles.header}>
          <img src={brasaoPE} alt="Brasão de Pernambuco" className={styles.brasao} />
          <h1 className={styles.title}>Cadastro de Cidadão</h1>
          <h2 className={styles.subtitle}>Governo de Pernambuco</h2>
        </div>
        
        <form onSubmit={handleSubmit}>
          <div className={styles.section}>
            <h3 className={styles.sectionTitle}>Dados Pessoais</h3>
            
            <div className={styles.inputGroup}>
              <label htmlFor="nome">Nome Completo*</label>
              <input
                type="text"
                id="nome"
                name="nome"
                value={formData.nome}
                onChange={handleChange}
                className={styles.input}
                required
              />
            </div>
            
            <div className={styles.row}>
              <div className={styles.inputGroup}>
                <label htmlFor="cpf">CPF*</label>
                <input
                  type="text"
                  id="cpf"
                  name="cpf"
                  value={formData.cpf}
                  onChange={handleCPFChange}
                  className={styles.input}
                  placeholder="000.000.000-00"
                  maxLength="14"
                  required
                />
              </div>
              
              <div className={styles.inputGroup}>
                <label htmlFor="dataNascimento">Data de Nascimento*</label>
                <input
                  type="date"
                  id="dataNascimento"
                  name="dataNascimento"
                  value={formData.dataNascimento}
                  onChange={handleChange}
                  className={styles.input}
                  required
                />
              </div>
            </div>
            
            <div className={styles.row}>
              <div className={styles.inputGroup}>
                <label htmlFor="rg">RG*</label>
                <input
                  type="text"
                  id="rg"
                  name="rg"
                  value={formData.rg}
                  onChange={handleChange}
                  className={styles.input}
                  required
                />
              </div>
              
              <div className={styles.inputGroup}>
                <label htmlFor="orgaoEmissor">Órgão Emissor*</label>
                <input
                  type="text"
                  id="orgaoEmissor"
                  name="orgaoEmissor"
                  value={formData.orgaoEmissor}
                  onChange={handleChange}
                  className={styles.input}
                  placeholder="SSP-PE"
                  required
                />
              </div>
            </div>
          </div>
          
          <div className={styles.section}>
            <h3 className={styles.sectionTitle}>Contato</h3>
            
            <div className={styles.inputGroup}>
              <label htmlFor="email">E-mail*</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className={styles.input}
                required
              />
            </div>
            
            <div className={styles.inputGroup}>
              <label htmlFor="celular">Celular*</label>
              <input
                type="text"
                id="celular"
                name="celular"
                value={formData.celular}
                onChange={handleCelularChange}
                className={styles.input}
                placeholder="(00) 00000-0000"
                maxLength="15"
                required
              />
            </div>
          </div>
          
          <div className={styles.section}>
            <h3 className={styles.sectionTitle}>Endereço</h3>
            
            <div className={styles.row}>
              <div className={styles.inputGroup}>
                <label htmlFor="cep">CEP*</label>
                <input
                  type="text"
                  id="cep"
                  name="cep"
                  value={formData.cep}
                  onChange={handleCEPChange}
                  className={styles.input}
                  placeholder="00000-000"
                  maxLength="9"
                  required
                />
              </div>
              
              <div className={styles.inputGroup}>
                <label htmlFor="cidade">Cidade*</label>
                <input
                  type="text"
                  id="cidade"
                  name="cidade"
                  value={formData.cidade}
                  onChange={handleChange}
                  className={styles.input}
                  required
                />
              </div>
            </div>
            
            <div className={styles.inputGroup}>
              <label htmlFor="logradouro">Logradouro*</label>
              <input
                type="text"
                id="logradouro"
                name="logradouro"
                value={formData.logradouro}
                onChange={handleChange}
                className={styles.input}
                required
              />
            </div>
            
            <div className={styles.row}>
              <div className={styles.inputGroup}>
                <label htmlFor="numero">Número*</label>
                <input
                  type="text"
                  id="numero"
                  name="numero"
                  value={formData.numero}
                  onChange={handleChange}
                  className={styles.input}
                  required
                />
              </div>
              
              <div className={styles.inputGroup}>
                <label htmlFor="complemento">Complemento</label>
                <input
                  type="text"
                  id="complemento"
                  name="complemento"
                  value={formData.complemento}
                  onChange={handleChange}
                  className={styles.input}
                />
              </div>
            </div>
            
            <div className={styles.inputGroup}>
              <label htmlFor="bairro">Bairro*</label>
              <input
                type="text"
                id="bairro"
                name="bairro"
                value={formData.bairro}
                onChange={handleChange}
                className={styles.input}
                required
              />
            </div>
          </div>
          
          <div className={styles.section}>
            <h3 className={styles.sectionTitle}>Credenciais de Acesso</h3>
            
            <div className={styles.inputGroup}>
              <label htmlFor="senha">Senha*</label>
              <input
                type="password"
                id="senha"
                name="senha"
                value={formData.senha}
                onChange={handleChange}
                className={styles.input}
                required
                minLength="8"
              />
              <small className={styles.smallText}>A senha deve conter pelo menos 8 caracteres, incluindo letras e números</small>
            </div>
            
            <div className={styles.inputGroup}>
              <label htmlFor="confirmarSenha">Confirmar Senha*</label>
              <input
                type="password"
                id="confirmarSenha"
                name="confirmarSenha"
                value={formData.confirmarSenha}
                onChange={handleChange}
                className={styles.input}
                required
                minLength="8"
              />
            </div>
          </div>
          
          <div className={styles.termos}>
            <input
              type="checkbox"
              id="termos"
              className={styles.checkbox}
              required
            />
            <label htmlFor="termos">
              Li e concordo com os <a href="#" className={styles.link}>Termos de Uso</a> e <a href="#" className={styles.link}>Política de Privacidade</a>
            </label>
          </div>
          
          <button type="submit" className={styles.cadastroButton}>
            Cadastrar
          </button>
        </form>
        
        <div className={styles.jaTemConta}>
          <span>Já possui cadastro?</span>
          <a href="#" className={styles.loginLink}>Entrar</a>
        </div>
      </div>
    </div>
  );
};

export default Cadastro;