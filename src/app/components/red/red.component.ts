import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';

interface GlitchConfig {
  delay: number;
  duration: number;
  intensity: number;
}

@Component({
  selector: 'app-red',
  imports: [CommonModule],
  templateUrl: './red.component.html',
  styleUrl: './red.component.css',
})
export class RedComponent implements OnInit, OnDestroy {
  
  /**
   * Estado de pausa de las animaciones
   */
  public isPaused = false;

  /**
   * Configuración de los elementos de glitch
   */
  private readonly glitchConfigs: GlitchConfig[] = [
    { delay: 0, duration: 15, intensity: 1 },
    { delay: 6, duration: 18, intensity: 0.8 },
    { delay: 12, duration: 20, intensity: 0.9 },
    { delay: 0, duration: 25, intensity: 1.2 }
  ];

  /**
   * Elementos de glitch para el template
   */
  public glitchElements = [
    { class: '', delay: 0, duration: 15 },
    { class: 'glitch-2', delay: 6, duration: 18 },
    { class: 'glitch-3', delay: 12, duration: 20 },
    { class: 'glitch-intense', delay: 0, duration: 25 }
  ];

  /**
   * Lifecycle hook que se ejecuta al inicializar el componente
   */
  ngOnInit(): void {
    this.initializeComponent();
  }

  /**
   * Lifecycle hook que se ejecuta al destruir el componente
   */
  ngOnDestroy(): void {
    this.cleanup();
  }

  /**
   * Inicializa el componente
   */
  private initializeComponent(): void {
    // Configuración inicial del componente
    console.log('RedComponent initialized');
  }

  /**
   * Limpia recursos al destruir el componente
   */
  private cleanup(): void {
    // Cleanup si es necesario
    console.log('RedComponent destroyed');
  }

  /**
   * TrackBy function para optimizar el rendimiento del ngFor
   */
  public trackByIndex(index: number): number {
    return index;
  }

  /**
   * Pausa o reanuda las animaciones
   */
  public togglePause(): void {
    this.isPaused = !this.isPaused;
  }

  /**
   * Obtiene la configuración de glitch por índice
   */
  public getGlitchConfig(index: number): GlitchConfig | undefined {
    return this.glitchConfigs[index];
  }
}
