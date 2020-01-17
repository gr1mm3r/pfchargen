webpackJsonp([0],{

/***/ 315:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

__webpack_require__(207);

var _lodash = __webpack_require__(577);

var _lodash2 = _interopRequireDefault(_lodash);

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(35);

var _reactDom2 = _interopRequireDefault(_reactDom);

var _reactBootstrap = __webpack_require__(640);

var _recompose = __webpack_require__(727);

var _Speed = __webpack_require__(316);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var STATS = ['STR', 'DEX', 'CON', 'INT', 'WIS', 'CHA'];
var STAT_TYPES = ['base', 'enhance', 'misc', 'temp'];
var CLASSES = ['class1', 'class2', 'class3', 'class4', 'class5', 'class6', 'class7', 'class8', 'class9', 'class10'];
var CLASS_TYPES = ['class', 'hd', 'hp', 'skill', 'bab', 'fort', 'refl', 'will', 'levels'];
var WEAPONS = ['weapon0', 'weapon1', 'weapon2', 'weapon3', 'weapon4', 'weapon5', 'weapon6', 'weapon7', 'weapon8', 'weapon9', 'weapon10', 'weapon11', 'weapon12', 'weapon13', 'weapon14', 'weapon15', 'weapon16', 'weapon17', 'weapon18', 'weapon19', 'weapon20'];
var SAVES = ['fort', 'refl', 'will'];
var SPELLCASTERS = ['sp0', 'sp1', 'sp2', 'sp3', 'sp4'];
var ARMOR_TYPES = ['Light', 'Medium', 'Heavy'];

var App = function (_Component) {
    _inherits(App, _Component);

    function App(props) {
        _classCallCheck(this, App);

        var _this = _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).call(this, props));

        _this.prevChangeWasToKey = '';
        _this.state = { stat: { size: 0 } };
        STATS.map(function (stat) {
            _this.state.stat[stat] = { 'base': 10 };
        });
        _this.default = {
            load: {
                light: {
                    "base-speed": "30 (x4)",
                    "max-dex": Infinity,
                    "skill-penalty": 0
                },
                medium: {
                    "base-speed": function baseSpeed(fn) {
                        return _Speed.Speed.reduceBase(fn.getValue('load.light.base-speed')).toString();
                    },
                    "max-dex": 3,
                    "skill-penalty": 3
                },
                heavy: {
                    "base-speed": function baseSpeed(fn) {
                        return _Speed.Speed.reduceRun(fn.getValue('load.medium.base-speed')).toString();
                    },
                    "max-dex": 1,
                    "skill-penalty": 6
                },
                lift: {
                    "base-speed": "5/round"
                }
            },
            armor: {
                light: {
                    "base-speed": function baseSpeed(fn) {
                        return fn.getValue('load.light.base-speed');
                    }
                },
                medium: {
                    "base-speed": function baseSpeed(fn) {
                        return _Speed.Speed.reduceBase(fn.getValue('armor.light.base-speed')).toString();
                    }
                },
                heavy: {
                    "base-speed": function baseSpeed(fn) {
                        return _Speed.Speed.reduceRun(fn.getValue('armor.medium.base-speed')).toString();
                    }
                }
            },
            speed: {
                swim: function swim(fn) {
                    return _Speed.Speed.halfBase(fn.getCurrentSpeed()).base + "/round";
                },
                climb: function climb(fn) {
                    return _Speed.Speed.halfBase(fn.getCurrentSpeed()).base + "/round";
                }
            }
        };
        _this.prevHistoryPushWasWithKey;
        _this.isLoading = false;
        _this.fn = {};
        _this.fn.handleChange = _this.handleChange.bind(_this);
        _this.fn.getState = _this.getState.bind(_this);
        _this.fn.getClassTypeTotal = _this.getClassTypeTotal.bind(_this);
        _this.fn.getAbilityTotal = _this.getAbilityTotal.bind(_this);
        _this.fn.getAbilityMod = _this.getAbilityMod.bind(_this);
        _this.fn.getArmorLimitedDex = _this.getArmorLimitedDex.bind(_this);
        _this.fn.getCurrentLoad = _this.getCurrentLoad.bind(_this);
        _this.fn.getCurrentLoadName = _this.getCurrentLoadName.bind(_this);
        _this.fn.getArmedLoad = _this.getArmedLoad.bind(_this);
        _this.fn.getArmedLoadName = _this.getArmedLoadName.bind(_this);
        _this.fn.getLoadLevels = _this.getLoadLevels.bind(_this);
        _this.fn.getArmedSpeed = _this.getArmedSpeed.bind(_this);
        _this.fn.getCurrentSpeed = _this.getCurrentSpeed.bind(_this);
        _this.fn.getOverlandSpeed = _this.getOverlandSpeed.bind(_this);
        _this.fn.getArmedSkillCheckPenalty = _this.getArmedSkillCheckPenalty.bind(_this);
        _this.fn.getCurrentSkillCheckPenalty = _this.getCurrentSkillCheckPenalty.bind(_this);
        _this.fn.getDefault = _this.getDefault.bind(_this);
        _this.fn.getValue = _this.getValue.bind(_this);
        window.app = _this; // for console debugging
        return _this;
    }

    _createClass(App, [{
        key: 'componentDidUpdate',
        value: function componentDidUpdate(prevProps, prevState) {
            var title = this.getState(['info', 'character']) + '(lvl' + this.getClassTypeTotal('levels') + ') ' + "v" + this.getState(['md', 'rev'], 0) + " / " + this.getState(['md', 'prevChangeTime'], '');
            if (this.isLoading) {
                // push no state while loading
                document.title = title;
                return;
            }
            var result = {};
            function recurse(cur, prop) {
                if (cur === undefined) {
                    console.debug('componentDidUpdate: skipping undefined at', prop);
                } else if (typeof cur == 'function') {
                    console.warn('componentDidUpdate: function at', prop);
                } else if (Object(cur) !== cur) {
                    console.debug('componentDidUpdate saving:', prop, cur, typeof cur === 'undefined' ? 'undefined' : _typeof(cur));
                    result[prop] = cur;
                } else if (Array.isArray(cur)) {
                    console.warn('componentDidUpdate: skipping array at', prop);
                } else {
                    for (var p in cur) {
                        recurse(cur[p], prop ? prop + "." + p : p);
                    }
                }
            }
            recurse(this.state, "");
            var qp = "";
            for (var k in result) {
                qp += "&" + k + "=" + encodeURIComponent(result[k]);
            }
            if ('' + this.prevHistoryPushWasWithKey == '' + this.prevChangeWasToKey) {
                console.debug('history.replaceState', title);
                history.replaceState(this.state, title, '?' + qp.slice(1).replace(/\%20/g, '+'));
            } else {
                console.debug('history.pushState', title);
                history.pushState(this.state, title, '?' + qp.slice(1).replace(/\%20/g, '+'));
                this.prevHistoryPushWasWithKey = this.prevChangeWasToKey;
            }
            document.title = title;
        }
    }, {
        key: 'componentWillMount',
        value: function componentWillMount() {
            var _this2 = this;

            function convertKey(k) {
                if (STATS.indexOf(k.split('.')[0]) > -1) return 'stat.' + k;
                if (k == 'info.size' || k == 'size') return 'stat.size';
                if (k.indexOf('info') == 0) k = k.toLowerCase();
                if (k.indexOf('info.init') == 0) return k.replace('info.init', 'init');
                if (k.indexOf('info.speed') == 0) return k.replace('info.speed', 'speed');
                if (k.indexOf('acrobatic.') > 0) return k.replace('acrobatic.', 'acrobatics.');
                if (/refl*\./.test(k)) return k.replace(/refl*\./, 'refl.');
                if (k == 'note.spell1') return "sp0.note";
                if (k.indexOf('spell1.') == 0) return k.replace('spell1.', 'sp0.');
                if (k.indexOf('speed.land') == 0) return "load.light.base-speed";
                return k;
            }
            function getQueryParams(qs) {
                qs = qs.split('+').join(' ');
                var params = {},
                    tokens,
                    re = /[?&]?([^=]+)=([^&]*)/g;
                while (tokens = re.exec(qs)) {
                    var key = decodeURIComponent(tokens[1]);
                    var value = decodeURIComponent(tokens[2]);
                    if (key.indexOf('prevChangeWasToKey') == 0) continue;
                    if (value == {}.toString()) continue;
                    params[convertKey(key)] = value;
                }
                return params;
            }
            var queryParams = getQueryParams(window.location.search);
            this.isLoading = true;
            if (queryParams.state) {
                // depracated old state format
                var s = JSON.parse(queryParams.state);
                console.info('componentWillMount: restoring state:', s);
                this.setState(s, restoreReady);
            } else {
                this.setState(function (ps, pp) {
                    for (var k in queryParams) {
                        _this2.setStateByKey(k.split('.'), queryParams[k]);
                    }
                }, restoreReady);
            }
            function restoreReady() {
                console.info('componentWillMount: restored state:', this.state);
                this.prevChangeWasToKey = [""];
                this.componentDidUpdate(null, null);
                autoresizeAll();
                this.isLoading = false;
            }
        }
    }, {
        key: 'popstateRestore',
        value: function popstateRestore(event) {
            var _this3 = this;

            console.log('popstate: restoring state', event.state, 'from', event);
            this.isLoading = true;
            this.setState(event.state, function () {
                console.debug('popstate: forcing update');
                _this3.forceUpdate(function () {
                    _this3.isLoading = false;
                    console.debug('popstate: restoring state complete:', _this3.state);
                    autoresizeAll();
                });
            });
        }
    }, {
        key: 'componentDidMount',
        value: function componentDidMount() {
            var _this4 = this;

            window.onpopstate = function (event) {
                return _this4.popstateRestore(event);
            };
        }
    }, {
        key: 'withPropKeyValue',
        value: function withPropKeyValue(prevState, propKey, newVal) {
            newVal = newVal == parseFloat(newVal).toString() ? parseFloat(newVal) : newVal;
            newVal = newVal === 'false' ? false : newVal;
            var newState = {};
            var newLeaf = newState;
            var leaf = propKey.slice(0, -1).reduce(function (childState, key) {
                if (childState[key] === undefined) {
                    return newLeaf = newLeaf[key] = {};
                }
                newLeaf = newLeaf[key] = _extends({}, childState[key]);
                return childState[key];
            }, prevState);
            var oldVal = leaf[propKey[propKey.length - 1]];
            newLeaf[propKey[propKey.length - 1]] = newVal;
            //console.debug('with', propKey, newState, 'was', oldVal);
            return newState;
        }
    }, {
        key: 'setStateByKey',
        value: function setStateByKey(propKey, newVal) {
            var _this5 = this;

            if (propKey.indexOf('.') > 0) propKey = propKey.split('.');
            this.setState(function (prevState, setProps) {
                var newState = _this5.withPropKeyValue(prevState, propKey, newVal);
                if (!_this5.isLoading) {
                    newState.md = {
                        prevChangeTime: new Date().toLocaleString('sv-SV'),
                        rev: (prevState.md && prevState.md.rev || 0) + 1
                    };
                }
                _this5.prevChangeWasToKey = propKey;
                //console.log('setState', propKey, newVal, newState, 'of', prevState, setProps);
                return newState;
            });
        }
    }, {
        key: 'handleChange',
        value: function handleChange(propKey, mutator) {
            var _this6 = this;

            return function (e) {
                if (mutator !== undefined) {
                    var oldVal = _this6.getState(propKey);
                    var _newVal = mutator(oldVal, e);
                    console.debug('handleChange mutator:', propKey, _newVal, oldVal, mutator);
                    return _this6.setStateByKey(propKey, _newVal);
                }
                var evval = e.target.type === 'checkbox' ? e.target.checked : e.target.value;
                var newVal = typeof evval === 'boolean' ? evval || undefined : evval.length == 0 ? undefined : evval;
                console.log('handleChange event', propKey, newVal, evval, e.target);
                _this6.setStateByKey(propKey, newVal);
            };
        }
    }, {
        key: 'getState',
        value: function getState(propKey, defaultTo, type) {
            if (!type) type = typeof defaultTo === 'undefined' ? 'undefined' : _typeof(defaultTo);
            if (type === 'number') {
                var _stateVal = this.getState(propKey);
                if (undefined === defaultTo && undefined === _stateVal) return undefined;
                return Number(this.getState(propKey) || defaultTo);
            }
            if (type === 'boolean') {
                return this.getState(propKey, 'false').toString() === 'true';
            }
            if (propKey.indexOf('.') > 0) propKey = propKey.split('.');
            if (!Array.isArray(propKey)) {
                throw new Error('propKey must be an array or dot-separated: ' + propKey);
            }
            var stateVal = propKey.reduce(function (tree, key) {
                return (typeof tree === 'undefined' ? 'undefined' : _typeof(tree)) == 'object' && key in tree ? tree[key] : undefined;
            }, this.state);
            return stateVal !== undefined ? stateVal : defaultTo;
        }
    }, {
        key: 'getDefault',
        value: function getDefault(propKey) {
            if (propKey.indexOf('.') > 0) propKey = propKey.split('.');
            var value = propKey.reduce(function (tree, key) {
                return (typeof tree === 'undefined' ? 'undefined' : _typeof(tree)) == 'object' && key in tree ? tree[key] : undefined;
            }, this.default);
            return typeof value == 'function' ? value(this.fn) : value;
        }
    }, {
        key: 'getValue',
        value: function getValue(propKey, defaultTo) {
            var stateVal = this.getState(propKey, undefined, typeof defaultTo === 'undefined' ? 'undefined' : _typeof(defaultTo));
            if (undefined !== stateVal) return stateVal;
            var defaultVal = this.getDefault(propKey);
            if (undefined !== defaultVal) return defaultVal;
            return defaultTo;
        }
    }, {
        key: 'getClassTypeTotal',
        value: function getClassTypeTotal(type) {
            var _this7 = this;

            return CLASSES.reduce(function (sum, classN) {
                return sum + _this7.getState([classN, type], 0);
            }, 0);
        }
    }, {
        key: 'getAbilityTotal',
        value: function getAbilityTotal(ability) {
            var _this8 = this;

            var skipTemp = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

            if (STATS.indexOf(ability) == -1) return NaN;
            var rageBonus = this.getState(['rage', 'enable']) && !skipTemp ? getRageState(this.fn)[ability] || 0 : 0;
            return STAT_TYPES.filter(function (x) {
                return !skipTemp || x !== 'temp';
            }).reduce(function (sum, type) {
                return sum + _this8.getState(['stat', ability, type], 0);
            }, 0) + rageBonus;
        }
    }, {
        key: 'getAbilityMod',
        value: function getAbilityMod(ability, skipTemp) {
            return Math.round((this.getAbilityTotal(ability, skipTemp) - 11) / 2);
        }
    }, {
        key: 'getArmorLimitedDex',
        value: function getArmorLimitedDex() {
            return Math.min(this.getAbilityMod('DEX'), this.getState(['armor', 'max-dex'], Infinity), this.getState(['shield', 'max-dex'], Infinity), this.getValue('load.' + this.getLoadName(this.getArmedLoad()) + '.max-dex'));
        }
    }, {
        key: 'getCurrentLoad',
        value: function getCurrentLoad() {
            var _this9 = this;

            return [].concat(WEAPONS, ['armor', 'shield']).map(function (k) {
                return [k];
            }).concat(Object.keys(this.state.eq || {}).map(function (k) {
                return ['eq', k];
            })).reduce(function (sum, key) {
                var propKey = [].concat(_toConsumableArray(key), ['weight']);
                return sum + _this9.getState(propKey, 0);
            }, 0);
        }
    }, {
        key: 'getCurrentLoadName',
        value: function getCurrentLoadName() {
            return this.getLoadName(this.getCurrentLoad());
        }
    }, {
        key: 'getArmedLoad',
        value: function getArmedLoad() {
            var _this10 = this;

            return [].concat(WEAPONS, ['armor', 'shield']).map(function (k) {
                return [k];
            }).reduce(function (sum, key) {
                var propKey = [].concat(_toConsumableArray(key), ['weight']);
                return sum + _this10.getState(propKey, 0);
            }, 0);
        }
    }, {
        key: 'getArmedLoadName',
        value: function getArmedLoadName() {
            return this.getLoadName(this.getArmedLoad());
        }
    }, {
        key: 'getLoadName',
        value: function getLoadName(load) {
            var loadLevels = this.getLoadLevels();
            var i = loadLevels.findIndex(function (loadLimit) {
                return load <= loadLimit;
            });
            return ['light', 'medium', 'heavy', 'lift', 'drag', 'overloaded'][i];
        }
    }, {
        key: 'getLoadLevels',
        value: function getLoadLevels() {
            function baseMaxLoad(str) {
                if (str < 11) return 10 * str;
                if (str > 14) return 2 * baseMaxLoad(str - 5);
                return [115, 130, 150, 175][str - 11];
            }
            function sizeMultiplier(sizeMod, legs) {
                if (legs == 2) {
                    if (sizeMod < 0) return -sizeMod * 2;
                    if (sizeMod == 0) return 1;
                    if (sizeMod == 1) return 3 / 4;
                    return 1 / sizeMod;
                } else if (legs == 4) {
                    if (sizeMod < 1) return sizeMultiplier(sizeMod, 2) * 3 / 2;
                    if (sizeMod == 1) return 1;
                    if (sizeMod == 2) return 3 / 4;
                    return 2 * sizeMultiplier(sizeMod, 2);
                }
            }
            var maxLoad = Math.floor(baseMaxLoad(this.getAbilityTotal('STR')) * sizeMultiplier(this.getState(['stat', 'size']), this.getState(['stat', 'legs'], 2)));
            return [Math.floor(1 / 3 * maxLoad), Math.floor(2 / 3 * maxLoad), maxLoad, 2 * maxLoad, 5 * maxLoad, Infinity];
        }
    }, {
        key: 'getArmedSpeed',
        value: function getArmedSpeed() {
            return _Speed.Speed.min(this.getValue('armor.' + this.getState('armor.type', 'Light').toLowerCase() + '.base-speed'), this.getValue('load.' + this.getLoadName(this.getArmedLoad()) + '.base-speed'));
        }
    }, {
        key: 'getCurrentSpeed',
        value: function getCurrentSpeed() {
            return _Speed.Speed.min(this.getArmedSpeed(), this.getValue('load.' + this.getCurrentLoadName() + '.base-speed'));
        }
    }, {
        key: 'getOverlandSpeed',
        value: function getOverlandSpeed() {
            return _Speed.Speed.parse(this.getCurrentSpeed()).base / 10;
        }
    }, {
        key: 'getArmedSkillCheckPenalty',
        value: function getArmedSkillCheckPenalty() {
            return Math.max(this.getState(['armor', 'skill-penalty'], 0) + this.getState(['shield', 'skill-penalty'], 0), this.getValue('load.' + this.getArmedLoadName() + '.skill-penalty', NaN));
        }
    }, {
        key: 'getCurrentSkillCheckPenalty',
        value: function getCurrentSkillCheckPenalty() {
            return Math.max(this.getArmedSkillCheckPenalty(), this.getValue('load.' + this.getCurrentLoadName() + '.skill-penalty', NaN));
        }
    }, {
        key: 'render',
        value: function render() {
            return _react2.default.createElement(
                _reactBootstrap.Form,
                null,
                _react2.default.createElement(AddfieldsNavbar, _extends({}, this.fn, this.state)),
                _react2.default.createElement(
                    _reactBootstrap.Grid,
                    { fluid: true },
                    _react2.default.createElement(InfoRow, _extends({}, this.fn, this.state)),
                    _react2.default.createElement(
                        _reactBootstrap.Row,
                        null,
                        _react2.default.createElement(
                            _reactBootstrap.Col,
                            { md: 5 },
                            _react2.default.createElement(
                                _reactBootstrap.Row,
                                null,
                                _react2.default.createElement(
                                    _reactBootstrap.Col,
                                    { xs: 8, sm: 9 },
                                    _react2.default.createElement(AbilityTable, _extends({}, this.fn, this.state))
                                ),
                                _react2.default.createElement(SizeField, _extends({ className: 'note-col' }, this.fn, this.state, { sm: 3, xs: 4 })),
                                _react2.default.createElement(
                                    _reactBootstrap.Col,
                                    { xs: 4, sm: 3, className: 'note-col' },
                                    _react2.default.createElement(NoteArea, _extends({}, this.fn, { noteKey: 'ability', val: this.getState('note.ability') }))
                                )
                            )
                        ),
                        _react2.default.createElement(
                            _reactBootstrap.Col,
                            { md: 7 },
                            _react2.default.createElement(ClassTable, _extends({}, this.fn, this.state))
                        )
                    ),
                    _react2.default.createElement(
                        _reactBootstrap.Row,
                        null,
                        _react2.default.createElement(
                            _reactBootstrap.Col,
                            { md: 7 },
                            _react2.default.createElement(
                                _reactBootstrap.Row,
                                null,
                                _react2.default.createElement(
                                    _reactBootstrap.Col,
                                    { xs: 7 },
                                    _react2.default.createElement(InitTable, _extends({}, this.fn, this.state)),
                                    _react2.default.createElement(ResistanceTable, _extends({}, this.fn, this.state))
                                ),
                                _react2.default.createElement(
                                    _reactBootstrap.Col,
                                    { xs: 5 },
                                    _react2.default.createElement(HPTable, _extends({}, this.fn, this.state))
                                )
                            ),
                            _react2.default.createElement(ACTable, _extends({}, this.fn, this.state)),
                            _react2.default.createElement(
                                _reactBootstrap.Row,
                                null,
                                _react2.default.createElement(
                                    _reactBootstrap.Col,
                                    { xs: 8 },
                                    _react2.default.createElement(SaveTable, _extends({}, this.fn, this.state))
                                ),
                                _react2.default.createElement(
                                    _reactBootstrap.Col,
                                    { xs: 4, className: 'note-col' },
                                    _react2.default.createElement(NoteArea, _extends({}, this.fn, { noteKey: 'save', val: this.getState('note.save') }))
                                )
                            ),
                            _react2.default.createElement(
                                _reactBootstrap.Row,
                                null,
                                _react2.default.createElement(
                                    _reactBootstrap.Col,
                                    { xs: 8 },
                                    _react2.default.createElement(AttackTable, _extends({}, this.fn, this.state))
                                ),
                                _react2.default.createElement(
                                    _reactBootstrap.Col,
                                    { xs: 4, className: 'note-col' },
                                    _react2.default.createElement(NoteArea, _extends({}, this.fn, { noteKey: 'attack', val: this.getState('note.attack') }))
                                )
                            ),
                            _react2.default.createElement(ArmorTable, this.fn)
                        ),
                        _react2.default.createElement(
                            _reactBootstrap.Col,
                            { md: 5 },
                            _react2.default.createElement(SkillTable, _extends({}, this.fn, this.state))
                        ),
                        _react2.default.createElement(
                            _reactBootstrap.Col,
                            { xs: 12 },
                            _react2.default.createElement(WeaponTable, _extends({}, this.fn, this.state))
                        )
                    ),
                    _react2.default.createElement(RagePanel, _extends({}, this.fn, this.state)),
                    _react2.default.createElement(
                        _reactBootstrap.Row,
                        null,
                        _react2.default.createElement(
                            _reactBootstrap.Col,
                            { sm: 12, md: 6, className: 'note-col' },
                            _react2.default.createElement(NoteArea, _extends({}, this.fn, { noteKey: 'feat', val: this.getState('note.feat') }))
                        ),
                        _react2.default.createElement(
                            _reactBootstrap.Col,
                            { sm: 12, md: 6, className: 'note-col' },
                            _react2.default.createElement(NoteArea, _extends({}, this.fn, { noteKey: 'character', val: this.getState('note.character') }))
                        )
                    ),
                    _react2.default.createElement(
                        _reactBootstrap.Row,
                        null,
                        _react2.default.createElement(
                            _reactBootstrap.Col,
                            { sm: 12, md: 6, className: 'note-col' },
                            _react2.default.createElement(NoteArea, _extends({}, this.fn, { noteKey: 'special', val: this.getState('note.special') }))
                        ),
                        _react2.default.createElement(
                            _reactBootstrap.Col,
                            { sm: 12, md: 6, className: 'note-col' },
                            _react2.default.createElement(NoteArea, _extends({}, this.fn, { noteKey: 'equipment', val: this.getState('note.equipment') }))
                        )
                    ),
                    _react2.default.createElement(EquipmentTable, _extends({}, this.fn, this.state)),
                    _react2.default.createElement(
                        _reactBootstrap.Row,
                        null,
                        _react2.default.createElement(
                            _reactBootstrap.Col,
                            { sm: 7 },
                            _react2.default.createElement(SpeedTable, _extends({}, this.fn, this.state)),
                            _react2.default.createElement(NoteArea, _extends({}, this.fn, this.state, { placeholder: 'Speed and load notes', onerow: true,
                                propKey: ['load', 'note'], val: this.getState('load.note') }))
                        ),
                        _react2.default.createElement(
                            _reactBootstrap.Col,
                            { sm: 5 },
                            _react2.default.createElement(LoadTable, _extends({}, this.fn, this.state))
                        )
                    ),
                    _react2.default.createElement(SpellcasterPanels, _extends({}, this.fn, this.state))
                )
            );
        }
    }]);

    return App;
}(_react.Component);

