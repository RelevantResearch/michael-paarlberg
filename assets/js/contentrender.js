
// Function to create previews for all links
function createPreviewForAllLinks() {
  const $anchorTags = $("a"); // Select all anchor tags in the document

  const delay = 1000; // Delay in milliseconds between requests
  let requestsCount = 0; // Track the number of requests made


  $anchorTags.each(function() {
    const $anchor = $(this); // The current anchor element
    const linkUrl = $anchor.attr("href"); // Get the URL from the href attribute of the anchor tag


    // Check if the link has already been processed or if it doesn't have a valid URL
    if ($anchor.data("preview") || !linkUrl) {
      return; // Skip the link if it has already been processed or if linkUrl is invalid
    }

    // Check if the data is already in the cache
    if (linkPreviewCache[linkUrl]) {
      // Use cached data to create the preview
      createPreviewElement($anchor, linkPreviewCache[linkUrl]);
      return; // Skip the API call since we have cached data
    }

    const apiUrl = `https://api.microlink.io/?url=${encodeURIComponent(linkUrl)}`;

    // Introduce a slight delay between requests to avoid overwhelming the API
    setTimeout(() => {
      $.get(apiUrl)
        .done(function(data) {
          // Store the fetched data in the cache
          linkPreviewCache[linkUrl] = data.data; 

          // Create preview card using fetched data
          createPreviewElement($anchor, data.data);
        })
        .fail(function(jqXHR, textStatus, errorThrown) {
          console.error("Error fetching link preview:", textStatus, errorThrown);
        });
    }, requestsCount * delay); // Increase delay based on request count

    requestsCount++;
  });
}

// Function to create the preview element and insert it after the anchor tag
function createPreviewElement($anchor, previewData) {
  const linkUrl = $anchor.attr("href");
  
  // Create preview card
  const preview = `
    <a href="${linkUrl}" target="_blank" style="text-decoration: none; color: inherit;">
        <div class="card mb-3" style="max-width: 540px;">
            <div class="card-body">
                <h4 class="card-title">${previewData.title}</h4>
                <p class="card-text">${previewData.description}</p>
            </div>
            <div class="card-img-container">
                <img src="${previewData.image.url}" class="card-img-bottom" alt="Preview image" style="width: 100%; height: 150px; object-fit: cover;">
            </div>
        </div>
    </a>
  `;

  // Insert the preview after the anchor tag
  const $previewContainer = $(preview);
  $anchor.after($previewContainer);

  // Mark this link as processed by setting a data-preview attribute
  $anchor.data("preview", true);

    // Check if the link has already been processed by looking for the data-preview attribute
    if ($anchor.data("preview")) {
      return; // Skip the link if it has already been processed
    }

    const apiUrl = `https://api.microlink.io/?url=${encodeURIComponent(linkUrl)}`;

    $.get(apiUrl)
      .done(function(data) {
        // Create preview card

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

        const $previewContainer = $(preview);
        $anchor.after($previewContainer);

        // Mark this link as processed by setting a data-preview attribute
        $anchor.data("preview", true);
      })
      .fail(function(jqXHR, textStatus, errorThrown) {
        console.error("Error fetching link preview:", textStatus, errorThrown);
      });
  });

}

// Call the function to create previews when the document is fully loaded
$(document).ready(createPreviewForAllLinks);

