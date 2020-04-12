module.exports = {
    "extends": "standard",
    "rules": {
        "quotes": [
            "error",
            "single",
            { "avoidEscape": true, "allowTemplateLiterals": false }
        ],
        "semi": [2, "always"],
        "comma-dangle": ["error", {
            "arrays": "always-multiline",
            "objects": "always-multiline",
        }]
    }
};