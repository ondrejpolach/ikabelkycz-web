/* Styles */
import './styles/index.css';
import './styles/products.css';
import './styles/navigation.css';
import './styles/footer.css';

/* Assets */
import logo from './assets/logo-1.png';
import fb1 from './assets/banner-footer-1.svg';
import fb2 from './assets/banner-footer-2.svg';
import fb3 from './assets/banner-footer-3.svg';
import fb4 from './assets/banner-footer-4.svg';

/* Code */
const App = function () {
    const self = this;

    self.initialize = () => {

        func();

        window.addEventListener('resize', () => {
            onResize();
        })           
       
        window.addEventListener("ShoptetDOMContentLoaded", () => {
        });

        $(window).on('scroll', () => {            
        });

        $('body').animate({
            opacity: 1
        }, 500);       
    }

    const func = () => {
        const footerBanners = $('<div class="container banner-horizontal">');
        footerBanners.append(`<img src="${fb1}"/>`);
        footerBanners.append(`<img src="${fb2}"/>`);
        footerBanners.append(`<img src="${fb3}"/>`);
        footerBanners.append(`<img src="${fb4}"/>`);        
        footerBanners.insertBefore($('#footer .footer-newsletter'));
        $('#footer .banner-wrapper img').attr('src', logo);
        $('<div class="banner-grid">').insertAfter($('.type-detail .p-to-cart-block'));

        const customContainer = $('<div class="custom-detail-container">');
        customContainer.append($('.p-detail-tabs-wrapper')).append($('.p-param-block'))
        customContainer.insertAfter($('.p-detail-inner'));

        $('.login-wrapper .btn-login')
            .removeClass('btn-secondary')
            .addClass('btn-default')

        $('body')
            .removeClass('columns-3')
            .addClass('columns-4');

        $('.custom-footer').removeClass('elements-3')
        $('.custom-footer .col-sm-4').removeClass('col-sm-4')

        const newColumn = $('.custom-footer > div:nth-child(2)').clone();
        $('h4 span', newColumn).text('Průvodce nakupováním');
        $('ul',newColumn)
            .empty()
            .append('<li><a href="/sitemap.xml" title="Sitemap">Sitemap</a></li>')
            .append('<li><a href="/doprava-platba/" title="Doprava a Platba">Doprava a Platba</a></li>')
            .append('<li><a href="/reklamace-zbozi/" title="Reklamace Zboží">Reklamace Zboží</a></li>')
            .append('<li><a href="/vraceni-zbozi" title="Postup vrácení zboží ve 30 denní lhůtě">Postup vrácení zboží ve 30 denní lhůtě</a></li>')
            .append('<li><a href="/obchodni-podminky" title="Obchodní podmínky">Obchodní podmínky</a></li>')
        newColumn.insertAfter($('.custom-footer > div:nth-child(2)'))

    }

    const onResize = () => {
    }    
};

window.app = new App();

document.addEventListener("DOMContentLoaded", () => {
    window.app.initialize();
});