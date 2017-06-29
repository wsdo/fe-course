import homeCss from "./home.less";
import template from "./home.html";

function home() {
    return {
        name: 'home',
        homeCss: homeCss,
        template: template
    }
}

export default home;