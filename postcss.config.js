import postcssImport from 'postcss-import';
import postcssPresetEnv from 'postcss-preset-env';
import postcssNested from 'postcss-nested';
import autoprefixer from 'autoprefixer';

export default {
	plugins: [
		postcssImport,
		postcssPresetEnv({
			stage: 1,
		}),
		postcssNested,
		autoprefixer,
	],
};
