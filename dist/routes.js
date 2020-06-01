"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.helloWorld = void 0;
var createUser_1 = __importDefault(require("./services/createUser"));
function helloWorld(req, res) {
    var user = createUser_1.default({
        email: 'sammuel@email.com.br',
        password: '123456',
        techs: [
            'Node.js',
            'ReactJS',
            'React Native',
            { title: 'JavaScript', experience: 100 }
        ]
    });
    return res.json({ message: 'Hello World' });
}
exports.helloWorld = helloWorld;
