const button=document.querySelector('.menu-button');const nav=document.querySelector('#site-nav');button.addEventListener('click',()=>{const open=nav.classList.toggle('open');button.setAttribute('aria-expanded',open)});nav.querySelectorAll('a').forEach(link=>link.addEventListener('click',()=>{nav.classList.remove('open');button.setAttribute('aria-expanded','false')}));
const exploreDetails=document.querySelector('.site-header details');
if (exploreDetails) {
    let exploreCloseTimer = null;
    exploreDetails.addEventListener('mouseenter', () => {
        clearTimeout(exploreCloseTimer);
        exploreDetails.setAttribute('open', '');
    });
    exploreDetails.addEventListener('mouseleave', () => {
        exploreCloseTimer = setTimeout(() => {
            exploreDetails.removeAttribute('open');
        }, 150);
    });
}
