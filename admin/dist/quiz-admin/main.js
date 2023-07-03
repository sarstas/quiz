"use strict";
(self["webpackChunkquiz_admin"] = self["webpackChunkquiz_admin"] || []).push([["main"],{

/***/ 2886:
/*!********************************************************!*\
  !*** ./src/app/account-page/account-page.component.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AccountPageComponent": () => (/* binding */ AccountPageComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _providers_auth_auth_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../providers/auth/auth.service */ 6240);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 124);



class AccountPageComponent {
    constructor(_authService, _router) {
        this._authService = _authService;
        this._router = _router;
    }
    logout() {
        this._authService.logout().subscribe(() => {
            this._router.navigate(['/login']);
        });
    }
}
AccountPageComponent.ɵfac = function AccountPageComponent_Factory(t) { return new (t || AccountPageComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_providers_auth_auth_service__WEBPACK_IMPORTED_MODULE_0__.AuthService), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__.Router)); };
AccountPageComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: AccountPageComponent, selectors: [["app-account-page"]], decls: 14, vars: 0, consts: [[1, "navbar", "navbar-expand-lg", "bg-light"], [1, "container-fluid"], ["routerLink", "/", 1, "navbar-brand"], ["type", "button", "data-bs-toggle", "collapse", "data-bs-target", "#navbarSupportedContent", "aria-controls", "navbarSupportedContent", "aria-expanded", "false", "aria-label", "Toggle navigation", 1, "navbar-toggler"], [1, "navbar-toggler-icon"], ["id", "navbarSupportedContent", 1, "collapse", "navbar-collapse"], [1, "navbar-nav", "me-auto", "mb-2", "mb-lg-0"], [1, "nav-item"], ["routerLink", "/app/questions", "routerLinkActive", "active", 1, "nav-link"], ["type", "button", 1, "btn", "btn-outline-primary", 3, "click"]], template: function AccountPageComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "nav", 0)(1, "div", 1)(2, "a", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "Admin Panel");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](5, "span", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div", 5)(7, "ul", 6)(8, "li", 7)(9, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10, " Questions ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "button", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function AccountPageComponent_Template_button_click_11_listener() { return ctx.logout(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12, "Logout");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](13, "router-outlet");
    } }, dependencies: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterOutlet, _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterLinkWithHref, _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterLinkActive], encapsulation: 2 });


/***/ }),

/***/ 158:
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppRoutingModule": () => (/* binding */ AppRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _not_found_page_not_found_page_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./not-found-page/not-found-page.component */ 9030);
/* harmony import */ var _login_page_login_page_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./login-page/login-page.component */ 4680);
/* harmony import */ var _account_page_account_page_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./account-page/account-page.component */ 2886);
/* harmony import */ var _providers_auth_auth_guard__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./providers/auth/auth.guard */ 3894);
/* harmony import */ var _providers_auth_non_auth_guard__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./providers/auth/non-auth.guard */ 3303);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 2560);








const routes = [
    {
        path: 'login',
        component: _login_page_login_page_component__WEBPACK_IMPORTED_MODULE_1__.LoginPageComponent,
        canActivate: [_providers_auth_non_auth_guard__WEBPACK_IMPORTED_MODULE_4__.NonAuthGuard]
    },
    {
        path: 'app',
        component: _account_page_account_page_component__WEBPACK_IMPORTED_MODULE_2__.AccountPageComponent,
        canActivate: [_providers_auth_auth_guard__WEBPACK_IMPORTED_MODULE_3__.AuthGuard],
        children: [
            {
                path: 'questions',
                loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_questions_index_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./questions */ 2970)).then(({ QuestionsModule }) => QuestionsModule),
            },
            {
                path: '',
                redirectTo: '/app/questions',
                pathMatch: 'full'
            },
            {
                path: '**',
                component: _not_found_page_not_found_page_component__WEBPACK_IMPORTED_MODULE_0__.NotFoundPageComponent
            }
        ]
    },
    {
        path: '',
        redirectTo: 'app',
        pathMatch: 'full'
    },
    {
        path: '**',
        component: _not_found_page_not_found_page_component__WEBPACK_IMPORTED_MODULE_0__.NotFoundPageComponent
    }
];
class AppRoutingModule {
}
AppRoutingModule.ɵfac = function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); };
AppRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjector"]({ imports: [_angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterModule.forRoot(routes), _angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterModule] }); })();


