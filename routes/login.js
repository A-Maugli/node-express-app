"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
const express_1 = __importDefault(require("express"));
let router = express_1.default.Router();
exports.router = router;
router.get('/login', (req, res) => {
    res.render('login', {
        title: 'Express Login'
    });
});
router.post(`/login`, (req, res, next) => {
    var _a;
    console.log(`req.body.username : ${req.body.username}`);
    if (((_a = req.body.username) === null || _a === void 0 ? void 0 : _a.length) > 0) {
        console.log(`found body.name`);
        req.session.username =
            req.body.username;
        res.redirect(`/`);
    }
    else {
        res.render(`login`, {
            title: `Express Login`,
            errorMessage: `Please enter a username and password`
        });
    }
});
