#!/bin/bash
#Config provision/config/nginx_vhost
site=nomesite

echo "=============== Rodando Shell"

export DEBIAN_FRONTEND=noninteractive

echo "=============== Update"
    sudo apt-get update

echo "=============== Installing Git"
    apt-get install git -y > /dev/null

echo "=============== Installing Nginx"
    apt-get install nginx -y > /dev/null

echo "=============== Updating PHP repository"
    apt-get install python-software-properties build-essential -y > /dev/null
    add-apt-repository ppa:ondrej/php5 -y > /dev/null
    apt-get update > /dev/null

echo "=============== Installing PHP"
    apt-get install php5-common php5-dev php5-cli php5-fpm -y > /dev/null

echo "=============== Installing PHP extensions"
    apt-get install curl php5-curl php5-gd php5-mcrypt php5-mysql -y > /dev/null

    apt-get install debconf-utils -y > /dev/null

    debconf-set-selections <<< "mysql-server mysql-server/root_password password root"

    debconf-set-selections <<< "mysql-server mysql-server/root_password_again password root"

    apt-get install mysql-server -y > /dev/null

echo "=============== Configuring Nginx"
    cp /home/$site/public_html/provision/config/nginx_vhost /etc/nginx/sites-available/nginx_vhost > /dev/null
    ln -s /etc/nginx/sites-available/nginx_vhost /etc/nginx/sites-enabled/
    rm /etc/nginx/sites-enabled/default
    chmod 777 -R /var/log/nginx

    service nginx restart > /dev/null

echo "=============== Criando base de dados"
    mysql -uroot -proot -e "create database wordpress";
    mysql -uroot -proot -e "CREATE USER 'usuario_site'@'localhost' IDENTIFIED BY 'root'";
    mysql -uroot -proot -e "GRANT CREATE ON *.* TO 'usuario_site'@'localhost'";

echo "=============== Sistema Configurado"