/***/ }),

/***/ 5041:
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppComponent": () => (/* binding */ AppComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _providers_loading_global_state__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./providers/loading-global.state */ 1425);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 124);




function AppComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 1)(1, "div", 2)(2, "div", 3)(3, "strong", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "Loading...");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
} }
class AppComponent {
    constructor(loadingGlobalState) {
        this.loadingGlobalState = loadingGlobalState;
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_providers_loading_global_state__WEBPACK_IMPORTED_MODULE_0__.LoadingGlobalState)); };
AppComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 2, vars: 1, consts: [["class", "toast-container position-fixed bottom-0 end-0 p-3", 4, "ngIf"], [1, "toast-container", "position-fixed", "bottom-0", "end-0", "p-3"], [1, "toast", "show"], [1, "toast-body"], [1, "me-auto"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, AppComponent_div_1_Template, 5, 0, "div", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.loadingGlobalState.loading);
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.NgIf, _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterOutlet], encapsulation: 2 });


/***/ }),

/***/ 6747:
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppModule": () => (/* binding */ AppModule)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/platform-browser */ 4497);
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app-routing.module */ 158);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.component */ 5041);
/* harmony import */ var _not_found_page_not_found_page_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./not-found-page/not-found-page.component */ 9030);
/* harmony import */ var _login_page_login_page_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./login-page/login-page.component */ 4680);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _account_page_account_page_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./account-page/account-page.component */ 2886);
/* harmony import */ var _providers_auth_auth_state__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./providers/auth/auth.state */ 4741);
/* harmony import */ var _providers_auth_auth_initializer__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./providers/auth/auth.initializer */ 2533);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common/http */ 8987);












class AppModule {
}
AppModule.ɵfac = function AppModule_Factory(t) { return new (t || AppModule)(); };
AppModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent] });
AppModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineInjector"]({ providers: [
        {
            provide: _angular_core__WEBPACK_IMPORTED_MODULE_7__.APP_INITIALIZER,
            useFactory: _providers_auth_auth_initializer__WEBPACK_IMPORTED_MODULE_6__.authInitializer,
            deps: [_providers_auth_auth_state__WEBPACK_IMPORTED_MODULE_5__.AuthState],
            multi: true
        },
    ], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_8__.BrowserModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_9__.ReactiveFormsModule,
        _angular_common_http__WEBPACK_IMPORTED_MODULE_10__.HttpClientModule,
        _app_routing_module__WEBPACK_IMPORTED_MODULE_0__.AppRoutingModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent,
        _not_found_page_not_found_page_component__WEBPACK_IMPORTED_MODULE_2__.NotFoundPageComponent,
        _login_page_login_page_component__WEBPACK_IMPORTED_MODULE_3__.LoginPageComponent,
        _account_page_account_page_component__WEBPACK_IMPORTED_MODULE_4__.AccountPageComponent], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_8__.BrowserModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_9__.ReactiveFormsModule,
        _angular_common_http__WEBPACK_IMPORTED_MODULE_10__.HttpClientModule,
        _app_routing_module__WEBPACK_IMPORTED_MODULE_0__.AppRoutingModule] }); })();


/***/ }),

/***/ 4680:
/*!****************************************************!*\
  !*** ./src/app/login-page/login-page.component.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoginPageComponent": () => (/* binding */ LoginPageComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _providers_auth_auth_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../providers/auth/auth.service */ 6240);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 124);