function ColText(props) {
    return _react2.default.createElement(
        _reactBootstrap.Col,
        { bsClass: 'col', xs: props.xs || Math.min(props.sm * 2, 12), sm: props.sm },
        _react2.default.createElement(
            _reactBootstrap.FormGroup,
            { validationState: props.validationState },
            _react2.default.createElement(
                _reactBootstrap.ControlLabel,
                null,
                _react2.default.createElement(
                    'small',
                    null,
                    props.label
                )
            ),
            _react2.default.createElement(
                _reactBootstrap.FormControl.Static,
                null,
                props.children
            )
        )
    );
}

function ColTextField(props) {
    var label = props.label || props.propKey[props.propKey.length - 1];
    return _react2.default.createElement(
        _reactBootstrap.Col,
        { bsClass: 'col', xs: props.xs || Math.min(props.sm * 2, 12), sm: props.sm },
        _react2.default.createElement(
            _reactBootstrap.FormGroup,
            { validationState: props.validationState,
                controlId: props.propKey.join('-') },
            _react2.default.createElement(
                _reactBootstrap.ControlLabel,
                { className: 'text-capitalize' },
                _react2.default.createElement(
                    'small',
                    null,
                    label
                )
            ),
            _react2.default.createElement(_reactBootstrap.FormControl, { type: 'text',
                value: props.getState(props.propKey, ''),
                onChange: props.handleChange(props.propKey)
            })
        )
    );
}

function SizeField(props) {
    var sizeValues = [8, 4, 2, 1, 0, -1, -2, -4, -8];
    var sizeOptions = ['Fine', 'Diminutive', 'Tiny', 'Small', 'Medium', 'Large', 'Huge', 'Gargantuan', 'Colossal'].map(function (sizeName, index) {
        return _react2.default.createElement(
            'option',
            { value: sizeValues[index] },
            sizeName + ': ' + sizeValues[index]
        );
    });
    var statePropKey = ['stat', 'size'];
    return _react2.default.createElement(
        _reactBootstrap.Col,
        _extends({}, props, { bsClass: 'col', xs: props.xs || Math.min(props.sm * 2, 12) }),
        _react2.default.createElement(
            _reactBootstrap.FormGroup,
            { controlId: statePropKey.join('-'), bsSize: 'sm' },
            _react2.default.createElement(
                _reactBootstrap.ControlLabel,
                null,
                _react2.default.createElement(
                    'small',
                    null,
                    'Size'
                )
            ),
            _react2.default.createElement(
                _reactBootstrap.FormControl,
                { componentClass: 'select',
                    value: props.getState(statePropKey),
                    onChange: props.handleChange(statePropKey) },
                sizeOptions
            )
        )
    );
}

var InfoRow = (0, _recompose.compose)((0, _recompose.onlyUpdateForKeys)(['info', 'stat']), _recompose.pure)(InfoRowImpl);
function InfoRowImpl(props) {
    return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(
            _reactBootstrap.Row,
            null,
            _react2.default.createElement(ColTextField, _extends({}, props, { propKey: ['info', 'character'], xs: 7, sm: 6 })),
            _react2.default.createElement(ColTextField, _extends({}, props, { propKey: ['info', 'player'], xs: 3, sm: 4 })),
            _react2.default.createElement(
                ColText,
                { label: 'Minify', xs: 2, sm: 2 },
                _react2.default.createElement(
                    _reactBootstrap.Button,
                    {
                        bsSize: 'sm', bsStyle: 'info', target: '_blank',
                        href: 'javascript:void(location.href=\'http://tinyurl.com/create.php?url=\'+encodeURIComponent(location.href))' },
                    'tinyurl'
                )
            )
        ),
        _react2.default.createElement(
            _reactBootstrap.Row,
            null,
            _react2.default.createElement(ColTextField, _extends({}, props, { propKey: ['info', 'race'], sm: 2 })),
            _react2.default.createElement(ColTextField, _extends({}, props, { propKey: ['info', 'gender'], sm: 1 })),
            _react2.default.createElement(ColTextField, _extends({}, props, { propKey: ['info', 'height'], xs: 3, sm: 1 })),
            _react2.default.createElement(ColTextField, _extends({}, props, { propKey: ['info', 'weight'], xs: 3, sm: 1 })),
            _react2.default.createElement(ColTextField, _extends({}, props, { propKey: ['info', 'hair'], sm: 2 })),
            _react2.default.createElement(ColTextField, _extends({}, props, { propKey: ['info', 'eyes'], sm: 2 })),
            _react2.default.createElement(ColTextField, _extends({}, props, { propKey: ['info', 'skin'], sm: 2 })),
            _react2.default.createElement(ColTextField, _extends({}, props, { propKey: ['info', 'age'], sm: 1 })),
            _react2.default.createElement(ColTextField, _extends({}, props, { propKey: ['info', 'alignment'], sm: 2 })),
            _react2.default.createElement(ColTextField, _extends({}, props, { propKey: ['info', 'deity'], sm: 3 })),
            _react2.default.createElement(ColTextField, _extends({}, props, { propKey: ['info', 'homeland and occupation'], sm: 7 })),
            _react2.default.createElement(ColTextField, _extends({}, props, { propKey: ['info', 'languages'], sm: 12 }))
        )
    );
}

