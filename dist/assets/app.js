const toggle = document.querySelector(".nav-toggle");
const links = document.querySelector(".nav-links");

toggle?.addEventListener("click", () => {
  const open = links.classList.toggle("open");
  toggle.setAttribute("aria-expanded", String(open));
});

const consentKey = "analytics-consent";
let storedConsent = null;
try { storedConsent = localStorage.getItem(consentKey); } catch {}

function updateConsent(choice) {
  try { localStorage.setItem(consentKey, choice); } catch {}
  window.gtag?.("consent", "update", {
    analytics_storage: choice === "granted" ? "granted" : "denied",
    ad_storage: "denied",
    ad_user_data: "denied",
    ad_personalization: "denied"
  });
  if (choice === "granted") {
    window.gtag?.("event", "page_view", {
      page_title: document.title,
      page_location: location.href,
      page_path: location.pathname
    });
  }
  document.querySelector(".consent-banner")?.remove();
}

function showConsentBanner() {
  document.querySelector(".consent-banner")?.remove();
  const banner = document.createElement("section");
  banner.className = "consent-banner";
  banner.setAttribute("aria-label", "Analytics privacy choices");
  banner.innerHTML = `<div><strong>Optional analytics</strong><p>Allow anonymous usage measurement to help decide which guides to maintain. Advertising signals stay disabled. <a href="/privacy/">Details</a></p></div><div class="consent-actions"><button type="button" data-consent="denied">Decline</button><button class="primary" type="button" data-consent="granted">Allow analytics</button></div>`;
  banner.addEventListener("click", (event) => {
    const choice = event.target.closest("[data-consent]")?.dataset.consent;
    if (choice) updateConsent(choice);
  });
  document.body.append(banner);
}

document.querySelectorAll(".privacy-action").forEach((button) => button.addEventListener("click", showConsentBanner));
if (!storedConsent) showConsentBanner();
