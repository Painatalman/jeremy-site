const TYPE_ERROR = 2;

/** @type {import('@commitlint/types').UserConfig} */
export default {
  extends: ["@commitlint/config-conventional"],
  rules: {
    "type-enum": [TYPE_ERROR, "always", ["chore", "feat", "fix", "docs"]],
  },
};