function StatRow(props) {
    var ability = props.ability;
    //console.log('row base for '+ability+':', props.getState(['stat',ability,'base']);
    var raging = props.getState(['rage', 'enable'], false);
    var rageBonus = raging ? getRageState(props)[ability] : 0;
    var abilityFields = STAT_TYPES.map(function (type) {
        return _react2.default.createElement(
            'td',
            null,
            _react2.default.createElement(TextField, _extends({}, props, { propKey: ['stat', ability, type] }))
        );
    }).concat(_react2.default.createElement(
        'td',
        { className: raging ? "" : "hidden" },
        rageBonus || ""
    ));
    return _react2.default.createElement(
        'tr',
        null,
        _react2.default.createElement(
            'th',
            { className: 'active' },
            ability
        ),
        _react2.default.createElement(
            'td',
            null,
            props.getAbilityTotal(ability)
        ),
        _react2.default.createElement(
            'th',
            { className: 'success' },
            props.getAbilityMod(ability)
        ),
        abilityFields
    );
}

var AbilityTable = (0, _recompose.compose)((0, _recompose.onlyUpdateForKeys)(['stat', 'rage']), _recompose.pure)(AbilityTableImpl);
function AbilityTableImpl(props) {
    var raging = props.getState(['rage', 'enable'], false);
    return _react2.default.createElement(
        _reactBootstrap.Table,
        { condensed: true, className: 'ability-table' },
        _react2.default.createElement(
            'thead',
            null,
            _react2.default.createElement(
                'tr',
                null,
                _react2.default.createElement(
                    'th',
                    null,
                    _react2.default.createElement(
                        'small',
                        null,
                        'Ability'
                    )
                ),
                _react2.default.createElement(
                    'th',
                    null,
                    _react2.default.createElement(
                        'small',
                        null,
                        'Total'
                    )
                ),
                _react2.default.createElement(
                    'th',
                    null,
                    _react2.default.createElement(
                        'small',
                        null,
                        'Mod'
                    )
                ),
                _react2.default.createElement(
                    'th',
                    { className: 'ability-base' },
                    _react2.default.createElement(
                        'small',
                        null,
                        'Base'
                    )
                ),
                _react2.default.createElement(
                    'th',
                    null,
                    _react2.default.createElement(
                        'small',
                        null,
                        'Enh',
                        _react2.default.createElement(
                            'span',
                            { className: 'hidden-xs hidden-md' },
                            'ance'
                        )
                    )
                ),
                _react2.default.createElement(
                    'th',
                    null,
                    _react2.default.createElement(
                        'small',
                        null,
                        'Misc'
                    )
                ),
                _react2.default.createElement(
                    'th',
                    null,
                    _react2.default.createElement(
                        'small',
                        null,
                        'Temp'
                    )
                ),
                _react2.default.createElement(
                    'th',
                    { className: raging ? "" : "hidden" },
                    _react2.default.createElement(
                        'small',
                        null,
                        'Rage'
                    )
                )
            )
        ),
        _react2.default.createElement(
            'tbody',
            null,
            _react2.default.createElement(StatRow, _extends({}, props, { ability: 'STR' })),
            _react2.default.createElement(StatRow, _extends({}, props, { ability: 'DEX' })),
            _react2.default.createElement(StatRow, _extends({}, props, { ability: 'CON' })),
            _react2.default.createElement(StatRow, _extends({}, props, { ability: 'INT' })),
            _react2.default.createElement(StatRow, _extends({}, props, { ability: 'WIS' })),
            _react2.default.createElement(StatRow, _extends({}, props, { ability: 'CHA' }))
        )
    );
}

function TextField(props) {
    var placeholder = props.placeholder || props.getDefault(props.propKey);
    //console.debug(props.propKey, props.getState(props.propKey));
    return _react2.default.createElement(_reactBootstrap.FormControl, { type: 'text',
        id: props.propKey.join('-'),
        value: props.getState(props.propKey, ''),
        onChange: props.handleChange(props.propKey),
        placeholder: placeholder,
        className: props.className || ''
    });
}

var NoteArea = (0, _recompose.pure)(NoteAreaImpl);
function NoteAreaImpl(props) {
    var id = props.noteKey + '-note' || props.propKey.join('-');
    var propKey = props.propKey || ['note', props.noteKey];
    var role = props.noteKey || props.propKey[props.propKey.length - 1];
    var className = [props.className, "autoresize", propKey.join('-'), props.onerow ? "onerow" : ""].join(' ');
    return _react2.default.createElement(
        _reactBootstrap.FormGroup,
        { controlId: id },
        _react2.default.createElement(_reactBootstrap.FormControl, { componentClass: 'textarea',
            inputRef: addAutoresize,
            className: className,
            value: props.getState(propKey, ''),
            onChange: props.handleChange(propKey),
            placeholder: props.placeholder || role + " notes" })
    );
}

function NoPrintAbbr(props) {
    return _react2.default.createElement(
        'span',
        null,
        _react2.default.createElement(
            'abbr',
            { className: 'hidden-print', title: props.title },
            props.children
        ),
        _react2.default.createElement(
            'span',
            { className: 'visible-print-block' },
            props.children
        )
    );
}

var ClassRow = (0, _recompose.pure)(ClassRowImpl);
function ClassRowImpl(props) {
    var rowName = props.name;
    var classFields = CLASS_TYPES.map(function (type) {
        return _react2.default.createElement(
            'td',
            null,
            _react2.default.createElement(TextField, _extends({}, props, { propKey: [rowName, type] }))
        );
    });
    return _react2.default.createElement(
        'tr',
        null,
        classFields
    );
}

var ClassTable = (0, _recompose.compose)((0, _recompose.onlyUpdateForKeys)([].concat(CLASSES)), _recompose.pure)(ClassTableImpl);
function ClassTableImpl(props) {
    var classRows = CLASSES.map(function (classN, i) {
        if (i > 0 && isEmpty(props.getState(['class' + i])) && isEmpty(props.getState(['class' + (i + 1)]))) return null;
        return _react2.default.createElement(ClassRow, _extends({}, props, { name: classN, val: props[classN] }));
    });
    return _react2.default.createElement(
        _reactBootstrap.Table,
        { condensed: true },
        _react2.default.createElement(
            'thead',
            null,
            _react2.default.createElement(
                'tr',
                null,
                _react2.default.createElement(
                    'th',
                    { className: 'class-name' },
                    _react2.default.createElement(
                        'small',
                        null,
                        'Classname'
                    )
                ),
                _react2.default.createElement(
                    'th',
                    null,
                    _react2.default.createElement(
                        'small',
                        null,
                        'HD'
                    )
                ),
                _react2.default.createElement(
                    'th',
                    { className: 'min-width-3-digits' },
                    _react2.default.createElement(
                        'small',
                        null,
                        'HP'
                    )
                ),
                _react2.default.createElement(
                    'th',
                    { className: 'min-width-3-digits' },
                    _react2.default.createElement(
                        'small',
                        null,
                        'Skill'
                    )
                ),
                _react2.default.createElement(
                    'th',
                    null,
                    _react2.default.createElement(
                        'small',
                        null,
                        'BAB'
                    )
                ),
                _react2.default.createElement(
                    'th',
                    null,
                    _react2.default.createElement(
                        'small',
                        null,
                        'FORT'
                    )
                ),
                _react2.default.createElement(
                    'th',
                    null,
                    _react2.default.createElement(
                        'small',
                        null,
                        'REF'
                    )
                ),
                _react2.default.createElement(
                    'th',
                    null,
                    _react2.default.createElement(
                        'small',
                        null,
                        'WILL'
                    )
                ),
                _react2.default.createElement(
                    'th',
                    null,
                    _react2.default.createElement(
                        'small',
                        null,
                        'Levels'
                    )
                )
            )
        ),
        _react2.default.createElement(
            'tbody',
            null,
            classRows,
            _react2.default.createElement(
                'tr',
                null,
                _react2.default.createElement(
                    'th',
                    null,
                    'Base totals'
                ),
                _react2.default.createElement('td', null),
                _react2.default.createElement(
                    'td',
                    null,
                    props.getClassTypeTotal('hp')
                ),
                _react2.default.createElement(
                    'td',
                    null,
                    props.getClassTypeTotal('skill')
                ),
                _react2.default.createElement(
                    'td',
                    null,
                    props.getClassTypeTotal('bab')
                ),
                _react2.default.createElement(
                    'td',
                    null,
                    props.getClassTypeTotal('fort')
                ),
                _react2.default.createElement(
                    'td',
                    null,
                    props.getClassTypeTotal('refl')
                ),
                _react2.default.createElement(
                    'td',
                    null,
                    props.getClassTypeTotal('will')
                ),
                _react2.default.createElement(
                    'td',
                    null,
                    props.getClassTypeTotal('levels')
                )
            )
        )
    );
}

var HPTable = (0, _recompose.compose)((0, _recompose.onlyUpdateForKeys)(['hp', 'stat'].concat(CLASSES, ['rage'])), _recompose.pure)(HPTableImpl);
function HPTableImpl(props) {
    var totalHP = props.getAbilityMod('CON') * props.getClassTypeTotal('levels') + props.getClassTypeTotal('hp');
    return _react2.default.createElement(
        _reactBootstrap.Table,
        { condensed: true, className: 'hp-table' },
        _react2.default.createElement(
            'thead',
            null,
            _react2.default.createElement(
                'tr',
                null,
                _react2.default.createElement(
                    'th',
                    { className: 'active' },
                    _react2.default.createElement(
                        'small',
                        null,
                        'HP (con*lvl+cls)'
                    )
                ),
                _react2.default.createElement(
                    'td',
                    null,
                    totalHP
                )
            )
        ),
        _react2.default.createElement(
            'tbody',
            null,
            _react2.default.createElement(
                'tr',
                null,
                _react2.default.createElement(
                    'th',
                    { className: 'active hp-temporary' },
                    'Temporary HP'
                ),
                _react2.default.createElement(
                    'td',
                    null,
                    _react2.default.createElement(TextField, _extends({}, props, { propKey: ['hp', 'temp'] }))
                )
            ),
            _react2.default.createElement(
                'tr',
                null,
                _react2.default.createElement(
                    'th',
                    { className: 'active' },
                    'Subdual dam'
                ),
                _react2.default.createElement(
                    'td',
                    null,
                    _react2.default.createElement(TextField, _extends({}, props, { propKey: ['hp', 'subdual'] }))
                )
            ),
            _react2.default.createElement(
                'tr',
                null,
                _react2.default.createElement(
                    'th',
                    { className: 'active' },
                    'Lethal dam'
                ),
                _react2.default.createElement(
                    'td',
                    null,
                    _react2.default.createElement(TextField, _extends({}, props, { propKey: ['hp', 'lethal'] }))
                )
            ),
            _react2.default.createElement(
                'tr',
                null,
                _react2.default.createElement(
                    'th',
                    { className: 'active' },
                    'Current HP'
                ),
                _react2.default.createElement(
                    'td',
                    { className: 'success' },
                    totalHP + props.getState(['hp', 'temp'], 0) - props.getState(['hp', 'subdual'], 0) - props.getState(['hp', 'lethal'], 0)
                )
            )
        )
    );
}

var InitTable = (0, _recompose.compose)((0, _recompose.onlyUpdateForKeys)(['init', 'stat']), _recompose.pure)(InitTableImpl);
function InitTableImpl(props) {
    var initTotal = props.getAbilityMod('DEX') + props.getState(['init', 'enh'], 0) + props.getState(['init', 'misc'], 0) + props.getState(['init', 'temp'], 0);
    return _react2.default.createElement(
        _reactBootstrap.Table,
        { condensed: true },
        _react2.default.createElement(
            'thead',
            null,
            _react2.default.createElement(
                'tr',
                null,
                _react2.default.createElement('th', null),
                _react2.default.createElement(
                    'th',
                    null,
                    _react2.default.createElement(
                        'small',
                        null,
                        'Total'
                    )
                ),
                _react2.default.createElement(
                    'th',
                    null,
                    _react2.default.createElement(
                        'small',
                        null,
                        'Base'
                    )
                ),
                _react2.default.createElement(
                    'th',
                    null,
                    _react2.default.createElement(
                        'small',
                        null,
                        'Enhance'
                    )
                ),
                _react2.default.createElement(
                    'th',
                    null,
                    _react2.default.createElement(
                        'small',
                        null,
                        'Misc'
                    )
                ),
                _react2.default.createElement(
                    'th',
                    null,
                    _react2.default.createElement(
                        'small',
                        null,
                        'Temp'
                    )
                )
            )
        ),
        _react2.default.createElement(
            'tbody',
            null,
            _react2.default.createElement(
                'tr',
                null,
                _react2.default.createElement(
                    'th',
                    { className: 'active' },
                    'Init'
                ),
                _react2.default.createElement(
                    'th',
                    { className: 'success' },
                    initTotal
                ),
                _react2.default.createElement(
                    'td',
                    null,
                    props.getAbilityMod('DEX')
                ),
                _react2.default.createElement(
                    'td',
                    null,
                    _react2.default.createElement(TextField, _extends({}, props, { propKey: ['init', 'enh'] }))
                ),
                _react2.default.createElement(
                    'td',
                    null,
                    _react2.default.createElement(TextField, _extends({}, props, { propKey: ['init', 'misc'] }))
                ),
                _react2.default.createElement(
                    'td',
                    null,
                    _react2.default.createElement(TextField, _extends({}, props, { propKey: ['init', 'temp'] }))
                )
            )
        )
    );
}

