module.exports = {
  extends: ['@commitlint/config-conventional'],
  rules: {
    'type-enum': [
      2,
      'always',
      [
        'feat', // new features
        'fix', // bug fixes
        'chore', // tooling, infra
        'docs', // documentation
        'refactor', // code improvements (no feature/bug)
        'test', // adding tests
        'style', // formatting, missing semicolons, etc.
        'ci', // CI/CD related
        'perf', // performance improvements
      ],
    ],
  },
}
