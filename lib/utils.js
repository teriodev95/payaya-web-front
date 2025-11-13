import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

/**
 * Merges Tailwind class names, resolving any conflicts.
 *
 * @param inputs - An array of class names to merge.
 * @returns A string of merged and optimized class names.
 */
export function cn(...inputs) {
  return twMerge(clsx(inputs));
}

/**
 * Smoothly scrolls to a section by its ID with offset for fixed header.
 *
 * @param sectionId - The ID of the section to scroll to (without #)
 * @param headerOffset - The height of the fixed header (default: 0px)
 */
export function scrollToSection(sectionId, headerOffset = 0) {
  const element = document.getElementById(sectionId);
  if (element) {
    const elementPosition = element.getBoundingClientRect().top;
    const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

    window.scrollTo({
      top: offsetPosition,
      behavior: 'smooth'
    });
  }
}

/**
 * Formats a number into localized currency (es-MX) without fractional digits
 * @param amount { number | string }
 * @returns {string}
 */
export function formatCurrency(amount) {
    console.log('formatting', amount)
    const value = Number(amount);
    return new Intl.NumberFormat('es-MX', {
        style: 'currency',
        currency: 'MXN',
        minimumFractionDigits: 0,
        maximumFractionDigits: 2,
    }).format(value) + ' MXN';
};
