module.exports = {
    "extends": "standard",
    "rules": {
        "max-len": [2, 80, 4],
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