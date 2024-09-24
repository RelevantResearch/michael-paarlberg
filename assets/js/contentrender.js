// Function to create previews for all links
function createPreviewForAllLinks() {
  const $anchorTags = $("a"); // Select all anchor tags in the document

  $anchorTags.each(function() {
    const $anchor = $(this); // The current anchor element
    const linkUrl = $anchor.attr("href"); // Get the URL from the href attribute of the anchor tag

    // Check if the link has already been processed by looking for the data-preview attribute
    if ($anchor.data("preview")) {
      return; // Skip the link if it has already been processed
    }

    const apiUrl = `https://api.microlink.io/?url=${encodeURIComponent(linkUrl)}`;

    $.get(apiUrl)
      .done(function(data) {
        // Create preview card
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
