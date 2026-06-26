export function getCtaHref(): string {
  const bookingUrl = process.env.NEXT_PUBLIC_BOOKING_URL;
  if (bookingUrl) return bookingUrl;
  return "#lead-form";
}

export function getCtaHrefClient(): string {
  if (typeof window !== "undefined" && process.env.NEXT_PUBLIC_BOOKING_URL) {
    return process.env.NEXT_PUBLIC_BOOKING_URL;
  }
  return "#lead-form";
}