var ResistanceTable = (0, _recompose.compose)((0, _recompose.onlyUpdateForKeys)(['info']), _recompose.pure)(ResistanceTableImpl);
function ResistanceTableImpl(props) {
    return _react2.default.createElement(
        _reactBootstrap.Table,
        { condensed: true },
        _react2.default.createElement(
            'tbody',
            null,
            _react2.default.createElement(
                'tr',
                null,
                _react2.default.createElement(
                    'th',
                    { className: 'active' },
                    'DR'
                ),
                _react2.default.createElement(
                    'td',
                    null,
                    _react2.default.createElement(TextField, _extends({}, props, { propKey: ['info', 'dr'] }))
                ),
                _react2.default.createElement(
                    'th',
                    { className: 'active' },
                    'SR'
                ),
                _react2.default.createElement(
                    'td',
                    null,
                    _react2.default.createElement(TextField, _extends({}, props, { propKey: ['info', 'sr'] }))
                )
            ),
            _react2.default.createElement(
                'tr',
                null,
                _react2.default.createElement(
                    'th',
                    { className: 'active' },
                    'Resists'
                ),
                _react2.default.createElement(
                    'td',
                    { colSpan: '3' },
                    _react2.default.createElement(TextField, _extends({}, props, { propKey: ['info', 'resists'] }))
                )
            )
        )
    );
}

function SpeedTable(props) {
    return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(
            _reactBootstrap.Table,
            { condensed: true },
            _react2.default.createElement(
                'thead',
                null,
                _react2.default.createElement(
                    'tr',
                    null,
                    _react2.default.createElement(
                        'th',
                        null,
                        'Speed'
                    ),
                    _react2.default.createElement(
                        'th',
                        null,
                        _react2.default.createElement(
                            'small',
                            null,
                            'armed & armored wo/\xA0equipment'
                        )
                    ),
                    _react2.default.createElement(
                        'th',
                        null,
                        _react2.default.createElement(
                            'small',
                            null,
                            'a&a w/ all equipment'
                        )
                    ),
                    _react2.default.createElement(
                        'th',
                        null,
                        _react2.default.createElement(
                            'small',
                            null,
                            'Overland mph'
                        )
                    ),
                    _react2.default.createElement(
                        'th',
                        null,
                        _react2.default.createElement(
                            'small',
                            null,
                            'Misc note'
                        )
                    ),
                    _react2.default.createElement(
                        'th',
                        null,
                        _react2.default.createElement(
                            'small',
                            null,
                            'Temp note'
                        )
                    )
                )
            ),
            _react2.default.createElement(
                'tbody',
                null,
                _react2.default.createElement(
                    'tr',
                    null,
                    _react2.default.createElement(
                        'th',
                        { className: 'active' },
                        'Land'
                    ),
                    _react2.default.createElement(
                        'td',
                        { className: 'success' },
                        props.getArmedSpeed()
                    ),
                    _react2.default.createElement(
                        'td',
                        { className: 'info' },
                        props.getCurrentSpeed()
                    ),
                    _react2.default.createElement(
                        'td',
                        null,
                        props.getOverlandSpeed()
                    ),
                    _react2.default.createElement(
                        'td',
                        null,
                        _react2.default.createElement(TextField, _extends({}, props, { propKey: ['speed', 'misc'] }))
                    ),
                    _react2.default.createElement(
                        'td',
                        null,
                        _react2.default.createElement(TextField, _extends({}, props, { propKey: ['speed', 'temp'] }))
                    )
                )
            )
        ),
        _react2.default.createElement(
            _reactBootstrap.Table,
            { condensed: true },
            _react2.default.createElement(
                'tbody',
                null,
                _react2.default.createElement(
                    'tr',
                    null,
                    _react2.default.createElement(
                        'th',
                        { className: 'active' },
                        _react2.default.createElement(
                            'small',
                            null,
                            'Swim'
                        )
                    ),
                    _react2.default.createElement(
                        'td',
                        null,
                        _react2.default.createElement(TextField, _extends({}, props, { propKey: ['speed', 'swim'] }))
                    ),
                    _react2.default.createElement(
                        'th',
                        { className: 'active' },
                        _react2.default.createElement(
                            'small',
                            null,
                            'Climb'
                        )
                    ),
                    _react2.default.createElement(
                        'td',
                        null,
                        _react2.default.createElement(TextField, _extends({}, props, { propKey: ['speed', 'climb'] }))
                    ),
                    _react2.default.createElement(
                        'th',
                        { className: 'active' },
                        _react2.default.createElement(
                            'small',
                            null,
                            'Fly'
                        )
                    ),
                    _react2.default.createElement(
                        'td',
                        null,
                        _react2.default.createElement(TextField, _extends({}, props, { propKey: ['speed', 'fly'] }))
                    ),
                    _react2.default.createElement(
                        'th',
                        { className: 'active' },
                        _react2.default.createElement(
                            'small',
                            null,
                            'Burrow'
                        )
                    ),
                    _react2.default.createElement(
                        'td',
                        null,
                        _react2.default.createElement(TextField, _extends({}, props, { propKey: ['speed', 'burrow'] }))
                    )
                )
            )
        )
    );
}

var ACTable = (0, _recompose.compose)((0, _recompose.onlyUpdateForKeys)(['stat', 'armor', 'shield', 'ac', 'rage']), _recompose.pure)(ACTableImpl);
function ACTableImpl(props) {
    var raging = props.getState(['rage', 'enable'], false);
    var rageBonus = raging ? getRageState(props)['ac'] : 0;
    var flatFootDexPenalty = Math.min(0, props.getArmorLimitedDex());
    return _react2.default.createElement(
        _reactBootstrap.Table,
        { condensed: true },
        _react2.default.createElement(
            'thead',
            null,
            _react2.default.createElement(
                'tr',
                null,
                _react2.default.createElement(
                    'th',
                    null,
                    _react2.default.createElement(
                        'small',
                        null,
                        'Defence'
                    )
                ),
                _react2.default.createElement(
                    'th',
                    null,
                    _react2.default.createElement(
                        'small',
                        null,
                        'Total'
                    )
                ),
                _react2.default.createElement('th', { className: 'hidden-xs' }),
                _react2.default.createElement(
                    'th',
                    null,
                    _react2.default.createElement(
                        'small',
                        null,
                        'Armor'
                    )
                ),
                _react2.default.createElement(
                    'th',
                    null,
                    _react2.default.createElement(
                        'small',
                        null,
                        'Shield'
                    )
                ),
                _react2.default.createElement(
                    'th',
                    null,
                    _react2.default.createElement(
                        'small',
                        null,
                        'Dex'
                    )
                ),
                _react2.default.createElement(
                    'th',
                    null,
                    _react2.default.createElement(
                        'small',
                        null,
                        'Size'
                    )
                ),
                _react2.default.createElement(
                    'th',
                    null,
                    _react2.default.createElement(
                        'small',
                        null,
                        'Dodge'
                    )
                ),
                _react2.default.createElement(
                    'th',
                    null,
                    _react2.default.createElement(
                        'small',
                        null,
                        'Natural'
                    )
                ),
                _react2.default.createElement(
                    'th',
                    null,
                    _react2.default.createElement(
                        'small',
                        null,
                        'Deflect'
                    )
                ),
                _react2.default.createElement(
                    'th',
                    null,
                    _react2.default.createElement(
                        'small',
                        null,
                        'Misc'
                    )
                ),
                _react2.default.createElement(
                    'th',
                    null,
                    _react2.default.createElement(
                        'small',
                        null,
                        'Temp'
                    )
                ),
                _react2.default.createElement(
                    'th',
                    { className: raging ? "" : "hidden" },
                    _react2.default.createElement(
                        'small',
                        null,
                        'Rage'
                    )
                )
            )
        ),
        _react2.default.createElement(
            'tbody',
            null,
            _react2.default.createElement(
                'tr',
                null,
                _react2.default.createElement(
                    'th',
                    { className: 'active' },
                    'AC'
                ),
                _react2.default.createElement(
                    'th',
                    { className: 'success' },
                    10 + props.getState(['armor', 'ac'], 0) + props.getState(['shield', 'ac'], 0) + props.getArmorLimitedDex() + props.getState(['stat', 'size'], 0) + props.getState(['ac', 'dodge'], 0) + props.getState(['ac', 'natural'], 0) + props.getState(['ac', 'deflect'], 0) + props.getState(['ac', 'ac-misc'], 0) + props.getState(['ac', 'temp'], 0) + rageBonus
                ),
                _react2.default.createElement(
                    'td',
                    { className: 'hidden-xs' },
                    _react2.default.createElement(
                        'small',
                        null,
                        '10+'
                    )
                ),
                _react2.default.createElement(
                    'td',
                    null,
                    props.getState(['armor', 'ac'], '')
                ),
                _react2.default.createElement(
                    'td',
                    null,
                    props.getState(['shield', 'ac'], '')
                ),
                _react2.default.createElement(
                    'td',
                    null,
                    props.getArmorLimitedDex()
                ),
                _react2.default.createElement(
                    'td',
                    null,
                    props.getState(['stat', 'size'], '')
                ),
                _react2.default.createElement(
                    'td',
                    null,
                    _react2.default.createElement(TextField, _extends({}, props, { propKey: ['ac', 'dodge'] }))
                ),
                _react2.default.createElement(
                    'td',
                    null,
                    _react2.default.createElement(TextField, _extends({}, props, { propKey: ['ac', 'natural'] }))
                ),
                _react2.default.createElement(
                    'td',
                    null,
                    _react2.default.createElement(TextField, _extends({}, props, { propKey: ['ac', 'deflect'] }))
                ),
                _react2.default.createElement(
                    'td',
                    null,
                    _react2.default.createElement(TextField, _extends({}, props, { propKey: ['ac', 'ac-misc'] }))
                ),
                _react2.default.createElement(
                    'td',
                    null,
                    _react2.default.createElement(TextField, _extends({}, props, { propKey: ['ac', 'temp'] }))
                ),
                _react2.default.createElement(
                    'td',
                    { className: raging ? "" : "hidden" },
                    _react2.default.createElement(
                        'small',
                        null,
                        rageBonus
                    )
                )
            ),
            _react2.default.createElement(
                'tr',
                null,
                _react2.default.createElement(
                    'th',
                    { className: 'active' },
                    'Touch'
                ),
                _react2.default.createElement(
                    'th',
                    { className: 'success' },
                    10 + props.getArmorLimitedDex() + props.getState(['stat', 'size'], 0) + props.getState(['ac', 'dodge'], 0) + props.getState(['ac', 'deflect'], 0) + props.getState(['ac', 'touch-misc'], 0) + props.getState(['ac', 'temp'], 0) + rageBonus
                ),
                _react2.default.createElement(
                    'td',
                    { className: 'hidden-xs' },
                    _react2.default.createElement(
                        'small',
                        null,
                        '10+'
                    )
                ),
                _react2.default.createElement(
                    'td',
                    null,
                    '-'
                ),
                _react2.default.createElement(
                    'td',
                    null,
                    '-'
                ),
                _react2.default.createElement(
                    'td',
                    null,
                    props.getArmorLimitedDex()
                ),
                _react2.default.createElement(
                    'td',
                    null,
                    props.getState(['stat', 'size'], '')
                ),
                _react2.default.createElement(
                    'td',
                    null,
                    props.getState(['ac', 'dodge'], '')
                ),
                _react2.default.createElement(
                    'td',
                    null,
                    '-'
                ),
                _react2.default.createElement(
                    'td',
                    null,
                    props.getState(['ac', 'deflect'], '')
                ),
                _react2.default.createElement(
                    'td',
                    null,
                    _react2.default.createElement(TextField, _extends({}, props, { propKey: ['ac', 'touch-misc'] }))
                ),
                _react2.default.createElement(
                    'td',
                    null,
                    props.getState(['ac', 'temp'], '')
                ),
                _react2.default.createElement(
                    'td',
                    { className: raging ? "" : "hidden" },
                    _react2.default.createElement(
                        'small',
                        null,
                        rageBonus
                    )
                )
            ),
            _react2.default.createElement(
                'tr',
                null,
                _react2.default.createElement(
                    'th',
                    { className: 'active' },
                    'Flat-foot'
                ),
                _react2.default.createElement(
                    'th',
                    { className: 'success' },
                    10 + props.getState(['armor', 'ac'], 0) + props.getState(['shield', 'ac'], 0) + props.getState(['stat', 'size'], 0) + props.getState(['ac', 'natural'], 0) + props.getState(['ac', 'deflect'], 0) + props.getState(['ac', 'ff-misc'], 0) + props.getState(['ac', 'temp'], 0) + flatFootDexPenalty + rageBonus
                ),
                _react2.default.createElement(
                    'td',
                    { className: 'hidden-xs' },
                    _react2.default.createElement(
                        'small',
                        null,
                        '10+'
                    )
                ),
                _react2.default.createElement(
                    'td',
                    null,
                    props.getState(['armor', 'ac'], '')
                ),
                _react2.default.createElement(
                    'td',
                    null,
                    props.getState(['shield', 'ac'], '')
                ),
                _react2.default.createElement(
                    'td',
                    null,
                    flatFootDexPenalty
                ),
                _react2.default.createElement(
                    'td',
                    null,
                    props.getState(['stat', 'size'], '')
                ),
                _react2.default.createElement(
                    'td',
                    null,
                    '-'
                ),
                _react2.default.createElement(
                    'td',
                    null,
                    props.getState(['ac', 'natural'], '')
                ),
                _react2.default.createElement(
                    'td',
                    null,
                    props.getState(['ac', 'deflect'], '')
                ),
                _react2.default.createElement(
                    'td',
                    null,
                    _react2.default.createElement(TextField, _extends({}, props, { propKey: ['ac', 'ff-misc'] }))
                ),
                _react2.default.createElement(
                    'td',
                    null,
                    props.getState(['ac', 'temp'], '')
                ),
                _react2.default.createElement(
                    'td',
                    { className: raging ? "" : "hidden" },
                    _react2.default.createElement(
                        'small',
                        null,
                        rageBonus
                    )
                )
            )
        )
    );
}

function SaveTableRow(props) {
    var raging = props.getState(['rage', 'enable'], false);
    var rageBonus = raging ? getRageState(props)[props.save] || 0 : 0;
    return _react2.default.createElement(
        'tr',
        null,
        _react2.default.createElement(
            'th',
            { className: 'active line-height-1' },
            props.save.toUpperCase(),
            _react2.default.createElement(
                'small',
                null,
                ' (',
                props.ability,
                ')'
            )
        ),
        _react2.default.createElement(
            'th',
            { className: 'success' },
            props.getClassTypeTotal(props.save) + props.getAbilityMod(props.ability) + props.getState([props.save, 'enhance'], 0) + props.getState([props.save, 'misc'], 0) + props.getState([props.save, 'temp'], 0) + rageBonus
        ),
        _react2.default.createElement(
            'td',
            null,
            props.getClassTypeTotal(props.save)
        ),
        _react2.default.createElement(
            'td',
            null,
            props.getAbilityMod(props.ability)
        ),
        _react2.default.createElement(
            'td',
            null,
            _react2.default.createElement(TextField, _extends({}, props, { propKey: [props.save, 'enhance'] }))
        ),
        _react2.default.createElement(
            'td',
            null,
            _react2.default.createElement(TextField, _extends({}, props, { propKey: [props.save, 'misc'] }))
        ),
        _react2.default.createElement(
            'td',
            null,
            _react2.default.createElement(TextField, _extends({}, props, { propKey: [props.save, 'temp'] }))
        ),
        _react2.default.createElement(
            'td',
            { className: raging ? "" : "hidden" },
            _react2.default.createElement(
                'small',
                null,
                rageBonus || ""
            )
        )
    );
}

