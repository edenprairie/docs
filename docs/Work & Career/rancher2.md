# Rancher2 set up

![image](https://user-images.githubusercontent.com/24532787/93495416-b663c080-f8d3-11ea-83cb-201a357c73e9.png)

UYse Proxmox clone to create new VM 8 CPU, 64GB RAM, 100GB HDD
Cloned VM got same host name and IP and SSH. we need to update them following this instruction. 
https://pve.proxmox.com/wiki/Duplicate_Virtual_Machines 
![image](https://user-images.githubusercontent.com/24532787/93501070-8e2b9000-f8da-11ea-812c-bd6068108445.png)


https://www.howtoforge.com/linux-basics-set-a-static-ip-on-ubuntu
Ubuntu 20.04:
sudo nano /etc/netplan/00-installer-config.yaml

Ubuntu 18.04:
sudo nano /etc/netplan/01-netcfg.yaml
![image](https://user-images.githubusercontent.com/24532787/93502245-15c5ce80-f8dc-11ea-80d0-8be66c6b4003.png)

To apply the changes, run:
sudo netplan apply

![image](https://user-images.githubusercontent.com/24532787/93506635-2711d980-f8e2-11ea-9079-558b58880755.png)


https://rancher.com/docs/rancher/v2.x/en/installation/options/firewall/

* install firewalld
```
sudo iptables --list
CentOS
yum install firewalld
Ubuntu
sudo apt install firewalld

sudo systemctl start firewalld
sudo systemctl enable firewalld
```
* Applying Firewall Port Rules
```
sudo firewall-cmd --permanent --add-port=22/tcp
sudo firewall-cmd --permanent --add-port=80/tcp
sudo firewall-cmd --permanent --add-port=443/tcp
sudo firewall-cmd --permanent --add-port=2376/tcp
sudo firewall-cmd --permanent --add-port=2379/tcp
sudo firewall-cmd --permanent --add-port=2380/tcp
sudo firewall-cmd --permanent --add-port=6443/tcp
sudo firewall-cmd --permanent --add-port=8472/udp
sudo firewall-cmd --permanent --add-port=9099/tcp
sudo firewall-cmd --permanent --add-port=10250/tcp
sudo firewall-cmd --permanent --add-port=10254/tcp
sudo firewall-cmd --permanent --add-port=30000-32767/tcp
sudo firewall-cmd --permanent --add-port=30000-32767/udp
```
* If your Rancher server nodes have separate roles, use the following commands based on the role of the node:
```
# For etcd nodes, run the following commands:
sudo firewall-cmd --permanent --add-port=2376/tcp
sudo firewall-cmd --permanent --add-port=2379/tcp
sudo firewall-cmd --permanent --add-port=2380/tcp
sudo firewall-cmd --permanent --add-port=8472/udp
sudo firewall-cmd --permanent --add-port=9099/tcp
sudo firewall-cmd --permanent --add-port=10250/tcp

# For control plane nodes, run the following commands:
sudo firewall-cmd --permanent --add-port=80/tcp
sudo firewall-cmd --permanent --add-port=443/tcp
sudo firewall-cmd --permanent --add-port=2376/tcp
sudo firewall-cmd --permanent --add-port=6443/tcp
sudo firewall-cmd --permanent --add-port=8472/udp
sudo firewall-cmd --permanent --add-port=9099/tcp
sudo firewall-cmd --permanent --add-port=10250/tcp
sudo firewall-cmd --permanent --add-port=10254/tcp
sudo firewall-cmd --permanent --add-port=30000-32767/tcp
sudo firewall-cmd --permanent --add-port=30000-32767/udp

# For worker nodes, run the following commands:
sudo firewall-cmd --permanent --add-port=22/tcp
sudo firewall-cmd --permanent --add-port=80/tcp
sudo firewall-cmd --permanent --add-port=443/tcp
sudo firewall-cmd --permanent --add-port=2376/tcp
sudo firewall-cmd --permanent --add-port=8472/udp
sudo firewall-cmd --permanent --add-port=9099/tcp
sudo firewall-cmd --permanent --add-port=10250/tcp
sudo firewall-cmd --permanent --add-port=10254/tcp
sudo firewall-cmd --permanent --add-port=30000-32767/tcp
sudo firewall-cmd --permanent --add-port=30000-32767/udp
```

* After the firewall-cmd commands have been run on a node, use the following command to enable the firewall rules:
```
sudo firewall-cmd --reload
```
* install Docker
```
curl https://releases.rancher.com/install-docker/19.03.sh | sh
```

* install rancher
```
sudo docker run -d --restart=unless-stopped -p 80:80 -p 443:443 rancher/rancher
```