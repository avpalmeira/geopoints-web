# Geo Points - Web


## Propósito

O objetivo da aplicação web é possibilitar ao usuário inserir o caminho para um arquivo .CSV (Com latitudes e longitudes) em um bucket na aws, importar esses dados para um banco de dados e visualizar os pontos geográficos em um mapa. Também deverá ser possível o usuário poder consultar o histórico de dados de arquivos importados anteriormente.


## Dependências

### Bibliotecas

* Ant Design
* Axios
* Create React App
* Google Maps React

### Ferramentas

* Node
* Yarn


## Configuração de Ambiente

O projeto necessita de um arquivo de configuração de ambiente para poder rodar.\
Você deve ter um arquivo `.env.local` na raiz do projeto com as seguintes varaíveis configuradas:

* REACT_APP_GMAPS_API_KEY
* REACT_APP_API_URL

Insira sua chave de API do Google Maps após `REACT_APP_GMAPS_API_KEY=` no arquivo.\
E insira a URL da API GeoPoints após `REACT_APP_API_URL=`.

Você pode usar o arquivo `.env.local.sample` na raiz do projeto como base para o `env.local`


## Execução

Para executar o projeto localmente, rode na linha de comando:

```
yarn install
yarn dev
```


## Testes

Para executar os testes, rode na linha de comando:

```
yarn test
```

