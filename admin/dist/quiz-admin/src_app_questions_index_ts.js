"use strict";
(self["webpackChunkquiz_admin"] = self["webpackChunkquiz_admin"] || []).push([["src_app_questions_index_ts"],{

/***/ 2851:
/*!************************************************!*\
  !*** ./src/app/providers/question.resolver.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "QuestionResolver": () => (/* binding */ QuestionResolver)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ 2313);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 3158);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ 5474);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _question_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./question.service */ 3875);
/* harmony import */ var _loading_global_state__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./loading-global.state */ 1425);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 124);






class QuestionResolver {
    constructor(_questionService, _loadingGlobalState, _router) {
        this._questionService = _questionService;
        this._loadingGlobalState = _loadingGlobalState;
        this._router = _router;
    }
    resolve(route, state) {
        const id = +route.paramMap.get('id');
        this._loadingGlobalState.loading = true;
        return this._questionService.get(id).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_2__.finalize)(() => this._loadingGlobalState.loading = false), (0,rxjs__WEBPACK_IMPORTED_MODULE_3__.catchError)((err) => {
            this._router.navigate(['/']);
            return (0,rxjs__WEBPACK_IMPORTED_MODULE_4__.throwError)(err);
        }));
    }
}
QuestionResolver.ɵfac = function QuestionResolver_Factory(t) { return new (t || QuestionResolver)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵinject"](_question_service__WEBPACK_IMPORTED_MODULE_0__.QuestionService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵinject"](_loading_global_state__WEBPACK_IMPORTED_MODULE_1__.LoadingGlobalState), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__.Router)); };
QuestionResolver.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjectable"]({ token: QuestionResolver, factory: QuestionResolver.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 3875:
/*!***********************************************!*\
  !*** ./src/app/providers/question.service.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "QuestionService": () => (/* binding */ QuestionService)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ 8987);


class QuestionService {
    constructor(_http) {
        this._http = _http;
    }
    get api() {
        return `/api/questions/`;
    }
    getAll() {
        return this._http.get(`${this.api}`);
    }
    get(id) {
        return this._http.get(`${this.api}${id}`);
    }
    create(question) {
        return this._http.post(`${this.api}`, question);
    }
    edit(question) {
        return this._http.put(`${this.api}${question.id}`, question);
    }
    remove(id) {
        return this._http.delete(`${this.api}${id}`);
    }
}
QuestionService.ɵfac = function QuestionService_Factory(t) { return new (t || QuestionService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpClient)); };
QuestionService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: QuestionService, factory: QuestionService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 5634:
/*!**********************************************************************!*\
  !*** ./src/app/questions/edit-page/questions-edit-page.component.ts ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "QuestionsEditPageComponent": () => (/* binding */ QuestionsEditPageComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 124);



class QuestionsEditPageComponent {
    constructor(_fb, _activatedRoute) {
        this._fb = _fb;
        this._activatedRoute = _activatedRoute;
        this.question = null;
    }
    ngOnInit() {
        this.question = this._activatedRoute.snapshot.data['question'];
        this.form = this._fb.nonNullable.group({
            question: ['']
        });
        if (this.question) {
            this.form.patchValue(this.question);
        }
    }
}
QuestionsEditPageComponent.ɵfac = function QuestionsEditPageComponent_Factory(t) { return new (t || QuestionsEditPageComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__.ActivatedRoute)); };
QuestionsEditPageComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: QuestionsEditPageComponent, selectors: [["app-questions-edit-page"]], decls: 46, vars: 2, consts: [[1, "mt-3", "container"], [1, "mb-3"], [3, "formGroup"], ["for", "question", 1, "form-label"], ["id", "question", "rows", "3", "formControlName", "question", 1, "form-control"], ["for", "desc", 1, "form-label"], ["id", "desc", "rows", "3", 1, "form-control"], ["aria-label", "Default select example", 1, "mb-3", "form-select"], ["value", "2"], ["value", "1"], [1, "row", "mb-2", "align-items-center"], [1, "col"], ["type", "text", 1, "form-control"], [1, "col-auto"], [1, "form-check"], ["type", "checkbox", "id", "correct1", 1, "form-check-input"], ["for", "correct1", 1, "form-check-label"], ["type", "button", 1, "btn", "btn-danger"], ["type", "checkbox", "id", "correct2", 1, "form-check-input"], ["for", "correct2", 1, "form-check-label"], ["type", "submit", 1, "btn", "btn-outline-primary"], ["type", "submit", 1, "btn", "btn-primary"]], template: function QuestionsEditPageComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0)(1, "h1", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "form", 2)(4, "div", 1)(5, "label", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Question");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "textarea", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 1)(9, "label", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Description");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "textarea", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 1)(13, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Answers");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "select", 7)(16, "option", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Options");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "option", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Text Field");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 10)(21, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "input", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 13)(24, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](25, "input", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "label", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, " Correct? ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 13)(29, "button", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "Remove");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 10)(32, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](33, "input", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "div", 13)(35, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](36, "input", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "label", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, " Correct? ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "div", 13)(40, "button", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, "Remove");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "button", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, "Add more");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "button", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, "Save");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.question ? "Edit Question" : "Create a Question");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.form);
    } }, dependencies: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__.NgSelectOption, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵNgSelectMultipleOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.FormControlName], encapsulation: 2 });


