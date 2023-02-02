export default {
	rootDir: '.',
	roots: ['<rootDir>/src', '<rootDir>/test'],
	testMatch: ['**/test/**/*.spec.{ts,tsx}'],
	collectCoverage: true,
	collectCoverageFrom: ['src/**/*.{js,jsx,ts,tsx}', '!src/**/*.d.ts'],
	coverageThreshold: {
		global: {
			branches: 60,
			functions: 60,
			lines: 60,
			statements: 60,
		},
	},
	coveragePathIgnorePatterns: [
		'./node_modules/',
		'./test/',
		'./debug',
		'./build',
	],
	coverageReporters: ['json-summary', 'text', 'lcov'],
	transform: {
		'^.+\\.tsx?$': [
			'ts-jest',
			{
				diagnostics: false,
				tsconfig: 'tsconfig.json',
				isolatedModules: false,
			},
		],
	},
	preset: 'ts-jest',
	transformIgnorePatterns: ['<rootDir>/node_modules/'],
	testEnvironment: 'jsdom',
	moduleFileExtensions: ['ts', 'tsx', 'js'],
	moduleNameMapper: {
		'@root/(.*)': '<rootDir>/src/$1',
		'@test/(.*)': '<rootDir>/test/$1',
		'\\.(scss|sass|css)$': 'identity-obj-proxy',
	},
	extensionsToTreatAsEsm: ['.ts', '.tsx'],
	moduleDirectories: ['node_modules', '<rootDir>/src'],
	setupFilesAfterEnv: ['<rootDir>/test/setup.ts'],
};
