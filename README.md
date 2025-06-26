# 🎵 SampleFocus Downloader

A Chrome extension that adds a **free download button** to SampleFocus.com, allowing you to download samples without premium restrictions.

![Version](https://img.shields.io/badge/version-1.0-blue.svg)
![Chrome](https://img.shields.io/badge/chrome-extension-orange.svg)

## ✨ Features

- 🆓 **Bypass Premium Restrictions** - Download samples for free
- 🎨 **Beautiful UI** - Modern, gradient-styled download button
- 📱 **Responsive Design** - Works on desktop and mobile
- ⚡ **Fast & Lightweight** - Minimal impact on page performance
- 🔄 **Smart Filename Generation** - Automatically creates clean filenames from track titles
- 💫 **Smooth Animations** - Loading states and hover effects

## 🚀 Installation

### Manual Installation (Developer Mode)

1. **Download the Extension**

   ```bash
   git clone https://github.com/oglenyaboss/samplefocus-downloader.git
   cd samplefocus-downloader
   ```

2. **Open Chrome Extensions Page**

   - Go to `chrome://extensions/`
   - Enable "Developer mode" (toggle in top-right)

3. **Load the Extension**

   - Click "Load unpacked"
   - Select the extension folder
   - The extension should now appear in your extensions list

4. **Start Using**
   - Visit any sample page on [SampleFocus.com](https://samplefocus.com)
   - Look for the purple "Download Free" button next to the original download button

## 📖 How to Use

1. Navigate to any sample on SampleFocus.com
2. Look for the **purple "Download Free"** button next to the original download button
3. Click the button - this will open the audio file in a new tab
4. **Right-click** on the audio player and select **"Save As..."** to download the file
5. Choose your download location and save the file
6. Enjoy your free samples! 🎉

## 🛠️ Technical Details

### Files Structure

```
samplefocus-downloader/
├── manifest.json          # Extension configuration
├── content.js             # Main functionality
├── styles.css             # Button styling
└── README.md
```

### How It Works

1. **Content Script Injection**: Runs on SampleFocus sample pages
2. **Audio URL Detection**: Finds the audio file URL from the page's `<audio>` element
3. **Button Creation**: Dynamically creates a styled download button
4. **Download Handling**: Uses HTML5 download attribute to trigger file download
5. **Filename Generation**: Creates clean filenames from track titles

### Browser Compatibility

- ✅ Chrome 88+
- ✅ Edge 88+
- ✅ Opera 74+

## 📝 Legal & Disclaimer

⚠️ **Important Legal Notice**

This extension is for **educational and personal use only**. Users are responsible for:

- Respecting SampleFocus.com's terms of service
- Understanding copyright laws in their jurisdiction
- Using downloaded content appropriately

**We do not encourage or endorse:**

- Copyright infringement
- Violation of website terms of service
- Commercial use of copyrighted material

## 🐛 Known Issues

- Some samples might have different URL structures (rare)
- Download might fail on samples with special encoding
- Extension only works on sample detail pages, not category pages

## 📚 FAQ

**Q: Is this legal?**
A: The extension accesses publicly available audio URLs. However, users must respect copyright and terms of service.

**Q: Does this work on all samples?**
A: It works on most samples, but some edge cases might not be supported.

**Q: Why doesn't it work on some pages?**
A: The extension only works on individual sample pages, not search results or category pages.

**Q: The button opens a new tab instead of downloading. What do I do?**
A: This is normal! After clicking the button, right-click on the audio player in the new tab and select "Save As..." to download the file to your computer.

---

<div align="center">
  <p>Made with ❤️ for the music community</p>
</div>