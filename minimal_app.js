"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
const Index = __importStar(require("./routes/index"));
const Login = __importStar(require("./routes/login"));
const path = __importStar(require("path"));
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');
const body_parser_1 = __importDefault(require("body-parser"));
app.use(body_parser_1.default.json());
app.use(body_parser_1.default.urlencoded({ extended: false }));
const express_session_1 = __importDefault(require("express-session"));
app.use((0, express_session_1.default)({
    secret: 'asdfghjkl',
    resave: false,
    saveUninitialized: true,
}));
app.use('/', Index.router);
app.use('/', Login.router);
const config_1 = __importDefault(require("config"));
var ConfigOptions;
(function (ConfigOptions) {
    ConfigOptions["PORT"] = "port";
})(ConfigOptions || (ConfigOptions = {}));
let port = 3000;
if (config_1.default.has(ConfigOptions.PORT)) {
    port = config_1.default.get(ConfigOptions.PORT);
}
else {
    console.log(`no port config found, using default port ${port}`);
}
app.use(express_1.default.static(path.join(__dirname, 'resources')));
app.listen(port, () => {
    console.log(`listening on port ${port}`);
});
