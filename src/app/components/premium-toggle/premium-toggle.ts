import { Component, EventEmitter, Input, Output, inject } from '@angular/core';
import { ToastService } from '../../services/toast';

@Component({
  selector: 'app-premium-toggle',
  standalone: true,
  imports: [],
  templateUrl: './premium-toggle.html',
  styleUrl: './premium-toggle.css'
})
export class PremiumToggle {
  @Input() excluirPremium: boolean = false;
  @Output() excluirPremiumChange = new EventEmitter<boolean>();

  private toastService = inject(ToastService);

  onToggle(event: Event) {
    const checked = (event.target as HTMLInputElement).checked;
    this.excluirPremiumChange.emit(checked);

    if (checked) {
      this.toastService.show('Se ha activado el filtro premium', 'primary');
    }
  }
}
