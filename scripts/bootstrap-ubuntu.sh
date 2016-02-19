#!/bin/bash

## Instalando dependencias do SO
sed -i 's|http://archive.ubuntu.com/ubuntu|http://ubuntu.c3sl.ufpr.br/ubuntu/|' /etc/apt/sources.list
sed -i 's|^deb-src|#deb-src|' /etc/apt/sources.list
echo "127.0.0.1 nomedosite.ms" >> /etc/hosts

## Instala dependencias no ubuntu
sudo apt-get update

##Instala Nginx
sudo apt-get install nginx
