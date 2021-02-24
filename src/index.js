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
        footerBanners.insertAfter($('#footer .footer-newsletter'));
        $('#footer .banner-wrapper img').attr('src', logo);
        $('<div class="banner-grid">').insertAfter($('.type-detail .p-to-cart-block'));

        const customContainer = $('<div class="custom-detail-container">');
        customContainer.append($('.p-detail-tabs-wrapper')).append($('.p-param-block'))
        customContainer.insertAfter($('.p-detail-inner'));
    }

    const onResize = () => {
    }    
};

window.app = new App();

document.addEventListener("DOMContentLoaded", () => {
    window.app.initialize();
});