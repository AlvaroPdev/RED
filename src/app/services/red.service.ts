import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

export interface RedDotsConfig {
  dotSize: number;
  dotSpacing: number;
  dotIntensity: number;
  animationSpeed: number;
  glitchEnabled: boolean;
  scanLinesEnabled: boolean;
}

export interface GlitchConfig {
  delay: number;
  duration: number;
  intensity: number;
  type: 'normal' | 'intense' | 'subtle';
}

@Injectable({
  providedIn: 'root'
})
export class RedDotsService {
  
  private readonly defaultConfig: RedDotsConfig = {
    dotSize: 1,
    dotSpacing: 14,
    dotIntensity: 0.4,
    animationSpeed: 4,
    glitchEnabled: true,
    scanLinesEnabled: true
  };

  private readonly defaultGlitchConfigs: GlitchConfig[] = [
    { delay: 0, duration: 15, intensity: 1, type: 'normal' },
    { delay: 6, duration: 18, intensity: 0.8, type: 'subtle' },
    { delay: 12, duration: 20, intensity: 0.9, type: 'normal' },
    { delay: 0, duration: 25, intensity: 1.2, type: 'intense' }
  ];

  private configSubject = new BehaviorSubject<RedDotsConfig>(this.defaultConfig);
  private isPausedSubject = new BehaviorSubject<boolean>(false);

  /**
   * Observable de la configuración actual
   */
  public config$: Observable<RedDotsConfig> = this.configSubject.asObservable();

  /**
   * Observable del estado de pausa
   */
  public isPaused$: Observable<boolean> = this.isPausedSubject.asObservable();

  /**
   * Obtiene la configuración actual
   */
  public getConfig(): RedDotsConfig {
    return this.configSubject.value;
  }

  /**
   * Actualiza la configuración
   */
  public updateConfig(config: Partial<RedDotsConfig>): void {
    const currentConfig = this.configSubject.value;
    const newConfig = { ...currentConfig, ...config };
    this.configSubject.next(newConfig);
  }

  /**
   * Obtiene las configuraciones de glitch
   */
  public getGlitchConfigs(): GlitchConfig[] {
    return this.defaultGlitchConfigs;
  }

  /**
   * Pausa o reanuda las animaciones
   */
  public togglePause(): void {
    const currentState = this.isPausedSubject.value;
    this.isPausedSubject.next(!currentState);
  }

  /**
   * Establece el estado de pausa
   */
  public setPaused(paused: boolean): void {
    this.isPausedSubject.next(paused);
  }

  /**
   * Resetea la configuración a los valores por defecto
   */
  public resetConfig(): void {
    this.configSubject.next(this.defaultConfig);
  }

  /**
   * Obtiene una configuración específica de glitch por índice
   */
  public getGlitchConfig(index: number): GlitchConfig | undefined {
    return this.defaultGlitchConfigs[index];
  }

  /**
   * Valida si una configuración es válida
   */
  public validateConfig(config: RedDotsConfig): boolean {
    return config.dotSize > 0 && 
           config.dotSpacing > 0 && 
           config.dotIntensity >= 0 && 
           config.dotIntensity <= 1 &&
           config.animationSpeed > 0;
  }
} 