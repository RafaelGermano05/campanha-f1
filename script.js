document.addEventListener('DOMContentLoaded', function() {
      // Animação das barras de progresso
      const progressBars = document.querySelectorAll('.progress-fill');
      
      progressBars.forEach(bar => {
        const targetWidth = bar.style.width;
        bar.style.width = '0%';
        
        setTimeout(() => {
          bar.style.width = targetWidth;
        }, 300);
      });
      
      const teamCards = document.querySelectorAll('.team-card');
      
      teamCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
          if (this.classList.contains('ferrari')) {
            this.style.boxShadow = '0 4px 20px rgba(225, 6, 0, 0.3)';
          } else if (this.classList.contains('mclaren')) {
            this.style.boxShadow = '0 4px 20px rgba(255, 135, 0, 0.3)';
          } else if (this.classList.contains('mercedes')) {
            this.style.boxShadow = '0 4px 20px rgba(0, 210, 190, 0.3)';
          }
        });
        
        card.addEventListener('mouseleave', function() {
          this.style.boxShadow = 'none';
        });
      });
    });