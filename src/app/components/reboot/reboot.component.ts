import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DecimalPipe } from '@angular/common';

@Component({
  selector: 'app-reboot',
  templateUrl: './reboot.component.html',
  styleUrl: './reboot.component.css',
  imports: [DecimalPipe]
})
export class RebootComponent implements OnInit {
  progressPercentage = 0;
  progressBarText = '';

  constructor(private router: Router) {}

  ngOnInit() {
    this.startProgress();
    
    // Navegar a home después de 3 segundos
    setTimeout(() => {
      this.router.navigate(['/home']);
    }, 1000);
  }

  startProgress() {
    const duration = 1000; // 3 segundos
    const interval = 50; // Actualizar cada 50ms
    const steps = duration / interval;
    const increment = 100 / steps;
    const totalChars = 40; // Número total de caracteres en la barra
    
    const timer = setInterval(() => {
      this.progressPercentage += increment;
      if (this.progressPercentage >= 100) {
        this.progressPercentage = 100;
        clearInterval(timer);
      }
      
      // Generar el texto de la barra de progreso
      const filledChars = Math.floor((this.progressPercentage / 100) * totalChars);
      const emptyChars = totalChars - filledChars;
      
      this.progressBarText = '#'.repeat(filledChars) + '_'.repeat(emptyChars);
    }, interval);
  }
} 