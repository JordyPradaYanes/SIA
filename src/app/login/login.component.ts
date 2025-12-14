// ============================================
// login.component.ts
// ============================================
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
  showPassword = false;
  isLoading = false;
  showNotification = false;
  notificationMessage = '';
  notificationType: 'success' | 'error' = 'success';

  formData = {
    codigo: '',
    documento: '',
    password: ''
  };

  // Credenciales válidas
  private validCredentials = {
    codigo: '192099',
    documento: '1091355245',
    password: 'JORDY123#'
  };

  togglePassword(): void {
    this.showPassword = !this.showPassword;
  }

  validateCredentials(): boolean {
    return (
      this.formData.codigo === this.validCredentials.codigo &&
      this.formData.documento === this.validCredentials.documento &&
      this.formData.password === this.validCredentials.password
    );
  }

  showNotificationMessage(message: string, type: 'success' | 'error'): void {
    this.notificationMessage = message;
    this.notificationType = type;
    this.showNotification = true;

    setTimeout(() => {
      this.showNotification = false;
    }, 4000);
  }

  handleLogin(): void {
    // Validar campos vacíos
    if (!this.formData.codigo || !this.formData.documento || !this.formData.password) {
      this.showNotificationMessage('Por favor complete todos los campos', 'error');
      return;
    }

    this.isLoading = true;

    // Simular llamada a API
    setTimeout(() => {
      if (this.validateCredentials()) {
        this.showNotificationMessage(
          `¡Bienvenido! Código: ${this.formData.codigo}`,
          'success'
        );
        
        // Aquí puedes redirigir al dashboard
        setTimeout(() => {
          console.log('Redirigiendo al dashboard...');
          // this.router.navigate(['/dashboard']);
        }, 1500);
      } else {
        this.showNotificationMessage(
          'Credenciales incorrectas. Por favor verifique sus datos.',
          'error'
        );
      }
      this.isLoading = false;
    }, 1000);
  }

  handleKeyPress(event: KeyboardEvent): void {
    if (event.key === 'Enter') {
      this.handleLogin();
    }
  }

  resetPassword(): void {
    console.log('Recuperar contraseña...');
    this.showNotificationMessage(
      'Funcionalidad de recuperación de contraseña próximamente',
      'error'
    );
  }
}