class LoginPageComponent {
    constructor(_fb, _authService, _router) {
        this._fb = _fb;
        this._authService = _authService;
        this._router = _router;
    }
    ngOnInit() {
        this.form = this._fb.nonNullable.group({
            userName: ['user', _angular_forms__WEBPACK_IMPORTED_MODULE_1__.Validators.required],
            password: ['pass', _angular_forms__WEBPACK_IMPORTED_MODULE_1__.Validators.required],
        });
    }
    submit() {
        const body = this.form.getRawValue();
        this._authService.login(body).subscribe(() => {
            this._router.navigate(['/']);
        });
    }
}
LoginPageComponent.ɵfac = function LoginPageComponent_Factory(t) { return new (t || LoginPageComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_providers_auth_auth_service__WEBPACK_IMPORTED_MODULE_0__.AuthService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__.Router)); };
LoginPageComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: LoginPageComponent, selectors: [["app-login-page"]], decls: 14, vars: 1, consts: [[1, "container", "mt-3", 2, "max-width", "640px"], [3, "formGroup", "ngSubmit"], [1, "h3", "mb-3", "fw-normal"], [1, "mb-3"], ["for", "floatingInput"], ["type", "text", "id", "floatingInput", "placeholder", "Username", "formControlName", "userName", 1, "form-control"], ["for", "floatingPassword"], ["type", "password", "id", "floatingPassword", "placeholder", "Password", "formControlName", "password", 1, "form-control"], ["type", "submit", 1, "w-100", "btn", "btn-lg", "btn-primary"]], template: function LoginPageComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0)(1, "form", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngSubmit", function LoginPageComponent_Template_form_ngSubmit_1_listener() { return ctx.submit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "h1", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3, "Please sign in");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "div", 3)(5, "label", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6, "Username");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](7, "input", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "div", 3)(9, "label", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](10, "Password");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](11, "input", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "button", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](13, "Sign in");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("formGroup", ctx.form);
    } }, dependencies: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.FormControlName], encapsulation: 2 });


/***/ }),

/***/ 9030:
/*!************************************************************!*\
  !*** ./src/app/not-found-page/not-found-page.component.ts ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NotFoundPageComponent": () => (/* binding */ NotFoundPageComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 124);


class NotFoundPageComponent {
    constructor() { }
    ngOnInit() {
    }
}
NotFoundPageComponent.ɵfac = function NotFoundPageComponent_Factory(t) { return new (t || NotFoundPageComponent)(); };
NotFoundPageComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NotFoundPageComponent, selectors: [["app-not-found-page"]], decls: 5, vars: 0, consts: [[1, "bg-light", "p-5", "rounded", "mt-3"], ["routerLink", "/"]], template: function NotFoundPageComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0)(1, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Page is not found");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "a", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Back to site");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    } }, dependencies: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterLinkWithHref], encapsulation: 2 });


/***/ }),

/***/ 3894:
/*!**********************************************!*\
  !*** ./src/app/providers/auth/auth.guard.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AuthGuard": () => (/* binding */ AuthGuard)
/* harmony export */ });
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ 635);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _auth_state__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./auth.state */ 4741);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 124);





class AuthGuard {
    constructor(_authState, _router) {
        this._authState = _authState;
        this._router = _router;
    }
    canActivate(route, state) {
        return this._authState.get().pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.map)((user) => {
            if (user) {
                return true;
            }
            this._router.navigate(['/login'], {
                queryParams: {
                    returnUrl: state.url
                }
            });
            return false;
        }));
    }
}
AuthGuard.ɵfac = function AuthGuard_Factory(t) { return new (t || AuthGuard)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_auth_state__WEBPACK_IMPORTED_MODULE_0__.AuthState), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__.Router)); };
AuthGuard.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({ token: AuthGuard, factory: AuthGuard.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 2533:
/*!****************************************************!*\
  !*** ./src/app/providers/auth/auth.initializer.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "authInitializer": () => (/* binding */ authInitializer)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ 2673);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ 745);

