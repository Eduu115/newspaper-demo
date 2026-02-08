import { Component, EventEmitter, Input, Output } from '@angular/core';

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

  onToggle(event: Event) {
    const checked = (event.target as HTMLInputElement).checked;
    this.excluirPremiumChange.emit(checked);
  }
}

