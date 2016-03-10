# -*- mode: ruby -*-
# vi: set ft=ruby :

SITE = "nomesite"

# Vagrantfile API/syntax version. Don't touch unless you know what you're doing!
VAGRANTFILE_API_VERSION = "2"

Vagrant.configure("2") do |config|
    config.vm.box = "ubuntu/trusty64"
    config.vm.network "private_network", ip: "192.168.60.8"
    config.vm.network "public_network"
    config.vm.provision "shell", path: "install.sh"

    config.vm.synced_folder "./", "/home/" + SITE + "/public_html", create: true, group: "www-data", owner: "www-data"
    config.vm.provider "virtualbox" do |v, override|
        v.memory = 768
        v.cpus = 2
        v.customize ["modifyvm", :id, "--natdnshostresolver1", "on"]
        v.customize ["modifyvm", :id, "--natdnsproxy1", "on"]
    end
end
