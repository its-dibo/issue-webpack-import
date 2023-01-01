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
      type: 'module',
    },
    clean: false,
    libraryTarget:"module",
    chunkFormat:"module",
    module:true
  },
  experiments:{
    outputModule:true,
    topLevelAwait:true,
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
  },node:{
    __dirname:true,
    __filename:true
  }

};
export default defaultConfig;




