"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppConfigModule = void 0;
const common_1 = require("@nestjs/common");
const config_1 = require("@nestjs/config");
const Joi = require("joi");
const configuration_1 = require("./configuration");
let AppConfigModule = class AppConfigModule {
};
exports.AppConfigModule = AppConfigModule;
exports.AppConfigModule = AppConfigModule = __decorate([
    (0, common_1.Module)({
        imports: [
            config_1.ConfigModule.forRoot({
                isGlobal: true,
                load: [configuration_1.default],
                validationSchema: Joi.object({
                    PORT: Joi.number().default(3001),
                    NODE_ENV: Joi.string()
                        .valid('development', 'production', 'test')
                        .default('development'),
                    DATABASE_HOST: Joi.string().default('localhost'),
                    DATABASE_PORT: Joi.number().default(5432),
                    DATABASE_USER: Joi.string().required(),
                    DATABASE_PASSWORD: Joi.string().allow('').required(),
                    DATABASE_NAME: Joi.string().required(),
                    JWT_SECRET: Joi.string().min(16).required(),
                    JWT_EXPIRES_IN: Joi.string().default('15m'),
                    JWT_REFRESH_SECRET: Joi.string().min(16).required(),
                    JWT_REFRESH_EXPIRES_IN: Joi.string().default('7d'),
                    ANTHROPIC_API_KEY: Joi.string().allow('').default(''),
                    CLIENT_URL: Joi.string().default('http://localhost:3000'),
                }),
                validationOptions: { allowUnknown: true },
            }),
        ],
    })
], AppConfigModule);
//# sourceMappingURL=config.module.js.map