/***/ }),

/***/ 2970:
/*!************************************!*\
  !*** ./src/app/questions/index.ts ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "QuestionsModule": () => (/* reexport safe */ _questions_module__WEBPACK_IMPORTED_MODULE_0__.QuestionsModule)
/* harmony export */ });
/* harmony import */ var _questions_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./questions.module */ 9482);



/***/ }),

/***/ 1413:
/*!**************************************************************************!*\
  !*** ./src/app/questions/master-page/questions-master-page.component.ts ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "QuestionsMasterPageComponent": () => (/* binding */ QuestionsMasterPageComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _providers_question_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../providers/question.service */ 3875);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 124);




const _c0 = function (a2) { return ["/app", "questions", a2]; };
function QuestionsMasterPageComponent_tr_18_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "tr")(1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "td", 8)(6, "a", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, "Edit");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8, " \u00A0 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "button", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10, " Remove ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
} if (rf & 2) {
    const question_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](question_r1.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](question_r1.question);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](3, _c0, question_r1.id));
} }
class QuestionsMasterPageComponent {
    constructor(_questionService) {
        this._questionService = _questionService;
        this.questions = [];
    }
    ngOnInit() {
        this._questionService.getAll().subscribe((questions) => this.questions = questions);
    }
}
QuestionsMasterPageComponent.ɵfac = function QuestionsMasterPageComponent_Factory(t) { return new (t || QuestionsMasterPageComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_providers_question_service__WEBPACK_IMPORTED_MODULE_0__.QuestionService)); };
QuestionsMasterPageComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: QuestionsMasterPageComponent, selectors: [["app-questions-master-page"]], decls: 19, vars: 1, consts: [[1, "container"], [1, "mb-3"], [1, "row", "mb-3"], [1, "col"], [1, "col-auto"], ["routerLink", "/app/questions/create", 1, "btn", "btn-outline-primary"], [1, "table"], [4, "ngFor", "ngForOf"], [1, "text-nowrap"], [1, "btn", "btn-outline-primary", 3, "routerLink"], ["type", "button", "data-bs-toggle", "modal", "data-bs-target", "#confirm", 1, "btn", "btn-danger"]], template: function QuestionsMasterPageComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0)(1, "h1", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Questions");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 4)(6, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, "Create a Question");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "table", 6)(9, "thead")(10, "tr")(11, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12, "ID");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14, "Question text");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](16, "Actions");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](18, QuestionsMasterPageComponent_tr_18_Template, 11, 5, "tr", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](18);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.questions);
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.NgForOf, _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterLinkWithHref], encapsulation: 2 });


/***/ }),

/***/ 3787:
/*!*******************************************************!*\
  !*** ./src/app/questions/questions-routing.module.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "QuestionsRoutingModule": () => (/* binding */ QuestionsRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _not_found_page_not_found_page_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../not-found-page/not-found-page.component */ 9030);
