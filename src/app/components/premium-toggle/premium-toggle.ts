import { Component, EventEmitter, Input, Output, inject, ChangeDetectorRef } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-premium-toggle',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './premium-toggle.html',
  styleUrl: './premium-toggle.css'
})
export class PremiumToggle {
  @Input() excluirPremium: boolean = false;
  @Output() excluirPremiumChange = new EventEmitter<boolean>();

  showToast = false;
  toastMessage = '';
  private timeoutId: any;
  private cdr = inject(ChangeDetectorRef);

  onToggle(event: Event) {
    const checked = (event.target as HTMLInputElement).checked;
    this.excluirPremiumChange.emit(checked);
    this.showToast = true;
    this.toastMessage = `Se ha ${checked ? 'activado' : 'desactivado'} el filtro premium.`;

    if (this.timeoutId) {
      clearTimeout(this.timeoutId);
    }

    this.timeoutId = setTimeout(() => {
      this.showToast = false;
      this.cdr.detectChanges();
    }, 2000);
  }
}
