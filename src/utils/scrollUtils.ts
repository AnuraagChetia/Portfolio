/**
 * Scrolls smoothly to the element with the given ID
 */
export const scrollToElement = (elementId: string) => {
  const element = document.getElementById(elementId);
  if (element) {
    // Close any open mobile menu if it exists
    const mobileMenuButton = document.querySelector('[data-mobile-menu-close]');
    if (mobileMenuButton instanceof HTMLElement) {
      mobileMenuButton.click();
    }

    // Add a small delay before scrolling to allow the mobile menu to close
    setTimeout(() => {
      const headerOffset = 80; // Account for fixed header
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }, 100);
  }
};
