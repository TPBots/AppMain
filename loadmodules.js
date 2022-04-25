module.exports = function loadmodules(pkgJSON, modules) {
    let dependencies = pkgJSON.dependencies;
    Object
        .keys(dependencies)
        .forEach((packagename) => {
            modules[packagename] = require(packagename);
        });
}