var SaveTable = (0, _recompose.compose)((0, _recompose.onlyUpdateForKeys)([].concat(SAVES, ['stat'], CLASSES, ['rage'])), _recompose.pure)(SaveTableImpl);
function SaveTableImpl(props) {
    var raging = props.getState(['rage', 'enable'], false);
    return _react2.default.createElement(
        _reactBootstrap.Table,
        { condensed: true },
        _react2.default.createElement(
            'thead',
            null,
            _react2.default.createElement(
                'tr',
                null,
                _react2.default.createElement(
                    'th',
                    { className: 'save-name' },
                    _react2.default.createElement(
                        'small',
                        null,
                        'Save'
                    )
                ),
                _react2.default.createElement(
                    'th',
                    null,
                    _react2.default.createElement(
                        'small',
                        null,
                        'Total'
                    )
                ),
                _react2.default.createElement(
                    'th',
                    null,
                    _react2.default.createElement(
                        'small',
                        null,
                        _react2.default.createElement(
                            'span',
                            { className: 'hidden-xs' },
                            'Class '
                        ),
                        'base'
                    )
                ),
                _react2.default.createElement(
                    'th',
                    null,
                    _react2.default.createElement(
                        'small',
                        null,
                        'Abil',
                        _react2.default.createElement(
                            'span',
                            { className: 'hidden-xs' },
                            'ity'
                        )
                    )
                ),
                _react2.default.createElement(
                    'th',
                    null,
                    _react2.default.createElement(
                        'small',
                        null,
                        'Enh',
                        _react2.default.createElement(
                            'span',
                            { className: 'hidden-xs' },
                            'ance'
                        )
                    )
                ),
                _react2.default.createElement(
                    'th',
                    null,
                    _react2.default.createElement(
                        'small',
                        null,
                        'Misc'
                    )
                ),
                _react2.default.createElement(
                    'th',
                    null,
                    _react2.default.createElement(
                        'small',
                        null,
                        'Temp'
                    )
                ),
                _react2.default.createElement(
                    'th',
                    { className: raging ? "" : "hidden" },
                    _react2.default.createElement(
                        'small',
                        null,
                        'Rage'
                    )
                )
            )
        ),
        _react2.default.createElement(
            'tbody',
            null,
            _react2.default.createElement(SaveTableRow, _extends({}, props, { save: 'fort', ability: 'CON' })),
            _react2.default.createElement(SaveTableRow, _extends({}, props, { save: 'refl', ability: 'DEX' })),
            _react2.default.createElement(SaveTableRow, _extends({}, props, { save: 'will', ability: 'WIS' }))
        )
    );
}

var AttackTable = (0, _recompose.compose)((0, _recompose.onlyUpdateForKeys)([].concat(CLASSES, ['stat', 'rage', 'melee', 'ranged', 'cmb', 'cmd'])), _recompose.pure)(AttackTableImpl);
function AttackTableImpl(props) {
    var strMod = props.getAbilityMod('STR');
    var dexMod = props.getAbilityMod('DEX');
    var sizeMod = props.getState(['stat', 'size'], 0);
    var cmbAbilityMod = sizeMod < 2 ? strMod : dexMod;
    var attackRows = [{ name: 'melee', ability: strMod, size: sizeMod }, { name: 'ranged', ability: dexMod, size: sizeMod }].map(function (attack) {
        return _react2.default.createElement(
            'tr',
            null,
            _react2.default.createElement(
                'th',
                { className: 'active' },
                attack['name'].toUpperCase()
            ),
            _react2.default.createElement(
                'th',
                { className: 'success' },
                props.getClassTypeTotal('bab') + attack['ability'] + attack['size'] + props.getState([attack['name'], 'misc'], 0) + props.getState([attack['name'], 'temp'], 0)
            ),
            _react2.default.createElement('td', { className: 'hidden-xs' }),
            _react2.default.createElement(
                'td',
                null,
                props.getClassTypeTotal('bab')
            ),
            _react2.default.createElement(
                'td',
                null,
                attack['ability']
            ),
            _react2.default.createElement(
                'td',
                null,
                attack['size']
            ),
            _react2.default.createElement(
                'td',
                null,
                _react2.default.createElement(TextField, _extends({}, props, { propKey: [attack['name'], 'misc'] }))
            ),
            _react2.default.createElement(
                'td',
                null,
                _react2.default.createElement(TextField, _extends({}, props, { propKey: [attack['name'], 'temp'] }))
            )
        );
    });
    return _react2.default.createElement(
        _reactBootstrap.Table,
        { condensed: true },
        _react2.default.createElement(
            'thead',
            null,
            _react2.default.createElement(
                'tr',
                null,
                _react2.default.createElement(
                    'th',
                    { className: 'attack-name' },
                    _react2.default.createElement(
                        'small',
                        null,
                        'Attack'
                    )
                ),
                _react2.default.createElement(
                    'th',
                    null,
                    _react2.default.createElement(
                        'small',
                        null,
                        'Total'
                    )
                ),
                _react2.default.createElement('th', { className: 'hidden-xs' }),
                _react2.default.createElement(
                    'th',
                    null,
                    _react2.default.createElement(
                        'small',
                        null,
                        'BAB'
                    )
                ),
                _react2.default.createElement(
                    'th',
                    null,
                    _react2.default.createElement(
                        'small',
                        null,
                        'Abil',
                        _react2.default.createElement(
                            'span',
                            { className: 'hidden-xs' },
                            'ity'
                        )
                    )
                ),
                _react2.default.createElement(
                    'th',
                    null,
                    _react2.default.createElement(
                        'small',
                        null,
                        'Size'
                    )
                ),
                _react2.default.createElement(
                    'th',
                    null,
                    _react2.default.createElement(
                        'small',
                        null,
                        'Misc'
                    )
                ),
                _react2.default.createElement(
                    'th',
                    null,
                    _react2.default.createElement(
                        'small',
                        null,
                        'Temp'
                    )
                )
            )
        ),
        _react2.default.createElement(
            'tbody',
            null,
            attackRows,
            _react2.default.createElement(
                'tr',
                null,
                _react2.default.createElement(
                    'th',
                    { className: 'active' },
                    'CMB'
                ),
                _react2.default.createElement(
                    'th',
                    { className: 'success' },
                    props.getClassTypeTotal('bab') + cmbAbilityMod - sizeMod + props.getState(['cmb', 'misc'], 0) + props.getState(['cmb', 'temp'], 0)
                ),
                _react2.default.createElement('td', { className: 'hidden-xs' }),
                _react2.default.createElement(
                    'td',
                    null,
                    props.getClassTypeTotal('bab')
                ),
                _react2.default.createElement(
                    'td',
                    null,
                    _react2.default.createElement(
                        NoPrintAbbr,
                        { title: 'STR for small and larger, DEX for tiny and smaller. Use the misc modifier to adjust for the Agile Maneuvers feat.' },
                        cmbAbilityMod
                    )
                ),
                _react2.default.createElement(
                    'td',
                    null,
                    _react2.default.createElement(
                        NoPrintAbbr,
                        { title: '*special* size modifier' },
                        -sizeMod
                    )
                ),
                _react2.default.createElement(
                    'td',
                    null,
                    _react2.default.createElement(TextField, _extends({}, props, { propKey: ['cmb', 'misc'] }))
                ),
                _react2.default.createElement(
                    'td',
                    null,
                    _react2.default.createElement(TextField, _extends({}, props, { propKey: ['cmb', 'temp'] }))
                )
            ),
            _react2.default.createElement(
                'tr',
                null,
                _react2.default.createElement(
                    'th',
                    { className: 'active' },
                    'CMD'
                ),
                _react2.default.createElement(
                    'th',
                    { className: 'success' },
                    10 + props.getClassTypeTotal('bab') + strMod + dexMod + props.getState(['ac', 'dodge'], 0) + props.getState(['ac', 'deflect'], 0) - sizeMod + props.getState(['cmd', 'misc'], 0) + props.getState(['cmd', 'temp'], 0)
                ),
                _react2.default.createElement(
                    'td',
                    { className: 'hidden-xs' },
                    _react2.default.createElement(
                        'small',
                        null,
                        '10+'
                    )
                ),
                _react2.default.createElement(
                    'td',
                    null,
                    props.getClassTypeTotal('bab')
                ),
                _react2.default.createElement(
                    'td',
                    null,
                    _react2.default.createElement(
                        NoPrintAbbr,
                        { title: 'STR+DEX+dodge+deflect' },
                        strMod + dexMod + props.getState(['ac', 'dodge'], 0) + props.getState(['ac', 'deflect'], 0)
                    )
                ),
                _react2.default.createElement(
                    'td',
                    null,
                    _react2.default.createElement(
                        NoPrintAbbr,
                        { title: '*special* size modifier' },
                        -sizeMod
                    )
                ),
                _react2.default.createElement(
                    'td',
                    null,
                    _react2.default.createElement(
                        NoPrintAbbr,
                        { title: 'Add here any insight, luck, morale, profane, and sacred bonuses to AC' },
                        _react2.default.createElement(TextField, _extends({}, props, { propKey: ['cmd', 'misc'] }))
                    )
                ),
                _react2.default.createElement(
                    'td',
                    null,
                    _react2.default.createElement(TextField, _extends({}, props, { propKey: ['cmd', 'temp'] }))
                )
            )
        )
    );
}

function ArmorTable(props) {
    var armorKeys = ['ac', 'max-dex', 'skill-penalty', 'spell-fail', 'weight'];
    var armorControls = armorKeys.map(function (key) {
        return _react2.default.createElement(
            'td',
            null,
            _react2.default.createElement(TextField, _extends({}, props, { propKey: ['armor', key] }))
        );
    });
    var shieldControls = armorKeys.map(function (key) {
        return _react2.default.createElement(
            'td',
            null,
            _react2.default.createElement(TextField, _extends({}, props, { propKey: ['shield', key] }))
        );
    });
    return _react2.default.createElement(
        _reactBootstrap.Table,
        { condensed: true, className: 'armor-table' },
        _react2.default.createElement(
            'thead',
            null,
            _react2.default.createElement(
                'tr',
                null,
                _react2.default.createElement('th', null),
                _react2.default.createElement(
                    'th',
                    { className: 'armor-name' },
                    _react2.default.createElement(
                        'small',
                        null,
                        'Armor name & description'
                    )
                ),
                _react2.default.createElement(
                    'th',
                    null,
                    _react2.default.createElement(
                        'small',
                        null,
                        'AC Bonus'
                    )
                ),
                _react2.default.createElement(
                    'th',
                    null,
                    _react2.default.createElement(
                        'small',
                        null,
                        'Max Dex'
                    )
                ),
                _react2.default.createElement(
                    'th',
                    null,
                    _react2.default.createElement(
                        'small',
                        null,
                        'Check penalty'
                    )
                ),
                _react2.default.createElement(
                    'th',
                    null,
                    _react2.default.createElement(
                        'small',
                        null,
                        'Spell fail'
                    )
                ),
                _react2.default.createElement(
                    'th',
                    null,
                    _react2.default.createElement(
                        'small',
                        null,
                        'Weight'
                    )
                ),
                _react2.default.createElement(
                    'th',
                    null,
                    _react2.default.createElement(
                        'small',
                        null,
                        'Type'
                    )
                )
            )
        ),
        _react2.default.createElement(
            'tbody',
            null,
            _react2.default.createElement(
                'tr',
                null,
                _react2.default.createElement(
                    'th',
                    { className: 'active' },
                    _react2.default.createElement(
                        'small',
                        null,
                        'Armor'
                    )
                ),
                _react2.default.createElement(
                    'td',
                    null,
                    _react2.default.createElement(NoteArea, _extends({}, props, { propKey: ['armor', 'desc'],
                        placeholder: 'armor note', onerow: true }))
                ),
                armorControls,
                _react2.default.createElement(
                    'td',
                    null,
                    _react2.default.createElement(SelectField, _extends({}, props, { propKey: ['armor', 'type'], options: ARMOR_TYPES,
                        className: 'appearance-none' }))
                )
            ),
            _react2.default.createElement(
                'tr',
                null,
                _react2.default.createElement(
                    'th',
                    { className: 'active' },
                    _react2.default.createElement(
                        'small',
                        null,
                        'Shield'
                    )
                ),
                _react2.default.createElement(
                    'td',
                    null,
                    _react2.default.createElement(NoteArea, _extends({}, props, { propKey: ['shield', 'desc'],
                        placeholder: 'shield note', onerow: true }))
                ),
                shieldControls
            )
        )
    );
}

var WeaponTable = (0, _recompose.compose)((0, _recompose.onlyUpdateForKeys)(WEAPONS), _recompose.pure)(WeaponTableImpl);
function WeaponTableImpl(props) {
    var weaponKeys = ['bonus', 'dmg', 'crit', 'range', 'type', 'weight'];
    var weaponRows = [];
    for (var i = 0; i < 20; i++) {
        if (i > 0 && isEmpty(props.getState(['weapon' + (i - 1)]))) break;
        var cells = weaponKeys.map(function (key) {
            return _react2.default.createElement(
                'td',
                null,
                _react2.default.createElement(TextField, _extends({}, props, { propKey: ['weapon' + i, key] }))
            );
        });
        var row = _react2.default.createElement(
            'tr',
            null,
            _react2.default.createElement(
                'td',
                null,
                _react2.default.createElement(NoteArea, _extends({}, props, { propKey: ['weapon' + i, 'desc'],
                    placeholder: 'name', onerow: true }))
            ),
            cells,
            _react2.default.createElement(
                'td',
                null,
                _react2.default.createElement(NoteArea, _extends({}, props, { propKey: ['weapon' + i, 'note'],
                    placeholder: 'notes', onerow: true }))
            )
        );
        weaponRows = [].concat(_toConsumableArray(weaponRows), [row]);
    }
    return _react2.default.createElement(
        _reactBootstrap.Table,
        { condensed: true, className: 'weapon-table' },
        _react2.default.createElement(
            'thead',
            null,
            _react2.default.createElement(
                'tr',
                null,
                _react2.default.createElement(
                    'th',
                    { className: 'weapon-name' },
                    _react2.default.createElement(
                        'small',
                        null,
                        'Weapon name & description'
                    )
                ),
                _react2.default.createElement(
                    'th',
                    { className: 'weapon-bonus' },
                    _react2.default.createElement(
                        'small',
                        null,
                        'Attack bonus'
                    )
                ),
                _react2.default.createElement(
                    'th',
                    { className: 'weapon-damage' },
                    _react2.default.createElement(
                        'small',
                        null,
                        'Damage'
                    )
                ),
                _react2.default.createElement(
                    'th',
                    { className: 'weapon-critical' },
                    _react2.default.createElement(
                        'small',
                        null,
                        'Critical'
                    )
                ),
                _react2.default.createElement(
                    'th',
                    { className: 'weapon-range' },
                    _react2.default.createElement(
                        'small',
                        null,
                        'Range'
                    )
                ),
                _react2.default.createElement(
                    'th',
                    { className: 'weapon-type' },
                    _react2.default.createElement(
                        'small',
                        null,
                        'Type'
                    )
                ),
                _react2.default.createElement(
                    'th',
                    { className: 'weapon-weight' },
                    _react2.default.createElement(
                        'small',
                        null,
                        'Weight'
                    )
                ),
                _react2.default.createElement(
                    'th',
                    null,
                    _react2.default.createElement(
                        'small',
                        null,
                        'Notes & ammo'
                    )
                )
            )
        ),
        _react2.default.createElement(
            'tbody',
            null,
            weaponRows
        )
    );
}

