// SampleFocus Downloader Extension
// Wait for the page to fully load to ensure all elements are available
window.addEventListener("load", () => {
  // Find the original download button to insert our custom button next to it
  const originalDownloadButton = document.querySelector("a.download-link");

  if (!originalDownloadButton) {
    console.log("SampleFocus Downloader: Could not find download button container.");
    return;
  }

  // 1. Get the audio file URL from the <audio> tag
  const audioPlayer = document.querySelector('audio[src*=".mp3"]');
  const audioUrl = audioPlayer ? audioPlayer.src : null;

  if (!audioUrl) {
    console.log("SampleFocus Downloader: Could not find audio file URL.");
    return;
  }

  // 2. Create a clean filename from the H1 title
  const titleElement = document.querySelector("h1");
  let filename = "samplefocus_track.mp3"; // Default filename
  if (titleElement) {
    // Remove invalid characters and replace spaces with underscores
    const cleanTitle = titleElement.textContent
      .trim()
      .replace(/[^a-z0-9\s-]/gi, "")
      .replace(/\s+/g, "_")
      .toLowerCase();
    filename = `${cleanTitle}.mp3`;
  }

  // 3. Create our custom download button with improved styling
  const customDownloadButton = document.createElement("a");
  customDownloadButton.className = "sf-downloader-btn";
  customDownloadButton.innerHTML = `
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
      <path d="M19 9h-4V3H9v6H5l7 7 7-7zM5 18v2h14v-2H5z"/>
    </svg>
    <span>Download Free</span>
  `;
  customDownloadButton.href = "#";
  customDownloadButton.title = "Download this sample for free";

  // 4. Add click handler for downloading
  customDownloadButton.addEventListener("click", (event) => {
    event.preventDefault();

    console.log(`SampleFocus Downloader: Starting download of ${filename}`);
    
    // Show loading state
    const originalContent = customDownloadButton.innerHTML;
    customDownloadButton.innerHTML = `
      <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" class="sf-spinner">
        <path d="M12,4V2A10,10 0 0,0 2,12H4A8,8 0 0,1 12,4Z"/>
      </svg>
      <span>Downloading...</span>
    `;
    customDownloadButton.style.pointerEvents = "none";

    // Create temporary download link
    const link = document.createElement("a");
    link.href = audioUrl;
    link.download = filename;
    
    // Add CORS handling if needed
    link.setAttribute('crossorigin', 'anonymous');

    // Trigger download
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    // Reset button state after a short delay
    setTimeout(() => {
      customDownloadButton.innerHTML = originalContent;
      customDownloadButton.style.pointerEvents = "auto";
    }, 2000);
  });

  // 5. Insert our button after the original download button
  originalDownloadButton.parentElement.insertBefore(customDownloadButton, originalDownloadButton.nextSibling);

  console.log(
    "SampleFocus Downloader v1.0: Custom download button successfully added!"
  );
});