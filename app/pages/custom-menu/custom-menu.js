'use strict';
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var backdrop_1 = require('../backdrop/backdrop');
var config_1 = require('../../config/config');
var util_1 = require('../../util/util');
var keyboard_1 = require('../../util/keyboard');
var menu_gestures_1 = require('./menu-gestures');
var menu_controller_1 = require('./menu-controller');
var platform_1 = require('../../platform/platform');
var gesture_controller_1 = require('../../gestures/gesture-controller');
/**
 * @name Menu
 * @description
 * The Menu component is a navigation drawer that slides in from the side of the current
 * view. By default, it slides in from the left, but the side can be overridden. The menu
 * will be displayed differently based on the mode, however the display type can be changed
 * to any of the available [menu types](#menu-types). The menu element should be a sibling
 * to the app's content element. There can be any number of menus attached to the content.
 * These can be controlled from the templates, or programmatically using the [MenuController](../MenuController).
 *
 *
 * ### Opening/Closing Menus
 *
 * There are several ways to open or close a menu. The menu can be **toggled** open or closed
 * from the template using the [MenuToggle](../MenuToggle) directive. It can also be
 * **closed** from the template using the [MenuClose](../MenuClose) directive. To display a menu
 * programmatically, inject the [MenuController](../MenuController) provider and call any of the
 * `MenuController` methods.
 *
 *
 * ### Menu Types
 *
 * The menu supports several display types: `overlay`, `reveal` and `push`. By default,
 * it will use the correct type based on the mode, but this can be changed. The default
 * type for both Material Design and Windows mode is `overlay`, and `reveal` is the default
 * type for iOS mode. The menu type can be changed in the app's [config](../../config/Config)
 * via the `menuType` property, or passed in the `type` property on the `<ion-menu>` element.
 * See [usage](#usage) below for examples of changing the menu type.
 *
 *
 * ### Navigation Bar Behavior
 *
 * If a [MenuToggle](../MenuToggle) button is added to the [NavBar](../../nav/NavBar) of
 * a page, the button will only appear when the page it's in is currently a root page. The
 * root page is the initial page loaded in the app, or a page that has been set as the root
 * using the [setRoot](../../nav/NavController/#setRoot) method on the [NavController](../../nav/NavController).
 *
 * For example, say the application has two pages, `Page1` and `Page2`, and both have a
 * `MenuToggle` button in their navigation bars. Assume the initial page loaded into the app
 * is `Page1`, making it the root page. `Page1` will display the `MenuToggle` button, but once
 * `Page2` is pushed onto the navigation stack, the `MenuToggle` will not be displayed.
 *
 *
 * ### Persistent Menus
 *
 * Persistent menus display the [MenuToggle](../MenuToggle) button in the [NavBar](../../nav/NavBar)
 * on all pages in the navigation stack. To make a menu persistent set `persistent` to `true` on the
 * `<ion-menu>` element. Note that this will only affect the `MenuToggle` button in the `NavBar` attached
 * to the `Menu` with `persistent` set to true, any other `MenuToggle` buttons will not be affected.
 *
 *
 * @usage
 *
 * To add a menu to an application, the `<ion-menu>` element should be added as a sibling to
 * the content it belongs to. A [local variable](https://angular.io/docs/ts/latest/guide/user-input.html#local-variables)
 * should be added to the content element and passed to the menu element in the `content` property.
 * This tells the menu which content it is attached to, so it knows which element to watch for
 * gestures. In the below example, `content` is using [property binding](https://angular.io/docs/ts/latest/guide/template-syntax.html#!#property-binding)
 * because `mycontent` is a reference to the `<ion-nav>` element, and not a string.
 *
 * ```html
 * <ion-menu [content]="mycontent">
 *   <ion-content>
 *     <ion-list>
 *     ...
 *     </ion-list>
 *   </ion-content>
 * </ion-menu>
 *
 * <ion-nav #mycontent [root]="rootPage"></ion-nav>
 * ```
 *
 * ### Menu Side
 *
 * By default, menus slide in from the left, but this can be overridden by passing `right`
 * to the `side` property:
 *
 * ```html
 * <ion-menu side="right" [content]="mycontent">...</ion-menu>
 * ```
 *
 *
 * ### Menu Type
 *
 * The menu type can be changed by passing the value to `type` on the `<ion-menu>`:
 *
 * ```html
 * <ion-menu type="overlay" [content]="mycontent">...</ion-menu>
 * ```
 *
 * It can also be set in the app's config. The below will set the menu type to
 * `push` for all modes, and then set the type to `overlay` for the `ios` mode.
 *
 * ```ts
 * import { ionicBootstrap } from 'ionic-angular';
 *
 * ionicBootstrap(MyApp, customProviders, {
 *   menuType: 'push',
 *   platforms: {
 *     ios: {
 *       menuType: 'overlay',
 *     }
 *   }
 * });
 * ```
 *
 *
 * ### Displaying the Menu
 *
 * To toggle a menu from the template, add a button with the `menuToggle`
 * directive anywhere in the page's template:
 *
 * ```html
 * <button menuToggle>Toggle Menu</button>
 * ```
 *
 * To close a menu, add the `menuClose` button. It can be added anywhere
 * in the content, or even the menu itself. Below it is added to the menu's
 * content:
 *
 * ```html
 * <ion-menu [content]="mycontent">
 *   <ion-content>
 *     <ion-list>
 *       <button menuClose ion-item detail-none>Close Menu</button>
 *     </ion-list>
 *   </ion-content>
 * </ion-menu>
 * ```
 *
 * See the [MenuToggle](../MenuToggle) and [MenuClose](../MenuClose) docs
 * for more information on these directives.
 *
 * The menu can also be controlled from the Page by using the `MenuController`.
 * Inject the `MenuController` provider into the page and then call any of its
 * methods. In the below example, the `openMenu` method will open the menu
 * when it is called.
 *
 * ```ts
 * import { Component } from '@angular/core';
 * import { MenuController } from 'ionic-angular';
 *
 * @Component({...})
 * export class MyPage {
 *  constructor(public menuCtrl: MenuController) {}
 *
 *  openMenu() {
 *    this.menuCtrl.open();
 *  }
 * }
 * ```
 *
 * See the [MenuController](../MenuController) API docs for all of the methods
 * and usage information.
 *
 *
 * @demo /docs/v2/demos/menu/
 *
 * @see {@link /docs/v2/components#menus Menu Component Docs}
 * @see {@link ../MenuController MenuController API Docs}
 * @see {@link ../../nav/Nav Nav API Docs}
 * @see {@link ../../nav/NavController NavController API Docs}
 */