function CheckboxField(props) {
    var propKey = props.propKey,
        inline = props.inline;

    return _react2.default.createElement(
        _reactBootstrap.FormGroup,
        { controlId: propKey.join('-') },
        _react2.default.createElement(
            _reactBootstrap.Checkbox,
            { inline: inline,
                checked: props.getState(propKey),
                onChange: props.handleChange(propKey) },
            props.children
        )
    );
}
function SelectField(props) {
    var propKey = props.propKey,
        className = props.className,
        options = props.options;

    var currVal = props.getState(propKey);
    var emptyOption = options.indexOf(currVal) > -1 ? "" : _react2.default.createElement('option', null);
    var optionList = options.map(function (option, index) {
        return _react2.default.createElement(
            'option',
            { value: option },
            option
        );
    });
    return _react2.default.createElement(
        _reactBootstrap.FormGroup,
        { controlId: propKey.join('-'), bsSize: props.bsSize || "sm" },
        _react2.default.createElement(
            _reactBootstrap.FormControl,
            { componentClass: 'select',
                className: className,
                placeholder: props.getState(propKey),
                value: props.getState(propKey),
                onChange: props.handleChange(propKey) },
            emptyOption,
            optionList
        )
    );
}

var SKILL_AC_PENALTY_ABILITIES = ['STR', 'DEX'];
function CustomSkillRow(props) {
    var propKey = props.propKey;

    var abilityKey = [].concat(_toConsumableArray(propKey), ['ability']);
    var ability = props.getState(abilityKey);
    var hasAcPenalty = SKILL_AC_PENALTY_ABILITIES.indexOf(ability) > -1;
    var nameField = _react2.default.createElement(
        'span',
        null,
        _react2.default.createElement(TextField, _extends({}, props, { propKey: [].concat(_toConsumableArray(propKey), ['categ']) })),
        hasAcPenalty ? "*" : ""
    );
    var abilityField = _react2.default.createElement(SelectField, _extends({}, props, { propKey: abilityKey, options: STATS }));
    var empty = isEmpty(props.getState([].concat(_toConsumableArray(propKey), ['categ']), {}));
    return _react2.default.createElement(SkillRowBase, _extends({}, props, { nameField: nameField, ability: ability,
        abilityField: abilityField, hasAcPenalty: hasAcPenalty, empty: empty }));
}
function SkillRow(props) {
    var propKey = props.propKey,
        name = props.name,
        ability = props.ability,
        hasCategory = props.hasCategory;

    var hasAcPenalty = SKILL_AC_PENALTY_ABILITIES.indexOf(ability) > -1;
    var dispName = name + (hasCategory ? ': ' : '');
    var categoryField = hasCategory ? _react2.default.createElement(TextField, _extends({}, props, { propKey: [].concat(_toConsumableArray(propKey), ['categ']) })) : "";
    var nameField = _react2.default.createElement(
        'span',
        null,
        dispName,
        categoryField
    );
    return _react2.default.createElement(SkillRowBase, _extends({}, props, { nameField: nameField, ability: ability,
        abilityField: ability, hasAcPenalty: hasAcPenalty }));
}

function SkillRowBase(props) {
    var propKey = props.propKey,
        nameField = props.nameField,
        ability = props.ability,
        abilityField = props.abilityField,
        hasAcPenalty = props.hasAcPenalty,
        isUntrainedUse = props.isUntrainedUse,
        empty = props.empty;

    var ranks = props.getState([].concat(_toConsumableArray(propKey), ['ranks']));
    var isClass = props.getState([].concat(_toConsumableArray(propKey), ['is-class']));
    return _react2.default.createElement(
        'tr',
        null,
        _react2.default.createElement(
            'td',
            { className: 'skill-name' },
            _react2.default.createElement(
                CheckboxField,
                _extends({}, props, { inline: true, propKey: [].concat(_toConsumableArray(propKey), ['is-class']) }),
                _react2.default.createElement(
                    'small',
                    null,
                    nameField
                )
            )
        ),
        _react2.default.createElement(
            'td',
            { className: 'skill-ability' },
            _react2.default.createElement(
                'small',
                null,
                empty ? '' : abilityField
            )
        ),
        _react2.default.createElement(
            'th',
            { className: 'success' },
            _react2.default.createElement(
                'small',
                null,
                isUntrainedUse || ranks !== undefined ? props.getState([].concat(_toConsumableArray(propKey), ['ranks']), 0) + props.getAbilityMod(ability) + (ranks > 0 && isClass ? 3 : 0) + props.getState([].concat(_toConsumableArray(propKey), ['misc']), 0) + props.getState([].concat(_toConsumableArray(propKey), ['temp']), 0) - (hasAcPenalty ? props.getCurrentSkillCheckPenalty() : 0) + (hasAcPenalty ? '*' : '') : ""
            )
        ),
        _react2.default.createElement(
            'td',
            null,
            _react2.default.createElement(
                'small',
                null,
                _react2.default.createElement(TextField, _extends({}, props, { propKey: [].concat(_toConsumableArray(propKey), ['ranks']) }))
            )
        ),
        _react2.default.createElement(
            'td',
            null,
            _react2.default.createElement(
                'small',
                null,
                empty ? '' : props.getAbilityMod(ability)
            )
        ),
        _react2.default.createElement(
            'td',
            null,
            _react2.default.createElement(
                'small',
                null,
                ranks > 0 && isClass ? 3 : 0
            )
        ),
        _react2.default.createElement(
            'td',
            null,
            _react2.default.createElement(
                'small',
                null,
                _react2.default.createElement(TextField, _extends({}, props, { propKey: [].concat(_toConsumableArray(propKey), ['misc']) }))
            )
        ),
        _react2.default.createElement(
            'td',
            null,
            _react2.default.createElement(
                'small',
                null,
                _react2.default.createElement(TextField, _extends({}, props, { propKey: [].concat(_toConsumableArray(propKey), ['temp']) }))
            )
        )
    );
}

var SkillTable = (0, _recompose.compose)((0, _recompose.onlyUpdateForKeys)(['skill', 'stat', 'armor', 'shield'].concat(CLASSES, ['load', 'eq'], WEAPONS)), _recompose.pure)(SkillTableImpl);
function SkillTableImpl(props) {
    var SKILL_ABILITIES = ['DEX', 'INT', 'CHA', 'STR', 'INT', 'CHA', 'DEX', 'CHA', 'DEX', 'DEX', 'CHA', 'WIS', 'CHA', 'INT', 'INT', 'WIS', 'CHA', 'WIS', 'DEX', 'WIS', 'DEX', 'INT', 'DEX', 'WIS', 'STR', 'CHA', ''];
    var SKILL_NAMES = ['Acrobatics', 'Appraise', 'Bluff', 'Climb', 'Craft', 'Diplomacy', 'Disable Device', 'Disguise', 'Escape Artist', 'Fly', 'Handle Animal', 'Heal', 'Intimidate', 'Kn', 'Linguistics', 'Perception', 'Perf', 'Prof', 'Ride', 'Sense Motive', 'Sleight of Hand', 'Spellcraft', 'Stealth', 'Survival', 'Swim', 'Use Magic Device'];
    var SKILLS_UNTRAINED_USE = ['Skill', 'Acrobatics', 'Appraise', 'Bluff', 'Climb', 'Craft', 'Diplomacy', 'Disguise', 'Escape Artist', 'Fly', 'Heal', 'Intimidate', 'Perception', 'Perf', 'Ride', 'Sense Motive', 'Stealth', 'Survival', 'Swim'];
    var CATEGORY_SKILLS = ['Craft', 'Kn', 'Perf', 'Prof'];
    var skillRows = SKILL_NAMES.reduce(function (rows, name, i) {
        var hasCategory = CATEGORY_SKILLS.indexOf(name) > -1;
        var isUntrainedUse = SKILLS_UNTRAINED_USE.indexOf(name) > -1;
        if (!hasCategory) {
            rows = rows.concat(_react2.default.createElement(SkillRow, _extends({}, props, { name: name,
                propKey: ['skill', name.toLowerCase()],
                isUntrainedUse: isUntrainedUse,
                ability: SKILL_ABILITIES[i], hasCategory: hasCategory })));
            return rows;
        }
        for (var categoryIndex = 0; categoryIndex < 10; categoryIndex++) {
            var propKey = ['skill', name.toLowerCase() + categoryIndex];
            var prevKey = ['skill', name.toLowerCase() + (categoryIndex - 1)];
            if (categoryIndex > 0 && isEmpty(props.getState(prevKey, {})) && isEmpty(props.getState(propKey, {}))) {
                continue;
            }
            rows = rows.concat(_react2.default.createElement(SkillRow, _extends({}, props, { name: name, propKey: propKey,
                isUntrainedUse: isUntrainedUse,
                ability: SKILL_ABILITIES[i], hasCategory: hasCategory })));
        }
        return rows;
    }, []);
    var customSkillRows = [];
    for (var categoryIndex = 0; categoryIndex < 10; categoryIndex++) {
        var propKey = ['skill', 'custom' + categoryIndex];
        var prevKey = ['skill', 'custom' + (categoryIndex - 1)];
        if (categoryIndex > 0 && isEmpty(props.getState([].concat(prevKey, ['categ']), {})) && isEmpty(props.getState(propKey, {}))) {
            continue;
        }
        customSkillRows = customSkillRows.concat(_react2.default.createElement(CustomSkillRow, _extends({}, props, { propKey: propKey })));
    }
    var totalSkillRanks = props.getClassTypeTotal('skill');
    var assignedSkillRanks = props.skill && Object.keys(props.skill).reduce(function (sum, skill) {
        return sum + props.getState(['skill', skill, 'ranks'], 0);
    }, 0);
    var unassignedSkillRanks = totalSkillRanks - assignedSkillRanks;
    var unassignedLabel = " (unused ranks " + unassignedSkillRanks + ")";
    return _react2.default.createElement(
        _reactBootstrap.Table,
        { striped: true, condensed: true, className: 'skill-table' },
        _react2.default.createElement(
            'thead',
            null,
            _react2.default.createElement(
                'tr',
                null,
                _react2.default.createElement(
                    'th',
                    { className: 'skill-name', colSpan: 2 },
                    _react2.default.createElement(
                        'small',
                        null,
                        'Skill',
                        unassignedLabel
                    )
                ),
                _react2.default.createElement(
                    'th',
                    null,
                    _react2.default.createElement(
                        'small',
                        null,
                        'Total'
                    )
                ),
                _react2.default.createElement(
                    'th',
                    null,
                    _react2.default.createElement(
                        'small',
                        null,
                        'Ranks'
                    )
                ),
                _react2.default.createElement(
                    'th',
                    null,
                    _react2.default.createElement(
                        'small',
                        null,
                        'Abil'
                    )
                ),
                _react2.default.createElement(
                    'th',
                    null,
                    _react2.default.createElement(
                        'small',
                        null,
                        'Trn.'
                    )
                ),
                _react2.default.createElement(
                    'th',
                    null,
                    _react2.default.createElement(
                        'small',
                        null,
                        'Misc'
                    )
                ),
                _react2.default.createElement(
                    'th',
                    null,
                    _react2.default.createElement(
                        'small',
                        null,
                        'Temp'
                    )
                )
            )
        ),
        _react2.default.createElement(
            'tbody',
            null,
            skillRows,
            customSkillRows
        ),
        _react2.default.createElement(
            'tfoot',
            { className: 'small' },
            _react2.default.createElement(
                'tr',
                null,
                _react2.default.createElement(
                    'td',
                    { colSpan: 8 },
                    '*: denotes that current skill check penalty is applied:',
                    props.getCurrentSkillCheckPenalty(),
                    _react2.default.createElement('br', null),
                    '(using a move action to drop your equipment would change it to:',
                    props.getArmedSkillCheckPenalty(),
                    ')'
                )
            )
        )
    );
}

function getRageState(props) {
    var rageLevel = props.getState(['rage', 'level']);
    return rageLevel > 19 ? { header: 'Mighty Rage', STR: 8, CON: 8, will: 4, ac: -2 } : rageLevel > 10 ? { header: 'Greater Rage', STR: 6, CON: 6, will: 3, ac: -2 } : { header: 'Rage', STR: 4, CON: 4, will: 2, ac: -2 };
}

function EquipmentTable(props) {
    var equipmentRows = [];
    for (var i = 0; i < 50; i++) {
        var propKey = ['eq', '' + i];
        var prevKey = ['eq', '' + (i - 1)];
        if (i > 0 && isEmpty(props.getState(prevKey, {})) && isEmpty(props.getState(propKey, {}))) {
            continue;
        }
        equipmentRows = equipmentRows.concat(_react2.default.createElement(EquipmentRow, _extends({}, props, { propKey: propKey })));
    }
    return _react2.default.createElement(
        _reactBootstrap.Table,
        { condensed: true, className: 'equipment-table' },
        _react2.default.createElement(
            'thead',
            null,
            _react2.default.createElement(
                'tr',
                null,
                _react2.default.createElement(
                    'th',
                    { className: 'equipment-name' },
                    _react2.default.createElement(
                        'small',
                        null,
                        'Equipment name & description'
                    )
                ),
                _react2.default.createElement(
                    'th',
                    null,
                    _react2.default.createElement(
                        'small',
                        null,
                        'Value'
                    )
                ),
                _react2.default.createElement(
                    'th',
                    null,
                    _react2.default.createElement(
                        'small',
                        null,
                        'Weight'
                    )
                )
            )
        ),
        _react2.default.createElement(
            'tbody',
            null,
            equipmentRows
        )
    );
}

