# Wordpress Zero
Tema para início dos templates no wordpress

# Como usar
Na pasta src estão os arquivos editáveis para construção do template. A pasta www (será gerado após rodar o gulp) está o projeto final, aqui deve ser colocado os arquivos do wordpress baixados em wordpress.org.

## Docker
Para rodar o docker digite no terminal

```sh
$ docker-compose up
```

Na pasta db deve ser colocado a cópia .sql do banco (se existir), caso contrário basta instalar o wordpress normalmente.

Dentro de docker-compose.yml configure o virtual host em - VIRTUAL_HOST coloque aqui o endereço do projeto (localhost, meusite.com.br). Será preciso colocar as mesmas informações no /etc/hosts utilizando o ip 127.0.0.1

```sh
127.0.0.1 meusite.com.br
```
Para o banco de dados será usado o mariadb, configure a senha do root e o nome da base. Veja mais configurações na documentação do mariadb para o docker em https://hub.docker.com/_/mariadb/

## Gulp
Esse projeto utiliza o gulp, para instalar digite no terminal

```sh
$ npm install --global gulp-cli
```

No arquivo package.json estão os packages usados para o projeto, para instalar digite no terminal

```sh
$ npm install
```

Para utilizar o jQuery basta digitar o comando de instalação do bower
```sh
$ bower install
```

### Configurando o Gulp
As configurações do gulp estão no Gulpfile.js, lá deve ser definido o nome do template em "themeName"