var Menu = (function () {
    function Menu(_menuCtrl, _elementRef, _config, _platform, _renderer, _keyboard, _zone, gestureCtrl) {
        this._menuCtrl = _menuCtrl;
        this._elementRef = _elementRef;
        this._config = _config;
        this._platform = _platform;
        this._renderer = _renderer;
        this._keyboard = _keyboard;
        this._zone = _zone;
        this.gestureCtrl = gestureCtrl;
        this._preventTime = 0;
        this._isEnabled = true;
        this._isSwipeEnabled = true;
        this._isPers = false;
        this._init = false;
        /**
         * @private
         */
        this.isOpen = false;
        /**
         * @output {event} When the menu is being dragged open.
         */
        this.ionDrag = new core_1.EventEmitter();
        /**
         * @output {event} When the menu has been opened.
         */
        this.ionOpen = new core_1.EventEmitter();
        /**
         * @output {event} When the menu has been closed.
         */
        this.ionClose = new core_1.EventEmitter();
    }
    Object.defineProperty(Menu.prototype, "enabled", {
        /**
         * @input {boolean} Whether or not the menu should be enabled. Default `true`.
         */
        get: function () {
            return this._isEnabled;
        },
        set: function (val) {
            this._isEnabled = util_1.isTrueProperty(val);
            this._setListeners();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Menu.prototype, "swipeEnabled", {
        /**
         * @input {boolean} Whether or not swiping the menu should be enabled. Default `true`.
         */
        get: function () {
            return this._isSwipeEnabled;
        },
        set: function (val) {
            this._isSwipeEnabled = util_1.isTrueProperty(val);
            this._setListeners();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Menu.prototype, "persistent", {
        /**
         * @input {string} Whether or not the menu should persist on child pages. Default `false`.
         */
        get: function () {
            return this._isPers;
        },
        set: function (val) {
            this._isPers = util_1.isTrueProperty(val);
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @private
     */
    Menu.prototype.ngOnInit = function () {
        var self = this;
        self._init = true;
        var content = self.content;
        self._cntEle = (content instanceof Node) ? content : content && content.getNativeElement && content.getNativeElement();
        // requires content element
        if (!self._cntEle) {
            return void 0;
        }
        // normalize the "side"
        if (self.side !== 'left' && self.side !== 'right') {
            self.side = 'left';
        }
        self._renderer.setElementAttribute(self._elementRef.nativeElement, 'side', self.side);
        // normalize the "type"
        if (!self.type) {
            self.type = self._config.get('menuType');
        }
        self._renderer.setElementAttribute(self._elementRef.nativeElement, 'type', self.type);
        // add the gestures
        self._cntGesture = new menu_gestures_1.MenuContentGesture(self, document.body);
        // register listeners if this menu is enabled
        // check if more than one menu is on the same side
        var hasEnabledSameSideMenu = self._menuCtrl.getMenus().some(function (m) {
            return m.side === self.side && m.enabled;
        });
        if (hasEnabledSameSideMenu) {
            // auto-disable if another menu on the same side is already enabled
            self._isEnabled = false;
        }
        self._setListeners();
        // create a reusable click handler on this instance, but don't assign yet
        self.onContentClick = function (ev) {
            if (self._isEnabled) {
                ev.preventDefault();
                ev.stopPropagation();
                self.close();
            }
        };
        self._cntEle.classList.add('menu-content');
        self._cntEle.classList.add('menu-content-' + self.type);
        // register this menu with the app's menu controller
        self._menuCtrl.register(self);
    };
    /**
     * @private
     */
    Menu.prototype.bdClick = function (ev) {
        void 0;
        ev.preventDefault();
        ev.stopPropagation();
        this._menuCtrl.close();
    };
    /**
     * @private
     */
    Menu.prototype._setListeners = function () {
        var self = this;
        if (self._init) {
            // only listen/unlisten if the menu has initialized
            if (self._isEnabled && self._isSwipeEnabled && !self._cntGesture.isListening) {
                // should listen, but is not currently listening
                void 0;
                self._cntGesture.listen();
            }
            else if (self._cntGesture.isListening && (!self._isEnabled || !self._isSwipeEnabled)) {
                // should not listen, but is currently listening
                void 0;
                self._cntGesture.unlisten();
            }
        }
    };
    /**
     * @private
     */
    Menu.prototype._getType = function () {
        if (!this._type) {
            this._type = menu_controller_1.MenuController.create(this.type, this, this._platform);
            if (this._config.get('animate') === false) {
                this._type.ani.duration(0);
            }
        }
        return this._type;
    };
    /**
     * @private
     */
    Menu.prototype.setOpen = function (shouldOpen, animated) {
        var _this = this;
        if (animated === void 0) { animated = true; }
        // _isPrevented is used to prevent unwanted opening/closing after swiping open/close
        // or swiping open the menu while pressing down on the MenuToggle button
        if ((shouldOpen && this.isOpen) || this._isPrevented()) {
            return Promise.resolve(this.isOpen);
        }
        this._before();
        return new Promise(function (resolve) {
            _this._getType().setOpen(shouldOpen, animated, function () {
                _this._after(shouldOpen);
                resolve(_this.isOpen);
            });
        });
    };
    /**
     * @private
     */
    Menu.prototype.swipeStart = function () {
        // user started swiping the menu open/close
        if (this._isEnabled && this._isSwipeEnabled && !this._isPrevented()) {
            this._before();
            this._getType().setProgressStart(this.isOpen);
        }
    };
    /**
     * @private
     */
    Menu.prototype.swipeProgress = function (stepValue) {
        // user actively dragging the menu
        if (this._isEnabled && this._isSwipeEnabled) {
            this._prevent();
            this._getType().setProgessStep(stepValue);
            this.ionDrag.emit(stepValue);
        }
    };
    /**
     * @private
     */
    Menu.prototype.swipeEnd = function (shouldCompleteLeft, shouldCompleteRight, stepValue) {
        var _this = this;
        // user has finished dragging the menu
        if (this._isEnabled && this._isSwipeEnabled) {
            this._prevent();
            var opening = !this.isOpen;
            var shouldComplete = false;
            if (opening) {
                shouldComplete = (this.side === 'right') ? shouldCompleteLeft : shouldCompleteRight;
            }
            else {
                shouldComplete = (this.side === 'right') ? shouldCompleteRight : shouldCompleteLeft;
            }
            this._getType().setProgressEnd(shouldComplete, stepValue, function (isOpen) {
                void 0;
                _this._after(isOpen);
            });
        }
    };
    Menu.prototype._before = function () {
        // this places the menu into the correct location before it animates in
        // this css class doesn't actually kick off any animations
        if (this._isEnabled) {
            this.getNativeElement().classList.add('show-menu');
            this.getBackdropElement().classList.add('show-backdrop');
            this._prevent();
            this._keyboard.close();
        }
    };
    Menu.prototype._after = function (isOpen) {
        // keep opening/closing the menu disabled for a touch more yet
        // only add listeners/css if it's enabled and isOpen
        // and only remove listeners/css if it's not open
        // emit opened/closed events
        if ((this._isEnabled && isOpen) || !isOpen) {
            this._prevent();
            this.isOpen = isOpen;
            this._cntEle.classList[isOpen ? 'add' : 'remove']('menu-content-open');
            this._cntEle.removeEventListener('click', this.onContentClick);
            if (isOpen) {
                this._cntEle.addEventListener('click', this.onContentClick);
                this.ionOpen.emit(true);
            }
            else {
                this.getNativeElement().classList.remove('show-menu');
                this.getBackdropElement().classList.remove('show-backdrop');
                this.ionClose.emit(true);
            }
        }
    };
    Menu.prototype._prevent = function () {
        // used to prevent unwanted opening/closing after swiping open/close
        // or swiping open the menu while pressing down on the MenuToggle
        this._preventTime = Date.now() + 20;
    };
    Menu.prototype._isPrevented = function () {
        return this._preventTime > Date.now();
    };
    /**
     * @private
     */
    Menu.prototype.open = function () {
        return this.setOpen(true);
    };
    /**
     * @private
     */
    Menu.prototype.close = function () {
        return this.setOpen(false);
    };
    /**
     * @private
     */
    Menu.prototype.toggle = function () {
        return this.setOpen(!this.isOpen);
    };
    /**
     * @private
     */
    Menu.prototype.enable = function (shouldEnable) {
        var _this = this;
        this.enabled = shouldEnable;
        if (!shouldEnable && this.isOpen) {
            // close if this menu is open, and should not be enabled
            this.close();
        }
        if (shouldEnable) {
            // if this menu should be enabled
            // then find all the other menus on this same side
            // and automatically disable other same side menus
            var sameSideMenus = this._menuCtrl
                .getMenus()
                .filter(function (m) { return m.side === _this.side && m !== _this; })
                .map(function (m) { return m.enabled = false; });
        }
        return this;
    };
    /**
     * @private
     */
    Menu.prototype.swipeEnable = function (shouldEnable) {
        this.swipeEnabled = shouldEnable;
        return this;
    };
    Menu.prototype.getNativeElement = function () {
        return this._elementRef.nativeElement;
    };
    /**
     * @private
     */
    Menu.prototype.getMenuElement = function () {
        return this.getNativeElement().querySelector('.menu-inner');
    };
    /**
     * @private
     */
    Menu.prototype.getContentElement = function () {
        return this._cntEle;
    };
    /**
     * @private
     */
    Menu.prototype.getBackdropElement = function () {
        return this.backdrop.getNativeElement();
    };
    Menu.prototype.width = function () {
        return this.getMenuElement().offsetWidth;
    };
    /**
     * @private
     */
    Menu.prototype.getMenuController = function () {
        return this._menuCtrl;
    };
    /**
     * @private
     */
    Menu.prototype.ngOnDestroy = function () {
        this._menuCtrl.unregister(this);
        this._cntGesture && this._cntGesture.destroy();
        this._type && this._type.destroy();
        this._resizeUnreg && this._resizeUnreg();
        this._cntEle = null;
    };
    __decorate([
        core_1.ViewChild(backdrop_1.Backdrop),
        __metadata('design:type', backdrop_1.Backdrop)
    ], Menu.prototype, "backdrop", void 0);
    __decorate([
        core_1.Input(),
        __metadata('design:type', Object)
    ], Menu.prototype, "content", void 0);
    __decorate([
        core_1.Input(),
        __metadata('design:type', String)
    ], Menu.prototype, "id", void 0);
    __decorate([
        core_1.Input(),
        __metadata('design:type', String)
    ], Menu.prototype, "side", void 0);
    __decorate([
        core_1.Input(),
        __metadata('design:type', String)
    ], Menu.prototype, "type", void 0);
    __decorate([
        core_1.Input(),
        __metadata('design:type', Boolean)
    ], Menu.prototype, "enabled", null);
    __decorate([
        core_1.Input(),
        __metadata('design:type', Boolean)
    ], Menu.prototype, "swipeEnabled", null);
    __decorate([
        core_1.Input(),
        __metadata('design:type', Boolean)
    ], Menu.prototype, "persistent", null);
    __decorate([
        core_1.Input(),
        __metadata('design:type', Number)
    ], Menu.prototype, "maxEdgeStart", void 0);
    __decorate([
        core_1.Output(),
        __metadata('design:type', core_1.EventEmitter)
    ], Menu.prototype, "ionDrag", void 0);
    __decorate([
        core_1.Output(),
        __metadata('design:type', core_1.EventEmitter)
    ], Menu.prototype, "ionOpen", void 0);
    __decorate([
        core_1.Output(),
        __metadata('design:type', core_1.EventEmitter)
    ], Menu.prototype, "ionClose", void 0);
    Menu = __decorate([
        core_1.Component({
            selector: 'ion-menu',
            host: {
                'role': 'navigation'
            },
            template: "\n    <div class=\"menu-inner\"><ng-content></ng-content></div>\n    <ion-backdrop (click)=\"bdClick($event)\" disableScroll=\"false\"></ion-backdrop>\n  ",
            directives: [backdrop_1.Backdrop],
            changeDetection: core_1.ChangeDetectionStrategy.OnPush,
            encapsulation: core_1.ViewEncapsulation.None,
        }),
        __metadata('design:paramtypes', [menu_controller_1.MenuController, core_1.ElementRef, config_1.Config, platform_1.Platform, core_1.Renderer, keyboard_1.Keyboard, core_1.NgZone, gesture_controller_1.GestureController])
    ], Menu);
    return Menu;
}());
exports.Menu = Menu;
