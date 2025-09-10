# TrueNAS

![image](https://user-images.githubusercontent.com/24532787/93342438-f86a0500-f7f4-11ea-96e5-7d89d1e6c1c3.png)
![image](https://user-images.githubusercontent.com/24532787/93357464-f2c8eb00-f805-11ea-8596-d5a7441f254b.png)
![image](https://user-images.githubusercontent.com/24532787/93353973-23a72100-f802-11ea-8dda-f69f6822791a.png)


Update static address doesn't work using UI, we have to go to console and choose 1, and remove interface to re-start again. 
![image](https://user-images.githubusercontent.com/24532787/93355254-7c2aee00-f803-11ea-87ae-9e4c2c416939.png)


https://medium.com/technotim/how-to-install-and-virtualize-freenas-with-proxmox-1c493c7c72f1
Thanks for the video. I have a question. I am not a movie junkie but do have kids videos, some movies and then hires music on a 2 bay synology nas. I have proxmox in a decent machine (corei7 6700- 32GB RAM) and is planning to move in to a better machine. I have plex on one of KVMs and though server has pently of processing power left with decording hi-res movies still get distruptions in playing to my panasonic TV that has plex client built in. I am adding a wired connection to my TV but it looks like delay is moving data to plex from NAS and then making it available to clients
As such I am thinking of adding freenas to my proxmox and dedicate 1x2GB NVME Drive to freenas to store data. My Nas has 2x2TB so this gives same data holding capacity.
My question is can this be done in freenas (that is only work with one drive) and can I expect much better performance levels for i am having data in NVEME drive and probably run plex inside freenas.
Even when I am playing some hi-res DSD files or Flac files I have seen some minute waiting whilst listing where my files are stores on NAS and services via wifi (Unifi USG-> 2x AC pros).
My plan is to still keep my library in the NAS as back up and but use freenas wit Nveme drive to speed up. I do not want to spend lot of money for harddrives or add spinning drives as they are loud and use power (I do have 6x 2TB enterprise drives in hand but not in favour of using them)