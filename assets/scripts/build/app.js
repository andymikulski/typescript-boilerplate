define(["require", "exports"], function(require, exports) {
    

    /**
    * Application class. Starts the app.
    * @class App
    */
    var App = (function () {
        function App() {
            return;
        }
        App.prototype.init = function () {
            console.log(['App init!']);
        };
        return App;
    })();
    return App;
});