/* harmony import */ var _master_page_questions_master_page_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./master-page/questions-master-page.component */ 1413);
/* harmony import */ var _edit_page_questions_edit_page_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./edit-page/questions-edit-page.component */ 5634);
/* harmony import */ var _questions_questions_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./questions/questions.component */ 9152);
/* harmony import */ var _providers_question_resolver__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../providers/question.resolver */ 2851);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 2560);








const routes = [
    {
        path: '',
        component: _questions_questions_component__WEBPACK_IMPORTED_MODULE_3__.QuestionsComponent,
        children: [
            {
                path: '',
                component: _master_page_questions_master_page_component__WEBPACK_IMPORTED_MODULE_1__.QuestionsMasterPageComponent,
            },
            {
                path: 'create',
                component: _edit_page_questions_edit_page_component__WEBPACK_IMPORTED_MODULE_2__.QuestionsEditPageComponent,
            },
            {
                path: ':id',
                component: _edit_page_questions_edit_page_component__WEBPACK_IMPORTED_MODULE_2__.QuestionsEditPageComponent,
                resolve: {
                    question: _providers_question_resolver__WEBPACK_IMPORTED_MODULE_4__.QuestionResolver
                }
            },
            {
                path: '**',
                component: _not_found_page_not_found_page_component__WEBPACK_IMPORTED_MODULE_0__.NotFoundPageComponent
            },
        ]
    }
];
class QuestionsRoutingModule {
}
QuestionsRoutingModule.ɵfac = function QuestionsRoutingModule_Factory(t) { return new (t || QuestionsRoutingModule)(); };
QuestionsRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineNgModule"]({ type: QuestionsRoutingModule });
QuestionsRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjector"]({ imports: [_angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterModule.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsetNgModuleScope"](QuestionsRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterModule] }); })();


/***/ }),

/***/ 9482:
/*!***********************************************!*\
  !*** ./src/app/questions/questions.module.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "QuestionsModule": () => (/* binding */ QuestionsModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _questions_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./questions-routing.module */ 3787);
/* harmony import */ var _master_page_questions_master_page_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./master-page/questions-master-page.component */ 1413);
/* harmony import */ var _edit_page_questions_edit_page_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./edit-page/questions-edit-page.component */ 5634);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _questions_questions_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./questions/questions.component */ 9152);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 2560);








class QuestionsModule {
}
QuestionsModule.ɵfac = function QuestionsModule_Factory(t) { return new (t || QuestionsModule)(); };
QuestionsModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineNgModule"]({ type: QuestionsModule });
QuestionsModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjector"]({ imports: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
        _angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_7__.ReactiveFormsModule,
        _questions_routing_module__WEBPACK_IMPORTED_MODULE_0__.QuestionsRoutingModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsetNgModuleScope"](QuestionsModule, { declarations: [_master_page_questions_master_page_component__WEBPACK_IMPORTED_MODULE_1__.QuestionsMasterPageComponent,
        _edit_page_questions_edit_page_component__WEBPACK_IMPORTED_MODULE_2__.QuestionsEditPageComponent,
        _questions_questions_component__WEBPACK_IMPORTED_MODULE_3__.QuestionsComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
        _angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_7__.ReactiveFormsModule,
        _questions_routing_module__WEBPACK_IMPORTED_MODULE_0__.QuestionsRoutingModule] }); })();


/***/ }),

/***/ 9152:
/*!************************************************************!*\
  !*** ./src/app/questions/questions/questions.component.ts ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "QuestionsComponent": () => (/* binding */ QuestionsComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 124);


class QuestionsComponent {
    constructor() { }
    ngOnInit() {
    }
}
QuestionsComponent.ɵfac = function QuestionsComponent_Factory(t) { return new (t || QuestionsComponent)(); };
QuestionsComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: QuestionsComponent, selectors: [["app-questions"]], decls: 2, vars: 0, consts: [[1, "mt-3", "container"]], template: function QuestionsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, dependencies: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterOutlet], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJxdWVzdGlvbnMuY29tcG9uZW50LnNjc3MifQ== */"] });


/***/ })

}]);
//# sourceMappingURL=src_app_questions_index_ts.js.map