document.addEventListener('DOMContentLoaded', function() {
            const deportesHeaders = document.querySelectorAll('.deporte-header');
            
            deportesHeaders.forEach(header => {
                header.addEventListener('click', function() {
                    const deporte = this.parentElement;
                    deporte.classList.toggle('deporte-activo');
                });
            });
        });