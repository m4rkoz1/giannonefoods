# Configuração do EasyPanel para Node 18

## Comandos para EasyPanel

- **Versão do Node.js**: 18
- **Comando de instalação**: `npm install`
- **Comando de build**: `npm run build`
- **Comando de inicialização**: `npm start`

## Variáveis de ambiente

- `NODE_ENV=production`
- `PORT=3000`

## Observações

1. Certifique-se de que o EasyPanel está configurado para usar a imagem Docker com Node 18
2. O Dockerfile já foi criado na raiz do projeto
3. O problema de path no arquivo server/vite.ts foi corrigido