function EquipmentRow(props) {
    var propKey = props.propKey;

    return _react2.default.createElement(
        'tr',
        null,
        _react2.default.createElement(
            'td',
            null,
            _react2.default.createElement(
                'small',
                null,
                _react2.default.createElement(NoteArea, _extends({}, props, { placeholder: 'name note', propKey: [].concat(_toConsumableArray(propKey), ['name']), onerow: true }))
            )
        ),
        _react2.default.createElement(
            'td',
            null,
            _react2.default.createElement(TextField, _extends({}, props, { propKey: [].concat(_toConsumableArray(propKey), ['value']) }))
        ),
        _react2.default.createElement(
            'td',
            null,
            _react2.default.createElement(TextField, _extends({}, props, { propKey: [].concat(_toConsumableArray(propKey), ['weight']) }))
        )
    );
}

var RagePanel = (0, _recompose.compose)((0, _recompose.onlyUpdateForKeys)(['rage', 'stat', 'note']), _recompose.pure)(RagePanelImpl);
function RagePanelImpl(props) {
    if (!props.getState(['rage'])) {
        return _react2.default.createElement('span', null);
    }
    var rageLevel = props.getState(['rage', 'level']);
    var rageRounds = 2 + 2 * rageLevel + props.getAbilityMod('CON', true) + props.getState(['rage', 'rounds', 'misc'], 0) - props.getState(['rage', 'rounds', 'used'], 0);
    var rageState = getRageState(props);
    var headerCheckbox = _react2.default.createElement(
        CheckboxField,
        _extends({}, props, { inline: true, propKey: ['rage', 'enable'] }),
        rageState.header
    );
    var validationRageEnabled = props.getState(['rage', 'enable'], false) ? "success" : "";
    // console.debug( 'validationRageEnabled', validationRageEnabled, props.getState(['rage','enable'],false) );
    return _react2.default.createElement(
        _reactBootstrap.Panel,
        { header: headerCheckbox },
        _react2.default.createElement(
            _reactBootstrap.Row,
            null,
            _react2.default.createElement(
                _reactBootstrap.Col,
                { sm: 8 },
                _react2.default.createElement(
                    _reactBootstrap.Row,
                    null,
                    _react2.default.createElement(ColTextField, _extends({}, props, { label: 'Class levels', propKey: ['rage', 'level'], xs: 3 })),
                    _react2.default.createElement(ColTextField, _extends({}, props, { label: 'Misc rounds', propKey: ['rage', 'rounds', 'misc'], xs: 3 })),
                    _react2.default.createElement(ColTextField, _extends({}, props, { label: 'Used rounds', validationState: 'warning', propKey: ['rage', 'rounds', 'used'], xs: 3 })),
                    _react2.default.createElement(
                        ColText,
                        { label: 'Rounds of rage left', validationState: 'success', xs: 3 },
                        rageRounds
                    )
                ),
                _react2.default.createElement(
                    _reactBootstrap.Row,
                    null,
                    _react2.default.createElement(
                        ColText,
                        { label: 'STR bonus', validationState: validationRageEnabled, xs: 3 },
                        rageState.STR
                    ),
                    _react2.default.createElement(
                        ColText,
                        { label: 'CON bonus', validationState: validationRageEnabled, xs: 3 },
                        rageState.CON
                    ),
                    _react2.default.createElement(
                        ColText,
                        { label: 'Will bonus', validationState: validationRageEnabled, xs: 3 },
                        rageState.will
                    ),
                    _react2.default.createElement(
                        ColText,
                        { label: 'AC penalty', validationState: validationRageEnabled, xs: 3 },
                        rageState.ac
                    )
                )
            ),
            _react2.default.createElement(
                _reactBootstrap.Col,
                { sm: 4 },
                _react2.default.createElement(NoteArea, _extends({}, props, { noteKey: 'rage', val: props.note.rage }))
            )
        )
    );
}

function SpellcasterPanels(props) {
    var panels = SPELLCASTERS.map(function (k) {
        return _react2.default.createElement(SpellTablePanel, _extends({}, props, { propKey: [k] }));
    });
    return _react2.default.createElement(
        'div',
        null,
        panels
    );
}

function SpellTablePanelHeader(props) {
    var propKey = props.propKey;

    return _react2.default.createElement(
        _reactBootstrap.Table,
        { condensed: true, className: 'spells-header-table' },
        _react2.default.createElement(
            'thead',
            null,
            _react2.default.createElement(
                'tr',
                { className: 'middle' },
                _react2.default.createElement(
                    'td',
                    null,
                    'Spellcaster class:'
                ),
                _react2.default.createElement(
                    'td',
                    null,
                    _react2.default.createElement(TextField, _extends({}, props, { bsSize: 'sm', propKey: [].concat(_toConsumableArray(propKey), ['className']) }))
                ),
                _react2.default.createElement(
                    'td',
                    null,
                    'Level:'
                ),
                _react2.default.createElement(
                    'td',
                    null,
                    _react2.default.createElement(TextField, _extends({}, props, { bsSize: 'sm', propKey: [].concat(_toConsumableArray(propKey), ['level']) }))
                ),
                _react2.default.createElement(
                    'td',
                    null,
                    'Ability:'
                ),
                _react2.default.createElement(
                    'td',
                    null,
                    _react2.default.createElement(SelectField, _extends({}, props, { propKey: [].concat(_toConsumableArray(propKey), ['ability']), options: STATS }))
                )
            )
        )
    );
}

var RANGES = ['personal', 'touch', 'close', 'medium', 'long'];
function SpellTablePanelRow(props) {
    var propKey = props.propKey,
        level = props.level,
        dcPlaceholder = props.dcPlaceholder;

    var prep = props.getState([].concat(_toConsumableArray(propKey), ['prep']));
    var used = props.getState([].concat(_toConsumableArray(propKey), ['used']), 0);
    var propsDC = _extends({}, props, { placeholder: dcPlaceholder });
    var prepCell = { className: prep > 0 ? "success" : "" };
    var usedCell = { className: prep < used ? "danger" : "warning" };
    return _react2.default.createElement(
        'tr',
        null,
        _react2.default.createElement(
            'th',
            { className: 'active' },
            level
        ),
        _react2.default.createElement(
            'td',
            null,
            _react2.default.createElement(CheckboxField, _extends({}, props, { propKey: [].concat(_toConsumableArray(propKey), ['SR']) }))
        ),
        _react2.default.createElement(
            'td',
            null,
            _react2.default.createElement(TextField, _extends({}, propsDC, { propKey: [].concat(_toConsumableArray(propKey), ['dc']) }))
        ),
        _react2.default.createElement(
            'td',
            null,
            _react2.default.createElement(TextField, _extends({}, props, { propKey: [].concat(_toConsumableArray(propKey), ['save']) }))
        ),
        _react2.default.createElement(
            'td',
            prepCell,
            _react2.default.createElement(TextField, _extends({}, props, { propKey: [].concat(_toConsumableArray(propKey), ['prep']) }))
        ),
        _react2.default.createElement(
            'td',
            usedCell,
            _react2.default.createElement(TextField, _extends({}, props, { propKey: [].concat(_toConsumableArray(propKey), ['used']) }))
        ),
        _react2.default.createElement(
            'td',
            null,
            _react2.default.createElement(NoteArea, _extends({}, props, { propKey: [].concat(_toConsumableArray(propKey), ['name']),
                placeholder: 'spell name & description', onerow: true }))
        ),
        _react2.default.createElement(
            'td',
            null,
            _react2.default.createElement(TextField, _extends({}, props, { propKey: [].concat(_toConsumableArray(propKey), ['school']) }))
        ),
        _react2.default.createElement(
            'td',
            null,
            _react2.default.createElement(TextField, _extends({}, props, { propKey: [].concat(_toConsumableArray(propKey), ['duration']) }))
        ),
        _react2.default.createElement(
            'td',
            { className: 'spell-range' },
            _react2.default.createElement(SelectField, _extends({}, props, { propKey: [].concat(_toConsumableArray(propKey), ['range']), options: RANGES,
                className: 'appearance-none' }))
        )
    );
}

function SpellTablePanel(props) {
    var propKey = props.propKey;

    if (!props.getState(propKey)) {
        return null;
    }
    var spellTableRows = [];
    var abilityMod = props.getAbilityMod(props.getState([].concat(_toConsumableArray(propKey), ['ability'])), true);
    var rows = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9].map(function (lev) {
        if (lev > 0 && props.getState([].concat(_toConsumableArray(propKey), ['l' + (lev - 1), 'class'])) === undefined) return;
        var levelKey = [].concat(_toConsumableArray(propKey), ['l' + lev]);
        var hideLast = props.getState([].concat(_toConsumableArray(levelKey), ['class'])) === undefined ? 'hidden' : '';
        var abilityBonus = lev == 0 ? 0 : abilityMod;
        for (var i = 0; i < props.getState([].concat(_toConsumableArray(levelKey), ['known']), 0); i++) {
            if (i > 0 && props.getState([].concat(_toConsumableArray(levelKey), [String(i - 1)])) === undefined && props.getState([].concat(_toConsumableArray(levelKey), [String(i)])) === undefined) continue;
            spellTableRows = [].concat(_toConsumableArray(spellTableRows), [_react2.default.createElement(SpellTablePanelRow, _extends({}, props, {
                dcPlaceholder: props.getState([].concat(_toConsumableArray(levelKey), ['dc']), 10 + lev + abilityMod),
                propKey: [].concat(_toConsumableArray(levelKey), [String(i)]), level: lev }))]);
        }
        var remainingSpells = props.getState([].concat(_toConsumableArray(levelKey), ['class'])) === undefined ? "" : abilityBonus - props.getState([].concat(_toConsumableArray(levelKey), ['used']), 0) + ['class', 'misc'].reduce(function (sum, key) {
            return sum + props.getState([].concat(_toConsumableArray(levelKey), [key]), 0);
        }, 0);
        var remainingProps = { className: remainingSpells > 0 ? "success" : "text-center" };
        var usedProps = { className: props.getState([].concat(_toConsumableArray(levelKey), ['class'])) === undefined ? "" : remainingSpells < 0 ? "danger" : "warning" };
        return _react2.default.createElement(
            'tr',
            null,
            _react2.default.createElement(
                'th',
                { className: 'active' },
                lev
            ),
            _react2.default.createElement(
                'td',
                null,
                _react2.default.createElement(TextField, _extends({}, props, { className: hideLast,
                    propKey: [].concat(_toConsumableArray(levelKey), ['known']) }))
            ),
            _react2.default.createElement(
                'td',
                null,
                _react2.default.createElement(TextField, _extends({}, props, { className: hideLast, propKey: [].concat(_toConsumableArray(levelKey), ['dc']),
                    placeholder: 10 + lev + abilityMod }))
            ),
            _react2.default.createElement(
                'th',
                remainingProps,
                remainingSpells
            ),
            _react2.default.createElement(
                'td',
                null,
                _react2.default.createElement(TextField, _extends({}, props, { propKey: [].concat(_toConsumableArray(levelKey), ['class']) }))
            ),
            _react2.default.createElement(
                'td',
                null,
                hideLast ? '' : abilityBonus || ''
            ),
            _react2.default.createElement(
                'td',
                null,
                _react2.default.createElement(TextField, _extends({}, props, { className: hideLast,
                    propKey: [].concat(_toConsumableArray(levelKey), ['misc']) }))
            ),
            _react2.default.createElement(
                'td',
                usedProps,
                _react2.default.createElement(TextField, _extends({}, props, { className: hideLast,
                    propKey: [].concat(_toConsumableArray(levelKey), ['used']) }))
            )
        );
    });
    return _react2.default.createElement(
        _reactBootstrap.Panel,
        { header: SpellTablePanelHeader(_extends({}, props, { propKey: propKey })) },
        _react2.default.createElement(
            _reactBootstrap.Row,
            null,
            _react2.default.createElement(
                _reactBootstrap.Col,
                { sm: 6 },
                _react2.default.createElement(
                    _reactBootstrap.Table,
                    { condensed: true, className: 'spells-table' },
                    _react2.default.createElement(
                        'thead',
                        null,
                        _react2.default.createElement(
                            'tr',
                            null,
                            _react2.default.createElement(
                                'th',
                                null,
                                _react2.default.createElement(
                                    'small',
                                    null,
                                    'Spell Level'
                                )
                            ),
                            _react2.default.createElement(
                                'th',
                                null,
                                _react2.default.createElement(
                                    'small',
                                    null,
                                    '#Spells known'
                                )
                            ),
                            _react2.default.createElement(
                                'th',
                                null,
                                _react2.default.createElement(
                                    'small',
                                    null,
                                    'Save DC'
                                )
                            ),
                            _react2.default.createElement(
                                'th',
                                null,
                                _react2.default.createElement(
                                    'small',
                                    null,
                                    'Spells remaining'
                                )
                            ),
                            _react2.default.createElement(
                                'th',
                                null,
                                _react2.default.createElement(
                                    'small',
                                    null,
                                    'Class daily #'
                                )
                            ),
                            _react2.default.createElement(
                                'th',
                                null,
                                _react2.default.createElement(
                                    'small',
                                    null,
                                    'Ability bonus'
                                )
                            ),
                            _react2.default.createElement(
                                'th',
                                null,
                                _react2.default.createElement(
                                    'small',
                                    null,
                                    'Misc bonus'
                                )
                            ),
                            _react2.default.createElement(
                                'th',
                                null,
                                _react2.default.createElement(
                                    'small',
                                    null,
                                    'Used'
                                )
                            )
                        )
                    ),
                    _react2.default.createElement(
                        'tbody',
                        null,
                        rows
                    )
                )
            ),
            _react2.default.createElement(
                _reactBootstrap.Col,
                { sm: 6 },
                _react2.default.createElement(
                    _reactBootstrap.Table,
                    { condensed: true, className: 'spellRange-table' },
                    _react2.default.createElement(
                        'thead',
                        null,
                        _react2.default.createElement(
                            'tr',
                            null,
                            _react2.default.createElement('td', null),
                            _react2.default.createElement(
                                'td',
                                null,
                                'Close'
                            ),
                            _react2.default.createElement(
                                'td',
                                null,
                                'Medium'
                            ),
                            _react2.default.createElement(
                                'td',
                                null,
                                'Long'
                            )
                        )
                    ),
                    _react2.default.createElement(
                        'tbody',
                        null,
                        _react2.default.createElement(
                            'tr',
                            null,
                            _react2.default.createElement(
                                'td',
                                { className: 'active' },
                                'Range (ft)'
                            ),
                            _react2.default.createElement(
                                'th',
                                { className: 'success' },
                                25 + 5 * Math.floor(props.getState([].concat(_toConsumableArray(propKey), ['level'])) / 2)
                            ),
                            _react2.default.createElement(
                                'th',
                                { className: 'success' },
                                100 + 10 * props.getState([].concat(_toConsumableArray(propKey), ['level']))
                            ),
                            _react2.default.createElement(
                                'th',
                                { className: 'success' },
                                400 + 40 * props.getState([].concat(_toConsumableArray(propKey), ['level']))
                            )
                        )
                    )
                ),
                _react2.default.createElement(NoteArea, _extends({}, props, { placeholder: 'Specialty, domain, familiar, etc. notes',
                    propKey: [].concat(_toConsumableArray(propKey), ['note']), val: props.getState([].concat(_toConsumableArray(propKey), ['note'])) }))
            )
        ),
        _react2.default.createElement(
            _reactBootstrap.Row,
            null,
            _react2.default.createElement(
                _reactBootstrap.Col,
                { xs: 12 },
                _react2.default.createElement(
                    _reactBootstrap.Table,
                    { condensed: true, className: 'spell-list-table' },
                    _react2.default.createElement(
                        'thead',
                        null,
                        _react2.default.createElement(
                            'tr',
                            null,
                            _react2.default.createElement(
                                'th',
                                null,
                                _react2.default.createElement(
                                    'small',
                                    null,
                                    'Lvl'
                                )
                            ),
                            _react2.default.createElement(
                                'th',
                                null,
                                _react2.default.createElement(
                                    'small',
                                    null,
                                    'SR'
                                )
                            ),
                            _react2.default.createElement(
                                'th',
                                null,
                                _react2.default.createElement(
                                    'small',
                                    null,
                                    'DC'
                                )
                            ),
                            _react2.default.createElement(
                                'th',
                                null,
                                _react2.default.createElement(
                                    'small',
                                    null,
                                    'Save type'
                                )
                            ),
                            _react2.default.createElement(
                                'th',
                                null,
                                _react2.default.createElement(
                                    'small',
                                    null,
                                    'Prep'
                                )
                            ),
                            _react2.default.createElement(
                                'th',
                                null,
                                _react2.default.createElement(
                                    'small',
                                    null,
                                    'Used'
                                )
                            ),
                            _react2.default.createElement(
                                'th',
                                { className: 'spell-name' },
                                _react2.default.createElement(
                                    'small',
                                    null,
                                    'Spell name & description & ref'
                                )
                            ),
                            _react2.default.createElement(
                                'th',
                                null,
                                _react2.default.createElement(
                                    'small',
                                    null,
                                    'School'
                                )
                            ),
                            _react2.default.createElement(
                                'th',
                                null,
                                _react2.default.createElement(
                                    'small',
                                    null,
                                    'Duration'
                                )
                            ),
                            _react2.default.createElement(
                                'th',
                                null,
                                _react2.default.createElement(
                                    'small',
                                    null,
                                    'Range'
                                )
                            )
                        )
                    ),
                    _react2.default.createElement(
                        'tbody',
                        null,
                        spellTableRows
                    )
                )
            )
        )
    );
}

