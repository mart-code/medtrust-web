declare const _default: () => {
    port: number;
    nodeEnv: string;
    clientUrl: string;
    database: {
        host: string;
        port: number;
        user: string;
        password: string;
        name: string;
    };
    jwt: {
        secret: string;
        expiresIn: string;
        refreshSecret: string;
        refreshExpiresIn: string;
    };
    anthropic: {
        apiKey: string;
    };
    upload: {
        dest: string;
        maxFileSizeMb: number;
    };
    aws: {
        region: string;
        accessKeyId: string;
        secretAccessKey: string;
        s3Bucket: string;
    };
    mail: {
        host: string;
        port: number;
        user: string;
        password: string;
        from: string;
    };
};
export default _default;
