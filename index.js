module.exports = function(packageName, {registry = '', timeout = null} = {}) {

    try {

        let version;

        if (registry) {

            if (timeout) {
                version = require('child_process').execSync(`npm view ${packageName} version --registry ${registry}`, {
                    timeout: timeout
                });
            } else {
                version = require('child_process').execSync(`npm view ${packageName} version --registry ${registry}`);
            }

        } else {

            if (timeout) {
                version = require('child_process').execSync(`npm view ${packageName} version`, {
                    timeout: timeout
                });
            } else {
                version = require('child_process').execSync(`npm view ${packageName} version`);
            }

        }

        return version.toString().trim().replace(/^\n*/, '').replace(/\n*$/, '');

    } catch(err) {
        return null;
    }

}