function authInitializer(authState) {
    return () => authState.get().pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_0__.switchMap)((user) => {
        return user ? authState.set(user) : (0,rxjs__WEBPACK_IMPORTED_MODULE_1__.of)(null);
    }));
}


/***/ }),

/***/ 6240:
/*!************************************************!*\
  !*** ./src/app/providers/auth/auth.service.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AuthService": () => (/* binding */ AuthService)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ 5474);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _auth_state__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./auth.state */ 4741);



class AuthService {
    constructor(_authState) {
        this._authState = _authState;
    }
    login(body) {
        if (body.userName === 'user' && body.password === 'pass') {
            return this._authState.set({
                userName: body.userName
            });
        }
        return (0,rxjs__WEBPACK_IMPORTED_MODULE_1__.throwError)(new Error('Incorrect password'));
    }
    logout() {
        return this._authState.logout();
    }
}
AuthService.ɵfac = function AuthService_Factory(t) { return new (t || AuthService)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_auth_state__WEBPACK_IMPORTED_MODULE_0__.AuthState)); };
AuthService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({ token: AuthService, factory: AuthService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 4741:
/*!**********************************************!*\
  !*** ./src/app/providers/auth/auth.state.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AUTH_KEY": () => (/* binding */ AUTH_KEY),
/* harmony export */   "AuthState": () => (/* binding */ AuthState)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ 745);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);


const AUTH_KEY = 'user';
class AuthState {
    constructor() {
        this.user = null;
    }
    get() {
        const user = localStorage.getItem(AUTH_KEY);
        const result = user ? JSON.parse(user) : null;
        return (0,rxjs__WEBPACK_IMPORTED_MODULE_0__.of)(result);
    }
    set(user) {
        this.user = user;
        localStorage.setItem(AUTH_KEY, JSON.stringify(user));
        return (0,rxjs__WEBPACK_IMPORTED_MODULE_0__.of)(null);
    }
    logout() {
        this.user = null;
        localStorage.removeItem(AUTH_KEY);
        return (0,rxjs__WEBPACK_IMPORTED_MODULE_0__.of)(null);
    }
}
AuthState.ɵfac = function AuthState_Factory(t) { return new (t || AuthState)(); };
AuthState.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: AuthState, factory: AuthState.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 3303:
/*!**************************************************!*\
  !*** ./src/app/providers/auth/non-auth.guard.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NonAuthGuard": () => (/* binding */ NonAuthGuard)
/* harmony export */ });
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ 635);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _auth_state__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./auth.state */ 4741);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 124);





class NonAuthGuard {
    constructor(_authState, _router) {
        this._authState = _authState;
        this._router = _router;
    }
    canActivate(route, state) {
        return this._authState.get().pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.map)((user) => {
            if (!user) {
                return true;
            }
            this._router.navigate(['/']);
            return false;
        }));
    }
}
NonAuthGuard.ɵfac = function NonAuthGuard_Factory(t) { return new (t || NonAuthGuard)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_auth_state__WEBPACK_IMPORTED_MODULE_0__.AuthState), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__.Router)); };
NonAuthGuard.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({ token: NonAuthGuard, factory: NonAuthGuard.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 1425:
/*!***************************************************!*\
  !*** ./src/app/providers/loading-global.state.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoadingGlobalState": () => (/* binding */ LoadingGlobalState)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);

class LoadingGlobalState {
    constructor() {
        this.loading = false;
    }
}
LoadingGlobalState.ɵfac = function LoadingGlobalState_Factory(t) { return new (t || LoadingGlobalState)(); };
LoadingGlobalState.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: LoadingGlobalState, factory: LoadingGlobalState.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 2340:
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "environment": () => (/* binding */ environment)
/* harmony export */ });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ 4431:
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ 4497);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app/app.module */ 6747);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ 2340);




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.production) {
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.enableProdMode)();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__.platformBrowser().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_0__.AppModule)
    .catch(err => console.error(err));


/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendor"], () => (__webpack_exec__(4431)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main.js.map