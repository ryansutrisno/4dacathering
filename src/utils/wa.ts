/**
 * WhatsApp link utility
 *
 * Build WA links from env variable with hardcoded fallback.
 */

/** Get WhatsApp number from environment */
export function getWA_NUMBER(): string {
  const num = import.meta.env.PUBLIC_WHATSAPP_NUMBER;
  if (!num) {
    return '6285727826219'; // fallback
  }
  return num;
}

/** Build full WhatsApp URL */
export function buildWALink(message?: string): string {
  const base = `https://wa.me/${getWA_NUMBER()}`;
  if (message) {
    return `${base}?text=${encodeURIComponent(message)}`;
  }
  return base;
}
