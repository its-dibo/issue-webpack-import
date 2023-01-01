import { Configuration } from 'webpack';

let defaultConfig: Configuration = {
  mode: 'development',
  target: 'node',
  resolve: {
    extensions: ['.tsx', '.ts', '.jsx', '.js'],
    symlinks: false,
  },

  output: {   
    filename: `[name].js`,
    library: {
      type: 'commonjs2',
    },
    clean: true,
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loader: 'ts-loader',
        options: {
          compilerOptions: {
            sourceMap: false,
          },
          onlyCompileBundledFiles: true,
        },
      },
  

    ],
  },

};
export default defaultConfig;
