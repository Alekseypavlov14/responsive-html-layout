// styles 
const styles = require.context(
    './styles',
    true, 
    /\.(sc|sa|c)ss$/
)
styles.keys().map(styles)

// scripts
const scripts = require.context(
    './scripts',
    true,
    /\.js$/
)
scripts.keys().map(scripts)