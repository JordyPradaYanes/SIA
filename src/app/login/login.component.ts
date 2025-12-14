import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  // Propiedades del formulario
  codigo: string = '';
  documento: string = '1091355246';
  contrasena: string = '';
  passwordVisible: boolean = false;
  errorMessage: string = '';

  /**
   * Alterna la visibilidad de la contraseña
   */
  togglePasswordVisibility(): void {
    this.passwordVisible = !this.passwordVisible;
  }

  /**
   * Maneja el envío del formulario
   */
  onSubmit(): void {
    // Reiniciar mensaje de error
    this.errorMessage = '';

    // Validación básica
    if (!this.codigo || !this.documento || !this.contrasena) {
      this.errorMessage = 'Por favor, complete todos los campos para continuar.';
      return;
    }

    // Lógica de autenticación
    const loginData = {
      codigo: this.codigo,
      documento: this.documento,
      contrasena: this.contrasena
    };

    console.log('Intento de login:', loginData);
    
    // Aquí implementarías la llamada al servicio de autenticación
    // Ejemplo:
    // this.authService.login(loginData).subscribe(...)
  }

  /**
   * Maneja el clic en "Olvidó su contraseña"
   */
  forgotPassword(): void {
    console.log('Recuperar contraseña');
    // Implementar navegación o modal para recuperación de contraseña
  }
}