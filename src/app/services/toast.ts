import { Injectable, signal } from '@angular/core';

export interface ToastMessage {
    text: string;
    type: 'primary' | 'secondary' | 'success' | 'danger' | 'warning' | 'info' | 'light' | 'dark';
    duration?: number;
}

@Injectable({
    providedIn: 'root'
})
export class ToastService {
    toast = signal<ToastMessage | null>(null);
    private timeoutId: any;

    show(text: string, type: 'primary' | 'secondary' | 'success' | 'danger' | 'warning' | 'info' | 'light' | 'dark' = 'info', duration: number = 3000) {
        this.toast.set({ text, type, duration });

        if (this.timeoutId) {
            clearTimeout(this.timeoutId);
        }

        this.timeoutId = setTimeout(() => {
            this.hide();
        }, duration);
    }

    hide() {
        this.toast.set(null);
    }
}
