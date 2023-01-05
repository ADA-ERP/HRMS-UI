module.exports = {
  module: { rules: [{
    test: /\.less$/,
    use: [
        {
            loader: "less-loader",
            options: {
                lessOptions: {
                  modifyVars: { // modify theme variable
                    'primary-color': '#3A4F7A',
                    'link-color': '#3A4F7A',
                    'border-radius-base': '2px',
                    
                  },
                    javascriptEnabled: true,
                }
            }
        }
    ]
}]}
  // module: {
  //   rules: [
  //     {
  //       test   : /\.less$/,
  //       loader: 'less-loader',
  //       options: {
  //         modifyVars: { // modify theme variable
  //           'primary-color': '#3A4F7A',
  //           'link-color': '#3A4F7A',
  //           'border-radius-base': '2px'
  //         },
  //         lessOptions: {
  //           javascriptEnabled: true,
  //       }
  //       }
  //     }
  //   ]
  // }
};
