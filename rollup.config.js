import path from 'path'
import glob from 'glob'
import babel from 'rollup-plugin-babel'
import uglify from 'rollup-plugin-uglify'
import filesize from 'rollup-plugin-filesize'
import { minify } from 'uglify-es'
import { capitalize, get } from 'lodash'

// Read all public packages.
const pkgs = glob
  .sync(path.join(__dirname, './packages/*/package.json'))
  .map(pkg => ({
    filepath: pkg,
    source: require(pkg)
  }))
  .filter(pkg => get(pkg.source, 'publishConfig.access') === 'public')

// Export configuration for each package.
export default pkgs.map(pkg => {
  const dirpath = path.dirname(pkg.filepath)
  const input = path.join(dirpath, './src/index.js')
  const name = path.basename(path.dirname(dirpath))

  return {
    input,
    output: [
      // Browser config.
      {
        name: `ReactSpectre.${capitalize(name)}`,
        file: path.join(dirpath, pkg.source.browser),
        format: 'umd',
        sourcemap: true,
        globals: {
          react: 'React',
          'prop-types': 'PropTypes',
          classnames: 'classnames'
        }
      },
      // Commonjs module config.
      {
        file: path.join(dirpath, pkg.source.main),
        format: 'cjs',
        sourcemap: true
      },
      // ES module config.
      {
        file: path.join(dirpath, pkg.source.module),
        format: 'es',
        sourcemap: true
      }
    ],
    external: ['react', 'prop-types', 'classnames'],
    plugins: [babel(), uglify({}, minify), filesize()]
  }
})
