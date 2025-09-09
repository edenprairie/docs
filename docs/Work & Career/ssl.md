# 🔐 Configuring NGINX with Cloudflare Origin Certificate for SSL

This guide shows you how to configure **NGINX** to use a **Cloudflare Origin SSL certificate** on an Ubuntu server, ensuring secure HTTPS connections between your server and Cloudflare.

---

## ✅ Prerequisites

- Ubuntu server with `nginx` installed
- Your domain is set up in Cloudflare
- You have access to Cloudflare Dashboard

---

## 1. Generate Cloudflare Origin Certificate

1. Go to [Cloudflare Dashboard](https://dash.cloudflare.com)
2. Select your domain
3. Navigate to **SSL/TLS → Origin Server**
4. Click **"Create Certificate"**

### Settings:
- **Key format**: PEM
- **Private key type**: RSA (or ECC)
- **Hostnames**: Keep default (e.g., `example.com`, `*.example.com`)
- **Validity**: Up to 15 years

### Output:
- **Origin Certificate** (Public certificate)
- **Private Key**

> 📌 Save both files securely — you'll need them for NGINX.

---

## 2. Save Certificate and Key on Server

SSH into your Ubuntu server and run:

```bash
sudo mkdir -p /etc/ssl/cloudflare
<img width="1594" height="730" alt="Image" src="https://github.com/user-attachments/assets/65983a07-b2d4-44cb-ab1c-428dbfe3c6eb" />