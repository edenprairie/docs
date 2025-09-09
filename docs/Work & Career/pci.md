# PCI device pass through issue: - IOMMU not present

It wasn't being updated by update-grub. Maybe a rookie mistake but, I never had update-grub fail to update before. I tried to update with grub-mkconfig and to reinstall grub via grub-install. None of them worked. What worked was what was suggested in this [link](https://serverfault.com/questions/648468/modifying-kernel-cmdline-in-ubuntu)

create the directory /etc/default/grub.d

create a file ending with “.cfg” in that directory.

add the following to it:
Code:
```
GRUB_CMDLINE_LINUX_DEFAULT="${GRUB_CMDLINE_LINUX_DEFAULT} intel_iommu=on"
```
run update-grub.

Rebooted and everything works. Thank you!

![image](https://user-images.githubusercontent.com/24532787/93251932-77f6c600-f75a-11ea-809d-0f2ecf2feefe.png)
![image](https://user-images.githubusercontent.com/24532787/93251979-86dd7880-f75a-11ea-82c0-4a254d7927d0.png)
![image](https://user-images.githubusercontent.com/24532787/93252085-a4aadd80-f75a-11ea-8bc2-a0fb2d2828af.png)
![image](https://user-images.githubusercontent.com/24532787/93252148-b68c8080-f75a-11ea-9bd6-c0955751c4c2.png)
![image](https://user-images.githubusercontent.com/24532787/93252227-cdcb6e00-f75a-11ea-96e3-d84e3d1304d5.png)
