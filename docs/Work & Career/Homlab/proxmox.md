# Proxmox poup removal 

1 Preparation
1.1 Login to your pve web gui

1.2 (Left hand side) Click on pve name under “Datacenter”

1.3 (Right hand side) Click on “Shell” button

Note: You can also use any other SSH client to connect, does not have to be via PVE web gui

2 Easy method
2.1 Copy and paste following command to the terminal
(6.2-15 and up)

```
    sed -i.backup -z "s/res === null || res === undefined || \!res || res\n\t\t\t.data.status.toLowerCase() \!== 'active'/false/g" /usr/share/javascript/proxmox-widget-toolkit/proxmoxlib.js && systemctl restart pveproxy.service
```

2.2 Log out clear the browser cache or restart the browser then login again.

2.3 There will be no pop up window

3 Manual method
3.1 Change working directory

```
    cd /usr/share/javascript/proxmox-widget-toolkit
```
3.2 Backup the file we will modify (“proxmoxlib.js”)

```
    cp proxmoxlib.js proxmoxlib.js.backup
```
3.3 Open and edit the file (“proxmoxlib.js”)

```
    nano proxmoxlib.js
```
3.4 If you are using other SSH client rather than via the PVE web gui, you can use Ctrl + W key in nano then type “if data” to find “if (data.status !== ‘Active’) “, if via web gui, do not use Ctrl + W, the terminal windows will be closed

(6.2-15 and up)
```
		    if (res === null || res === undefined || !res || res
			.data.status.toLowerCase() !== 'active') {
```
3.5 Replace with

```
    if (false) {
```
3.6 Use Ctrl + X, Y, Enter key to Save and exit nano

3.7 Restart Proxmox service

```
    systemctl restart pveproxy.service
```
3.8 Log out clear the browser cache or restart the browser then login again.

3.9 There will be no pop up window
