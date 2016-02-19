# -*- mode: ruby -*-
# vi: set ft=ruby :

USER = "vagrant"
SITE = "nome-do-site"

#Versão da sintaxe do Vagrant
VAGRANTFILE_API_VERSION = "2"
Vagrant.configure(VAGRANTFILE_API_VERSION) do |config|
    config.vm.box = "ubuntu/trusty64"

    config.vm.provider "virtualbox"

    config.vm.network "private_network", ip: "192.168.70.3"
    config.vm.network "public_network"

    config.vm.provision :shell, path: "scripts/bootstrap-ubuntu.sh", privileged: true
    config.ssh.username = USER
    config.vm.synced_folder "./", "/home/" + USER  + "/" + SITE  + "/", create: true

    config.vm.hostname = SITE

    config.vm.provider "virtualbox" do |v, override|
        v.memory = 768
        v.cpus = 2
        v.customize ["modifyvm", :id, "--natdnshostresolver1", "on"]
        v.customize ["modifyvm", :id, "--natdnsproxy1", "on"]
    end
end
