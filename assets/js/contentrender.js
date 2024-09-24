function createPreviewForAllLinks() {
  const anchorTags = document.querySelectorAll("a"); // Select all anchor tags in the document

  anchorTags.forEach((anchor) => {
    const linkUrl = anchor.href; // Get the URL from the href attribute of the anchor tag

    const apiUrl = `https://api.microlink.io/?url=${encodeURIComponent(linkUrl)}`;

    fetch(apiUrl)
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.json();
      })
      .then((data) => {
        // Log all the data received
        console.log("Data received for:", linkUrl, data);

        const preview = `
          <a href="${linkUrl}" target="_blank" style="text-decoration: none; color: inherit;">
              <div class="card mb-3" style="max-width: 540px;">
                  <div class="card-body">
                      <h4 class="card-title">${data.data.title}</h4>
                      <p class="card-text">${data.data.description}</p>
                  </div>
                  <div class="card-img-container">
                      <img src="${data.data.image.url}" class="card-img-bottom" alt="Preview image" style="width: 100%; height: 150px; object-fit: cover;">
                  </div>
              </div>
          </a>
        `;

        // Insert the preview after the anchor tag
        const previewContainer = document.createElement("div");
        previewContainer.innerHTML = preview;
        anchor.parentNode.insertBefore(previewContainer, anchor.nextSibling);
      })
      .catch((error) => console.error("Error fetching link preview:", error));
  });
}

// Call the function to create previews for all links when the document is ready
document.addEventListener("DOMContentLoaded", createPreviewForAllLinks);
