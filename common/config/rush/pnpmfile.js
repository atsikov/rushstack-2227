function readPackage(packageJson, context) {
  // if (packageJson.name === '@storybook/react') {
  //   context.log('Lock webpack dependency to reproduce update error')
  //   return {
  //     ...packageJson,
  //     dependencies: {
  //       ...packageJson.dependencies,
  //       webpack: '4.44.1',
  //     },
  //   }
  // }

  return packageJson
}

module.exports = {
  hooks: {
    readPackage,
  },
}
