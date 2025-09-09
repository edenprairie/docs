---
sidebar_position: 1
---

# Family Cyber Security Guidance

## Credential management:

- Categorized credentials into layers:
    - Tier 1: Identification account 
      - Accounts: Email, Mobile Phone Account, Global Entry Account, Credit Bureaus Account
      - Password Handling
        - Do not save passwords in Bitwarden, LastPass, or browser password managers
        - Use a self-recognized algorithm to memorize passwords.
        - Backup passwords on paper or offline spreadsheet.
        - Rotate passwords at least every 60 days.
      - Email Backup:
        - Prefer using a different provider for backup (e.g., use Hotmail as backup for Gmail).
        - Never store passwords in either Chrome or another browser's password manager.
    - Tier 1.5: Financial Accounts
      - Accounts: Online Banking, Retirement Account, Credit Online Account
      - Password Handling:
        - Follow Tier 1 guidelines for password management.
        - Do not store passwords using online services.
        - Always use 2FA, prefer to use hardware key, i.e. [Yubikey](https://www.amazon.com/Yubico-YubiKey-USB-Authentication-Security/dp/B07HBD71HL/ref=sr_1_1_sspa?crid=2FBQWHAI81FL5&dchild=1&keywords=yubikey+5c+nfc&qid=1626007373&sprefix=yubi%2Caps%2C379&sr=8-1-spons&psc=1&spLa=ZW5jcnlwdGVkUXVhbGlmaWVyPUExMVJYTUVRSVhKTjJBJmVuY3J5cHRlZElkPUEwNTgxMDUxMUlERkpUUFhQV1dFNCZlbmNyeXB0ZWRBZElkPUEwMzA2NjMzMjhMRjNOSkkyRFYxQyZ3aWRnZXROYW1lPXNwX2F0ZiZhY3Rpb249Y2xpY2tSZWRpcmVjdCZkb05vdExvZ0NsaWNrPXRydWU=), authenticator apps include Microsoft, Google or Symantec, etc. Remember to download and write down backup code in case of cell phone damage or loss.
    - Tier 2: Online Shopping Accounts
      - Accounts: Online Shopping
        - Password Handling:
        - Passwords must be unique and not used in Tier 1 or 1.5 accounts.
        - Avoid saving credit card information on shopping websites.
        - Use guest checkout for infrequently visited sites.
        - Store passwords in Bitwarden using generated strong passwords.
    - Tier 3: Social Media Accounts
      - Accounts: Social Media
      - Password Handling:
        - Follow Tier 2 guidelines for password management.
        - Use Bitwarden to store passwords with generated strong passwords.
    - Tier 1.5: Online banking, Retirement account, Credit online account
        - Don't store this tier password using an online service, refer to tier 1 guidance.
        - all other tier 1 rules
    - Tier2: Online shopping
        - Password can't be the same as any tier 1 and 1.5
        - Never save credit card into shopping website
        - If not often visit the site, use guest check out.
        - Allow using Bitwarden to store these passwords but using generated strong passwords.
        - 
    - Tier 3: Social media
        - If any social media website involves a monetized transaction, please upgrade to tier 2 and follow the rules.
        - Allow using Bitwarden to store these passwords but using generated strong passwords
        

## Computer and networking management:

    - User Accounts:
      - Each user must have a dedicated account to log into the computer.
    - Access Control:
      - Tier 1 and 1.5 accounts should only be accessed from approved computers.
    - Security Software:
      - Install approved anti-virus/malware software on all computers.
      - Update antivirus/malware database and perform disk scans weekly.
    - System Updates:
      - Set up automatic system updates for all computers.
    - Guest Accounts:
      - Create guest accounts only on dedicated computers when needed.
    - Network Security:
      - Disable Wi-Fi router port forwarding unless approved by authorized personnel.
      - Rotate Wi-Fi passwords every 60 days and ensure they meet Tier 1 password requirements.
      - Stop Wi-Fi access point broadcasting (SSID) to prevent unauthorized access.
    - Network-Attached Storage (NAS):
      - Do not use external services like Synology Quick Connect.
      - Scan NAS for viruses monthly.

## References

### Freeze Credit

https://www.consumer.ftc.gov/articles/what-know-about-credit-freezes-and-fraud-alerts

https://my.equifax.com/membercenter/#/login

https://service.transunion.com/dss/dashboard.page?

https://www.experian.com/ncaconline/freeze

https://service.transunion.com/dss/login.page?

This is different link from their membership page

!https://s3-us-west-2.amazonaws.com/secure.notion-static.com/8bd9385f-6660-420f-8e22-575fdff64c3b/Untitled.png

### [When someone is opening accounts in your name, here's what to do: Money Matters](https://www.cleveland.com/business/2017/05/when_someone_is_opening_accoun.html)

https://www.identitytheft.gov/#/account/login

Vanguard security

https://www.reddit.com/r/personalfinance/comments/kn7v9t/eliminate_security_code_in_vanguard_while_keeping/

https://fragile-credences.github.io/vanguard/

[The top 12 password-cracking techniques used by hackers](https://www.itpro.com/security/34616/the-top-password-cracking-techniques-used-by-hackers)

[Understanding the Criminals Behind Account Opening Fraud](https://www.accertify.com/criminals-behind-account-opening-fraud/)

[How to Tell If Identity Thieves Have Opened Accounts in Your Name](https://www.moneytalksnews.com/78-ways-to-make-50-or-lots-more-fast/)

[What I learned when thieves stole my identity](https://www.sun-sentinel.com/sfl-flhlpidtheft0907sbsep07-story.html)

[Configure YubiKey with Google, LastPass and KeePass](https://www.raymond.cc/blog/setting-up-yubikey-with-lastpass-as-second-factor-authentication/)

https://magneticb.github.io/blog/fidelity-2fa-symantec-vip

https://cointelegraph.com/news/sim-swapping-becomes-increasingly-popular-in-california-police-make-it-high-priority

SIM Swap: How To Protect Yourself And Your Family!

https://youtu.be/T384SXIDCoY