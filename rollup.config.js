import babel from 'rollup-plugin-babel';

export default {
    input: './src/index.js',
    output: {
        file: './build/bundle.min.js',
        format: 'iife',
        name: 'bundle'
    },
    plugins: [
        babel({
            exclude: 'node_modules/**'
        })
    ]
}