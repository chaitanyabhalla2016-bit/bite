// app.js
import { getFavorites } from '../utils/favorites.js';
import { animateCounter } from '../utils/misc.js';

export function updateFavoriteCount() {
    const badge = document.querySelector('#favorite-count-badge');
    if (!badge) return;
    const targetNumber = getFavorites().length;
    // Simply pass the badge and target count (no suffix needed here)
    animateCounter(badge, targetNumber);
}

export function updateCopyrightYear() {
    const yearElement =
        document.querySelector('#current-year');

    if (!yearElement) return;

    yearElement.textContent =
        new Date().getFullYear();
}