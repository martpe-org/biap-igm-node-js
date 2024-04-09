module.exports = {
    apps : [{
        name   : "martpe-igm-api",
        script : "npm run start:dev",
        instances: 1,
        max_memory_restart: '300M',
        env_production: {
            NODE_ENV: "production"
        },
        env_development: {
            NODE_ENV: "development"
        },
        // exec_mode : "cluster"
    }]
}