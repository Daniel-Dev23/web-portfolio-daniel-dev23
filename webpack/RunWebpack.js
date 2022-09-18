const Entry        = require("./properties/Entry");
const Output       = require("./properties/Output");
const Plugins      = require("./properties/Plugins");
const Rules        = require("./properties/Rules");
const DevServer    = require('./properties/DevServer');
const Optimization = require('./properties/Optimization');

const RunWebpack = ( mainConfig ) => {

    console.log('✔ Running loaders and Webpack plugins...\n');

    const isProduction = ( mainConfig.mode === 'production' ) ? true : false;

    return {
        entry: Entry( mainConfig ),
        output: Output( mainConfig, isProduction ),
        module: Rules( isProduction ),
        plugins: Plugins( isProduction ),
        devServer: ( isProduction ) ? {} : DevServer(),
        optimization: ( isProduction ) ? Optimization() : {}
    };
    
}

module.exports = RunWebpack;