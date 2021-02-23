/* Styles */
import './styles/index.css';
import './styles/products.css';
import './styles/navigation.css';
import './styles/footer.css';

/* Assets */
import logo from './assets/logo-1.png';

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
        $('#footer').prepend('<div class="container banner-horizontal">');
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