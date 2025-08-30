           
           
           
           // No le hagan caso a este codigo simplemente es para "evitar" un problema de reproducción de video de youtube



    if (window.location.hostname === 'localhost' || window.location.protocol === 'file:') {

        document.querySelector('.video-warning').style.display = 'block';
        
        setTimeout(function() {
            const iframe = document.querySelector('iframe');
            if (iframe && !iframe.src.includes('enablejsapi=1')) {
                iframe.src = iframe.src + '?enablejsapi=1';
            }
        }, 1000);
    }
    
    function openVideo() {
        window.open('https://www.youtube.com/watch?v=2eb4bEiQOLA', '_blank');
    }
    
    window.addEventListener('message', function(event) {
    });
    
    setTimeout(function() {
        const iframe = document.querySelector('iframe');
        if (iframe) {
            try {
                if (iframe.contentWindow.document) {
                    console.log("El iframe se cargó correctamente");
                }
            } catch (e) {
                console.log("Error al cargar el iframe:", e);
                document.querySelector('.video-warning').style.display = 'block';
            }
        }
    }, 3000);