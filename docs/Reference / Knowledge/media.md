---
sidebar_position: 2
---

# How to download social media content

## YouTube

Use an open source program called [yt-dlp](https://github.com/yt-dlp/yt-dlp)
The following are some common scripts:

```shell
### download mp4 file with audio
yt-dlp -f "bestvideo[ext=mp4]+bestaudio[ext=m4a]/best[ext=mp4]/best" https://youtu.be/j8T2mDmrmBg

### download mp3 file from an video 
yt-dlp -f bestaudio -x --audio-format mp3 --audio-quality 0 https://youtu.be/aooPKBBxGDM

### list all format
yt-dlp -F https://youtu.be/j8T2mDmrmBg

### dowload specific format 
yt-dlp -f 137 https://youtu.be/j8T2mDmrmBg

```

## Spotify

Use an open source program called [spotdl](https://github.com/spotDL/spotify-downloader)

```shell
### Download song or playlist
spotdl https://open.spotify.com/playlist/6hzg9MFyg6gMsvNyBiUTTm 

```


## Instagram

User an open source prgram called [Instaloader](https://instaloader.github.io/basic-usage.html)

```shell
instaloader profile columbia

```