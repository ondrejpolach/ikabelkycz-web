/* Styles */
import './styles/index.css';
import './styles/products.css';
import './styles/navigation.css';
import './styles/footer.css';

/* Assets */

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

        self.currentOverallWrapper.animate({
            opacity: 1
        }, 500);
        self.footer.animate({
            opacity: 1
        }, 500);
    }

    const func = () => {

    }

    const onResize = () => {
    }    
};

window.app = new App();

document.addEventListener("DOMContentLoaded", () => {
    window.app.initialize();
});