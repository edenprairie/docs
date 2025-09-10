# Samba share on zfs and NFS setup

https://forum.level1techs.com/t/how-to-create-a-nas-using-zfs-and-proxmox-with-pictures/117375
https://stackoverflow.com/questions/21951556/changing-the-owner-of-folder-in-linux
## permission deny issue:
Need to change owner to new created user, Proxmox doesn't allow to use root user to connect to smb share.

Hi, follow this steps:

Update: apt-get update
Install: apt-get install nfs-common nfs-kernel-server
Edit your file NFS: nano /etc/exports
You have entry new line in /etc/exports of directory to shared i.e: /mnt/backupvm 192.168.50.0/255.255.255.0(rw)

/mnt/backupvm is your directory,
192.168.50.0/255.255.255.0 is your network
rw are the permissions


Start the services:
service nfs-common start
service nfs-kernel-server start


In Proxmoz

Go to DataCenter>Storage
Clic in Add>NFS

ID: backupvm - or the name you want
Server: 192.168.50.20 - IP of server
Export: Clic the list and select de directory "/mnt/backupvm
Content: Disk Image, ISO Image, VZDump backup file, etc.
Nodes: All
Enable: Select
Max Backups: 5 - or more

The fstab is only if you want mount a disk in a directory i.e: /home