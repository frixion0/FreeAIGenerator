document.addEventListener('DOMContentLoaded', function() {
    const iframe = document.getElementById('contentFrame');
    
    // Monitor iframe navigation attempts
    let lastUrl = 'https://animehentai.art/';
    
    iframe.addEventListener('load', function() {
        try {
            // Check if the iframe is still on the allowed domain
            const currentUrl = iframe.contentWindow.location.href;
            if (!currentUrl.includes('animehentai.art')) {
                // Redirect back to allowed domain
                iframe.src = lastUrl;
                return;
            }
            lastUrl = currentUrl;
        } catch (error) {
            // Cross-origin error, check if we can access the URL
            console.log('Cross-origin access detected');
            