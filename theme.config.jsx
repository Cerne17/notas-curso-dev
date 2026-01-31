export default {
  logo: <span>Notas do Miguel - TabNews</span>,
  
  // Link do ícone do GitHub no canto superior direito
  project: {
    link: 'https://github.com/Cerne17/clone-tabnews',
  },

  // Configuração da barra lateral de documentação
  docsRepositoryBase: 'https://github.com/Cerne17/clone-tabnews/tree/main',
  useNextSeoProps() {
    return {
      titleTemplate: '%s – Miguel Cerne'
    }
  },

  footer: {
    text: (
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '10px', width: '100%' }}>
        <span>
          MIT {new Date().getFullYear()} © <a href="https://cerne.pro" target="_blank" style={{ fontWeight: 'bold', textDecoration: 'none' }}>Miguel Cerne</a>
        </span>
        
        <div style={{ display: 'flex', gap: '16px', fontSize: '0.9rem', opacity: 0.8 }}>
          <a href="https://github.com/Cerne17" target="_blank" style={{ textDecoration: 'none' }}>
            GitHub
          </a>
          <span>|</span>
          {/* Ajuste o link abaixo se o seu user for diferente */}
          <a href="https://www.linkedin.com/in/miguelcerne/" target="_blank" style={{ textDecoration: 'none' }}>
            LinkedIn
          </a>
          <span>|</span>
          <a href="https://github.com/Cerne17/clone-tabnews" target="_blank" style={{ textDecoration: 'none' }}>
            Repo do Curso
          </a>
        </div>
      </div>
    )
  }
}