var AddfieldsNavbar = (0, _recompose.compose)((0, _recompose.onlyUpdateForKeys)(['md', 'debug', 'react_perf']), _recompose.pure)(AddfieldsNavbarImpl);
function AddfieldsNavbarImpl(props) {
    function clearTemp(e) {
        console.log('clearTemp');
    }
    function clearTempSubdual(e) {
        clearTemp(e);
        console.log('clearSubdual');
    }
    function clearUses(e) {
        console.log('clearUses');
    }
    function clearUsesDamage(e) {
        clearUses(e);
        console.log('clearDamage');
    }
    return _react2.default.createElement(
        _reactBootstrap.Navbar,
        { fluid: true },
        _react2.default.createElement(
            _reactBootstrap.Navbar.Header,
            null,
            _react2.default.createElement(
                _reactBootstrap.Navbar.Brand,
                null,
                "Version: " + props.getState(['md', 'rev'], 0)
            ),
            _react2.default.createElement(_reactBootstrap.Navbar.Toggle, null)
        ),
        _react2.default.createElement(
            _reactBootstrap.Navbar.Collapse,
            null,
            _react2.default.createElement(
                _reactBootstrap.Navbar.Text,
                null,
                "last change at: " + props.getState(['md', 'prevChangeTime'], 'N/A')
            ),
            _react2.default.createElement(
                _reactBootstrap.Nav,
                null,
                _react2.default.createElement(
                    _reactBootstrap.NavDropdown,
                    { title: 'TODO: Clear...', className: 'hidden' },
                    _react2.default.createElement(
                        _reactBootstrap.MenuItem,
                        { onSelect: clearTemp },
                        'Temporary bonuses'
                    ),
                    _react2.default.createElement(
                        _reactBootstrap.MenuItem,
                        { onSelect: clearTempSubdual },
                        'Temporary bonuses and subdual damage'
                    ),
                    _react2.default.createElement(
                        _reactBootstrap.MenuItem,
                        { onSelect: clearUses },
                        'Uses per day'
                    ),
                    _react2.default.createElement(
                        _reactBootstrap.MenuItem,
                        { onSelect: clearUsesDamage },
                        'Uses per day and all damage'
                    )
                )
            ),
            _react2.default.createElement(
                _reactBootstrap.Nav,
                null,
                _react2.default.createElement(
                    _reactBootstrap.NavDropdown,
                    { title: 'Add fields for...' },
                    _react2.default.createElement(
                        _reactBootstrap.MenuItem,
                        { onSelect: props.handleChange(['rage'], Object) },
                        'Rage'
                    ),
                    _react2.default.createElement(
                        _reactBootstrap.MenuItem,
                        { onSelect: props.handleChange([SPELLCASTERS.find(function (x) {
                                return !props[x];
                            })], Object) },
                        'Spellcaster class and spell list'
                    ),
                    _react2.default.createElement(
                        _reactBootstrap.MenuItem,
                        { className: 'hidden' },
                        'TODO:Spell like ability list'
                    )
                )
            ),
            _react2.default.createElement(
                _reactBootstrap.Nav,
                { pullRight: true },
                _react2.default.createElement(
                    _reactBootstrap.NavDropdown,
                    { pullRight: true, title: _react2.default.createElement(
                            'small',
                            null,
                            'Debug'
                        ) },
                    _react2.default.createElement(
                        _reactBootstrap.MenuItem,
                        { onSelect: props.handleChange(['debug'], invert) },
                        _react2.default.createElement(
                            _reactBootstrap.Checkbox,
                            { checked: props.getState(['debug'], false) },
                            'console debug'
                        )
                    ),
                    _react2.default.createElement(
                        _reactBootstrap.MenuItem,
                        { onSelect: props.handleChange(['react_perf'], invert) },
                        _react2.default.createElement(
                            _reactBootstrap.Checkbox,
                            { checked: props.getState(['react_perf'], false) },
                            'react_perf'
                        )
                    )
                )
            )
        )
    );
}

function LoadTable(props) {
    var loadLevels = props.getLoadLevels();
    var currentLoad = props.getCurrentLoad();
    function fullLoadClass(loadLevel) {
        var levels = [-1].concat(loadLevels);
        if (currentLoad > levels[3] && loadLevel < 3) return "danger";
        return levels[loadLevel] < currentLoad && currentLoad <= levels[loadLevel + 1] ? "info" : "";
    }
    var armedLoadName = props.getArmedLoadName();
    function loadClass(loadName) {
        return armedLoadName == loadName ? "success" : "";
    }
    function armorClass(armorLevel) {
        return ARMOR_TYPES[armorLevel] == props.getState('armor.type') ? "success" : "";
    }
    return _react2.default.createElement(
        _reactBootstrap.Table,
        { condensed: true, className: 'load-table small' },
        _react2.default.createElement(
            'thead',
            null,
            _react2.default.createElement(
                'tr',
                null,
                _react2.default.createElement(
                    'th',
                    null,
                    'Encumberance'
                ),
                _react2.default.createElement(
                    'td',
                    null,
                    'Light'
                ),
                _react2.default.createElement(
                    'td',
                    null,
                    'Medium'
                ),
                _react2.default.createElement(
                    'td',
                    null,
                    'Heavy'
                ),
                _react2.default.createElement(
                    'td',
                    null,
                    'Lift'
                ),
                _react2.default.createElement(
                    'td',
                    null,
                    'Drag'
                )
            )
        ),
        _react2.default.createElement(
            'tbody',
            null,
            _react2.default.createElement(
                'tr',
                null,
                _react2.default.createElement(
                    'th',
                    { className: 'active' },
                    'Current load: ',
                    _react2.default.createElement(
                        'strong',
                        null,
                        currentLoad
                    )
                ),
                _react2.default.createElement(
                    'td',
                    { className: fullLoadClass(0) },
                    loadLevels[0]
                ),
                _react2.default.createElement(
                    'td',
                    { className: fullLoadClass(1) },
                    loadLevels[1]
                ),
                _react2.default.createElement(
                    'td',
                    { className: fullLoadClass(2) },
                    loadLevels[2]
                ),
                _react2.default.createElement(
                    'td',
                    { className: fullLoadClass(3) },
                    loadLevels[2] * 2
                ),
                _react2.default.createElement(
                    'td',
                    { className: fullLoadClass(4) },
                    loadLevels[2] * 5
                )
            ),
            _react2.default.createElement(
                'tr',
                null,
                _react2.default.createElement(
                    'th',
                    { className: 'active' },
                    'a&a load: ',
                    _react2.default.createElement(
                        'strong',
                        null,
                        props.getArmedLoad()
                    )
                ),
                _react2.default.createElement(
                    'td',
                    { className: loadClass('light') },
                    loadLevels[0]
                ),
                _react2.default.createElement(
                    'td',
                    { className: loadClass('medium') },
                    loadLevels[1]
                ),
                _react2.default.createElement(
                    'td',
                    { className: loadClass('heavy') },
                    loadLevels[2]
                ),
                _react2.default.createElement(
                    'td',
                    { className: loadClass('lift') },
                    loadLevels[2] * 2
                ),
                _react2.default.createElement(
                    'td',
                    { className: loadClass('drag') },
                    loadLevels[2] * 5
                )
            ),
            _react2.default.createElement(
                'tr',
                null,
                _react2.default.createElement(
                    'th',
                    { className: 'active' },
                    'Max DEX to AC'
                ),
                _react2.default.createElement(
                    'td',
                    { className: loadClass('light') },
                    '-'
                ),
                _react2.default.createElement(
                    'td',
                    { className: loadClass('medium') },
                    _react2.default.createElement(TextField, _extends({}, props, { propKey: ['load', 'medium', 'max-dex'],
                        placeholder: '3', className: 'width-2-digit' }))
                ),
                _react2.default.createElement(
                    'td',
                    { className: loadClass('heavy') },
                    _react2.default.createElement(TextField, _extends({}, props, { propKey: ['load', 'heavy', 'max-dex'],
                        placeholder: '1', className: 'width-2-digit' }))
                ),
                _react2.default.createElement(
                    'td',
                    null,
                    _react2.default.createElement(TextField, _extends({}, props, { propKey: ['load', 'stagger', 'max-dex'],
                        placeholder: '0', className: 'width-2-digit' }))
                )
            ),
            _react2.default.createElement(
                'tr',
                null,
                _react2.default.createElement(
                    'th',
                    { className: 'active' },
                    'Skill check penalty'
                ),
                _react2.default.createElement(
                    'td',
                    { className: loadClass('light') },
                    '0'
                ),
                _react2.default.createElement(
                    'td',
                    { className: loadClass('medium') },
                    _react2.default.createElement(TextField, _extends({}, props, { propKey: ['load', 'medium', 'skill-penalty'],
                        placeholder: '3', className: 'width-2-digit' }))
                ),
                _react2.default.createElement(
                    'td',
                    { className: loadClass('heavy') },
                    _react2.default.createElement(TextField, _extends({}, props, { propKey: ['load', 'heavy', 'skill-penalty'],
                        placeholder: '6', className: 'width-2-digit' }))
                ),
                _react2.default.createElement('td', null)
            ),
            _react2.default.createElement(
                'tr',
                null,
                _react2.default.createElement(
                    'th',
                    { className: 'active' },
                    'Base speed (run)'
                ),
                _react2.default.createElement(
                    'td',
                    { className: loadClass('light') },
                    _react2.default.createElement(TextField, _extends({}, props, { propKey: ['load', 'light', 'base-speed'],
                        className: 'width-5em' }))
                ),
                _react2.default.createElement(
                    'td',
                    { className: loadClass('medium') },
                    _react2.default.createElement(TextField, _extends({}, props, { propKey: ['load', 'medium', 'base-speed'],
                        className: 'width-5em' }))
                ),
                _react2.default.createElement(
                    'td',
                    { className: loadClass('heavy') },
                    _react2.default.createElement(TextField, _extends({}, props, { propKey: ['load', 'heavy', 'base-speed'],
                        className: 'width-5em' }))
                ),
                _react2.default.createElement(
                    'td',
                    { className: loadClass('lift') },
                    props.getValue(['load', 'lift', 'base-speed'])
                )
            ),
            _react2.default.createElement(
                'tr',
                null,
                _react2.default.createElement(
                    'th',
                    { className: 'active' },
                    'Speed with armor (run)'
                ),
                _react2.default.createElement(
                    'td',
                    { className: armorClass(0) },
                    props.getValue('load.light.base-speed')
                ),
                _react2.default.createElement(
                    'td',
                    { className: armorClass(1) },
                    _react2.default.createElement(TextField, _extends({}, props, { propKey: ['armor', 'medium', 'base-speed'],
                        className: 'width-5em' }))
                ),
                _react2.default.createElement(
                    'td',
                    { className: armorClass(2) },
                    _react2.default.createElement(TextField, _extends({}, props, { propKey: ['armor', 'heavy', 'base-speed'],
                        className: 'width-5em' }))
                )
            )
        )
    );
}

function invert(v) {
    return !!v ? undefined : true;
}

_reactDom2.default.render(_react2.default.createElement(App, null), document.getElementById('root'));

/***/ }),

/***/ 316:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.Speed = Speed;
function Speed(base, run) {
    this.base = base;
    this.run = run;
}
Speed.prototype.toString = function () {
    return this.base + " (x" + this.run + ")";
};
Speed.parse = function (speed) {
    if (speed instanceof Speed) return speed;
    return new Speed(Number((speed + ' ').split(/[ (x)\/]+/)[0]), Number((speed + ' ').split(/[ (x)]+/)[1] || 4));
};
Speed.modifyBase = function (speedArg, multiplier) {
    var speed = Speed.parse(speedArg);
    return new Speed(Math.ceil(speed.base / 5 * multiplier) * 5, speed.run);
};
Speed.reduceBase = function (speedArg) {
    return Speed.modifyBase(speedArg, 2 / 3);
};
Speed.halfBase = function (speedArg) {
    return Speed.modifyBase(speedArg, 1 / 2);
};
Speed.reduceRun = function (speedArg) {
    var speed = Speed.parse(speedArg);
    return new Speed(speed.base, speed.run - 1);
};
Speed.min = function (s1, s2) {
    return Speed.parse(s1).base <= Speed.parse(s2).base ? s1 : s2;
};

/***/ }),

/***/ 734:
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(207);
module.exports = __webpack_require__(315);


/***/ })

},[734]);