// main.js - nav toggles, simple payment placeholder, contact form placeholder, year fill
(function(){
  // Nav toggle (works for multiple toggle buttons)
  function setupToggles(){
    const toggles = document.querySelectorAll('.nav-toggle');
    toggles.forEach(btn=>{
      btn.addEventListener('click', ()=>{
        // find sibling nav in the header
        const header = btn.closest('.header-inner');
        if(!header) return;
        const nav = header.querySelector('.nav');
        if(nav) nav.classList.toggle('show');
      });
    });
  }

  // Year fill
  function setYears(){
    const y = new Date().getFullYear();
    ['yearHome','yearServices','yearAbout','yearContact','yearPayment'].forEach(id=>{
      const el = document.getElementById(id);
      if(el) el.textContent = y;
    });
  }

  // Services: Flutter store button placeholder
  function setupFlutterStore(){
    const fw = document.getElementById('flutter-store');
    if(!fw) return;
    fw.addEventListener('click', (e)=>{
      e.preventDefault();
      alert('Replace this placeholder with your Flutterwave store URL in services.html when ready.');
    });
  }

  // Contact form submit placeholder
  function setupContactForm(){
    const form = document.getElementById('contact-form');
    if(!form) return;
    form.addEventListener('submit', (e)=>{
      e.preventDefault();
      alert('Thanks! Your message was received locally. To send emails, integrate EmailJS or a backend.');
      form.reset();
    });
  }

  // Payment placeholder logic (currency + public key placeholder)
  function setupPayment(){
    const payBtn = document.getElementById('pay-btn');
    if(!payBtn) return;

    payBtn.addEventListener('click', ()=>{
      const name = document.getElementById('pay-name')?.value || '';
      const email = document.getElementById('pay-email')?.value || '';
      const amount = Number(document.getElementById('amount')?.value || 0);
      const currency = document.getElementById('currency')?.value || 'USD';
      const key = document.getElementById('flw-key')?.value?.trim() || '';

      if(!name){ alert('Please enter your name.'); return; }
      if(!email){ alert('Please enter your email.'); return; }
      if(!amount || amount <= 0){ alert('Please enter a valid amount.'); return; }
      if(!key){
        alert('Flutterwave public key is empty. Paste your public key to enable live payments. This is a placeholder flow.');
        return;
      }

      const symbol = (currency==='USD')? '$' : (currency==='EUR')? '€' : (currency==='GBP')? '£' : '₦';
      if(!confirm(`Proceed to pay ${symbol}${amount} (${currency}) for ${name}?`)) return;

      // -------------------------
      // PLACEHOLDER: Flutterwave init
      // Replace the block below with the official Flutterwave Checkout call.
      // Example (pseudocode):
      // FlutterwaveCheckout({
      //   public_key: key,
      //   tx_ref: 'tx-' + Date.now(),
      //   amount,
      //   currency,
      //   customer: { email, name },
      //   onclose: function() {},
      //   callback: function(resp) { console.log(resp); }
      // });
      // -------------------------
      alert('Placeholder: replace this with the Flutterwave Checkout call using your public key.');
    });
  }

  // init
  document.addEventListener('DOMContentLoaded', function(){
    setupToggles();
    setYears();
    setupFlutterStore();
    setupContactForm();
    setupPayment();
  });
})();

  const container = document.querySelector(".reviews-container");
  const cards = document.querySelectorAll(".review-card");
  let index = 0;

  function slideReviews() {
    const isMobile = window.innerWidth <= 768;
    const cardWidth = isMobile ? 275 : 265;
    const visible = isMobile ? 1 : 2;

    index++;

    if (index > cards.length - visible) {
      index = 0;
    }

    container.style.transform = `translateX(-${index * cardWidth}px)`;
  }

  setInterval(slideReviews, 4000);

