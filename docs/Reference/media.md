---
sidebar_position: 2
---

# How to download social media content

## YouTube

Use an open source program called [yt-dlp](https://github.com/yt-dlp/yt-dlp)
The following are some common scripts:

```shell
### download mp4 file with audio
yt-dlp --cookies-from-browser chrome -f "bestvideo[ext=mp4]+bestaudio[ext=m4a]/best[ext=mp4]/best" https://youtu.be/j8T2mDmrmBg

### download mp3 file from an video 
yt-dlp --cookies-from-browser chrome -f bestaudio -x --audio-format mp3 --audio-quality 0 https://youtu.be/aooPKBBxGDM

### list all format
yt-dlp --cookies-from-browser chrome -F https://youtu.be/j8T2mDmrmBg

### dowload specific format 
yt-dlp --cookies-from-browser chrome -f 137 https://youtu.be/j8T2mDmrmBg

```

### check one particular youtube channel video in existing folder and download them all
```
while true; do
  yt-dlp \
    --cookies-from-browser chrome \
    --download-archive downloaded.txt \
    --continue \
    --ignore-errors \
    --no-overwrites \
    --min-sleep-interval 10 \
    --max-sleep-interval 30 \
    -o "%(upload_date>%Y-%m-%d)s %(title)s.%(ext)s" \
    -f "bv*[ext=mp4]+ba*[ext=m4a]/b[ext=mp4]" \
    --merge-output-format mp4 \
    "https://www.youtube.com/@del78ful/videos"

  if [ $? -eq 0 ]; then break; fi
  echo "Restarting..."
  sleep 10
done
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

## Normalizing Audio in MP4 Files with FFmpeg

When preparing audio for live events (e.g., at MOA), it’s important to make sure all MP4 files play at a consistent volume level. FFmpeg provides a simple way to normalize audio so that tracks are balanced.

---

### Step 1: Install FFmpeg
Make sure FFmpeg is installed and available in your system’s PATH.

- [Download FFmpeg](https://ffmpeg.org/download.html)

Verify installation:

```bash
ffmpeg -version
```

### Step 2: Analyze the Audio

Before normalizing, run FFmpeg’s loudnorm filter in analysis mode. This step will measure the file’s current loudness.

```bash
ffmpeg -i input.mp4 -af loudnorm=I=-16:TP=-1.5:LRA=11:print_format=json -f null -
```

This will print out measurements such as:
 - Input Integrated Loudness (I)
 - True Peak (TP)
 - Loudness Range (LRA)
 - Threshold

### Step 3: Apply Normalization

Once you have the measured values, apply normalization using the loudnorm filter:

```bash
ffmpeg -i input.mp4 -af loudnorm=I=-14:TP=-1.5:LRA=11:measured_I=-19.3:measured_TP=-2.1:measured_LRA=9.5:measured_thresh=-29.3:offset=-0.7:linear=true:print_format=summary -c:v copy output.mp4
```

Explanation of Parameters:
- I=-16 → Target Integrated Loudness (LUFS)
- TP=-1.5 → Target True Peak (dB)
- LRA=11 → Target Loudness Range
- -c:v copy → Copies the video stream without re-encoding (faster, preserves video quality)

### Step 4: Batch Normalize Multiple Files

If you have many MP4 files, you can automate normalization with a simple shell loop:

```bash
for f in *.mp4; do
  ffmpeg -i "$f" -af loudnorm=I=-14:TP=-1.5:LRA=11 -c:v copy "normalized_$f"
done
``` 

This will create new normalized files with normalized_ as a prefix.

### Step 5: Notes for Live Events

- Use -16 LUFS as a general target for event playback.
- Always test a few sample files before normalizing the entire batch.
- Normalization may slightly affect dynamics — review files before the live event.
- Keep backups of the original files in case you need to reprocess.

### Quick Option (No Analysis)

If you don’t have time to analyze each file individually, you can apply a one-pass normalization:

```bash
ffmpeg -i 03-MoonlightSerenade.mp4 -af loudnorm=I=-14:TP=-1.5:LRA=11 -c:v copy 03-MoonlightSerenadeNormalized14.mp4
```

This is faster, though less precise.
