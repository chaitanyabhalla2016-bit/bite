// app.js
import { getFavorites } from '../utils/favorites.js';

export function updateFavoriteCount() {
    const badge = document.querySelector(
        '#favorite-count-badge'
    );

    if (!badge) return;

    badge.textContent = getFavorites().length;
}

export function updateCopyrightYear() {
    const yearElement =
        document.querySelector('#current-year');

    if (!yearElement) return;

    yearElement.textContent =
        new Date().getFullYear();
}